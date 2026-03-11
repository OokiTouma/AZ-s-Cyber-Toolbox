(() => {
    const DRAFT_KEY = 'dnd_character_creator_v2_draft';
    const MOBILE = window.matchMedia('(max-width: 960px)');
    const state = { cards: [], nav: new Map(), saveTimer: null, refreshTimer: null };

    document.addEventListener('DOMContentLoaded', () => setTimeout(init, 0));

    function init() {
        if (!window.characterApp) {
            setTimeout(init, 100);
            return;
        }

        const header = document.querySelector('.char-header');
        const main = document.querySelector('.char-main');
        const form = document.querySelector('.character-form');
        const sheet = document.querySelector('.character-sheet');
        if (!header || !main || !form || !sheet) return;

        state.cards = Array.from(form.children).filter((el) => el.classList.contains('char-card'));
        if (!state.cards.length) return;

        patchHeader();
        injectHero(header);
        decorateCards();
        injectRail(main, form);
        injectMobileBar();
        bindEvents(form, sheet);
        observe(form, sheet);
        applyMobileDefault();
        refresh();
    }

    function patchHeader() {
        const title = document.querySelector('.char-header h1');
        const dropdown = document.getElementById('headerDropdown');
        if (title) title.innerHTML = '角色卡生成器 <span class="v2-header-badge">新版</span>';
        if (dropdown && !dropdown.querySelector('[data-v2-old-link]')) {
            const link = document.createElement('a');
            link.href = '/AZ-s-Cyber-Toolbox/dnd-character-creator/index.html';
            link.className = 'dropdown-item';
            link.dataset.v2OldLink = 'true';
            link.textContent = '🕰️ 打开旧版';
            dropdown.insertBefore(link, dropdown.querySelector('.dropdown-divider') || dropdown.firstChild);
        }
    }

    function injectHero(header) {
        const hero = document.createElement('section');
        hero.className = 'v2-hero';
        hero.innerHTML = `
            <div class="v2-hero-copy">
                <span class="v2-eyebrow">新版工作台</span>
                <h2 class="v2-hero-title">更顺手的角色创建流程</h2>
                <p class="v2-hero-text">保留旧版全部核心功能，并增加章节导航、自动草稿、快捷操作与实时摘要。</p>
                <div class="v2-hero-actions">
                    <button type="button" class="v2-action-btn v2-action-btn-primary" data-v2-action="save">保存角色</button>
                    <button type="button" class="v2-action-btn" data-v2-action="random">随机生成</button>
                    <button type="button" class="v2-action-btn" data-v2-action="pdf">导出 PDF</button>
                    <button type="button" class="v2-action-btn" data-v2-action="sheet">查看预览</button>
                    <a href="/AZ-s-Cyber-Toolbox/dnd-character-creator/index.html" class="v2-action-btn v2-action-btn-ghost">打开旧版</a>
                    <button type="button" class="v2-icon-btn" id="darkModeToggle" data-v2-action="theme" aria-label="切换主题">🌙</button>
                </div>
                <div class="v2-shortcuts">快捷键：Ctrl/Cmd + S 保存 · Shift + R 随机生成 · D 切换主题</div>
            </div>
            <div class="v2-hero-panel">
                <div class="v2-summary-overline">实时摘要</div>
                <div class="v2-summary-name" id="v2SummaryName">未命名角色</div>
                <div class="v2-summary-role" id="v2SummaryRole">选择种族、职业与背景后，这里会自动更新。</div>
                <div class="v2-summary-grid">
                    <div class="v2-summary-item"><span>总等级</span><strong id="v2SummaryLevel">1级</strong></div>
                    <div class="v2-summary-item"><span>护甲等级</span><strong id="v2SummaryAc">-</strong></div>
                    <div class="v2-summary-item"><span>生命值</span><strong id="v2SummaryHp">-</strong></div>
                    <div class="v2-summary-item"><span>熟练加值</span><strong id="v2SummaryProf">-</strong></div>
                    <div class="v2-summary-item"><span>法术数</span><strong id="v2SummarySpells">0</strong></div>
                    <div class="v2-summary-item"><span>语言数</span><strong id="v2SummaryLanguages">0</strong></div>
                </div>
                <div class="v2-draft-banner" id="v2DraftBanner"></div>
            </div>
        `;
        header.insertAdjacentElement('afterend', hero);
    }

    function decorateCards() {
        state.cards.forEach((card, index) => {
            const title = card.querySelector('.char-card-title');
            if (!title) return;
            const text = clean(title.textContent).replace(/^[^\u4e00-\u9fa5A-Za-z]+/, '').trim() || `板块 ${index + 1}`;
            card.id = `v2-section-${index + 1}`;
            card.dataset.v2Key = inferKey(text, index);
            card.dataset.v2Title = text;
            if (!title.querySelector('.v2-card-toolbar')) {
                const toolbar = document.createElement('span');
                toolbar.className = 'v2-card-toolbar';
                toolbar.innerHTML = `<span class="v2-card-status">未开始</span><button type="button" class="v2-card-toggle" data-v2-toggle="${card.id}" aria-expanded="true">收起</button>`;
                title.appendChild(toolbar);
            }
        });
    }

    function injectRail(main, form) {
        const rail = document.createElement('aside');
        rail.className = 'v2-rail';
        rail.innerHTML = `
            <div class="v2-rail-block">
                <div class="v2-rail-title-row"><span class="v2-rail-eyebrow">创建导航</span><strong id="v2ProgressLabel">0%</strong></div>
                <div class="v2-progress-track"><span id="v2ProgressBar"></span></div>
                <div class="v2-progress-text" id="v2ProgressText">等待填写核心信息</div>
            </div>
            <div class="v2-rail-actions">
                <button type="button" class="v2-mini-btn" data-v2-action="expand">展开全部</button>
                <button type="button" class="v2-mini-btn" data-v2-action="collapse">收起全部</button>
                <button type="button" class="v2-mini-btn" data-v2-action="load">载入角色</button>
            </div>
            <div class="v2-rail-block">
                <div class="v2-rail-eyebrow">自动草稿</div>
                <div class="v2-autosave-text" id="v2AutosaveText">自动草稿已启用</div>
                <div class="v2-inline-actions" id="v2AutosaveActions"></div>
            </div>
            <div class="v2-nav-list" id="v2NavList"></div>
        `;
        const list = rail.querySelector('#v2NavList');
        state.cards.forEach((card, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'v2-nav-button';
            button.dataset.v2Target = card.id;
            button.innerHTML = `<span class="v2-nav-index">${String(index + 1).padStart(2, '0')}</span><span class="v2-nav-copy"><strong>${escapeHtml(card.dataset.v2Title)}</strong><small>未开始</small></span><span class="v2-nav-state"></span>`;
            list.appendChild(button);
            state.nav.set(card.id, button);
        });
        main.insertBefore(rail, form);
    }

    function injectMobileBar() {
        const bar = document.createElement('div');
        bar.className = 'v2-mobile-actions';
        bar.innerHTML = `<button type="button" class="v2-mobile-btn" data-v2-action="save">保存</button><button type="button" class="v2-mobile-btn" data-v2-action="random">随机</button><button type="button" class="v2-mobile-btn" data-v2-action="sheet">预览</button><a href="/AZ-s-Cyber-Toolbox/dnd-character-creator/index.html" class="v2-mobile-btn">旧版</a>`;
        document.body.appendChild(bar);
    }

    function bindEvents(form, sheet) {
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleHotkeys);
        document.addEventListener('input', (event) => onFormChange(event, form, sheet), true);
        document.addEventListener('change', (event) => onFormChange(event, form, sheet), true);
        window.addEventListener('scroll', updateActiveNav, { passive: true });
        if (typeof MOBILE.addEventListener === 'function') MOBILE.addEventListener('change', applyMobileDefault);
        new MutationObserver(syncThemeButton).observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    }

    function observe(form, sheet) {
        const observer = new MutationObserver(() => { scheduleRefresh(); scheduleSave(); });
        observer.observe(form, { childList: true, subtree: true, attributes: true });
        observer.observe(sheet, { childList: true, subtree: true, attributes: true, characterData: true });
    }

    function handleClick(event) {
        const toggle = event.target.closest('[data-v2-toggle]');
        if (toggle) return setCollapsed(document.getElementById(toggle.dataset.v2Toggle), !document.getElementById(toggle.dataset.v2Toggle).classList.contains('is-collapsed'));
        const nav = event.target.closest('[data-v2-target]');
        if (nav) return openCard(document.getElementById(nav.dataset.v2Target));
        const action = event.target.closest('[data-v2-action]');
        if (!action) return;
        if (action.dataset.v2Action === 'save') characterApp.saveCharacter();
        if (action.dataset.v2Action === 'load') characterApp.loadCharacter();
        if (action.dataset.v2Action === 'random') characterApp.randomCharacter();
        if (action.dataset.v2Action === 'pdf') characterApp.exportPDF();
        if (action.dataset.v2Action === 'sheet') document.querySelector('.character-sheet')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (action.dataset.v2Action === 'theme') characterApp.toggleDarkMode();
        if (action.dataset.v2Action === 'expand') state.cards.forEach((card) => setCollapsed(card, false));
        if (action.dataset.v2Action === 'collapse') state.cards.forEach((card, index) => setCollapsed(card, MOBILE.matches ? index > 0 : true));
        if (action.dataset.v2Action === 'restore-draft') restoreDraft();
        if (action.dataset.v2Action === 'discard-draft') clearDraft();
        setTimeout(refresh, 80);
    }

    function onFormChange(event, form, sheet) {
        if (!event.target.closest('.character-form') && !event.target.closest('.character-sheet')) return;
        scheduleRefresh();
        scheduleSave();
    }

    function handleHotkeys(event) {
        const key = event.key.toLowerCase();
        const typing = /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable;
        if ((event.ctrlKey || event.metaKey) && key === 's') {
            event.preventDefault();
            characterApp.saveCharacter();
            return;
        }
        if (typing) return;
        if (event.shiftKey && key === 'r') { event.preventDefault(); characterApp.randomCharacter(); }
        if (!event.ctrlKey && !event.metaKey && !event.altKey && key === 'd') { event.preventDefault(); characterApp.toggleDarkMode(); }
    }

    function applyMobileDefault() {
        if (!MOBILE.matches) return state.cards.forEach((card) => setCollapsed(card, false));
        state.cards.forEach((card, index) => setCollapsed(card, index > 0));
    }

    function openCard(card) {
        if (!card) return;
        if (MOBILE.matches) state.cards.forEach((item) => setCollapsed(item, item !== card));
        setCollapsed(card, false);
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function setCollapsed(card, collapsed) {
        if (!card) return;
        card.classList.toggle('is-collapsed', collapsed);
        const toggle = card.querySelector('.v2-card-toggle');
        if (toggle) {
            toggle.textContent = collapsed ? '展开' : '收起';
            toggle.setAttribute('aria-expanded', String(!collapsed));
        }
    }

    function scheduleRefresh() { clearTimeout(state.refreshTimer); state.refreshTimer = setTimeout(refresh, 80); }
    function scheduleSave() { clearTimeout(state.saveTimer); state.saveTimer = setTimeout(saveDraft, 500); }

    function refresh() {
        syncThemeButton();
        updateSummary();
        updateStatus();
        updateProgress();
        updateActiveNav();
        updateDraftUi();
    }

    function updateSummary() {
        const character = characterApp.character || {};
        const level = (character.level || 1) + (Array.isArray(character.multiclass) ? character.multiclass.reduce((sum, item) => sum + (item.level || 0), 0) : 0);
        const role = [selectedText('raceSelect'), selectedText('classSelect')].filter(Boolean).join(' / ');
        setText('v2SummaryName', character.name || '未命名角色');
        setText('v2SummaryRole', role ? `${role}${selectedText('backgroundSelect') ? ` · ${selectedText('backgroundSelect')}` : ''}` : '选择种族、职业与背景后，这里会自动更新。');
        setText('v2SummaryLevel', `${Math.max(level, 1)}级`);
        setText('v2SummaryAc', clean(document.getElementById('sheetAC')?.textContent || '-') || '-');
        setText('v2SummaryHp', character.maxHP ? `${character.currentHP || 0}/${character.maxHP}` : '—');
        setText('v2SummaryProf', clean(document.getElementById('sheetProficiency')?.textContent || '-') || '-');
        setText('v2SummarySpells', String((character.spells || []).length || 0));
        setText('v2SummaryLanguages', String((character.languages || []).length || 0));
    }

    function updateStatus() {
        state.cards.forEach((card) => {
            const info = evaluate(card);
            card.dataset.v2State = info.state;
            const badge = card.querySelector('.v2-card-status');
            if (badge) badge.textContent = info.label;
            const nav = state.nav.get(card.id);
            if (!nav) return;
            nav.dataset.v2State = info.state;
            const small = nav.querySelector('small');
            if (small) small.textContent = info.detail;
        });
    }

    function updateProgress() {
        const list = state.cards.map((card) => evaluate(card)).filter((item) => !item.optional);
        const total = list.length || 1;
        const percent = Math.round((list.reduce((sum, item) => sum + item.ratio, 0) / total) * 100);
        const done = list.filter((item) => item.ratio >= 0.999).length;
        const bar = document.getElementById('v2ProgressBar');
        if (bar) bar.style.width = `${percent}%`;
        setText('v2ProgressLabel', `${percent}%`);
        setText('v2ProgressText', `${done}/${total} 个核心板块已完成`);
    }

    function updateActiveNav() {
        let active = state.cards[0];
        state.cards.forEach((card) => { if (card.getBoundingClientRect().top <= 180) active = card; });
        state.nav.forEach((button, id) => button.classList.toggle('is-active', active && id === active.id));
    }

    function saveDraft() {
        if (!hasContent(characterApp.character)) return updateDraftUi();
        localStorage.setItem(DRAFT_KEY, JSON.stringify({ savedAt: Date.now(), character: characterApp.character }));
        updateDraftUi();
    }

    function restoreDraft() {
        const draft = readDraft();
        if (!draft?.character) return;
        characterApp.character = mergeCharacter(draft.character);
        characterApp.updateUI();
        setValue('charAlignment', characterApp.character.alignment || '');
        setValue('backstory', characterApp.character.backstory || '');
        setValue('personality', characterApp.character.personality || '');
        setValue('ideals', characterApp.character.ideals || '');
        setValue('bonds', characterApp.character.bonds || '');
        setValue('flaws', characterApp.character.flaws || '');
        setValue('equipment', characterApp.character.equipment || '');
        setValue('wealthPP', characterApp.character.wealth?.pp || 0);
        setValue('wealthGP', characterApp.character.wealth?.gp || 0);
        setValue('wealthSP', characterApp.character.wealth?.sp || 0);
        setValue('wealthCP', characterApp.character.wealth?.cp || 0);
        setValue('armorSelect', characterApp.character.armor || '');
        setValue('currentHP', characterApp.character.currentHP || 0);
        setValue('tempHPInput', characterApp.character.tempHP || 0);
        const shield = document.getElementById('shieldCheckbox');
        if (shield) shield.checked = Boolean(characterApp.character.shield);
        if (characterApp.character.race) characterApp.selectRace?.(characterApp.character.race);
        if (characterApp.character.variant) { setValue('variantSelect', characterApp.character.variant); characterApp.selectVariant?.(characterApp.character.variant); }
        if (characterApp.character.subrace) { setValue('subraceSelect', characterApp.character.subrace); characterApp.selectSubrace?.(characterApp.character.subrace); }
        if (characterApp.character.class) characterApp.selectClass?.(characterApp.character.class);
        if (characterApp.character.subclass) { setValue('subclassSelect', characterApp.character.subclass); characterApp.selectSubclass?.(characterApp.character.subclass); }
        if (characterApp.character.background) characterApp.selectBackground?.(characterApp.character.background);
        characterApp.updateAbilitySelects?.();
        characterApp.updateAbilityScores?.();
        characterApp.renderLanguagesList?.();
        characterApp.updateArmorDisplay?.();
        characterApp.updateCharacterSheet?.();
        characterApp.showNotification?.('已恢复自动草稿', 'success');
        refresh();
    }

    function clearDraft() {
        localStorage.removeItem(DRAFT_KEY);
        updateDraftUi();
    }

    function updateDraftUi() {
        const draft = readDraft();
        setText('v2AutosaveText', draft ? `草稿更新于 ${formatTime(draft.savedAt)}` : '自动草稿已启用');
        const actions = document.getElementById('v2AutosaveActions');
        if (actions) actions.innerHTML = draft ? '<button type="button" class="v2-inline-btn" data-v2-action="restore-draft">恢复</button><button type="button" class="v2-inline-btn" data-v2-action="discard-draft">清除</button>' : '';
        const banner = document.getElementById('v2DraftBanner');
        if (!banner) return;
        if (draft && !hasContent(characterApp.character)) {
            banner.classList.add('is-visible');
            banner.innerHTML = `<div class="v2-draft-copy"><strong>检测到自动草稿</strong><span>上次更新于 ${formatTime(draft.savedAt)}，可以一键恢复继续编辑。</span></div><div class="v2-draft-actions"><button type="button" class="v2-mini-btn v2-mini-btn-solid" data-v2-action="restore-draft">恢复草稿</button><button type="button" class="v2-mini-btn" data-v2-action="discard-draft">忽略</button></div>`;
        } else {
            banner.classList.remove('is-visible');
            banner.innerHTML = '';
        }
    }

    function evaluate(card) {
        const key = card.dataset.v2Key;
        const character = characterApp.character || {};
        const classes = typeof CLASSES !== 'undefined' ? CLASSES : {};
        let ratio = 0;
        let optional = false;
        if (key === 'base') ratio = filled(['charName', 'playerName', 'charAlignment']) / 3;
        if (key === 'race') ratio = character.race ? 1 : 0;
        if (key === 'class') ratio = character.class ? 1 : 0;
        if (key === 'multiclass') { optional = true; ratio = 1; }
        if (key === 'background') ratio = character.background ? 1 : 0;
        if (key === 'abilities') { const selects = Array.from(document.querySelectorAll('.ability-base')); ratio = selects.length ? selects.filter((item) => item.value).length / selects.length : 0; }
        if (key === 'skills') { const need = classes[character.class]?.skillCount || 2; const has = character.proficiencies?.skills?.length || 0; ratio = Math.min(has / need, 1); }
        if (key === 'weapons') ratio = ((character.weapons?.melee?.length || 0) + (character.weapons?.ranged?.length || 0)) ? 1 : 0;
        if (key === 'wealth') { optional = true; ratio = 1; }
        if (key === 'equipment') ratio = (clean(character.equipment) || character.armor || character.shield) ? 1 : 0;
        if (key === 'feats') { optional = ((((character.level || 1) + (Array.isArray(character.multiclass) ? character.multiclass.reduce((sum, item) => sum + (item.level || 0), 0) : 0))) < 4); ratio = optional ? 1 : ((character.feats || []).length ? 1 : 0); }
        if (key === 'spells') { optional = card.offsetParent === null || getComputedStyle(card).display === 'none'; ratio = optional ? 1 : ((character.spells || []).length ? 1 : 0); }
        if (key === 'story') ratio = [character.backstory, character.personality, character.ideals, character.bonds, character.flaws].filter((item) => clean(item)).length / 5;
        const stateName = optional ? 'optional' : ratio >= 0.999 ? 'complete' : ratio > 0 ? 'active' : 'empty';
        return { ratio: Math.max(0, Math.min(1, ratio)), optional, state: stateName, label: optional ? '可选' : stateName === 'complete' ? '已完成' : stateName === 'active' ? `${Math.round(ratio * 100)}%` : '未开始', detail: optional ? '按需填写' : stateName === 'complete' ? '已完成' : stateName === 'active' ? '进行中' : '等待填写' };
    }

    function mergeCharacter(saved) {
        const defaults = characterApp.getDefaultCharacter();
        return {
            ...defaults,
            ...saved,
            abilities: {
                strength: { ...defaults.abilities.strength, ...(saved.abilities?.strength || {}) },
                dexterity: { ...defaults.abilities.dexterity, ...(saved.abilities?.dexterity || {}) },
                constitution: { ...defaults.abilities.constitution, ...(saved.abilities?.constitution || {}) },
                intelligence: { ...defaults.abilities.intelligence, ...(saved.abilities?.intelligence || {}) },
                wisdom: { ...defaults.abilities.wisdom, ...(saved.abilities?.wisdom || {}) },
                charisma: { ...defaults.abilities.charisma, ...(saved.abilities?.charisma || {}) }
            },
            proficiencies: { ...defaults.proficiencies, ...(saved.proficiencies || {}) },
            weapons: { melee: Array.isArray(saved.weapons?.melee) ? saved.weapons.melee : [], ranged: Array.isArray(saved.weapons?.ranged) ? saved.weapons.ranged : [] },
            wealth: { ...defaults.wealth, ...(saved.wealth || {}) },
            multiclass: Array.isArray(saved.multiclass) ? saved.multiclass : [],
            feats: Array.isArray(saved.feats) ? saved.feats : [],
            spells: Array.isArray(saved.spells) ? saved.spells : [],
            languages: Array.isArray(saved.languages) ? saved.languages : [],
            scoreSets: Array.isArray(saved.scoreSets) ? saved.scoreSets : [],
            rolledScores: Array.isArray(saved.rolledScores) ? saved.rolledScores : [],
            usedScores: Array.isArray(saved.usedScores) ? saved.usedScores : [],
            spellChoices: saved.spellChoices || {},
            pendingSpellChoices: Array.isArray(saved.pendingSpellChoices) ? saved.pendingSpellChoices : []
        };
    }

    function syncThemeButton() {
        const btn = document.getElementById('darkModeToggle');
        if (!btn) return;
        const dark = document.body.getAttribute('data-theme') === 'dark';
        btn.textContent = dark ? '☀️' : '🌙';
        btn.title = dark ? '切换到浅色主题' : '切换到深色主题';
        btn.setAttribute('aria-label', btn.title);
    }

    function readDraft() { try { return JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null'); } catch { return null; } }
    function hasContent(character) { return !!(character && (character.name || character.playerName || character.race || character.class || character.background || clean(character.backstory) || clean(character.personality) || clean(character.ideals) || clean(character.bonds) || clean(character.flaws) || clean(character.equipment) || character.languages?.length || character.spells?.length || character.feats?.length || character.proficiencies?.skills?.length || character.weapons?.melee?.length || character.weapons?.ranged?.length)); }
    function filled(ids) { return ids.filter((id) => clean(document.getElementById(id)?.value)).length; }
    function selectedText(id) { const el = document.getElementById(id); return el?.selectedIndex >= 0 ? (clean(el.options[el.selectedIndex].textContent).startsWith('--') ? '' : clean(el.options[el.selectedIndex].textContent)) : ''; }
    function formatTime(value) { const diff = Math.floor((Date.now() - value) / 60000); if (diff <= 0) return '刚刚'; if (diff < 60) return `${diff} 分钟前`; const hours = Math.floor(diff / 60); if (hours < 24) return `${hours} 小时前`; return new Date(value).toLocaleString('zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }); }
    function setText(id, value) { const el = document.getElementById(id); if (el) el.textContent = value; }
    function setValue(id, value) { const el = document.getElementById(id); if (el) el.value = value; }
    function clean(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
    function inferKey(title, index) { if (title.includes('基础')) return 'base'; if (title.includes('种族')) return 'race'; if (title.includes('职业')) return index === 3 ? 'multiclass' : 'class'; if (title.includes('兼职')) return 'multiclass'; if (title.includes('背景') && !title.includes('故事')) return 'background'; if (title.includes('属性')) return 'abilities'; if (title.includes('技能')) return 'skills'; if (title.includes('武器')) return 'weapons'; if (title.includes('财富')) return 'wealth'; if (title.includes('装备')) return 'equipment'; if (title.includes('专长')) return 'feats'; if (title.includes('法术')) return 'spells'; return 'story'; }
    function escapeHtml(text) { return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
})();
