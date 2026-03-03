// D&D 5E 数据定义 - 2024版规则扩展

// 种族数据 - 从 races_data.js 导入
const RACES = RACES_DATA;

// 子职业数据 - 详细描述和特性
const SUBCLASSES = {
    barbarian: {
        berserker: {
            name: '狂战士 (Path of the Berserker)',
            level: 3,
            description: '狂战士是最纯粹的战斗狂，在狂暴中获得额外的攻击能力。他们通过无尽的怒火来增强战斗力，进入一种不顾自身安危的战斗狂态。',
            features: [
                { name: '狂热 (Frenzy)', level: 3, description: '狂暴时，你可以选择进入狂热状态，每回合可用附赠动作进行近战武器攻击，但获得一级力竭。' },
                { name: '心智怒狂 (Mindless Rage)', level: 6, description: '狂暴时免疫魅惑和恐慌。' },
                { name: '威吓存在 (Intimidating Presence)', level: 10, description: '可尝试威吓一个生物，失败则陷入恐慌直至你的下一回合结束。' },
                { name: '反击 (Retaliation)', level: 14, description: '当5尺内的生物对你造成伤害时，可用反应进行近战武器攻击。' }
            ]
        },
        totem_warrior: {
            name: '图腾战士 (Path of the Totem Warrior)',
            level: 3,
            description: '图腾战士从自然之灵中获得力量，每个图腾都赋予不同的能力。他们与动物之灵建立精神联系，获得野兽的力量。',
            features: [
                { name: '兽魂行者 (Spirit Seeker)', level: 3, description: '获得野兽交谈和探知动植物法术。' },
                { name: '图腾兽 (Totem Spirit)', level: 3, description: '选择一种图腾兽（熊、鹰、狼、虎等），获得对应特性：熊-狂暴时除心灵外全伤害抗性；鹰-借机攻击劣势；狼-友军5尺内攻击生物时其首次攻击优势。' },
                { name: '兽魂行者特性', level: 6, description: '根据选择的图腾兽获得额外能力：熊-负重翻倍；鹰-黑暗视觉、侦察检定优势；狼-追踪检定优势。' },
                { name: '图腾之力 (Totemic Attunement)', level: 14, description: '获得更强大的图腾能力：熊-5尺内友军获得你的伤害抗性；鹰-飞行速度等于步行速度；狼-击倒生物后可进行额外攻击。' }
            ]
        },
        ancestral_guardian: {
            name: '先祖守卫 (Path of the Ancestral Guardian)',
            level: 3,
            description: '先祖守卫与祖先的灵魂建立联系，在战斗中获得先祖的指引和保护。',
            features: [
                { name: '先祖战士 (Ancestral Protectors)', level: 3, description: '狂暴时攻击的第一个目标对你的攻击具有劣势，且其攻击除你之外的生物时目标具有抗性。' },
                { name: '先祖护佑 (Spirit Shield)', level: 6, description: '可用反应减少10尺内友军受到的伤害（2d6），随等级提升。' },
                { name: '咨询灵魂 (Consult the Spirits)', level: 10, description: '短休时可进行仪式，获得占卜或死者交谈的效果。' },
                { name: '复仇先祖 (Vengeful Ancestors)', level: 14, description: '精神护盾现在可将减少的伤害反弹给攻击者。' }
            ]
        },
        storm_herald: {
            name: '风暴先驱 (Path of the Storm Herald)',
            level: 3,
            description: '风暴先驱与风暴之力相连，在狂暴时释放出元素能量。',
            features: [
                { name: '风暴光环 (Storm Aura)', level: 3, description: '狂暴时在10尺光环内产生效果：沙漠-火焰伤害；海洋-闪电伤害；苔原-寒冷伤害。' },
                { name: '风暴之魂 (Storm Soul)', level: 6, description: '获得环境抗性：沙漠-火焰抗性；海洋-闪电抗性；苔原-寒冷抗性。' },
                { name: '风暴之怒 (Shielding Storm)', level: 10, description: '光环内的友军也获得你的风暴之魂抗性。' },
                { name: '狂暴风暴 (Raging Storm)', level: 14, description: '风暴光环增强：沙漠-击退；海洋-反应击倒；苔原-冻结。' }
            ]
        },
        zealot: {
            name: '狂热者 (Path of the Zealot)',
            level: 3,
            description: '狂热者为神明而战，他们的狂暴被视为神圣狂怒。',
            features: [
                { name: '神圣狂怒 (Divine Fury)', level: 3, description: '狂暴时首次命中生物时额外造成1d6+一半野蛮人等级的光耀或黯蚀伤害。' },
                { name: '战士之魂 (Warrior of the Gods)', level: 3, description: '复活你所需的法术无需材料成分。' },
                { name: '狂热焦点 (Fanatical Focus)', level: 6, description: '狂暴时若豁免失败，可用反应重骰。' },
                { name: '狂怒之魂 (Zealous Presence)', level: 10, description: '可让10尺内生物在1分钟内攻击检定和豁免获得优势。' },
                { name: '狂怒超越死亡 (Rage beyond Death)', level: 14, description: '狂暴时若降至0HP但未被直接杀死，可继续战斗；狂暴结束时若仍有0HP则死亡。' }
            ]
        }
    },
    bard: {
        lore: {
            name: '逸闻学院 (College of Lore)',
            level: 3,
            description: '知识诗人是学者和故事讲述者，拥有广泛的知识和魔法能力。他们通过学习和研究来增强自己的力量，以智慧和机智著称。',
            features: [
                { name: '额外熟练 (Bonus Proficiencies)', level: 3, description: '获得3项自选技能熟练。' },
                { name: '尖刻言辞 (Cutting Words)', level: 3, description: '可用反应消耗吟游激励，使生物的攻击、伤害或能力检定减少激励骰结果。' },
                { name: '额外魔法奥秘 (Additional Magical Secrets)', level: 6, description: '6级时从任意职业法术列表中选择2个法术。' },
                { name: '尖刻真相 (Peerless Skill)', level: 14, description: '进行能力检定时可消耗吟游激励加入检定。' }
            ]
        },
        valor: {
            name: '勇气学院 (College of Valor)',
            level: 3,
            description: '勇气诗人是战场上的激励者，既会施法又能战斗。他们用音乐和勇气来鼓舞盟友，是前线的战士。',
            features: [
                { name: '中甲熟练 (Medium Armor Proficiency)', level: 3, description: '获得中甲和盾牌熟练。' },
                { name: '战斗激励 (Combat Inspiration)', level: 3, description: '吟游激励可用于：伤害检定、AC对抗攻击、进行武器攻击。' },
                { name: '额外攻击 (Extra Attack)', level: 6, description: '攻击动作时可进行两次攻击。' },
                { name: '战斗魔法 (Battle Magic)', level: 14, description: '进行武器攻击后可用附赠动作施放一个吟游诗人戏法。' }
            ]
        },
        swords: {
            name: '剑舞学院 (College of Swords)',
            level: 3,
            description: '剑舞诗人将剑术与舞蹈结合，在战斗中如同表演艺术。他们是优雅的决斗者和致命的表演者。',
            features: [
                { name: '剑舞技巧 (Blade Flourish)', level: 3, description: '攻击时可选择：防御之舞（+AC）、斩击之舞（+伤害）、机动之舞（移动）。' },
                { name: '战斗激励 (Fighting Style)', level: 3, description: '选择一种战斗风格。' },
                { name: '额外攻击 (Extra Attack)', level: 6, description: '攻击动作时可进行两次攻击。' },
                { name: '大师之舞 (Master\'s Flourish)', level: 14, description: '剑舞技巧现在消耗更少的激励骰。' }
            ]
        },
        whispers: {
            name: '低语学院 (College of Whispers)',
            level: 3,
            description: '低语诗人使用恐惧和秘密作为武器，能够操控他人的心灵。他们是间谍和操纵大师。',
            features: [
                { name: '心灵之刃 (Psychic Blades)', level: 3, description: '你可以消耗吟游激励，在武器攻击命中时额外造成2d6心灵伤害。' },
                { name: '恐惧之言 (Words of Terror)', level: 3, description: '你可以与生物对话1分钟，使其对你恐慌1小时或直到被攻击。' },
                { name: '模拟形态 (Mantle of Whispers)', level: 6, description: '你可以捕捉死去生物的阴影，伪装成该生物1小时或直到你以该形态造成伤害。' },
                { name: '暗影魔舞 (Shadow Lore)', level: 14, description: '你可以施展支配怪物法术，目标对你恐慌而非被魅惑。长休后恢复。' }
            ]
        },
        glamour: {
            name: '华丽学院 (College of Glamour)',
            level: 3,
            description: '华丽诗人掌握妖精荒野的魔法，能够用美貌和魅力来控制和鼓舞他人。',
            features: [
                { name: '妖精风采 (Mantle of Inspiration)', level: 3, description: '你可以消耗吟游激励，给予60尺内盟友临时生命值（5+魅力调整值+熟练加值），并使其立即使用反应动作移动而不引发借机攻击。' },
                { name: '迷魂术 (Enthralling Performance)', level: 3, description: '你可以进行1分钟表演，使观众被你魅惑1小时。' },
                { name: '妖精守护 (Mantle of Majesty)', level: 6, description: '你可以施展命令术而不消耗法术位，持续1分钟。期间你获得魅力检定优势。长休后恢复。' },
                { name: '妖精主宰 (Unbreakable Majesty)', level: 14, description: '你可以使攻击你的生物进行感知豁免，失败则无法攻击你直到你的下一回合结束。' }
            ]
        },
        eloquence: {
            name: '雄辩学院 (College of Eloquence)',
            level: 3,
            description: '雄辩诗人是言辞的大师，能够用逻辑和口才来影响他人。他们是演说家和辩论家。',
            features: [
                { name: '银舌 (Silver Tongue)', level: 3, description: '你进行欺瞒或游说检定时，可以将9或更低的骰子结果视为10。' },
                { name: '令人不安的话语 (Unsettling Words)', level: 3, description: '你可以消耗吟游激励，使60尺内生物的下一个豁免具有劣势。' },
                { name: '不倦口才 (Unfailing Inspiration)', level: 6, description: '受你吟游激励的生物使用它后，如果检定失败，可以保留该激励。' },
                { name: '普世感染 (Universal Speech)', level: 6, description: '你可以使60尺内生物理解你说的话，持续1小时。长休后恢复。' },
                { name: '致命妙语 (Infectious Inspiration)', level: 14, description: '当受你吟游激励的生物成功时，你可以给予另一个生物吟游激励。' }
            ]
        }
    },
    cleric: {
        life: {
            name: '生命领域 (Life Domain)',
            level: 1,
            description: '生命领域的牧师专注于治疗和保护，是团队的守护者。他们与生命和治愈的神圣力量相连。',
            features: [
                { name: '领域法术', level: 1, description: '获得命令术、鉴定术等法术。' },
                { name: '生命门徒 (Disciple of Life)', level: 1, description: '使用1环或更高环阶法术恢复生命值时，目标额外恢复2+法术环阶点生命值。' },
                { name: '引导神力：保护祝福 (Channel Divinity: Preserve Life)', level: 2, description: '可让5尺内生物恢复5×牧师等级生命值，不超过其生命值上限的一半。' },
                { name: '祝福医者 (Blessed Healer)', level: 6, description: '使用1环或更高环阶法术恢复他人生命值时，自己也恢复3+法术环阶点生命值。' },
                { name: '神圣打击 (Divine Strike)', level: 8, description: '武器攻击额外造成1d8光耀伤害（14级时2d8）。' },
                { name: '至高治疗 (Supreme Healing)', level: 17, description: '恢复生命值的法术取最大数值而非掷骰。' }
            ]
        },
        light: {
            name: '光明领域 (Light Domain)',
            level: 1,
            description: '光明领域的牧师掌控圣光，对抗黑暗和不死生物。他们是黑暗中的希望之光。',
            features: [
                { name: '领域法术', level: 1, description: '获得燃烧之手、妖火术等法术。' },
                { name: '警示之光 (Warding Flare)', level: 1, description: '反应使攻击你的生物攻击检定具有劣势。' },
                { name: '引导神力：驱散黑暗 (Channel Divinity: Radiance of the Dawn)', level: 2, description: '驱散魔法黑暗，对不死生物和妖精造成光耀伤害。' },
                { name: '强化辉光 (Improved Flare)', level: 6, description: '警示之光现在可用于保护30尺内的友军。' },
                { name: '神圣之箭 (Potent Spellcasting)', level: 8, description: '牧师戏法额外加上感知调整值的伤害。' },
                { name: 'Corona of Light', level: 17, description: '发出30尺明亮光芒，你和友军在该光芒内的法术豁免具有劣势。' }
            ]
        },
        war: {
            name: '战争领域 (War Domain)',
            level: 1,
            description: '战争领域的牧师是战斗的化身，在战场上引导神圣力量。',
            features: [
                { name: '战争领域法术 (War Domain Spells)', level: 1, description: '1级：神恩、护盾术；3级：灵体武器、魔法武器；5级：十字军斗篷、灵体卫士；7级：火焰护盾、信仰守卫；9级：焰击术、怪物定身术。' },
                { name: '额外熟练 (Bonus Proficiencies)', level: 1, description: '你熟练使用重甲和军用武器。' },
                { name: '战争牧师 (War Priest)', level: 1, description: '当你使用攻击动作时，可以使用附赠动作进行额外攻击。次数等于你的感知调整值（最少1次），长休后恢复。' },
                { name: '引导神力：引导打击 (Channel Divinity: Guided Strike)', level: 2, description: '你可以使用引导神力，使攻击获得+10加值。' },
                { name: '战争之神祝福 (War God\'s Blessing)', level: 6, description: '当30尺内生物被攻击时，你可以使用反应动作使其攻击获得+10加值。' },
                { name: '神圣之击 (Divine Strike)', level: 8, description: '你的武器攻击可以额外造成1d8同武器类型伤害（14级时2d8）。' },
                { name: '战神化身 (Avatar of Battle)', level: 17, description: '你对非魔法武器的钝击、穿刺和挥砍伤害具有抗性。' }
            ]
        },
        tempest: {
            name: '风暴领域 (Tempest Domain)',
            level: 1,
            description: '风暴领域的牧师掌控风暴和雷霆之力，是天空和海洋的主宰。',
            features: [
                { name: '风暴领域法术 (Tempest Domain Spells)', level: 1, description: '1级：云雾术、雷鸣波；3级：造风术、粉碎音波；5级：召雷术、雪雨暴；7级：操控水体、冰风暴；9级：湮灭波、焰击术（闪电伤害）。' },
                { name: '额外熟练 (Bonus Proficiencies)', level: 1, description: '你熟练使用军用武器和重甲。' },
                { name: '风暴之怒 (Wrath of the Storm)', level: 1, description: '当5尺内生物攻击你时，你可以使用反应动作造成2d8闪电或雷鸣伤害。次数等于你的感知调整值（最少1次），长休后恢复。' },
                { name: '引导神力：毁灭之雷 (Channel Divinity: Destructive Wrath)', level: 2, description: '你可以使用引导神力，使闪电或雷鸣伤害取最大骰子结果。' },
                { name: '风暴之击 (Thunderbolt Strike)', level: 6, description: '当你造成闪电伤害时，可以将目标推开10尺。' },
                { name: '神圣之击 (Divine Strike)', level: 8, description: '你的武器攻击可以额外造成1d8雷鸣伤害（14级时2d8）。' },
                { name: '风暴之躯 (Stormborn)', level: 17, description: '你获得等于步行速度的飞行速度。' }
            ]
        },
        trickery: {
            name: '诡术领域 (Trickery Domain)',
            level: 1,
            description: '诡术领域的牧师掌握欺骗和幻术，是诡计和潜行的大师。',
            features: [
                { name: '诡术领域法术 (Trickery Domain Spells)', level: 1, description: '1级：魅惑人类、镜像术；3级：镜像术、次级幻影；5级：伪装术、加速术；7级：变形术、秘法眼；9级：支配人类、篡改记忆。' },
                { name: '祝福圣徒 (Blessing of the Trickster)', level: 1, description: '你可以触摸盟友，使其隐匿检定具有优势，持续1小时或直到你再次使用该能力。' },
                { name: '引导神力：召唤复制体 (Channel Divinity: Invoke Duplicity)', level: 2, description: '你可以使用引导神力，创造一个30尺内的完美幻象，持续1分钟。你和幻象可以交换位置。' },
                { name: '引导神力：无形移动 (Channel Divinity: Cloak of Shadows)', level: 6, description: '你可以使用引导神力，在微光或黑暗中隐形直到你的下一回合结束。' },
                { name: '神圣之击 (Divine Strike)', level: 8, description: '你的武器攻击可以额外造成1d8毒素伤害（14级时2d8）。' },
                { name: '精通复制 (Improved Duplicity)', level: 17, description: '你可以同时创造最多四个复制体。' }
            ]
        },
        forge: {
            name: '锻造领域 (Forge Domain)',
            level: 1,
            description: '锻造领域的牧师掌握火焰和锻造之力，是工匠和创造者的守护者。',
            features: [
                { name: '锻造领域法术 (Forge Domain Spells)', level: 1, description: '1级：鉴定术、炽焰法球；3级：灼热金属、防护能量；5级：元素武器、防护能量；7级：制造、石肤术；9级：活化物体、造物术。' },
                { name: '额外熟练 (Bonus Proficiencies)', level: 1, description: '你熟练使用重甲和铁匠工具。' },
                { name: '锻造祝福 (Blessing of the Forge)', level: 1, description: '你可以触摸非魔法护甲或武器，使其获得+1加值，直到你的下一次长休。' },
                { name: '引导神力：工匠祝福 (Channel Divinity: Artisan\'s Blessing)', level: 2, description: '你可以使用引导神力，进行1小时仪式来创造简单物品。' },
                { name: '灵魂之锻 (Soul of the Forge)', level: 6, description: '你对火焰伤害具有抗性，穿着重甲时AC+1。' },
                { name: '神圣之击 (Divine Strike)', level: 8, description: '你的武器攻击可以额外造成1d8火焰伤害（14级时2d8）。' },
                { name: '至高工匠 (Saint of Forge and Fire)', level: 17, description: '你对非魔法火焰伤害免疫，穿着重甲时对非魔法武器的钝击、穿刺和挥砍伤害具有抗性。' }
            ]
        },
        grave: {
            name: '坟墓领域 (Grave Domain)',
            level: 1,
            description: '坟墓领域的牧师守护生死界限，确保死者安息并阻止不死生物的蔓延。',
            features: [
                { name: '坟墓领域法术 (Grave Domain Spells)', level: 1, description: '1级：灾祸术、虚假生命；3级：次级复原术、灵体武器；5级：活化死尸、回生术；7级：枯萎术、信仰守卫；9级：防活物护罩、死者复活。' },
                { name: '死亡之环 (Circle of Mortality)', level: 1, description: '你对0生命值生物施放治疗法术时，取最大骰子结果。' },
                { name: '死亡之眼 (Eyes of the Grave)', level: 1, description: '你可以感知60尺内不死生物，次数等于你的感知调整值（最少1次），长休后恢复。' },
                { name: '引导神力：死亡之径 (Channel Divinity: Path to the Grave)', level: 2, description: '你可以使用引导神力，使生物在下一回合受到的伤害翻倍。' },
                { name: '死亡之触 (Sentinel at Death\'s Door)', level: 6, description: '你可以使用反应动作取消致命一击，改为普通命中。' },
                { name: '神圣之击 (Divine Strike)', level: 8, description: '你的武器攻击可以额外造成1d8黯蚀伤害（14级时2d8）。' },
                { name: '死亡之主 (Keeper of Souls)', level: 17, description: '当60尺内大型或更小生物死亡时，你可以恢复等于其生命骰数量的生命值。' }
            ]
        }
    },
    paladin: {
        devotion: {
            name: '奉献之誓 (Oath of Devotion)',
            level: 3,
            description: '奉献之誓的圣武士是正义的化身，致力于消灭邪恶。他们以最高的道德标准要求自己，是善良和秩序的守护者。',
            features: [
                { name: '奉献之誓法术 (Oath Spells)', level: 3, description: '3级：防护善恶、圣化武器；5级：次级复原术、灵体武器；9级：信标、解除魔法；13级：信仰守卫、自由行动；17级：焰击术、通神术。', grantsSpells: { level1: [{ name: '防护善恶', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }, { name: '圣化武器', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }], level2: [{ name: '次级复原术', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }, { name: '灵体武器', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }], level3: [{ name: '信标', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }, { name: '解除魔法', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }], level4: [{ name: '信仰守卫', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }, { name: '自由行动', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }], level5: [{ name: '焰击术', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }, { name: '通神术', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }] } },
                { name: '引导神力：神圣光辉 (Channel Divinity: Sacred Weapon)', level: 3, description: '你可以使用动作，使武器发光并增加魅力调整值到攻击检定，持续1分钟。' },
                { name: '引导神力：驱散不洁 (Channel Divinity: Turn the Unholy)', level: 3, description: '你可以使用动作驱散30尺内不死生物或邪魔，如同牧师驱散不死生物。' },
                { name: '神圣光环 (Aura of Devotion)', level: 7, description: '你和10尺内盟友免疫魅惑。18级时范围增加到30尺。' },
                { name: '纯洁心灵 (Purity of Spirit)', level: 15, description: '你总是处于防护善恶法术效果下。' },
                { name: '神圣化身 (Holy Nimbus)', level: 20, description: '你可以使用动作化身为神圣形态1分钟。你发出30尺明亮光照，对不死生物和邪魔造成10点光耀伤害，你的武器攻击额外造成1d8光耀伤害。' }
            ]
        },
        vengeance: {
            name: '复仇之誓 (Oath of Vengeance)',
            level: 3,
            description: '复仇之誓的圣武士追寻对邪恶的报复，是无情的猎手。他们发誓要惩罚那些伤害无辜者，以牙还牙。',
            features: [
                { name: '复仇之誓法术 (Oath Spells)', level: 3, description: '3级：猎人印记、迷雾步；5级：人类定身术、迷雾步；9级：加速术、防护能量；13级：行动自如、石肤术；17级：怪物定身术、探知。', grantsSpells: { level1: [{ name: '猎人印记', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }, { name: '迷雾步', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }], level2: [{ name: '人类定身术', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }, { name: '迷雾步', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }], level3: [{ name: '加速术', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }, { name: '防护能量', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }], level4: [{ name: '行动自如', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }, { name: '石肤术', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }], level5: [{ name: '怪物定身术', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }, { name: '探知', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }] } },
                { name: '引导神力：憎恶仇敌 (Channel Divinity: Abjure Enemy)', level: 3, description: '你可以使用动作使生物恐惧，速度降为0，持续1分钟或直到其受到伤害。' },
                { name: '引导神力：复仇誓言 (Channel Divinity: Vow of Enmity)', level: 3, description: '你可以使用附赠动作对一个生物发誓复仇，10尺内攻击该生物时具有优势，持续1分钟。' },
                { name: '无情复仇者 (Relentless Avenger)', level: 7, description: '当你使用借机攻击命中时，可以移动至多一半速度作为该反应动作的一部分。' },
                { name: '灵魂之仇 (Soul of Vengeance)', level: 15, description: '当你对誓言目标使用反应动作攻击时，可以进行两次攻击。' },
                { name: '复仇天使 (Avenging Angel)', level: 20, description: '你可以化身为复仇天使1小时。你获得飞行速度60尺，30尺内敌对生物进行感知豁免，失败则恐惧1分钟或直到其受到伤害。' }
            ]
        },
        ancients: {
            name: '远古之誓 (Oath of the Ancients)',
            level: 3,
            description: '远古之誓的圣武士守护自然和生命的循环，是古老秩序的守护者。他们相信光明和生命的力量。',
            features: [
                { name: '远古之誓法术 (Oath Spells)', level: 3, description: '3级：治愈真言、荆棘之鞭；5级：荆棘丛生、治愈真言；9级：昼明术、植物滋长；13级：信仰守卫、冰风暴；17级：焰击术、死者复活。', grantsSpells: { level1: [{ name: '治愈真言', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }, { name: '荆棘之鞭', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }], level2: [{ name: '荆棘丛生', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }, { name: '治愈真言', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }], level3: [{ name: '昼明术', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }, { name: '植物滋长', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }], level4: [{ name: '信仰守卫', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }, { name: '冰风暴', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }], level5: [{ name: '焰击术', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }, { name: '死者复活', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }] } },
                { name: '引导神力：自然怒意 (Channel Divinity: Nature\'s Wrath)', level: 3, description: '你可以使用动作召唤藤蔓束缚10尺内生物，其必须进行力量或敏捷豁免，失败则束缚。' },
                { name: '引导神力：抗拒死亡 (Channel Divinity: Turn the Faithless)', level: 3, description: '你可以使用动作驱散30尺内精类生物或邪魔。' },
                { name: '远古之力 (Aura of Warding)', level: 7, description: '你和10尺内盟友对法术伤害具有抗性。18级时范围增加到30尺。' },
                { name: '不死之身 (Undying Sentinel)', level: 15, description: '当你降至0生命值但未直接死亡时，可以改为降至1点生命值。长休后恢复。' },
                { name: '远古守护者 (Elder Champion)', level: 20, description: '你可以化身为远古守护者1分钟。你获得再生10点生命值，你的法术冷却时间变为1附赠动作，敌对生物在10尺内对你攻击具有劣势。' }
            ]
        },
        conquest: {
            name: '征服之誓 (Oath of Conquest)',
            level: 3,
            description: '征服之誓的圣武士追求绝对的统治，用恐惧和力量来征服敌人。他们相信秩序必须通过力量来建立。',
            features: [
                { name: '征服之誓法术 (Oath Spells)', level: 3, description: '3级：护甲之环、灵体武器；5级：人类定身术、灵体武器；9级：加速术、恐惧术；13级：信仰守卫、石肤术；17级：怪物定身术、支配人类。', grantsSpells: { level1: [{ name: '护甲之环', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }, { name: '灵体武器', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }], level2: [{ name: '人类定身术', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }, { name: '灵体武器', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }], level3: [{ name: '加速术', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }, { name: '恐惧术', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }], level4: [{ name: '信仰守卫', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }, { name: '石肤术', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }], level5: [{ name: '怪物定身术', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }, { name: '支配人类', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }] } },
                { name: '引导神力：征服者之威 (Channel Divinity: Conquering Presence)', level: 3, description: '你可以使用动作使30尺内生物进行感知豁免，失败则恐惧1分钟。' },
                { name: '引导神力：制导打击 (Channel Divinity: Guided Strike)', level: 3, description: '你可以使用引导神力，使攻击获得+10加值。' },
                { name: '铁之意志 (Aura of Conquest)', level: 7, description: '被你恐惧的生物在10尺内速度降为0。18级时范围增加到30尺。' },
                { name: '无情征服者 (Invincible Conqueror)', level: 15, description: '当你降至0生命值时，可以改为降至1点。此外，你可以使用附赠动作进行额外攻击。' },
                { name: '征服化身 (Avatar of Conquest)', level: 20, description: '你可以化身为征服者1分钟。你获得飞行速度，30尺内被你恐惧的生物每回合开始时受到4d6心灵伤害。' }
            ]
        },
        redemption: {
            name: '救赎之誓 (Oath of Redemption)',
            level: 3,
            description: '救赎之誓的圣武士相信宽恕和救赎，用和平的方式化解冲突。他们认为暴力是最后的手段。',
            features: [
                { name: '救赎之誓法术 (Oath Spells)', level: 3, description: '3级：庇护术、睡眠术；5级：安定心神、人类定身术；9级：反制法术、催眠图纹；13级：信仰守卫、石肤术；17级：怪物定身术、力场墙。', grantsSpells: { level1: [{ name: '庇护术', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }, { name: '睡眠术', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }], level2: [{ name: '安定心神', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }, { name: '人类定身术', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }], level3: [{ name: '反制法术', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }, { name: '催眠图纹', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }], level4: [{ name: '信仰守卫', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }, { name: '石肤术', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }], level5: [{ name: '怪物定身术', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }, { name: '力场墙', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }] } },
                { name: '引导神力：化解冲突 (Channel Divinity: Emissary of Peace)', level: 3, description: '你可以使用动作获得+5游说检定加值，持续10分钟。' },
                { name: '引导神力：承受伤害 (Channel Divinity: Rebuke the Violent)', level: 3, description: '当30尺内生物被伤害时，你可以使用反应动作使其进行感知豁免，失败则受到等于其造成的伤害的光耀伤害。' },
                { name: '和平光环 (Aura of the Guardian)', level: 7, description: '当10尺内盟友被攻击时，你可以使用反应动作代替其承受伤害。18级时范围增加到30尺。' },
                { name: '保护之魂 (Protective Spirit)', level: 15, description: '当你使用光环保护盟友时，你恢复1d6+魅力调整值（最少1点）生命值。' },
                { name: '救赎化身 (Emissary of Redemption)', level: 20, description: '你可以化身为救赎者1分钟。你获得对所有伤害的抗性，当你受到伤害时，攻击者受到等于一半伤害的光耀伤害。' }
            ]
        },
        crown: {
            name: '王冠之誓 (Oath of the Crown)',
            level: 3,
            description: '王冠之誓的圣武士宣誓效忠于一个主权国家或统治者，是法律和秩序的坚定捍卫者。',
            features: [
                { name: '王冠之誓法术 (Oath Spells)', level: 3, description: '3级：命令术、强迫术；5级：人类定身术、灵体武器；9级：加速术、守护结界；13级：信仰守卫、石肤术；17级：怪物定身术、力场墙。', grantsSpells: { level1: [{ name: '命令术', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }, { name: '强迫术', levelRequired: 3, alwaysPrepared: true, ability: '魅力' }], level2: [{ name: '人类定身术', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }, { name: '灵体武器', levelRequired: 5, alwaysPrepared: true, ability: '魅力' }], level3: [{ name: '加速术', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }, { name: '守护结界', levelRequired: 9, alwaysPrepared: true, ability: '魅力' }], level4: [{ name: '信仰守卫', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }, { name: '石肤术', levelRequired: 13, alwaysPrepared: true, ability: '魅力' }], level5: [{ name: '怪物定身术', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }, { name: '力场墙', levelRequired: 17, alwaysPrepared: true, ability: '魅力' }] } },
                { name: '引导神力：挑战决斗 (Channel Divinity: Champion Challenge)', level: 3, description: '你可以使用动作挑战30尺内生物，其速度无法离开你超过30尺。' },
                { name: '引导神力：转身御卫 (Channel Divinity: Turn the Tide)', level: 3, description: '你可以使用动作使30尺内盟友恢复1d6+魅力调整值（最少1点）生命值。' },
                { name: '神圣忠诚 (Divine Allegiance)', level: 7, description: '当5尺内盟友被攻击时，你可以使用反应动作代替其承受伤害。' },
                { name: '坚定不移 (Unyielding Spirit)', level: 15, description: '你进行对抗麻痹或震慑的豁免时具有优势。' },
                { name: '至高卫士 (Exalted Champion)', level: 20, description: '你可以化身为至高卫士1小时。你对非魔法武器的钝击、穿刺和挥砍伤害具有抗性，你和10尺内盟友进行感知豁免时具有优势。' }
            ]
        }
    },
    fighter: {
        champion: {
            name: '勇士 (Champion)',
            level: 3,
            description: '勇士是专注于战斗技巧的战士，通过不断训练来完善自己的战斗能力。他们追求物理上的完美，是最纯粹的战士。',
            features: [
                { name: '强袭 (Improved Critical)', level: 3, description: '暴击阈值降至19-20。' },
                { name: 'Remarkable Athlete', level: 7, description: '无熟练的力量、敏捷或体质检定获得半数熟练加值；跳跃距离增加。' },
                { name: '额外战斗风格 (Additional Fighting Style)', level: 10, description: '选择第二种战斗风格。' },
                { name: 'Superior Critical', level: 15, description: '暴击阈值降至18-20。' },
                { name: '求生者 (Survivor)', level: 18, description: '每回合开始时若生命值低于一半，恢复5+体质调整值生命值。' }
            ]
        },
        battle_master: {
            name: '战斗大师 (Battle Master)',
            level: 3,
            description: '战斗大师精通各种战斗技巧，通过战术骰来施展特殊攻击。他们是战场上的战术家。',
            features: [
                { name: '卓越骰 (Superiority Dice)', level: 3, description: '短休或长休后恢复，用于战斗策略。初始4d8。' },
                { name: '战斗策略 (Combat Maneuvers)', level: 3, description: '选择3种战斗策略：精准攻击、缴械攻击、诡诈攻击等。' },
                { name: '知己知彼 (Know Your Enemy)', level: 7, description: '可了解生物的部分属性。' },
                { name: '卓越骰提升', level: 10, description: '增加至6个，再学2种策略。' },
                { name: '卓越骰精通', level: 18, description: '增加至8个，骰子变为d10。' }
            ]
        },
        eldritch_knight: {
            name: '奥法骑士 (Eldritch Knight)',
            level: 3,
            description: '奥法骑士将武术与奥术魔法结合，是能够施法的战士。',
            features: [
                { name: '法术施放 (Spellcasting)', level: 3, description: '你成为1/3施法者，使用法师法术列表。你获得2个戏法和3个1环法术位。' },
                { name: '武器绑定 (Weapon Bond)', level: 3, description: '你可以与武器建立魔法联系，无法被缴械，可以召唤武器。' },
                { name: '战争魔法 (War Magic)', level: 7, description: '当你使用动作施放戏法时，可以使用附赠动作进行武器攻击。' },
                { name: '奥法打击 (Eldritch Strike)', level: 10, description: '当你用武器攻击命中时，该生物对你下一个法术的豁免具有劣势，直到你的下一回合结束。' },
                { name: '战争魔法改进 (Improved War Magic)', level: 18, description: '当你使用动作施放法术时，可以使用附赠动作进行武器攻击。' }
            ]
        },
        cavalier: {
            name: '骑兵 (Cavalier)',
            level: 3,
            description: '骑兵是骑术大师和保护者，擅长守护盟友和控制战场。',
            features: [
                { name: '额外熟练 (Bonus Proficiency)', level: 3, description: '你获得一种技能熟练（从驯兽、历史、洞悉、表演、游说中选择）或学习一门语言。' },
                { name: '出生入死 (Born to the Saddle)', level: 3, description: '你在骑乘时进行豁免具有优势，骑乘时从坐骑上跌落只受一半伤害，可以用反应动作减少坐骑受到的伤害。' },
                { name: '坚定不移 (Unwavering Mark)', level: 3, description: '当你用近战武器攻击命中时，可以标记目标。标记目标对你以外的生物攻击具有劣势，且如果标记目标伤害你的盟友，你可以使用反应动作进行武器攻击。' },
                { name: '守护之魂 (Warding Maneuver)', level: 7, description: '当5尺内盟友被攻击时，你可以使用反应动作增加1d8+熟练加值到其AC。短休或长休后恢复，次数等于你的体质调整值（最少1次）。' },
                { name: '坚守阵地 (Hold the Line)', level: 10, description: '当生物进入你的触及范围时，你可以使用反应动作进行借机攻击，命中则其速度降为0直到本回合结束。' },
                { name: '无畏 (Ferocious Charger)', level: 15, description: '当你骑乘并向生物直线移动至少10尺后攻击，目标必须进行力量豁免（DC=8+熟练加值+力量或敏捷调整值），失败则倒地。' },
                { name: '警戒者 (Vigilant Defender)', level: 18, description: '你可以在每个生物的回合中使用一个特殊反应动作（不消耗正常反应动作）。' }
            ]
        },
        samurai: {
            name: '武士 (Samurai)',
            level: 3,
            description: '武士是纪律严明的战士，通过专注和决心来增强战斗力。',
            features: [
                { name: '额外熟练 (Bonus Proficiency)', level: 3, description: '你获得历史、洞悉或游说中一项技能的熟练，或学习一门语言。' },
                { name: '战斗精神 (Fighting Spirit)', level: 3, description: '你可以使用附赠动作获得战斗精神，持续1分钟。期间你所有攻击具有优势，且每次攻击额外造成5点伤害。你获得5临时生命值。长休后恢复，次数等于你的感知调整值（最少3次）。' },
                { name: '优雅决斗者 (Elegant Courtier)', level: 7, description: '你进行感知（洞悉）检定时具有优势。此外，如果你进行魅力（游说）检定，可以将感知调整值加到检定上。' },
                { name: '不屈 (Tireless Spirit)', level: 10, description: '当你使用完所有战斗精神次数后，你可以进行一次短休来恢复一次使用次数。' },
                { name: '快速打击 (Rapid Strike)', level: 15, description: '当你对生物攻击具有优势但未使用优势时，你可以放弃优势进行两次攻击。' },
                { name: '战前准备 (Strength Before Death)', level: 18, description: '当你降至0生命值但未直接死亡时，你可以使用反应动作立即进行额外回合。' }
            ]
        },
        echo_knight: {
            name: '回音骑士 (Echo Knight)',
            level: 3,
            description: '回音骑士能够创造魔法回音来协助战斗，是时空魔法的战士。',
            features: [
                { name: '显现回音 (Manifest Echo)', level: 3, description: '你可以使用附赠动作在15尺内未占据空间创造魔法回音。你可以通过回音看和听，可以与回音交换位置，可以通过回音进行攻击。' },
                { name: '释放化身 (Unleash Incarnation)', level: 3, description: '当你使用攻击动作时，可以通过回音进行额外攻击。长休后恢复，次数等于你的体质调整值（最少1次）。' },
                { name: '回音化身 (Echo Avatar)', level: 7, description: '你可以暂时将你的感官转移到回音，持续10分钟。' },
                { name: '阴影殉道者 (Shadow Martyr)', level: 10, description: '你可以使用反应动作让回音拦截攻击，攻击命中回音（AC=14+熟练加值）而非原目标。' },
                { name: '回收潜能 (Reclaim Potential)', level: 15, description: '当回音被摧毁时，你可以恢复1d6+体质调整值生命值。' },
                { name: '军团 (Legion)', level: 18, description: '你可以同时创造两个回音。' }
            ]
        }
    },
    rogue: {
        thief: {
            name: '盗贼 (Thief)',
            level: 3,
            description: '盗贼精通潜行、开锁和偷窃，是城市街道的大师。',
            features: [
                { name: '快手 (Fast Hands)', level: 3, description: '狡猾行动可进行巧手检定、使用盗贼工具或使用物品。' },
                { name: '飞檐走壁 (Second-Story Work)', level: 3, description: '攀爬不消耗额外移动力，跳跃不消耗额外移动力。' },
                { name: '潜行大师 (Supreme Sneak)', level: 9, description: '速度降至一半时隐匿检定优势。' },
                { name: '使用魔法装置 (Use Magic Device)', level: 13, description: '忽略职业、种族、等级限制使用魔法物品。' },
                { name: '反射闪避 (Reflexes)', level: 17, description: '获得第二个反应，每回合只能使用一次。' }
            ]
        },
        assassin: {
            name: '刺客 (Assassin)',
            level: 3,
            description: '刺客精通致命一击和伪装，是致命的杀手。',
            features: [
                { name: '精通毒素 (Bonus Proficiencies)', level: 3, description: '获得伪装工具、毒药工具熟练。' },
                { name: '暗杀 (Assassinate)', level: 3, description: '先攻检定优势，受惊生物对你的攻击自动暴击且暴击骰翻倍。' },
                { name: '渗透专精 (Infiltration Expertise)', level: 9, description: '可伪造身份。' },
                { name: '冒名顶替 (Impostor)', level: 13, description: '模仿生物声音和笔迹，欺瞒检定优势。' },
                { name: '死亡一击 (Death Strike)', level: 17, description: '偷袭攻击受惊生物时，其进行体质豁免，失败则伤害翻倍。' }
            ]
        }
    },
    monk: {
        open_hand: {
            name: '散打宗 (Way of the Open Hand)',
            level: 3,
            description: '散打宗武僧精通徒手格斗技巧，能够用气的力量来操控敌人的身体。他们是武术的大师。',
            features: [
                { name: '开掌技法 (Open Hand Technique)', level: 3, description: '疾风连击命中时可选择效果：击倒、推开、无法反应。' },
                { name: '震颤掌 (Quivering Palm)', level: 6, description: '攻击命中生物时可使其进行体质豁免，失败则震慑。' },
                { name: '毒息术 (Toxic Breath)', level: 11, description: '可喷出毒素，生物进行体质豁免，失败则中毒。' },
                { name: '奇穴震颤 (Quivering Palm)', level: 17, description: '可让生物直接降至0HP。' }
            ]
        },
        kensei: {
            name: '剑圣宗 (Way of the Kensei)',
            level: 3,
            description: '剑圣宗武僧将武器视为身体的延伸，精通各种武器的使用。他们是武器大师。',
            features: [
                { name: '剑圣之路 (Path of the Kensei)', level: 3, description: '选择2种武器作为剑圣武器，获得熟练。' },
                { name: '灵动招架 (Agile Parry)', level: 3, description: '剑圣武器攻击后徒手攻击可+2AC。' },
                { name: '剑圣射击 (Kensei\'s Shot)', level: 3, description: '附赠动作让远程剑圣武器伤害+1d4。' },
                { name: '人剑合一 (One with the Blade)', level: 6, description: '剑圣武器视为魔法武器。' },
                { name: '磨砺锋刃 (Sharpen the Blade)', level: 11, description: '花费1-3气让武器攻击和伤害+1至+3。' },
                { name: '精准无误 (Unerring Accuracy)', level: 17, description: '未命中时可重骰。' }
            ]
        },
        shadow: {
            name: '暗影宗 (Way of Shadow)',
            level: 3,
            description: '暗影宗武僧掌握暗影魔法，能够在阴影中移动和攻击。他们是阴影中的致命刺客。',
            features: [
                { name: '暗影技艺 (Shadow Arts)', level: 3, description: '花费2气施展黑暗术、黑暗视觉、行踪无迹或沉默术。' },
                { name: '暗影传送 (Shadow Step)', level: 3, description: '附赠动作在微光或黑暗间传送60尺。' },
                { name: '暗影突袭 (Shadow Strike)', level: 6, description: '附赠动作传送到微光或黑暗中，下一回合首次攻击具有优势。' },
                { name: '幻影打击 (Phantom Strike)', level: 11, description: '暗影步后攻击命中可让目标进行感知豁免，失败则震慑。' },
                { name: '精通暗影 (Improved Shadow)', level: 17, description: '黑暗视觉无视魔法黑暗，微光中隐匿检定优势。' }
            ]
        },
        four_elements: {
            name: '四象宗 (Way of the Four Elements)',
            level: 3,
            description: '四象宗武僧掌握元素之力，能够操纵火、水、土、风四种元素。',
            features: [
                { name: '元素弟子 (Disciple of the Elements)', level: 3, description: '学习元素法术，花费气施展：元素之拳、烈焰之拳、水流之鞭等。' },
                { name: '元素法术 (Elemental Disciplines)', level: 3, description: '选择2种元素法术。' },
                { name: '额外元素法术', level: 6, description: '再选择1种元素法术。' },
                { name: '额外元素法术', level: 11, description: '再选择1种元素法术。' },
                { name: '额外元素法术', level: 17, description: '再选择1种元素法术。' }
            ]
        },
        drunken_master: {
            name: '醉拳宗 (Way of the Drunken Master)',
            level: 3,
            description: '醉拳宗武僧模仿醉酒者的动作，以不可预测的方式战斗。他们的动作看似混乱但实则精妙。',
            features: [
                { name: '醉汉步法 (Drunken Technique)', level: 3, description: '你在使用疾风连击时可以移动而不引发借机攻击' },
                { name: '醉汉运气 (Tipsy Sway)', level: 3, description: '你可以使用反应动作来减少受到的伤害' },
                { name: '醉汉反击 (Drunkard\'s Luck)', level: 6, description: '你可以在被攻击时进行反击' },
                { name: '醉汉闪避 (Intoxicated Frenzy)', level: 11, description: '你可以使用反应动作来完全躲避攻击' },
                { name: '醉汉大师 (Master of Drunken Style)', level: 17, description: '你可以同时使用多个醉汉技巧' }
            ]
        },
        sun_soul: {
            name: '日魂宗 (Way of the Sun Soul)',
            level: 3,
            description: '日魂宗武僧掌握太阳之力，能够发射光束和火焰。他们是光明的战士。',
            features: [
                { name: '辐射日 (Radiant Sun Bolt)', level: 3, description: '你可以发射光束进行远程攻击' },
                { name: '燃烧之手 (Searing Arc Strike)', level: 3, description: '你可以使用动作发射火焰' },
                { name: '灼热之光 (Searing Sunburst)', level: 6, description: '你的攻击可以造成额外火焰伤害' },
                { name: '太阳之魂 (Sun Soul)', level: 11, description: '你可以化身为太阳形态' },
                { name: '太阳大师 (Sun Shield)', level: 17, description: '你可以发射强大的太阳射线' }
            ]
        }
    },
    druid: {
        land: {
            name: '大地结社 (Circle of the Land)',
            level: 2,
            description: '大地结社的德鲁伊与自然之地建立联系，从特定的地形中获得力量。',
            features: [
                { name: '自然步伐 (Natural Recovery)', level: 2, description: '短休时可恢复最多一半德鲁伊等级的法术位。' },
                { name: '自然法术 (Circle Spells)', level: 2, description: '根据地形类型（极地、海岸、沙漠等）获得额外法术。' },
                { name: '大地行者 (Land\'s Stride)', level: 6, description: '非魔法困难地形不影响移动，对魔法植物豁免优势。' },
                { name: '自然之盾 (Nature\'s Ward)', level: 10, description: '免疫毒素和疾病，不衰老。' },
                { name: '自然庇护 (Nature\'s Sanctuary)', level: 14, description: '元素和精类生物攻击你时可能放弃攻击。' }
            ]
        },
        moon: {
            name: '月亮结社 (Circle of the Moon)',
            level: 2,
            description: '月亮结社的德鲁伊精通变形术，能够变成更强大的野兽形态。',
            features: [
                { name: '战斗形态 (Combat Wild Shape)', level: 2, description: '荒野形态变为附赠动作，变形时可恢复生命值。' },
                { name: '元素形态 (Elemental Wild Shape)', level: 2, description: '可变形为CR 1的野兽。' },
                { name: '元素形态 (Elemental Wild Shape)', level: 6, description: '可变形为元素生物。' },
                { name: '元素精通 (Elemental Mastery)', level: 10, description: '荒野形态下可施展法术。' },
                { name: '千面万相 (Thousand Faces)', level: 14, description: '可施展变身术且不消耗法术位。' }
            ]
        },
        dreams: {
            name: '梦境结社',
            level: 2,
            description: '梦境结社的德鲁伊掌握梦境和恢复之力，能够治愈盟友的身心。',
            features: [
                { name: '治愈之光', level: 2, description: '你可以使用气池来治愈盟友' },
                { name: '梦境行者', level: 6, description: '你可以在短休时与盟友进行心灵交流' },
                { name: '隐匿之雾', level: 10, description: '你可以召唤迷雾来隐藏盟友' },
                { name: '梦境主宰', level: 14, description: '你可以进入他人的梦境' }
            ]
        },
        shepherd: {
            name: '牧者结社',
            level: 2,
            description: '牧者结社的德鲁伊与精魂建立联系，能够召唤精魂来保护盟友。',
            features: [
                { name: '精魂图腾', level: 2, description: '你可以召唤精魂图腾来增强盟友' },
                { name: '精魂守护者', level: 6, description: '你可以召唤精魂来保护盟友' },
                { name: '精魂行者', level: 10, description: '你可以与精魂交流并获得信息' },
                { name: '精魂主宰', level: 14, description: '你可以召唤强大的精魂来协助战斗' }
            ]
        }
    },
    sorcerer: {
        draconic: {
            name: '龙族血脉 (Draconic Bloodline)',
            level: 1,
            description: '龙族血统的术士拥有龙族祖先的力量，获得龙鳞护甲和元素之力。',
            features: [
                { name: '龙族祖先 (Draconic Ancestry)', level: 1, description: '选择龙族祖先，获得对应伤害类型的吐息武器和语言。' },
                { name: '龙族体魄 (Draconic Resilience)', level: 1, description: '生命值每级+1，未着甲时AC = 13 + 敏捷调整值。' },
                { name: '元素亲和 (Elemental Affinity)', level: 6, description: '对应伤害类型的法术伤害+魅力调整值，花费1术法点获得该伤害抗性。' },
                { name: '龙翼 (Dragon Wings)', level: 14, description: 'bonus action长出龙翼，飞行速度等于步行速度。' },
                { name: '龙族真身 (Draconic Presence)', level: 18, description: '花费5术法点创造30尺灵光，生物进行感知豁免，失败则陷入恐慌或魅惑。' }
            ]
        },
        wild_magic: {
            name: '狂野魔法 (Wild Magic)',
            level: 1,
            description: '狂野魔法的术士掌握混乱的魔法力量，施法时可能触发随机效果。',
            features: [
                { name: '狂野魔法浪涌 (Wild Magic Surge)', level: 1, description: 'DM可让你在施法后掷d20，1则触发狂野魔法浪涌表。' },
                { name: '魔法潮汐 (Tides of Chaos)', level: 1, description: '长休后恢复，可进行一次攻击、检定或豁免的优势，触发浪涌后恢复。' },
                { name: '扭曲命运 (Bend Luck)', level: 6, description: '花费2术法点让生物的掷骰+1d4或-1d4。' },
                { name: '掌控混沌 (Controlled Chaos)', level: 14, description: '浪涌表掷两次，选择结果。' },
                { name: '法术轰炸 (Spell Bombardment)', level: 18, description: '伤害骰掷出最高数值时可额外掷一个伤害骰。' }
            ]
        },
        divine_soul: {
            name: '神圣灵魂',
            level: 1,
            description: '神圣灵魂的术士拥有神圣的血统，能够施展神圣魔法。',
            features: [
                { name: '神圣魔法', level: 1, description: '你可以从牧师法术列表中学习法术' },
                { name: '治愈之手', level: 1, description: '你可以使用术法点来治愈盟友' },
                { name: '神圣之翼', level: 14, description: '你可以长出翅膀并获得飞行速度' },
                { name: '神圣化身', level: 18, description: '你可以化身为神圣形态' }
            ]
        },
        aberrant_mind: {
            name: '异怪心智',
            level: 1,
            description: '异怪心智的术士受到异怪影响，拥有心灵感应和心灵控制能力。',
            features: [
                { name: '心灵感应', level: 1, description: '你可以与30尺内的生物进行心灵交流' },
                { name: '异怪魔法', level: 1, description: '你可以从特定法术列表中学习法术' },
                { name: '心灵防御', level: 6, description: '你对心灵伤害有抗性' },
                { name: '心灵传送', level: 14, description: '你可以使用心灵力量进行传送' },
                { name: '异怪化身', level: 18, description: '你可以化身为异怪形态' }
            ]
        },
        clockwork_soul: {
            name: '发条灵魂',
            level: 1,
            description: '发条灵魂的术士与秩序位面相连，能够操控命运和概率。',
            features: [
                { name: '发条魔法', level: 1, description: '你可以从特定法术列表中学习法术' },
                { name: '秩序恢复', level: 1, description: '你可以使用术法点来恢复生命值' },
                { name: '命运操控', level: 6, description: '你可以改变骰子结果' },
                { name: '时间操控', level: 14, description: '你可以减缓时间流速' },
                { name: '秩序化身', level: 18, description: '你可以化身为秩序形态' }
            ]
        }
    },
    warlock: {
        fiend: {
            name: '邪魔 (The Fiend)',
            level: 1,
            description: '邪魔宗主的邪术师与下层位面的邪恶存在（如魔鬼、恶魔、尤格罗斯魔）签订契约，获得毁灭性的力量和火焰抗性。',
            features: [
                { name: '黑暗赐福 (Dark One\'s Blessing)', level: 1, description: '当你将敌对生物降至0HP时，获得等于邪术师等级+魅力调整值的临时生命值。' },
                { name: '黑暗之运 (Dark One\'s Own Luck)', level: 6, description: '当你进行攻击检定、能力检定或豁免检定时，可加上d10。短休或长休后恢复。' },
                { name: '邪魔韧性 (Fiendish Resilience)', level: 10, description: '短休或长休后，可选择一种伤害类型获得抗性，持续至你选择其他类型或完成长休。' },
                { name: '抛入地狱 (Hurl Through Hell)', level: 14, description: '当你用攻击或法术命中生物时，可让其进行魅力豁免，失败则传送至下层位面受到10d10火焰伤害，长休后恢复。' }
            ]
        },
        great_old_one: {
            name: '旧日支配者 (The Great Old One)',
            level: 1,
            description: '旧日支配者的邪术师与远古的恐怖存在建立联系，获得心灵感应和疯狂的力量，对心灵伤害有抗性。',
            features: [
                { name: '觉醒心灵 (Awakened Mind)', level: 1, description: '可与30尺内你能看见的生物进行心灵感应交流，无需共同语言。' },
                { name: '熵光守护 (Entropic Ward)', level: 6, description: '被攻击命中时可用反应让攻击者进行感知豁免，失败则攻击具有劣势。若攻击未命中，你下次攻击该生物具有优势。短休或长休后恢复。' },
                { name: '思维护盾 (Thought Shield)', level: 10, description: '你和与你建立心灵感应的生物获得心灵伤害抗性。对你造成心灵伤害的生物受到等量伤害。' },
                { name: '创造仆从 (Create Thrall)', level: 14, description: '可魅惑一个失能的类人生物，直至被解除、你再次使用该能力、你死亡或你位于该生物1里之外。' }
            ]
        },
        archfey: {
            name: '至高妖精 (The Archfey)',
            level: 1,
            description: '至高妖精的邪术师与妖精荒野的领主（如泰坦妮亚、奥伯龙、空暗女王）签订契约，获得幻术和传送能力。',
            features: [
                { name: '妖精风采 (Fey Presence)', level: 1, description: '动作让10尺立方区域内的生物进行智慧豁免，失败则被魅惑或恐惧（你选择）直至你的下一回合结束。短休或长休后恢复。' },
                { name: '迷雾逃逸 (Misty Escape)', level: 6, description: '被攻击命中时可用反应变为隐形并传送至多60尺。短休或长休后恢复。' },
                { name: '黑暗幻象 (Beguiling Defenses)', level: 10, description: '免疫魅惑，尝试魅惑你的生物反被魅惑1分钟（可进行豁免）。' },
                { name: '妖精主宰 (Dark Delirium)', level: 14, description: '让60尺内生物进行智慧豁免，失败则被囚禁于幻境中1分钟或直至你失能或死亡。长休后恢复。' }
            ]
        },
        hexblade: {
            name: '咒剑 (The Hexblade)',
            level: 1,
            description: '咒剑宗主的邪术师与暗影位面的神秘存在（如鸦后）签订契约，精通武器和诅咒，使用魅力进行武器攻击。',
            features: [
                { name: '咒剑诅咒 (Hexblade\'s Curse)', level: 1, description: ' bonus动作诅咒30尺内生物，持续1分钟：对其伤害加熟练加值，19或20时暴击，死亡时恢复生命值。短休或长休后恢复。' },
                { name: '咒剑契约 (Hex Warrior)', level: 1, description: '获得中甲、盾牌和军用武器熟练。短休后触摸武器，可用魅力（代替力量或敏捷）进行攻击和伤害检定。' },
                { name: '暗影护甲 (Accursed Specter)', level: 6, description: '咒剑诅咒杀死类人生物时，可让其灵魂为你服务直至长休。' },
                { name: '诅咒之魂 (Armor of Hexes)', level: 10, description: '被咒剑诅咒的生物攻击你时，可用反应掷d6，4-6则攻击未命中。' },
                { name: '咒剑大师 (Master of Hexes)', level: 14, description: '咒剑诅咒的生物死亡时，可将诅咒转移到30尺内另一生物上（无需动作）。' }
            ]
        },
        celestial: {
            name: '天界 (The Celestial)',
            level: 1,
            description: '天界宗主的邪术师与上层位面的善良存在（如独角兽、炽天神侍）建立联系，获得治疗和光明魔法。',
            features: [
                { name: '治疗之光 (Healing Light)', level: 1, description: '拥有等于1+邪术师等级的治疗之光池。60尺内生物恢复生命值时，可花费骰子（d6）加入治疗量。长休后恢复所有骰子。' },
                { name: '天界抗性 (Radiant Soul)', level: 6, description: '获得光耀和黯蚀伤害抗性。施展造成光耀或火焰伤害的法术时，可加上魅力调整值伤害。' },
                { name: '天界祝福 (Celestial Resilience)', level: 10, description: '短休或长休后获得等于邪术师等级+魅力调整值的临时生命值。也可让最多5个可见生物获得同样效果。' },
                { name: '炽天之光 (Searing Vengeance)', level: 14, description: '死亡豁免失败时可改为成功并恢复一半生命值，起身时对10尺内生物造成2d8+魅力调整值光耀伤害并失明。长休后恢复。' }
            ]
        }
    },
    ranger: {
        hunter: {
            name: '猎人 (Hunter)',
            level: 3,
            description: '猎人是追踪和猎杀特定敌人的专家，精通各种狩猎技巧。',
            features: [
                { name: '猎手战术 (Hunter\'s Prey)', level: 3, description: '选择：巨像杀手（大型以上生物攻击你时可用反应减少伤害）、巨人杀手（大型以上生物攻击你时可用反应进行攻击）、多重攻击防御（被多目标攻击时AC+4）。' },
                { name: '防御战术 (Defensive Tactics)', level: 7, description: '选择：逃离风暴（范围伤害豁免优势）、多重攻击防御（被多目标攻击时AC+4）、钢铁意志（感知豁免熟练）。' },
                { name: '多重攻击 (Multiattack)', level: 11, description: '选择：箭雨（10尺内两生物攻击）、剑刃风暴（5尺内两生物近战攻击）。' },
                { name: '上级防御 (Superior Hunter\'s Defense)', level: 15, description: '选择：反射闪避、对抗即死、反击。' }
            ]
        },
        beast_master: {
            name: '驯兽师 (Beast Master)',
            level: 3,
            description: '野兽大师与动物伙伴建立深厚的联系，共同战斗。',
            features: [
                { name: '游侠伴侣 (Ranger\'s Companion)', level: 3, description: '获得一个CR 1/4或更低的野兽作为伴侣，其先攻与你相同，服从你的命令。' },
                { name: '协同攻击 (Coordinated Attack)', level: 5, description: '你进行攻击动作时，伴侣可用反应进行攻击。' },
                { name: '风暴之怒 (Storm of Claws and Fangs)', level: 11, description: '伴侣可进行两次攻击。' },
                { name: 'Superior Beast\'s Defense', level: 15, description: '伴侣对所有伤害具有抗性。' }
            ]
        },
        gloom_stalker: {
            name: '幽暗潜行者',
            level: 3,
            description: '幽暗潜行者在黑暗中狩猎，是阴影中的致命猎手。',
            features: [
                { name: '恐惧伏击', level: 3, description: '你在先攻检定上具有优势，第一回合可以额外攻击' },
                { name: '恐惧之眼', level: 3, description: '你在黑暗视觉范围内可以看清一切' },
                { name: '钢铁意志', level: 7, description: '你进行对抗恐慌的豁免时具有优势' },
                { name: '潜藏攻击', level: 11, description: '你可以从隐匿状态发动致命攻击' },
                { name: '暗影闪避', level: 15, description: '你可以在被攻击时传送' }
            ]
        },
        swarmkeeper: {
            name: '虫群守护者',
            level: 3,
            description: '虫群守护者与超自然虫群建立联系，能够操控虫群来攻击和防御。',
            features: [
                { name: '聚集虫群', level: 3, description: '你可以召唤虫群来协助战斗' },
                { name: '虫群移动', level: 3, description: '你可以使用虫群来移动' },
                { name: '虫群之力', level: 7, description: '你的虫群可以造成更多伤害' },
                { name: '虫群之盾', level: 11, description: '你的虫群可以保护你' },
                { name: '虫群主宰', level: 15, description: '你可以控制强大的虫群' }
            ]
        }
    },
    wizard: {
        abjuration: {
            name: '防护学派 (School of Abjuration)',
            level: 2,
            description: '防护学派的法师专注于防御魔法和反魔法。',
            features: [
                { name: '防护学者 (Abjuration Savant)', level: 2, description: '抄写防护法术时间和金钱减半。' },
                { name: '奥术守御 (Arcane Ward)', level: 2, description: '施展防护法术时创造护盾，吸收伤害（2×法术环阶+智力调整值），长休后恢复。' },
                { name: '投射护罩 (Projected Ward)', level: 6, description: '可用反应让30尺内友军获得奥术守御保护。' },
                { name: '精通防护 (Improved Abjuration)', level: 10, description: '施展防护法术时熟练加值加入检定。' },
                { name: '法术抗性 (Spell Resistance)', level: 14, description: '对抗法术时豁免优势，法术伤害抗性。' }
            ]
        },
        evocation: {
            name: '塑能学派 (School of Evocation)',
            level: 2,
            description: '塑能学派的法师掌控元素能量，能够操纵火焰、闪电和冰霜。',
            features: [
                { name: '塑能学者 (Evocation Savant)', level: 2, description: '抄写塑能法术时间和金钱减半。' },
                { name: '法术塑形 (Sculpt Spells)', level: 2, description: '塑能法术可选择等于1+法术环阶数量的生物自动成功豁免且不受伤害。' },
                { name: '强效塑能 (Potent Cantrip)', level: 6, description: '戏法豁免成功仍受一半伤害。' },
                { name: 'Empowered Evocation', level: 10, description: '法师戏法伤害+智力调整值。' },
                { name: 'Overchannel', level: 14, description: '5环或更低塑能法术伤害取最大数值，但会受到反噬伤害，长休后恢复。' }
            ]
        },
        divination: {
            name: '预言学派',
            level: 2,
            description: '预言学派的法师能够预知未来，操纵命运。',
            features: [
                { name: '预兆', level: 2, description: '长休后掷两枚d20，可以替换任何可见的检定' },
                { name: '预言专家', level: 6, description: '你可以施展预言法术而不消耗法术位' },
                { name: '第三眼', level: 10, description: '你可以获得黑暗视觉、灵视或理解语言' },
                { name: '高等预兆', level: 14, description: '你可以掷三枚d20' }
            ]
        },
        necromancy: {
            name: '死灵学派',
            level: 2,
            description: '死灵学派的法师掌握生死之力，能够操控亡灵。',
            features: [
                { name: '死灵师学徒', level: 2, description: '你施放死灵法术时恢复生命值' },
                { name: '亡灵奴仆', level: 6, description: '你控制的亡灵获得你的熟练加值' },
                { name: '命匣转移', level: 10, description: '你可以将伤害转移到亡灵仆从身上' },
                { name: '亡灵大师', level: 14, description: '你可以控制更多亡灵' }
            ]
        },
        illusion: {
            name: '幻术学派',
            level: 2,
            description: '幻术学派的法师精通幻术魔法，能够创造逼真的幻象。',
            features: [
                { name: '幻术学者', level: 2, description: '你可以在不消耗材料的情况下施展幻术' },
                { name: '幻术现实', level: 6, description: '你的幻术可以造成真实伤害' },
                { name: '幻术主宰', level: 10, description: '你可以改变已施展的幻术' },
                { name: '支配幻术', level: 14, description: '你可以免疫幻术并看穿隐形' }
            ]
        },
        transmutation: {
            name: '变化学派',
            level: 2,
            description: '变化学派的法师掌握物质转换之力，能够改变物体和生物。',
            features: [
                { name: '变化学者', level: 2, description: '你可以抄写变化法术的时间和金钱减半' },
                { name: '变化石', level: 6, description: '你可以储存变化法术在石头中' },
                { name: '变形者', level: 10, description: '你可以随意施展变形术' },
                { name: '变化大师', level: 14, description: '你可以使用变化法术来治疗' }
            ]
        },
        bladesinging: {
            name: '剑歌学派',
            level: 2,
            description: '剑歌学派的法师将剑术与魔法结合，是优雅的战斗法师。',
            features: [
                { name: '剑歌', level: 2, description: '你可以激活剑歌来获得AC和移动加值' },
                { name: '剑歌训练', level: 2, description: '你获得轻甲熟练和一种武器熟练' },
                { name: '剑歌额外攻击', level: 6, description: '你可以进行额外攻击' },
                { name: '剑歌防御', level: 10, description: '你在剑歌状态下可以减免伤害' },
                { name: '剑歌大师', level: 14, description: '你在剑歌状态下可以添加智力加值到伤害' }
            ]
        },
        war_magic: {
            name: '战争魔法学派',
            level: 2,
            description: '战争魔法学派的法师专注于战斗魔法，能够在施法时保护自己。',
            features: [
                { name: '奥术偏转', level: 2, description: '你可以使用反应动作来减少受到的伤害' },
                { name: '战术魔法', level: 2, description: '你可以在使用战术动作时保持法术集中' },
                { name: '强力魔法', level: 6, description: '你的法术可以造成额外伤害' },
                { name: '防御魔法', level: 10, description: '你可以在施法时获得AC加值' },
                { name: '战争大师', level: 14, description: '你可以同时使用多个防御能力' }
            ]
        }
    },
    artificer: {
        alchemist: {
            name: '炼金师',
            level: 3,
            description: '炼金师精通制作魔法药剂和灵药，能够治疗盟友并增强他们的能力。',
            features: [
                { name: '炼金工具', level: 3, description: '你获得炼金工具的熟练，可以制作实验性灵药' },
                { name: '治疗灵药', level: 3, description: '你可以制作治疗灵药，恢复2d4+智力调整值生命值' },
                { name: '炼金大师', level: 5, description: '你的灵药效果增强，可以制作更多种类的灵药' },
                { name: '化学专家', level: 9, description: '你对毒素和疾病免疫' },
                { name: '炼金化身', level: 15, description: '你可以化身为炼金形态，获得强大的治疗能力' }
            ]
        },
        armorer: {
            name: '装甲师',
            level: 3,
            description: '装甲师精通制作和改造魔法护甲，能够将自己变成强大的战斗构装体。',
            features: [
                { name: '奥术装甲', level: 3, description: '你可以将一套护甲改造为奥术装甲，获得特殊能力' },
                { name: '装甲模式', level: 3, description: '选择装甲模式：守护者模式（防御）或突袭者模式（攻击）' },
                { name: '额外攻击', level: 5, description: '你可以进行额外攻击' },
                { name: '装甲强化', level: 9, description: '你的奥术装甲获得额外特性' },
                { name: '完美装甲', level: 15, description: '你的奥术装甲达到完美状态，获得强大能力' }
            ]
        },
        artillerist: {
            name: '炮术师',
            level: 3,
            description: '炮术师精通制作魔法火器和爆炸物，能够用奥术能量制造毁灭性的攻击。',
            features: [
                { name: '奥术火器', level: 3, description: '你可以制作奥术火器，使用智力进行攻击和伤害' },
                { name: '奥术炮台', level: 3, description: '你可以召唤奥术炮台来协助战斗' },
                { name: '爆炸专家', level: 5, description: '你的火器攻击可以造成范围伤害' },
                { name: '炮台强化', level: 9, description: '你的奥术炮台获得额外能力' },
                { name: '毁灭炮火', level: 15, description: '你可以发射毁灭性的奥术炮火' }
            ]
        },
        battlesmith: {
            name: '战锻师',
            level: 3,
            description: '战锻师精通制作魔法武器和钢铁守护者，能够创造出强大的构装伙伴。',
            features: [
                { name: '战斗准备', level: 3, description: '你获得军用武器熟练，可以制作魔法武器' },
                { name: '钢铁守护者', level: 3, description: '你可以制作钢铁守护者，一个构装伙伴' },
                { name: '额外攻击', level: 5, description: '你可以进行额外攻击' },
                { name: '奥术武器', level: 9, description: '你可以为武器注入奥术能量' },
                { name: '完美守护者', level: 15, description: '你的钢铁守护者达到完美状态' }
            ]
        }
    },
    pugilist: {
        squared_circle: {
            name: '方圆擂尊 (Squared Circle)',
            level: 3,
            description: '击倒，然后绞锁敌人。在擂台上搏斗的拳斗士都深谙一个道理——通往胜利的最快路径是让对手认输。这些摔跤手专注于使用锁喉和关节技压制那些最强大的敌人，迫使敌人按照自己的节奏战斗。',
            features: [
                { name: '稳扎稳打 (Groundwork)', level: 3, description: '你获得以下增益：高压锁绞（当你令一名或更多生物陷入受擒下开始你的回合时，你能对你擒抱的每名生物造成钝击伤害，无需动作，伤害值等于掷一次你的拳斗士骰加你的力量调整值）；无处可逃（当一名生物对抗你的擒抱或推撞DC进行豁免或属性检定时，你能消耗1点锐气令其检定具有劣势）；止步而倒（当你以徒手打击命中一名生物，并且没有在攻击中使用精通词条时，你能同时使用擒抱和推撞选项）。' },
                { name: '大肌霸 (Muscle Mass)', level: 3, description: '选择运动或特技技能。若你没有选择技能的熟练，你获得其熟练，若你已获得熟练则获得其专精。' },
                { name: '肉盾 (Meat Shield)', level: 6, description: '在你令一名生物陷入受擒期间，你对抗没有被你擒抱的生物的攻击时获得半身掩护。当一名没被你擒抱的生物对你进行的攻击检定失手时，你能以反应消耗1点锐气迫使该生物对你擒抱的生物以新的攻击检定发动一次相同的攻击。' },
                { name: '重磅拳手 (Heavyweight)', level: 11, description: '当你使用徒手打击的推撞或擒抱选项时，你的体型视为大一级。此外，你带动受擒者移动时，若受擒生物体型不超过你，你无需额外消耗移动力。' },
                { name: '利落收尾 (Clean Finish)', level: 17, description: '当一名因你受擒的生物结束其回合时，你能反应迫使其进行一次对抗你擒抱逃脱DC的体质豁免，否则陷入失能状态直至其下个回合结束。若该生物处于浴血且已因该特性陷入失能，其改为将生命值降至0。一旦你以该特性将一名生物的生命值降至0，直至完成长休你都无法再次使用该特性。' }
            ]
        },
        street_fighter: {
            name: '街头霸王 (Street Fighter)',
            level: 3,
            description: '街头霸王精通街头战斗，使用任何可用的物品作为武器。他们在城市丛林中生存，不择手段地取得胜利。',
            features: [
                { name: '即兴武器 (Improvised Weapons)', level: 3, description: '从3级开始，你可以将任何物品作为武器使用，伤害骰为d6。如果你使用易碎物品，它在命中后会损坏。' },
                { name: '街头智慧 (Street Smarts)', level: 3, description: '从3级开始，你在城市环境中进行隐匿和欺骗检定时具有优势。此外，你可以在城市中快速找到藏身之处。' },
                { name: '凶狠攻击 (Dirty Fighting)', level: 6, description: '从6级开始，当你使用徒手攻击或即兴武器攻击命中敌人时，可以使其流血。每回合开始时受1d4流血伤害，直到其恢复生命值或使用动作止血。' },
                { name: '铁拳 (Iron Fists)', level: 10, description: '从10级开始，你的徒手攻击视为魔法武器，可以克服非魔法抗性和免疫。' },
                { name: '生存本能 (Survivor)', level: 14, description: '从14级开始，当你降至0生命值但未直接死亡时，可以改为降至1点生命值。此特性长休后恢复。' },
                { name: '街头传奇 (Legend of the Streets)', level: 18, description: '从18级开始，你在城市中获得极高的声望和影响力。城市中的罪犯和底层人物会帮助你，提供庇护、信息或资源。' }
            ]
        },
        dog_and_hound: {
            name: '犬师拳狩 (Dog and Hound)',
            level: 3,
            description: '犬师拳狩是与猎犬并肩作战的拳斗士，他们与忠诚的猎犬建立了深厚的羁绊。这些战士依靠猎犬的敏锐感官和战斗能力来追踪和击倒猎物。',
            features: [
                { name: '猎犬伙伴 (Hound Companion)', level: 3, description: '从3级开始，你获得一只忠诚的猎犬伙伴。猎犬使用狼的统计数据，但具有10+你的熟练加值+你的体质调整值的AC，生命值等于5倍你的拳斗士等级。猎犬可以执行攻击、疾跑、撤离、躲藏或帮助动作。你可以使用附赠动作命令猎犬执行动作。' },
                { name: '协同攻击 (Pack Tactics)', level: 3, description: '从3级开始，当你的猎犬在5尺内时，你的徒手打击和拳斗武器攻击具有优势。同样，你的猎犬攻击被你擒抱或推撞的生物时也具有优势。' },
                { name: '猎犬训练 (Hound Training)', level: 6, description: '从6级开始，你的猎犬获得以下好处：AC+2，攻击和伤害加值+2，可以执行擒抱和推撞动作，速度增加10尺。' },
                { name: '铁拳 (Iron Fists)', level: 10, description: '从10级开始，你的徒手攻击视为魔法武器，可以克服非魔法抗性和免疫。' },
                { name: '猎犬之怒 (Hound\'s Fury)', level: 14, description: '从14级开始，当你的猎犬命中生物时，你可以使用反应动作对该生物进行一次徒手打击。此外，当你命中生物时，你的猎犬可以使用反应动作进行攻击。' },
                { name: '猎犬大师 (Master of Hounds)', level: 18, description: '从18级开始，你可以召唤第二只猎犬伙伴。两只猎犬同时存在，且都可以在你的附赠动作下执行动作。此外，你的猎犬攻击造成力场伤害，且可以攻击以太位面的生物。' }
            ]
        },
        hand_of_dread: {
            name: '惧恶之手 (Hand of Dread)',
            level: 3,
            description: '惧恶之手是与异界伟力建立联系的拳斗士，他们通过黑暗魔法和怪物般的肢体变形来获得超凡的战斗能力。这些战士能够召唤惧恶之力，以复仇和暴力压制敌人。',
            features: [
                { name: '黑暗魔法 (Black Magic)', level: 3, description: '3级时，你与惧恶之力的联系让你获得以下增益：两道戏法-你自魔契师法术列表习得两道你选择的戏法，你黑暗魔法法术的施法属性是体质；一环法术-自魔契师法术列表选择一道一环法术，你始终准备着这道法术，你可以无需法术位地施展该法术一次，并在完成长休后重获以此法施展该法术的能力，你也可以使用你拥有的任何法术位来施展该法术；更换法术-每当你获得新的等级时，你可以将你以此特性选择的其中一道法术替换为另一道魔契师法术列表的环位相同的法术。', grantsSpells: { cantrips: { count: 2, spellList: 'warlock', choose: true, ability: '体质' }, level1: { count: 1, spellList: 'warlock', choose: true, alwaysPrepared: true, freeCast: { count: 1, reset: '长休' } } } },
                { name: '惧恶之手 - 变形 (Dread Hand Transformation)', level: 3, description: '3级时，当你在你的回合执行攻击动作时，你能将你向异界伟力许下誓言的证明公之于众。当你如此做时，你的其中一条肢体变形为与你的惧恶之力相符的怪物外表，持续1分钟。此特性一经使用，直至完成短休或长休你都无法再次使用。' },
                { name: '惧恶之手 - 复仇打击 (Revenging Strike)', level: 3, description: '当你被近战攻击命中时，若攻击你的生物位于你的触及范围内，你能以反应对其发动一次徒手打击。' },
                { name: '惧恶之手 - 无尽渴血 (Unslakeable Bloodlust)', level: 3, description: '当你以徒手打击命中一名目标时，你能将攻击的伤害骰投掷两次并对那名目标同时应用两个结果。' },
                { name: '惧恶之手 - 旋风暴揍 (Whirlwind of Violence)', level: 3, description: '每个回合中你的徒手打击首次失手时，你能重骰此次攻击但必须使用新的结果。' },
                { name: '魔鬼交易 (Deal with Devil)', level: 6, description: '6级时，你选择获得以下选项之一，每当你完成长休时，你可以更改你的选择：暗影斗篷-你能无需法术位地施展一次隐形术，当你完成短休或长休时，你重获以此法施展该法术的能力；千颜面具-你能无需法术位地施展易容术；异界漫步-你能无需法术位地施展一次迷踪步，当你完成短休或长休时，你重获以此法施展该法术的能力。', grantsSpells: { choices: [{ name: '暗影斗篷', spell: '隐形术', level: 2, freeCast: { count: 1, reset: '短休或长休' } }, { name: '千颜面具', spell: '易容术', level: 1, freeCast: { count: Infinity, reset: '随意施展' } }, { name: '异界漫步', spell: '迷踪步', level: 2, freeCast: { count: 1, reset: '短休或长休' } }], choose: true } },
                { name: '铁拳 (Iron Fists)', level: 10, description: '10级时，你的徒手攻击视为魔法武器，可以克服非魔法抗性和免疫。' },
                { name: '怪谬赘生 (Grotesque Growth)', level: 14, description: '14级时，当你使用惧恶之手特性时，你获得法术变巨术/缩小术的变巨效应，并获得10尺触及。此特性一经使用，直至完成长休你都无法再次使用，除非你获得1级力竭（无需动作）来重置该特性的使用权。' },
                { name: '内脏喷泉 (Fountain of Viscera)', level: 18, description: '18级时，你能以魔法动作消耗6点锐气来魔法性的将手伸入一名位于你触及内的你选择的生物体内，掏出其内脏并尝试将其处决。该生物必须进行一次敏捷豁免（DC等于8+你的力量调整值+你的熟练加值）。豁免失败则该生物受到100穿刺伤害。豁免成功则改为受到50穿刺伤害。若该伤害令目标的生命值降至0，你在目标身上撕开一个血洞，喷涌出令人作呕的内脏，目标立即死亡。当目标因此死亡时，位于源自你的30尺光环区域内的每名你选择的生物必须成功通过一次感知豁免（DC等于8+你的力量调整值+你的熟练加值），否则陷入恐慌状态持续1分钟。此特性一经使用，你在完成长休前无法再次使用。' }
            ]
        },
        sweet_science: {
            name: '甜蜜科学 (Sweet Science)',
            level: 3,
            description: '甜蜜科学拳斗士是技术和策略的大师，他们将拳击视为一门精确的科学。这些战士依靠完美的时机、距离控制和战术智慧来击败对手。',
            features: [
                { name: '精确打击 (Precision Strike)', level: 3, description: '从3级开始，当你以徒手打击命中生物时，可以消耗1点锐气使其进行体质豁免（DC=8+熟练加值+力量或敏捷调整值），失败则被你推离10尺或击倒（你选择）。' },
                { name: '读心者 (Mind Reader)', level: 3, description: '从3级开始，当5尺内生物对你进行攻击时，你可以使用反应动作消耗1点锐气使其攻击具有劣势。如果攻击未命中，你可以立即进行一次徒手打击。' },
                { name: '反击大师 (Counter Striker)', level: 6, description: '从6级开始，当你被近战攻击命中时，可以使用反应动作进行徒手打击。如果命中，该攻击对你造成的伤害减少1d8+你的体质调整值。' },
                { name: '铁拳 (Iron Fists)', level: 10, description: '从10级开始，你的徒手攻击视为魔法武器，可以克服非魔法抗性和免疫。' },
                { name: '完美时机 (Perfect Timing)', level: 14, description: '从14级开始，当你进行先攻检定时，可以消耗2点锐气获得优势。此外，在战斗的第一轮中，你对尚未行动的生物攻击具有优势。' },
                { name: '拳法大师 (Grandmaster)', level: 18, description: '从18级开始，你的徒手打击在18-20时造成致命一击。此外，当你造成致命一击时，目标必须进行体质豁免（DC=8+熟练加值+力量或敏捷调整值），失败则昏迷1分钟或直到其受到伤害。' }
            ]
        },
        piss_and_vinegar: {
            name: '怒雷恶氓 (Piss and Vinegar)',
            level: 3,
            description: '嘴上带刺，拳上见血。有的拳斗士以反派形象为荣，乐于夸大其词来博取恶名。他们因污言秽语和卑鄙伎俩遭人憎恨，但这些拳斗士以他们的挑衅技术和不惜一切赢的战斗的决心为傲。',
            features: [
                { name: '恶劣态度 (Bad Attitude)', level: 3, description: '若你还未获得威吓技能的熟练，你获得之。此外，你使用威吓技能的属性检定获得等于你力量调整值的加值（至少+1）。' },
                { name: '咸涩礼敬 (Salty Salute)', level: 3, description: '你对侮辱他人有着艺术般的技巧。你能以附赠动作挑衅一名60尺内的能看见或听见你的生物。该生物必须成功通过一次感知豁免检定（DC=8+体质调整值+熟练加值），否则受到等于掷一次你的拳斗骰加你的体质调整值的心灵伤害，且其对除你以外的生物进行的任意攻击检定具有劣势，持续至你的下个回合开始。' },
                { name: '腌臜诡技 (Dirty Tricks)', level: 6, description: '你有些诡技能让你即使身处逆境也能挽回局势。你能使用以下一种腌臜诡技。你每回合仅能使用一次腌臜诡技，且一旦你使用了某个腌臜诡技，直至完成短休或长休你都无法再次使用该诡技。踩脚（当你以徒手打击或拳斗武器对一名生物造成伤害时，该生物必须成功通过一次敏捷豁免，否则其速度降至0，持续1分钟，受影响的生物可以在其每个回合结束时重复豁免）；偷桃（当你以徒手打击或拳斗武器对一名生物造成伤害时，你能猛击该生物的下体，该生物必须成功通过一次力量豁免，否则对该生物发动的攻击具有优势，持续至你的下个回合结束）；抛沙（你能以附赠动作对10尺内的一名生物的眼睛抛出尘土，该生物必须成功通过一次体质豁免，否则其陷入目盲状态，持续至其下个回合结束）。' },
                { name: '老而为贼 (Mean Old Cuss)', level: 11, description: '你只需要用一个手势和几句讥讽就能让整座屋子的生物被你激怒。你能以附赠动作选择一定数量的位于你30尺内能看见或听见你的目标，数量至多等于你的拳斗士等级。你选择的每名生物必须成功通过一次感知豁免，否则受到等于掷一次你的拳斗骰加你的体质调整值的心灵伤害，且其对除你以外的生物进行的任意攻击检定具有劣势。此特性一经使用，直至完成长休你都无法再次使用。你也可以消耗3点锐气（无需动作）来重置该特性的使用权。' },
                { name: '龌龊诡技 (Dirtier Tricks)', level: 17, description: '你获得下列额外的腌臜诡技。你每回合仅能使用一次腌臜诡技，且一旦你使用了某个腌臜诡技，直至完成短休或长休你都无法再次使用该诡技。后脑兔击（当你以徒手打击或拳斗武器命中一名生物时，你猛击其头部，该生物失去其心灵伤害抗性且其豁免检定具有劣势，持续至你的下个回合结束）；混球暗袭（当你以徒手打击或拳斗武器命中一名生物时，你能将命中改为重击命中，对此重击命中，你改为投掷三次该攻击的伤害骰并将其累加，而非平常的两次）。' }
            ]
        },
        street_saint: {
            name: '街角圣徒 (Street Saint)',
            level: 3,
            description: '献上祈祷与重拳。拳斗士总能战胜逆境。那些被称作街角圣徒的人凭借着对诸神的信仰最终幸存。这些拳斗士饱受考验最终战胜了逆境，他们侍奉神明的正义决心无可动摇，也受到了他们的神明认可。',
            features: [
                { name: '引导神力 (Channel Divinity)', level: 3, description: '你能直接从外层位面引导神圣力量用以释放魔法效应。你起始时具有两种效应选项：信实之拳和诸神恩典。每当你使用本子职的引导神力时，你选择要创造哪种效应。一旦使用了本职业的引导神力，直至完成短休或长休你才能再次使用该引导神力。信实之拳（你能以附赠动作将正义的怒火注入双拳，在接下来的1分钟内，你的徒手打击额外造成1d4光耀伤害，若目标为邪魔或亡灵，则为2d4）；诸神恩典（你能以附赠动作祈求神明的恩典，在接下来的1分钟内，你获得对暗蚀伤害的抗性，且当你进行豁免检定时，掷1d4并将骰值加入检定）。' },
                { name: '圣疗 (Lay On Hands)', level: 3, description: '你的触碰带有祝福，可以医治伤口。你获得一个治疗能量池，其内的治疗能量在每次完成长休时补满。治疗能量池储备的可恢复生命值总值等于你的拳斗士等级的三倍。你能够以附赠动作触碰一名生物（可以是你自己），并抽取治疗能量池中的能量恢复该生物的生命值，其恢复量最多等于你治疗能量池中剩余的治疗量。此外，你也可以使用5点治疗量来移除目标身上的中毒状态，这些点数不会同时恢复生物的生命值。' },
                { name: '磨难成圣 (Ravaged But Resolute)', level: 6, description: '当你使用浴血奋战时，你能补满你的圣疗能量池。此特性一经使用，直至完成长休你都无法再次使用。' },
                { name: '抗性灵光 (Aura of Resilience)', level: 11, description: '当你使用反求诸己时，你能在源自你的10尺光环区域内散发出一道不可见的庇护灵光，持续10分钟。灵光在你陷入失能期间失效。灵光内你的盟友获得对钝击、穿刺和挥砍伤害的抗性。此特性一经使用，直至完成长休你都无法再次使用。' },
                { name: '神圣之手 (Hallowed Hands)', level: 17, description: '每个你的回合一次，当你以徒手打击或拳斗武器命中一名生物时，你能消耗一定点数的治疗能量来对目标造成额外的光耀伤害，至多消耗等于你拳斗士等级的治疗能量。额外伤害值等于你消耗的治疗能量点数，若目标为邪魔或亡灵，则为你消耗点数的两倍。' }
            ]
        }
    }
};

