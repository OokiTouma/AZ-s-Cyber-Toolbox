const PASSWORD = '2333';

class DMAssistantApp {
    constructor() {
        this.notifications = new NotificationManager();
        this.storage = new StorageManager();
        this.adventures = Array.isArray(window.ADVENTURES) ? window.ADVENTURES : [];
        this.data = window.DM_ASSISTANT_DATA || { generators: {}, rulesReference: [], timerPresets: [5] };

        this.state = {
            selectedAdventureId: '',
            currentChapterId: '',
            currentSceneId: '',
            completedSceneIds: [],
            activeTab: 'story',
            lastSavedAt: null
        };

        this.isUnlocked = sessionStorage.getItem('dmAssistantUnlocked') === 'true';
        this.sceneNotes = {};
        this.legacyNotes = '';
        this.narrationOverrides = {};
        this.narrationLocks = {};
        this.players = [];
        this.activeRuleId = this.data.rulesReference?.[0]?.id || '';
        this.timer = {
            duration: 300,
            remaining: 300,
            running: false,
            endTime: null
        };
        this.timerInterval = null;
        this.noteSaveTimer = null;
        this.narrationSaveTimer = null;
        this.speechUtterance = null;
        this.elements = {};

        this.init();
    }

    init() {
        this.cacheElements();
        this.loadPersistedData();

        if (!this.adventures.length) {
            this.renderFatalState('未找到可用剧本数据，请检查 adventures 目录。');
            return;
        }

        this.ensureValidState();
        this.restoreTimerState();
        this.bindEvents();
        this.recordToolUsage();
        this.render();
        this.applyPasswordState();
    }

    cacheElements() {
        this.elements.adventureSelect = document.getElementById('adventureSelect');
        this.elements.adventureDescription = document.getElementById('adventureDescription');
        this.elements.adventureLevelBadge = document.getElementById('adventureLevelBadge');
        this.elements.completedScenesCount = document.getElementById('completedScenesCount');
        this.elements.chapterProgressText = document.getElementById('chapterProgressText');
        this.elements.progressPercent = document.getElementById('progressPercent');
        this.elements.sceneJumpSelect = document.getElementById('sceneJumpSelect');
        this.elements.chapterList = document.getElementById('chapterList');
        this.elements.sceneBreadcrumb = document.getElementById('sceneBreadcrumb');
        this.elements.sceneTitle = document.getElementById('sceneTitle');
        this.elements.sceneSummaryLead = document.getElementById('sceneSummaryLead');
        this.elements.sceneMeta = document.getElementById('sceneMeta');
        this.elements.prevSceneButton = document.getElementById('prevSceneButton');
        this.elements.nextSceneButton = document.getElementById('nextSceneButton');
        this.elements.markCompleteButton = document.getElementById('markCompleteButton');
        this.elements.contentTabs = document.getElementById('contentTabs');
        this.elements.tabContent = document.getElementById('tabContent');
        this.elements.encounterSummary = document.getElementById('encounterSummary');
        this.elements.atmosphereContent = document.getElementById('atmosphereContent');
        this.elements.copyNarrationButton = document.getElementById('copyNarrationButton');
        this.elements.speakNarrationButton = document.getElementById('speakNarrationButton');
        this.elements.pushEncounterButton = document.getElementById('pushEncounterButton');
        this.elements.generatorType = document.getElementById('generatorType');
        this.elements.generateButton = document.getElementById('generateButton');
        this.elements.generatorOutput = document.getElementById('generatorOutput');
        this.elements.rulesReference = document.getElementById('rulesReference');
        this.elements.dmNotesTextarea = document.getElementById('dmNotesTextarea');
        this.elements.dmNotesSceneLabel = document.getElementById('dmNotesSceneLabel');
        this.elements.timerDisplay = document.getElementById('timerDisplay');
        this.elements.timerPresets = document.getElementById('timerPresets');
        this.elements.startTimerButton = document.getElementById('startTimerButton');
        this.elements.pauseTimerButton = document.getElementById('pauseTimerButton');
        this.elements.resetTimerButton = document.getElementById('resetTimerButton');
        this.elements.playerForm = document.getElementById('playerForm');
        this.elements.playerName = document.getElementById('playerName');
        this.elements.playerHP = document.getElementById('playerHP');
        this.elements.playerAC = document.getElementById('playerAC');
        this.elements.playerPassive = document.getElementById('playerPassive');
        this.elements.playerList = document.getElementById('playerList');
        this.elements.autoSaveStatus = document.getElementById('autoSaveStatus');
        this.elements.resetProgressButton = document.getElementById('resetProgressButton');
        this.elements.transferModal = document.getElementById('transferModal');
        this.elements.transferSceneTitle = document.getElementById('transferSceneTitle');
        this.elements.transferAutoInitiative = document.getElementById('transferAutoInitiative');
        this.elements.transferPlayerSlots = document.getElementById('transferPlayerSlots');
        this.elements.transferNewTab = document.getElementById('transferNewTab');
        this.elements.closeTransferModalButton = document.getElementById('closeTransferModalButton');
        this.elements.cancelTransferButton = document.getElementById('cancelTransferButton');
        this.elements.confirmTransferButton = document.getElementById('confirmTransferButton');
        this.elements.passwordOverlay = document.getElementById('passwordOverlay');
        this.elements.passwordInput = document.getElementById('passwordInput');
        this.elements.passwordError = document.getElementById('passwordError');
        this.elements.unlockButton = document.getElementById('unlockButton');
    }

    loadPersistedData() {
        const savedState = StorageManager.load('dmAssistantState');
        const savedNotes = StorageManager.load('dmAssistantNotes');
        const savedNarrationOverrides = StorageManager.load('dmAssistantNarrationOverrides');
        const savedNarrationLocks = StorageManager.load('dmAssistantNarrationLocks');
        const savedPlayers = StorageManager.load('dmAssistantPlayers');
        const savedTimer = StorageManager.load('dmAssistantTimer');

        if (savedState) {
            this.state = {
                ...this.state,
                ...savedState
            };
        }

        this.sceneNotes = savedNotes && typeof savedNotes === 'object' && !Array.isArray(savedNotes)
            ? savedNotes
            : {};
        this.legacyNotes = typeof savedNotes === 'string' ? savedNotes : '';
        this.narrationOverrides = savedNarrationOverrides && typeof savedNarrationOverrides === 'object'
            ? savedNarrationOverrides
            : {};
        this.narrationLocks = savedNarrationLocks && typeof savedNarrationLocks === 'object'
            ? savedNarrationLocks
            : {};
        this.players = Array.isArray(savedPlayers) ? savedPlayers : [...(this.data.defaultPlayers || [])];

        if (savedTimer) {
            this.timer = {
                ...this.timer,
                ...savedTimer
            };
        }
    }

    ensureValidState() {
        const adventure = this.getAdventureById(this.state.selectedAdventureId) || this.adventures[0];
        const chapter = this.getChapterById(this.state.currentChapterId, adventure) || adventure.chapters[0];
        const scene = this.getSceneById(this.state.currentSceneId, adventure) || chapter.scenes[0];

        this.state.selectedAdventureId = adventure.id;
        this.state.currentChapterId = chapter.id;
        this.state.currentSceneId = scene.id;
        this.state.completedSceneIds = Array.isArray(this.state.completedSceneIds)
            ? this.state.completedSceneIds.filter(sceneId => this.getSceneById(sceneId, adventure))
            : [];

        if (!['story', 'dm', 'combat'].includes(this.state.activeTab)) {
            this.state.activeTab = 'story';
        }
    }

    restoreTimerState() {
        if (!this.timer.endTime || !this.timer.running) {
            this.timer.running = false;
            this.timer.endTime = null;
            return;
        }

        const remaining = Math.max(0, Math.ceil((this.timer.endTime - Date.now()) / 1000));
        this.timer.remaining = remaining;

        if (remaining > 0) {
            this.startTimerInterval();
        } else {
            this.finishTimer(true);
        }
    }

