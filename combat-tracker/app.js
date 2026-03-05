/**
 * D&D 5E 战斗追踪器
 * Combat Tracker Application
 */

// 密码配置
const PASSWORD = '2333';

class CombatTracker {
    constructor() {
        // 检查是否已解锁
        this.isUnlocked = sessionStorage.getItem('combatTrackerUnlocked') === 'true';
        
        // 战斗数据
        this.combatants = [];
        this.currentTurn = 0;
        this.currentRound = 1;
        this.isCombatActive = false;
        
        // 状态效果定义
        this.conditionTypes = {
            // 控制状态 (Debuffs)
            blinded: { name: '目盲', type: 'debuff', icon: '👁️' },
            charmed: { name: '魅惑', type: 'debuff', icon: '💕' },
            deafened: { name: '耳聋', type: 'debuff', icon: '👂' },
            frightened: { name: '恐慌', type: 'debuff', icon: '😱' },
            grappled: { name: '被擒抱', type: 'debuff', icon: '🤼' },
            incapacitated: { name: '失能', type: 'debuff', icon: '😵' },
            invisible: { name: '隐形', type: 'buff', icon: '👤' },
            paralyzed: { name: '麻痹', type: 'debuff', icon: '⚡' },
            petrified: { name: '石化', type: 'debuff', icon: '🗿' },
            poisoned: { name: '中毒', type: 'debuff', icon: '☠️' },
            prone: { name: '倒地', type: 'debuff', icon: '🛌' },
            restrained: { name: '被束缚', type: 'debuff', icon: '⛓️' },
            stunned: { name: '震慑', type: 'debuff', icon: '💫' },
            unconscious: { name: '昏迷', type: 'debuff', icon: '😴' },
            
            // 增益状态 (Buffs)
            blessed: { name: '祝福', type: 'buff', icon: '✨' },
            hasted: { name: '加速', type: 'buff', icon: '⚡' },
            shield: { name: '护盾术', type: 'buff', icon: '🛡️' },
            inspired: { name: '受激励', type: 'buff', icon: '🌟' },
            concentration: { name: '专注中', type: 'buff', icon: '🔮' },
            
            // 其他状态
            hidden: { name: '隐藏', type: 'neutral', icon: '👁️‍🗨️' },
            dodging: { name: '闪避', type: 'buff', icon: '🏃' },
            dashing: { name: '疾跑', type: 'buff', icon: '💨' },
            readied: { name: '准备动作', type: 'neutral', icon: '⏳' },
            custom: { name: '自定义', type: 'neutral', icon: '📝' }
        };
        
        // 初始化
        this.init();
    }
    
    /**
     * 初始化应用
     */
    init() {
        // 检查密码保护
        if (!this.isUnlocked) {
            this.showPasswordOverlay();
        } else {
            this.hidePasswordOverlay();
        }
        
        this.loadFromStorage();
        this.setupEventListeners();
        this.render();
        this.applyTheme();
    }
    
    /**
     * 显示密码覆盖层
     */
    showPasswordOverlay() {
        const overlay = document.getElementById('passwordOverlay');
        if (overlay) {
            overlay.classList.remove('hidden');
        }
        // 聚焦密码输入框
        setTimeout(() => {
            const passwordInput = document.getElementById('passwordInput');
            if (passwordInput) {
                passwordInput.focus();
            }
        }, 100);
    }
    
    /**
     * 隐藏密码覆盖层
     */
    hidePasswordOverlay() {
        const overlay = document.getElementById('passwordOverlay');
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }
    
    /**
     * 检查密码
     */
    checkPassword() {
        const passwordInput = document.getElementById('passwordInput');
        const errorElement = document.getElementById('passwordError');
        
        if (!passwordInput) return;
        
        const inputPassword = passwordInput.value.trim();
        
        if (inputPassword === PASSWORD) {
            // 密码正确
            this.isUnlocked = true;
            sessionStorage.setItem('combatTrackerUnlocked', 'true');
            this.hidePasswordOverlay();
            passwordInput.value = '';
            if (errorElement) {
                errorElement.textContent = '';
            }
        } else {
            // 密码错误
            if (errorElement) {
                errorElement.textContent = '密码错误，请重试';
            }
            passwordInput.value = '';
            passwordInput.focus();
            
            // 添加错误动画
            passwordInput.classList.add('password-shake');
            setTimeout(() => {
                passwordInput.classList.remove('password-shake');
            }, 500);
        }
    }
    