// 专长数据 - 详细描述和先决条件
const FEATS = {
    ability_score_improvement: {
        name: '属性值提升',
        description: '你可以提升一项属性值2点，或提升两项属性值各1点（上限20）。',
        prerequisite: null,
        benefits: ['一项属性+2 或 两项属性各+1'],
        type: 'asi',
        choices: {
            type: 'ability_score',
            options: [
                { type: 'single', value: 2, description: '一项属性+2' },
                { type: 'dual', value: 1, description: '两项属性各+1' }
            ]
        }
    },
    alert: {
        name: '警觉',
        description: '你时刻保持警惕，在战斗中总是先发制人。你在主动性检定上具有+5加值，并且不会受到措手不及的影响。',
        prerequisite: null,
        benefits: ['主动性检定+5', '免疫措手不及']
    },
    athlete: {
        name: '运动员',
        description: '你经过严格的体能训练，在运动和杂技方面表现出色。你在进行奔跑或跳跃后，可以立即站立而不消耗移动力。',
        prerequisite: '力量或敏捷13+',
        benefits: ['力量和敏捷+1', '奔跑跳跃后站立不消耗移动力']
    },
    actor: {
        name: '演员',
        description: '你精通模仿和表演，能够完美地模仿他人的声音和举止。你在进行魅力（表演）检定时具有优势。',
        prerequisite: '魅力13+',
        benefits: ['魅力+1', '表演检定优势', '模仿声音']
    },
    charger: {
        name: '冲锋者',
        description: '你擅长在冲锋时发动强力攻击。当你使用动作进行冲锋后，可以使用附赠动作进行近战武器攻击或推撞。',
        prerequisite: null,
        benefits: ['冲锋后附赠动作攻击', '冲锋攻击+5伤害']
    },
    crossbow_expert: {
        name: '弩专家',
        description: '你精通使用弩类武器，即使在近战中也能灵活使用。你在使用弩时，近战攻击不会具有劣势。',
        prerequisite: null,
        benefits: ['弩近战无劣势', '弩装填无视特性', '弩额外攻击']
    },
    defensive_duelist: {
        name: '防御决斗者',
        description: '你精通使用轻巧武器进行防御。当你持用轻巧武器时，可以使用反应动作增加AC。',
        prerequisite: '敏捷13+',
        benefits: ['反应动作增加AC', 'AC增加熟练加值']
    },
    dual_wielder: {
        name: '双武器战斗者',
        description: '你精通双武器战斗技巧。你双持武器时AC+1，并且可以双持非轻巧武器。',
        prerequisite: null,
        benefits: ['双持时AC+1', '可双持非轻巧武器', '双持时收放武器更灵活']
    },
    dungeon_delver: {
        name: '地城探索者',
        description: '你精通地城探索，能够快速发现秘密和陷阱。你在进行感知（察觉）和智力（调查）检定时具有优势。',
        prerequisite: null,
        benefits: ['察觉和调查检定优势', '陷阱伤害抗性', '快速搜索']
    },
    durable: {
        name: '耐久',
        description: '你拥有顽强的生命力，能够快速恢复。你在掷生命骰恢复生命值时，最小值为2倍你的体质调整值。',
        prerequisite: '体质13+',
        benefits: ['体质+1', '生命骰最小恢复值增加']
    },
    elemental_adept: {
        name: '元素精通',
        description: '你精通一种元素伤害类型。你选择的元素伤害类型可以无视抗性，并且掷出1时可以重骰。',
        prerequisite: '能够施放至少一个法术',
        benefits: ['元素伤害无视抗性', '元素伤害骰1可重骰']
    },
    grappler: {
        name: '擒抱者',
        description: '你精通擒抱技巧。你对被你擒抱的生物攻击具有优势。',
        prerequisite: '力量13+',
        benefits: ['擒抱时攻击优势', '可束缚擒抱目标']
    },
    great_weapon_master: {
        name: '重型武器大师',
        description: '你精通使用重型武器。你在使用重型武器时，可以选择-5攻击加值来+10伤害。',
        prerequisite: null,
        benefits: ['重型武器致命一击附赠攻击', '重型武器-5攻击+10伤害']
    },
    healer: {
        name: '治疗者',
        description: '你精通医疗技巧。你可以使用医疗包来稳定濒死生物并恢复1点生命值。',
        prerequisite: null,
        benefits: ['医疗包恢复生命值', '医疗包额外恢复1d6+4生命值']
    },
    heavily_armored: {
        name: '重甲熟练',
        description: '你学会了穿着重甲。你获得重甲熟练。',
        prerequisite: '中甲熟练',
        benefits: ['力量+1', '重甲熟练']
    },
    heavy_armor_master: {
        name: '重甲大师',
        description: '你精通使用重甲。你在穿着重甲时，非魔法武器伤害-3。',
        prerequisite: '力量13+，重甲熟练',
        benefits: ['重甲时非魔法伤害-3', '重甲时力量检定优势']
    },
    inspiring_leader: {
        name: '激励领袖',
        description: '你能够激励盟友。你可以在短休时发表演讲，让盟友获得临时生命值。',
        prerequisite: '魅力13+',
        benefits: ['短休时给予盟友临时生命值', '临时生命值等于等级+魅力调整值']
    },
    keen_mind: {
        name: '敏锐心智',
        description: '你拥有出色的记忆力。你总是知道北方在哪里，知道现在的时间。',
        prerequisite: null,
        benefits: ['智力+1', '总是知道方向和时间', '完美记忆']
    },
    lightly_armored: {
        name: '轻甲熟练',
        description: '你学会了穿着轻甲。你获得轻甲熟练。',
        prerequisite: null,
        benefits: ['力量或敏捷+1', '轻甲熟练']
    },
    lucky: {
        name: '幸运',
        description: '你拥有非凡的运气。你拥有3点幸运点数，可以在攻击、检定或豁免失败时使用来重骰。',
        prerequisite: null,
        benefits: ['3点幸运点数', '攻击检定失败可重骰', '能力检定失败可重骰', '豁免检定失败可重骰']
    },
    mage_slayer: {
        name: '法师杀手',
        description: '你精通对抗施法者。你对施法者进行借机攻击时，其体质豁免具有劣势。',
        prerequisite: null,
        benefits: ['施法者借机攻击劣势', '反应打断施法', '对施法者伤害优势']
    },
    magic_initiate: {
        name: '魔法入门',
        description: '你学会了一些基础魔法。你选择一门职业，学习其两个戏法和一个1级法术。',
        prerequisite: null,
        benefits: ['学习两个戏法', '学习一个1级法术', '每日一次1级法术']
    },
    martial_adept: {
        name: '武术学徒',
        description: '你学习了一些战斗技巧。你学习两个战斗大师的战斗策略。',
        prerequisite: null,
        benefits: ['学习两个战斗策略', '获得一个d6战术骰']
    },
    medium_armor_master: {
        name: '中甲大师',
        description: '你精通使用中甲。你穿着中甲时，敏捷调整值可以加到AC上（最多+3）。',
        prerequisite: '中甲熟练',
        benefits: ['中甲敏捷加值上限+3', '中甲隐匿检定无劣势']
    },
    mobile: {
        name: '灵活移动',
        description: '你移动迅速灵活。你在进行疾跑或撤离动作时，不会引发借机攻击。',
        prerequisite: null,
        benefits: ['速度+10尺', '疾跑撤离不引发借机攻击', '近战攻击后可半速移动']
    },
    mounted_combatant: {
        name: '骑乘战斗者',
        description: '你精通骑乘战斗。你在骑乘时对体型比你坐骑小的生物攻击具有优势。',
        prerequisite: null,
        benefits: ['骑乘时攻击小型生物优势', '骑乘时坐骑敏捷豁免优势', '可以强制攻击目标自己而非坐骑']
    },
    observant: {
        name: '观察入微',
        description: '你善于观察细节。你在进行感知（察觉）和智力（调查）检定时具有+5加值。',
        prerequisite: null,
        benefits: ['智力或感知+1', '被动察觉和调查+5', '可以读唇']
    },
    polearm_master: {
        name: '长柄武器大师',
        description: '你精通使用长柄武器。你使用长柄武器时，可以使用附赠动作进行额外攻击。',
        prerequisite: null,
        benefits: ['长柄武器附赠攻击', '长柄武器借机攻击', '长柄武器进入范围可攻击']
    },
    resilient: {
        name: '坚韧',
        description: '你选择一种豁免属性，在该豁免上获得熟练加值。',
        prerequisite: null,
        benefits: ['选择一种属性+1', '该属性豁免获得熟练']
    },
    ritual_caster: {
        name: '仪式施法者',
        description: '你学会了仪式施法。你可以选择一门职业，学习其仪式法术。',
        prerequisite: '智力或感知13+',
        benefits: ['学习两个1级仪式法术', '可以学习更多仪式法术']
    },
    savage_attacker: {
        name: '野蛮攻击者',
        description: '你善于造成致命伤害。你进行武器攻击时，可以重骰伤害骰并采用较高结果。',
        prerequisite: null,
        benefits: ['每回合一次重骰武器伤害', '采用较高伤害结果']
    },
    sentinel: {
        name: '哨兵',
        description: '你善于保护盟友。你对离开你触及范围的生物进行借机攻击时，该生物速度降为0。',
        prerequisite: null,
        benefits: ['借机攻击使目标速度降为0', '即使目标撤离也可借机攻击', '反应攻击无视目标反应']
    },
    sharpshooter: {
        name: '神射手',
        description: '你精通远程武器。你在使用远程武器时，远程攻击不会具有劣势。',
        prerequisite: null,
        benefits: ['远程攻击无视半掩蔽和四分之三掩蔽', '远程攻击无劣势', '远程攻击-5攻击+10伤害']
    },
    shield_master: {
        name: '盾牌大师',
        description: '你精通使用盾牌。你在持盾时，可以使用反应动作来减少受到的伤害。',
        prerequisite: null,
        benefits: ['盾牌推撞附赠动作', '盾牌敏捷豁免优势', '盾牌反射闪避']
    },
    skilled: {
        name: '多才多艺',
        description: '你获得任意三个技能的熟练。',
        prerequisite: null,
        benefits: ['获得三个技能熟练']
    },
    spell_sniper: {
        name: '法术狙击手',
        description: '你精通远程法术。你的远程法术攻击范围加倍。',
        prerequisite: '能够施放至少一个法术',
        benefits: ['远程法术攻击范围加倍', '远程法术攻击无视掩蔽', '学习一个远程攻击戏法']
    },
    tavern_brawler: {
        name: '酒馆斗殴者',
        description: '你精通徒手战斗和即兴武器。你的徒手攻击和即兴武器伤害骰变为d4。',
        prerequisite: null,
        benefits: ['力量或体质+1', '徒手和即兴武器伤害d4', '徒手攻击后擒抱附赠动作']
    },
    tough: {
        name: '强壮',
        description: '你拥有顽强的生命力。你的生命值上限每升一级就增加2点。',
        prerequisite: null,
        benefits: ['生命值上限每级+2']
    },
    war_caster: {
        name: '战争施法者',
        description: '你精通在战斗中施法。你在持盾和武器时，可以正常施放法术。',
        prerequisite: '能够施放至少一个法术',
        benefits: ['持盾武器时施法无需空出一只手', '体质豁免维持法术集中优势', '借机攻击可用戏法']
    },
    weapon_master: {
        name: '武器大师',
        description: '你精通使用各种武器。你获得四种武器的熟练。',
        prerequisite: null,
        benefits: ['力量或敏捷+1', '获得四种武器熟练']
    },
    // 扩展资料专长
    artificer_initiate: {
        name: '奇械师入门',
        description: '你学会了一些奇械师技巧。你获得一个奇械师戏法和一个1级法术。',
        prerequisite: null,
        benefits: ['学习一个奇械师戏法', '学习一个1级法术', '获得奇械师工具熟练']
    },
    chef: {
        name: '厨师',
        description: '你精通烹饪艺术。你可以在短休时为盟友准备食物，恢复额外生命值。',
        prerequisite: null,
        benefits: ['体质或感知+1', '烹饪工具熟练', '短休时食物恢复额外生命值', '可以制作特殊食物']
    },
    crusher: {
        name: '粉碎者',
        description: '你精通使用钝击武器。你的钝击武器攻击可以移动敌人并造成致命一击。',
        prerequisite: null,
        benefits: ['力量或体质+1', '钝击攻击可以移动敌人', '钝击致命一击可以震慑']
    },
    eldritch_adept: {
        name: '魔能学徒',
        description: '你学会了一个魔能祈唤。你可以使用邪术师的特殊能力。',
        prerequisite: '魅力13+',
        benefits: ['学习一个魔能祈唤', '获得邪术师能力']
    },
    fey_touched: {
        name: '妖精触碰',
        description: '你接触过妖精荒野的魔法。你可以施放迷雾步和一个1级预言或惑控法术。',
        prerequisite: null,
        benefits: ['智力、感知或魅力+1', '可以施放迷雾步', '可以施放一个1级法术']
    },
    fighting_initiate: {
        name: '战斗风格入门',
        description: '你学会了一种战斗风格。你可以使用战士的战斗风格能力。',
        prerequisite: null,
        benefits: ['学习一种战斗风格', '获得相应战斗能力']
    },
    gunner: {
        name: '枪手',
        description: '你精通使用火器。你可以快速装填火器并在近战中使用。',
        prerequisite: null,
        benefits: ['敏捷+1', '火器熟练', '火器近战无劣势', '快速装填']
    },
    metamagic_adept: {
        name: '超魔学徒',
        description: '你学会了两个超魔选项。你可以使用术法点来增强法术。',
        prerequisite: '能够施放至少一个法术或拥有契约魔法特性',
        benefits: ['学习两个超魔选项', '获得2点术法点']
    },
    piercer: {
        name: '穿刺者',
        description: '你精通使用穿刺武器。你的穿刺武器攻击可以造成额外伤害。',
        prerequisite: null,
        benefits: ['力量或敏捷+1', '穿刺攻击可以重骰伤害', '穿刺致命一击可以额外攻击']
    },
    poisoner: {
        name: '毒师',
        description: '你精通使用毒药。你可以快速制作和应用毒药。',
        prerequisite: null,
        benefits: ['可以无视金币和时间制作毒药', '毒药伤害无视抗性', '应用毒药不会意外中毒']
    },
    shadow_touched: {
        name: '暗影触碰',
        description: '你接触过阴影位面的魔法。你可以施放隐形术和一个1级幻术或死灵法术。',
        prerequisite: null,
        benefits: ['智力、感知或魅力+1', '可以施放隐形术', '可以施放一个1级法术']
    },
    skill_expert: {
        name: '技能专家',
        description: '你精通某项技能。你在该技能上具有专长。',
        prerequisite: null,
        benefits: ['一项属性+1', '一项技能熟练', '该技能检定+3']
    },
    slasher: {
        name: '斩击者',
        description: '你精通使用挥砍武器。你的挥砍武器攻击可以减速敌人。',
        prerequisite: null,
        benefits: ['力量或敏捷+1', '挥砍攻击可以减速敌人', '挥砍致命一击可以使其失能']
    },
    telekinetic: {
        name: '念动力',
        description: '你拥有心灵感应能力。你可以用意念移动物体。',
        prerequisite: null,
        benefits: ['智力、感知或魅力+1', '可以施放法师之手', '可以推动生物']
    },
    telepathic: {
        name: '心灵感应',
        description: '你拥有心灵感应能力。你可以与他人进行心灵交流。',
        prerequisite: null,
        benefits: ['智力、感知或魅力+1', '可以心灵感应交流', '可以侦测思想']
    },
    // 更多扩展资料专长
    dragon_hide: {
        name: '龙族之皮',
        description: '你拥有龙族血统，皮肤变得坚硬如鳞。你获得AC加值和龙族吐息。',
        prerequisite: '龙裔',
        benefits: ['体质+1', 'AC+1', '获得龙族吐息武器']
    },
    drow_high_magic: {
        name: '卓尔高等魔法',
        description: '你掌握了卓尔的高等魔法。你可以施展更多的法术。',
        prerequisite: '卓尔',
        benefits: ['可以施展侦测魔法', '可以施展浮空术', '可以施展解除魔法']
    },
    dwarven_fortitude: {
        name: '矮人坚韧',
        description: '你拥有矮人的坚韧体质。你在战斗中可以快速恢复。',
        prerequisite: '矮人',
        benefits: ['体质+1', '闪避动作时可以恢复生命值']
    },
    elven_accuracy: {
        name: '精灵精准',
        description: '你拥有精灵的精准视力。你在攻击时可以重骰。',
        prerequisite: '精灵或半精灵',
        benefits: ['敏捷、智力、感知或魅力+1', '优势攻击时可以重骰一颗骰子']
    },
    fade_away: {
        name: '消失',
        description: '你学会了侏儒的消失技巧。你可以在受到伤害时隐形。',
        prerequisite: '侏儒',
        benefits: ['智力+1', '受到伤害时可以使用反应隐形']
    },
    fell_handed: {
        name: '致命之手',
        description: '你精通使用斧头和锤子。你可以造成额外的伤害。',
        prerequisite: null,
        benefits: ['使用斧头和锤子时攻击优势', '可以击倒敌人']
    },
    flare_slinger: {
        name: '闪光投掷者',
        description: '你精通使用火焰和闪光来干扰敌人。',
        prerequisite: null,
        benefits: ['可以投掷火焰', '可以致盲敌人']
    },
    gourmand: {
        name: '美食家',
        description: '你精通烹饪和饮食。你可以通过食物来恢复生命值。',
        prerequisite: null,
        benefits: ['可以制作特殊食物', '短休时恢复额外生命值']
    },
    healer_medic: {
        name: '医疗专家',
        description: '你精通医疗技巧。你可以更有效地治疗盟友。',
        prerequisite: null,
        benefits: ['医疗检定优势', '可以恢复更多生命值']
    },
    historically_accurate: {
        name: '历史准确',
        description: '你对历史有深入的了解。你可以从历史中获得优势。',
        prerequisite: null,
        benefits: ['历史检定优势', '可以回忆历史信息']
    },
    infernal_constitution: {
        name: '炼狱体质',
        description: '你拥有炼狱血统。你对火焰和毒素有抗性。',
        prerequisite: '提夫林',
        benefits: ['体质+1', '火焰抗性', '毒素抗性']
    },
    orcish_fury: {
        name: '兽人之怒',
        description: '你拥有兽人的愤怒。你可以在攻击时造成额外伤害。',
        prerequisite: '半兽人',
        benefits: ['力量或体质+1', '攻击时可以额外伤害']
    },
    prodigy: {
        name: '天才',
        description: '你是一个天才。你学习新技能的速度更快。',
        prerequisite: '半精灵、半兽人或人类',
        benefits: ['获得一个技能熟练', '获得一个工具熟练', '一种技能检定翻倍']
    },
    second_chance: {
        name: '第二次机会',
        description: '你拥有半身人的幸运。你可以在失败时重骰。',
        prerequisite: '半身人',
        benefits: ['敏捷+1', '可以重骰失败的检定']
    },
    squat_nimbleness: {
        name: '矮壮灵活',
        description: '你虽然矮小但灵活。你可以快速移动。',
        prerequisite: '矮人或小型种族',
        benefits: ['力量或敏捷+1', '速度+5尺', '逃脱擒抱优势']
    },
    svirfneblin_magic: {
        name: '斯virfneblin魔法',
        description: '你掌握了斯virfneblin的魔法。你可以施展幻术。',
        prerequisite: '侏儒（斯virfneblin）',
        benefits: ['可以施展隐形', '可以施展盲视', '可以施展伪装']
    },
    wood_elf_magic: {
        name: '木精灵魔法',
        description: '你掌握了木精灵的魔法。你可以施展自然法术。',
        prerequisite: '木精灵',
        benefits: ['可以施展神莓', '可以施展大步奔行', '可以施展 pass without trace']
    }
};

