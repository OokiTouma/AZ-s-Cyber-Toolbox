// D&D 5E 角色卡生成器 - 应用程序

class CharacterApp {
    constructor() {
        this.character = this.getDefaultCharacter();
        this.errors = [];
        this.validationRules = this.getValidationRules();
        this.init();
    }

    getDefaultCharacter() {
        return {
            name: '',
            playerName: '',
            level: 1,
            xp: 0,
            race: '',
            subrace: '',
            variant: '',
            class: '',
            subclass: '',
            background: '',
            abilities: {
                strength: { base: 10, racial: 0, featBonus: 0 },
                dexterity: { base: 10, racial: 0, featBonus: 0 },
                constitution: { base: 10, racial: 0, featBonus: 0 },
                intelligence: { base: 10, racial: 0, featBonus: 0 },
                wisdom: { base: 10, racial: 0, featBonus: 0 },
                charisma: { base: 10, racial: 0, featBonus: 0 }
            },
            scoreSets: [],
            selectedScoreSet: null,
            rolledScores: [],
            usedScores: [],
            skills: {},
            proficiencies: {
                skills: [],
                saves: [],
                armor: [],
                weapons: [],
                tools: []
            },
            feats: [],
            spells: [],
            weapons: {
                melee: [],
                ranged: []
            },
            multiclass: [],
            wealth: {
                pp: 0,
                gp: 0,
                ep: 0,
                sp: 0,
                cp: 0
            },
            equipment: '',
            armor: '',
            shield: false,
            currentHP: 0,
            maxHP: 0,
            tempHP: 0,
            backstory: '',
            personality: '',
            ideals: '',
            bonds: '',
            flaws: '',
            spellChoices: {},
            pendingSpellChoices: []
        };
    }