    bindEvents() {
        this.elements.adventureSelect?.addEventListener('change', (event) => {
            this.selectAdventure(event.target.value);
        });

        this.elements.sceneJumpSelect?.addEventListener('change', (event) => {
            if (event.target.value) {
                this.goToScene(event.target.value, { showNotification: false });
            }
        });

        this.elements.prevSceneButton?.addEventListener('click', () => this.goToPreviousScene());
        this.elements.nextSceneButton?.addEventListener('click', () => this.goToNextScene());
        this.elements.markCompleteButton?.addEventListener('click', () => this.toggleCurrentSceneComplete());
        this.elements.copyNarrationButton?.addEventListener('click', () => this.copyCurrentNarration());
        this.elements.speakNarrationButton?.addEventListener('click', () => this.toggleNarrationSpeech());
        this.elements.pushEncounterButton?.addEventListener('click', () => this.openTransferModal());
        this.elements.generateButton?.addEventListener('click', () => this.generateRandomContent());
        this.elements.startTimerButton?.addEventListener('click', () => this.startTimer());
        this.elements.pauseTimerButton?.addEventListener('click', () => this.pauseTimer());
        this.elements.resetTimerButton?.addEventListener('click', () => this.resetTimer());
        this.elements.resetProgressButton?.addEventListener('click', () => this.resetProgress());
        this.elements.unlockButton?.addEventListener('click', () => this.checkPassword());
        this.elements.closeTransferModalButton?.addEventListener('click', () => this.closeTransferModal());
        this.elements.cancelTransferButton?.addEventListener('click', () => this.closeTransferModal());
        this.elements.confirmTransferButton?.addEventListener('click', () => this.pushEncounterToCombatTracker());

        this.elements.dmNotesTextarea?.addEventListener('input', (event) => {
            const sceneKey = event.target.dataset.sceneKey || this.getCurrentSceneStorageKey();
            this.sceneNotes[sceneKey] = event.target.value;
            clearTimeout(this.noteSaveTimer);
            this.noteSaveTimer = setTimeout(() => {
                this.saveNotes(sceneKey);
            }, 250);
        });

        this.elements.playerForm?.addEventListener('submit', (event) => this.addPlayer(event));

        this.elements.playerList?.addEventListener('click', (event) => {
            const target = event.target.closest('[data-action]');
            if (!target) return;

            if (target.dataset.action === 'remove-player') {
                this.removePlayer(target.dataset.id);
            }
        });

        this.elements.playerList?.addEventListener('input', (event) => {
            const field = event.target.closest('.player-field');
            if (!field) return;
            this.updatePlayerField(field.dataset.id, field.dataset.field, field.value, field);
        });

        this.elements.chapterList?.addEventListener('click', (event) => {
            const sceneButton = event.target.closest('[data-scene-id]');
            if (sceneButton) {
                this.goToScene(sceneButton.dataset.sceneId, { showNotification: false });
                return;
            }

            const chapterButton = event.target.closest('[data-chapter-id]');
            if (chapterButton) {
                this.goToChapter(chapterButton.dataset.chapterId);
            }
        });

        this.elements.contentTabs?.addEventListener('click', (event) => {
            const tabButton = event.target.closest('[data-tab]');
            if (!tabButton) return;
            this.state.activeTab = tabButton.dataset.tab;
            this.saveState();
            this.renderTabs();
            this.renderTabContent(this.getCurrentContext());
        });

        this.elements.tabContent?.addEventListener('input', (event) => {
            const narrationEditor = event.target.closest('#narrationEditor');
            if (!narrationEditor) return;

            const sceneKey = narrationEditor.dataset.sceneKey;
            const text = narrationEditor.value;

            clearTimeout(this.narrationSaveTimer);
            this.narrationSaveTimer = setTimeout(() => {
                this.saveNarrationOverride(sceneKey, text);
            }, 250);
        });

        this.elements.tabContent?.addEventListener('click', (event) => {
            const lockButton = event.target.closest('[data-action="toggle-narration-lock"]');
            if (lockButton) {
                this.toggleNarrationLock(lockButton.dataset.sceneKey);
                return;
            }

            const resetButton = event.target.closest('[data-action="reset-narration"]');
            if (!resetButton) return;

            this.resetNarrationOverride(resetButton.dataset.sceneKey);
        });

        this.elements.rulesReference?.addEventListener('click', (event) => {
            const button = event.target.closest('[data-rule-id]');
            if (!button) return;
            const ruleId = button.dataset.ruleId;
            this.activeRuleId = this.activeRuleId === ruleId ? '' : ruleId;
            this.renderRules();
        });

        this.elements.timerPresets?.addEventListener('click', (event) => {
            const button = event.target.closest('[data-minutes]');
            if (!button) return;
            this.setTimerPreset(Number(button.dataset.minutes));
        });

        this.elements.passwordInput?.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                this.checkPassword();
            }
        });

        this.elements.transferModal?.addEventListener('click', (event) => {
            if (event.target === this.elements.transferModal) {
                this.closeTransferModal();
            }
        });

        document.addEventListener('keydown', (event) => this.handleKeydown(event));
    }

    renderFatalState(message) {
        if (this.elements.tabContent) {
            this.elements.tabContent.innerHTML = `<div class="empty-panel">${this.escapeHtml(message)}</div>`;
        }
    }

    render() {
        const context = this.getCurrentContext();
        if (!context) return;

        this.renderAdventureControls(context);
        this.renderChapterList(context);
        this.renderHero(context);
        this.renderTabs();
        this.renderTabContent(context);
        this.renderEncounterSummary(context.scene);
        this.renderAtmosphere(context.scene);
        this.renderRules();
        this.renderNotes();
        this.renderTimer();
        this.renderPlayers();
        this.updateAutoSaveStatus();
    }

    renderAdventureControls(context) {
        const { adventure, chapter } = context;
        const totalScenes = this.getSceneSequence(adventure).length;
        const completedScenes = this.getCompletedScenes(adventure).length;
        const chapterCompleted = chapter.scenes.filter(scene => this.isSceneCompleted(scene.id)).length;
        const progress = totalScenes ? Math.round((completedScenes / totalScenes) * 100) : 0;

        this.elements.adventureSelect.innerHTML = this.adventures.map(item => `
            <option value="${this.escapeAttribute(item.id)}" ${item.id === adventure.id ? 'selected' : ''}>${this.escapeHtml(item.name)}</option>
        `).join('');

        this.elements.sceneJumpSelect.innerHTML = adventure.chapters.map(currentChapter => `
            <optgroup label="${this.escapeAttribute(currentChapter.title)}">
                ${currentChapter.scenes.map(scene => `
                    <option value="${this.escapeAttribute(scene.id)}" ${scene.id === context.scene.id ? 'selected' : ''}>${this.escapeHtml(scene.title)}</option>
                `).join('')}
            </optgroup>
        `).join('');

        this.elements.adventureDescription.textContent = adventure.description;
        this.elements.adventureLevelBadge.textContent = adventure.recommendedLevel || '适配等级待定';
        this.elements.completedScenesCount.textContent = String(completedScenes);
        this.elements.chapterProgressText.textContent = `${chapterCompleted} / ${chapter.scenes.length}`;
        this.elements.progressPercent.textContent = `${progress}%`;
    }

    renderChapterList(context) {
        const { adventure, chapter: currentChapter, scene: currentScene } = context;

        this.elements.chapterList.innerHTML = adventure.chapters.map(chapter => {
            const isCurrentChapter = chapter.id === currentChapter.id;
            const isCompleted = this.isChapterCompleted(chapter);
            const completedCount = chapter.scenes.filter(scene => this.isSceneCompleted(scene.id)).length;

            return `
                <div class="chapter-card ${isCurrentChapter ? 'current' : 'compact'} ${isCompleted ? 'completed' : ''}">
                    <div class="chapter-head">
                        <button class="chapter-title-button" type="button" data-chapter-id="${this.escapeAttribute(chapter.id)}" aria-expanded="${isCurrentChapter ? 'true' : 'false'}">${this.escapeHtml(chapter.title)}</button>
                        <span class="chapter-status ${isCompleted ? 'completed' : ''}">${isCompleted ? '已完成' : `${completedCount}/${chapter.scenes.length}`}</span>
                    </div>
                    <p class="chapter-summary">${this.escapeHtml(chapter.summary)}</p>
                    <div class="scene-nav-list">
                        ${chapter.scenes.map((scene, index) => `
                            <button class="scene-nav-btn ${scene.id === currentScene.id ? 'active' : ''} ${this.isSceneCompleted(scene.id) ? 'completed' : ''}" type="button" data-scene-id="${this.escapeAttribute(scene.id)}">
                                <span class="scene-order">${index + 1}</span>
                                <span class="scene-nav-text">
                                    <span class="scene-nav-title">${this.escapeHtml(scene.title)}</span>
                                    <span class="scene-nav-meta">${this.escapeHtml(scene.location || '未知地点')}</span>
                                </span>
                                <span class="scene-nav-state">${this.isSceneCompleted(scene.id) ? '✔' : '○'}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }

    renderHero(context) {
        const { adventure, chapter, scene, chapterIndex, chapterSceneIndex } = context;
        const isCompleted = this.isSceneCompleted(scene.id);

        this.elements.sceneBreadcrumb.textContent = `${adventure.name} / ${chapter.title} / 场景 ${chapterSceneIndex + 1}`;
        this.elements.sceneTitle.textContent = scene.title;
        this.elements.sceneSummaryLead.textContent = scene.summary;
        this.elements.sceneMeta.innerHTML = [
            `<span class="meta-chip primary">📍 ${this.escapeHtml(scene.location || '未知地点')}</span>`,
            `<span class="meta-chip">🎚️ 第 ${chapterIndex + 1} 章</span>`,
            `<span class="meta-chip">🌫️ ${this.escapeHtml(scene.mood || '标准')}</span>`,
            `<span class="meta-chip ${isCompleted ? 'success' : ''}">${isCompleted ? '✔ 已完成' : '◎ 进行中'}</span>`,
            ...this.normalizeToList(scene.tags).map(tag => `<span class="meta-chip"># ${this.escapeHtml(tag)}</span>`)
        ].join('');

        this.elements.markCompleteButton.textContent = isCompleted ? '↺ 取消完成' : '✔ 标记完成';
    }

    renderTabs() {
        this.elements.contentTabs.querySelectorAll('[data-tab]').forEach(button => {
            button.classList.toggle('active', button.dataset.tab === this.state.activeTab);
        });
    }

    renderTabContent(context) {
        const { scene } = context;

        if (this.state.activeTab === 'story') {
            this.elements.tabContent.innerHTML = this.renderStoryTab(scene);
            this.syncNarrationEditorState();
            return;
        }

        if (this.state.activeTab === 'dm') {
            this.elements.tabContent.innerHTML = this.renderDMTab(scene);
            return;
        }

        this.elements.tabContent.innerHTML = this.renderCombatTab(scene);
    }

    renderStoryTab(scene) {
        const narrationText = this.getNarrationText(scene);
        const sceneKey = this.getCurrentSceneStorageKey();

        return `
            <div class="content-grid">
                <article class="content-card full-span">
                    <h3>📣 朗读文本</h3>
                    <div class="narration-editor-shell">
                        <div class="narration-editor-head">
                            <span class="narration-editor-tip">可直接修改当前场景朗读文本，内容会自动保存到本地。</span>
                            <button class="btn btn-ghost btn-sm" type="button" data-action="reset-narration" data-scene-key="${this.escapeHtml(sceneKey)}">恢复原文</button>
                        </div>
                        <textarea class="form-input narration-editor" id="narrationEditor" data-scene-key="${this.escapeHtml(sceneKey)}" placeholder="在这里修改当前场景的朗读文本……">${this.escapeHtml(narrationText)}</textarea>
                        <span class="narration-preview-label">朗读预览</span>
                        <div class="read-aloud">${this.renderNarration(narrationText)}</div>
                    </div>
                </article>
                <article class="content-card">
                    <h3>🧭 剧情概要</h3>
                    ${this.renderStorySummary(scene.summary, scene.storySummary)}
                </article>
                <article class="content-card full-span">
                    <h3>🎭 扮演建议</h3>
                    ${this.renderRoleplayTips(scene.roleplayTips)}
                </article>
                <article class="content-card full-span">
                    <h3>🕯️ 玩家提示</h3>
                    ${this.renderPlayerClues(scene.playerClues)}
                </article>
                <article class="content-card full-span">
                    <h3>🔀 分支提示</h3>
                    ${this.renderBranchList(scene.branchPrompts)}
                </article>
            </div>
        `;
    }

    renderDMTab(scene) {
        const tips = scene.dmTips || {};

        return `
            <div class="content-grid">
                <article class="content-card">
                    <h3>🧠 带团技巧</h3>
                    ${this.renderBulletList(tips.tableFlow)}
                </article>
                <article class="content-card">
                    <h3>⏱️ 节奏控制</h3>
                    ${this.renderPacingDetails(tips)}
                </article>
                <article class="content-card">
                    <h3>🌌 氛围营造</h3>
                    ${this.renderAtmosphereDetails(tips)}
                </article>
                <article class="content-card">
                    <h3>🧯 应急方案</h3>
                    ${this.renderContingencyDetails(tips)}
                </article>
                <article class="content-card full-span">
                    <h3>🧭 经验分享</h3>
                    ${this.renderLessonDetails(tips)}
                </article>
                <article class="content-card">
                    <h3>🎼 音乐建议</h3>
                    ${this.renderBulletList(tips.music)}
                </article>
            </div>
        `;
    }

    renderCombatTab(scene) {
        if (!scene.combat) {
            return `
                <div class="empty-panel">
                    当前场景以探索、调查或社交为主，没有强制战斗遭遇。你可以在右侧随机生成器中补一个临时遭遇，或直接打开战斗追踪器手动建场。
                </div>
            `;
        }

        const combat = scene.combat;

        return `
            <div class="content-grid">
                <article class="content-card full-span">
                    <h3>⚔️ 遭遇概览</h3>
                    <div class="combat-overview">
                        <div class="overview-item">
                            <span class="overview-label">战斗标题</span>
                            <span class="overview-value">${this.escapeHtml(combat.title)}</span>
                        </div>
                        <div class="overview-item">
                            <span class="overview-label">推荐等级</span>
                            <span class="overview-value">${this.escapeHtml(combat.recommendedLevel || '未标注')}</span>
                        </div>
                        <div class="overview-item">
                            <span class="overview-label">敌方数量</span>
                            <span class="overview-value">${this.countCombatants(combat)} 名</span>
                        </div>
                        <div class="overview-item">
                            <span class="overview-label">默认难度</span>
                            <span class="overview-value">${this.escapeHtml(combat.difficulty || 'standard')}</span>
                        </div>
                    </div>
                    <p>${this.escapeHtml(combat.objective)}</p>
                    ${combat.stakes ? `<p class="support-copy">${this.escapeHtml(combat.stakes)}</p>` : ''}
                </article>

                <article class="content-card full-span">
                    <h3>👹 敌人信息</h3>
                    <div class="enemy-grid">
                        ${combat.enemies.map(enemy => this.renderEnemyCard(enemy)).join('')}
                    </div>
                </article>

                <article class="content-card">
                    <h3>♟️ 战术建议</h3>
                    ${this.renderCombatTactics(combat)}
                </article>
                <article class="content-card">
                    <h3>🗺️ 环境利用</h3>
                    ${this.renderTerrainDetails(combat)}
                </article>
                <article class="content-card">
                    <h3>🎚️ 难度调整</h3>
                    ${this.renderDifficultyDetails(combat)}
                </article>
                <article class="content-card">
                    <h3>🎁 奖励建议</h3>
                    ${this.renderRewardDetails(combat)}
                </article>
            </div>
        `;
    }

    renderEncounterSummary(scene) {
        const hasCombat = Boolean(scene.combat);
        if (this.elements.pushEncounterButton) {
            this.elements.pushEncounterButton.disabled = !hasCombat;
        }
        if (this.elements.transferSceneTitle) {
            this.elements.transferSceneTitle.textContent = hasCombat
                ? `将“${scene.combat.title}”推送到战斗追踪器，并按你的选项预填敌人与玩家。`
                : '当前场景没有可推送的遭遇。';
        }

        if (!scene.combat) {
            this.elements.encounterSummary.innerHTML = `
                <div class="summary-card">
                    <strong>当前模式：探索 / 社交</strong>
                    <p>这一幕更适合抛线索、立氛围、让玩家表态。把注意力放在信息流和 NPC 互动上。</p>
                </div>
                <div class="summary-card">
                    <strong>DM 重点</strong>
                    <span>优先记住玩家问了什么、相信了谁、准备去哪。后续所有节奏都可以由此展开。</span>
                </div>
            `;
            return;
        }

        const combat = scene.combat;
        this.elements.encounterSummary.innerHTML = `
            <div class="summary-card">
                <strong>${this.escapeHtml(combat.title)}</strong>
                <p>${this.escapeHtml(combat.objective)}</p>
            </div>
            <div class="summary-card">
                <strong>推荐等级</strong>
                <span>${this.escapeHtml(combat.recommendedLevel || '未标注')}</span>
            </div>
            <div class="summary-card">
                <strong>敌方总数</strong>
                <span>${this.countCombatants(combat)} 名</span>
            </div>
        `;
    }

    openTransferModal() {
        const scene = this.getCurrentContext()?.scene;
        if (!scene?.combat) {
            this.notifications.show('当前场景没有可推送的遭遇。', 'warning', 1600);
            return;
        }

        this.elements.transferSceneTitle.textContent = `将“${scene.combat.title}”推送到战斗追踪器，并按你的选项预填敌人与玩家。`;
        this.elements.transferModal?.classList.add('show');
    }

    closeTransferModal() {
        this.elements.transferModal?.classList.remove('show');
    }

    renderAtmosphere(scene) {
        const tips = scene.dmTips || {};
        this.elements.atmosphereContent.innerHTML = `
            <div class="atmosphere-block">
                <div>
                    <div class="atmosphere-label">建议口吻</div>
                    <p>${this.escapeHtml(scene.mood ? `整体保持“${scene.mood}”的语气，并随玩家行动逐步加压或放松。` : '根据玩家状态调整语速和情绪强度。')}</p>
                </div>
                <div>
                    <div class="atmosphere-label">环境细节</div>
                    ${this.renderBulletList(this.buildAtmosphereList(tips))}
                </div>
                <div>
                    <div class="atmosphere-label">音乐推荐</div>
                    ${this.renderBulletList(tips.music)}
                </div>
            </div>
        `;
    }

    renderRules() {
        this.elements.rulesReference.innerHTML = (this.data.rulesReference || []).map(rule => `
            <div class="rule-item ${this.activeRuleId === rule.id ? 'expanded' : ''}">
                <button class="rule-button" type="button" data-rule-id="${this.escapeAttribute(rule.id)}">
                    <span>
                        <strong>${this.escapeHtml(rule.title)}</strong>
                        <span class="rule-summary">${this.escapeHtml(rule.summary)}</span>
                    </span>
                    <span class="rule-arrow">⌄</span>
                </button>
                <div class="rule-body">
                    ${this.renderDetailList(rule.bullets)}
                </div>
            </div>
        `).join('');
    }

    renderNotes(context = this.getCurrentContext()) {
        const textarea = this.elements.dmNotesTextarea;
        if (!textarea || !context) return;

        this.ensureSceneNotesInitialized(context);

        const sceneKey = this.getCurrentSceneStorageKey(context);
        const noteText = this.getSceneNotes(context);
        const previousSceneKey = textarea.dataset.sceneKey || '';

        textarea.dataset.sceneKey = sceneKey;
        textarea.placeholder = `记录 ${context.scene.title} 的临场改动、NPC 状态、玩家决定与伏笔回收点……`;

        if (this.elements.dmNotesSceneLabel) {
            this.elements.dmNotesSceneLabel.textContent = `${context.chapter.title} · ${context.scene.title}`;
        }

        if (document.activeElement !== textarea || previousSceneKey !== sceneKey) {
            textarea.value = noteText;
        }
    }

    renderTimer() {
        this.elements.timerDisplay.textContent = this.formatTimer(this.timer.remaining);
        this.elements.timerPresets.innerHTML = (this.data.timerPresets || [1, 5, 10]).map(minutes => `
            <button class="btn ${this.timer.duration === minutes * 60 ? 'btn-secondary' : 'btn-ghost'} btn-sm" type="button" data-minutes="${minutes}">${minutes} 分钟</button>
        `).join('');
    }

    renderPlayers() {
        if (!this.players.length) {
            this.elements.playerList.innerHTML = '<div class="player-empty">暂未记录玩家。可以先记名字、HP、AC 和被动察觉。</div>';
            return;
        }

        this.elements.playerList.innerHTML = this.players.map(player => `
            <div class="player-card">
                <div class="player-card-head">
                    <span class="player-name-tag">${this.escapeHtml(player.name || '未命名角色')}</span>
                    <button class="player-remove" type="button" data-action="remove-player" data-id="${this.escapeAttribute(player.id)}">×</button>
                </div>
                <div class="player-grid">
                    <label>
                        名称
                        <input class="form-input player-field" data-id="${this.escapeAttribute(player.id)}" data-field="name" value="${this.escapeAttribute(player.name || '')}">
                    </label>
                    <label>
                        HP
                        <input class="form-input player-field" type="number" min="0" data-id="${this.escapeAttribute(player.id)}" data-field="hp" value="${this.escapeAttribute(this.stringifyValue(player.hp))}">
                    </label>
                    <label>
                        AC
                        <input class="form-input player-field" type="number" min="0" data-id="${this.escapeAttribute(player.id)}" data-field="ac" value="${this.escapeAttribute(this.stringifyValue(player.ac))}">
                    </label>
                    <label>
                        被动察觉
                        <input class="form-input player-field" type="number" min="0" data-id="${this.escapeAttribute(player.id)}" data-field="passive" value="${this.escapeAttribute(this.stringifyValue(player.passive))}">
                    </label>
                </div>
            </div>
        `).join('');
    }

    selectAdventure(adventureId) {
        const adventure = this.getAdventureById(adventureId);
        if (!adventure) return;

        this.state.selectedAdventureId = adventure.id;
        this.state.currentChapterId = adventure.chapters[0].id;
        this.state.currentSceneId = adventure.chapters[0].scenes[0].id;
        this.state.activeTab = 'story';
        this.saveState();
        this.render();
        this.notifications.show(`已切换剧本：${adventure.name}`, 'info', 1800);
    }

    goToChapter(chapterId) {
        const chapter = this.getChapterById(chapterId);
        if (!chapter) return;

        this.state.currentChapterId = chapter.id;
        this.state.currentSceneId = chapter.scenes[0].id;
        this.saveState();
        this.render();
    }

    goToScene(sceneId, options = {}) {
        const { showNotification = true, markCurrentComplete = false } = options;
        const adventure = this.getCurrentAdventure();
        const targetScene = this.getSceneById(sceneId, adventure);
        if (!targetScene) return;

        if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            this.updateSpeechButton(false);
        }

        if (markCurrentComplete) {
            this.markSceneComplete(this.state.currentSceneId);
        }

        const targetChapter = this.findParentChapterBySceneId(sceneId, adventure);
        if (!targetChapter) return;

        this.state.currentChapterId = targetChapter.id;
        this.state.currentSceneId = targetScene.id;
        this.saveState();
        this.render();

        if (showNotification) {
            this.notifications.show(`已切换到：${targetScene.title}`, 'info', 1600);
        }
    }

    goToNextScene() {
        const adventure = this.getCurrentAdventure();
        const sequence = this.getSceneSequence(adventure);
        const currentIndex = sequence.findIndex(scene => scene.id === this.state.currentSceneId);

        if (currentIndex === -1) return;
        if (currentIndex >= sequence.length - 1) {
            this.markSceneComplete(this.state.currentSceneId);
            this.saveState();
            this.render();
            this.notifications.show('已经到最后一个场景了。', 'warning', 1800);
            return;
        }

        this.goToScene(sequence[currentIndex + 1].id, { markCurrentComplete: true, showNotification: false });
    }

    goToPreviousScene() {
        const adventure = this.getCurrentAdventure();
        const sequence = this.getSceneSequence(adventure);
        const currentIndex = sequence.findIndex(scene => scene.id === this.state.currentSceneId);

        if (currentIndex <= 0) {
            this.notifications.show('已经是第一个场景。', 'warning', 1600);
            return;
        }

        this.goToScene(sequence[currentIndex - 1].id, { showNotification: false });
    }

    goToAdjacentChapter(direction) {
        const adventure = this.getCurrentAdventure();
        const currentIndex = adventure.chapters.findIndex(chapter => chapter.id === this.state.currentChapterId);
        const targetChapter = adventure.chapters[currentIndex + direction];

        if (!targetChapter) return;

        this.state.currentChapterId = targetChapter.id;
        this.state.currentSceneId = targetChapter.scenes[0].id;
        this.saveState();
        this.render();
    }

    toggleCurrentSceneComplete() {
        const currentSceneId = this.state.currentSceneId;
        const isCompleted = this.isSceneCompleted(currentSceneId);

        if (isCompleted) {
            this.state.completedSceneIds = this.state.completedSceneIds.filter(sceneId => sceneId !== currentSceneId);
        } else {
            this.markSceneComplete(currentSceneId);
        }

        this.saveState();
        this.render();
        this.notifications.show(isCompleted ? '已取消完成状态。' : '场景已标记完成。', 'success', 1500);
    }

    markSceneComplete(sceneId) {
        if (!sceneId || this.isSceneCompleted(sceneId)) return;
        this.state.completedSceneIds.push(sceneId);
    }

    resetProgress() {
        if (!confirm('确定要重置当前剧本的章节进度吗？笔记和玩家追踪会保留。')) {
            return;
        }

        const adventure = this.getCurrentAdventure();
        this.state.currentChapterId = adventure.chapters[0].id;
        this.state.currentSceneId = adventure.chapters[0].scenes[0].id;
        this.state.completedSceneIds = [];
        this.state.activeTab = 'story';
        this.saveState();
        this.render();
        this.notifications.show('剧本进度已重置。', 'success', 1800);
    }

    copyCurrentNarration() {
        const scene = this.getCurrentContext()?.scene;
        const text = this.getNarrationText(scene);
        if (!text) return;

        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(text)
                .then(() => this.notifications.show('朗读文本已复制。', 'success', 1500))
                .catch(() => this.fallbackCopy(text));
            return;
        }

        this.fallbackCopy(text);
    }

    fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        this.notifications.show('朗读文本已复制。', 'success', 1500);
    }

    toggleNarrationSpeech() {
        const scene = this.getCurrentContext()?.scene;
        const narrationText = this.getNarrationText(scene);
        if (!narrationText) return;

        if (!('speechSynthesis' in window)) {
            this.notifications.show('当前浏览器不支持语音朗读。', 'warning', 1800);
            return;
        }

        if (window.speechSynthesis.speaking) {
            window.speechSynthesis.cancel();
            this.updateSpeechButton(false);
            return;
        }

        this.speechUtterance = new SpeechSynthesisUtterance(narrationText);
        this.speechUtterance.lang = 'zh-CN';
        this.speechUtterance.rate = 1;
        this.speechUtterance.onend = () => this.updateSpeechButton(false);
        this.speechUtterance.onerror = () => this.updateSpeechButton(false);
        window.speechSynthesis.speak(this.speechUtterance);
        this.updateSpeechButton(true);
    }

    updateSpeechButton(isSpeaking) {
        if (!this.elements.speakNarrationButton) return;
        this.elements.speakNarrationButton.classList.toggle('active', isSpeaking);
        this.elements.speakNarrationButton.textContent = isSpeaking ? '⏹ 停止朗读' : '🔊 语音朗读';
    }

    pushEncounterToCombatTracker() {
        const context = this.getCurrentContext();
        const scene = context?.scene;
        if (!scene?.combat) {
            this.notifications.show('当前场景没有可推送的遭遇。', 'warning', 1600);
            return;
        }

        const options = {
            autoInitiative: Boolean(this.elements.transferAutoInitiative?.checked),
            addPlayerSlots: Boolean(this.elements.transferPlayerSlots?.checked),
            openInNewTab: Boolean(this.elements.transferNewTab?.checked)
        };

        const transferData = {
            timestamp: Date.now(),
            source: 'dm-assistant',
            adventureId: context.adventure.id,
            chapterId: context.chapter.id,
            sceneId: scene.id,
            sceneTitle: scene.title,
            encounter: this.buildEncounterTransfer(scene.combat, options)
        };

        localStorage.setItem('dmToCombatTransfer', JSON.stringify(transferData));
        this.closeTransferModal();

        if (options.openInNewTab) {
            window.open('/AZ-s-Cyber-Toolbox/combat-tracker/index.html', '_blank', 'noopener');
        } else {
            window.location.href = '/AZ-s-Cyber-Toolbox/combat-tracker/index.html';
        }

        this.notifications.show('遭遇已推送到战斗追踪器。', 'success', 1800);
    }

    buildEncounterTransfer(combat, options) {
        return {
            name: combat.title,
            sceneTitle: this.getCurrentContext()?.scene?.title || combat.title,
            objective: combat.objective,
            difficulty: combat.difficulty || 'standard',
            terrain: this.normalizeToList(combat.terrain),
            tactics: this.normalizeToList(combat.tactics).join('；'),
            options,
            combatants: this.createEncounterCombatants(combat, options.autoInitiative),
            players: options.addPlayerSlots ? this.createTransferPlayers(options.autoInitiative) : []
        };
    }

    createEncounterCombatants(combat, autoInitiative) {
        return (combat.enemies || []).flatMap(enemy => {
            const count = Number(enemy.count || 1);
            return Array.from({ length: count }, (_, index) => {
                const suffix = count > 1 ? ` ${index + 1}` : '';
                const hpValue = this.parseNumericValue(enemy.hp);
                const acValue = this.parseNumericValue(enemy.ac, 10);
                const initiativeValue = this.parseNumericValue(enemy.initiative);
                const actionSummary = enemy.actions?.length
                    ? enemy.actions.map(action => action.name || '').filter(Boolean).join('；')
                    : this.normalizeToList(enemy.attacks).join('；');
                const featureSummary = enemy.features?.length
                    ? enemy.features.map(feature => feature.name || feature.description || '').filter(Boolean).join('；')
                    : this.normalizeToList(enemy.traits).join('；');
                const notes = [
                    `攻击：${actionSummary}`,
                    `特性：${featureSummary}`,
                    `战术：${enemy.tactics || combat.tactics || ''}`
                ].filter(Boolean).join('\n');

                return {
                    id: this.generateId(),
                    name: `${enemy.name}${suffix}`,
                    type: 'enemy',
                    hp: hpValue,
                    maxHp: hpValue,
                    ac: acValue,
                    initiative: autoInitiative ? this.rollInitiative(initiativeValue) : 0,
                    initiativeModifier: initiativeValue,
                    notes,
                    conditions: []
                };
            });
        });
    }

    createTransferPlayers(autoInitiative) {
        const players = this.players.length
            ? this.players.map(player => ({ ...player }))
            : Array.from({ length: 4 }, (_, index) => ({ name: `玩家角色 ${index + 1}`, hp: '', ac: '', passive: '' }));

        return players.map((player, index) => ({
            id: this.generateId(),
            name: player.name || `玩家角色 ${index + 1}`,
            type: 'player',
            hp: Number(player.hp) || 0,
            maxHp: Number(player.hp) || 0,
            ac: Number(player.ac) || 10,
            // 玩家先攻不自动骰定，留给 Combat Tracker 弹窗填写
            initiative: 0,
            needsPlayerInput: true,
            initiativeModifier: 0,
            notes: player.passive ? `被动察觉：${player.passive}` : '',
            conditions: []
        }));
    }

    rollInitiative(modifier = 0) {
        return Math.floor(Math.random() * 20) + 1 + (Number(modifier) || 0);
    }

    generateRandomContent() {
        const type = this.elements.generatorType.value;
        const output = type === 'npc'
            ? this.generateNPC()
            : type === 'encounter'
                ? this.generateEncounter()
                : this.generateShopStock();

        this.elements.generatorOutput.classList.remove('empty');
        this.elements.generatorOutput.innerHTML = output;
    }

    generateNPC() {
        const npc = this.data.generators?.npcNames;
        const name = `${this.randomFrom(npc.first)}·${this.randomFrom(npc.last)}`;
        const role = this.randomFrom(npc.roles);
        const quirk = this.randomFrom(npc.quirks);

        return `
            <strong>${this.escapeHtml(name)}</strong>
            <p>身份：${this.escapeHtml(role)}</p>
            <p>特点：${this.escapeHtml(quirk)}</p>
            <p>即兴切入：他 / 她很可能正知道一条你们缺的支线线索，但不会白给吗。</p>
        `;
    }

    generateEncounter() {
        const scene = this.getCurrentContext()?.scene;
        const tableKey = this.resolveEncounterTable(scene);
        const text = this.randomFrom(this.data.generators?.encounters?.[tableKey] || []);
        const complication = this.randomFrom([
            '如果玩家处理得太慢，敌方援军会在数分钟后赶到。',
            '现场留下的证据会指向一个更大的阴谋。',
            '一个看似无关的 NPC 其实正偷偷观察队伍的处理方式。',
            '这一遭遇可以作为短休前最后一道压力测试。'
        ]);

        return `
            <strong>随机遭遇 · ${tableKey === 'town' ? '城镇' : tableKey === 'dungeon' ? '地城' : '道路'}</strong>
            <p>${this.escapeHtml(text)}</p>
            <p>${this.escapeHtml(complication)}</p>
        `;
    }

    generateShopStock() {
        const goods = this.pickUniqueItems(this.data.generators?.shopGoods || [], 4);
        return `
            <strong>今日货架</strong>
            ${this.renderDetailList(goods)}
            <p>商人态度：如果玩家愿意预付、护送或交换情报，价格可以再谈。</p>
        `;
    }

    resolveEncounterTable(scene) {
        const location = `${scene?.location || ''} ${this.normalizeToList(scene?.tags).join(' ')}`;

        if (/镇|酒馆|商会|街/.test(location)) {
            return 'town';
        }

        if (/矿|洞|堡|巢|遗迹|地城|据点/.test(location)) {
            return 'dungeon';
        }

        return 'road';
    }

    saveState() {
        this.state.lastSavedAt = new Date().toISOString();
        StorageManager.save('dmAssistantState', {
            selectedAdventureId: this.state.selectedAdventureId,
            currentChapterId: this.state.currentChapterId,
            currentSceneId: this.state.currentSceneId,
            completedSceneIds: this.state.completedSceneIds,
            activeTab: this.state.activeTab,
            lastSavedAt: this.state.lastSavedAt
        });
        this.updateAutoSaveStatus();
    }

    saveNotes(sceneKey = this.getCurrentSceneStorageKey()) {
        if (!sceneKey) return;

        if (!Object.prototype.hasOwnProperty.call(this.sceneNotes, sceneKey)) {
            this.sceneNotes[sceneKey] = '';
        }

        StorageManager.save('dmAssistantNotes', this.sceneNotes);
        this.state.lastSavedAt = new Date().toISOString();
        this.updateAutoSaveStatus('笔记已保存');
    }

    savePlayers() {
        StorageManager.save('dmAssistantPlayers', this.players);
        this.state.lastSavedAt = new Date().toISOString();
        this.updateAutoSaveStatus('玩家数据已保存');
    }

    saveTimer() {
        StorageManager.save('dmAssistantTimer', this.timer);
    }

    updateAutoSaveStatus(prefix = '已自动保存') {
        if (!this.elements.autoSaveStatus) return;

        if (!this.state.lastSavedAt) {
            this.elements.autoSaveStatus.textContent = '等待自动保存';
            return;
        }

        const formatted = new Date(this.state.lastSavedAt).toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit'
        });
        this.elements.autoSaveStatus.textContent = `${prefix} · ${formatted}`;
    }

    addPlayer(event) {
        event.preventDefault();
        const name = this.elements.playerName.value.trim();

        if (!name) {
            this.notifications.show('请先输入角色名。', 'warning', 1500);
            this.elements.playerName.focus();
            return;
        }

        this.players.push({
            id: this.generateId(),
            name,
            hp: this.parseNumberField(this.elements.playerHP.value),
            ac: this.parseNumberField(this.elements.playerAC.value),
            passive: this.parseNumberField(this.elements.playerPassive.value)
        });

        this.savePlayers();
        this.renderPlayers();
        this.elements.playerForm.reset();
        this.elements.playerName.focus();
    }

    removePlayer(playerId) {
        this.players = this.players.filter(player => player.id !== playerId);
        this.savePlayers();
        this.renderPlayers();
    }

    updatePlayerField(playerId, field, value, inputElement) {
        const player = this.players.find(item => item.id === playerId);
        if (!player) return;

        player[field] = field === 'name' ? value : this.parseNumberField(value);

        if (field === 'name') {
            const title = inputElement.closest('.player-card')?.querySelector('.player-name-tag');
            if (title) {
                title.textContent = value || '未命名角色';
            }
        }

        this.savePlayers();
    }

    setTimerPreset(minutes) {
        this.stopTimerInterval();
        this.timer.duration = minutes * 60;
        this.timer.remaining = this.timer.duration;
        this.timer.running = false;
        this.timer.endTime = null;
        this.saveTimer();
        this.renderTimer();
    }

    startTimer() {
        if (this.timer.running) return;
        if (this.timer.remaining <= 0) {
            this.timer.remaining = this.timer.duration;
        }

        this.timer.running = true;
        this.timer.endTime = Date.now() + this.timer.remaining * 1000;
        this.saveTimer();
        this.startTimerInterval();
        this.renderTimer();
    }

    pauseTimer() {
        if (!this.timer.running) return;
        this.timer.remaining = Math.max(0, Math.ceil((this.timer.endTime - Date.now()) / 1000));
        this.timer.running = false;
        this.timer.endTime = null;
        this.stopTimerInterval();
        this.saveTimer();
        this.renderTimer();
    }

    resetTimer() {
        this.stopTimerInterval();
        this.timer.running = false;
        this.timer.endTime = null;
        this.timer.remaining = this.timer.duration;
        this.saveTimer();
        this.renderTimer();
    }

    startTimerInterval() {
        this.stopTimerInterval();
        this.timerInterval = setInterval(() => {
            this.timer.remaining = Math.max(0, Math.ceil((this.timer.endTime - Date.now()) / 1000));
            this.renderTimer();

            if (this.timer.remaining <= 0) {
                this.finishTimer();
            }
        }, 250);
    }

    stopTimerInterval() {
        if (!this.timerInterval) return;
        clearInterval(this.timerInterval);
        this.timerInterval = null;
    }

    finishTimer(silent = false) {
        this.stopTimerInterval();
        this.timer.running = false;
        this.timer.endTime = null;
        this.timer.remaining = 0;
        this.saveTimer();
        this.renderTimer();

        if (!silent) {
            this.notifications.show('计时结束。', 'success', 2600);
        }
    }

    applyPasswordState() {
        if (this.isUnlocked) {
            this.hidePasswordOverlay();
        } else {
            this.showPasswordOverlay();
        }
    }

    showPasswordOverlay() {
        this.elements.passwordOverlay?.classList.remove('hidden');
        setTimeout(() => this.elements.passwordInput?.focus(), 80);
    }

    hidePasswordOverlay() {
        this.elements.passwordOverlay?.classList.add('hidden');
    }

    checkPassword() {
        const inputPassword = this.elements.passwordInput?.value.trim();

        if (inputPassword === PASSWORD) {
            this.isUnlocked = true;
            sessionStorage.setItem('dmAssistantUnlocked', 'true');
            this.hidePasswordOverlay();
            if (this.elements.passwordInput) {
                this.elements.passwordInput.value = '';
            }
            if (this.elements.passwordError) {
                this.elements.passwordError.textContent = '';
            }
            this.notifications.show('DM 权限已解锁。', 'success', 1500);
            return;
        }

        if (this.elements.passwordError) {
            this.elements.passwordError.textContent = '密码错误，请重试';
        }

        if (this.elements.passwordInput) {
            this.elements.passwordInput.value = '';
            this.elements.passwordInput.focus();
            this.elements.passwordInput.classList.add('password-shake');
            setTimeout(() => this.elements.passwordInput?.classList.remove('password-shake'), 500);
        }
    }

    handleKeydown(event) {
        if (event.key === 'Escape' && this.elements.transferModal?.classList.contains('show')) {
            this.closeTransferModal();
            return;
        }

        if (!this.isUnlocked) {
            return;
        }

        const target = event.target;
        if (target instanceof HTMLElement && target.matches('input, textarea, select, button')) {
            return;
        }

        if (event.code === 'Space') {
            event.preventDefault();
            this.goToNextScene();
            return;
        }

        if (event.code === 'ArrowRight') {
            event.preventDefault();
            this.goToNextScene();
            return;
        }

        if (event.code === 'ArrowLeft') {
            event.preventDefault();
            this.goToPreviousScene();
            return;
        }

        if (event.code === 'ArrowUp') {
            event.preventDefault();
            this.goToAdjacentChapter(-1);
            return;
        }

        if (event.code === 'ArrowDown') {
            event.preventDefault();
            this.goToAdjacentChapter(1);
        }
    }

    getCurrentAdventure() {
        return this.getAdventureById(this.state.selectedAdventureId) || this.adventures[0] || null;
    }

    getCurrentContext() {
        const adventure = this.getCurrentAdventure();
        if (!adventure) return null;

        const chapter = this.getChapterById(this.state.currentChapterId, adventure) || adventure.chapters[0];
        const scene = this.getSceneById(this.state.currentSceneId, adventure) || chapter.scenes[0];
        const chapterIndex = adventure.chapters.findIndex(item => item.id === chapter.id);
        const chapterSceneIndex = chapter.scenes.findIndex(item => item.id === scene.id);
        const globalSceneIndex = this.getSceneSequence(adventure).findIndex(item => item.id === scene.id);

        return {
            adventure,
            chapter,
            scene,
            chapterIndex,
            chapterSceneIndex,
            globalSceneIndex,
            totalScenes: this.getSceneSequence(adventure).length
        };
    }

    getAdventureById(adventureId) {
        return this.adventures.find(adventure => adventure.id === adventureId) || null;
    }

    getChapterById(chapterId, adventure = this.getCurrentAdventure()) {
        return adventure?.chapters.find(chapter => chapter.id === chapterId) || null;
    }

    getSceneById(sceneId, adventure = this.getCurrentAdventure()) {
        if (!adventure) return null;

        for (const chapter of adventure.chapters) {
            const scene = chapter.scenes.find(item => item.id === sceneId);
            if (scene) return scene;
        }

        return null;
    }

    findParentChapterBySceneId(sceneId, adventure = this.getCurrentAdventure()) {
        return adventure?.chapters.find(chapter => chapter.scenes.some(scene => scene.id === sceneId)) || null;
    }

    getSceneSequence(adventure = this.getCurrentAdventure()) {
        if (!adventure) return [];
        return adventure.chapters.flatMap(chapter => chapter.scenes);
    }

    getCompletedScenes(adventure = this.getCurrentAdventure()) {
        return this.state.completedSceneIds.filter(sceneId => this.getSceneById(sceneId, adventure));
    }

    isSceneCompleted(sceneId) {
        return this.state.completedSceneIds.includes(sceneId);
    }

    isChapterCompleted(chapter) {
        return chapter.scenes.every(scene => this.isSceneCompleted(scene.id));
    }

    countCombatants(combat) {
        return (combat.enemies || []).reduce((count, enemy) => count + Number(enemy.count || 1), 0);
    }

    getCurrentSceneStorageKey(context = this.getCurrentContext()) {
        if (!context?.adventure?.id || !context?.scene?.id) {
            return '';
        }

        return `${context.adventure.id}::${context.scene.id}`;
    }

    getSceneNotes(context = this.getCurrentContext()) {
        const sceneKey = this.getCurrentSceneStorageKey(context);
        if (!sceneKey) return '';

        if (Object.prototype.hasOwnProperty.call(this.sceneNotes, sceneKey)) {
            return this.sceneNotes[sceneKey];
        }

        return '';
    }

    ensureSceneNotesInitialized(context = this.getCurrentContext()) {
        const sceneKey = this.getCurrentSceneStorageKey(context);
        if (!sceneKey || Object.prototype.hasOwnProperty.call(this.sceneNotes, sceneKey)) {
            return;
        }

        const seededNotes = this.buildSceneNotesSeed(context);

        if (!Object.keys(this.sceneNotes).length && this.legacyNotes.trim()) {
            this.sceneNotes[sceneKey] = [
                seededNotes,
                '【旧版笔记迁移】',
                this.legacyNotes.trim()
            ].filter(Boolean).join('\n\n');
            this.legacyNotes = '';
        } else {
            this.sceneNotes[sceneKey] = seededNotes;
        }

        StorageManager.save('dmAssistantNotes', this.sceneNotes);
    }

    buildSceneNotesSeed(context = this.getCurrentContext()) {
        const { adventure, chapter, scene } = context || {};
        if (!scene) return '';

        const clueGroups = scene.playerClues || {};
        const dmTips = scene.dmTips || {};
        const combat = scene.combat || null;
        const nextSceneTitles = this.normalizeToList(scene.nextScenes)
            .map(sceneId => this.getSceneById(sceneId, adventure)?.title)
            .filter(Boolean)
            .slice(0, 3);

        const sections = [
            this.composeSceneNoteSection('【开场先抓】', [
                scene.summary ? `本场核心：${this.summarizeNoteText(scene.summary, 68)}` : null,
                scene.mood ? `开场语气先抓住“${scene.mood}”。` : null,
                scene.storySummary?.impact ? `别忘它会带来的后续影响：${this.summarizeNoteText(scene.storySummary.impact, 68)}` : null
            ]),
            this.composeSceneNoteSection('【人物口吻】', (scene.roleplayTips || []).slice(0, 3).map(tip => {
                const cue = tip.voice || tip.speech || tip.personality || tip.role || '';
                const motive = tip.motivation ? `；动机是${this.summarizeNoteText(tip.motivation, 26)}` : '';
                return tip.npc ? `${tip.npc}：${this.summarizeNoteText(cue, 42)}${motive}` : null;
            })),
            this.composeSceneNoteSection('【记得给出的信息】', [
                ...this.normalizeToList(clueGroups.obvious).slice(0, 2).map(item => `明线：${this.summarizeNoteText(item, 56)}`),
                ...this.normalizeToList(clueGroups.hidden).slice(0, 1).map(item => `暗线：${this.summarizeNoteText(item, 56)}`)
            ]),
            this.composeSceneNoteSection('【临场应对】', [
                ...this.normalizeToList(dmTips.contingency).slice(0, 2).map(item => `若玩家卡住：${this.summarizeNoteText(item, 60)}`),
                ...this.normalizeToList(scene.branchPrompts).slice(0, 1).map(item => item?.choice && item?.outcome ? `若玩家走“${item.choice}”这条线：${this.summarizeNoteText(item.outcome, 52)}` : null),
                nextSceneTitles.length ? `收尾后可顺势推到：${nextSceneTitles.join(' / ')}` : null
            ]),
            this.composeSceneNoteSection('【战斗 / 节奏提醒】', combat ? [
                combat.objective ? `战斗目标：${this.summarizeNoteText(combat.objective, 64)}` : null,
                ...this.normalizeToList(combat.tactics).slice(0, 1).map(item => `敌方会这样打：${this.summarizeNoteText(item, 58)}`),
                ...this.normalizeToList(combat.terrain).slice(0, 1).map(item => `地形别忘用：${this.summarizeNoteText(item, 58)}`)
            ] : [
                dmTips.pacing ? `这场更重要的是节奏：${this.summarizeNoteText(dmTips.pacing, 64)}` : '这场以推进信息和气氛为主，不必急着把压力一次打满。'
            ])
        ].filter(Boolean);

        return sections.join('\n\n');
    }

    composeSceneNoteSection(title, lines) {
        const validLines = this.normalizeToList(lines).filter(Boolean);
        if (!validLines.length) return '';
        return `${title}\n${validLines.map(line => `- ${line}`).join('\n')}`;
    }

    summarizeNoteText(text, maxLength = 56) {
        const normalized = String(text || '')
            .replace(/\s+/g, ' ')
            .trim();

        if (!normalized) return '';

        const [firstSentence] = normalized.split(/[。！？]/).filter(Boolean);
        const candidate = (firstSentence || normalized).trim();
        return candidate.length > maxLength
            ? `${candidate.slice(0, maxLength).trim()}…`
            : candidate;
    }

    getNarrationText(scene, context = this.getCurrentContext()) {
        const sceneKey = this.getCurrentSceneStorageKey(context);
        if (sceneKey && Object.prototype.hasOwnProperty.call(this.narrationOverrides, sceneKey)) {
            return this.narrationOverrides[sceneKey];
        }

        return scene?.narration || '';
    }

    isNarrationLocked(sceneKey) {
        if (!sceneKey) return false;
        return Boolean(this.narrationLocks[sceneKey]);
    }

    syncNarrationEditorState() {
        const sceneKey = this.getCurrentSceneStorageKey();
        const shell = this.elements.tabContent?.querySelector('.narration-editor-shell');
        if (!shell) return;

        const head = shell.querySelector('.narration-editor-head');
        const tip = shell.querySelector('.narration-editor-tip');
        const resetButton = head?.querySelector('[data-action="reset-narration"]');
        if (!head || !tip || !resetButton) return;

        let actions = head.querySelector('.narration-editor-actions');
        if (!actions) {
            actions = document.createElement('div');
            actions.className = 'narration-editor-actions';
            resetButton.replaceWith(actions);
            actions.appendChild(resetButton);
        }

        let lockButton = actions.querySelector('[data-action="toggle-narration-lock"]');
        if (!lockButton) {
            lockButton = document.createElement('button');
            lockButton.type = 'button';
            lockButton.className = 'btn btn-secondary btn-sm';
            lockButton.dataset.action = 'toggle-narration-lock';
            actions.prepend(lockButton);
        }

        const isLocked = this.isNarrationLocked(sceneKey);

        shell.classList.toggle('locked', isLocked);
        lockButton.dataset.sceneKey = sceneKey;
        lockButton.setAttribute('aria-pressed', String(isLocked));
        lockButton.textContent = isLocked ? '解锁编辑' : '锁定朗读稿';
        resetButton.dataset.sceneKey = sceneKey;
        tip.textContent = isLocked
            ? '朗读稿已锁定，当前显示为上桌朗读版式。'
            : '可直接修改当前场景朗读文本，内容会自动保存到本地。';
    }

    toggleNarrationLock(sceneKey) {
        if (!sceneKey) return;

        const nextLocked = !this.isNarrationLocked(sceneKey);

        if (nextLocked) {
            this.narrationLocks[sceneKey] = true;
        } else {
            delete this.narrationLocks[sceneKey];
        }

        StorageManager.save('dmAssistantNarrationLocks', this.narrationLocks);
        this.state.lastSavedAt = new Date().toISOString();
        this.updateAutoSaveStatus(nextLocked ? '朗读稿已锁定' : '朗读稿已解锁');
        this.notifications.show(nextLocked ? '朗读稿已锁定' : '已解锁朗读稿编辑', 'success', 1400);
        this.syncNarrationEditorState();
    }

    saveNarrationOverride(sceneKey, text) {
        if (!sceneKey) return;

        this.narrationOverrides[sceneKey] = text;
        StorageManager.save('dmAssistantNarrationOverrides', this.narrationOverrides);
        this.state.lastSavedAt = new Date().toISOString();
        this.updateAutoSaveStatus('朗读文本已保存');
    }

    resetNarrationOverride(sceneKey) {
        if (!sceneKey) return;

        delete this.narrationOverrides[sceneKey];
        StorageManager.save('dmAssistantNarrationOverrides', this.narrationOverrides);
        this.state.lastSavedAt = new Date().toISOString();
        this.updateAutoSaveStatus('已恢复原文');
        this.renderTabContent(this.getCurrentContext());
    }

    normalizeToList(value) {
        if (!value) return [];
        if (Array.isArray(value)) return value.filter(Boolean);
        return String(value)
            .split(/\n+/)
            .map(item => item.trim())
            .filter(Boolean);
    }

    renderNarration(text) {
        const paragraphs = String(text || '')
            .split(/\n{2,}/)
            .map(item => item.trim())
            .filter(Boolean);

        if (!paragraphs.length) {
            return '<div class="empty-panel">暂无朗读文本。</div>';
        }

        return paragraphs.map(paragraph => `<p>${this.escapeHtml(paragraph).replace(/\n/g, '<br>')}</p>`).join('');
    }

    renderStorySummary(summary, storySummary) {
        const blocks = [];
        if (summary) {
            blocks.push(this.renderInfoPanel('场景定位', summary, true));
        }

        const labelMap = {
            background: '背景信息',
            trajectory: '剧情走向',
            hiddenInfo: '隐藏信息',
            impact: '后续影响'
        };

        if (storySummary && typeof storySummary === 'object' && !Array.isArray(storySummary)) {
            Object.entries(storySummary).forEach(([key, value]) => {
                const block = this.renderInfoPanel(labelMap[key] || key, value);
                if (block) {
                    blocks.push(block);
                }
            });
        }

        return blocks.length
            ? `<div class="info-stack">${blocks.join('')}</div>`
            : '<div class="empty-panel">暂无剧情概要。</div>';
    }

    renderRoleplayTips(tips) {
        const list = Array.isArray(tips) ? tips.filter(Boolean) : [];
        if (!list.length) {
            return '<div class="empty-panel">暂无扮演提示。</div>';
        }

        if (list.every(item => typeof item !== 'object')) {
            return this.renderBulletList(list);
        }

        return `<div class="npc-grid">${list.map(tip => {
            if (typeof tip !== 'object') {
                return `
                    <article class="npc-card">
                        <div class="npc-body">
                            <div class="npc-section">
                                <span class="info-label">快速提示</span>
                                <p class="info-copy">${this.escapeHtml(tip)}</p>
                            </div>
                        </div>
                    </article>
                `;
            }

            const responses = tip.responses && typeof tip.responses === 'object'
                ? Object.entries(tip.responses).filter(([, value]) => value)
                : [];

            return `
                <article class="npc-card">
                    <div class="npc-head">
                        <div>
                            <h4 class="enemy-name">${this.escapeHtml(tip.npc || tip.name || '未命名 NPC')}</h4>
                            ${tip.role ? `<p class="npc-role">${this.escapeHtml(tip.role)}</p>` : ''}
                        </div>
                        ${tip.emotionalBeat ? `<span class="enemy-count">${this.escapeHtml(tip.emotionalBeat)}</span>` : ''}
                    </div>
                    <div class="npc-body">
                        ${this.renderKeyValuePair('声音', tip.voice)}
                        ${this.renderKeyValuePair('说话方式', tip.speech)}
                        ${this.renderKeyValuePair('肢体语言', tip.bodyLanguage)}
                        ${this.renderKeyValuePair('性格', tip.personality)}
                        ${this.renderKeyValuePair('动机', tip.motivation)}
                        ${this.renderKeyValuePair('恐惧', tip.fear)}
                        ${responses.length ? `
                            <div class="npc-section">
                                <span class="info-label">互动回应</span>
                                <ul class="response-list">
                                    ${responses.map(([tone, value]) => `
                                        <li>
                                            <strong class="response-tone">${this.escapeHtml(this.formatResponseTone(tone))}</strong>
                                            <span>${this.escapeHtml(value)}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        ` : ''}
                    </div>
                </article>
            `;
        }).join('')}</div>`;
    }

    renderPlayerClues(clues) {
        if (!clues) {
            return '<div class="empty-panel">暂无玩家提示。</div>';
        }

        if (Array.isArray(clues) || typeof clues !== 'object') {
            return this.renderBulletList(clues);
        }

        const sections = [
            ['obvious', '明显线索', 'primary'],
            ['hidden', '隐藏线索', ''],
            ['misleading', '误导线索', 'warning'],
            ['rewards', '线索回报', 'success']
        ].filter(([key]) => this.normalizeToList(clues[key]).length);

        if (!sections.length) {
            return '<div class="empty-panel">暂无玩家提示。</div>';
        }

        return `
            <div class="clue-grid">
                ${sections.map(([key, label, tone]) => `
                    <article class="clue-card ${tone}">
                        <span class="clue-badge">${this.escapeHtml(label)}</span>
                        ${this.renderDetailList(clues[key])}
                    </article>
                `).join('')}
            </div>
        `;
    }

    renderPacingDetails(tips) {
        const sections = [
            this.renderInfoPanel('主节奏', tips.pacing || '根据玩家互动密度和资源消耗动态调节推进速度。', true)
        ];

        const pacingBeats = this.normalizeToList(tips.pacingBeats);
        if (pacingBeats.length) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">节奏节点</span>
                    ${this.renderDetailList(pacingBeats)}
                </div>
            `);
        }

        const spotlightMoments = this.normalizeToList(tips.spotlightMoments);
        if (spotlightMoments.length) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">聚光灯时刻</span>
                    ${this.renderBulletList(spotlightMoments)}
                </div>
            `);
        }

        return `<div class="section-stack">${sections.filter(Boolean).join('')}</div>`;
    }

    renderAtmosphereDetails(tips) {
        const sections = [];
        const ambience = this.normalizeToList(tips.ambience);
        if (ambience.length) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">场景氛围</span>
                    ${this.renderBulletList(ambience)}
                </div>
            `);
        }

        const sensoryGrid = this.renderObjectGrid(tips.sensoryDetails, {
            sound: '声音',
            light: '光线',
            smell: '气味',
            touch: '触感',
            temperature: '温度'
        });

        if (sensoryGrid) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">感官细节</span>
                    ${sensoryGrid}
                </div>
            `);
        }

        return sections.length
            ? `<div class="section-stack">${sections.join('')}</div>`
            : '<div class="empty-panel">暂无氛围提示。</div>';
    }

    renderContingencyDetails(tips) {
        const sections = [];
        const contingency = this.normalizeToList(tips.contingency);
        if (contingency.length) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">快速应对</span>
                    ${this.renderBulletList(contingency)}
                </div>
            `);
        }

        const contingencyGrid = this.renderObjectGrid(tips.contingencyDetails, {
            missedClues: '错过线索',
            earlyReveal: '提前发现',
            refusal: '拒绝参与',
            difficultySpike: '战斗失控',
            death: '角色死亡'
        });

        if (contingencyGrid) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">应急分支</span>
                    ${contingencyGrid}
                </div>
            `);
        }

        return sections.length
            ? `<div class="section-stack">${sections.join('')}</div>`
            : '<div class="empty-panel">暂无应急方案。</div>';
    }

    renderLessonDetails(tips) {
        const sections = [];
        const lessons = this.normalizeToList(tips.lessons);
        if (lessons.length) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">最佳实践</span>
                    ${this.renderBulletList(lessons)}
                </div>
            `);
        }

        const commonMistakes = this.normalizeToList(tips.commonMistakes);
        if (commonMistakes.length) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">常见错误</span>
                    ${this.renderDetailList(commonMistakes)}
                </div>
            `);
        }

        const variantIdeas = this.normalizeToList(tips.variantIdeas);
        if (variantIdeas.length) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">变体建议</span>
                    ${this.renderDetailList(variantIdeas)}
                </div>
            `);
        }

        return sections.length
            ? `<div class="section-stack">${sections.join('')}</div>`
            : '<div class="empty-panel">暂无经验分享。</div>';
    }

    renderCombatTactics(combat) {
        const sections = [];
        const tactics = this.normalizeToList(combat.tactics);
        if (tactics.length) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">核心战术</span>
                    ${this.renderBulletList(tactics)}
                </div>
            `);
        }

        const phaseGrid = this.renderObjectGrid(combat.tacticsPhases, {
            opening: '开场布局',
            firstRound: '第一轮行动',
            midFight: '中期策略',
            emergency: '紧急情况'
        });

        if (phaseGrid) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">回合节奏</span>
                    ${phaseGrid}
                </div>
            `);
        }

        return sections.length
            ? `<div class="section-stack">${sections.join('')}</div>`
            : '<div class="empty-panel">暂无战术建议。</div>';
    }

    renderTerrainDetails(combat) {
        const sections = [];
        const terrain = this.normalizeToList(combat.terrain);
        if (terrain.length) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">地形要点</span>
                    ${this.renderBulletList(terrain)}
                </div>
            `);
        }

        const terrainGrid = this.renderObjectGrid(combat.terrainDetails, {
            cover: '掩体位置',
            hazards: '危险区域',
            chokepoints: '战术要点',
            interactables: '可互动元素'
        });

        if (terrainGrid) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">详细布置</span>
                    ${terrainGrid}
                </div>
            `);
        }

        return sections.length
            ? `<div class="section-stack">${sections.join('')}</div>`
            : '<div class="empty-panel">暂无环境利用建议。</div>';
    }

    renderDifficultyDetails(combat) {
        const sections = [`
            <div class="section-block">
                <span class="section-subtitle">模式切换</span>
                ${this.renderDifficultyList(combat.difficultyAdjustments)}
            </div>
        `];

        const dynamicAdjustments = this.normalizeToList(combat.dynamicAdjustments);
        if (dynamicAdjustments.length) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">动态调整</span>
                    ${this.renderBulletList(dynamicAdjustments)}
                </div>
            `);
        }

        return `<div class="section-stack">${sections.join('')}</div>`;
    }

    renderRewardDetails(combat) {
        const sections = [];
        const rewards = this.normalizeToList(combat.rewards);
        if (rewards.length) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">基础奖励</span>
                    ${this.renderBulletList(rewards)}
                </div>
            `);
        }

        const rewardGrid = this.renderObjectGrid(combat.rewardDetails, {
            loot: '战利品',
            intel: '情报奖励',
            reputation: '声望影响',
            fallout: '后续影响'
        });

        if (rewardGrid) {
            sections.push(`
                <div class="section-block">
                    <span class="section-subtitle">额外回报</span>
                    ${rewardGrid}
                </div>
            `);
        }

        return sections.length
            ? `<div class="section-stack">${sections.join('')}</div>`
            : '<div class="empty-panel">暂无奖励建议。</div>';
    }

    renderEnemyCard(enemy) {
        const metaEntries = [
            ['速度', enemy.speed],
            ['挑战等级', enemy.challenge],
            ['属性', enemy.stats],
            ['技能', enemy.skills],
            ['感官', enemy.senses],
            ['语言', enemy.languages],
            ['站位', enemy.positioning],
            ['撤退条件', enemy.retreat]
        ].filter(([, value]) => value);

        return `
            <div class="enemy-card">
                <div class="enemy-head">
                    <h4 class="enemy-name">${this.escapeHtml(enemy.name)}</h4>
                    <span class="enemy-count">× ${enemy.count || 1}</span>
                </div>
                <div class="enemy-stats">
                    <span class="enemy-stat">HP ${this.escapeHtml(enemy.hp)}</span>
                    <span class="enemy-stat">AC ${this.escapeHtml(String(enemy.ac ?? '—'))}</span>
                    ${enemy.challenge ? `<span class="enemy-stat">CR ${this.escapeHtml(enemy.challenge)}</span>` : ''}
                </div>
                ${enemy.actions?.length ? `
                    <div class="section-block compact">
                        <span class="section-subtitle">动作</span>
                        ${this.renderActionList(enemy.actions)}
                    </div>
                ` : `
                    <div class="section-block compact">
                        <span class="section-subtitle">攻击</span>
                        ${this.renderDetailList(enemy.attacks)}
                    </div>
                `}
                ${enemy.features?.length ? `
                    <div class="section-block compact">
                        <span class="section-subtitle">特性</span>
                        ${this.renderFeatureList(enemy.features)}
                    </div>
                ` : ''}
                ${this.normalizeToList(enemy.traits).length ? `
                    <div class="section-block compact">
                        <span class="section-subtitle">作战要点</span>
                        ${this.renderDetailList(enemy.traits)}
                    </div>
                ` : ''}
                ${metaEntries.length ? `
                    <div class="enemy-meta">
                        ${metaEntries.map(([label, value]) => `
                            <div class="enemy-detail">
                                <span class="section-subtitle">${this.escapeHtml(label)}</span>
                                <p class="info-copy">${this.escapeHtml(value)}</p>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                <strong class="overview-label">战术</strong>
                <p>${this.escapeHtml(enemy.tactics || '根据战场局势自由调整。')}</p>
            </div>
        `;
    }

    renderBulletList(items) {
        const list = this.normalizeToList(items);
        if (!list.length) {
            return '<div class="empty-panel">暂无可展示内容。</div>';
        }

        return `<ul class="bullet-list">${list.map(item => `<li>${this.escapeHtml(item)}</li>`).join('')}</ul>`;
    }

    renderDetailList(items) {
        const list = this.normalizeToList(items);
        if (!list.length) {
            return '<div class="empty-panel">暂无可展示内容。</div>';
        }

        return `<ul class="detail-list">${list.map(item => `<li>${this.escapeHtml(item)}</li>`).join('')}</ul>`;
    }

    renderBranchList(branches) {
        const list = Array.isArray(branches) ? branches : [];
        if (!list.length) {
            return '<div class="empty-panel">暂无预设分支提示。</div>';
        }

        return `<div class="branch-list">${list.map(branch => `
            <div class="branch-item">
                <span class="branch-choice">${this.escapeHtml(branch.choice)}</span>
                <span class="branch-outcome">${this.escapeHtml(branch.outcome)}</span>
                ${(branch.risk || branch.reward) ? `
                    <div class="branch-notes">
                        ${branch.risk ? `<span class="branch-note">风险：${this.escapeHtml(branch.risk)}</span>` : ''}
                        ${branch.reward ? `<span class="branch-note">收益：${this.escapeHtml(branch.reward)}</span>` : ''}
                    </div>
                ` : ''}
            </div>
        `).join('')}</div>`;
    }

    renderDifficultyList(adjustments) {
        const entries = adjustments ? Object.entries(adjustments) : [];
        if (!entries.length) {
            return '<div class="empty-panel">暂无难度调整建议。</div>';
        }

        const labelMap = {
            easy: '简单',
            standard: '标准',
            hard: '困难'
        };

        return `<ul class="detail-list">${entries.map(([key, value]) => `<li><strong>${labelMap[key] || key}：</strong>${this.escapeHtml(value)}</li>`).join('')}</ul>`;
    }

    formatParagraphs(text) {
        return this.escapeHtml(text || '').replace(/\n/g, '<br>');
    }

    renderInfoPanel(label, value, accent = false) {
        if (!value || (Array.isArray(value) && !value.length)) {
            return '';
        }

        const body = Array.isArray(value)
            ? this.renderDetailList(value)
            : `<p class="info-copy">${this.escapeHtml(value).replace(/\n/g, '<br>')}</p>`;

        return `
            <div class="info-panel ${accent ? 'accent' : ''}">
                <span class="info-label">${this.escapeHtml(label)}</span>
                ${body}
            </div>
        `;
    }

    renderObjectGrid(value, labelMap = {}) {
        const entries = value && typeof value === 'object' && !Array.isArray(value)
            ? Object.entries(value).filter(([, item]) => item && (!Array.isArray(item) || item.length))
            : [];

        if (!entries.length) {
            return '';
        }

        return `
            <div class="object-grid">
                ${entries.map(([key, item]) => `
                    <div class="object-item">
                        <span class="section-subtitle">${this.escapeHtml(labelMap[key] || key)}</span>
                        ${Array.isArray(item)
                            ? this.renderDetailList(item)
                            : `<p class="info-copy">${this.escapeHtml(item).replace(/\n/g, '<br>')}</p>`}
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderKeyValuePair(label, value) {
        if (!value) {
            return '';
        }

        return `
            <div class="npc-section">
                <span class="info-label">${this.escapeHtml(label)}</span>
                <p class="info-copy">${this.escapeHtml(value).replace(/\n/g, '<br>')}</p>
            </div>
        `;
    }

    renderFeatureList(items) {
        const list = Array.isArray(items) ? items.filter(Boolean) : this.normalizeToList(items);
        if (!list.length) {
            return '<div class="empty-panel">暂无可展示内容。</div>';
        }

        return `
            <ul class="rich-list">
                ${list.map(item => {
                    if (typeof item === 'object') {
                        return `<li><strong>${this.escapeHtml(item.name || '条目')}</strong><span>${this.escapeHtml(item.description || item.text || '')}</span></li>`;
                    }
                    return `<li><span>${this.escapeHtml(item)}</span></li>`;
                }).join('')}
            </ul>
        `;
    }

    renderActionList(actions) {
        const list = Array.isArray(actions) ? actions.filter(Boolean) : [];
        if (!list.length) {
            return '<div class="empty-panel">暂无可展示内容。</div>';
        }

        return `
            <ul class="rich-list">
                ${list.map(action => `
                    <li>
                        <strong>${this.escapeHtml(action.name || '动作')}</strong>
                        ${action.attack ? `<span>${this.escapeHtml(action.attack)}</span>` : ''}
                        ${action.damage ? `<span>${this.escapeHtml(action.damage)}</span>` : ''}
                        ${action.description ? `<span>${this.escapeHtml(action.description)}</span>` : ''}
                    </li>
                `).join('')}
            </ul>
        `;
    }

    buildAtmosphereList(tips) {
        const sensoryLabelMap = {
            sound: '声音',
            light: '光线',
            smell: '气味',
            touch: '触感',
            temperature: '温度'
        };

        const ambience = this.normalizeToList(tips?.ambience);
        const sensory = tips?.sensoryDetails && typeof tips.sensoryDetails === 'object'
            ? Object.entries(tips.sensoryDetails)
                .filter(([, value]) => value)
                .map(([key, value]) => `${sensoryLabelMap[key] || key}：${value}`)
            : [];

        return [...ambience, ...sensory];
    }

    formatResponseTone(tone) {
        const toneMap = {
            friendly: '友善回应',
            suspicious: '戒备回应',
            aggressive: '强硬回应',
            curious: '好奇回应',
            fearful: '恐惧回应'
        };

        return toneMap[tone] || tone;
    }

    formatTimer(seconds) {
        const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${mins}:${secs}`;
    }

    randomFrom(list) {
        if (!Array.isArray(list) || !list.length) return '';
        return list[Math.floor(Math.random() * list.length)];
    }

    pickUniqueItems(list, count) {
        const pool = [...list];
        const picked = [];
        while (pool.length && picked.length < count) {
            const index = Math.floor(Math.random() * pool.length);
            picked.push(pool.splice(index, 1)[0]);
        }
        return picked;
    }

    parseNumberField(value) {
        if (value === '' || value === null || value === undefined) return '';
        return Number(value);
    }

    stringifyValue(value) {
        return value === '' || value === null || value === undefined ? '' : String(value);
    }

    parseNumericValue(value, fallback = 0) {
        if (typeof value === 'number' && Number.isFinite(value)) {
            return value;
        }

        const match = String(value ?? '').match(/-?\d+/);
        return match ? Number(match[0]) : fallback;
    }

    generateId() {
        return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
    }

    recordToolUsage() {
        const toolId = 'dm-assistant';
        const toolName = '城主辅助工具';
        const usageMap = JSON.parse(localStorage.getItem('toolUsageStats') || '{}');
        usageMap[toolId] = (usageMap[toolId] || 0) + 1;
        localStorage.setItem('toolUsageStats', JSON.stringify(usageMap));

        const recentTools = JSON.parse(localStorage.getItem('recentTools') || '[]')
            .filter(item => item.id !== toolId);
        recentTools.unshift({ id: toolId, name: toolName, href: 'dm-assistant/index.html', timestamp: Date.now() });
        localStorage.setItem('recentTools', JSON.stringify(recentTools.slice(0, 5)));
    }

    escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    escapeAttribute(value) {
        return this.escapeHtml(value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.dmAssistantApp = new DMAssistantApp();
});