// 法术数据从 spells_data.js 导入
// const SPELLS 已在 spells_data.js 中定义

// 护甲数据
const ARMOR = {
    padded: { name: '填充甲', baseAC: 11, addDex: true, maxDex: null, type: '轻甲', stealthDisadvantage: true },
    leather: { name: '皮甲', baseAC: 11, addDex: true, maxDex: null, type: '轻甲', stealthDisadvantage: false },
    studded: { name: '镶钉皮甲', baseAC: 12, addDex: true, maxDex: null, type: '轻甲', stealthDisadvantage: false },
    hide: { name: '兽皮甲', baseAC: 12, addDex: true, maxDex: 2, type: '中甲', stealthDisadvantage: false },
    chain_shirt: { name: '链甲衫', baseAC: 13, addDex: true, maxDex: 2, type: '中甲', stealthDisadvantage: false },
    scale_mail: { name: '鳞甲', baseAC: 14, addDex: true, maxDex: 2, type: '中甲', stealthDisadvantage: true },
    breastplate: { name: '胸甲', baseAC: 14, addDex: true, maxDex: 2, type: '中甲', stealthDisadvantage: false },
    half_plate: { name: '半身板甲', baseAC: 15, addDex: true, maxDex: 2, type: '中甲', stealthDisadvantage: true },
    ring_mail: { name: '环甲', baseAC: 14, addDex: false, maxDex: null, type: '重甲', stealthDisadvantage: true },
    chain_mail: { name: '链甲', baseAC: 16, addDex: false, maxDex: null, type: '重甲', stealthDisadvantage: true, minStr: 13 },
    splint: { name: '板条甲', baseAC: 17, addDex: false, maxDex: null, type: '重甲', stealthDisadvantage: true, minStr: 15 },
    plate: { name: '板甲', baseAC: 18, addDex: false, maxDex: null, type: '重甲', stealthDisadvantage: true, minStr: 15 },
    shield: { name: '盾牌', baseAC: 2, addDex: false, maxDex: null, type: '盾牌', stealthDisadvantage: false }
};