    /**
     * 设置事件监听器
     */
    setupEventListeners() {
        // 状态类型选择变化时显示/隐藏自定义名称输入
        const conditionTypeSelect = document.getElementById('conditionType');
        if (conditionTypeSelect) {
            conditionTypeSelect.addEventListener('change', (e) => {
                const customGroup = document.getElementById('customConditionGroup');
                if (customGroup) {
                    customGroup.style.display = e.target.value === 'custom' ? 'block' : 'none';
                }
            });
        }
        
        // 键盘快捷键
        document.addEventListener('keydown', (e) => {
            // 密码输入框回车键
            if (e.code === 'Enter' && e.target.id === 'passwordInput') {
                e.preventDefault();
                this.checkPassword();
                return;
            }
            
            // 空格键或右箭头：下一回合
            if ((e.code === 'Space' || e.code === 'ArrowRight') && !e.target.matches('input, textarea, select')) {
                e.preventDefault();
                this.nextTurn();
            }
            // 左箭头：上一回合
            if (e.code === 'ArrowLeft' && !e.target.matches('input, textarea, select')) {
                e.preventDefault();
                this.prevTurn();
            }
        });
        
        // 点击模态框外部关闭
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                }
            });
        });
    }
    
    /**
     * 生成唯一ID
     */
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    /**
     * 添加战斗单位
     */
    addCombatant(event) {
        event.preventDefault();
        
        const name = document.getElementById('unitName').value.trim();
        const type = document.getElementById('unitType').value;
        const initiative = parseInt(document.getElementById('unitInitiative').value) || 0;
        const hp = parseInt(document.getElementById('unitHP').value) || 0;
        const maxHp = parseInt(document.getElementById('unitMaxHP').value) || hp;
        const ac = parseInt(document.getElementById('unitAC').value) || 10;
        const notes = document.getElementById('unitNotes').value.trim();
        
        if (!name) {
            alert('请输入单位名称');
            return;
        }
        
        const combatant = {
            id: this.generateId(),
            name,
            type,
            initiative,
            hp,
            maxHp: maxHp || hp,
            ac,
            notes,
            conditions: [],
            isDefeated: false
        };
        
        this.combatants.push(combatant);
        this.saveToStorage();
        this.render();
        
        // 重置表单
        document.getElementById('unitName').value = '';
        document.getElementById('unitInitiative').value = '';
        document.getElementById('unitHP').value = '';
        document.getElementById('unitMaxHP').value = '';
        document.getElementById('unitAC').value = '';
        document.getElementById('unitNotes').value = '';
        document.getElementById('unitName').focus();
    }
    
    /**
     * 删除战斗单位
     */
    removeCombatant(id) {
        if (!confirm('确定要删除这个单位吗？')) return;
        
        const index = this.combatants.findIndex(c => c.id === id);
        if (index === -1) return;
        
        // 如果删除的是当前回合的单位，需要调整当前回合
        if (index === this.currentTurn && this.combatants.length > 1) {
            // 保持当前回合索引（下一个单位会前移）
        } else if (index < this.currentTurn) {
            this.currentTurn = Math.max(0, this.currentTurn - 1);
        }
        
        this.combatants.splice(index, 1);
        
        // 如果当前回合超出范围，重置
        if (this.currentTurn >= this.combatants.length) {
            this.currentTurn = 0;
        }
        
        this.saveToStorage();
        this.render();
    }
    
    /**
     * 复制战斗单位（用于快速添加相同敌人）
     */
    duplicateCombatant(id) {
        const original = this.combatants.find(c => c.id === id);
        if (!original) return;
        
        const copy = {
            ...original,
            id: this.generateId(),
            name: original.name + ' (复制)',
            conditions: []
        };
        
        this.combatants.push(copy);
        this.saveToStorage();
        this.render();
    }
    
    /**
     * 更新战斗单位先攻值
     */
    updateInitiative(id, value) {
        const combatant = this.combatants.find(c => c.id === id);
        if (!combatant) return;
        
        const newInitiative = parseInt(value) || 0;
        combatant.initiative = newInitiative;
        
        // 重新排序
        this.sortInitiative();
        this.saveToStorage();
        this.render();
    }
    
    /**
     * 按先攻值排序
     */
    sortInitiative() {
        this.combatants.sort((a, b) => b.initiative - a.initiative);
        this.currentTurn = 0;
        this.saveToStorage();
        this.render();
    }
    
    /**
     * 下一回合
     */
    nextTurn() {
        if (this.combatants.length === 0) return;
        
        // 处理状态效果倒计时
        this.processConditionEndOfTurn();
        
        this.currentTurn++;
        
        // 新一轮
        if (this.currentTurn >= this.combatants.length) {
            this.currentTurn = 0;
            this.currentRound++;
            this.processConditionEndOfRound();
        }
        
        // 跳过已战败的单位
        this.skipDefeated();
        
        this.saveToStorage();
        this.render();
        this.scrollToActive();
    }
    
    /**
     * 上一回合
     */
    prevTurn() {
        if (this.combatants.length === 0) return;
        
        this.currentTurn--;
        
        if (this.currentTurn < 0) {
            if (this.currentRound > 1) {
                this.currentRound--;
                this.currentTurn = this.combatants.length - 1;
            } else {
                this.currentTurn = 0;
            }
        }
        
        this.saveToStorage();
        this.render();
        this.scrollToActive();
    }
    
    /**
     * 跳过已战败的单位
     */
    skipDefeated() {
        let attempts = 0;
        while (attempts < this.combatants.length) {
            const current = this.combatants[this.currentTurn];
            if (!current || !current.isDefeated) break;
            
            this.currentTurn++;
            if (this.currentTurn >= this.combatants.length) {
                this.currentTurn = 0;
                this.currentRound++;
            }
            attempts++;
        }
    }
    
    /**
     * 回合结束时处理状态效果
     */
    processConditionEndOfTurn() {
        const current = this.combatants[this.currentTurn];
        if (!current) return;
        
        current.conditions.forEach(condition => {
            if (condition.duration > 0 && condition.decrementOn === 'turn') {
                condition.duration--;
            }
        });
        
        // 移除到期的状态
        current.conditions = current.conditions.filter(c => c.duration !== 0);
    }
    
    /**
     * 轮次结束时处理状态效果
     */
    processConditionEndOfRound() {
        this.combatants.forEach(combatant => {
            combatant.conditions.forEach(condition => {
                if (condition.duration > 0 && condition.decrementOn === 'round') {
                    condition.duration--;
                }
            });
            
            // 移除到期的状态
            combatant.conditions = combatant.conditions.filter(c => c.duration !== 0);
        });
    }
    
    /**
     * 重置战斗
     */
    resetCombat() {
        if (!confirm('确定要重置战斗吗？这将重置回合数和当前回合位置。')) return;
        
        this.currentTurn = 0;
        this.currentRound = 1;
        
        // 清除所有状态效果
        this.combatants.forEach(c => {
            c.conditions = [];
            c.isDefeated = false;
        });
        
        this.saveToStorage();
        this.render();
    }
    
    /**
     * 清空所有单位
     */
    clearAll() {
        if (!confirm('确定要清空所有战斗单位吗？此操作不可恢复。')) return;
        
        this.combatants = [];
        this.currentTurn = 0;
        this.currentRound = 1;
        
        this.saveToStorage();
        this.render();
    }
    
    /**
     * 打开状态效果模态框
     */
    openConditionModal(combatantId) {
        document.getElementById('conditionTargetId').value = combatantId;
        document.getElementById('conditionType').value = '';
        document.getElementById('customConditionName').value = '';
        document.getElementById('conditionDuration').value = '1';
        document.getElementById('conditionSource').value = '';
        document.getElementById('conditionSave').checked = false;
        document.getElementById('customConditionGroup').style.display = 'none';
        
        document.getElementById('conditionModal').classList.add('show');
    }
    
    /**
     * 关闭状态效果模态框
     */
    closeConditionModal() {
        document.getElementById('conditionModal').classList.remove('show');
    }
    
    /**
     * 添加状态效果
     */
    addCondition(event) {
        event.preventDefault();
        
        const combatantId = document.getElementById('conditionTargetId').value;
        const type = document.getElementById('conditionType').value;
        const customName = document.getElementById('customConditionName').value.trim();
        const duration = parseInt(document.getElementById('conditionDuration').value) || 1;
        const source = document.getElementById('conditionSource').value.trim();
        const needsSave = document.getElementById('conditionSave').checked;
        
        if (!type) {
            alert('请选择状态类型');
            return;
        }
        
        const combatant = this.combatants.find(c => c.id === combatantId);
        if (!combatant) return;
        
        const conditionDef = this.conditionTypes[type];
        const condition = {
            id: this.generateId(),
            type,
            name: type === 'custom' ? customName : conditionDef.name,
            icon: conditionDef.icon,
            conditionType: type === 'custom' ? 'neutral' : conditionDef.type,
            duration,
            source,
            needsSave,
            decrementOn: 'round' // 默认每轮减少
        };
        
        combatant.conditions.push(condition);
        this.saveToStorage();
        this.render();
        this.closeConditionModal();
    }
    
    /**
     * 移除状态效果
     */
    removeCondition(combatantId, conditionId) {
        const combatant = this.combatants.find(c => c.id === combatantId);
        if (!combatant) return;
        
        combatant.conditions = combatant.conditions.filter(c => c.id !== conditionId);
        this.saveToStorage();
        this.render();
    }
    
    /**
     * 打开HP调整模态框
     */
    openHpModal(combatantId, action = 'damage') {
        document.getElementById('hpTargetId').value = combatantId;
        document.getElementById('hpAction').value = action;
        document.getElementById('hpAmount').value = '';
        
        const combatant = this.combatants.find(c => c.id === combatantId);
        const actionText = {
            damage: `对 ${combatant?.name || '目标'} 造成伤害`,
            heal: `治疗 ${combatant?.name || '目标'}`,
            set: `设置 ${combatant?.name || '目标'} 的生命值`
        };
        
        document.getElementById('hpModalTitle').textContent = actionText[action];
        document.getElementById('hpModal').classList.add('show');
        document.getElementById('hpAmount').focus();
    }
    
    /**
     * 关闭HP调整模态框
     */
    closeHpModal() {
        document.getElementById('hpModal').classList.remove('show');
    }
    
    /**
     * 设置HP操作类型
     */
    setHPAction(action) {
        document.getElementById('hpAction').value = action;
        const combatantId = document.getElementById('hpTargetId').value;
        const combatant = this.combatants.find(c => c.id === combatantId);
        
        const actionText = {
            damage: `对 ${combatant?.name || '目标'} 造成伤害`,
            heal: `治疗 ${combatant?.name || '目标'}`,
            set: `设置 ${combatant?.name || '目标'} 的生命值`
        };
        
        document.getElementById('hpModalTitle').textContent = actionText[action];
    }
    
    /**
     * 应用HP变化
     */
    applyHPChange(event) {
        event.preventDefault();
        
        const combatantId = document.getElementById('hpTargetId').value;
        const action = document.getElementById('hpAction').value;
        const amount = parseInt(document.getElementById('hpAmount').value) || 0;
        
        const combatant = this.combatants.find(c => c.id === combatantId);
        if (!combatant) return;
        
        switch (action) {
            case 'damage':
                combatant.hp = Math.max(0, combatant.hp - amount);
                break;
            case 'heal':
                combatant.hp = Math.min(combatant.maxHp, combatant.hp + amount);
                break;
            case 'set':
                combatant.hp = amount;
                break;
        }
        
        // 更新战败状态
        combatant.isDefeated = combatant.hp <= 0;
        
        this.saveToStorage();
        this.render();
        this.closeHpModal();
    }
    
    /**
     * 切换主题
     */
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('combatTrackerTheme', newTheme);
        
        // 更新按钮图标
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        }
    }
    
    /**
     * 应用保存的主题
     */
    applyTheme() {
        const savedTheme = localStorage.getItem('combatTrackerTheme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
        }
    }
    
    /**
     * 保存到本地存储
     */
    saveToStorage() {
        const data = {
            combatants: this.combatants,
            currentTurn: this.currentTurn,
            currentRound: this.currentRound
        };
        localStorage.setItem('combatTrackerData', JSON.stringify(data));
    }
    
    /**
     * 从本地存储加载
     */
    loadFromStorage() {
        const saved = localStorage.getItem('combatTrackerData');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.combatants = data.combatants || [];
                this.currentTurn = data.currentTurn || 0;
                this.currentRound = data.currentRound || 1;
            } catch (e) {
                console.error('Failed to load combat data:', e);
            }
        }
    }
    
    /**
     * 滚动到当前回合单位
     */
    scrollToActive() {
        const activeCard = document.querySelector('.combatant-card.active-turn');
        if (activeCard) {
            activeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    /**
     * 获取HP条样式类
     */
    getHpBarClass(hp, maxHp) {
        if (maxHp <= 0) return 'high';
        const percentage = (hp / maxHp) * 100;
        if (percentage <= 25) return 'low';
        if (percentage <= 50) return 'medium';
        return 'high';
    }
    
    /**
     * 渲染应用
     */
    render() {
        this.renderRound();
        this.renderCombatantList();
    }
    
    /**
     * 渲染回合数
     */
    renderRound() {
        const roundElement = document.getElementById('roundNumber');
        if (roundElement) {
            roundElement.textContent = this.currentRound;
        }
    }
    
    /**
     * 渲染战斗单位列表
     */
    renderCombatantList() {
        const container = document.getElementById('initiativeList');
        if (!container) return;
        
        if (this.combatants.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">⚔️</div>
                    <div class="empty-state-text">暂无战斗单位</div>
                    <p style="margin-top: 0.5rem; font-size: 0.9rem;">使用上方表单添加玩家、敌人或NPC</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = this.combatants.map((combatant, index) => {
            const isActive = index === this.currentTurn;
            const hpPercent = combatant.maxHp > 0 
                ? Math.max(0, Math.min(100, (combatant.hp / combatant.maxHp) * 100)) 
                : 0;
            const hpBarClass = this.getHpBarClass(combatant.hp, combatant.maxHp);
            const isCritical = combatant.hp > 0 && combatant.hp <= Math.floor(combatant.maxHp * 0.25);
            
            const conditionsHtml = combatant.conditions.map(condition => {
                const durationText = condition.duration > 0 ? `${condition.duration}轮` : '∞';
                return `
                    <span class="condition-tag ${condition.conditionType}" 
                          onclick="app.removeCondition('${combatant.id}', '${condition.id}')"
                          title="${condition.source ? '来源: ' + condition.source : ''}${condition.needsSave ? ' (需要豁免)' : ''}">
                        ${condition.icon} ${condition.name}
                        <span class="condition-duration">${durationText}</span>
                    </span>
                `;
            }).join('');
            
            // 获取怪物攻击信息
            const attacksHtml = this.getCombatantAttacksHtml(combatant);
            
            return `
                <div class="combatant-card ${combatant.type} ${isActive ? 'active-turn' : ''} ${combatant.isDefeated ? 'defeated' : ''} ${isCritical ? 'critical' : ''}"
                     data-id="${combatant.id}">
                    <div class="turn-indicator"></div>
                    
                    <div class="card-initiative">
                        <input type="number" class="initiative-input" value="${combatant.initiative}" 
                               onchange="app.updateInitiative('${combatant.id}', this.value)"
                               title="点击修改先攻值">
                        <span class="initiative-label">先攻</span>
                    </div>
                    
                    <div class="card-info">
                        <div class="combatant-name">${this.escapeHtml(combatant.name)}</div>
                        <div class="combatant-meta">
                            <span class="meta-item ac">🛡️ AC ${combatant.ac}</span>
                            ${combatant.maxHp > 0 ? `<span class="meta-item">❤️ ${combatant.hp}/${combatant.maxHp}</span>` : ''}
                        </div>
                        ${combatant.notes ? `<div class="combatant-notes">${this.escapeHtml(combatant.notes)}</div>` : ''}
                        ${attacksHtml}
                    </div>
                    
                    ${combatant.maxHp > 0 ? `
                        <div class="card-hp">
                            <div class="hp-bar-container">
                                <div class="hp-bar ${hpBarClass}" style="width: ${hpPercent}%"></div>
                                <span class="hp-text">${combatant.hp}/${combatant.maxHp}</span>
                            </div>
                            <div class="hp-controls">
                                <button class="btn btn-danger hp-btn" onclick="app.openHpModal('${combatant.id}', 'damage')">-</button>
                                <button class="btn btn-success hp-btn" onclick="app.openHpModal('${combatant.id}', 'heal')">+</button>
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="card-conditions">
                        ${conditionsHtml}
                        <button class="btn btn-small add-condition-btn" onclick="app.openConditionModal('${combatant.id}')">+ 状态</button>
                    </div>
                    
                    <div class="card-actions">
                        <button class="btn btn-small btn-secondary" onclick="app.duplicateCombatant('${combatant.id}')" title="复制">📋</button>
                        <button class="btn btn-small btn-danger" onclick="app.removeCombatant('${combatant.id}')" title="删除">🗑️</button>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    /**
     * 获取战斗单位攻击信息HTML
     */
    getCombatantAttacksHtml(combatant) {
        if (!combatant.monsterId || typeof MONSTERS_DATA === 'undefined') return '';
        
        const monster = MONSTERS_DATA[combatant.monsterSource]?.monsters?.[combatant.monsterId];
        if (!monster || !monster.actions || monster.actions.length === 0) return '';
        
        // 只显示前3个攻击
        const attacks = monster.actions.slice(0, 3);
        const hasMore = monster.actions.length > 3;
        
        const attacksList = attacks.map(action => {
            const attackBonus = action.attack || '';
            const damage = action.damage || '';
            return `
                <div class="combat-attack-item">
                    <span class="attack-name-small">${this.escapeHtml(action.name.split(' ')[0])}</span>
                    ${attackBonus ? `<span class="attack-bonus-small">${attackBonus}</span>` : ''}
                    ${damage ? `<span class="attack-damage-small">${damage}</span>` : ''}
                </div>
            `;
        }).join('');
        
        return `
            <div class="combat-attacks">
                <div class="combat-attacks-list">
                    ${attacksList}
                </div>
                ${hasMore ? `<span class="attacks-more">+${monster.actions.length - 3} 更多</span>` : ''}
            </div>
        `;
    }
    
    /**
     * HTML转义
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // ==================== 怪物数据库功能 ====================
    
    /**
     * 打开怪物数据库模态框
     */
    openMonsterDatabase() {
        this.currentMonsterTab = 'basics';
        this.selectedMonsters = [];
        document.getElementById('monsterSearchInput').value = '';
        this.renderMonsterList();
        document.getElementById('monsterDatabaseModal').classList.add('show');
    }
    
    /**
     * 关闭怪物数据库模态框
     */
    closeMonsterDatabase() {
        document.getElementById('monsterDatabaseModal').classList.remove('show');
    }
    
    /**
     * 切换怪物数据库标签
     */
    switchMonsterTab(tab) {
        this.currentMonsterTab = tab;
        
        // 更新标签按钮状态
        document.querySelectorAll('.monster-database-tabs .tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        
        this.renderMonsterList();
    }
    
    /**
     * 搜索怪物
     */
    searchMonsters() {
        this.renderMonsterList();
    }
    
    /**
     * 渲染怪物列表
     */
    renderMonsterList() {
        const container = document.getElementById('monsterList');
        if (!container || typeof MONSTERS_DATA === 'undefined') return;
        
        const searchTerm = document.getElementById('monsterSearchInput').value.toLowerCase();
        const currentCategory = MONSTERS_DATA[this.currentMonsterTab];
        
        if (!currentCategory || !currentCategory.monsters) {
            container.innerHTML = '<div class="empty-state"><div class="empty-state-text">暂无怪物数据</div></div>';
            return;
        }
        
        const monsters = Object.entries(currentCategory.monsters).filter(([id, monster]) => {
            if (!searchTerm) return true;
            return monster.name.toLowerCase().includes(searchTerm) ||
                   (monster.notes && monster.notes.toLowerCase().includes(searchTerm));
        });
        
        if (monsters.length === 0) {
            container.innerHTML = '<div class="empty-state"><div class="empty-state-text">未找到匹配的怪物</div></div>';
            return;
        }
        
        container.innerHTML = monsters.map(([id, monster]) => {
            // 生成攻击信息HTML
            let attacksHtml = '';
            if (monster.actions && monster.actions.length > 0) {
                const attackActions = monster.actions.filter(a => 
                    a.type && (a.type.includes('攻击') || a.type.includes('法术'))
                );
                if (attackActions.length > 0) {
                    attacksHtml = `
                        <div class="monster-attacks-preview">
                            <div class="attacks-title">⚔️ 攻击</div>
                            <div class="attacks-list">
                                ${attackActions.slice(0, 3).map(action => `
                                    <div class="attack-item">
                                        <span class="attack-name">${this.escapeHtml(action.name)}</span>
                                        <span class="attack-bonus">${action.attack || ''}</span>
                                        <span class="attack-damage">${action.damage || ''}</span>
                                    </div>
                                `).join('')}
                                ${attackActions.length > 3 ? `<div class="attack-more">+${attackActions.length - 3} 更多攻击...</div>` : ''}
                            </div>
                        </div>
                    `;
                }
            }
            
            // 生成特性信息HTML
            let traitsHtml = '';
            if (monster.traits && monster.traits.length > 0) {
                traitsHtml = `
                    <div class="monster-traits-preview">
                        ${monster.traits.slice(0, 2).map(trait => `
                            <div class="trait-tag" title="${this.escapeHtml(trait.description)}">${this.escapeHtml(trait.name)}</div>
                        `).join('')}
                        ${monster.traits.length > 2 ? `<div class="trait-more">+${monster.traits.length - 2}</div>` : ''}
                    </div>
                `;
            }
            
            return `
            <div class="monster-card" data-id="${id}">
                <div class="monster-header">
                    <div class="monster-name">${this.escapeHtml(monster.name)}</div>
                    <span class="monster-cr">CR ${monster.cr}</span>
                </div>
                <div class="monster-stats">
                    <span class="monster-stat" title="生命值">❤️ ${monster.hp}</span>
                    <span class="monster-stat" title="护甲等级">🛡️ ${monster.ac}</span>
                    <span class="monster-stat" title="先攻">⚡ ${monster.initiative >= 0 ? '+' : ''}${monster.initiative}</span>
                    <span class="monster-stat" title="体型">📐 ${monster.size || '中型'}</span>
                </div>
                ${traitsHtml}
                ${attacksHtml}
                <div class="monster-source">${this.escapeHtml(monster.source || '')}</div>
                <div class="monster-actions">
                    <button class="btn btn-primary" onclick="app.addMonsterToCombat('${id}')">添加</button>
                    <button class="btn btn-secondary" onclick="app.viewMonsterDetails('${id}')">详情</button>
                    <button class="btn btn-secondary" onclick="app.addMonsterToCombat('${id}', true)">自定义</button>
                </div>
            </div>
        `}).join('');
    }
    
    /**
     * 添加怪物到战斗
     */
    addMonsterToCombat(monsterId, customize = false) {
        if (typeof MONSTERS_DATA === 'undefined') return;
        
        // 在所有分类中查找怪物
        let monster = null;
        let source = '';
        
        for (const category of ['basics', 'phandelver', 'expanded']) {
            if (MONSTERS_DATA[category] && MONSTERS_DATA[category].monsters[monsterId]) {
                monster = MONSTERS_DATA[category].monsters[monsterId];
                source = category;
                break;
            }
        }
        
        if (!monster) return;
        
        if (customize) {
            // 填充表单并关闭模态框
            document.getElementById('unitName').value = monster.name;
            document.getElementById('unitType').value = monster.type;
            document.getElementById('unitInitiative').value = monster.initiative;
            document.getElementById('unitHP').value = monster.hp;
            document.getElementById('unitMaxHP').value = monster.maxHp;
            document.getElementById('unitAC').value = monster.ac;
            document.getElementById('unitNotes').value = `[${monster.cr}] ${monster.notes || ''}`;
            this.closeMonsterDatabase();
            document.getElementById('unitName').focus();
        } else {
            // 直接添加
            const combatant = {
                id: this.generateId(),
                name: monster.name,
                type: monster.type,
                initiative: monster.initiative,
                hp: monster.hp,
                maxHp: monster.maxHp,
                ac: monster.ac,
                notes: `[${monster.cr}] ${monster.notes || ''}`,
                conditions: [],
                isDefeated: false,
                monsterId: monsterId,
                monsterSource: source
            };
            
            this.combatants.push(combatant);
            this.saveToStorage();
            this.render();
            
            // 显示提示
            this.showToast(`已添加 ${monster.name}`);
        }
    }
    
    /**
     * 显示提示消息
     */
    showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--success-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-hover);
            z-index: 9999;
            animation: fade-in-up 0.3s ease;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'fade-out 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }
    
    // ==================== 预设战斗功能 ====================
    
    /**
     * 打开预设战斗模态框
     */
    openPresetEncounters() {
        this.renderPresetEncounters();
        document.getElementById('presetEncountersModal').classList.add('show');
    }
    
    /**
     * 关闭预设战斗模态框
     */
    closePresetEncounters() {
        document.getElementById('presetEncountersModal').classList.remove('show');
    }
    
    /**
     * 渲染预设战斗列表
     */
    renderPresetEncounters() {
        const container = document.getElementById('encounterCampaigns');
        if (!container || typeof PRESET_ENCOUNTERS === 'undefined') {
            container.innerHTML = '<div class="empty-state"><div class="empty-state-text">预设战斗数据加载失败</div></div>';
            return;
        }
        
        let html = '';
        
        Object.entries(PRESET_ENCOUNTERS).forEach(([campaignId, campaign]) => {
            html += `
                <div class="campaign-section">
                    <div class="campaign-header">
                        <div class="campaign-title">${this.escapeHtml(campaign.name)}</div>
                        <div class="campaign-description">${this.escapeHtml(campaign.description)}</div>
                    </div>
            `;
            
            if (campaign.chapters) {
                Object.entries(campaign.chapters).forEach(([chapterId, chapter]) => {
                    html += `
                        <div class="chapter-section">
                            <div class="chapter-header">${this.escapeHtml(chapter.name)}</div>
                            <div class="chapter-description">${this.escapeHtml(chapter.description)}</div>
                            <div class="encounter-grid">
                    `;
                    
                    if (chapter.encounters) {
                        Object.entries(chapter.encounters).forEach(([encounterId, encounter]) => {
                            const monstersHtml = encounter.monsters.map(m => {
                                const monsterName = this.getMonsterName(m.id);
                                return `<span class="encounter-monster-tag">${this.escapeHtml(monsterName)} x${m.count}</span>`;
                            }).join('');
                            
                            html += `
                                <div class="encounter-card">
                                    <div class="encounter-name">${this.escapeHtml(encounter.name)}</div>
                                    <div class="encounter-description">${this.escapeHtml(encounter.description)}</div>
                                    <div class="encounter-monsters">${monstersHtml}</div>
                                    <div class="encounter-actions">
                                        <button class="btn btn-success" onclick="app.loadEncounter('${campaignId}', '${chapterId}', '${encounterId}')">加载战斗</button>
                                        <button class="btn btn-secondary" onclick="app.appendEncounter('${campaignId}', '${chapterId}', '${encounterId}')">追加</button>
                                    </div>
                                </div>
                            `;
                        });
                    }
                    
                    html += `
                            </div>
                        </div>
                    `;
                });
            }
            
            html += `</div>`;
        });
        
        container.innerHTML = html;
    }
    
    /**
     * 获取怪物名称
     */
    getMonsterName(monsterId) {
        if (typeof MONSTERS_DATA === 'undefined') return monsterId;
        
        for (const category of ['basics', 'phandelver', 'expanded']) {
            if (MONSTERS_DATA[category] && MONSTERS_DATA[category].monsters[monsterId]) {
                return MONSTERS_DATA[category].monsters[monsterId].name;
            }
        }
        return monsterId;
    }
    
    /**
     * 加载预设战斗（替换当前战斗）
     */
    loadEncounter(campaignId, chapterId, encounterId) {
        if (!confirm('加载此预设战斗将清空当前所有单位，是否继续？')) return;
        
        this.combatants = [];
        this.currentTurn = 0;
        this.currentRound = 1;
        
        this.appendEncounter(campaignId, chapterId, encounterId, false);
        this.closePresetEncounters();
    }
    
    /**
     * 追加预设战斗
     */
    appendEncounter(campaignId, chapterId, encounterId, closeModal = true) {
        if (typeof PRESET_ENCOUNTERS === 'undefined' || typeof MONSTERS_DATA === 'undefined') return;
        
        const encounter = PRESET_ENCOUNTERS[campaignId]?.chapters[chapterId]?.encounters[encounterId];
        if (!encounter) return;
        
        let addedCount = 0;
        
        encounter.monsters.forEach(monsterRef => {
            // 查找怪物数据
            let monster = null;
            let sourceCategory = '';
            for (const category of ['basics', 'phandelver', 'expanded']) {
                if (MONSTERS_DATA[category] && MONSTERS_DATA[category].monsters[monsterRef.id]) {
                    monster = MONSTERS_DATA[category].monsters[monsterRef.id];
                    sourceCategory = category;
                    break;
                }
            }
            
            if (monster) {
                for (let i = 0; i < monsterRef.count; i++) {
                    const combatant = {
                        id: this.generateId(),
                        name: monsterRef.count > 1 ? `${monster.name} ${i + 1}` : monster.name,
                        type: monster.type,
                        initiative: monster.initiative,
                        hp: monster.hp,
                        maxHp: monster.maxHp,
                        ac: monster.ac,
                        notes: `[${monster.cr}] ${monster.notes || ''}`,
                        conditions: [],
                        isDefeated: false,
                        monsterId: monsterRef.id,
                        monsterSource: sourceCategory
                    };
                    this.combatants.push(combatant);
                    addedCount++;
                }
            }
        });
        
        this.saveToStorage();
        this.render();
        
        if (closeModal) {
            this.closePresetEncounters();
        }
        
        this.showToast(`已添加 ${addedCount} 个单位`);
    }
    
    /**
     * 查看怪物详情
     */
    viewMonsterDetails(monsterId) {
        if (typeof MONSTERS_DATA === 'undefined') return;
        
        // 在所有分类中查找怪物
        let monster = null;
        let sourceCategory = '';
        
        for (const category of ['basics', 'phandelver', 'expanded']) {
            if (MONSTERS_DATA[category] && MONSTERS_DATA[category].monsters[monsterId]) {
                monster = MONSTERS_DATA[category].monsters[monsterId];
                sourceCategory = category;
                break;
            }
        }
        
        if (!monster) return;
        
        // 生成详情HTML
        const detailsHtml = this.generateMonsterDetailsHtml(monster);
        
        // 创建并显示详情模态框
        const modal = document.createElement('div');
        modal.id = 'monsterDetailsModal';
        modal.className = 'modal show';
        modal.innerHTML = `
            <div class="modal-content large-modal">
                <div class="modal-header">
                    <h3>${this.escapeHtml(monster.name)}</h3>
                    <button class="close-btn" onclick="app.closeMonsterDetails()">&times;</button>
                </div>
                <div class="modal-body monster-details-body">
                    ${detailsHtml}
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" onclick="app.addMonsterToCombat('${monsterId}'); app.closeMonsterDetails();">添加到战斗</button>
                    <button class="btn btn-secondary" onclick="app.closeMonsterDetails()">关闭</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 点击外部关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeMonsterDetails();
            }
        });
    }
    
    /**
     * 关闭怪物详情模态框
     */
    closeMonsterDetails() {
        const modal = document.getElementById('monsterDetailsModal');
        if (modal) {
            modal.remove();
        }
    }
    
    /**
     * 生成怪物详情HTML
     */
    generateMonsterDetailsHtml(monster) {
        // 基础信息
        let html = `
            <div class="monster-details-section">
                <div class="monster-details-header">
                    <div class="monster-meta">
                        <span class="meta-tag size">${monster.size || '中型'}</span>
                        <span class="meta-tag alignment">${monster.alignment || '无阵营'}</span>
                        <span class="meta-tag cr">CR ${monster.cr}</span>
                        <span class="meta-tag xp">${monster.xp || '-'} XP</span>
                    </div>
                    <div class="monster-basic-stats">
                        <div class="basic-stat">
                            <span class="stat-label">护甲等级</span>
                            <span class="stat-value">${monster.ac}</span>
                        </div>
                        <div class="basic-stat">
                            <span class="stat-label">生命值</span>
                            <span class="stat-value">${monster.hp} (${monster.maxHp})</span>
                        </div>
                        <div class="basic-stat">
                            <span class="stat-label">速度</span>
                            <span class="stat-value">${monster.speed || '30尺'}</span>
                        </div>
                        <div class="basic-stat">
                            <span class="stat-label">先攻</span>
                            <span class="stat-value">${monster.initiative >= 0 ? '+' : ''}${monster.initiative}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // 属性值
        if (monster.abilities) {
            html += `
                <div class="monster-details-section">
                    <h4 class="section-title">属性值</h4>
                    <div class="abilities-grid">
                        ${Object.entries(monster.abilities).map(([ability, value]) => {
                            const modifier = Math.floor((value - 10) / 2);
                            const modStr = modifier >= 0 ? `+${modifier}` : modifier;
                            const abilityNames = { str: '力量', dex: '敏捷', con: '体质', int: '智力', wis: '感知', cha: '魅力' };
                            return `
                                <div class="ability-box">
                                    <div class="ability-name">${abilityNames[ability] || ability.toUpperCase()}</div>
                                    <div class="ability-value">${value}</div>
                                    <div class="ability-mod">(${modStr})</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        }
        
        // 特性
        if (monster.traits && monster.traits.length > 0) {
            html += `
                <div class="monster-details-section">
                    <h4 class="section-title">特性</h4>
                    <div class="traits-list">
                        ${monster.traits.map(trait => `
                            <div class="trait-detail">
                                <div class="trait-name">${this.escapeHtml(trait.name)}</div>
                                <div class="trait-description">${this.escapeHtml(trait.description)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // 动作
        if (monster.actions && monster.actions.length > 0) {
            html += `
                <div class="monster-details-section">
                    <h4 class="section-title">动作</h4>
                    <div class="actions-list">
                        ${monster.actions.map(action => `
                            <div class="action-detail">
                                <div class="action-header">
                                    <span class="action-name">${this.escapeHtml(action.name)}</span>
                                    <span class="action-type">${action.type || ''}</span>
                                </div>
                                ${action.attack ? `<div class="action-attack">攻击检定: ${action.attack}</div>` : ''}
                                ${action.reach ? `<div class="action-reach">触及: ${action.reach}</div>` : ''}
                                ${action.range ? `<div class="action-range">射程: ${action.range}</div>` : ''}
                                ${action.target ? `<div class="action-target">目标: ${action.target}</div>` : ''}
                                ${action.hit ? `<div class="action-hit">命中: ${this.escapeHtml(action.hit)}</div>` : ''}
                                ${action.damage ? `<div class="action-damage">💥 ${action.damage}</div>` : ''}
                                ${action.description ? `<div class="action-description">${this.escapeHtml(action.description)}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // 附赠动作
        if (monster.bonusActions && monster.bonusActions.length > 0) {
            html += `
                <div class="monster-details-section">
                    <h4 class="section-title">附赠动作</h4>
                    <div class="actions-list">
                        ${monster.bonusActions.map(action => `
                            <div class="action-detail bonus-action">
                                <div class="action-name">${this.escapeHtml(action.name)}</div>
                                <div class="action-description">${this.escapeHtml(action.description)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // 反应
        if (monster.reactions && monster.reactions.length > 0) {
            html += `
                <div class="monster-details-section">
                    <h4 class="section-title">反应</h4>
                    <div class="actions-list">
                        ${monster.reactions.map(reaction => `
                            <div class="action-detail reaction">
                                <div class="action-name">${this.escapeHtml(reaction.name)}</div>
                                <div class="action-description">${this.escapeHtml(reaction.description)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        return html;
    }
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-in-up {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 初始化应用
const app = new CombatTracker();