    // 获取验证规则
    getValidationRules() {
        return {
            name: {
                required: false,
                maxLength: 50,
                pattern: /^[\u4e00-\u9fa5a-zA-Z0-9\s\-\'\.]+$/
            },
            level: {
                required: true,
                min: 1,
                max: 20
            },
            race: {
                required: true
            },
            class: {
                required: true
            },
            abilities: {
                required: true,
                min: 1,
                max: 20
            }
        };
    }

    // 验证角色数据
    validateCharacter() {
        this.errors = [];
        const rules = this.validationRules;

        // 验证角色姓名
        if (this.character.name && rules.name.pattern) {
            if (!rules.name.pattern.test(this.character.name)) {
                this.errors.push('角色姓名包含非法字符');
            }
            if (this.character.name.length > rules.name.maxLength) {
                this.errors.push(`角色姓名不能超过${rules.name.maxLength}个字符`);
            }
        }

        // 验证等级
        if (rules.level.required && !this.character.level) {
            this.errors.push('等级不能为空');
        } else if (this.character.level < rules.level.min || this.character.level > rules.level.max) {
            this.errors.push(`等级必须在${rules.level.min}-${rules.level.max}之间`);
        }

        // 验证种族
        if (rules.race.required && !this.character.race) {
            this.errors.push('请选择一个种族');
        } else if (this.character.race && !RACES[this.character.race]) {
            this.errors.push('选择的种族无效');
        }

        // 验证职业
        if (rules.class.required && !this.character.class) {
            this.errors.push('请选择一个职业');
        } else if (this.character.class && !CLASSES[this.character.class]) {
            this.errors.push('选择的职业无效');
        }

        // 验证属性值
        let hasValidAbility = false;
        for (const [ability, scores] of Object.entries(this.character.abilities)) {
            const total = (scores.base || 0) + scores.racial;
            if (scores.base !== null) {
                hasValidAbility = true;
                if (total < rules.abilities.min || total > rules.abilities.max) {
                    this.errors.push(`${ability}值必须在${rules.abilities.min}-${rules.abilities.max}之间`);
                }
            }
        }

        // 验证技能选择数量
        if (this.character.class && CLASSES[this.character.class]) {
            const cls = CLASSES[this.character.class];
            const maxSkills = cls.skillCount || 2;
            const classSkills = this.character.proficiencies.skills.filter(skill => 
                cls.skills && cls.skills.includes(skill)
            );
            if (classSkills.length > maxSkills) {
                this.errors.push(`${cls.name}只能选择${maxSkills}个职业技能熟练`);
            }
        }

        return this.errors.length === 0;
    }

    // 显示错误信息
    showErrors() {
        if (this.errors.length === 0) return;

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-notification';
        errorDiv.innerHTML = `
            <div class="error-header">
                <span class="error-icon">⚠️</span>
                <h3>角色验证失败</h3>
            </div>
            <ul class="error-list">
                ${this.errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
            <button class="btn-close-error" onclick="this.parentElement.remove()">关闭</button>
        `;

        document.body.appendChild(errorDiv);

        // 自动关闭
        setTimeout(() => {
            if (errorDiv.parentElement) {
                errorDiv.remove();
            }
        }, 8000);
    }

    // 安全地获取DOM元素
    safeGetElement(id) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Element with id '${id}' not found`);
            return null;
        }
        return element;
    }

    // 安全地设置元素文本
    safeSetText(id, text) {
        const element = this.safeGetElement(id);
        if (element) {
            element.textContent = text;
        }
    }

    // 安全地设置元素值
    safeSetValue(id, value) {
        const element = this.safeGetElement(id);
        if (element) {
            element.value = value;
        }
    }

    init() {
        this.populateSelects();
        this.setupEventListeners();
        this.renderSkills();
        this.initTheme();
        this.updateCharacterSheet();
    }

    // 填充下拉选择框
    populateSelects() {
        // 种族选择
        const raceSelect = document.getElementById('raceSelect');
        for (const [key, race] of Object.entries(RACES)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = race.name;
            raceSelect.appendChild(option);
        }

        // 职业选择
        const classSelect = document.getElementById('classSelect');
        for (const [key, cls] of Object.entries(CLASSES)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = cls.name;
            classSelect.appendChild(option);
        }

        // 兼职选择
        const multiclassAdd = document.getElementById('multiclassAdd');
        for (const [key, cls] of Object.entries(CLASSES)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = cls.name;
            multiclassAdd.appendChild(option);
        }

        // 专长选择
        const featSelect = document.getElementById('featSelect');
        for (const [key, feat] of Object.entries(FEATS)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = feat.name;
            featSelect.appendChild(option);
        }

        // 背景选择
        const backgroundSelect = document.getElementById('backgroundSelect');
        for (const [key, bg] of Object.entries(BACKGROUNDS)) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = bg.name;
            backgroundSelect.appendChild(option);
        }

        // 武器选择框初始化
        this.populateWeaponSelects();
    }

    // 填充武器选择框选项
    populateWeaponSelects() {
        // 近战武器
        const meleeSelect = document.getElementById('meleeWeaponSelect');
        
        // 简易近战武器
        const simpleMeleeOptGroup = document.createElement('optgroup');
        simpleMeleeOptGroup.label = '简易近战武器';
        WEAPONS.simpleMelee.forEach(weapon => {
            const option = document.createElement('option');
            option.value = JSON.stringify(weapon);
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.damageType})`;
            simpleMeleeOptGroup.appendChild(option);
        });
        meleeSelect.appendChild(simpleMeleeOptGroup);
        
        // 军用近战武器
        const martialMeleeOptGroup = document.createElement('optgroup');
        martialMeleeOptGroup.label = '军用近战武器';
        WEAPONS.martialMelee.forEach(weapon => {
            const option = document.createElement('option');
            option.value = JSON.stringify(weapon);
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.damageType})`;
            martialMeleeOptGroup.appendChild(option);
        });
        meleeSelect.appendChild(martialMeleeOptGroup);

        // 魔法武器 - +1武器
        const magicPlus1OptGroup = document.createElement('optgroup');
        magicPlus1OptGroup.label = '魔法武器 (+1)';
        WEAPONS.magicPlus1.filter(w => w.type === 'melee').forEach(weapon => {
            const option = document.createElement('option');
            option.value = JSON.stringify(weapon);
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.damageType})`;
            magicPlus1OptGroup.appendChild(option);
        });
        meleeSelect.appendChild(magicPlus1OptGroup);

        // 魔法武器 - +2武器
        const magicPlus2OptGroup = document.createElement('optgroup');
        magicPlus2OptGroup.label = '魔法武器 (+2)';
        WEAPONS.magicPlus2.filter(w => w.type === 'melee').forEach(weapon => {
            const option = document.createElement('option');
            option.value = JSON.stringify(weapon);
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.damageType})`;
            magicPlus2OptGroup.appendChild(option);
        });
        meleeSelect.appendChild(magicPlus2OptGroup);

        // 魔法武器 - +3武器
        const magicPlus3OptGroup = document.createElement('optgroup');
        magicPlus3OptGroup.label = '魔法武器 (+3)';
        WEAPONS.magicPlus3.filter(w => w.type === 'melee').forEach(weapon => {
            const option = document.createElement('option');
            option.value = JSON.stringify(weapon);
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.damageType})`;
            magicPlus3OptGroup.appendChild(option);
        });
        meleeSelect.appendChild(magicPlus3OptGroup);

        // 特殊魔法武器
        const magicSpecialOptGroup = document.createElement('optgroup');
        magicSpecialOptGroup.label = '特殊魔法武器';
        WEAPONS.magicSpecial.filter(w => w.type === 'melee').forEach(weapon => {
            const option = document.createElement('option');
            option.value = JSON.stringify(weapon);
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.damageType})`;
            magicSpecialOptGroup.appendChild(option);
        });
        meleeSelect.appendChild(magicSpecialOptGroup);

        // 远程武器
        const rangedSelect = document.getElementById('rangedWeaponSelect');
        
        // 简易远程武器
        const simpleRangedOptGroup = document.createElement('optgroup');
        simpleRangedOptGroup.label = '简易远程武器';
        WEAPONS.simpleRanged.forEach(weapon => {
            const option = document.createElement('option');
            option.value = JSON.stringify(weapon);
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.damageType})`;
            simpleRangedOptGroup.appendChild(option);
        });
        rangedSelect.appendChild(simpleRangedOptGroup);
        
        // 军用远程武器
        const martialRangedOptGroup = document.createElement('optgroup');
        martialRangedOptGroup.label = '军用远程武器';
        WEAPONS.martialRanged.forEach(weapon => {
            const option = document.createElement('option');
            option.value = JSON.stringify(weapon);
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.damageType})`;
            martialRangedOptGroup.appendChild(option);
        });
        rangedSelect.appendChild(martialRangedOptGroup);

        // 远程魔法武器 - +1武器
        const rangedMagicPlus1OptGroup = document.createElement('optgroup');
        rangedMagicPlus1OptGroup.label = '魔法武器 (+1)';
        WEAPONS.magicPlus1.filter(w => w.type === 'ranged').forEach(weapon => {
            const option = document.createElement('option');
            option.value = JSON.stringify(weapon);
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.damageType})`;
            rangedMagicPlus1OptGroup.appendChild(option);
        });
        rangedSelect.appendChild(rangedMagicPlus1OptGroup);

        // 远程魔法武器 - +2武器
        const rangedMagicPlus2OptGroup = document.createElement('optgroup');
        rangedMagicPlus2OptGroup.label = '魔法武器 (+2)';
        WEAPONS.magicPlus2.filter(w => w.type === 'ranged').forEach(weapon => {
            const option = document.createElement('option');
            option.value = JSON.stringify(weapon);
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.damageType})`;
            rangedMagicPlus2OptGroup.appendChild(option);
        });
        rangedSelect.appendChild(rangedMagicPlus2OptGroup);

        // 远程魔法武器 - +3武器
        const rangedMagicPlus3OptGroup = document.createElement('optgroup');
        rangedMagicPlus3OptGroup.label = '魔法武器 (+3)';
        WEAPONS.magicPlus3.filter(w => w.type === 'ranged').forEach(weapon => {
            const option = document.createElement('option');
            option.value = JSON.stringify(weapon);
            option.textContent = `${weapon.name} (${weapon.damage} ${weapon.damageType})`;
            rangedMagicPlus3OptGroup.appendChild(option);
        });
        rangedSelect.appendChild(rangedMagicPlus3OptGroup);
    }

    // 设置事件监听器
    setupEventListeners() {
        // 角色信息
        document.getElementById('charName').addEventListener('input', (e) => {
            this.character.name = e.target.value;
            this.updateCharacterSheet();
        });

        document.getElementById('playerName').addEventListener('input', (e) => {
            this.character.playerName = e.target.value;
            this.updateCharacterSheet();
        });

        document.getElementById('charLevel').addEventListener('input', (e) => {
            const newLevel = parseInt(e.target.value) || 1;
            const oldLevel = this.character.level || 1;
            this.character.level = newLevel;
            
            // 更新等级显示
            const levelDisplay = document.getElementById('levelDisplay');
            if (levelDisplay) {
                levelDisplay.textContent = newLevel;
            }
            
            // 检查职业等级变化
            if (this.character.class && newLevel > oldLevel) {
                this.checkClassLevelUp(this.character.class, oldLevel, newLevel);
            }
            
            // 重新渲染职业特性列表以反映新的解锁状态
            if (this.character.class) {
                this.renderClassFeatures(this.character.class);
            }
            
            this.checkSubclassAvailability();
            this.updateCharacterSheet();
        });

        document.getElementById('charXP').addEventListener('input', (e) => {
            this.character.xp = parseInt(e.target.value) || 0;
            this.updateCharacterSheet();
        });

        // 种族选择
        document.getElementById('raceSelect').addEventListener('change', (e) => {
            this.selectRace(e.target.value);
        });

        // 变体选择
        document.getElementById('variantSelect').addEventListener('change', (e) => {
            this.selectVariant(e.target.value);
        });

        // 子种族选择
        document.getElementById('subraceSelect').addEventListener('change', (e) => {
            this.selectSubrace(e.target.value);
        });

        // 职业选择
        document.getElementById('classSelect').addEventListener('change', (e) => {
            this.selectClass(e.target.value);
        });

        // 子职业选择
        document.getElementById('subclassSelect').addEventListener('change', (e) => {
            this.selectSubclass(e.target.value);
        });

        // 兼职职业选择
        const multiclassSelect = document.getElementById('multiclassAdd');
        if (multiclassSelect) {
            multiclassSelect.addEventListener('change', (e) => {
                this.updateMulticlassSubclassOptions(e.target.value);
            });
        }

        // 法术等级选择
        document.getElementById('spellLevel').addEventListener('change', (e) => {
            this.updateSpellSelect(e.target.value);
        });

        // 背景选择
        document.getElementById('backgroundSelect').addEventListener('change', (e) => {
            this.selectBackground(e.target.value);
        });

        // 属性值输入
        document.querySelectorAll('.ability-base').forEach(input => {
            input.addEventListener('change', (e) => {
                const ability = e.target.closest('.ability-score').dataset.ability;
                this.setAbilityBase(ability, parseInt(e.target.value) || 10);
            });
        });

        // 财富输入
        const wealthInputs = ['wealthPP', 'wealthGP', 'wealthEP', 'wealthSP', 'wealthCP'];
        const wealthKeys = ['pp', 'gp', 'ep', 'sp', 'cp'];
        wealthInputs.forEach((id, index) => {
            const input = document.getElementById(id);
            if (input) {
                input.addEventListener('input', (e) => {
                    this.character.wealth[wealthKeys[index]] = parseInt(e.target.value) || 0;
                    this.updateCharacterSheet();
                });
            }
        });

        // 护甲选择
        const armorSelect = document.getElementById('armorSelect');
        if (armorSelect) {
            armorSelect.addEventListener('change', (e) => {
                this.selectArmor(e.target.value);
            });
        }

        // 盾牌复选框
        const shieldCheckbox = document.getElementById('shieldCheckbox');
        if (shieldCheckbox) {
            shieldCheckbox.addEventListener('change', (e) => {
                this.character.shield = e.target.checked;
                this.updateArmorDisplay();
                this.updateCharacterSheet();
                this.showNotification(e.target.checked ? '已装备盾牌' : '已卸下盾牌', 'info');
            });
        }

        // 装备和背景故事
        document.getElementById('equipment').addEventListener('input', (e) => {
            this.character.equipment = e.target.value;
        });

        document.getElementById('backstory').addEventListener('input', (e) => {
            this.character.backstory = e.target.value;
        });

        document.getElementById('personality').addEventListener('input', (e) => {
            this.character.personality = e.target.value;
        });

        document.getElementById('ideals').addEventListener('input', (e) => {
            this.character.ideals = e.target.value;
        });

        document.getElementById('bonds').addEventListener('input', (e) => {
            this.character.bonds = e.target.value;
        });

        document.getElementById('flaws').addEventListener('input', (e) => {
            this.character.flaws = e.target.value;
        });
    }

    // 检查子职业是否可用
    checkSubclassAvailability() {
        if (this.character.class && SUBCLASSES[this.character.class]) {
            const subclassGroup = document.getElementById('subclassGroup');
            const subclassSelect = document.getElementById('subclassSelect');
            
            // 检查是否有任何子职业达到要求等级
            let hasAvailableSubclass = false;
            for (const [key, subclass] of Object.entries(SUBCLASSES[this.character.class])) {
                if (this.character.level >= subclass.level) {
                    hasAvailableSubclass = true;
                    break;
                }
            }
            
            if (hasAvailableSubclass) {
                subclassGroup.style.display = 'block';
                // 更新选项文本状态
                Array.from(subclassSelect.options).forEach(option => {
                    if (option.value) {
                        const subclass = SUBCLASSES[this.character.class][option.value];
                        if (subclass && this.character.level >= subclass.level) {
                            option.disabled = false;
                            option.textContent = subclass.name;
                        } else if (subclass) {
                            option.disabled = true;
                            option.textContent = `${subclass.name} (需要${subclass.level}级)`;
                        }
                    }
                });
            }
        }
    }

    // 选择种族
    selectRace(raceKey) {
        this.character.race = raceKey;
        this.character.subrace = '';
        
        // 重置种族属性值
        for (const ability of Object.keys(this.character.abilities)) {
            this.character.abilities[ability].racial = 0;
        }
        
        // 重置自选属性加值
        this.character.racialAbilityChoices = [];

        if (raceKey && RACES[raceKey]) {
            const race = RACES[raceKey];
            
            // 应用种族属性加值
            if (race.abilityScores) {
                for (const [ability, bonus] of Object.entries(race.abilityScores)) {
                    if (this.character.abilities[ability] && ability !== 'choice') {
                        this.character.abilities[ability].racial = bonus;
                    }
                }
            }
            
            // 显示种族属性加值
            this.displayRacialAbilityBonuses(race);
            
            // 检查是否有自选属性加值
            if (race.abilityScores && race.abilityScores.choice) {
                this.showAbilityChoiceControls(race.abilityScores, race.name);
            } else {
                this.hideAbilityChoiceControls();
            }

            // 显示种族描述
            document.getElementById('raceDescription').textContent = race.description;
            
            // 显示种族特性（带详细提示）
            const traitsContainer = document.getElementById('raceTraits');
            traitsContainer.innerHTML = '';
            if (race.traits) {
                race.traits.forEach(trait => {
                    const tag = document.createElement('span');
                    tag.className = 'trait-tag';
                    tag.textContent = trait.name;
                    tag.title = trait.description;
                    tag.style.cursor = 'help';
                    traitsContainer.appendChild(tag);
                });
            }

            // 显示变体选项（如人类变体、卓尔等）
            const variantGroup = document.getElementById('variantGroup');
            const variantSelect = document.getElementById('variantSelect');
            variantSelect.innerHTML = '<option value="">-- 选择变体 --</option>';
            
            if (race.variants) {
                variantGroup.style.display = 'block';
                for (const [key, variant] of Object.entries(race.variants)) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = variant.name;
                    variantSelect.appendChild(option);
                }
            } else {
                variantGroup.style.display = 'none';
            }

            // 显示子种族选项
            const subraceGroup = document.getElementById('subraceGroup');
            const subraceSelect = document.getElementById('subraceSelect');
            subraceSelect.innerHTML = '<option value="">-- 选择子种族 --</option>';
            
            if (race.subraces) {
                subraceGroup.style.display = 'block';
                for (const [key, subrace] of Object.entries(race.subraces)) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = subrace.name;
                    subraceSelect.appendChild(option);
                }
            } else {
                subraceGroup.style.display = 'none';
            }
        } else {
            document.getElementById('raceDescription').textContent = '';
            document.getElementById('raceTraits').innerHTML = '';
            document.getElementById('variantGroup').style.display = 'none';
            document.getElementById('subraceGroup').style.display = 'none';
            this.hideRacialAbilityBonuses();
            this.hideAbilityChoiceControls();
        }

        this.updateAbilityScores();
        this.updateCharacterSheet();
    }
    
    // 显示种族属性加值
    displayRacialAbilityBonuses(race) {
        const container = document.getElementById('racialAbilityBonuses');
        const list = document.getElementById('racialBonusesList');
        
        if (!race.abilityScores || Object.keys(race.abilityScores).length === 0) {
            container.style.display = 'none';
            return;
        }
        
        let html = '';
        const abilityNames = {
            strength: '力量',
            dexterity: '敏捷',
            constitution: '体质',
            intelligence: '智力',
            wisdom: '感知',
            charisma: '魅力'
        };
        
        for (const [ability, bonus] of Object.entries(race.abilityScores)) {
            if (ability !== 'choice' && abilityNames[ability]) {
                html += `<span class="racial-bonus-tag">${abilityNames[ability]} +${bonus}</span>`;
                // 在属性标签上显示标记
                const indicator = document.querySelector(`.racial-bonus-indicator[data-ability="${ability}"]`);
                if (indicator) {
                    indicator.textContent = `+${bonus}`;
                    indicator.classList.add('has-bonus');
                }
            }
        }
        
        list.innerHTML = html || '<p>无固定属性加值</p>';
        container.style.display = 'block';
    }
    
    // 隐藏种族属性加值显示
    hideRacialAbilityBonuses() {
        const container = document.getElementById('racialAbilityBonuses');
        if (container) container.style.display = 'none';
        
        // 清除所有标记
        document.querySelectorAll('.racial-bonus-indicator').forEach(indicator => {
            indicator.textContent = '';
            indicator.classList.remove('has-bonus');
        });
    }
    
    // 显示自选属性加值控制
    showAbilityChoiceControls(abilityScores, raceName) {
        const section = document.getElementById('abilityChoiceSection');
        const description = document.getElementById('abilityChoiceDescription');
        const controls = document.getElementById('abilityChoiceControls');
        
        const choiceCount = abilityScores.choice || 0;
        const bonus = abilityScores.bonus || 1;
        
        description.textContent = `${raceName}：选择${choiceCount}项属性各+${bonus}`;
        
        // 创建选择控件
        let html = '';
        const abilities = [
            { key: 'strength', name: '力量' },
            { key: 'dexterity', name: '敏捷' },
            { key: 'constitution', name: '体质' },
            { key: 'intelligence', name: '智力' },
            { key: 'wisdom', name: '感知' },
            { key: 'charisma', name: '魅力' }
        ];
        
        for (let i = 0; i < choiceCount; i++) {
            html += `
                <div class="ability-choice-row">
                    <label>选择${i + 1}:</label>
                    <select onchange="characterApp.applyAbilityChoice(${i}, this.value)">
                        <option value="">-- 选择属性 --</option>
                        ${abilities.map(a => `<option value="${a.key}">${a.name}</option>`).join('')}
                    </select>
                </div>
            `;
        }
        
        controls.innerHTML = html;
        section.style.display = 'block';
    }
    
    // 隐藏自选属性加值控制
    hideAbilityChoiceControls() {
        const section = document.getElementById('abilityChoiceSection');
        if (section) section.style.display = 'none';
    }
    
    // 应用自选属性加值
    applyAbilityChoice(choiceIndex, ability) {
        const bonus = 1; // 默认+1
        
        // 清除之前的选择（如果有）
        if (this.character.racialAbilityChoices[choiceIndex]) {
            const oldAbility = this.character.racialAbilityChoices[choiceIndex];
            if (this.character.abilities[oldAbility]) {
                this.character.abilities[oldAbility].racial -= bonus;
            }
            // 清除旧标记
            const oldIndicator = document.querySelector(`.racial-bonus-indicator[data-ability="${oldAbility}"]`);
            if (oldIndicator) {
                const currentBonus = this.character.abilities[oldAbility].racial;
                oldIndicator.textContent = currentBonus > 0 ? `+${currentBonus}` : '';
                if (currentBonus <= 0) oldIndicator.classList.remove('has-bonus');
            }
        }
        
        if (ability) {
            // 应用新加值
            this.character.abilities[ability].racial += bonus;
            this.character.racialAbilityChoices[choiceIndex] = ability;
            
            // 添加标记
            const indicator = document.querySelector(`.racial-bonus-indicator[data-ability="${ability}"]`);
            if (indicator) {
                const currentBonus = this.character.abilities[ability].racial;
                indicator.textContent = `+${currentBonus}`;
                indicator.classList.add('has-bonus');
            }
        } else {
            this.character.racialAbilityChoices[choiceIndex] = null;
        }
        
        this.updateAbilityScores();
        this.updateCharacterSheet();
    }

    // 选择变体
    selectVariant(variantKey) {
        this.character.variant = variantKey;
        
        // 重置种族属性值
        for (const ability of Object.keys(this.character.abilities)) {
            this.character.abilities[ability].racial = 0;
        }

        if (this.character.race && RACES[this.character.race]) {
            const race = RACES[this.character.race];
            
            // 应用变体属性加值
            if (variantKey && race.variants && race.variants[variantKey]) {
                const variant = race.variants[variantKey];
                // 变体人可选属性加值
                if (variant.abilityScores && variant.abilityScores.choice) {
                    this.showAbilityChoiceControls(variant.abilityScores, variant.name);
                } else if (variant.abilityScores) {
                    for (const [ability, bonus] of Object.entries(variant.abilityScores)) {
                        if (this.character.abilities[ability] && ability !== 'choice') {
                            this.character.abilities[ability].racial = bonus;
                        }
                    }
                    this.hideAbilityChoiceControls();
                }
                
                // 更新显示
                this.displayRacialAbilityBonuses(variant);
            } else {
                // 应用基础种族属性加值
                if (race.abilityScores) {
                    for (const [ability, bonus] of Object.entries(race.abilityScores)) {
                        if (this.character.abilities[ability] && ability !== 'choice') {
                            this.character.abilities[ability].racial = bonus;
                        }
                    }
                }
                
                // 检查是否有自选属性加值
                if (race.abilityScores && race.abilityScores.choice) {
                    this.showAbilityChoiceControls(race.abilityScores, race.name);
                } else {
                    this.hideAbilityChoiceControls();
                }
                
                this.displayRacialAbilityBonuses(race);
            }
        }

        this.updateAbilityScores();
        this.updateCharacterSheet();
    }

    // 选择子种族
    selectSubrace(subraceKey) {
        this.character.subrace = subraceKey;
        
        // 重置种族属性值和选择
        for (const ability of Object.keys(this.character.abilities)) {
            this.character.abilities[ability].racial = 0;
        }
        this.character.racialAbilityChoices = [];

        if (this.character.race && RACES[this.character.race]) {
            const race = RACES[this.character.race];
            
            // 应用基础种族属性加值
            if (race.abilityScores) {
                for (const [ability, bonus] of Object.entries(race.abilityScores)) {
                    if (this.character.abilities[ability] && ability !== 'choice') {
                        this.character.abilities[ability].racial = bonus;
                    }
                }
            }
            
            // 检查基础种族是否有自选属性加值
            if (race.abilityScores && race.abilityScores.choice) {
                this.showAbilityChoiceControls(race.abilityScores, race.name);
            } else {
                this.hideAbilityChoiceControls();
            }

            // 应用子种族属性加值
            if (subraceKey && race.subraces && race.subraces[subraceKey]) {
                const subrace = race.subraces[subraceKey];
                
                // 应用子种族固定加值
                if (subrace.abilityScores) {
                    for (const [ability, bonus] of Object.entries(subrace.abilityScores)) {
                        if (this.character.abilities[ability] && ability !== 'choice') {
                            this.character.abilities[ability].racial += bonus;
                        }
                    }
                    
                    // 检查子种族是否有自选属性加值
                    if (subrace.abilityScores.choice) {
                        this.showAbilityChoiceControls(subrace.abilityScores, subrace.name);
                    }
                }
            }
            
            // 更新显示
            this.displayRacialAbilityBonuses(subraceKey && race.subraces ? race.subraces[subraceKey] : race);
        }

        this.updateAbilityScores();
        this.updateCharacterSheet();
    }

    // 选择职业
    selectClass(classKey) {
        this.character.class = classKey;
        this.character.subclass = '';

        if (classKey && CLASSES[classKey]) {
            const cls = CLASSES[classKey];
            
            // 显示职业描述
            document.getElementById('classDescription').textContent = cls.description;
            
            // 显示职业特性（带详细描述和等级解锁系统）
            const featuresContainer = document.getElementById('classFeatures');
            featuresContainer.innerHTML = '';
            
            // 使用通用的等级特性显示系统
            if (cls.features && cls.features.length > 0) {
                this.renderClassFeatures(classKey);
            }

            // 显示生命骰
            document.getElementById('hitDice').value = `d${cls.hitDice}`;

            // 显示/隐藏法术区域
            document.getElementById('spellsCard').style.display = cls.spellcasting ? 'block' : 'none';

            // 显示子职业选项
            const subclassGroup = document.getElementById('subclassGroup');
            const subclassSelect = document.getElementById('subclassSelect');
            subclassSelect.innerHTML = '<option value="">-- 选择子职业 --</option>';
            
            if (SUBCLASSES[classKey]) {
                subclassGroup.style.display = 'block';
                for (const [key, subclass] of Object.entries(SUBCLASSES[classKey])) {
                    const option = document.createElement('option');
                    option.value = key;
                    // 根据等级显示不同文本
                    if (this.character.level >= subclass.level) {
                        option.textContent = subclass.name;
                        option.disabled = false;
                    } else {
                        option.textContent = `${subclass.name} (需要${subclass.level}级)`;
                        option.disabled = true;
                    }
                    subclassSelect.appendChild(option);
                }
            } else {
                subclassGroup.style.display = 'none';
            }

            // 更新豁免熟练
            this.character.proficiencies.saves = cls.savingThrows || [];

            // 更新法术选项
            if (cls.spellcasting) {
                this.updateSpellSelect(document.getElementById('spellLevel').value);
            }
        } else {
            document.getElementById('classDescription').textContent = '';
            document.getElementById('classFeatures').innerHTML = '';
            document.getElementById('hitDice').value = '';
            document.getElementById('spellsCard').style.display = 'none';
            document.getElementById('subclassGroup').style.display = 'none';
        }

        this.renderSkills();
        this.updateCharacterSheet();
    }

    // 选择子职业
    selectSubclass(subclassKey) {
        this.character.subclass = subclassKey;
        
        // 重新渲染职业特性列表以显示子职业特性
        if (this.character.class) {
            this.renderClassFeatures(this.character.class);
        }
        
        // 显示子职业选择通知
        if (subclassKey && SUBCLASSES[this.character.class] && SUBCLASSES[this.character.class][subclassKey]) {
            const subclass = SUBCLASSES[this.character.class][subclassKey];
            this.showNotification(`已选择子职业：${subclass.name}`, 'success');
        }
        
        this.updateCharacterSheet();
    }

    // 更新法术选择
    updateSpellSelect(level) {
        const spellSelect = document.getElementById('spellSelect');
        spellSelect.innerHTML = '<option value="">-- 选择法术 --</option>';

        if (!this.character.class) return;

        const spellKey = level === '0' ? 'cantrips' : `level${level}`;
        if (SPELLS[spellKey]) {
            SPELLS[spellKey].forEach(spell => {
                if (spell.class.includes(this.character.class)) {
                    const option = document.createElement('option');
                    option.value = spell.name;
                    option.textContent = `${spell.name} - ${spell.school} (${spell.castingTime})`;
                    option.title = `${spell.description}\n范围: ${spell.range}\n成分: ${spell.components}\n持续时间: ${spell.duration}`;
                    spellSelect.appendChild(option);
                }
            });
        }
    }

    // 选择背景
    selectBackground(backgroundKey) {
        this.character.background = backgroundKey;

        if (backgroundKey && BACKGROUNDS[backgroundKey]) {
            const bg = BACKGROUNDS[backgroundKey];
            
            // 显示背景描述
            document.getElementById('backgroundDescription').textContent = bg.description;
            
            // 显示背景技能
            const skillsContainer = document.getElementById('backgroundSkills');
            skillsContainer.innerHTML = '';
            if (bg.skills) {
                bg.skills.forEach(skill => {
                    const tag = document.createElement('span');
                    tag.className = 'trait-tag';
                    tag.textContent = skill;
                    skillsContainer.appendChild(tag);
                });
            }

            // 自动选择背景技能
            this.autoSelectBackgroundSkills(bg);
        } else {
            document.getElementById('backgroundDescription').textContent = '';
            document.getElementById('backgroundSkills').innerHTML = '';
        }

        this.updateCharacterSheet();
    }

    // 自动选择背景技能
    autoSelectBackgroundSkills(bg) {
        if (!bg.skills) return;
        
        // 将技能名称映射到技能key
        const skillNameToKey = {};
        for (const [key, skill] of Object.entries(SKILLS)) {
            skillNameToKey[skill.name] = key;
        }

        bg.skills.forEach(skillName => {
            const skillKey = skillNameToKey[skillName];
            if (skillKey && !this.character.proficiencies.skills.includes(skillKey)) {
                this.character.proficiencies.skills.push(skillKey);
            }
        });

        this.renderSkills();
    }

    // 设置基础属性值
    setAbilityBase(ability, value) {
        if (this.character.abilities[ability]) {
            this.character.abilities[ability].base = Math.max(1, Math.min(20, value));
            this.updateAbilityScores();
            this.updateCharacterSheet();
        }
    }

    // 更新属性值显示
    updateAbilityScores() {
        for (const [ability, scores] of Object.entries(this.character.abilities)) {
            const container = document.querySelector(`.ability-score[data-ability="${ability}"]`);
            if (container) {
                const baseInput = container.querySelector('.ability-base');
                const racialSpan = container.querySelector('.ability-racial');
                const totalSpan = container.querySelector('.ability-total');
                const modSpan = container.querySelector('.ability-mod');

                // 更新种族加值显示
                racialSpan.textContent = scores.racial >= 0 ? `+${scores.racial}` : scores.racial;
                
                // 计算总值（基础+种族+专长加成）
                const featBonus = scores.featBonus || 0;
                const total = scores.base + scores.racial + featBonus;
                totalSpan.textContent = total;
                
                // 显示专长加成（如果有）
                const featSpan = container.querySelector('.ability-feat');
                if (featSpan) {
                    if (featBonus > 0) {
                        featSpan.textContent = `+${featBonus}`;
                        featSpan.style.display = 'inline';
                    } else {
                        featSpan.style.display = 'none';
                    }
                }
                
                const modifier = this.calculateModifier(total);
                modSpan.textContent = `(${modifier >= 0 ? '+' : ''}${modifier})`;
                
                // 更新角色卡预览中的属性值
                const abilityCode = ability.substring(0, 3).toUpperCase();
                const sheetValueEl = document.getElementById(`sheet${abilityCode}`);
                const sheetModEl = document.getElementById(`sheet${abilityCode}mod`);
                if (sheetValueEl) sheetValueEl.textContent = total;
                if (sheetModEl) sheetModEl.textContent = modifier >= 0 ? `+${modifier}` : `${modifier}`;
            }
        }
    }

    // 计算属性调整值
    calculateModifier(score) {
        return Math.floor((score - 10) / 2);
    }

    // 渲染技能列表
    renderSkills() {
        const container = document.getElementById('skillsList');
        container.innerHTML = '';

        for (const [key, skill] of Object.entries(SKILLS)) {
            const item = document.createElement('div');
            item.className = 'skill-item';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `skill-${key}`;
            checkbox.checked = this.character.proficiencies.skills.includes(key);
            checkbox.addEventListener('change', () => {
                this.toggleSkillProficiency(key);
            });

            const label = document.createElement('label');
            label.htmlFor = `skill-${key}`;
            label.textContent = skill.name;

            const modifier = document.createElement('span');
            modifier.className = 'skill-modifier';
            modifier.id = `skill-mod-${key}`;
            modifier.textContent = this.getSkillModifierText(key);

            item.appendChild(checkbox);
            item.appendChild(label);
            item.appendChild(modifier);
            container.appendChild(item);
        }
    }

    // 更新施法能力信息
    updateSpellcastingInfo() {
        const spellcastingInfo = this.getSpellcastingInfo();
        const container = document.getElementById('sheetSpellcasting');
        
        if (spellcastingInfo && container) {
            container.style.display = 'block';
            document.getElementById('sheetSpellAbility').textContent = spellcastingInfo.ability;
            document.getElementById('sheetSpellSaveDC').textContent = spellcastingInfo.spellSaveDC;
            document.getElementById('sheetSpellAttack').textContent = `+${spellcastingInfo.spellAttackBonus}`;
        } else if (container) {
            container.style.display = 'none';
        }
    }

    // 切换技能熟练
    toggleSkillProficiency(skillKey) {
        const index = this.character.proficiencies.skills.indexOf(skillKey);
        if (index > -1) {
            this.character.proficiencies.skills.splice(index, 1);
        } else {
            this.character.proficiencies.skills.push(skillKey);
        }
        this.renderSkills();
        this.updateCharacterSheet();
    }

    // 获取技能的调整值文本
    getSkillModifierText(skillKey) {
        const skill = SKILLS[skillKey];
        if (!skill) return '+0';

        const abilityMod = this.calculateModifier(
            this.character.abilities[skill.ability].base + 
            this.character.abilities[skill.ability].racial
        );
        
        let modifier = abilityMod;
        if (this.character.proficiencies.skills.includes(skillKey)) {
            modifier += this.getProficiencyBonus();
        }

        return modifier >= 0 ? `+${modifier}` : `${modifier}`;
    }

    // 获取熟练加值
    getProficiencyBonus() {
        return PROFICIENCY_BONUS[this.character.level] || 2;
    }

    // 获取施法能力信息
    getSpellcastingInfo() {
        if (!this.character.class || !CLASSES[this.character.class]) {
            return null;
        }
        
        const cls = CLASSES[this.character.class];
        if (!cls.spellcasting) {
            return null;
        }
        
        const spellAbility = cls.spellcasting.ability;
        if (!spellAbility) {
            return null;
        }
        
        // 将施法能力名称转换为属性key
        const abilityMap = {
            '力量': 'strength',
            '敏捷': 'dexterity',
            '体质': 'constitution',
            '智力': 'intelligence',
            '感知': 'wisdom',
            '魅力': 'charisma'
        };
        
        const abilityKey = abilityMap[spellAbility];
        if (!abilityKey) {
            return null;
        }
        
        const abilityScore = (this.character.abilities[abilityKey].base || 10) + 
                             this.character.abilities[abilityKey].racial;
        const abilityMod = this.calculateModifier(abilityScore);
        const profBonus = this.getProficiencyBonus();
        
        return {
            ability: spellAbility,
            abilityKey: abilityKey,
            spellSaveDC: 8 + profBonus + abilityMod,
            spellAttackBonus: profBonus + abilityMod
        };
    }

    // 获取属性值提升次数
    getAbilityScoreImprovementCount() {
        const level = this.character.level;
        const asiLevels = [4, 8, 12, 16, 19];
        return asiLevels.filter(l => level >= l).length;
    }

    // 获取属性值提升信息
    getAbilityScoreImprovementInfo() {
        const count = this.getAbilityScoreImprovementCount();
        if (count === 0) {
            return null;
        }
        
        const asiLevels = [4, 8, 12, 16, 19].filter(l => this.character.level >= l);
        return {
            count: count,
            levels: asiLevels,
            description: `在等级 ${asiLevels.join(', ')} 获得属性值提升`
        };
    }

    // 掷骰生成属性值 (4d6去掉最低)
    rollAbilityScore() {
        const rolls = [];
        for (let i = 0; i < 4; i++) {
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        rolls.sort((a, b) => a - b);
        return rolls[1] + rolls[2] + rolls[3];
    }

    // 掷骰单个属性
    rollAbility(ability) {
        const score = this.rollAbilityScore();
        this.setAbilityBase(ability, score);
    }

    // 掷骰所有属性
    rollAllAbilities() {
        for (const ability of Object.keys(this.character.abilities)) {
            const score = this.rollAbilityScore();
            this.character.abilities[ability].base = score;
        }
        this.updateAbilityScores();
        this.updateCharacterSheet();
    }

    // 更新角色卡预览
    updateCharacterSheet() {
        // 基础信息
        document.getElementById('sheetName').textContent = this.character.name || '未命名角色';
        document.getElementById('sheetPlayer').textContent = this.character.playerName || '-';
        document.getElementById('sheetXP').textContent = this.character.xp;

        // 种族/职业/等级
        let raceName = this.character.race ? RACES[this.character.race]?.name : '种族';
        
        // 添加变体信息
        if (this.character.variant && this.character.race && RACES[this.character.race].variants) {
            raceName += ` (${RACES[this.character.race].variants[this.character.variant]?.name || ''})`;
        }
        
        if (this.character.subrace && this.character.race && RACES[this.character.race].subraces) {
            raceName += ` (${RACES[this.character.race].subraces[this.character.subrace]?.name || ''})`;
        }
        
        // 构建职业显示（包括兼职）
        let classDisplay = '';
        if (this.character.class) {
            const mainClass = CLASSES[this.character.class];
            let mainClassName = mainClass?.name || '职业';
            if (this.character.subclass && SUBCLASSES[this.character.class]) {
                mainClassName += ` (${SUBCLASSES[this.character.class][this.character.subclass]?.name || ''})`;
            }
            classDisplay = `${mainClassName} ${this.character.level}级`;
            
            // 添加兼职信息
            if (this.character.multiclass && this.character.multiclass.length > 0) {
                const multiclassDisplay = this.character.multiclass.map(mc => {
                    return `${mc.name} ${mc.level}级`;
                }).join(', ');
                classDisplay += ` / ${multiclassDisplay}`;
            }
        } else {
            classDisplay = '职业';
        }
        
        // 计算总等级
        const totalLevel = this.character.level + (this.character.multiclass || []).reduce((sum, mc) => sum + mc.level, 0);
        
        document.getElementById('sheetRaceClass').textContent = 
            `${raceName} / ${classDisplay} (总${totalLevel}级)`;

        // 属性值
        for (const [ability, scores] of Object.entries(this.character.abilities)) {
            const total = scores.base + scores.racial;
            const modifier = this.calculateModifier(total);
            const abilityCode = ability.substring(0, 3).toUpperCase();
            
            document.getElementById(`sheet${abilityCode}`).textContent = total;
            document.getElementById(`sheet${abilityCode}mod`).textContent = 
                modifier >= 0 ? `+${modifier}` : `${modifier}`;
        }

        // 战斗信息
        const dexMod = this.calculateModifier(
            this.character.abilities.dexterity.base + this.character.abilities.dexterity.racial
        );
        const acResult = this.calculateArmorClass();
        document.getElementById('sheetAC').textContent = acResult.ac;
        document.getElementById('sheetInitiative').textContent = 
            dexMod >= 0 ? `+${dexMod}` : `${dexMod}`;
        
        let speed = 30;
        if (this.character.race) {
            speed = RACES[this.character.race]?.speed || 30;
        }
        
        // 计算速度加成（无甲移动、快速移动等）
        const speedBonus = this.calculateSpeedBonus();
        speed += speedBonus;
        
        document.getElementById('sheetSpeed').textContent = `${speed}尺`;
        
        // 生命值
        const conMod = this.calculateModifier(
            this.character.abilities.constitution.base + this.character.abilities.constitution.racial
        );
        const hitDice = this.character.class ? CLASSES[this.character.class]?.hitDice || 8 : 8;
        const calculatedMaxHP = hitDice + conMod + (this.character.level - 1) * (Math.floor(hitDice / 2) + 1 + conMod);
        
        // 更新最大生命值（如果职业或等级改变）
        if (this.character.maxHP !== calculatedMaxHP) {
            this.character.maxHP = calculatedMaxHP;
            // 如果是新角色或当前生命值大于最大生命值，重置当前生命值
            if (this.character.currentHP === 0 || this.character.currentHP > this.character.maxHP) {
                this.character.currentHP = this.character.maxHP;
            }
        }
        
        // 显示当前生命值和最大生命值
        const currentHPInput = document.getElementById('currentHP');
        const maxHPDisplay = document.getElementById('maxHP');
        if (currentHPInput) {
            currentHPInput.value = this.character.currentHP;
            currentHPInput.max = this.character.maxHP;
        }
        if (maxHPDisplay) {
            maxHPDisplay.textContent = this.character.maxHP;
        }
        
        // 熟练加值
        document.getElementById('sheetProficiency').textContent = `+${this.getProficiencyBonus()}`;
        
        // 生命值显示
        document.getElementById('sheetHitDice').textContent = this.character.class ? CLASSES[this.character.class]?.hitDice || 'd8' : 'd8';
        
        // 临时生命值
        const tempHPInput = document.getElementById('tempHPInput');
        if (tempHPInput) {
            tempHPInput.value = this.character.tempHP || 0;
        }
        
        // 被动察觉 = 10 + 感知调整值 + (如果熟练则加上熟练加值)
        const wisMod = this.calculateModifier(
            this.character.abilities.wisdom.base + this.character.abilities.wisdom.racial
        );
        const isPerceptionProficient = this.character.skills?.perception?.proficient || false;
        const proficiencyBonus = this.getProficiencyBonus();
        const passivePerception = 10 + wisMod + (isPerceptionProficient ? proficiencyBonus : 0);
        document.getElementById('sheetPassivePerception').textContent = passivePerception;
        
        // 施法能力
        this.updateSpellcastingInfo();
        
        // 技能列表（左侧表单）
        this.renderSkills();
        
        // 武器列表（左侧表单）
        this.renderWeapons();
        
        // 处理特性给予的法术
        this.processFeatureSpells();
        
        // 法术列表（左侧表单）
        this.renderSpells();
        
        // 专长列表（左侧表单）
        this.renderFeats();
        
        // 准备法术列表（左侧表单）
        this.renderPreparedSpells();
        
        // 角色卡预览（右侧）
        this.renderSheetSkills();
        this.renderSheetWeapons();
        this.renderSheetFeatures();
        this.renderSheetSpells();
        this.renderSheetFeats();
        this.renderSheetWealth();
    }

    // 渲染角色卡预览 - 财富
    renderSheetWealth() {
        const wealth = this.character.wealth || { pp: 0, gp: 0, ep: 0, sp: 0, cp: 0 };
        
        // 更新各币种显示
        const ppEl = document.getElementById('sheetPP');
        const gpEl = document.getElementById('sheetGP');
        const epEl = document.getElementById('sheetEP');
        const spEl = document.getElementById('sheetSP');
        const cpEl = document.getElementById('sheetCP');
        const totalEl = document.getElementById('sheetWealthTotal');
        
        if (ppEl) ppEl.textContent = wealth.pp || 0;
        if (gpEl) gpEl.textContent = wealth.gp || 0;
        if (epEl) epEl.textContent = wealth.ep || 0;
        if (spEl) spEl.textContent = wealth.sp || 0;
        if (cpEl) cpEl.textContent = wealth.cp || 0;
        
        // 计算总价值（转换为GP）
        // PP = 10 GP, EP = 0.5 GP, SP = 0.1 GP, CP = 0.01 GP
        const totalGP = (wealth.pp || 0) * 10 + 
                       (wealth.gp || 0) + 
                       (wealth.ep || 0) * 0.5 + 
                       (wealth.sp || 0) * 0.1 + 
                       (wealth.cp || 0) * 0.01;
        
        if (totalEl) totalEl.textContent = `${totalGP.toFixed(2)} GP`;
    }

    // 渲染武器列表
    renderWeapons() {
        const meleeContainer = document.getElementById('meleeWeaponsList');
        const rangedContainer = document.getElementById('rangedWeaponsList');
        
        // 获取空手伤害（武僧和拳斗士）
        const unarmedStrike = this.getUnarmedStrikeDamage();
        
        // 渲染近战武器
        if (meleeContainer) {
            let meleeHTML = '';
            
            // 如果有空手伤害，显示在列表顶部
            if (unarmedStrike) {
                meleeHTML += `
                    <div class="weapon-item unarmed-weapon">
                        <span class="weapon-name">🥊 ${unarmedStrike.name}</span>
                        <span class="weapon-damage">${unarmedStrike.damage} ${unarmedStrike.damageType}</span>
                        <span class="weapon-note">职业特性</span>
                    </div>
                `;
            }
            
            // 渲染其他近战武器
            if (this.character.weapons.melee.length > 0) {
                meleeHTML += this.character.weapons.melee.map(weapon => `
                    <div class="weapon-item">
                        <span class="weapon-name">${weapon.name}</span>
                        <span class="weapon-damage">${weapon.damage} ${weapon.damageType}</span>
                        <button onclick="characterApp.removeWeapon('melee', ${weapon.id})" class="btn-remove">移除</button>
                    </div>
                `).join('');
            }
            
            meleeContainer.innerHTML = meleeHTML || '<p>暂无近战武器</p>';
        }
        
        // 渲染远程武器
        if (rangedContainer) {
            rangedContainer.innerHTML = this.character.weapons.ranged.map(weapon => `
                <div class="weapon-item">
                    <span class="weapon-name">${weapon.name}</span>
                    <span class="weapon-damage">${weapon.damage} ${weapon.damageType}</span>
                    <span class="weapon-range">射程: ${weapon.range}</span>
                    <button onclick="characterApp.removeWeapon('ranged', ${weapon.id})" class="btn-remove">移除</button>
                </div>
            `).join('') || '<p>暂无远程武器</p>';
        }
    }

    // 获取空手伤害
    getUnarmedStrikeDamage() {
        const level = this.character.level || 1;
        
        // 武僧：武艺骰
        if (this.character.class === 'monk') {
            let die = 'd4';
            if (level >= 17) die = 'd10';
            else if (level >= 11) die = 'd8';
            else if (level >= 5) die = 'd6';
            
            return {
                name: '徒手打击 (Martial Arts)',
                damage: `1${die}`,
                damageType: '钝击'
            };
        }
        
        // 拳斗士：拳斗骰
        if (this.character.class === 'pugilist') {
            let die = 'd8';
            if (level >= 17) die = '2d6';
            else if (level >= 11) die = 'd12';
            else if (level >= 5) die = 'd10';
            
            return {
                name: '拳斗 (Fisticuffs)',
                damage: `1${die}`,
                damageType: '钝击'
            };
        }
        
        // 其他职业：默认空手伤害1点
        return null; // 不显示，因为默认1点伤害太弱
    }

    // 添加武器
    addWeapon(type) {
        const selectId = type === 'melee' ? 'meleeWeaponSelect' : 'rangedWeaponSelect';
        const select = document.getElementById(selectId);
        
        if (!select || !select.value) return;
        
        try {
            const weapon = JSON.parse(select.value);
            weapon.id = Date.now();
            this.character.weapons[type].push(weapon);
            select.value = '';
            this.renderWeapons();
            this.updateCharacterSheet();
        } catch (e) {
            console.error('添加武器失败:', e);
        }
    }

    // 移除武器
    removeWeapon(type, weaponId) {
        const index = this.character.weapons[type].findIndex(w => w.id === weaponId);
        if (index > -1) {
            this.character.weapons[type].splice(index, 1);
            this.renderWeapons();
            this.updateCharacterSheet();
        }
    }

    // 渲染法术列表
    renderSpells() {
        const container = document.getElementById('spellsList');
        if (!container) return;
        
        if (this.character.spells.length === 0) {
            container.innerHTML = '<p>尚未选择法术</p>';
            return;
        }
        
        container.innerHTML = this.character.spells.map(spell => {
            // 构建法术信息
            let spellInfo = '';
            
            // 显示来源
            if (spell.fromFeature && spell.source) {
                spellInfo += `<span class="spell-source">来自: ${spell.source}</span>`;
            }
            
            // 显示施法属性
            if (spell.ability) {
                spellInfo += `<span class="spell-ability">施法属性: ${spell.ability}</span>`;
            }
            
            // 显示次数限制
            if (spell.freeCast) {
                if (spell.freeCast.count === Infinity) {
                    spellInfo += `<span class="spell-limit">随意施展</span>`;
                } else if (spell.freeCast.count === 1) {
                    spellInfo += `<span class="spell-limit">1次/${spell.freeCast.reset}</span>`;
                } else {
                    spellInfo += `<span class="spell-limit">${spell.freeCast.count}次/${spell.freeCast.reset}</span>`;
                }
            }
            
            // 显示始终准备状态
            if (spell.alwaysPrepared) {
                spellInfo += `<span class="spell-prepared">始终准备</span>`;
            }
            
            // 显示始终已知状态
            if (spell.alwaysKnown) {
                spellInfo += `<span class="spell-known">始终已知</span>`;
            }
            
            const removeButton = spell.fromFeature ? '' : `<button onclick="characterApp.removeSpell('${spell.name}')" class="btn-remove">移除</button>`;
            
            return `
                <div class="spell-item ${spell.fromFeature ? 'feature-spell' : ''}">
                    <div class="spell-main-info">
                        <span class="spell-name">${spell.name}</span>
                        <span class="spell-level">${spell.level === 0 ? '戏法' : spell.level + '环'}</span>
                        <span class="spell-school">${spell.school}</span>
                        ${removeButton}
                    </div>
                    ${spellInfo ? `<div class="spell-extra-info">${spellInfo}</div>` : ''}
                </div>
            `;
        }).join('');
    }

    // 添加法术
    addSpell() {
        const select = document.getElementById('spellSelect');
        if (!select || !select.value) return;
        
        const spellName = select.value;
        const spellLevel = document.getElementById('spellLevel').value;
        
        // 查找法术数据
        const spellKey = spellLevel === '0' ? 'cantrips' : `level${spellLevel}`;
        const spellData = SPELLS[spellKey]?.find(s => s.name === spellName);
        
        if (spellData) {
            this.character.spells.push({
                name: spellData.name,
                level: parseInt(spellLevel),
                school: spellData.school
            });
            select.value = '';
            this.renderSpells();
            this.updateCharacterSheet();
        }
    }

    // 移除法术
    removeSpell(spellName) {
        const index = this.character.spells.findIndex(s => s.name === spellName);
        if (index > -1) {
            this.character.spells.splice(index, 1);
            this.renderSpells();
            this.updateCharacterSheet();
        }
    }

    // 渲染专长列表
    renderFeats() {
        const container = document.getElementById('featsList');
        if (!container) return;
        
        if (this.character.feats.length === 0) {
            container.innerHTML = '<p>尚未选择专长</p>';
            return;
        }
        
        container.innerHTML = this.character.feats.map(featKey => {
            const feat = FEATS[featKey];
            return `
                <div class="feat-item">
                    <span class="feat-name">${feat?.name || featKey}</span>
                    <button onclick="characterApp.removeFeat('${featKey}')" class="btn-remove">移除</button>
                </div>
            `;
        }).join('');
    }

    // 添加专长
    addFeat() {
        const select = document.getElementById('featSelect');
        if (!select || !select.value) return;
        
        const featKey = select.value;
        const feat = FEATS[featKey];
        
        if (!this.character.feats.includes(featKey)) {
            // 如果是属性值提升专长，显示选择对话框
            if (featKey === 'ability_score_improvement') {
                this.showASIDialog(featKey);
            } else {
                this.character.feats.push(featKey);
                select.value = '';
                this.renderFeats();
                this.updateCharacterSheet();
                this.showNotification(`已添加专长：${feat?.name || featKey}`, 'success');
            }
        }
    }

    // 显示属性值提升选择对话框
    showASIDialog(featKey) {
        // 创建对话框
        const dialog = document.createElement('div');
        dialog.className = 'dialog-overlay';
        dialog.id = 'asiDialog';
        
        const abilities = [
            { key: 'strength', name: '力量' },
            { key: 'dexterity', name: '敏捷' },
            { key: 'constitution', name: '体质' },
            { key: 'intelligence', name: '智力' },
            { key: 'wisdom', name: '感知' },
            { key: 'charisma', name: '魅力' }
        ];
        
        dialog.innerHTML = `
            <div class="dialog-content">
                <h3>属性值提升</h3>
                <p>请选择提升方式：</p>
                <div class="asi-options">
                    <button class="asi-option-btn" onclick="characterApp.selectASIMode('single')">
                        <strong>一项属性 +2</strong><br>
                        <small>选择一项属性提升2点</small>
                    </button>
                    <button class="asi-option-btn" onclick="characterApp.selectASIMode('dual')">
                        <strong>两项属性各 +1</strong><br>
                        <small>选择两项属性各提升1点</small>
                    </button>
                </div>
                <div id="asiAbilitySelection" style="display: none; margin-top: 1rem;">
                    <p id="asiInstruction">请选择属性：</p>
                    <div class="asi-abilities">
                        ${abilities.map(ability => `
                            <label class="asi-ability-checkbox">
                                <input type="checkbox" name="asiAbility" value="${ability.key}" 
                                    data-current="${this.character.abilities[ability.key].base + this.character.abilities[ability.key].racial}">
                                <span>${ability.name}</span>
                                <small>(${this.character.abilities[ability.key].base + this.character.abilities[ability.key].racial})</small>
                            </label>
                        `).join('')}
                    </div>
                    <button class="btn btn-primary" onclick="characterApp.confirmASI('${featKey}')" style="margin-top: 1rem;">确认</button>
                </div>
                <button class="btn btn-secondary" onclick="characterApp.closeASIDialog()" style="margin-top: 0.5rem;">取消</button>
            </div>
        `;
        
        document.body.appendChild(dialog);
        this.currentASIMode = null;
        this.currentASIFeatKey = featKey;
    }

    // 选择属性值提升模式
    selectASIMode(mode) {
        this.currentASIMode = mode;
        const selectionDiv = document.getElementById('asiAbilitySelection');
        const instruction = document.getElementById('asiInstruction');
        const checkboxes = document.querySelectorAll('input[name="asiAbility"]');
        
        selectionDiv.style.display = 'block';
        
        // 重置所有复选框
        checkboxes.forEach(cb => {
            cb.checked = false;
            cb.disabled = false;
        });
        
        if (mode === 'single') {
            instruction.textContent = '请选择一项属性提升2点（上限20）：';
            // 单选模式
            checkboxes.forEach(cb => {
                cb.addEventListener('change', () => {
                    if (cb.checked) {
                        checkboxes.forEach(other => {
                            if (other !== cb) other.checked = false;
                        });
                    }
                });
            });
        } else {
            instruction.textContent = '请选择两项属性各提升1点（上限20）：';
            // 双选模式，限制选择数量
            checkboxes.forEach(cb => {
                cb.addEventListener('change', () => {
                    const checked = document.querySelectorAll('input[name="asiAbility"]:checked');
                    if (checked.length >= 2) {
                        checkboxes.forEach(other => {
                            if (!other.checked) other.disabled = true;
                        });
                    } else {
                        checkboxes.forEach(other => {
                            other.disabled = false;
                        });
                    }
                });
            });
        }
    }

    // 确认属性值提升
    confirmASI(featKey) {
        const checkboxes = document.querySelectorAll('input[name="asiAbility"]:checked');
        const selectedAbilities = Array.from(checkboxes).map(cb => ({
            ability: cb.value,
            current: parseInt(cb.dataset.current)
        }));
        
        if (this.currentASIMode === 'single' && selectedAbilities.length !== 1) {
            this.showNotification('请选择一项属性', 'error');
            return;
        }
        if (this.currentASIMode === 'dual' && selectedAbilities.length !== 2) {
            this.showNotification('请选择两项属性', 'error');
            return;
        }
        
        // 检查上限
        const maxIncrease = this.currentASIMode === 'single' ? 2 : 1;
        for (const { ability, current } of selectedAbilities) {
            if (current + maxIncrease > 20) {
                this.showNotification(`${ability} 的属性值不能超过20`, 'error');
                return;
            }
        }
        
        // 保存选择
        const asiData = {
            mode: this.currentASIMode,
            abilities: selectedAbilities.map(a => a.ability)
        };
        
        // 添加专长并保存ASI数据
        this.character.feats.push(featKey);
        if (!this.character.featData) this.character.featData = {};
        this.character.featData[featKey] = asiData;
        
        // 应用属性加成
        this.applyASIBonus(featKey, asiData);
        
        this.closeASIDialog();
        this.renderFeats();
        this.updateCharacterSheet();
        this.showNotification('属性值提升已应用', 'success');
    }

    // 应用属性值提升加成
    applyASIBonus(featKey, asiData) {
        const abilityMap = {
            'strength': 'strength',
            'dexterity': 'dexterity',
            'constitution': 'constitution',
            'intelligence': 'intelligence',
            'wisdom': 'wisdom',
            'charisma': 'charisma'
        };
        
        const bonus = asiData.mode === 'single' ? 2 : 1;
        
        asiData.abilities.forEach(abilityKey => {
            if (abilityMap[abilityKey]) {
                // 使用featBonus字段记录专长加成
                if (!this.character.abilities[abilityKey].featBonus) {
                    this.character.abilities[abilityKey].featBonus = 0;
                }
                this.character.abilities[abilityKey].featBonus += bonus;
            }
        });
        
        this.updateAbilityScores();
    }

    // 移除属性值提升加成
    removeASIBonus(featKey) {
        if (!this.character.featData || !this.character.featData[featKey]) return;
        
        const asiData = this.character.featData[featKey];
        const bonus = asiData.mode === 'single' ? 2 : 1;
        
        asiData.abilities.forEach(abilityKey => {
            if (this.character.abilities[abilityKey].featBonus) {
                this.character.abilities[abilityKey].featBonus -= bonus;
                if (this.character.abilities[abilityKey].featBonus <= 0) {
                    delete this.character.abilities[abilityKey].featBonus;
                }
            }
        });
        
        // 删除保存的ASI数据
        delete this.character.featData[featKey];
        this.updateAbilityScores();
    }

    // 关闭属性值提升对话框
    closeASIDialog() {
        const dialog = document.getElementById('asiDialog');
        if (dialog) dialog.remove();
        this.currentASIMode = null;
        this.currentASIFeatKey = null;
    }

    // 移除专长
    removeFeat(featKey) {
        const index = this.character.feats.indexOf(featKey);
        if (index > -1) {
            // 如果是属性值提升专长，先移除加成
            if (featKey === 'ability_score_improvement') {
                this.removeASIBonus(featKey);
            }
            
            this.character.feats.splice(index, 1);
            this.renderFeats();
            this.updateCharacterSheet();
            
            const feat = FEATS[featKey];
            this.showNotification(`已移除专长：${feat?.name || featKey}`, 'info');
        }
    }

    // 渲染角色卡预览 - 技能
    renderSheetSkills() {
        const container = document.getElementById('sheetSkills');
        if (!container) return;
        
        if (this.character.proficiencies.skills.length === 0) {
            container.innerHTML = '<p class="empty-text">暂无技能熟练</p>';
            return;
        }
        
        container.innerHTML = this.character.proficiencies.skills.map(skillKey => {
            const skill = SKILLS[skillKey];
            if (!skill) return '';
            const modifier = this.getSkillModifierText(skillKey);
            return `
                <div class="sheet-skill-item">
                    <span class="sheet-skill-name">${skill.name}</span>
                    <span class="sheet-skill-mod">${modifier}</span>
                </div>
            `;
        }).join('');
    }

    // 渲染角色卡预览 - 武器
    renderSheetWeapons() {
        const container = document.getElementById('sheetWeapons');
        if (!container) return;
        
        const allWeapons = [...this.character.weapons.melee, ...this.character.weapons.ranged];
        
        if (allWeapons.length === 0) {
            container.innerHTML = '<p class="empty-text">暂无武器</p>';
            return;
        }
        
        container.innerHTML = allWeapons.map(weapon => {
            const attackBonus = this.calculateWeaponAttackBonus(weapon);
            return `
                <div class="sheet-weapon-item">
                    <span class="sheet-weapon-name">${weapon.name}</span>
                    <span class="sheet-weapon-bonus">攻击${attackBonus >= 0 ? '+' : ''}${attackBonus}</span>
                    <span class="sheet-weapon-damage">${weapon.damage} ${weapon.damageType}</span>
                    ${weapon.range ? `<span class="sheet-weapon-range">射程${weapon.range}</span>` : ''}
                </div>
            `;
        }).join('');
    }

    // 计算武器攻击加值
    calculateWeaponAttackBonus(weapon) {
        let bonus = this.getProficiencyBonus();
        
        // 根据武器类型使用力量或敏捷
        if (weapon.properties && weapon.properties.includes('灵巧')) {
            const dexMod = this.calculateModifier(
                this.character.abilities.dexterity.base + this.character.abilities.dexterity.racial
            );
            bonus += dexMod;
        } else if (weapon.type === '远程') {
            const dexMod = this.calculateModifier(
                this.character.abilities.dexterity.base + this.character.abilities.dexterity.racial
            );
            bonus += dexMod;
        } else {
            const strMod = this.calculateModifier(
                this.character.abilities.strength.base + this.character.abilities.strength.racial
            );
            bonus += strMod;
        }
        
        return bonus;
    }

    // 渲染角色卡预览 - 特性与能力
    renderSheetFeatures() {
        const container = document.getElementById('sheetFeatures');
        if (!container) return;
        
        let classFeatures = [];
        let raceFeatures = [];
        
        // 添加本职职业特性
        if (this.character.class && CLASSES[this.character.class]) {
            const cls = CLASSES[this.character.class];
            if (cls.features) {
                cls.features.forEach(feature => {
                    if (feature.level <= this.character.level) {
                        classFeatures.push({
                            name: feature.name,
                            source: cls.name,
                            level: feature.level,
                            description: feature.description
                        });
                    }
                });
            }
        }
        
        // 添加子职业特性
        if (this.character.subclass && this.character.class && SUBCLASSES[this.character.class]) {
            const subclass = SUBCLASSES[this.character.class][this.character.subclass];
            if (subclass && subclass.features) {
                subclass.features.forEach(feature => {
                    if (feature.level <= this.character.level) {
                        classFeatures.push({
                            name: feature.name,
                            source: subclass.name,
                            level: feature.level,
                            description: feature.description
                        });
                    }
                });
            }
        }
        
        // 添加兼职职业特性
        if (this.character.multiclass && this.character.multiclass.length > 0) {
            this.character.multiclass.forEach(mc => {
                if (mc.class && CLASSES[mc.class]) {
                    const mcClass = CLASSES[mc.class];
                    if (mcClass.features) {
                        mcClass.features.forEach(feature => {
                            if (feature.level <= mc.level) {
                                classFeatures.push({
                                    name: feature.name,
                                    source: `${mcClass.name}(兼职)`,
                                    level: feature.level,
                                    description: feature.description
                                });
                            }
                        });
                    }
                    
                    // 添加兼职子职业特性
                    if (mc.subclass && SUBCLASSES[mc.class] && SUBCLASSES[mc.class][mc.subclass]) {
                        const mcSubclass = SUBCLASSES[mc.class][mc.subclass];
                        if (mcSubclass.features) {
                            mcSubclass.features.forEach(feature => {
                                if (feature.level <= mc.level) {
                                    classFeatures.push({
                                        name: feature.name,
                                        source: `${mcSubclass.name}(兼职)`,
                                        level: feature.level,
                                        description: feature.description
                                    });
                                }
                            });
                        }
                    }
                }
            });
        }
        
        // 添加种族特性
        if (this.character.race && RACES[this.character.race]) {
            const race = RACES[this.character.race];
            if (race.traits) {
                race.traits.forEach(trait => {
                    raceFeatures.push({
                        name: trait.name,
                        source: race.name,
                        description: trait.description
                    });
                });
            }
            
            // 添加子种族特性
            if (this.character.subrace && race.subraces && race.subraces[this.character.subrace]) {
                const subrace = race.subraces[this.character.subrace];
                if (subrace.traits) {
                    subrace.traits.forEach(trait => {
                        raceFeatures.push({
                            name: trait.name,
                            source: subrace.name,
                            description: trait.description
                        });
                    });
                }
            }
        }
        
        let html = '';
        
        // 职业特性部分
        if (classFeatures.length > 0) {
            html += '<div class="feature-section"><h4 class="feature-section-title">职业特性</h4>';
            html += classFeatures.map(feature => `
                <div class="sheet-feature-item" title="${feature.description}">
                    <span class="sheet-feature-name">${feature.name}</span>
                    <span class="sheet-feature-source">${feature.source} ${feature.level}级</span>
                </div>
            `).join('');
            html += '</div>';
        }
        
        // 种族特性部分
        if (raceFeatures.length > 0) {
            html += '<div class="feature-section"><h4 class="feature-section-title">种族特性</h4>';
            html += raceFeatures.map(feature => `
                <div class="sheet-feature-item" title="${feature.description}">
                    <span class="sheet-feature-name">${feature.name}</span>
                    <span class="sheet-feature-source">${feature.source}</span>
                </div>
            `).join('');
            html += '</div>';
        }
        
        if (html === '') {
            container.innerHTML = '<p class="empty-text">暂无特性</p>';
            return;
        }
        
        container.innerHTML = html;
    }

    // 渲染角色卡预览 - 法术
    renderSheetSpells() {
        const container = document.getElementById('sheetSpellList');
        if (!container) return;
        
        if (this.character.spells.length === 0) {
            container.innerHTML = '<p class="empty-text">无法术</p>';
            return;
        }
        
        // 按等级分组
        const spellsByLevel = {};
        this.character.spells.forEach(spell => {
            const level = spell.level || 0;
            if (!spellsByLevel[level]) spellsByLevel[level] = [];
            spellsByLevel[level].push(spell);
        });
        
        let html = '';
        const sortedLevels = Object.keys(spellsByLevel).sort((a, b) => a - b);
        
        sortedLevels.forEach(level => {
            const levelName = level === '0' ? '戏法' : `${level}环`;
            html += `
                <div class="sheet-spell-level-group">
                    <span class="sheet-spell-level">${levelName}</span>
                    <div class="sheet-spell-names">
                        ${spellsByLevel[level].map(spell => `<span class="sheet-spell-name">${spell.name}</span>`).join(', ')}
                    </div>
                </div>
            `;
        });
        
        container.innerHTML = html;
    }

    // 渲染角色卡预览 - 专长
    renderSheetFeats() {
        const container = document.getElementById('sheetFeatList');
        if (!container) return;
        
        if (this.character.feats.length === 0) {
            container.innerHTML = '<p class="empty-text">无专长</p>';
            return;
        }
        
        container.innerHTML = this.character.feats.map(featKey => {
            const feat = FEATS[featKey];
            return `<span class="sheet-feat-name">${feat?.name || featKey}</span>`;
        }).join(', ');
    }

    // 渲染职业特性
    renderClassFeatures(classKey) {
        const container = document.getElementById('classFeatures');
        if (!container || !classKey || !CLASSES[classKey]) return;
        
        const cls = CLASSES[classKey];
        if (!cls.features) {
            container.innerHTML = '';
            return;
        }
        
        // 按等级排序并分组
        const featuresByLevel = {};
        
        // 添加基础职业特性
        cls.features.forEach(feature => {
            if (!featuresByLevel[feature.level]) {
                featuresByLevel[feature.level] = [];
            }
            featuresByLevel[feature.level].push({
                ...feature,
                type: 'base',
                source: '基础职业'
            });
        });
        
        // 添加子职业特性（如果已选择子职业）
        if (this.character.subclass && SUBCLASSES[classKey] && SUBCLASSES[classKey][this.character.subclass]) {
            const subclass = SUBCLASSES[classKey][this.character.subclass];
            if (subclass.features) {
                subclass.features.forEach(feature => {
                    if (!featuresByLevel[feature.level]) {
                        featuresByLevel[feature.level] = [];
                    }
                    featuresByLevel[feature.level].push({
                        ...feature,
                        type: 'subclass',
                        source: subclass.name
                    });
                });
            }
        }
        
        // 生成HTML
        let html = '';
        const sortedLevels = Object.keys(featuresByLevel).sort((a, b) => a - b);
        
        sortedLevels.forEach(level => {
            const isUnlocked = this.character.level >= level;
            const unlockStatus = isUnlocked ? 'unlocked' : 'locked';
            const unlockText = isUnlocked ? '✓ 已解锁' : `🔒 ${level}级解锁`;
            
            html += `
                <div class="feature-level-group ${unlockStatus}">
                    <div class="feature-level-header">
                        <span class="feature-level-number">${level}级</span>
                        <span class="feature-unlock-status">${unlockText}</span>
                    </div>
                    <div class="feature-list">
            `;
            
            featuresByLevel[level].forEach(feature => {
                const typeClass = feature.type === 'subclass' ? 'subclass-feature' : 'base-feature';
                const typeLabel = feature.type === 'subclass' ? '[子职业]' : '[基础]';
                html += `
                    <div class="feature-item ${typeClass} ${isUnlocked ? 'available' : 'unavailable'}">
                        <span class="feature-type-label">${typeLabel}</span>
                        <span class="feature-name" title="${feature.description}">${feature.name}</span>
                        ${feature.type === 'subclass' ? `<span class="feature-source">${feature.source}</span>` : ''}
                        ${feature.description ? `<span class="feature-desc">${feature.description.substring(0, 50)}${feature.description.length > 50 ? '...' : ''}</span>` : ''}
                    </div>
                `;
            });
            
            html += '</div></div>';
        });
        
        container.innerHTML = html;
    }

    // 检查职业升级
    checkClassLevelUp(classKey, oldLevel, newLevel) {
        if (!classKey || !CLASSES[classKey]) return;
        
        const cls = CLASSES[classKey];
        if (!cls.features) return;
        
        // 检查新解锁的特性
        const newFeatures = cls.features.filter(feature => 
            feature.level > oldLevel && feature.level <= newLevel
        );
        
        if (newFeatures.length > 0) {
            const featureNames = newFeatures.map(f => f.name).join(', ');
            this.showNotification(`升级！你解锁了新特性：${featureNames}`, 'success');
        }
        
        // 检查子职业解锁
        if (SUBCLASSES[classKey]) {
            for (const [subclassKey, subclass] of Object.entries(SUBCLASSES[classKey])) {
                if (subclass.level > oldLevel && subclass.level <= newLevel) {
                    this.showNotification(`你现在可以选择子职业：${subclass.name}`, 'info');
                }
            }
        }
    }

    // 显示通知
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // 动画显示
        setTimeout(() => notification.classList.add('show'), 100);
        
        // 自动移除
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    // ========== 一键生成功能 ==========

    // 一键生成完整角色
    generateRandomCharacter() {
        // 随机选择种族
        const raceKeys = Object.keys(RACES);
        const randomRace = raceKeys[Math.floor(Math.random() * raceKeys.length)];
        this.selectRace(randomRace);
        
        // 随机选择职业
        const classKeys = Object.keys(CLASSES);
        const randomClass = classKeys[Math.floor(Math.random() * classKeys.length)];
        this.selectClass(randomClass);
        
        // 随机选择背景
        const backgroundKeys = Object.keys(BACKGROUNDS);
        const randomBackground = backgroundKeys[Math.floor(Math.random() * backgroundKeys.length)];
        this.selectBackground(randomBackground);
        
        // 生成随机名称
        this.character.name = this.generateRandomName(randomRace);
        document.getElementById('charName').value = this.character.name;
        
        // 生成随机玩家名称
        const playerNames = ['玩家1', '玩家2', '玩家3', '玩家4', '玩家5'];
        this.character.playerName = playerNames[Math.floor(Math.random() * playerNames.length)];
        document.getElementById('playerName').value = this.character.playerName;
        
        // 掷骰生成属性值并自动选择最优组
        this.rollAndAssignAbilityScores(randomClass);
        
        // 自动选择技能
        this.autoSelectSkills();
        
        // 自动添加武器
        this.autoAddWeapons();
        
        // 生成随机背景元素
        this.generateRandomBackground();
        
        // 更新UI
        this.updateUI();
        this.updateCharacterSheet();
        
        this.showNotification('随机角色生成完成！', 'success');
    }

    // 自动分配属性值
    autoAssignAbilities() {
        if (!this.character.class || !this.character.rolledScores.length) return;
        
        // 定义职业属性优先级
        const priorityMap = {
            'barbarian': ['strength', 'constitution', 'dexterity', 'wisdom', 'charisma', 'intelligence'],
            'bard': ['charisma', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'strength'],
            'cleric': ['wisdom', 'constitution', 'strength', 'charisma', 'intelligence', 'dexterity'],
            'druid': ['wisdom', 'constitution', 'dexterity', 'intelligence', 'charisma', 'strength'],
            'fighter': ['strength', 'constitution', 'dexterity', 'wisdom', 'intelligence', 'charisma'],
            'monk': ['dexterity', 'wisdom', 'constitution', 'strength', 'intelligence', 'charisma'],
            'paladin': ['strength', 'charisma', 'constitution', 'wisdom', 'intelligence', 'dexterity'],
            'ranger': ['dexterity', 'wisdom', 'constitution', 'strength', 'intelligence', 'charisma'],
            'rogue': ['dexterity', 'intelligence', 'constitution', 'charisma', 'wisdom', 'strength'],
            'sorcerer': ['charisma', 'constitution', 'dexterity', 'intelligence', 'wisdom', 'strength'],
            'warlock': ['charisma', 'constitution', 'dexterity', 'wisdom', 'intelligence', 'strength'],
            'wizard': ['intelligence', 'constitution', 'dexterity', 'wisdom', 'charisma', 'strength'],
            'artificer': ['intelligence', 'constitution', 'dexterity', 'wisdom', 'charisma', 'strength'],
            'pugilist': ['strength', 'constitution', 'dexterity', 'wisdom', 'charisma', 'intelligence']
        };

        const priority = priorityMap[this.character.class] || ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
        
        // 按优先级分配最高的属性值
        const sortedScores = [...this.character.rolledScores].map((score, index) => ({ score, index }))
            .sort((a, b) => b.score - a.score);

        priority.forEach((ability, i) => {
            if (sortedScores[i] && !this.character.abilities[ability].assigned) {
                this.character.abilities[ability].base = sortedScores[i].score;
                this.character.abilities[ability].assigned = true;
                this.character.abilities[ability].scoreIndex = sortedScores[i].index;
                this.character.usedScores.push(sortedScores[i].index);
            }
        });
    }

    // 掷骰生成属性值并按职业优先级自动分配
    rollAndAssignAbilityScores(characterClass) {
        // 定义职业属性优先级
        const priorityMap = {
            'barbarian': ['strength', 'constitution', 'dexterity', 'wisdom', 'charisma', 'intelligence'],
            'bard': ['charisma', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'strength'],
            'cleric': ['wisdom', 'constitution', 'strength', 'charisma', 'intelligence', 'dexterity'],
            'druid': ['wisdom', 'constitution', 'dexterity', 'intelligence', 'charisma', 'strength'],
            'fighter': ['strength', 'constitution', 'dexterity', 'wisdom', 'intelligence', 'charisma'],
            'monk': ['dexterity', 'wisdom', 'constitution', 'strength', 'intelligence', 'charisma'],
            'paladin': ['strength', 'charisma', 'constitution', 'wisdom', 'intelligence', 'dexterity'],
            'ranger': ['dexterity', 'wisdom', 'constitution', 'strength', 'intelligence', 'charisma'],
            'rogue': ['dexterity', 'intelligence', 'constitution', 'charisma', 'wisdom', 'strength'],
            'sorcerer': ['charisma', 'constitution', 'dexterity', 'intelligence', 'wisdom', 'strength'],
            'warlock': ['charisma', 'constitution', 'dexterity', 'wisdom', 'intelligence', 'strength'],
            'wizard': ['intelligence', 'constitution', 'dexterity', 'wisdom', 'charisma', 'strength'],
            'artificer': ['intelligence', 'constitution', 'dexterity', 'wisdom', 'charisma', 'strength'],
            'pugilist': ['strength', 'constitution', 'dexterity', 'wisdom', 'charisma', 'intelligence']
        };

        const priority = priorityMap[characterClass] || ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

        // 生成一组属性值（6个值，4d6去最低）
        const scores = [];
        for (let i = 0; i < 6; i++) {
            scores.push(this.rollAbilityScore());
        }
        // 降序排序
        scores.sort((a, b) => b - a);

        // 重置属性分配状态
        this.character.rolledScores = scores;
        this.character.usedScores = [];
        
        // 清除之前的分配
        for (const ability of Object.keys(this.character.abilities)) {
            this.character.abilities[ability].base = 0;
            this.character.abilities[ability].assigned = false;
            delete this.character.abilities[ability].scoreIndex;
        }

        // 按职业优先级分配最高的属性值
        priority.forEach((ability, i) => {
            if (scores[i]) {
                this.character.abilities[ability].base = scores[i];
                this.character.abilities[ability].assigned = true;
                this.character.abilities[ability].scoreIndex = i;
                this.character.usedScores.push(i);
            }
        });

        // 更新UI
        this.updateAbilitySelects();
        this.updateAbilityScores();
        this.updateCharacterSheet();
    }

    // 自动选择技能
    autoSelectSkills() {
        const cls = CLASSES[this.character.class];
        if (!cls || !cls.skills) return;

        const availableSkills = cls.skills.filter(skill => !this.character.proficiencies.skills.includes(skill));
        const skillsToSelect = cls.skillCount || 2;

        // 随机选择技能
        const shuffled = availableSkills.sort(() => 0.5 - Math.random());
        for (let i = 0; i < Math.min(skillsToSelect, shuffled.length); i++) {
            this.character.proficiencies.skills.push(shuffled[i]);
        }

        // 添加背景技能
        if (this.character.background && BACKGROUNDS[this.character.background]) {
            const bg = BACKGROUNDS[this.character.background];
            if (bg.skills) {
                bg.skills.forEach(skill => {
                    if (!this.character.proficiencies.skills.includes(skill)) {
                        this.character.proficiencies.skills.push(skill);
                    }
                });
            }
        }
    }

    // 自动添加武器
    autoAddWeapons() {
        const cls = CLASSES[this.character.class];
        if (!cls) return;

        // 根据职业添加合适的武器
        const weaponMap = {
            'barbarian': ['martialMelee', 'simpleMelee'],
            'bard': ['simpleMelee', 'simpleRanged'],
            'cleric': ['simpleMelee', 'simpleRanged'],
            'druid': ['simpleMelee', 'simpleRanged'],
            'fighter': ['martialMelee', 'martialRanged', 'simpleMelee'],
            'monk': ['simpleMelee'],
            'paladin': ['martialMelee', 'simpleMelee'],
            'ranger': ['martialMelee', 'martialRanged'],
            'rogue': ['simpleMelee', 'martialMelee', 'simpleRanged'],
            'sorcerer': ['simpleMelee', 'simpleRanged'],
            'warlock': ['simpleMelee', 'simpleRanged'],
            'wizard': ['simpleMelee', 'simpleRanged'],
            'artificer': ['simpleMelee', 'simpleRanged', 'martialMelee'],
            'pugilist': ['simpleMelee']
        };

        const preferredCategories = weaponMap[this.character.class] || ['simpleMelee'];
        
        // 添加1-2个近战武器
        const meleeCategories = preferredCategories.filter(cat => cat.includes('Melee'));
        if (meleeCategories.length > 0) {
            const category = meleeCategories[0];
            if (WEAPONS[category] && WEAPONS[category].length > 0) {
                const randomWeapon = WEAPONS[category][Math.floor(Math.random() * WEAPONS[category].length)];
                this.character.weapons.melee.push({ ...randomWeapon, id: Date.now() });
            }
        }

        // 50%概率添加远程武器
        if (Math.random() > 0.5) {
            const rangedCategories = preferredCategories.filter(cat => cat.includes('Ranged'));
            if (rangedCategories.length > 0) {
                const category = rangedCategories[0];
                if (WEAPONS[category] && WEAPONS[category].length > 0) {
                    const randomWeapon = WEAPONS[category][Math.floor(Math.random() * WEAPONS[category].length)];
                    this.character.weapons.ranged.push({ ...randomWeapon, id: Date.now() + 1 });
                }
            }
        }
    }

    // 生成随机名称
    generateRandomName(race) {
        const firstNames = {
            'human': ['亚瑟', '艾德里安', '布莱克', '凯尔', '达里安', '艾登', '芬恩', '加雷斯', '雨果', '伊恩'],
            'elf': ['阿拉贡', '凯勒巩', '费诺', '格洛芬德尔', '哈尔迪尔', '伊姆拉崔', '莱戈拉斯', '林迪尔', '迈隆', '瑟兰迪尔'],
            'dwarf': ['巴林', '杜瓦林', '菲力', '奇力', '欧因', '格罗因', '比弗', '波弗', '邦伯', '多瑞'],
            'halfling': ['比尔博', '弗罗多', '山姆', '梅里', '皮平', '罗斯科', '托比', '威尔', '安迪', '巴里'],
            'halfElf': ['艾德里安', '卡西乌斯', '达里安', '埃德蒙', '费利克斯', '加布里埃尔', '霍拉斯', '伊桑', '朱利安', '卢卡斯'],
            'halfOrc': ['格鲁姆', '沙加', '莫格', '图格', '卡什', '达卡', '拉什', '莫什', '古尔', '沙克'],
            'gnome': ['宾果', '芬多', '吉尔多', '哈姆法斯特', '伊斯科', '杰瑞', '凯多', '林多', '蒙多', '尼多'],
            'tiefling': ['阿斯莫', '贝尔', '赛尔', '迪斯', '厄斯', '费尔', '盖尔', '赫尔', '伊斯', '杰尔'],
            'dragonborn': ['阿达克斯', '巴尔萨扎', '西里尔', '德里克', '埃米尔', '法比安', '加文', '霍克', '伊凡', '贾斯珀'],
            'tabaxi': ['月影', '云步', '风爪', '夜行者', '迅足', '雷鸣', '高跳', '潜行', '追踪者', '观察者'],
            'firbolg': ['艾尔丹', '芬恩', '加拉德', '希尔万', '伊利亚', '凯兰', '利亚姆', '诺兰', '奥兰', '奎兰'],
            'goliath': ['阿甘', '布拉甘', '科甘', '多甘', '埃甘', '福甘', '戈甘', '霍甘', '伊甘', '乔甘']
        };

        const lastNames = {
            'human': ['史塔克', '兰尼斯特', '坦格利安', '拜拉席恩', '艾林', '徒利', '提利尔', '马泰尔', '葛雷乔伊', '弗雷'],
            'elf': ['星光', '月影', '晨曦', '暮色', '森林', '溪流', '山峰', '海洋', '天空', '大地'],
            'dwarf': ['铁锤', '战斧', '盾墙', '石拳', '熔炉', '铁砧', '铜须', '银须', '金须', '山丘'],
            'halfling': ['图克', '白兰地鹿', '加德纳', '吹号者', '博芬', '博尔杰', '腰带', 'bracegirdle', '褐lock', '桑德希弗'],
            'halfElf': ['风行者', '银月', '黎明', '黄昏', '星辰', '海洋', '森林', '山脉', '河流', '湖泊'],
            'halfOrc': ['血斧', '战吼', '兽人杀手', '狂怒', '毁灭', '粉碎', '撕裂', '吞噬', '掠夺', '征服'],
            'gnome': ['齿轮', '扳手', '弹簧', '发条', '螺丝', '螺母', '螺栓', '钉子', '锤子', '锯子'],
            'tiefling': ['暗影', '深渊', '地狱', '诅咒', '痛苦', '折磨', '绝望', '恐惧', '噩梦', '黑暗'],
            'dragonborn': ['龙心', '龙血', '龙鳞', '龙爪', '龙息', '龙眼', '龙牙', '龙翼', '龙尾', '龙角'],
            'tabaxi': ['猎豹', '潜行者', '跳跃者', '攀爬者', '追踪者', '观察者', '潜行者', '奔跑者', '猎手', '品尝者'],
            'firbolg': ['森林', '荒野', '溪流', '山丘', '草地', '树木', '花朵', '果实', '种子', '枝叶'],
            'goliath': ['山峰', '岩石', '峭壁', '峡谷', '高原', '冰川', '雪崩', '雷霆', '风暴', '闪电']
        };

        const raceFirstNames = firstNames[race] || firstNames['human'];
        const raceLastNames = lastNames[race] || lastNames['human'];

        const firstName = raceFirstNames[Math.floor(Math.random() * raceFirstNames.length)];
        const lastName = raceLastNames[Math.floor(Math.random() * raceLastNames.length)];

        return `${firstName}·${lastName}`;
    }

    // 生成随机背景元素
    generateRandomBackground() {
        const personalities = [
            '我总是有讲不完的笑话和幽默故事。',
            '我习惯用礼貌的称呼和敬语来称呼他人。',
            '我对每个遇到的人都充满了好奇心，想要了解他们的故事。',
            '我喜欢观察他人，了解他们的动机。',
            '我是个直性子，从不绕弯子，即使这会让别人不舒服。',
            '我迷信一些征兆和预兆。',
            '我喜欢计划和准备，讨厌意外的突发状况。',
            '我总是在寻找下一次冒险的机会。'
        ];

        const ideals = [
            '尊重：每个人都应该被尊重，无论贫富。(善良)',
            '自由：每个人都应该有追求自己幸福的自由。(混乱)',
            '仁慈：我会尽我所能帮助他人。(善良)',
            '力量：强者有权统治弱者。(邪恶)',
            '知识：了解世界是通往力量的道路。(中立)',
            '荣誉：我的荣誉就是我的一切。(守序)',
            '独立：我必须证明自己能够照顾好自己。(混乱)',
            '责任：我有责任帮助那些需要帮助的人。(善良)'
        ];

        const bonds = [
            '我会保护我的家人，不惜一切代价。',
            '我欠我的导师一笔债，我永远不会忘记。',
            '我失去了我爱的人，我要找到他们。',
            '我的家园被毁了，我要重建它。',
            '我有一个黑暗的秘密，我会不惜一切保护它。',
            '我有一件珍贵的传家宝，它是我的唯一遗产。',
            '我会为我的同伴们赴汤蹈火。',
            '我要为那个冤枉我的人复仇。'
        ];

        const flaws = [
            '我无法抵抗赌博的诱惑，即使我知道我应该停止。',
            '我酗酒，而且经常喝得烂醉如泥。',
            '我很容易发怒，经常给自己惹麻烦。',
            '我太容易相信别人，经常被欺骗。',
            '我追求享乐，即使这会伤害我自己或他人。',
            '我无法保守秘密。',
            '我过于自负，看不起那些不如我聪明的人。',
            '我有一个坏习惯，总是忍不住要偷东西。'
        ];

        this.character.personality = personalities[Math.floor(Math.random() * personalities.length)];
        this.character.ideals = ideals[Math.floor(Math.random() * ideals.length)];
        this.character.bonds = bonds[Math.floor(Math.random() * bonds.length)];
        this.character.flaws = flaws[Math.floor(Math.random() * flaws.length)];
    }

    // ========== 新的属性掷骰和分配系统 ==========

    // 掷骰生成5组属性值，每组6个值（4d6去最低）
    rollAbilityScores() {
        const scoreSets = [];
        for (let setIndex = 0; setIndex < 5; setIndex++) {
            const scores = [];
            for (let i = 0; i < 6; i++) {
                scores.push(this.rollAbilityScore());
            }
            // 降序排序
            scores.sort((a, b) => b - a);
            scoreSets.push({
                id: setIndex,
                scores: scores,
                total: scores.reduce((a, b) => a + b, 0),
                modifierSum: scores.reduce((sum, score) => sum + this.calculateModifier(score), 0)
            });
        }
        
        // 按总和降序排序
        scoreSets.sort((a, b) => b.total - a.total);
        
        this.character.scoreSets = scoreSets;
        this.character.selectedScoreSet = null;
        this.character.rolledScores = [];
        this.character.usedScores = [];
        
        // 重置所有属性值
        for (const ability of Object.keys(this.character.abilities)) {
            this.character.abilities[ability].base = 10;
            this.character.abilities[ability].assigned = false;
        }
        
        this.displayScoreSets();
        this.updateAbilitySelects();
        this.updateAbilityScores();
        this.updateCharacterSheet();
    }

    // 选择一组属性值
    selectScoreSet(setIndex) {
        const selectedSet = this.character.scoreSets.find(set => set.id === setIndex);
        if (!selectedSet) return;
        
        this.character.selectedScoreSet = setIndex;
        this.character.rolledScores = [...selectedSet.scores];
        this.character.usedScores = [];
        
        // 重置所有属性值
        for (const ability of Object.keys(this.character.abilities)) {
            this.character.abilities[ability].base = 10;
            this.character.abilities[ability].assigned = false;
            this.character.abilities[ability].scoreIndex = null;
        }
        
        this.displayScoreSets();
        this.updateAbilitySelects();
        this.updateAbilityScores();
        this.updateCharacterSheet();
    }

    // 显示5组属性值供选择
    displayScoreSets() {
        const container = document.getElementById('rolledScores');
        if (!this.character.scoreSets || this.character.scoreSets.length === 0) {
            container.innerHTML = '<p>点击"掷骰生成属性"来获得5组属性值，选择你最喜欢的一组分配到各项属性上</p>';
            return;
        }
        
        let html = '<div class="score-sets-container">';
        html += '<h4>选择一组属性值：</h4>';
        html += '<div class="score-sets-grid">';
        
        this.character.scoreSets.forEach((set) => {
            const isSelected = this.character.selectedScoreSet === set.id;
            html += `
                <div class="score-set ${isSelected ? 'selected' : ''}" onclick="characterApp.selectScoreSet(${set.id})">
                    <div class="score-set-header">
                        <span class="score-set-label">第${set.id + 1}组</span>
                        ${isSelected ? '<span class="selected-badge">✓ 已选择</span>' : ''}
                    </div>
                    <div class="score-set-values">
                        ${set.scores.map(score => `<span class="score-value">${score}</span>`).join('')}
                    </div>
                    <div class="score-set-stats">
                        <span>总和: ${set.total}</span>
                        <span>调整值总和: ${set.modifierSum >= 0 ? '+' : ''}${set.modifierSum}</span>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        html += '</div>';
        
        // 如果已选择一组，显示可分配的属性值
        if (this.character.selectedScoreSet !== null && this.character.rolledScores.length > 0) {
            html += '<div class="selected-scores-section">';
            html += '<h4>将选中的属性值分配到各属性上：</h4>';
            html += '<div class="rolled-scores-grid">';
            this.character.rolledScores.forEach((score, index) => {
                const isUsed = this.character.usedScores.includes(index);
                html += `
                    <div class="rolled-score ${isUsed ? 'used' : ''}" data-index="${index}">
                        <span class="score-value">${score}</span>
                        <span class="score-mod">(${this.calculateModifier(score) >= 0 ? '+' : ''}${this.calculateModifier(score)})</span>
                        ${isUsed ? '<span class="score-used">已使用</span>' : ''}
                    </div>
                `;
            });
            html += '</div>';
            html += '</div>';
        }
        
        container.innerHTML = html;
    }

    // 更新属性选择下拉框
    updateAbilitySelects() {
        const availableScores = this.character.rolledScores.map((score, index) => ({
            score,
            index,
            used: this.character.usedScores.includes(index)
        })).filter(item => !item.used);

        for (const ability of Object.keys(this.character.abilities)) {
            const select = document.querySelector(`.ability-score[data-ability="${ability}"] .ability-base`);
            if (select) {
                const currentValue = this.character.abilities[ability].base;
                select.innerHTML = '<option value="">选择</option>';
                
                // 添加可用的属性值
                availableScores.forEach(item => {
                    const option = document.createElement('option');
                    option.value = `${item.score}|${item.index}`;
                    option.textContent = item.score;
                    select.appendChild(option);
                });
                
                // 如果当前有属性值，添加并保持选中
                if (currentValue && currentValue !== 10) {
                    const currentOption = document.createElement('option');
                    currentOption.value = `${currentValue}|${this.character.abilities[ability].scoreIndex}`;
                    currentOption.textContent = currentValue;
                    currentOption.selected = true;
                    select.insertBefore(currentOption, select.children[1]);
                }
            }
        }
    }

    // 分配属性值到指定属性
    assignAbilityScore(ability, valueStr) {
        if (!valueStr) {
            // 清除该属性的分配
            if (this.character.abilities[ability].base !== 10) {
                const oldIndex = this.character.abilities[ability].scoreIndex;
                const usedIndex = this.character.usedScores.indexOf(oldIndex);
                if (usedIndex > -1) {
                    this.character.usedScores.splice(usedIndex, 1);
                }
            }
            this.character.abilities[ability].base = 10;
            this.character.abilities[ability].assigned = false;
            this.character.abilities[ability].scoreIndex = null;
        } else {
            const [score, index] = valueStr.split('|').map(Number);
            
            // 如果该属性已有值，先释放旧值
            if (this.character.abilities[ability].base !== 10) {
                const oldIndex = this.character.abilities[ability].scoreIndex;
                const usedIndex = this.character.usedScores.indexOf(oldIndex);
                if (usedIndex > -1) {
                    this.character.usedScores.splice(usedIndex, 1);
                }
            }
            
            // 分配新值
            this.character.abilities[ability].base = score;
            this.character.abilities[ability].assigned = true;
            this.character.abilities[ability].scoreIndex = index;
            this.character.usedScores.push(index);
        }
        
        this.displayScoreSets();
        this.updateAbilitySelects();
        this.updateAbilityScores();
        this.updateCharacterSheet();
    }

    // 重置属性分配
    resetAbilityAssignment() {
        for (const ability of Object.keys(this.character.abilities)) {
            this.character.abilities[ability].base = 10;
            this.character.abilities[ability].assigned = false;
            this.character.abilities[ability].scoreIndex = null;
        }
        this.character.usedScores = [];
        
        this.displayScoreSets();
        this.updateAbilitySelects();
        this.updateAbilityScores();
        this.updateCharacterSheet();
    }

    // 导出角色卡
    exportCharacter() {
        const dataStr = JSON.stringify(this.character, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.character.name || '未命名角色'}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // 导入角色卡
    importCharacter(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                this.character = { ...this.getDefaultCharacter(), ...data };
                this.updateUI();
                this.updateCharacterSheet();
                alert('角色卡导入成功！');
            } catch (err) {
                alert('导入失败：无效的JSON文件');
            }
        };
        reader.readAsText(file);
    }

    // 更新UI
    updateUI() {
        document.getElementById('charName').value = this.character.name;
        document.getElementById('playerName').value = this.character.playerName;
        document.getElementById('charLevel').value = this.character.level;
        document.getElementById('charXP').value = this.character.xp;
        document.getElementById('raceSelect').value = this.character.race;
        document.getElementById('classSelect').value = this.character.class;
        document.getElementById('backgroundSelect').value = this.character.background;
        
        // 更新财富输入
        const wealth = this.character.wealth || { pp: 0, gp: 0, ep: 0, sp: 0, cp: 0 };
        const wealthPP = document.getElementById('wealthPP');
        const wealthGP = document.getElementById('wealthGP');
        const wealthEP = document.getElementById('wealthEP');
        const wealthSP = document.getElementById('wealthSP');
        const wealthCP = document.getElementById('wealthCP');
        if (wealthPP) wealthPP.value = wealth.pp || 0;
        if (wealthGP) wealthGP.value = wealth.gp || 0;
        if (wealthEP) wealthEP.value = wealth.ep || 0;
        if (wealthSP) wealthSP.value = wealth.sp || 0;
        if (wealthCP) wealthCP.value = wealth.cp || 0;
        
        if (this.character.race) {
            this.selectRace(this.character.race);
        }
        if (this.character.class) {
            this.selectClass(this.character.class);
        }
        if (this.character.background) {
            this.selectBackground(this.character.background);
        }
        
        this.updateAbilityScores();
        this.renderSkills();
        this.renderMulticlass();
    }

    // 清除角色（新建角色）
    clearCharacter() {
        if (confirm('确定要创建新角色吗？当前角色数据将丢失。')) {
            this.character = this.getDefaultCharacter();
            this.updateUI();
            this.updateCharacterSheet();
            this.showNotification('已创建新角色', 'info');
        }
    }

    // 保存角色到本地存储
    saveCharacter() {
        try {
            const characterData = JSON.stringify(this.character);
            localStorage.setItem('dnd_character', characterData);
            this.showNotification('角色已保存到本地存储', 'success');
        } catch (e) {
            this.showNotification('保存失败：' + e.message, 'error');
        }
    }

    // 从本地存储加载角色
    loadCharacter() {
        try {
            const characterData = localStorage.getItem('dnd_character');
            if (characterData) {
                this.character = { ...this.getDefaultCharacter(), ...JSON.parse(characterData) };
                this.updateUI();
                this.updateCharacterSheet();
                this.showNotification('角色已加载', 'success');
            } else {
                this.showNotification('没有找到保存的角色', 'warning');
            }
        } catch (e) {
            this.showNotification('加载失败：' + e.message, 'error');
        }
    }

    // 随机创建角色
    randomCharacter() {
        this.generateRandomCharacter();
    }

    // 导出PDF（使用浏览器打印功能）
    exportPDF() {
        // 创建打印窗口
        const printWindow = window.open('', '_blank');
        
        // 生成角色卡HTML
        const raceName = this.character.race ? RACES[this.character.race]?.name : '';
        const className = this.character.class ? CLASSES[this.character.class]?.name : '';
        
        // 计算总等级
        const totalLevel = this.character.level + (this.character.multiclass || []).reduce((sum, mc) => sum + mc.level, 0);
        
        // 构建职业显示（包括兼职）
        let classDisplay = '';
        if (this.character.class) {
            const mainClass = CLASSES[this.character.class];
            let mainClassName = mainClass?.name || '职业';
            if (this.character.subclass && SUBCLASSES[this.character.class]) {
                mainClassName += ` (${SUBCLASSES[this.character.class][this.character.subclass]?.name || ''})`;
            }
            classDisplay = `${mainClassName} ${this.character.level}级`;
            
            // 添加兼职信息
            if (this.character.multiclass && this.character.multiclass.length > 0) {
                const multiclassDisplay = this.character.multiclass.map(mc => {
                    return `${mc.name} ${mc.level}级`;
                }).join(', ');
                classDisplay += ` / ${multiclassDisplay}`;
            }
        }
        
        let abilitiesHTML = '';
        const abilityNames = {
            strength: '力量',
            dexterity: '敏捷',
            constitution: '体质',
            intelligence: '智力',
            wisdom: '感知',
            charisma: '魅力'
        };
        
        for (const [ability, scores] of Object.entries(this.character.abilities)) {
            const total = scores.base + scores.racial;
            const mod = this.calculateModifier(total);
            abilitiesHTML += `
                <div class="ability-box">
                    <div class="ability-name">${abilityNames[ability]}</div>
                    <div class="ability-score">${total}</div>
                    <div class="ability-mod">${mod >= 0 ? '+' : ''}${mod}</div>
                </div>
            `;
        }
        
        let skillsHTML = '';
        for (const [key, skill] of Object.entries(SKILLS)) {
            const isProficient = this.character.proficiencies.skills.includes(key);
            const abilityMod = this.calculateModifier(
                (this.character.abilities[skill.ability].base || 10) + 
                this.character.abilities[skill.ability].racial
            );
            let modifier = abilityMod;
            if (isProficient) {
                modifier += this.getProficiencyBonus();
            }
            skillsHTML += `
                <div class="skill-item ${isProficient ? 'proficient' : ''}">
                    ${isProficient ? '●' : '○'} ${skill.name} ${modifier >= 0 ? '+' : ''}${modifier}
                </div>
            `;
        }
        
        let weaponsHTML = '';
        if (this.character.weapons.melee.length > 0) {
            weaponsHTML += '<h4>近战武器</h4>';
            weaponsHTML += this.character.weapons.melee.map(w => `
                <div>${w.name} - ${w.damage} ${w.damageType}</div>
            `).join('');
        }
        if (this.character.weapons.ranged.length > 0) {
            weaponsHTML += '<h4>远程武器</h4>';
            weaponsHTML += this.character.weapons.ranged.map(w => `
                <div>${w.name} - ${w.damage} ${w.damageType} (射程: ${w.range})</div>
            `).join('');
        }
        
        let spellsHTML = '';
        if (this.character.spells.length > 0) {
            spellsHTML = '<h4>法术</h4>';
            spellsHTML += this.character.spells.map(s => `
                <div>${s.name} - ${s.level === 0 ? '戏法' : s.level + '环'} ${s.school}</div>
            `).join('');
        }
        
        // 财富信息
        const wealth = this.character.wealth || { pp: 0, gp: 0, ep: 0, sp: 0, cp: 0 };
        const totalGP = (wealth.pp || 0) * 10 + (wealth.gp || 0) + (wealth.ep || 0) * 0.5 + (wealth.sp || 0) * 0.1 + (wealth.cp || 0) * 0.01;
        
        // 职业特性
        let classFeaturesHTML = '';
        if (this.character.class && CLASSES[this.character.class]) {
            const cls = CLASSES[this.character.class];
            if (cls.features) {
                const features = cls.features.filter(f => f.level <= this.character.level);
                if (features.length > 0) {
                    classFeaturesHTML += `<h4>${cls.name} 特性</h4>`;
                    classFeaturesHTML += features.map(f => `<div><strong>${f.name}</strong> (${f.level}级): ${f.description}</div>`).join('');
                }
            }
        }
        
        // 兼职特性
        if (this.character.multiclass && this.character.multiclass.length > 0) {
            this.character.multiclass.forEach(mc => {
                if (mc.class && CLASSES[mc.class]) {
                    const mcClass = CLASSES[mc.class];
                    if (mcClass.features) {
                        const features = mcClass.features.filter(f => f.level <= mc.level);
                        if (features.length > 0) {
                            classFeaturesHTML += `<h4>${mcClass.name} (兼职) 特性</h4>`;
                            classFeaturesHTML += features.map(f => `<div><strong>${f.name}</strong> (${f.level}级): ${f.description}</div>`).join('');
                        }
                    }
                }
            });
        }
        
        // 种族特性
        let raceFeaturesHTML = '';
        if (this.character.race && RACES[this.character.race]) {
            const race = RACES[this.character.race];
            if (race.traits) {
                raceFeaturesHTML += `<h4>${race.name} 特性</h4>`;
                raceFeaturesHTML += race.traits.map(t => `<div><strong>${t.name}</strong>: ${t.description}</div>`).join('');
            }
        }
        
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${this.character.name || '未命名角色'} - 角色卡</title>
                <style>
                    body {
                        font-family: 'Georgia', serif;
                        max-width: 800px;
                        margin: 0 auto;
                        padding: 20px;
                        background: white;
                    }
                    .character-header {
                        text-align: center;
                        border-bottom: 3px double #333;
                        padding-bottom: 20px;
                        margin-bottom: 30px;
                    }
                    .character-name {
                        font-size: 2.5em;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    .character-info {
                        font-size: 1.1em;
                        color: #666;
                    }
                    .section {
                        margin-bottom: 25px;
                        page-break-inside: avoid;
                    }
                    .section-title {
                        font-size: 1.3em;
                        font-weight: bold;
                        border-bottom: 2px solid #333;
                        padding-bottom: 5px;
                        margin-bottom: 15px;
                        color: #333;
                    }
                    .abilities-grid {
                        display: grid;
                        grid-template-columns: repeat(6, 1fr);
                        gap: 10px;
                    }
                    .ability-box {
                        border: 2px solid #333;
                        padding: 10px;
                        text-align: center;
                    }
                    .ability-name {
                        font-weight: bold;
                        font-size: 0.9em;
                        margin-bottom: 5px;
                    }
                    .ability-score {
                        font-size: 1.8em;
                        font-weight: bold;
                    }
                    .ability-mod {
                        font-size: 1em;
                        color: #666;
                    }
                    .skills-list {
                        column-count: 3;
                        column-gap: 20px;
                    }
                    .skill-item {
                        padding: 2px 0;
                        font-size: 0.9em;
                    }
                    .proficient {
                        font-weight: bold;
                    }
                    .combat-info {
                        display: grid;
                        grid-template-columns: repeat(6, 1fr);
                        gap: 10px;
                        margin-bottom: 20px;
                    }
                    .combat-box {
                        border: 1px solid #333;
                        padding: 10px;
                        text-align: center;
                    }
                    .wealth-info {
                        display: grid;
                        grid-template-columns: repeat(5, 1fr);
                        gap: 10px;
                        margin-bottom: 10px;
                    }
                    .wealth-box {
                        border: 1px solid #333;
                        padding: 8px;
                        text-align: center;
                    }
                    .wealth-total-box {
                        text-align: center;
                        font-weight: bold;
                        padding: 10px;
                        background: #f5f5f5;
                        border: 1px solid #333;
                    }
                    .features-section h4 {
                        color: #333;
                        margin: 15px 0 10px 0;
                        padding-bottom: 5px;
                        border-bottom: 1px solid #ccc;
                    }
                    .features-section div {
                        margin-bottom: 8px;
                        font-size: 0.9em;
                    }
                    @media print {
                        body { padding: 0; }
                        .no-print { display: none; }
                        .section { page-break-inside: avoid; }
                    }
                </style>
            </head>
            <body>
                <div class="character-header">
                    <div class="character-name">${this.character.name || '未命名角色'}</div>
                    <div class="character-info">
                        ${raceName} | ${classDisplay}<br>
                        玩家: ${this.character.playerName || '-'} | 
                        经验值: ${this.character.xp} | 
                        总等级: ${totalLevel}
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">战斗信息</div>
                    <div class="combat-info">
                        <div class="combat-box">
                            <strong>护甲等级</strong><br>
                            ${document.getElementById('sheetAC').textContent}
                        </div>
                        <div class="combat-box">
                            <strong>生命值</strong><br>
                            ${this.character.currentHP}/${this.character.maxHP}
                        </div>
                        <div class="combat-box">
                            <strong>先攻</strong><br>
                            ${document.getElementById('sheetInitiative').textContent}
                        </div>
                        <div class="combat-box">
                            <strong>速度</strong><br>
                            ${document.getElementById('sheetSpeed').textContent}
                        </div>
                        <div class="combat-box">
                            <strong>熟练加值</strong><br>
                            +${this.getProficiencyBonus()}
                        </div>
                        <div class="combat-box">
                            <strong>生命骰</strong><br>
                            d${this.character.class ? CLASSES[this.character.class]?.hitDice || 8 : 8}
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">财富</div>
                    <div class="wealth-info">
                        <div class="wealth-box">
                            <strong>铂金币 (PP)</strong><br>${wealth.pp || 0}
                        </div>
                        <div class="wealth-box">
                            <strong>金币 (GP)</strong><br>${wealth.gp || 0}
                        </div>
                        <div class="wealth-box">
                            <strong>银金币 (EP)</strong><br>${wealth.ep || 0}
                        </div>
                        <div class="wealth-box">
                            <strong>银币 (SP)</strong><br>${wealth.sp || 0}
                        </div>
                        <div class="wealth-box">
                            <strong>铜币 (CP)</strong><br>${wealth.cp || 0}
                        </div>
                    </div>
                    <div class="wealth-total-box">
                        总价值: ${totalGP.toFixed(2)} GP
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">属性值</div>
                    <div class="abilities-grid">
                        ${abilitiesHTML}
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">技能</div>
                    <div class="skills-list">
                        ${skillsHTML}
                    </div>
                </div>

                ${weaponsHTML ? `<div class="section"><div class="section-title">武器</div>${weaponsHTML}</div>` : ''}
                
                ${spellsHTML ? `<div class="section"><div class="section-title">法术</div>${spellsHTML}</div>` : ''}

                ${classFeaturesHTML ? `<div class="section features-section"><div class="section-title">职业特性</div>${classFeaturesHTML}</div>` : ''}
                
                ${raceFeaturesHTML ? `<div class="section features-section"><div class="section-title">种族特性</div>${raceFeaturesHTML}</div>` : ''}

                <div class="no-print" style="text-align: center; margin-top: 30px;">
                    <button onclick="window.print()" style="padding: 10px 20px; font-size: 1.1em;">打印角色卡</button>
                </div>
            </body>
            </html>
        `;
        
        printWindow.document.write(htmlContent);
        printWindow.document.close();
    }

    // 导出法术表
    exportSpellList() {
        if (this.character.spells.length === 0) {
            this.showNotification('当前角色没有法术', 'warning');
            return;
        }

        let spellListHTML = `
            <h2>${this.character.name || '未命名角色'} - 法术表</h2>
            <table border="1" style="border-collapse: collapse; width: 100%;">
                <tr>
                    <th>法术名称</th>
                    <th>等级</th>
                    <th>学派</th>
                </tr>
        `;

        this.character.spells.forEach(spell => {
            spellListHTML += `
                <tr>
                    <td>${spell.name}</td>
                    <td>${spell.level === 0 ? '戏法' : spell.level + '环'}</td>
                    <td>${spell.school}</td>
                </tr>
            `;
        });

        spellListHTML += '</table>';

        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${this.character.name} - 法术表</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }
                    th { background-color: #f2f2f2; }
                </style>
            </head>
            <body>
                ${spellListHTML}
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    // 添加兼职
    addMulticlass() {
        const multiclassSelect = document.getElementById('multiclassAdd');
        const multiclassLevel = document.getElementById('multiclassLevel');
        const multiclassSubclass = document.getElementById('multiclassSubclass');
        
        if (!multiclassSelect || !multiclassLevel) return;
        
        const classKey = multiclassSelect.value;
        const level = parseInt(multiclassLevel.value) || 1;
        const subclassKey = multiclassSubclass ? multiclassSubclass.value : '';
        
        if (!classKey) {
            this.showNotification('请选择要兼职的职业', 'warning');
            return;
        }
        
        // 检查是否选择的本职
        if (classKey === this.character.class) {
            this.showNotification('不能选择本职作为兼职', 'warning');
            return;
        }
        
        // 计算总等级
        const currentTotalLevel = this.character.level + this.character.multiclass.reduce((sum, mc) => sum + mc.level, 0);
        const existingIndex = this.character.multiclass.findIndex(mc => mc.class === classKey);
        const existingLevel = existingIndex > -1 ? this.character.multiclass[existingIndex].level : 0;
        const newTotalLevel = currentTotalLevel - existingLevel + level;
        
        // 检查总等级限制
        if (newTotalLevel > 20) {
            this.showNotification(`总等级不能超过20级（当前${currentTotalLevel - existingLevel}级，添加后${newTotalLevel}级）`, 'error');
            return;
        }
        
        // 获取子职业名称
        let subclassName = '';
        if (subclassKey && SUBCLASSES[classKey] && SUBCLASSES[classKey][subclassKey]) {
            subclassName = SUBCLASSES[classKey][subclassKey].name;
        }
        
        if (existingIndex > -1) {
            this.character.multiclass[existingIndex].level = level;
            if (subclassKey) {
                this.character.multiclass[existingIndex].subclass = subclassKey;
                this.character.multiclass[existingIndex].subclassName = subclassName;
            }
            this.showNotification('已更新兼职', 'info');
        } else {
            const multiclassData = {
                class: classKey,
                level: level,
                name: CLASSES[classKey]?.name || classKey
            };
            if (subclassKey) {
                multiclassData.subclass = subclassKey;
                multiclassData.subclassName = subclassName;
            }
            this.character.multiclass.push(multiclassData);
            this.showNotification('已添加兼职', 'success');
        }
        
        this.renderMulticlass();
        this.updateCharacterSheet();
        multiclassSelect.value = '';
        multiclassLevel.value = '1';
        if (multiclassSubclass) {
            multiclassSubclass.value = '';
            document.getElementById('multiclassSubclassGroup').style.display = 'none';
        }
    }

    // 渲染兼职列表
    renderMulticlass() {
        const container = document.getElementById('multiclassItems');
        if (!container) return;
        
        if (this.character.multiclass.length === 0) {
            container.innerHTML = '<p class="empty-text">暂无兼职</p>';
            return;
        }
        
        // 计算总等级
        const totalLevel = this.character.level + this.character.multiclass.reduce((sum, mc) => sum + mc.level, 0);
        
        container.innerHTML = `
            <div class="multiclass-summary">
                <strong>总等级: ${totalLevel}/20</strong>
            </div>
            ${this.character.multiclass.map((mc, index) => `
                <div class="multiclass-item">
                    <span>${mc.name}${mc.subclassName ? ` (${mc.subclassName})` : ''} ${mc.level}级</span>
                    <button onclick="characterApp.removeMulticlass(${index})" class="btn-remove">移除</button>
                </div>
            `).join('')}
        `;
    }

    // 更新兼职子职业选项
    updateMulticlassSubclassOptions(classKey) {
        const subclassSelect = document.getElementById('multiclassSubclass');
        const subclassGroup = document.getElementById('multiclassSubclassGroup');
        
        if (!subclassSelect || !subclassGroup) return;
        
        if (!classKey || !SUBCLASSES[classKey]) {
            subclassGroup.style.display = 'none';
            subclassSelect.innerHTML = '<option value="">-- 选择子职业 --</option>';
            return;
        }
        
        const subclasses = SUBCLASSES[classKey];
        let options = '<option value="">-- 选择子职业 --</option>';
        
        for (const [key, subclass] of Object.entries(subclasses)) {
            options += `<option value="${key}">${subclass.name}</option>`;
        }
        
        subclassSelect.innerHTML = options;
        subclassGroup.style.display = 'block';
    }

    // 切换夜间模式
    toggleDarkMode() {
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        
        // 保存用户偏好
        localStorage.setItem('theme', newTheme);
        
        // 更新按钮图标
        const toggleBtn = document.getElementById('darkModeToggle');
        if (toggleBtn) {
            toggleBtn.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
            toggleBtn.title = newTheme === 'dark' ? '切换日间模式' : '切换夜间模式';
        }
        
        this.showNotification(newTheme === 'dark' ? '已切换到夜间模式' : '已切换到日间模式', 'info');
    }

    // 初始化主题
    initTheme() {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        
        if (theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            const toggleBtn = document.getElementById('darkModeToggle');
            if (toggleBtn) {
                toggleBtn.innerHTML = '☀️';
                toggleBtn.title = '切换日间模式';
            }
        }
    }

    // 移除兼职
    removeMulticlass(index) {
        if (index > -1 && index < this.character.multiclass.length) {
            this.character.multiclass.splice(index, 1);
            this.renderMulticlass();
            this.updateCharacterSheet();
        }
    }

    // 重置属性值
    resetAbilityScores() {
        for (const ability of Object.keys(this.character.abilities)) {
            this.character.abilities[ability].base = 10;
            this.character.abilities[ability].assigned = false;
            this.character.abilities[ability].scoreIndex = null;
        }
        this.character.scoreSets = [];
        this.character.selectedScoreSet = null;
        this.character.rolledScores = [];
        this.character.usedScores = [];
        
        this.displayScoreSets();
        this.updateAbilitySelects();
        this.updateAbilityScores();
        this.updateCharacterSheet();
        this.showNotification('属性值已重置', 'info');
    }

    // 添加近战武器
    addMeleeWeapon() {
        this.addWeapon('melee');
    }

    // 添加远程武器
    addRangedWeapon() {
        this.addWeapon('ranged');
    }

    // 关闭加载对话框
    closeLoadDialog() {
        const dialog = document.getElementById('loadDialog');
        if (dialog) {
            dialog.style.display = 'none';
        }
    }

    // 处理特性给予的法术
    processFeatureSpells() {
        const featureSpells = this.getFeatureSpells();
        
        // 将特性法术添加到角色法术列表（如果不存在）
        featureSpells.forEach(spell => {
            const exists = this.character.spells.some(s => s.name === spell.name && s.source === spell.source);
            if (!exists) {
                this.character.spells.push(spell);
            }
        });
        
        // 移除不再符合条件的法术
        this.character.spells = this.character.spells.filter(spell => {
            if (spell.fromFeature) {
                return featureSpells.some(fs => fs.name === spell.name && fs.source === spell.source);
            }
            return true;
        });
        
        // 处理待选择的法术（显示选择对话框）
        this.processPendingSpellChoices();
    }

    // 获取所有特性给予的法术
    getFeatureSpells() {
        const spells = [];
        const totalLevel = this.character.level + (this.character.multiclass || []).reduce((sum, mc) => sum + mc.level, 0);
        
        // 检查种族特性
        if (this.character.race) {
            const race = RACES[this.character.race];
            if (race) {
                // 基础种族特性
                if (race.traits) {
                    race.traits.forEach(trait => {
                        if (trait.grantsSpells) {
                            this.extractSpellsFromGrant(trait.grantsSpells, trait.name, totalLevel, spells);
                        }
                    });
                }
                
                // 变体特性
                if (this.character.variant && race.variants && race.variants[this.character.variant]) {
                    const variant = race.variants[this.character.variant];
                    if (variant.traits) {
                        variant.traits.forEach(trait => {
                            if (trait.grantsSpells) {
                                this.extractSpellsFromGrant(trait.grantsSpells, trait.name, totalLevel, spells);
                            }
                        });
                    }
                }
                
                // 子种族特性
                if (this.character.subrace && race.subraces && race.subraces[this.character.subrace]) {
                    const subrace = race.subraces[this.character.subrace];
                    if (subrace.traits) {
                        subrace.traits.forEach(trait => {
                            if (trait.grantsSpells) {
                                this.extractSpellsFromGrant(trait.grantsSpells, trait.name, totalLevel, spells);
                            }
                        });
                    }
                }
            }
        }
        
        // 检查职业特性
        if (this.character.class && CLASSES[this.character.class]) {
            const cls = CLASSES[this.character.class];
            if (cls.features) {
                cls.features.forEach(feature => {
                    if (feature.level <= this.character.level && feature.grantsSpells) {
                        this.extractSpellsFromGrant(feature.grantsSpells, feature.name, this.character.level, spells);
                    }
                });
            }
            
            // 检查子职业特性
            if (this.character.subclass && SUBCLASSES[this.character.class] && SUBCLASSES[this.character.class][this.character.subclass]) {
                const subclass = SUBCLASSES[this.character.class][this.character.subclass];
                if (subclass.features) {
                    subclass.features.forEach(feature => {
                        if (feature.level <= this.character.level && feature.grantsSpells) {
                            this.extractSpellsFromGrant(feature.grantsSpells, feature.name, this.character.level, spells);
                        }
                    });
                }
            }
        }
        
        // 检查兼职特性
        if (this.character.multiclass && this.character.multiclass.length > 0) {
            this.character.multiclass.forEach(mc => {
                if (mc.class && CLASSES[mc.class]) {
                    const mcClass = CLASSES[mc.class];
                    if (mcClass.features) {
                        mcClass.features.forEach(feature => {
                            if (feature.level <= mc.level && feature.grantsSpells) {
                                this.extractSpellsFromGrant(feature.grantsSpells, `${feature.name}(兼职)`, mc.level, spells);
                            }
                        });
                    }
                    
                    // 检查兼职子职业特性
                    if (mc.subclass && SUBCLASSES[mc.class] && SUBCLASSES[mc.class][mc.subclass]) {
                        const mcSubclass = SUBCLASSES[mc.class][mc.subclass];
                        if (mcSubclass.features) {
                            mcSubclass.features.forEach(feature => {
                                if (feature.level <= mc.level && feature.grantsSpells) {
                                    this.extractSpellsFromGrant(feature.grantsSpells, `${feature.name}(兼职)`, mc.level, spells);
                                }
                            });
                        }
                    }
                }
            });
        }
        
        return spells;
    }

    // 从grantsSpells数据中提取法术
    extractSpellsFromGrant(grantsData, sourceName, characterLevel, spellsArray) {
        // 处理各等级法术（戏法到5环）
        const spellLevels = [
            { key: 'cantrips', level: 0, label: '戏法' },
            { key: 'level1', level: 1, label: '1环法术' },
            { key: 'level2', level: 2, label: '2环法术' },
            { key: 'level3', level: 3, label: '3环法术' },
            { key: 'level4', level: 4, label: '4环法术' },
            { key: 'level5', level: 5, label: '5环法术' }
        ];
        
        spellLevels.forEach(({ key, level, label }) => {
            if (!grantsData[key]) return;
            
            if (Array.isArray(grantsData[key])) {
                // 固定法术列表
                grantsData[key].forEach(spell => {
                    if (!spell.levelRequired || characterLevel >= spell.levelRequired) {
                        spellsArray.push({
                            name: spell.name,
                            level: level,
                            school: this.getSpellSchool(spell.name) || '未知',
                            source: sourceName,
                            fromFeature: true,
                            ability: spell.ability,
                            alwaysKnown: spell.alwaysKnown,
                            alwaysPrepared: spell.alwaysPrepared,
                            freeCast: spell.freeCast
                        });
                    }
                });
            } else if (grantsData[key].count && grantsData[key].choose) {
                // 需要选择的法术
                this.handleChoosableSpells(grantsData[key], key, level, label, sourceName, spellsArray);
            }
        });
        
        // 处理选择项（如魔鬼交易）
        if (grantsData.choices && grantsData.choose) {
            this.handleChoiceSpells(grantsData, sourceName, spellsArray);
        }
    }
    
    // 处理需要选择的法术
    handleChoosableSpells(spellData, key, level, label, sourceName, spellsArray) {
        const choiceKey = `spellChoice_${sourceName}_${key}`;
        const spellListName = spellData.spellList === 'warlock' ? '邪术师' : '';
        
        if (this.character.spellChoices?.[choiceKey]) {
            // 已选择，添加选择的法术
            this.character.spellChoices[choiceKey].forEach(spellName => {
                spellsArray.push({
                    name: spellName,
                    level: level,
                    school: this.getSpellSchool(spellName) || '未知',
                    source: sourceName,
                    fromFeature: true,
                    ability: spellData.ability,
                    alwaysKnown: level === 0,
                    alwaysPrepared: spellData.alwaysPrepared,
                    freeCast: spellData.freeCast
                });
            });
        } else {
            // 未选择，添加占位符提示
            for (let i = 0; i < spellData.count; i++) {
                spellsArray.push({
                    name: `[请选择${spellListName}${label}]`,
                    level: level,
                    school: '未知',
                    source: sourceName,
                    fromFeature: true,
                    isPlaceholder: true,
                    ability: spellData.ability,
                    alwaysPrepared: spellData.alwaysPrepared,
                    freeCast: spellData.freeCast
                });
            }
            // 显示选择提示
            this.showSpellChoiceDialog(key.replace('level', ''), spellData, sourceName);
        }
    }
    
    // 处理选择项法术（如魔鬼交易）
    handleChoiceSpells(grantsData, sourceName, spellsArray) {
        const choiceKey = `spellChoice_${sourceName}_choices`;
        
        if (this.character.spellChoices?.[choiceKey]) {
            const selectedChoice = this.character.spellChoices[choiceKey];
            const choice = grantsData.choices.find(c => c.name === selectedChoice);
            if (choice) {
                spellsArray.push({
                    name: choice.spell,
                    level: choice.level,
                    school: this.getSpellSchool(choice.spell) || '未知',
                    source: `${sourceName}(${choice.name})`,
                    fromFeature: true,
                    freeCast: choice.freeCast
                });
            }
        } else {
            spellsArray.push({
                name: `[请选择${sourceName}选项]`,
                level: 0,
                school: '未知',
                source: sourceName,
                fromFeature: true,
                isPlaceholder: true
            });
            this.showSpellChoiceDialog('choices', grantsData, sourceName);
        }
    }

    // 获取法术学派
    getSpellSchool(spellName) {
        // 在所有法术列表中查找
        for (const [key, spellList] of Object.entries(SPELLS)) {
            const spell = spellList.find(s => s.name === spellName);
            if (spell) return spell.school;
        }
        return '未知';
    }

    // 显示法术选择对话框
    showSpellChoiceDialog(type, spellData, sourceName) {
        // 根据类型生成不同的choiceKey
        let choiceKey;
        if (type === 'cantrips') {
            choiceKey = `spellChoice_${sourceName}_cantrips`;
        } else if (type === 'level1') {
            choiceKey = `spellChoice_${sourceName}_level1`;
        } else if (type === 'choices') {
            choiceKey = `spellChoice_${sourceName}_choices`;
        } else {
            choiceKey = `spellChoice_${sourceName}`;
        }
        
        // 检查是否已经选择过
        if (this.character.spellChoices && this.character.spellChoices[choiceKey]) {
            return; // 已经选择过了
        }
        
        // 检查是否已经在待选择列表中
        if (this.character.pendingSpellChoices && this.character.pendingSpellChoices.some(pc => pc.choiceKey === choiceKey)) {
            return; // 已经在待选择列表中
        }
        
        // 构建可选法术列表
        let availableSpells = [];
        
        if (type === 'cantrips' && spellData.spellList) {
            // 从特定职业法术列表中选择戏法
            const spellListKey = spellData.spellList;
            if (SPELLS.cantrips) {
                availableSpells = SPELLS.cantrips.filter(s => s.class.includes(spellListKey));
            }
        } else if (type === 'level1' && spellData.spellList) {
            // 从特定职业法术列表中选择1环法术
            const spellListKey = spellData.spellList;
            if (SPELLS.level1) {
                availableSpells = SPELLS.level1.filter(s => s.class.includes(spellListKey));
            }
        } else if (type === 'choices') {
            // 特定选项（如魔鬼交易）
            availableSpells = spellData.choices.map(choice => ({
                name: choice.name,
                spell: choice.spell,
                level: choice.level,
                description: `${choice.name}: ${choice.spell}`
            }));
        }
        
        if (availableSpells.length === 0) return;
        
        // 显示通知提示玩家选择
        this.showNotification(`${sourceName} 让你获得法术选择机会，请点击选择`, 'info');
        
        // 存储待选择的法术信息
        if (!this.character.pendingSpellChoices) {
            this.character.pendingSpellChoices = [];
        }
        
        this.character.pendingSpellChoices.push({
            type: type,
            source: sourceName,
            count: spellData.count || 1,
            spells: availableSpells,
            choiceKey: choiceKey,
            spellData: spellData
        });
    }

    // 处理待选择的法术
    processPendingSpellChoices() {
        if (!this.character.pendingSpellChoices || this.character.pendingSpellChoices.length === 0) {
            return;
        }
        
        // 显示第一个待选择的法术对话框
        const choice = this.character.pendingSpellChoices[0];
        this.showSpellChoiceModal(choice);
    }

    // 显示法术选择模态框
    showSpellChoiceModal(choiceData) {
        const dialog = document.getElementById('spellChoiceDialog');
        const title = document.getElementById('spellChoiceTitle');
        const description = document.getElementById('spellChoiceDescription');
        const list = document.getElementById('spellChoiceList');
        
        if (!dialog || !title || !description || !list) return;
        
        title.textContent = `${choiceData.source} - 选择法术`;
        description.textContent = `请选择 ${choiceData.count} 个法术`;
        
        list.innerHTML = choiceData.spells.map((spell, index) => `
            <div class="spell-choice-item" onclick="characterApp.selectSpell('${choiceData.choiceKey}', '${spell.name}', '${choiceData.type}')">
                <span class="spell-choice-name">${spell.name}</span>
                ${spell.level !== undefined ? `<span class="spell-choice-level">${spell.level === 0 ? '戏法' : spell.level + '环'}</span>` : ''}
                ${spell.school ? `<span class="spell-choice-school">${spell.school}</span>` : ''}
                ${spell.description ? `<span class="spell-choice-desc">${spell.description}</span>` : ''}
            </div>
        `).join('');
        
        dialog.style.display = 'flex';
    }

    // 选择法术
    selectSpell(choiceKey, spellName, type) {
        if (!this.character.spellChoices) {
            this.character.spellChoices = {};
        }
        
        // 存储选择的法术
        if (!this.character.spellChoices[choiceKey]) {
            this.character.spellChoices[choiceKey] = [];
        }
        
        this.character.spellChoices[choiceKey].push(spellName);
        
        // 从待选择列表中移除
        if (this.character.pendingSpellChoices) {
            this.character.pendingSpellChoices = this.character.pendingSpellChoices.filter(
                pc => pc.choiceKey !== choiceKey
            );
        }
        
        // 关闭对话框
        this.closeSpellChoiceDialog();
        
        // 显示通知
        this.showNotification(`已选择法术：${spellName}`, 'success');
        
        // 更新角色卡
        this.updateCharacterSheet();
        
        // 如果还有未处理的选择，继续显示
        if (this.character.pendingSpellChoices && this.character.pendingSpellChoices.length > 0) {
            setTimeout(() => {
                this.showSpellChoiceModal(this.character.pendingSpellChoices[0]);
            }, 300);
        }
    }

    // 关闭法术选择对话框
    closeSpellChoiceDialog() {
        const dialog = document.getElementById('spellChoiceDialog');
        if (dialog) {
            dialog.style.display = 'none';
        }
    }

    // 渲染准备法术列表
    renderPreparedSpells() {
        const slotsContainer = document.getElementById('spellSlotsInfo');
        const spellsContainer = document.getElementById('preparedSpellsList');
        
        if (!slotsContainer || !spellsContainer) return;
        
        // 计算总等级
        const totalLevel = this.character.level + (this.character.multiclass || []).reduce((sum, mc) => sum + mc.level, 0);
        
        // 检查是否是施法职业
        const isSpellcaster = this.character.class && CLASSES[this.character.class]?.spellcasting;
        const hasMulticlassSpellcaster = this.character.multiclass?.some(mc => CLASSES[mc.class]?.spellcasting);
        
        if (!isSpellcaster && !hasMulticlassSpellcaster) {
            // 非施法职业，只显示特性法术
            slotsContainer.innerHTML = '<span class="spell-slots-text">非施法职业，仅显示特性给予的法术</span>';
        } else {
            // 显示法术环位
            slotsContainer.innerHTML = this.renderSpellSlots();
        }
        
        // 显示准备法术列表
        if (this.character.spells.length === 0) {
            spellsContainer.innerHTML = '<p class="empty-text">暂无准备法术</p>';
            return;
        }
        
        // 按等级分组显示法术
        const spellsByLevel = {};
        this.character.spells.forEach(spell => {
            const level = spell.level || 0;
            if (!spellsByLevel[level]) spellsByLevel[level] = [];
            spellsByLevel[level].push(spell);
        });
        
        let html = '';
        const sortedLevels = Object.keys(spellsByLevel).sort((a, b) => a - b);
        
        sortedLevels.forEach(level => {
            const levelName = level === '0' ? '戏法' : `${level}环`;
            html += `<div class="prepared-spell-level-group"><h4>${levelName}</h4>`;
            
            spellsByLevel[level].forEach(spell => {
                const itemClass = spell.alwaysPrepared ? 'always-prepared' : (spell.fromFeature ? 'feature-spell' : '');
                const sourceText = spell.source ? `<span class="prepared-spell-source">${spell.source}</span>` : '';
                const abilityText = spell.ability ? `<span class="prepared-spell-source">${spell.ability}</span>` : '';
                
                html += `
                    <div class="prepared-spell-item ${itemClass}">
                        <div>
                            <span class="prepared-spell-name">${spell.name}</span>
                            ${sourceText}
                            ${abilityText}
                        </div>
                        <span class="prepared-spell-level">${level === 0 ? '戏法' : level + '环'}</span>
                    </div>
                `;
            });
            
            html += '</div>';
        });
        
        spellsContainer.innerHTML = html;
    }

    // 渲染法术环位
    renderSpellSlots() {
        const totalLevel = this.character.level + (this.character.multiclass || []).reduce((sum, mc) => sum + mc.level, 0);
        
        // 获取法术位（简化版本，根据5e规则）
        const spellSlots = this.calculateSpellSlots();
        
        if (!spellSlots) {
            return '<span class="spell-slots-text">无法术位</span>';
        }
        
        let html = '<span class="spell-slots-text">法术环位：</span>';
        html += '<div class="spell-slots-grid">';
        
        for (let level = 1; level <= 9; level++) {
            const slots = spellSlots[level] || 0;
            const availableClass = slots > 0 ? 'available' : 'unavailable';
            
            html += `
                <div class="spell-slot-box ${availableClass}">
                    <span class="spell-slot-level">${level}环</span>
                    <span class="spell-slot-count">${slots}</span>
                </div>
            `;
        }
        
        html += '</div>';
        return html;
    }

    // 计算法术位
    calculateSpellSlots() {
        if (!this.character.class) return null;
        
        const cls = CLASSES[this.character.class];
        if (!cls) return null;
        
        // 如果是邪术师，使用契约魔法
        if (this.character.class === 'warlock') {
            return this.getWarlockSpellSlots();
        }
        
        // 获取职业等级
        const level = this.character.level;
        
        // 根据职业类型选择法术位表
        // 全施法者：吟游诗人、牧师、德鲁伊、术士、法师
        // 半施法者（等级/2）：圣武士、游侠
        // 三分之一施法者（等级/3）：拳斗士（某些子职业）、战士（奥法骑士）、游荡者（诡术师）
        const fullCasters = ['bard', 'cleric', 'druid', 'sorcerer', 'wizard'];
        const halfCasters = ['paladin', 'ranger'];
        const thirdCasters = ['fighter', 'rogue']; // 需要检查子职业
        
        let effectiveLevel = level;
        
        if (halfCasters.includes(this.character.class)) {
            // 半施法者：等级除以2，向上取整
            effectiveLevel = Math.ceil(level / 2);
        } else if (thirdCasters.includes(this.character.class)) {
            // 三分之一施法者：需要检查子职业
            if (this.character.subclass === 'eldritch_knight' || this.character.subclass === 'arcane_trickster') {
                effectiveLevel = Math.ceil(level / 3);
            } else {
                return {}; // 不是施法子职业
            }
        } else if (!fullCasters.includes(this.character.class)) {
            return {}; // 非施法职业
        }
        
        // 标准法术位表（根据有效施法等级）
        const slotTable = {
            1: { 1: 2 },
            2: { 1: 3 },
            3: { 1: 4, 2: 2 },
            4: { 1: 4, 2: 3 },
            5: { 1: 4, 2: 3, 3: 2 },
            6: { 1: 4, 2: 3, 3: 3 },
            7: { 1: 4, 2: 3, 3: 3, 4: 1 },
            8: { 1: 4, 2: 3, 3: 3, 4: 2 },
            9: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
            10: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
            11: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
            12: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
            13: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
            14: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
            15: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
            16: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
            17: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 },
            18: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 },
            19: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 },
            20: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 }
        };
        
        // 限制有效等级最大为20
        const cappedLevel = Math.min(effectiveLevel, 20);
        return slotTable[cappedLevel] || {};
    }

    // 获取邪术师契约法术位
    getWarlockSpellSlots() {
        const level = this.character.level;
        const slots = {};
        
        // 邪术师契约魔法：所有法术位为最高环阶
        // 1-2级：1个1环
        // 3-4级：2个2环
        // 5-6级：2个3环
        // 7-8级：2个4环
        // 9-20级：2个5环
        // 11级：+1个5环（共3个）
        // 17级：+1个5环（共4个）
        
        if (level >= 1 && level <= 2) {
            slots[1] = 1;
        } else if (level >= 3 && level <= 4) {
            slots[2] = 2;
        } else if (level >= 5 && level <= 6) {
            slots[3] = 2;
        } else if (level >= 7 && level <= 8) {
            slots[4] = 2;
        } else if (level >= 9 && level <= 10) {
            slots[5] = 2;
        } else if (level >= 11 && level <= 16) {
            slots[5] = 3;
        } else if (level >= 17) {
            slots[5] = 4;
        }
        
        return slots;
    }

    // 选择护甲
    selectArmor(armorValue) {
        if (!armorValue) {
            this.character.armor = '';
            this.character.shield = false;
        } else if (armorValue === 'shield') {
            this.character.shield = true;
        } else {
            this.character.armor = armorValue;
        }
        
        this.updateArmorDisplay();
        this.updateCharacterSheet();
        
        const armorName = ARMOR[armorValue]?.name || '无护甲';
        this.showNotification(`已选择护甲：${armorName}`, 'success');
    }

    // 更新护甲显示
    updateArmorDisplay() {
        const armorInfo = document.getElementById('armorInfo');
        if (!armorInfo) return;
        
        const acResult = this.calculateArmorClass();
        const ac = acResult.ac;
        const armorName = this.character.armor ? ARMOR[this.character.armor]?.name : '无护甲';
        const shieldText = this.character.shield ? ' + 盾牌' : '';
        
        let details = '';
        if (this.character.armor && ARMOR[this.character.armor]) {
            const armor = ARMOR[this.character.armor];
            details = `<div class="armor-details">${armor.type}`;
            if (armor.stealthDisadvantage) {
                details += ' | 隐匿劣势';
            }
            if (armor.minStr) {
                details += ` | 需要力量${armor.minStr}`;
            }
            details += '</div>';
        }
        
        // 无甲防御提示
        let unarmoredHtml = '';
        if (acResult.useUnarmored) {
            unarmoredHtml = `
                <div class="unarmored-defense-active">
                    <span class="unarmored-defense-text">✓ ${acResult.unarmoredName}生效中</span>
                </div>
            `;
        }
        
        armorInfo.innerHTML = `
            <span class="armor-ac">当前AC: ${ac}</span>
            <div class="armor-details">${armorName}${shieldText}</div>
            ${details}
            ${unarmoredHtml}
        `;
    }

    // 计算护甲等级
    calculateArmorClass() {
        let dexMod = this.calculateModifier(this.character.abilities.dexterity.base + this.character.abilities.dexterity.racial);
        let armorAC = 0;
        let unarmoredAC = 0;
        let useUnarmored = false;
        let unarmoredDefenseName = '';
        
        // 计算装备护甲的AC
        if (this.character.armor && ARMOR[this.character.armor]) {
            const armor = ARMOR[this.character.armor];
            armorAC = armor.baseAC;
            
            // 如果护甲可以加敏捷调整值
            if (armor.addDex) {
                let effectiveDexMod = dexMod;
                // 如果有最大敏捷调整值限制
                if (armor.maxDex !== null && dexMod > armor.maxDex) {
                    effectiveDexMod = armor.maxDex;
                }
                armorAC += effectiveDexMod;
            }
        } else {
            // 无护甲时，基础AC = 10 + 敏捷调整值
            armorAC = 10 + dexMod;
        }
        
        // 检查是否有盾牌
        const shieldBonus = this.character.shield ? 2 : 0;
        
        // 计算无甲防御AC（如果不穿护甲且未持盾）
        if (!this.character.armor && !this.character.shield) {
            unarmoredAC = this.calculateUnarmoredDefenseAC();
            if (unarmoredAC > 0) {
                useUnarmored = true;
                unarmoredDefenseName = this.getUnarmoredDefenseName();
            }
        }
        
        // 拳斗士的钢颚铁护（不穿重甲、中甲，未持盾）
        if (!this.character.shield && this.character.class === 'pugilist') {
            const armorType = this.character.armor ? ARMOR[this.character.armor]?.type : null;
            if (!armorType || armorType === '轻甲') {
                const ironChinAC = this.calculateIronChinAC();
                if (ironChinAC > armorAC && ironChinAC > unarmoredAC) {
                    return { 
                        ac: ironChinAC + shieldBonus, 
                        useUnarmored: true, 
                        unarmoredName: '钢颚铁护',
                        shieldBonus: shieldBonus
                    };
                }
            }
        }
        
        // 比较装备AC和无甲防御AC，取高值
        if (useUnarmored && unarmoredAC > armorAC) {
            return { 
                ac: unarmoredAC + shieldBonus, 
                useUnarmored: true, 
                unarmoredName: unarmoredDefenseName,
                shieldBonus: shieldBonus
            };
        }
        
        return { 
            ac: armorAC + shieldBonus, 
            useUnarmored: false, 
            unarmoredName: '',
            shieldBonus: shieldBonus
        };
    }

    // 计算无甲防御AC
    calculateUnarmoredDefenseAC() {
        if (!this.character.class) return 0;
        
        const dexMod = this.calculateModifier(this.character.abilities.dexterity.base + this.character.abilities.dexterity.racial);
        let unarmoredAC = 0;
        
        // 野蛮人：10 + 敏捷调整值 + 体质调整值
        if (this.character.class === 'barbarian' && this.character.level >= 1) {
            const conMod = this.calculateModifier(this.character.abilities.constitution.base + this.character.abilities.constitution.racial);
            unarmoredAC = 10 + dexMod + conMod;
        }
        // 武僧：10 + 敏捷调整值 + 感知调整值
        else if (this.character.class === 'monk' && this.character.level >= 1) {
            const wisMod = this.calculateModifier(this.character.abilities.wisdom.base + this.character.abilities.wisdom.racial);
            unarmoredAC = 10 + dexMod + wisMod;
        }
        
        return unarmoredAC;
    }

    // 获取无甲防御名称
    getUnarmoredDefenseName() {
        if (this.character.class === 'barbarian') return '无甲防御（野蛮人）';
        if (this.character.class === 'monk') return '无甲防御（武僧）';
        return '';
    }

    // 计算钢颚铁护AC（拳斗士）
    calculateIronChinAC() {
        if (this.character.class !== 'pugilist' || this.character.level < 1) return 0;
        
        const conMod = this.calculateModifier(this.character.abilities.constitution.base + this.character.abilities.constitution.racial);
        return 12 + conMod;
    }

    // 计算速度加成
    calculateSpeedBonus() {
        let bonus = 0;
        
        // 野蛮人快速移动：5级起，未穿戴重甲时速度+10尺
        if (this.character.class === 'barbarian' && this.character.level >= 5) {
            const armorType = this.character.armor ? ARMOR[this.character.armor]?.type : null;
            if (armorType !== '重甲') {
                bonus += 10;
            }
        }
        
        // 武僧无甲移动：2级起，未着甲且未持盾时速度增加
        if (this.character.class === 'monk' && this.character.level >= 2) {
            if (!this.character.armor && !this.character.shield) {
                if (this.character.level >= 18) bonus += 30;
                else if (this.character.level >= 14) bonus += 25;
                else if (this.character.level >= 10) bonus += 20;
                else if (this.character.level >= 6) bonus += 15;
                else bonus += 10;
            }
        }
        
        // 拳斗士闪避步法：3级起，未着甲且未持盾时，附赠动作可进行撤离或疾跑
        // 注：这不是速度加成，而是动作选项，已在特性中描述
        
        return bonus;
    }

    // 更新当前生命值
    updateCurrentHP(value) {
        const newHP = parseInt(value) || 0;
        // 限制当前生命值不超过最大生命值，不低于0
        this.character.currentHP = Math.max(0, Math.min(newHP, this.character.maxHP));
        
        // 更新显示
        const currentHPInput = document.getElementById('currentHP');
        if (currentHPInput) {
            currentHPInput.value = this.character.currentHP;
        }
        
        this.showNotification(`当前生命值已更新: ${this.character.currentHP}/${this.character.maxHP}`, 'success');
    }

    // 更新临时生命值
    updateTempHP(value) {
        const tempHP = parseInt(value) || 0;
        this.character.tempHP = Math.max(0, tempHP);
        this.showNotification(`临时生命值已更新: ${this.character.tempHP}`, 'success');
    }
}

// 初始化应用
let characterApp;

document.addEventListener('DOMContentLoaded', () => {
    characterApp = new CharacterApp();
});