// 职业数据 - 包含详细描述和特性
const CLASSES = {
    barbarian: {
        name: '野蛮人',
        description: '野蛮人是荒野中的凶猛战士，以狂暴之力碾压敌人。他们通过进入狂暴状态来获得超凡的力量和韧性。',
        hitDice: 12,
        primaryAbility: '力量',
        savingThrows: ['力量', '体质'],
        armorProficiencies: ['轻甲', '中甲', '盾牌'],
        weaponProficiencies: ['简易武器', '军用武器'],
        skills: ['驯兽', '运动', '威吓', '自然', '察觉', '生存'],
        skillCount: 2,
        features: [
            { name: '狂暴 (Rage)', level: 1, description: '进入狂暴状态，持续1分钟。效果：力量检定和力量豁免具有优势；近战武器伤害+2（9级时+3，16级时+4）；钝击、穿刺和挥砍伤害抗性；无法施法或维持法术。需要长休恢复，次数等于2+体质调整值（最少1次）。' },
            { name: '无甲防御 (Unarmored Defense)', level: 1, description: '不穿戴任何护甲且未持盾时，AC = 10 + 敏捷调整值 + 体质调整值。' },
            { name: '危险感知 (Danger Sense)', level: 2, description: '你进行对抗可见效应（陷阱、法术等）的敏捷豁免时具有优势。无法在目盲、耳聋或失能时使用。' },
            { name: '鲁莽攻击 (Reckless Attack)', level: 2, description: '进行近战武器攻击时，本回合获得攻击检定优势，但对你进行的攻击检定也获得优势。' },
            { name: '野蛮人之路 (Primal Path)', level: 3, description: '选择一条野蛮人之路（子职业），获得相应能力。' },
            { name: '额外攻击 (Extra Attack)', level: 5, description: '你进行攻击动作时可以攻击两次而非一次。' },
            { name: '快速移动 (Fast Movement)', level: 5, description: '当你未穿戴重甲时，速度增加10尺。' },
            { name: '野性本能 (Feral Instinct)', level: 7, description: '你的先攻检定具有优势。此外，如果你被突袭且未失能，你可以正常行动而非只能反应。' },
            { name: '残暴暴击 (Brutal Critical)', level: 9, description: '狂暴时暴击额外增加1个伤害骰（1d6）。' },
            { name: '坚韧狂暴 (Relentless Rage)', level: 11, description: '狂暴时，如果你降至0生命值但未直接死亡，可以进行DC10的体质豁免，成功则改为降至1点生命值。每次使用后DC增加5。' },
            { name: '持久狂暴 (Persistent Rage)', level: 15, description: '狂暴现在只需在回合开始时选择是否维持，不会因未攻击或未受伤害而提前结束。' },
            { name: '不屈勇武 (Indomitable Might)', level: 18, description: '若力量检定结果低于力量值，可直接使用力量值代替。' },
            { name: '原初斗士 (Primal Champion)', level: 20, description: '力量和体质+4（上限24）；狂暴时获得+4AC。' }
        ],
        spellcasting: false,
        resourcePool: {
            name: '狂暴次数 (Rage)',
            levels: { 1: 2, 2: 2, 3: 3, 4: 3, 5: 3, 6: 4, 7: 4, 8: 4, 9: 4, 10: 4, 11: 4, 12: 5, 13: 5, 14: 5, 15: 5, 16: 5, 17: 6, 18: 6, 19: 6, 20: '无限' }
        }
    },
    bard: {
        name: '吟游诗人',
        description: '吟游诗人是使用音乐和魔法的多才多艺的艺人，能激励盟友并削弱敌人。他们通过艺术来操纵魔法能量。',
        hitDice: 8,
        primaryAbility: '魅力',
        savingThrows: ['敏捷', '魅力'],
        armorProficiencies: ['轻甲'],
        weaponProficiencies: ['简易武器', '手弩', '长剑', '刺剑', '短剑'],
        tools: ['乐器'],
        skills: ['所有技能'],
        skillCount: 3,
        features: [
            { name: '施法 (Spellcasting)', level: 1, description: '使用魅力施放奥术魔法。法术位为完整施法者进度。' },
            { name: '吟游激励 (Bardic Inspiration, d6)', level: 1, description: '短休后恢复，可用反应给予60尺内生物一个d6，用于攻击、豁免或能力检定，10分钟内可用。5级时d8，9级时d10，13级时d12。' },
            { name: '万事通 (Jack of All Trades)', level: 2, description: '无熟练的技能检定获得半数熟练加值（向下取整）。' },
            { name: '休憩曲 (Song of Rest, d6)', level: 2, description: '短休时演奏音乐，恢复生命值的生物额外恢复1d6生命值。' },
            { name: '吟游诗人学院 (Bard College)', level: 3, description: '选择一所吟游诗人学院（子职业），获得相应能力。' },
            { name: '专精 (Expertise)', level: 3, description: '选择2项已熟练的技能或工具，熟练加值翻倍。10级时可再选择2项。' },
            { name: '激励之源 (Font of Inspiration)', level: 5, description: '现在，当你完成一次短休或长休时，你重获所有已消耗的诗人激励使用次数。此外，你可以消耗一个法术位（无需动作）来重获一次已消耗的诗人激励使用次数。' },
            { name: '反迷惑 (Countercharm)', level: 7, description: '你可以用带有力量的音符或话语来干扰影响心灵的效应。若你或位于你30尺内的一名生物在对抗施加魅惑或恐慌状态的效应的豁免检定中失败，你能够以反应令其重骰这次豁免，这次重骰具有优势。' },
            { name: '魔法奥秘 (Magical Secrets)', level: 10, description: '你自各种魔法传说中习得了他们的奥秘。每当你到达一个吟游诗人特性表中准备法术数量有所增加的吟游诗人等级时（包括此等级），你可以从吟游诗人、牧师、德鲁伊和法师的法术列表中选择法术准备（这些职业的法术列表见其职业章节），这些法术对你而言都视作吟游诗人法术。此外，每当你替换本职业的准备法术时，你也可以从这些法术列表中选择替换。' },
            { name: '先发激励 (Superior Inspiration)', level: 18, description: '当你投掷先攻时，若你的诗人激励使用次数不足两次，你重获已消耗的诗人激励使用次数到两次为止。' },
            { name: '传奇恩惠 (Epic Boon)', level: 19, description: '你获得一项传奇恩惠专长（见第五章）或其他一项你选择的适用的专长。推荐选择法术溯回之恩惠。' },
            { name: '创生圣言 (Words of Creation)', level: 20, description: '你掌握了创生圣言的其中两字："生"与"死"。因此，你始终准备着法术律令医疗和律令死亡。当你施展这两道法术时，你可以选择第二个生物作为目标，那名生物必须位于第一个目标10尺内。', grantsSpells: { level9: [{ name: '律令医疗', levelRequired: 20, alwaysPrepared: true, ability: '魅力' }, { name: '律令死亡', levelRequired: 20, alwaysPrepared: true, ability: '魅力' }] } }
        ],
        spellcasting: true,
        spellAbility: '魅力',
        resourcePool: {
            name: '吟游激励 (Bardic Inspiration)',
            levels: { 1: '魅力调整值', 2: '魅力调整值', 3: '魅力调整值', 4: '魅力调整值', 5: '魅力调整值', 6: '魅力调整值', 7: '魅力调整值', 8: '魅力调整值', 9: '魅力调整值', 10: '魅力调整值', 11: '魅力调整值', 12: '魅力调整值', 13: '魅力调整值', 14: '魅力调整值', 15: '魅力调整值', 16: '魅力调整值', 17: '魅力调整值', 18: '魅力调整值', 19: '魅力调整值', 20: '魅力调整值' }
        }
    },
    cleric: {
        name: '牧师',
        description: '牧师是神圣魔法的施法者，与神祇建立联系，治疗盟友并驱散亡灵。他们是神祇在世间的代理人。',
        hitDice: 8,
        primaryAbility: '感知',
        savingThrows: ['感知', '魅力'],
        armorProficiencies: ['轻甲', '中甲', '盾牌'],
        weaponProficiencies: ['简易武器'],
        skills: ['历史', '洞悉', '医药', '游说', '宗教'],
        skillCount: 2,
        features: [
            { name: '施法 (Spellcasting)', level: 1, description: '使用感知施放神圣魔法。法术位为完整施法者进度，可准备法术。' },
            { name: '神圣领域 (Divine Domain)', level: 1, description: '选择一个神圣领域（子职业），获得领域法术和特性。' },
            { name: '引导神力 (Channel Divinity, 1次/短休)', level: 2, description: '短休后恢复，获得领域特定的引导神力选项。6级时2次，18级时3次。' },
            { name: '摧毁不死生物 (Destroy Undead, CR 1/2)', level: 5, description: '引导神力驱散不死生物时，CR 1/2或更低的不死生物直接被摧毁。8级CR 1，11级CR 2，14级CR 3，17级CR 4。' },
            { name: '受祝击 (Blessed Strikes)', level: 7, description: '神圣的力量在战斗中注入你。你从以下特性中选择其一获得：神圣打击（每个你的回合一次，当你使用武器的攻击命中了一名生物时，你可以使该生物额外受到1d8点暗蚀伤害或光耀伤害）；强力施法（你将你的感知调整值加到你用任何牧师戏法造成的伤害上）。' },
            { name: '神圣干预 (Divine Intervention)', level: 10, description: '可请求神祇直接干预，成功率等于牧师等级百分比，成功后7天内无法再次使用。' },
            { name: '精通受祝击 (Improved Blessed Strike)', level: 14, description: '你所选择的受祝击变得更加强大。神圣打击：神圣打击的额外伤害提升至2d8。强力施法：当你施展一道牧师戏法并用它对一个生物造成伤害时，你可以为你自己或你60尺内的另一个生物注入活力，使其获得等同于你感知调整值两倍的临时生命值。' },
            { name: '传奇恩惠 (Epic Boon)', level: 19, description: '你获得一项传奇恩惠专长（见第五章）或其他一项你选择的适用的专长。推荐选择扭曲命运之恩惠。' },
            { name: '神圣干预提升 (Improved Divine Intervention)', level: 20, description: '神圣干预自动成功。' }
        ],
        spellcasting: true,
        spellAbility: '感知',
        resourcePool: {
            name: '引导神力 (Channel Divinity)',
            levels: { 1: 0, 2: 1, 3: 1, 4: 1, 5: 1, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2, 18: 3, 19: 3, 20: 3 }
        }
    },
    druid: {
        name: '德鲁伊',
        description: '德鲁伊是自然力量的化身，能变形为野兽并操纵自然元素。他们是自然的守护者和平衡者。',
        hitDice: 8,
        primaryAbility: '感知',
        savingThrows: ['智力', '感知'],
        armorProficiencies: ['轻甲', '中甲', '盾牌'],
        weaponProficiencies: ['短棒', '匕首', '飞镖', '标枪', '硬头锤', '长棍', '弯刀'],
        tools: ['草药工具'],
        skills: ['奥秘', '驯兽', '洞悉', '医药', '自然', '察觉', '宗教', '生存'],
        skillCount: 2,
        features: [
            { name: '施法 (Spellcasting)', level: 1, description: '使用感知施放神圣魔法。法术位为完整施法者进度，可准备法术。' },
            { name: '德鲁伊语 (Druidic)', level: 1, description: '学会德鲁伊秘密语言，可留下隐藏信息。' },
            { name: '荒野形态 (Wild Shape)', level: 2, description: '变形为CR 1/4或更低（无飞行/游泳）的野兽，持续小时数等于一半德鲁伊等级（向下取整）。' },
            { name: '荒野伙伴 (Wild Companion)', level: 2, description: '你可以召唤出一个动物外形的自然精魂来帮助自己。以一个魔法动作，你可以消耗一个法术位或一次荒野变形次数来施展寻获魔宠法术，无需任何材料成分。当你以这种方式施展这一法术时，获得的魔宠为妖精，并且它会在你完成一次长休时消失。', grantsSpells: { level1: [{ name: '寻获魔宠', levelRequired: 2, freeCast: { count: '法术位或荒野变形次数', reset: '长休' }, ability: '感知' }] } },
            { name: '德鲁伊子职 (Druid Subclass)', level: 3, description: '你选择获得一项德鲁伊子职：大地结社、月亮结社、海洋结社或星辰结社。子职是一种特化，在特定的德鲁伊等级给予你对应的独特能力。德鲁伊们会形成松散的联系，他们称之为"结社"。' },
            { name: '属性值提升 (Ability Score Improvement)', level: 4, description: '你获得属性值提升专长或其他你满足条件的专长。你还会在第8、第12、第16级时再次获得本特性。' },
            { name: '荒野形态提升 (CR 1/2)', level: 4, description: '可变形为CR 1/2或更低，可游泳。' },
            { name: '荒野复苏 (Wild Resurgence)', level: 5, description: '每个你的回合内一次，如果你没有荒野变形使用次数，你可以消耗一个法术位（无需动作）让自己获得一次荒野变形次数。此外，你可以消耗一次荒野变形使用次数（无需动作）来令自己获得一个一环法术位，然后直至完成长休你都无法再如此做。' },
            { name: '荒野形态提升 (CR 1)', level: 8, description: '可变形为CR 1或更低，可飞行。' },
            { name: '元素之怒 (Elemental Fury)', level: 7, description: '元素之力在你的身体里流淌。你获得以下一个你选择的特性：强力施法（你以任何德鲁伊戏法造成的伤害上都可以加上你的感知调整值）；原力蛮击（每个你的回合内一次，当你以一次武器攻击或荒野变形中野兽形态的攻击命中一名生物时，你可以对目标额外造成1d8寒冷、火焰、闪电或雷鸣伤害）。' },
            { name: '元素狂怒 (Improved Elemental Fury)', level: 15, description: '你选择的元素之怒特性变得愈发强大。强力施法：当你施展一道施法距离为10尺或更高的德鲁伊戏法时，法术施法距离提升300尺。原力蛮击：原力蛮击的额外伤害提升至2d8。' },
            { name: '不朽身 (Timeless Body)', level: 18, description: '不因衰老而减少属性值，无法被魔法衰老。' },
            { name: '兽形施法 (Beast Spells)', level: 18, description: '你可以在任何荒野变形下施法。当一个法术需要标有价值的材料成分或需要消耗材料成分时，你无法在荒野变形下施展。' },
            { name: '传奇恩惠 (Epic Boon)', level: 19, description: '你获得一项传奇恩惠专长（见第五章）或其他一项你选择的适用的专长。推荐选择次元旅行之恩惠。' },
            { name: '大德鲁伊 (Archdruid)', level: 20, description: '自然的活力在你的身上永不凋零，令你获得以下增益：不凋化形（当你投掷先攻时，若你没有荒野变形的使用次数，你获得一次荒野变形使用次数）；自然术使（你可以将荒野变形使用次数转化为法术位，每个使用次数可以转为2个法术环阶，此增益一经使用，直至完成长休你都无法再次使用）；青春永驻（你行使的原力魔法让你的衰老速度减缓，每经过10年的岁月，你的身体就仿佛只过了1年）。' }
        ],
        spellcasting: true,
        spellAbility: '感知',
        resourcePool: {
            name: '荒野形态 (Wild Shape)',
            levels: { 1: 0, 2: '2次/短休', 3: '2次/短休', 4: '2次/短休', 5: '2次/短休', 6: '2次/短休', 7: '2次/短休', 8: '2次/短休', 9: '2次/短休', 10: '2次/短休', 11: '2次/短休', 12: '2次/短休', 13: '2次/短休', 14: '2次/短休', 15: '2次/短休', 16: '2次/短休', 17: '2次/短休', 18: '2次/短休', 19: '2次/短休', 20: '无限' }
        }
    },
    fighter: {
        name: '战士',
        description: '战士是掌握各种武器和护甲的大师，是战场上的多面手。他们通过严格的训练来完善战斗技巧。',
        hitDice: 10,
        primaryAbility: '力量或敏捷',
        savingThrows: ['力量', '体质'],
        armorProficiencies: ['所有护甲', '盾牌'],
        weaponProficiencies: ['简易武器', '军用武器'],
        skills: ['驯兽', '运动', '威吓', '洞悉', '察觉', '生存'],
        skillCount: 2,
        features: [
            { name: '战斗风格 (Fighting Style)', level: 1, description: '选择一种战斗风格：箭术、防御、对决、双武器战斗、守护、重武器攻击。' },
            { name: '回气 (Second Wind)', level: 1, description: '可用附赠动作恢复1d10+战士等级生命值，短休或长休后恢复。' },
            { name: '动作如潮 (Action Surge, 1次)', level: 2, description: '在自己回合内多进行一次动作和附赠动作，短休或长休后恢复。17级时可使用两次。' },
            { name: '武术范型 (Martial Archetype)', level: 3, description: '选择一个战士子职业，获得特定能力。' },
            { name: '额外攻击 (Extra Attack, 1次)', level: 5, description: '攻击动作时可进行两次攻击。11级时3次，20级时4次。' },
            { name: '战术转进 (Tactical Shift)', level: 5, description: '每当你使用附赠动作进行回气时，你可以移动至多相当于你速度一半的距离，且不会引发借机攻击。' },
            { name: '不屈 (Indomitable, 1次)', level: 9, description: '豁免失败时可重骰，长休后恢复。13级时2次，17级时3次。' },
            { name: '战术主宰 (Tactical Master)', level: 9, description: '每当你用武器发动攻击，且你可以使用此武器的精通词条时，你可以将此次攻击的精通词条改为推离、削弱或缓速中的一种。' },
            { name: '额外攻击（二）(Two Extra Attacks)', level: 11, description: '你在自己回合内执行攻击动作时，可以发动三次攻击而非一次。' },
            { name: '究明攻击 (Studied Attacks)', level: 13, description: '你已深晓对手的一举一动，并且从每次攻击中吸取经验教训。如果你对一个生物进行攻击检定但失手，那么直到你的下个回合结束前，你对其的下次攻击检定具有优势。' },
            { name: '传奇恩惠 (Epic Boon)', level: 19, description: '你获得一项传奇恩惠专长（见第五章）或其他一项你选择的适用的专长。推荐选择英勇战斗之恩惠。' },
            { name: '额外攻击（三）(Three Extra Attacks)', level: 20, description: '你在自己回合内执行攻击动作时，可以发动四次攻击而非一次。' }
        ],
        spellcasting: false,
        resourcePool: {
            name: '动作如潮/不屈 (Action Surge/Indomitable)',
            levels: { 1: 0, 2: '1/0', 3: '1/0', 4: '1/0', 5: '1/0', 6: '1/0', 7: '1/0', 8: '1/0', 9: '1/1', 10: '1/1', 11: '1/1', 12: '1/1', 13: '1/2', 14: '1/2', 15: '1/2', 16: '1/2', 17: '2/3', 18: '2/3', 19: '2/3', 20: '2/3' }
        }
    },
    monk: {
        name: '武僧',
        description: '武僧是通过修行掌握身体和精神的大师，以徒手格斗技巧闻名。他们使用气来施展超凡能力。',
        hitDice: 8,
        primaryAbility: '敏捷和感知',
        savingThrows: ['力量', '敏捷'],
        armorProficiencies: [],
        weaponProficiencies: ['简易武器', '短剑'],
        tools: ['一种工匠工具或乐器'],
        skills: ['体操', '运动', '历史', '洞悉', '宗教', '隐匿'],
        skillCount: 2,
        features: [
            { name: '无甲防御 (Unarmored Defense)', level: 1, description: '未着甲且未持盾时，AC = 10 + 敏捷调整值 + 感知调整值。' },
            { name: '武艺 (Martial Arts, d4)', level: 1, description: '徒手攻击和武僧武器伤害骰为d4，可用敏捷代替力量进行攻击和伤害检定，附赠动作可进行徒手攻击。' },
            { name: '气 (Ki)', level: 2, description: '获得气点数，用于施展气能力，短休或长休后恢复。气点数等于武僧等级。' },
            { name: '无甲移动 (Unarmored Movement, +10尺)', level: 2, description: '未着甲且未持盾时，速度+10尺。6级时+15，10级时+20，14级时+25，18级时+30。' },
            { name: '疾风连击 (Flurry of Blows)', level: 2, description: '攻击动作后可消耗1气，用附赠动作进行两次徒手攻击。' },
            { name: '步若疾风 (Step of the Wind)', level: 2, description: '消耗1气，执行疾走或撤离动作，垂直跳跃不消耗额外移动力。' },
            { name: '武僧宗派 (Monastic Tradition)', level: 3, description: '选择一个武僧宗派（子职业），获得特定能力。' },
            { name: '拨挡攻击 (Deflect Attacks)', level: 3, description: '当你被一次伤害中包含钝击、穿刺或挥砍伤害的攻击检定命中时，你可以执行反应减少此次攻击对你造成伤害的总值，减值等于1d10+你的敏捷调整值+你的武僧等级。若被拨挡攻击的伤害减少至0，则你可以消耗1点气将此次攻击的部分伤害重新定向。如果是近战攻击，选择你周围5尺内的一个你可见的生物；如果是远程攻击，选择60尺内一个不位于全身掩护后的你可见的生物。该生物必须成功通过一次敏捷豁免，否则受到相当于你2个武艺骰+你的敏捷调整值的伤害。其伤害类型与原先攻击的伤害类型相同。' },
            { name: '偏转飞弹 (Deflect Missiles)', level: 3, description: '反应减少远程武器伤害，若降至0可花费1气反射，伤害为1d4+敏捷调整值+武僧等级。' },
            { name: '专用武器 (Dedicated Weapon)', level: 2, description: '完成短休或长休时，可碰触一件简易武器或军用武器（非重型或特殊），将其视为武僧武器，直到再次使用此能力。' },
            { name: '轻身坠 (Slow Fall)', level: 4, description: '反应减少坠落伤害，每武僧等级5点。' },
            { name: '额外攻击 (Extra Attack)', level: 5, description: '攻击动作时可进行两次攻击。' },
            { name: '震慑拳 (Stunning Strike)', level: 5, description: '命中生物时可花费1气让其进行体质豁免，失败则震慑至你的下一回合结束。' },
            { name: '武艺 (Martial Arts, d6)', level: 5, description: '伤害骰提升至d6。' },
            { name: '御气以击 (Ki-Fueled Attack)', level: 3, description: '在你的回合中执行动作时花费了1点或更多的气，则你可以在回合结束前用一个附赠动作以徒手打击或武僧武器进行一次攻击。' },
            { name: '气御击 (Ki-Empowered Strikes)', level: 6, description: '徒手攻击和武僧武器视为魔法武器。' },
            { name: '加速愈合 (Quickened Healing)', level: 4, description: '以一个动作，你能消耗2点气并且投掷一粒武艺骰，你恢复等同于掷骰结果加上你的熟练加值的生命值。' },
            { name: '反射闪避 (Evasion)', level: 7, description: '敏捷豁免成功不受伤害，失败只受一半伤害。' },
            { name: '心如止水 (Stillness of Mind)', level: 7, description: '动作结束魅惑或恐慌效果。' },
            { name: '凝神聚气 (Focused Aim)', level: 5, description: '当你攻击检定未命中时，你可以花费1到3点气来使该次攻击检定获得加值，每点气的消耗能获得+2加值，这可能会使原本的未命中改为命中。' },
            { name: '无甲移动(墙上行)', level: 10, description: '未着甲且未持盾时，可垂直移动和在水面上移动。' },
            { name: '百病不侵 (Purity of Body)', level: 10, description: '免疫疾病和毒素。' },
            { name: '武艺 (Martial Arts, d8)', level: 11, description: '伤害骰提升至d8。' },
            { name: '金刚魂 (Diamond Soul)', level: 14, description: '所有豁免熟练，花费1气可重骰失败的豁免。' },
            { name: '不朽身 (Timeless Body)', level: 15, description: '不因衰老减少属性，无法被魔法衰老，不需要食物和水。' },
            { name: '武艺 (Martial Arts, d10)', level: 17, description: '伤害骰提升至d10。' },
            { name: '空体 (Empty Body)', level: 18, description: '花费4气施展隐形术和次元门。' },
            { name: '超凡入圣 (Perfect Self)', level: 20, description: '先攻检定时若无气点数，获得4气。' }
        ],
        spellcasting: false,
        resourcePool: {
            name: '气 (Ki)',
            levels: { 1: 0, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20 }
        }
    },
    paladin: {
        name: '圣武士',
        description: '圣武士是神圣的战士，以誓言约束自己，结合战斗能力和治疗魔法。他们是正义和秩序的守护者。',
        hitDice: 10,
        primaryAbility: '力量和魅力',
        savingThrows: ['智慧', '魅力'],
        armorProficiencies: ['所有护甲', '盾牌'],
        weaponProficiencies: ['简易武器', '军用武器'],
        skills: ['运动', '洞悉', '威吓', '医药', '游说', '宗教'],
        skillCount: 2,
        features: [
            { name: '神圣感知 (Divine Sense)', level: 1, description: '动作感知60尺内天界、邪魔、亡灵，穿透障碍。' },
            { name: '治愈光辉 (Lay on Hands)', level: 1, description: '拥有治疗池（5×圣武士等级），动作触碰恢复生命值或治愈疾病/毒素，长休后恢复。' },
            { name: '战斗风格 (Fighting Style)', level: 2, description: '选择一种战斗风格。' },
            { name: '施法 (Spellcasting)', level: 2, description: '半施法者进度，使用魅力施法，准备法术。' },
            { name: '神圣打击 (Divine Smite)', level: 2, description: '命中生物时可花费法术位附加2d8光耀伤害（邪魔/亡灵额外1d8）。' },
            { name: '神圣誓言 (Sacred Oath)', level: 3, description: '选择神圣誓言，获得誓言法术和引导神力。' },
            { name: '引导神力 (Channel Divinity)', level: 3, description: '短休或长休后恢复，获得誓言特定的引导神力选项。' },
            { name: '神力掌控 (Harness Divine Power)', level: 3, description: '以一个附赠动作，触碰圣徽进行祈祷，恢复一枚环阶不超过你熟练加值的一半（向上取整）的法术位。3级1次，7级2次，15级3次，长休后恢复。' },
            { name: '额外攻击 (Extra Attack)', level: 5, description: '攻击动作时可进行两次攻击。' },
            { name: '信实坐骑 (Faithful Steed)', level: 5, description: '你能唤来异界坐骑的协助。你始终准备着法术寻获坐骑。此外，你可以不消耗法术位地施展该法术一次，而后你必须完成一次长休才能再次这么做。', grantsSpells: { level2: [{ name: '寻获坐骑', levelRequired: 5, alwaysPrepared: true, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } },
            { name: '守护灵光 (Aura of Protection)', level: 6, description: '你和10尺内友军豁免可加上你的魅力调整值。' },
            { name: '勇气灵光 (Aura of Courage)', level: 10, description: '你和10尺内友军免疫恐慌。' },
            { name: '精通神圣打击 (Improved Divine Smite)', level: 11, description: '所有近战武器攻击额外造成1d8光耀伤害。' },
            { name: '净化之触 (Cleansing Touch)', level: 14, description: '可结束一个法术效果，次数等于魅力调整值（最少1次），长休后恢复。' },
            { name: '复原之触 (Restoring Touch)', level: 14, description: '当你对一个生物使用圣疗时，你可以终止该生物身上以下一种或更多种类的状态：目盲、魅惑、耳聋、恐慌、麻痹或震慑。你每终止一个状态，都需要花费圣疗的5点治疗能量；这些治疗能量不会恢复该生物的生命值。' },
            { name: '灵光提升(30尺)', level: 18, description: '灵光范围扩大至30尺。' },
            { name: '传奇恩惠 (Epic Boon)', level: 19, description: '你获得一项传奇恩惠专长（见第五章）或其他一项你选择的适用的专长。推荐选择真实视觉之恩惠。' }
        ],
        spellcasting: true,
        spellAbility: '魅力',
        resourcePool: {
            name: '圣疗 (Lay on Hands)',
            levels: { 1: 0, 2: 10, 3: 15, 4: 20, 5: 25, 6: 30, 7: 35, 8: 40, 9: 45, 10: 50, 11: 55, 12: 60, 13: 65, 14: 70, 15: 75, 16: 80, 17: 85, 18: 90, 19: 95, 20: 100 }
        }
    },
    ranger: {
        name: '游侠',
        description: '游侠是荒野的守护者，精通追踪、狩猎和自然魔法。他们是森林和荒野的守护者。',
        hitDice: 10,
        primaryAbility: '敏捷和感知',
        savingThrows: ['力量', '敏捷'],
        armorProficiencies: ['轻甲', '中甲', '盾牌'],
        weaponProficiencies: ['简易武器', '军用武器'],
        skills: ['驯兽', '运动', '洞悉', '调查', '自然', '察觉', '隐匿', '生存'],
        skillCount: 3,
        features: [
            { name: '施法 (Spellcasting)', level: 1, description: '你学会运用自然世界的魔法本源进行施法。法术位：游侠特性表显示了你可用于施展一环及以上法术的法术位数量，完成长休时恢复。一环及以上的准备法术：你准备可供你施展的一环及更高环阶的法术列表。最初选择两道游侠法术，推荐选择捕获打击和疗伤术。已准备法术数量会随你游侠等级的提升而增加。如果游侠的其他特性给了你始终准备着的法术，这些法术不计入你准备的法术数量。改变你的准备法术：每当你完成一次长休时，你可以将你准备列表上的一道法术替换为其他游侠法术。施法属性：感知。施法法器：可以使用德鲁伊法器。' },
            { name: '宿敌 (Favored Enemy)', level: 1, description: '你始终准备着法术猎人印记。你可以无需法术位地施展此法术共计两次，并在完成一次长休后恢复此能力的所有使用次数。你能无需法术位施展该法术的次数会在你获得特定游侠等级时提升。', grantsSpells: { level1: [{ name: '猎人印记', levelRequired: 1, alwaysPrepared: true, freeCast: { count: 2, reset: '长休' }, ability: '感知' }] } },
            { name: '武器精通 (Weapon Mastery)', level: 1, description: '你对武器的训练使你能够自选并使用2种已熟练武器的精通词条。当你完成一次长休时，你可以改变你所选择的武器类型。' },
            { name: '熟练探险家 (Deft Explorer)', level: 2, description: '得益于你的旅途，你获得以下增益：专精（选择一项你熟练但不具备专精的技能，你在那个技能上获得专精）；语言（你习得两门语言）。' },
            { name: '战斗风格 (Fighting Style)', level: 2, description: '你获得一项战斗风格专长，你也可以选择以下选项：德鲁伊教战士（你习得两道你选择的德鲁伊戏法，推荐选取神导术和点点星芒，它们对你视作游侠法术，施法属性是感知。每当你获得一个游侠等级时，你都能从这些戏法中选择其一替换为另一道德鲁伊戏法）。' },
            { name: '游侠子职 (Ranger Subclass)', level: 3, description: '你选择获得一项游侠子职：驯兽师、妖精漫游者、幽域追猎者或猎人。子职是一种特化，在特定的游侠等级给予你对应的独特能力。此后你将获得你所选的子职所有能力——只要其所需等级不超过你的游侠等级。' },
            { name: '属性值提升 (Ability Score Improvement)', level: 4, description: '你获得属性值提升专长或其他你满足条件的专长。你还会在你的游侠等级达到第8、第12和第16级时再次获得本特性。' },
            { name: '额外攻击 (Extra Attack)', level: 5, description: '你在自己回合内执行攻击动作时，可以发动两次攻击而非一次。' },
            { name: '越野 (Roving)', level: 6, description: '只要你未着装重甲，你的速度提升10尺。你也获得等于你速度的攀爬速度和游泳速度。' },
            { name: '专精 (Expertise)', level: 9, description: '选择两项你熟练但不具备专精的技能，你获得这些技能的专精。' },
            { name: '不知疲倦 (Tireless)', level: 10, description: '原初的力量现在会帮你重整旗鼓，重新踏上旅途。临时生命值（以一个魔法动作，你能够给予自己1d8+你的感知调整值的临时生命值，使用次数等于感知调整值，完成长休时恢复）；减少力竭（当你完成一次短休时，你的力竭等级减少1级）。' },
            { name: '永恒追猎 (Relentless Hunter)', level: 13, description: '受到伤害不会打断你对猎人印记的专注。' },
            { name: '自然面纱 (Nature\'s Veil)', level: 14, description: '你祈唤自然精魂，魔法性地将身形遮蔽隐蔽。以一个附赠动作，你可以让自己进入隐形状态，持续到你的下一回合结束。使用次数等于感知调整值，完成长休时恢复。' },
            { name: '致命猎杀 (Precise Hunter)', level: 17, description: '你在对你的猎人印记当前指定的目标的攻击检定中具有优势。' },
            { name: '野性感官 (Feral Senses)', level: 18, description: '你与自然的链接给予了你30尺盲视。' },
            { name: '传奇恩惠 (Epic Boon)', level: 19, description: '你获得一项传奇恩惠专长（见第五章）或其他一项你选择的适用的专长。推荐选择次元旅行之恩惠。' },
            { name: '屠灭众敌 (Foe Slayer)', level: 20, description: '你的猎人印记的额外伤害骰从d6变为d10。' }
        ],
        spellcasting: true,
        spellAbility: '感知'
    },
    rogue: {
        name: '游荡者',
        description: '游荡者是潜行和诡计的大师，依靠敏捷和机智生存。他们是阴影中的专家，擅长偷袭和开锁。',
        hitDice: 8,
        primaryAbility: '敏捷',
        savingThrows: ['敏捷', '智力'],
        armorProficiencies: ['轻甲'],
        weaponProficiencies: ['简易武器', '手弩', '长剑', '刺剑', '短剑'],
        tools: ['盗贼工具'],
        skills: ['体操', '运动', '欺瞒', '洞悉', '威吓', '调查', '察觉', '表演', '游说', '巧手', '隐匿'],
        skillCount: 4,
        features: [
            { name: '专精 (Expertise, 2项)', level: 1, description: '选择2项已熟练的技能或盗贼工具，熟练加值翻倍。' },
            { name: '偷袭 (Sneak Attack, 1d6)', level: 1, description: '每回合一次，finesse或远程武器攻击命中时附加伤害，条件：优势攻击或目标5尺内有其他敌对生物且你无劣势。伤害随等级提升。' },
            { name: '盗贼黑话 (Thieves\' Cant)', level: 1, description: '学会秘密语言和密符。' },
            { name: '狡猾行动 (Cunning Action)', level: 2, description: 'bonus action可进行疾走、撤离或隐匿。' },
            { name: '游荡者范型 (Roguish Archetype)', level: 3, description: '选择游荡者范型，获得特定能力。' },
            { name: '反射闪避 (Uncanny Dodge)', level: 5, description: '反应让攻击伤害减半。' },
            { name: '可靠才能 (Reliable Talent)', level: 7, description: '熟练的技能检定掷出9或更低视为10。' },
            { name: '进阶诡诈打击 (Improved Cunning Strike)', level: 11, description: '你在造成偷袭伤害时可以一次性选用两种诡诈打击效果，每种效果都需要独立扣除对应的偷袭伤害骰。' },
            { name: '凶狡打击 (Devious Strike)', level: 14, description: '你习得了新的偷袭方法，使你的偷袭变得更为凶狠卑劣。下列效果现在加入你的诡诈打击选项：恍惚（花费2d6，目标必须成功通过一次体质豁免，否则该目标的下一回合只能选择移动、执行一个动作或执行一个附赠动作中的一项）；击昏（花费6d6，目标必须成功通过一次体质豁免，否则将陷入昏迷状态，持续一分钟或受到任何伤害，昏迷的目标每在自己的回合结束时都可以重新进行豁免）；眩目（花费3d6，目标必须成功通过一次敏捷豁免，否则将陷入目盲状态，直到其下个回合结束）。' },
            { name: '圆滑心智 (Slippery Mind)', level: 15, description: '你狡猾的头脑很难被人控制。你获得感知豁免与魅力豁免的熟练。' },
            { name: '飘忽不定 (Elusive)', level: 18, description: '你飘忽不定的身形让敌人攻击时无从下手。只要你并未失能，以你为目标的攻击检定无法具有优势。' },
            { name: '传奇恩惠 (Epic Boon)', level: 19, description: '你获得一项传奇恩惠专长（见第五章）或其他一项你选择的适用的专长。推荐选择暗夜精魂之恩惠。' },
            { name: '幸运一击 (Stroke of Luck)', level: 20, description: '你留了一手非凡技巧，让你可以随时把握自己的成功之际。当你在一次D20检定中失败时，你可以将骰值改为20。此特性一经使用，直至完成短休或长休你都无法再次使用。' }
        ],
        spellcasting: false
    },
    sorcerer: {
        name: '术士',
        description: '术士天生具有魔法力量，通过血脉或特殊事件获得施法能力。他们的魔法来自内在的力量。',
        hitDice: 6,
        primaryAbility: '魅力',
        savingThrows: ['体质', '魅力'],
        armorProficiencies: [],
        weaponProficiencies: ['匕首', '飞镖', '投石索', '长棍'],
        skills: ['奥秘', '欺瞒', '洞悉', '威吓', '游说', '宗教'],
        skillCount: 2,
        features: [
            { name: '施法 (Spellcasting)', level: 1, description: '使用魅力施法，法术位为完整施法者进度，知晓有限法术但可随意选择。' },
            { name: '术法起源 (Sorcerous Origin)', level: 1, description: '选择术法起源，获得特定能力。' },
            { name: '术法点 (Sorcery Points, 2点)', level: 2, description: '用于创造法术位或施展元魔法，短休或长休后恢复。' },
            { name: '灵活施法 (Flexible Casting)', level: 2, description: '可将术法点转化为法术位，或将法术位转化为术法点。' },
            { name: '元魔法 (Metamagic, 2个)', level: 3, description: '选择2种元魔法：Careful Spell、Distant Spell、Empowered Spell、Extended Spell、Heightened Spell、Quickened Spell、Subtle Spell、Twinned Spell。10级和17级时再各选1个。' },
            { name: '术法复苏 (Sorcerous Restoration)', level: 5, description: '当你完成一次短休时，你可以恢复不大于你术士等级一半（向下取整）的已消耗术法点。此特性一经使用，直到你完成一次长休为止不能再次使用。' },
            { name: '术法化身 (Sorcery Incarnate)', level: 7, description: '如果你的先天术法特性的使用次数耗尽，则你仍可以消耗2点术法点来用附赠动作继续激活该特性。此外，在你的先天术法特性处于激活状态期间，你可以在你施展的每道法术上应用最多两次超魔法选项。' },
            { name: '术法复原 (Sorcerous Restoration)', level: 20, description: '短休时恢复4术法点。' }
        ],
        spellcasting: true,
        spellAbility: '魅力',
        resourcePool: {
            name: '术法点 (Sorcery Points)',
            levels: { 1: 0, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20 }
        }
    },
    warlock: {
        name: '邪术师',
        description: '邪术师通过与强大存在的契约获得魔法力量。他们从异界存在那里获得力量，使用独特的契约魔法和魔能祈唤。',
        hitDice: 8,
        primaryAbility: '魅力',
        savingThrows: ['智慧', '魅力'],
        armorProficiencies: ['轻甲'],
        weaponProficiencies: ['简易武器'],
        skills: ['奥秘', '欺瞒', '历史', '威吓', '调查', '自然', '宗教'],
        skillCount: 2,
        features: [
            { name: '异界宗主 (Otherworldly Patron)', level: 1, description: '选择异界宗主（邪魔、旧日支配者、至高妖精、咒剑、天界等），获得特定能力和扩展法术列表。' },
            { name: '契约魔法 (Pact Magic)', level: 1, description: '使用魅力施法，法术位为契约魔法进度。1-2级：1个1环；3-4级：2个2环；5-6级：2个3环；7-8级：2个4环；9-20级：2个5环。短休或长休后恢复，所有法术位为最高环阶。' },
            { name: '魔能祈唤 (Eldritch Invocations, 2个)', level: 2, description: '学习2个魔能祈唤获得特殊能力，5级时3个，7级时4个，9级时5个，12级时6个，15级时7个，18级时8个。每次升级可更换一个祈唤。' },
            { name: '契约恩赐 (Pact Boon)', level: 3, description: '选择契约恩赐：链之魔契（获得魔宠，可攻击和传送）、刃之魔契（契约武器，魅力调整值加伤害，可召唤）、书之魔契（获得影之书和三本仪式法术书）。', requiresChoice: true, choiceType: 'pact_boon' },
            { name: '属性值提升 (Ability Score Improvement)', level: 4, description: '4、8、12、16、19级时提升一项属性2点或两项属性各1点（上限20）。' },
            { name: '秘法奥秘 (Mystic Arcanum, 6环)', level: 11, description: '从任意职业法术列表中选择一个6环法术，每日可使用1次。13级获得7环，15级获得8环，17级获得9环。' },
            { name: '艾尔德瑞克大师 (Eldritch Master)', level: 20, description: '花费1分钟恢复所有契约法术位，长休前无法再次使用。' }
        ],
        pactBoons: [
            { key: 'chain', name: '链之魔契 (Pact of the Chain)', description: '你习得寻找魔宠法术，并能以一个仪式施展之。当你以此法施展该法术时，你能选择的魔宠种类包括普通选项以及伪龙、夸塞魔、小恶魔和妖精龙。此外，当你进行攻击动作时，你能放弃一次攻击来让你的魔宠以其反应进行攻击。' },
            { key: 'blade', name: '刃之魔契 (Pact of the Blade)', description: '你能以一个动作在空的手中创造契约武器。你熟练于该武器，且该武器视为魔法武器，在克服对非魔法攻击和伤害的抗性和免疫时视为魔法武器。你的契约武器在离开你的手后1分钟或你再次使用该特性、你死亡、或你进行长休后消失。' },
            { key: 'tome', name: '书之魔契 (Pact of the Tome)', description: '你获得一本影之书，你可以从任意职业的法术列表中选择三个戏法记录在影之书中。只要影之书在你手中，你就可以随意施展这些戏法。它们不计入你的已知戏法数量，且视为邪术师戏法。' }
        ],
        eldritchInvocations: [
            { name: '苦痛魔爆 (Agonizing Blast)', level: 1, prerequisite: '魔能爆戏法', description: '施展魔能爆时加上魅力调整值伤害。' },
            { name: '斥力魔爆 (Repelling Blast)', level: 1, prerequisite: '魔能爆戏法', description: '魔能爆命中时可将目标击退10尺。' },
            { name: '引力魔爆 (Grasp of Hadar)', level: 1, prerequisite: '魔能爆戏法', description: '魔能爆命中时可将目标拉近10尺。' },
            { name: '魔能之矛 (Eldritch Spear)', level: 1, prerequisite: '魔能爆戏法', description: '魔能爆射程变为300尺。' },
            { name: '链之魔契强化 (Investment of the Chain Master)', level: 1, prerequisite: '链之魔契', description: '魔宠获得飞行或游泳速度，AC+2，攻击可造成额外伤害，豁免使用你的豁免加值。' },
            { name: '刃之魔契强化 (Improved Pact Weapon)', level: 3, prerequisite: '刃之魔契', description: '契约武器视为+1魔法武器，可用作施法法器。' },
            { name: '饥渴之刃 (Thirsting Blade)', level: 5, prerequisite: '刃之魔契', description: '契约武器攻击动作可攻击两次。' },
            { name: '斩魔之刃 (Lifedrinker)', level: 12, prerequisite: '刃之魔契', description: '契约武器伤害加上魅力调整值（黯蚀伤害）。' },
            { name: '书之魔契强化 (Book of Ancient Secrets)', level: 3, prerequisite: '书之魔契', description: '可将任何仪式法术写入影之书，不限制职业。' },
            { name: '假面视界 (Mask of Many Faces)', level: 1, description: '可随意施展易容术。' },
            { name: '无声幻影 (Misty Visions)', level: 1, description: '可随意施展无声幻影。' },
            { name: '恶魔视界 (Devil\'s Sight)', level: 1, description: '120尺内魔法和非魔法黑暗对你无效。' },
            { name: '妖精之眼 (Gaze of Two Minds)', level: 1, description: '可与自愿生物建立感官链接。' },
            { name: '暗影护甲 (Armor of Shadows)', level: 1, description: '可随意施展法师护甲。' },
            { name: '虚假生命 (False Life)', level: 1, description: '可随意施展虚假生命（1环版本）。' },
            { name: '跳跃术 (Otherworldly Leap)', level: 1, description: '可随意施展跳跃术。' },
            { name: '无声脚步 (One with Shadows)', level: 5, description: '在微光或黑暗区域可变为隐形。' },
            { name: '误导 (Maddening Hex)', level: 5, prerequisite: '邪术师诅咒特性', description: '诅咒目标5尺内生物受到心灵伤害。' },
            { name: '暗影触 (Tomb of Levistus)', level: 5, description: '受到伤害时可用反应获得10×邪术师等级的临时生命值，被冰封至下一回合。' },
            { name: '元素抗性 (Elemental Resistance)', level: 1, description: '选择一种伤害类型获得抗性。' }
        ],
        spellcasting: true,
        spellAbility: '魅力',
        resourcePool: {
            name: '契约法术位 (Pact Magic Slots)',
            levels: { 1: '1个1环', 2: '2个1环', 3: '2个2环', 4: '2个2环', 5: '2个3环', 6: '2个3环', 7: '2个4环', 8: '2个4环', 9: '2个5环', 10: '2个5环', 11: '2个5环+1个6环', 12: '2个5环+1个6环', 13: '2个5环+1个6环+1个7环', 14: '2个5环+1个6环+1个7环', 15: '2个5环+1个6环+1个7环+1个8环', 16: '2个5环+1个6环+1个7环+1个8环', 17: '2个5环+1个6环+1个7环+1个8环+1个9环', 18: '2个5环+1个6环+1个7环+1个8环+1个9环', 19: '2个5环+1个6环+1个7环+1个8环+1个9环', 20: '2个5环+1个6环+1个7环+1个8环+1个9环' }
        }
    },
    wizard: {
        name: '法师',
        description: '法师通过学习和研究掌握奥术魔法，是知识渊博的施法者。他们是魔法的学者和研究者。',
        hitDice: 6,
        primaryAbility: '智力',
        savingThrows: ['智力', '感知'],
        armorProficiencies: [],
        weaponProficiencies: ['匕首', '飞镖', '投石索', '长棍', '轻弩'],
        skills: ['奥秘', '历史', '洞悉', '调查', '医药', '宗教'],
        skillCount: 2,
        features: [
            { name: '施法 (Spellcasting)', level: 1, description: '使用智力施法，法术位为完整施法者进度，通过法术书准备法术。' },
            { name: '法术书 (Spellbook)', level: 1, description: '记录已知法术，每级可抄写新法术，准备法术数量等于智力调整值+法师等级（最少1个）。' },
            { name: '仪式学家 (Ritual Adept)', level: 1, description: '你能以仪式施展你法术书中任何带有仪式标签的法术。你不需要准备这些法术，但你以此法施展法术时必须阅读这本书。' },
            { name: '奥术回想 (Arcane Recovery)', level: 1, description: '你学会了通过研读法术书来恢复魔法能量的办法。你完成一次短休后，可以选择恢复已消耗的法术位。所恢复的法术位环阶总和不得大于你法师等级的一半（向上取整），且任何一个法术位的环阶都必须小于六环。此特性一经使用，直至完成长休你都无法再次使用。' },
            { name: '学者 (Scholar)', level: 2, description: '在学习法术之余，你还对一门学术领域有过专门的研究。从下列技能中选择一项你具有熟练的技能：奥秘、历史、调查、医药、自然或宗教。你获得所选技能的专精。' },
            { name: '奥术传承 (Arcane Tradition)', level: 2, description: '选择法师学派，获得特定能力。' },
            { name: '记忆法术 (Memorize Spell)', level: 5, description: '每当你完成一次短休时，你可以研究你的法术书并且将其中一道你以施法特性准备的一环及以上的法术替换为你法术书中的另一道一环及以上的法术。' },
            { name: '法术精通 (Spell Mastery)', level: 18, description: '选择1个1环和1个2环法术，可随意施展最低环阶版本。' },
            { name: '招牌法术 (Signature Spell)', level: 20, description: '选择2个3环法术，可随意施展3环版本。' }
        ],
        spellcasting: true,
        spellAbility: '智力',
        resourcePool: {
            name: '奥术回想 (Arcane Recovery)',
            levels: { 1: '1次/日', 2: '1次/日', 3: '1次/日', 4: '1次/日', 5: '1次/日', 6: '1次/日', 7: '1次/日', 8: '1次/日', 9: '1次/日', 10: '1次/日', 11: '1次/日', 12: '1次/日', 13: '1次/日', 14: '1次/日', 15: '1次/日', 16: '1次/日', 17: '1次/日', 18: '1次/日', 19: '1次/日', 20: '1次/日' }
        }
    },
    artificer: {
        name: '奇械师',
        description: '奇械师是发明大师，通过巧思和魔法让物品发挥出非凡的性能。他们使用各种工具来引导奥法能量，创造出神奇的药剂、符文、构装体和魔法物品。',
        hitDice: 8,
        primaryAbility: '智力',
        savingThrows: ['体质', '智力'],
        armorProficiencies: ['轻甲', '中甲', '盾牌'],
        weaponProficiencies: ['简易武器', '手铳'],
        tools: ['盗贼工具', '修补工具'],
        skills: ['奥秘', '历史', '调查', '医药', '自然', '察觉', '巧手'],
        skillCount: 2,
        features: [
            { name: '施法 (Spellcasting)', level: 1, description: '使用智力施放奥术魔法。法术位为半施法者进度。' },
            { name: '魔法工艺 (Magical Tinkering)', level: 1, description: '你可以使用修补工具作为法器施放法术，且可以触摸非魔法物品赋予它魔法特性（发光、发声、气味、图像或文字）。' },
            { name: '称手工具 (Tool Expertise)', level: 1, description: '你获得盗贼工具和修补工具的熟练，且使用这些工具时熟练加值翻倍。' },
            { name: '注法 (Infuse Item)', level: 2, description: '长休后你可以将魔法注入物品中，创造临时魔法物品。2级时2个注法，6级时3个，10级时4个，14级时5个，18级时6个。' },
            { name: '奇械师子职 (Artificer Subclass)', level: 3, description: '你选择获得一项奇械师子职。炼金师、装甲师、魔炮师、战地匠师和制图师，子职业会在此职业之后详细描述。子职是一种特化，在特定的奇械师等级给予你对应的独特能力。此后你将获得每一个你所选的子职的能力，只要其所需等级等于或低于你的奇械师等级。' },
            { name: '属性值提升 (Ability Score Improvement)', level: 4, description: '你获得属性值提升专长（见第五章）或其他你满足条件的专长。如奇械师特性表所示，你还会在第8、第12、第16级时再次获得本特性。' },
            { name: '工具专精 (Tool Expertise)', level: 6, description: '选择一种工具，你使用它时熟练加值翻倍。' },
            { name: '魔法物品工艺师 (Magic Item Tinker)', level: 6, description: '你的仿制魔法物品特性获得以下提升：充能魔法物品（以一个附赠动作，你可以触碰5尺内的一件你用仿制魔法物品创造的魔法物品，并使用充能。你充能这件物品并花费一个不低于一环的法术位。该物品获得的充能数量等于所花费的法术位环阶）；汲取魔法物品（以一个附赠动作，你可以触碰5尺内的一件你用仿制魔法物品创造的魔法物品，并让这件物品消失，将其魔法能量转变为一个法术位。如果这件物品为普通，则法术位为一环，或如果这件物品为非普通或珍稀，则法术位为二环。一旦你使用了此特性，直到完成一次长休前，你无法再这么做。任何以此特性创造的法术位会在你完成长休时消失）；转变魔法物品（以一个魔法动作，你可以触碰5尺内的一件你用仿制魔法物品创造的魔法物品，并将其转变为一件不同的魔法物品。最终的物品必须基于你所知晓的魔法物品方案。此特性一经使用，直至完成长休你都无法再次使用）。' },
            { name: '灵光一闪 (Flash of Genius)', level: 7, description: '当你或你30尺内能看见的一个生物在一次属性检定或豁免检定中失败时，你可以执行反应，在检定结果中加入加值，这可能将失败变为成功。加值等于你的智力调整值。你可以执行该反应的次数等于你的智力调整值（最小为1次）。你在完成长休时重获所有消耗的使用次数。' },
            { name: '魔法物品巧匠 (Magic Item Adept)', level: 10, description: '现在你可以同时与至多四件魔法物品同调。' },
            { name: '储法物品 (Spell-Storing Item)', level: 11, description: '每当你完成一次长休时，你可以触碰一件简易或军用武器，或一件你能将其作为施法法器的物品，并往里存储一道法术，选择一道一环、二环或三环的，施法时间为动作的奇械师法术储存到里面（你不必准备该法术）。在持握物品期间，一个生物可以使用一个动作以从中造成这个法术的效应，使用你的施法属性调整值。如果这个法术需要专注，则该生物必须为之维持专注。一旦一名生物已经使用该物品造成此法术的效应，则直到该生物的下个回合开始，此物品无法再以此法使用。该法术将留存在物品中，直到使用次数用完（最大使用次数等于你智力调整值的两倍（至少两次））或直到你再次使用该特性储存一道法术到一件物品中。' },
            { name: '进阶奇械术 (Advanced Artifice)', level: 14, description: '你获得以下增益：魔法物品专家（现在你可以同时与至多五件魔法物品同调）；重获灵感（当你完成短休时，你的灵光一闪重获一次已消耗的使用次数）。' },
            { name: '魔法物品大师 (Magic Item Master)', level: 18, description: '现在你可以与至多六件魔法物品同调。' },
            { name: '传奇恩惠 (Epic Boon)', level: 19, description: '你获得一项传奇恩惠专长（见第五章）或其他一项你选择的适用的专长。推荐选择能量抗性之恩惠。' },
            { name: '奇械之魂 (Soul of Artifice)', level: 20, description: '你与你的魔法物品建立了一种神秘的联系，你可以利用它来产生协助效果。你获得以下增益：幸免于难（当你的生命值降至0，但没有立即被杀死时，你可以解消任意件你仿制魔法物品特性创造的，稀有度为非普通或珍稀的魔法物品，并将你的生命值改为魔法物品解离数量的20倍）；魔法指引（当你完成短休时，如果你同调着至少一件魔法物品，你的灵光一闪重获所有已消耗的使用次数）。' }
        ],
        spellcasting: true,
        spellAbility: '智力',
        resourcePool: {
            name: '注法 (Infusions)',
            levels: { 1: 0, 2: 2, 3: 2, 4: 2, 5: 2, 6: 3, 7: 3, 8: 3, 9: 3, 10: 4, 11: 4, 12: 4, 13: 4, 14: 5, 15: 5, 16: 5, 17: 5, 18: 6, 19: 6, 20: 6 }
        }
    },
    pugilist: {
        name: '拳斗士',
        description: '拳斗士是街头格斗的大师，精通徒手格斗和街头战斗技巧。他们通过不断的实战磨练出独特的战斗风格，能够在近身战中击败装备精良的敌人。拳斗士依靠纯粹的肉体力量和战斗本能，在战场上如同人形兵器。',
        hitDice: 10,
        primaryAbility: '力量或敏捷',
        savingThrows: ['力量', '体质'],
        armorProficiencies: ['轻甲'],
        weaponProficiencies: ['简易武器', '短剑', '短棒', '指虎', '手斧', '飞镖', '轻锤'],
        tools: ['一种游戏套具'],
        skills: ['运动', '威吓', '察觉', '表演', '生存', '杂技'],
        skillCount: 2,
        features: [
            { name: '拳斗 (Fisticuffs)', level: 1, description: '若你未持械或仅使用拳斗武器（简易近战武器、临时武器），且未着甲或仅着装轻甲且未持盾：1)附赠徒手打击-以附赠动作发动一次徒手打击；2)拳斗骰-使用徒手打击或拳斗武器时，伤害骰为1d8（5级d10，11级d12，17级2d6）；3)临时能弑-所有临时武器对你具有削弱精通词条。' },
            { name: '钢颚铁护 (Iron Chin)', level: 1, description: '若你未着甲或仅着装轻甲且未持盾，你的基础AC等于12+体质调整值。' },
            { name: '锐气 (Moxie)', level: 2, description: '你拥有锐气资源池，上限见拳斗士特性表。消耗锐气可增强特性。初始锐气特性：振奋精神（1点，获得临时生命值=拳斗骰+等级+体质调整值）、左右开弓（1点，附赠动作两次徒手打击）、寓攻于走（1点，附赠动作徒手打击+疾跑/撤离）。锐气需短休或长休恢复。' },
            { name: '浴血奋战 (Bloodied But Unbowed)', level: 2, description: '当你受到伤害时，以反应重获所有锐气。若处于浴血状态（半血以下），额外获得等级×4临时生命值。短休或长休后恢复。' },
            { name: '傲然致胜 (Swagger Streak)', level: 2, description: '当你力量、敏捷、体质或魅力检定失败时，消耗1点锐气投掷拳斗骰加入检定。若成功则消耗，失败则重获。短休或长休后恢复。' },
            { name: '重磅巨拳 (Heavy Hitter)', level: 3, description: '当你以徒手打击命中生物时，可同时应用擒抱或推撞选项中的一项。' },
            { name: '拳斗士子职 (Pugilist Subclass)', level: 3, description: '选择一项拳斗士子职：方圆擂尊、街头霸王、犬师拳狩、惧恶之手、甜蜜科学、怒雷恶氓或街角圣徒，获得对应子职能力。' },
            { name: '属性值提升 (Ability Score Improvement)', level: 4, description: '获得属性值提升专长或其他专长。第8、12、16级再次获得。' },
            { name: '反求诸己 (Dig Deep)', level: 4, description: '以附赠动作激活，持续10分钟：对钝击、穿刺、挥砍伤害抗性，免疫6级以下力竭。长休后恢复，或承受1级力竭重置。' },
            { name: '额外攻击 (Extra Attack)', level: 5, description: '你进行攻击动作时可以攻击两次。' },
            { name: '万钧痛击 (Haymaker)', level: 5, description: '当你以徒手打击或拳斗武器攻击时，可消耗1点锐气进行全力攻击。若命中则重获锐气且造成最大伤害。' },
            { name: '锐不可当 (Moxie-Fueled Fists)', level: 6, description: '当你以徒手打击或临时武器造成伤害时，可选择造成力场伤害或原本伤害类型。' },
            { name: '一线胜机 (Down But Not Out)', level: 7, description: '在浴血期间使用浴血奋战时，获得1分钟伤害加值=体质调整值+力竭等级，适用于徒手打击和拳斗武器。长休后恢复。' },
            { name: '披荆斩棘 (School of Hard Knocks)', level: 9, description: '每回合一次，当你以徒手打击或以拳斗武器发动的攻击命中时，你能额外造成1d12伤害。伤害类型与该武器或徒手打击造成的伤害类型相同。你能放弃此额外伤害转而应用以下效应之一：害恶-该生物下次被攻击命中时，那次攻击造成伤害骰能造成的最大伤害而不进行掷骰；挑衅-该生物对你以外的生物进行的攻击检定具有劣势，持续至你的下个回合结束。' },
            { name: '海格力斯 (Herculean)', level: 10, description: '你获得以下增益。承重者-计算载重时，你的力量翻倍；破柱者-当你以徒手打击命中一个物件时，此次命中变为重击命中；绝伦健将-你的跳跃距离翻倍。' },
            { name: '甩脱重担 (Shake It Out)', level: 10, description: '在你的每个回合开始时（无需动作），你能够移除你身上的1级力竭或结束你身上的以下一种状态：目盲，魅惑，耳聋，恐慌，麻痹，中毒，束缚或震慑。此特性一经使用，直至完成长休你都无法再次使用，除非你获得1级力竭（无需动作）来重置该特性的使用权。' },
            { name: '求己入圣 (Dig Deeper)', level: 13, description: '你能以附赠动作求己入圣。你获得反求诸己的所有增益并能够每回合使用你的披荆斩棘两次而非一次。此特性一经使用，直至完成长休你都无法再次使用。20级起，你在长休前能使用该特性两次。' },
            { name: '坚不可摧 (Unbreakable)', level: 14, description: '你的力量、敏捷和体质豁免具有优势。此外，每当你进行豁免检定失败时，你能消耗1点锐气重骰之，你必须使用新的结果。' },
            { name: '好勇斗狠 (Pugnacious)', level: 15, description: '当你投掷先攻时，你能移除你身上的1级力竭并重置你一线胜机、反求诸己和甩脱重担的使用权。' },
            { name: '斗战之魂 (Fighting Spirit)', level: 18, description: '当你的生命值降至0但没有被立即杀死时，你能改为降至1生命值。若你如此做，你获得等于你生命值上限一半的临时生命值，重获所有已消耗的锐气。且你具有除力场伤害外所有伤害的抗性，持续1分钟。此特性一经使用，直至完成长休你都无法再次使用。' },
            { name: '传奇恩惠 (Epic Boon)', level: 19, description: '你获得一项传奇恩惠专长或其他一项你选择的适用的专长。推荐选择英勇战斗之恩惠。' },
            { name: '巅峰状态 (Peak Physical Condition)', level: 20, description: '你的力量和韧性堪称传奇。你获得以下增益。老当益壮-你的力量和体质值提升2，至多提升至23；一觉解千愁-当你完成长休时，若你已陷入力竭状态，你失去所有力竭等级；活力四溢-当你完成短休时，你恢复等于你拳斗士等级两倍的生命值。' }
        ],
        spellcasting: false,
        resourcePool: {
            name: '锐气 (Moxie)',
            levels: { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 16: 16, 17: 17, 18: 18, 19: 19, 20: 20 }
        }
    }
};

// 背景数据
const BACKGROUNDS = {
    acolyte: {
        name: '侍僧',
        description: '你在寺庙中度过了岁月，学习宗教仪式和信仰。你对神圣事务有深入了解。',
        skills: ['洞悉', '宗教'],
        languages: 2,
        equipment: ['圣徽', '祈祷书', '5根熏香', '祭袍', '普通衣物', '15金币'],
        feature: '庇护所'
    },
    charlatan: {
        name: '骗子',
        description: '你擅长欺骗和伪装，知道如何快速致富。你精通伪造和欺骗技巧。',
        skills: ['欺瞒', '巧手'],
        tools: ['易容工具', '伪造工具'],
        equipment: ['精致服装', '易容工具', '权臣印章等伪造品', '15金币'],
        feature: '虚假身份'
    },
    criminal: {
        name: '罪犯',
        description: '你有犯罪背景，与地下世界有联系。你精通潜行和偷窃。',
        skills: ['欺瞒', '隐匿'],
        tools: ['一种游戏套具', '盗贼工具'],
        equipment: ['撬棍', '普通衣物', '15金币', '腰带 pouch'],
        feature: '罪犯联络'
    },
    entertainer: {
        name: '艺人',
        description: '你以表演为生，娱乐大众。你精通某种表演艺术。',
        skills: ['杂技', '表演'],
        tools: ['易容工具', '一种乐器'],
        equipment: ['乐器', '粉丝情书', '精致服装', '15金币'],
        feature: '受欢迎'
    },
    folkHero: {
        name: '平民英雄',
        description: '普通人视你为英雄，你来自 humble 背景。你在平民中有很高的声望。',
        skills: ['驯兽', '生存'],
        tools: ['一种 artisans\' 工具', '载具'],
        equipment: ['artisans\' 工具', '铁铲', '铁锅', '普通衣物', '10金币'],
        feature: '乡民共情'
    },
    guildArtisan: {
        name: '公会工匠',
        description: '你是工匠公会的成员，精通一门手艺。你在工匠中有很高的地位。',
        skills: ['洞悉', '游说'],
        tools: ['一种 artisans\' 工具'],
        languages: 1,
        equipment: ['artisans\' 工具', '推荐信', '旅行者衣物', '15金币'],
        feature: '公会成员'
    },
    hermit: {
        name: '隐士',
        description: '你在隐居生活中寻求精神启示。你对神秘事物有独特见解。',
        skills: ['医药', '宗教'],
        tools: ['草药工具'],
        languages: 1,
        equipment: ['卷轴箱', '历史笔记', '冬被', '普通衣物', '草药工具', '5金币'],
        feature: '发现'
    },
    noble: {
        name: '贵族',
        description: '你来自贵族家庭，拥有特权和教育。你在上流社会中有很高的地位。',
        skills: ['历史', '游说'],
        tools: ['一种游戏套具'],
        languages: 1,
        equipment: ['精致服装', '印章戒指', '25金币'],
        feature: '权位'
    },
    outlander: {
        name: '化外之民',
        description: '你在荒野中成长，远离文明。你是野外生存的专家。',
        skills: ['运动', '生存'],
        tools: ['一种乐器'],
        languages: 1,
        equipment: ['长棍', '捕猎陷阱', '猎获 trophy', '旅行者衣物', '10金币'],
        feature: '漫游者'
    },
    sage: {
        name: '智者',
        description: '你花费多年研究学问和知识。你是某个领域的专家。',
        skills: ['奥秘', '历史'],
        languages: 2,
        equipment: ['墨水瓶', '羽管笔', '小刀片', '研究者信件', '普通衣物', '10金币'],
        feature: '研究者'
    },
    sailor: {
        name: '水手',
        description: '你在海上度过了岁月，熟悉航海生活。你是航海和航行的专家。',
        skills: ['运动', '察觉'],
        tools: ['导航工具', '载具'],
        equipment: ['棍棒', '50尺丝绳', '幸运符', '普通衣物', '10金币'],
        feature: '船舶通行'
    },
    soldier: {
        name: '士兵',
        description: '你有军事背景，受过战斗训练。你在军队中有经验和联系。',
        skills: ['运动', '威吓'],
        tools: ['一种游戏套具', '载具'],
        equipment: ['军阶徽章', '战利品', '骨制骰子或扑克牌', '普通衣物', '10金币'],
        feature: '军阶'
    },
    urchin: {
        name: '流浪儿',
        description: '你在街头长大，学会了生存技巧。你精通城市生存和潜行。',
        skills: ['巧手', '隐匿'],
        tools: ['易容工具', '盗贼工具'],
        equipment: ['小刀', '老鼠地图', '宠物鼠', '父母信件', '普通衣物', '10金币'],
        feature: '城市秘密'
    },
    // Expanded Backgrounds from Xanathar's Guide and other sources
    anthropologist: {
        name: '人类学家',
        description: '你花费多年时间研究不同文化和社会，记录他们的习俗、信仰和传统。你对多元文化有深刻的理解。',
        skills: ['洞悉', '宗教'],
        languages: 2,
        equipment: ['皮革装订日记', '墨水瓶', '羽管笔', '小刀片', '当地服饰', '10金币'],
        feature: '文化洞察',
        storyHooks: [
            '你发现了一个失落文明的遗迹',
            '你被一个原始部落视为神灵',
            '你的研究引起了某个秘密组织的注意'
        ]
    },
    archaeologist: {
        name: '考古学家',
        description: '你探索古老的遗迹和废墟，寻找失落的知识和宝藏。你对历史文物有着敏锐的直觉。',
        skills: ['历史', '调查'],
        tools: ['一种游戏套具', '地图绘制工具'],
        equipment: ['木乃伊化尸体', '铁锹', '探险家服装', '10英尺杆子', '10金币'],
        feature: '历史直觉',
        storyHooks: [
            '你发现了一张指向古代宝藏的地图',
            '你唤醒了不该被打扰的古老存在',
            '你的发现与某个神秘预言相符'
        ]
    },
    blacksmith: {
        name: '铁匠',
        description: '你在铁砧和熔炉旁度过了多年，锻造武器和护甲。你的工作不仅是手艺，更是艺术。',
        skills: ['运动', '调查'],
        tools: ['铁匠工具'],
        equipment: ['铁匠工具', '围裙', '各种金属样品', '普通衣物', '10金币'],
        feature: '锻造大师',
        storyHooks: [
            '你发现了锻造魔法金属的秘密',
            '你接到了一个神秘客户的特殊订单',
            '你的作品被卷入了一场政治阴谋'
        ]
    },
    bountyHunter: {
        name: '赏金猎人',
        description: '你追踪逃犯和罪犯，将他们绳之以法或交给雇主。你是追踪和捕猎的专家。',
        skills: ['洞悉', '生存'],
        tools: ['一种游戏套具'],
        equipment: ['镣铐', '赏金海报', '追踪工具', '旅行者衣物', '10金币'],
        feature: '追踪专家',
        storyHooks: [
            '你的猎物比你想象的更危险',
            '你发现你的目标其实是无辜的',
            '你成为了别人的猎物'
        ]
    },
    chef: {
        name: '厨师',
        description: '你精通烹饪艺术，能够用食物治愈身心。你的料理不仅是 sustenance，更是魔法。',
        skills: ['医药', '游说'],
        tools: ['烹饪工具'],
        equipment: ['烹饪工具', '食谱书', '香料包', '厨师服装', '10金币'],
        feature: '治愈美食',
        storyHooks: [
            '你的料理意外具有魔法效果',
            '你被邀请为国王准备宴会',
            '你的食谱中隐藏着古老的秘密'
        ]
    },
    cityWatch: {
        name: '城市卫兵',
        description: '你曾是城市守卫的一员，维护法律和秩序。你了解城市的阴暗面和光明面。',
        skills: ['运动', '洞悉'],
        tools: ['一种游戏套具'],
        equipment: ['制服', '哨子', '手铐', '普通衣物', '10金币'],
        feature: '城市守护者',
        storyHooks: [
            '你发现守卫内部有腐败',
            '你被迫在忠诚和正义之间选择',
            '你曾经的案件重新浮出水面'
        ]
    },
    clanCrafter: {
        name: '氏族工匠',
        description: '你来自一个以工艺闻名的氏族，从小学习祖传的手艺。你的作品代表着氏族的荣誉。',
        skills: ['历史', '洞悉'],
        tools: ['一种 artisans\' 工具'],
        equipment: ['artisans\' 工具', '氏族徽章', '工匠服装', '氏族历史记录', '10金币'],
        feature: '氏族荣誉',
        storyHooks: [
            '你必须完成一件杰作来证明自己的价值',
            '氏族的古老秘密被揭示',
            '你的作品被卷入氏族间的争端'
        ]
    },
    cloisteredScholar: {
        name: '隐居学者',
        description: '你在图书馆和修道院中度过了多年，沉浸在知识和学习中。你是某个领域的专家。',
        skills: ['历史', '奥秘'],
        languages: 2,
        equipment: ['学者长袍', '墨水瓶', '羽管笔', '借书证', '普通衣物', '10金币'],
        feature: '图书馆权限',
        storyHooks: [
            '你发现了一本被禁止的古籍',
            '你的研究揭示了一个可怕的真相',
            '你必须离开图书馆去验证你的理论'
        ]
    },
    courtier: {
        name: '廷臣',
        description: '你在贵族宫廷中度过，学会了政治、礼仪和阴谋。你了解权力的游戏。',
        skills: ['欺瞒', '游说'],
        tools: ['一种游戏套具'],
        equipment: ['精致服装', '印章戒指', '介绍信', '化妆品', '15金币'],
        feature: '宫廷关系',
        storyHooks: [
            '你被卷入了一场宫廷阴谋',
            '你必须在敌对的贵族之间周旋',
            '你的秘密身份面临暴露的危险'
        ]
    },
    detective: {
        name: '侦探',
        description: '你解决谜团和犯罪，寻找真相。你的观察力和推理能力是你的武器。',
        skills: ['洞悉', '调查'],
        tools: ['盗贼工具'],
        equipment: ['放大镜', '笔记本', '常见案件记录', '普通衣物', '10金币'],
        feature: '侦探直觉',
        storyHooks: [
            '你接手了一个看似不可能的案子',
            '你发现了一个涉及高层的大阴谋',
            '你成为了某个连环杀手的目标'
        ]
    },
    faceless: {
        name: '无面者',
        description: '你隐藏了自己的真实身份，以一个伪装的面具生活。你的过去是一个秘密。',
        skills: ['欺瞒', '隐匿'],
        tools: ['易容工具'],
        equipment: ['面具', '伪装服装', '虚假身份证明', '普通衣物', '10金币'],
        feature: '隐藏身份',
        storyHooks: [
            '你的真实身份面临暴露',
            '你的过去追上了你',
            '你必须选择保持伪装还是揭示真相'
        ]
    },
    farTraveler: {
        name: '远方旅者',
        description: '你来自遥远的地方，带着异国的文化和知识。你对世界有着独特的视角。',
        skills: ['洞悉', '察觉'],
        tools: ['一种游戏套具', '一种乐器'],
        languages: 1,
        equipment: ['异国服饰', '地图', '外国货币', '纪念品', '10金币'],
        feature: '异域文化',
        storyHooks: [
            '你逃离了家乡的灾难',
            '你被派来寻找某样东西',
            '你的文化差异导致误解'
        ]
    },
    gladiator: {
        name: '角斗士',
        description: '你在竞技场中战斗，为观众的娱乐而流血。你是战斗的表演者。',
        skills: ['杂技', '表演'],
        tools: ['易容工具', '一种游戏套具'],
        equipment: ['武器', '角斗士服装', '奖杯', '粉丝情书', '15金币'],
        feature: '竞技场名声',
        storyHooks: [
            '你试图逃离竞技场生活',
            '你的过去作为奴隶被揭露',
            '你必须为自由而战'
        ]
    },
    guildMerchant: {
        name: '公会商人',
        description: '你是商人公会的成员，精通贸易和商业。你了解供需的艺术。',
        skills: ['洞悉', '游说'],
        tools: ['一种 artisans\' 工具'],
        languages: 1,
        equipment: ['账本', '算盘', '样品', '商人服装', '25金币'],
        feature: '商业网络',
        storyHooks: [
            '你的货物被抢劫',
            '你发现了一个利润丰厚的商机',
            '你被卷入贸易战争'
        ]
    },
    hauntedOne: {
        name: '受难者',
        description: '你经历了某种恐怖的事件，留下了心理创伤。你的过去困扰着你。',
        skills: ['奥秘', '调查'],
        tools: ['一种游戏套具'],
        equipment: ['护身符', '日记', '证据', '普通衣物', '10金币'],
        feature: '恐怖经历',
        storyHooks: [
            '你必须面对你的恐惧',
            '你的创伤给你特殊的能力',
            '你寻求对造成你痛苦的人的复仇'
        ]
    },
    houseAgent: {
        name: '家族特工',
        description: '你为强大的家族或组织工作，执行秘密任务。你是阴影中的代理人。',
        skills: ['欺瞒', '调查'],
        tools: ['盗贼工具', '易容工具'],
        equipment: ['徽章', '密码本', '秘密文件', '伪装服装', '15金币'],
        feature: '家族资源',
        storyHooks: [
            '你被派去执行危险的任务',
            '你发现家族的秘密',
            '你必须在家族和个人之间选择'
        ]
    },
    inquisitor: {
        name: '审判官',
        description: '你追捕异端和邪恶，维护信仰和秩序。你是正义的审判者。',
        skills: ['洞悉', '宗教'],
        tools: ['一种游戏套具'],
        equipment: ['圣徽', '审判工具', '异端名单', '审判官服装', '10金币'],
        feature: '审判权威',
        storyHooks: [
            '你发现你的目标其实是无辜的',
            '你的信仰受到挑战',
            '你必须审判你爱的人'
        ]
    },
    investigator: {
        name: '调查员',
        description: '你寻找真相，解决谜团，揭露秘密。你的好奇心是你的动力。',
        skills: ['洞察', '调查'],
        tools: ['盗贼工具'],
        equipment: ['放大镜', '笔记本', '证据袋', '普通衣物', '10金币'],
        feature: '调查技巧',
        storyHooks: [
            '你发现了一个巨大的阴谋',
            '你的调查让你陷入危险',
            '你必须在真相和安全之间选择'
        ]
    },
    knight: {
        name: '骑士',
        description: '你是贵族战士，遵循骑士守则。你为保护弱者而战。',
        skills: ['历史', '游说'],
        tools: ['一种游戏套具'],
        equipment: ['印章戒指', '纹章', '骑士服装', '仆人', '25金币'],
        feature: '骑士身份',
        storyHooks: [
            '你必须完成一项任务来证明价值',
            '你的荣誉受到挑战',
            '你必须在职责和爱情之间选择'
        ]
    },
    marine: {
        name: '海军陆战队员',
        description: '你是海军精英，擅长两栖作战。你在船上和陆地上都同样致命。',
        skills: ['运动', '生存'],
        tools: ['载具'],
        equipment: ['匕首', '徽章', '制服', '10金币'],
        feature: '登陆部队',
        storyHooks: [
            '你的船被击沉',
            '你违抗了命令',
            '你必须在海上和陆地之间选择'
        ]
    },
    mercenaryVeteran: {
        name: '雇佣兵老兵',
        description: '你作为雇佣兵战斗多年，为出价最高者效力。战争是你的生意。',
        skills: ['运动', '威吓'],
        tools: ['一种游戏套具', '载具'],
        equipment: ['制服', '徽章', '武器维护工具', '10金币'],
        feature: '雇佣兵联络',
        storyHooks: [
            '你的过去作为雇佣兵追上了你',
            '你必须选择立场',
            '你的雇主背叛了你'
        ]
    },
    nobleKnight: {
        name: '贵族骑士',
        description: '你是贵族和战士的结合，既有优雅又有力量。你代表你的家族战斗。',
        skills: ['历史', '游说'],
        tools: ['一种游戏套具'],
        equipment: ['纹章', '印章戒指', '骑士服装', '仆人', '25金币'],
        feature: '贵族地位',
        storyHooks: [
            '你必须维护家族荣誉',
            '你被卷入贵族政治',
            '你必须在家族和个人之间选择'
        ]
    },
    pirate: {
        name: '海盗',
        description: '你在海上劫掠，追求自由和财富。大海是你的家。',
        skills: ['运动', '威吓'],
        tools: ['导航工具', '载具'],
        equipment: ['弯刀', '眼罩', '藏宝图', '海盗服装', '10金币'],
        feature: '海盗名声',
        storyHooks: [
            '你背叛了你的船员',
            '你在寻找传说中的宝藏',
            '你成为了海军的目标'
        ]
    },
    rivalIntern: {
        name: '对手实习生',
        description: '你在竞争激烈的组织中实习，努力证明自己的价值。你渴望成功。',
        skills: ['欺瞒', '游说'],
        tools: ['一种 artisans\' 工具'],
        equipment: ['制服', '笔记本', '推荐信', '普通衣物', '10金币'],
        feature: '内部知识',
        storyHooks: [
            '你必须击败你的对手',
            '你发现组织的黑暗秘密',
            '你必须在成功和道德之间选择'
        ]
    },
    spy: {
        name: '间谍',
        description: '你在阴影中工作，收集信息和秘密。你是欺骗和伪装的大师。',
        skills: ['欺瞒', '隐匿'],
        tools: ['易容工具', '伪造工具'],
        equipment: ['伪装', '密码本', '秘密文件', '普通衣物', '15金币'],
        feature: '间谍网络',
        storyHooks: [
            '你的掩护被识破',
            '你必须选择忠诚的对象',
            '你发现了一个威胁国家的阴谋'
        ]
    },
    tournamentKnight: {
        name: '锦标赛骑士',
        description: '你在锦标赛中竞争，追求荣耀和名声。你是竞技场的明星。',
        skills: ['运动', '表演'],
        tools: ['一种游戏套具'],
        equipment: ['盔甲', '纹章', '奖杯', '骑士服装', '15金币'],
        feature: '竞技名声',
        storyHooks: [
            '你必须在锦标赛中获胜',
            '你发现比赛被操纵',
            '你的对手是你的旧友'
        ]
    }
};

// 技能数据
const SKILLS = {
    acrobatics: { name: '杂技', ability: 'dexterity' },
    animalHandling: { name: '驯兽', ability: 'wisdom' },
    arcana: { name: '奥秘', ability: 'intelligence' },
    athletics: { name: '运动', ability: 'strength' },
    deception: { name: '欺瞒', ability: 'charisma' },
    history: { name: '历史', ability: 'intelligence' },
    insight: { name: '洞悉', ability: 'wisdom' },
    intimidation: { name: '威吓', ability: 'charisma' },
    investigation: { name: '调查', ability: 'intelligence' },
    medicine: { name: '医药', ability: 'wisdom' },
    nature: { name: '自然', ability: 'intelligence' },
    perception: { name: '察觉', ability: 'wisdom' },
    performance: { name: '表演', ability: 'charisma' },
    persuasion: { name: '游说', ability: 'charisma' },
    religion: { name: '宗教', ability: 'intelligence' },
    sleightOfHand: { name: '巧手', ability: 'dexterity' },
    stealth: { name: '隐匿', ability: 'dexterity' },
    survival: { name: '生存', ability: 'wisdom' }
};

// 熟练加值表
const PROFICIENCY_BONUS = {
    1: 2, 2: 2, 3: 2, 4: 2,
    5: 3, 6: 3, 7: 3, 8: 3,
    9: 4, 10: 4, 11: 4, 12: 4,
    13: 5, 14: 5, 15: 5, 16: 5,
    17: 6, 18: 6, 19: 6, 20: 6
};

// 经验值表
const EXPERIENCE_TABLE = {
    1: 0, 2: 300, 3: 900, 4: 2700, 5: 6500,
    6: 14000, 7: 23000, 8: 34000, 9: 48000, 10: 64000,
    11: 85000, 12: 100000, 13: 120000, 14: 140000, 15: 165000,
    16: 195000, 17: 225000, 18: 265000, 19: 305000, 20: 355000
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RACES, CLASSES, BACKGROUNDS, SKILLS, SUBCLASSES, FEATS, PROFICIENCY_BONUS, EXPERIENCE_TABLE };
}
