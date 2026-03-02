// D&D 5E 法术数据 - 根据5e不全书和官方规则整理
// 按环阶和职业分类

const SPELLS = {
    // 戏法 Cantrips (0环)
    cantrips: [
        // 法师法术
        { name: '酸液飞溅', nameEn: 'Acid Splash', level: 0, class: ['wizard', 'sorcerer', 'artificer'], school: '咒法', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '立即', description: '你向范围内的一个生物投掷一小团酸液，或向范围内的一个生物掷出两团酸液。目标必须进行一次敏捷豁免，失败受到1d6酸伤害。' },
        { name: '剑刃防护', nameEn: 'Blade Ward', level: 0, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '防护', castingTime: '1动作', range: '自身', components: 'V,S', duration: '1轮', description: '你获得对钝击、穿刺和挥砍伤害的抗性，直到你的下一回合开始。' },
        { name: '冻寒之触', nameEn: 'Chill Touch', level: 0, class: ['wizard', 'sorcerer', 'warlock'], school: '死灵', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '1轮', description: '你创造一个幽灵般的骷髅手，攻击目标造成1d8黯蚀伤害，且目标在下一回合开始前无法恢复生命值。' },
        { name: '舞光术', nameEn: 'Dancing Lights', level: 0, class: ['wizard', 'sorcerer', 'bard', 'artificer'], school: '塑能', castingTime: '1动作', range: '120尺', components: 'V,S,M', duration: '至多1分钟', description: '你创造最多四个火炬大小的光源，可以移动它们。' },
        { name: '火焰箭', nameEn: 'Fire Bolt', level: 0, class: ['wizard', 'sorcerer', 'artificer'], school: '塑能', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '立即', description: '你向目标投掷一团火焰，造成1d10火焰伤害。' },
        { name: '法师之手', nameEn: 'Mage Hand', level: 0, class: ['wizard', 'sorcerer', 'bard', 'warlock', 'artificer'], school: '咒法', castingTime: '1动作', range: '30尺', components: 'V,S', duration: '1分钟', description: '你创造一只幽灵手，可以操纵物体、打开未上锁的门或容器等。' },
        { name: '冷冻射线', nameEn: 'Ray of Frost', level: 0, class: ['wizard', 'sorcerer', 'artificer'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '立即', description: '你射出一道冰冷的蓝白色光线，造成1d8冷冻伤害，目标速度减少10尺直到你的下一回合开始。' },
        { name: '电爪', nameEn: 'Shocking Grasp', level: 0, class: ['wizard', 'sorcerer', 'artificer'], school: '塑能', castingTime: '1动作', range: '触及', components: 'V,S', duration: '立即', description: '你手中爆发出闪电，对目标造成1d8闪电伤害。如果目标穿着金属护甲，你在攻击检定上具有优势。' },
        { name: '克敌机先', nameEn: 'True Strike', level: 0, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '预言', castingTime: '1动作', range: '30尺', components: 'S', duration: '至多1轮', description: '你获得对目标的洞察力，在下一回合对目标进行的首次攻击检定上具有优势。' },
        
        // 牧师法术
        { name: '神导术', nameEn: 'Guidance', level: 0, class: ['cleric', 'druid', 'artificer'], school: '预言', castingTime: '1动作', range: '触及', components: 'V,S', duration: '至多1分钟', description: '你触碰一个自愿生物，它可以在接下来的一次能力检定上加上d4。' },
        { name: '光亮术', nameEn: 'Light', level: 0, class: ['cleric', 'wizard', 'sorcerer', 'bard', 'artificer'], school: '塑能', castingTime: '1动作', range: '触及', components: 'V,M', duration: '1小时', description: '你触碰一个物体，使其发出20尺明亮光照和额外20尺微光光照。' },
        { name: '修复术', nameEn: 'Mending', level: 0, class: ['cleric', 'wizard', 'sorcerer', 'bard', 'druid', 'artificer'], school: '变化', castingTime: '1分钟', range: '触及', components: 'V,S,M', duration: '立即', description: '你修复一个物体的破损处，可以修复魔法物品但无法恢复魔法。' },
        { name: '圣火术', nameEn: 'Sacred Flame', level: 0, class: ['cleric'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '立即', description: '火焰般的辉光降下，目标必须进行敏捷豁免，失败受到1d8光耀伤害。' },
        { name: '维生术', nameEn: 'Spare the Dying', level: 0, class: ['cleric', 'artificer'], school: '死灵', castingTime: '1动作', range: '触及', components: 'V,S', duration: '立即', description: '你触碰一个生命值降至0的生物，使其伤势稳定。' },
        { name: '奇术', nameEn: 'Thaumaturgy', level: 0, class: ['cleric'], school: '变化', castingTime: '1动作', range: '30尺', components: 'V', duration: '至多1分钟', description: '你展现出一个微小的奇迹，可以创造声音、改变火焰外观、震动地面等。' },
        
        // 德鲁伊法术
        { name: '德鲁伊伎俩', nameEn: 'Druidcraft', level: 0, class: ['druid'], school: '变化', castingTime: '1动作', range: '30尺', components: 'V,S', duration: '立即或至多1小时', description: '你创造一个微小的自然现象，如预测天气、让花朵绽放、制造微风等。' },
        { name: '橡棍术', nameEn: 'Shillelagh', level: 0, class: ['druid'], school: '变化', castingTime: '1附赠动作', range: '触及', components: 'V,S,M', duration: '1分钟', description: '你用魔法强化一根木棍或短棒，使用法术施法属性（感知）进行攻击和伤害检定，伤害骰变为d8。' },
        { name: '荆棘之鞭', nameEn: 'Thorn Whip', level: 0, class: ['druid', 'artificer'], school: '变化', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '立即', description: '你创造出一根带刺的藤蔓，对目标造成1d6穿刺伤害，如果目标体型为大型或更小，你可以将其拉近至多10尺。' },
        
        // 邪术师法术
        { name: '魔能爆', nameEn: 'Eldritch Blast', level: 0, class: ['warlock'], school: '塑能', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '立即', description: '你发射一束爆裂能量，对目标造成1d10力场伤害。5级时发射两束，11级时三束，17级时四束。' },
        
        // 吟游诗人法术
        { name: '恶毒嘲笑', nameEn: 'Vicious Mockery', level: 0, class: ['bard'], school: '惑控', castingTime: '1动作', range: '60尺', components: 'V', duration: '立即', description: '你以魔法强化过的尖刻言辞嘲讽一个生物，它必须通过一次智慧豁免，失败受到1d4心灵伤害，且在下一回合前进行的下一次攻击检定具有劣势。' },
        
        // 通用法术
        { name: '交友术', nameEn: 'Friends', level: 0, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '惑控', castingTime: '1动作', range: '自身', components: 'S,M', duration: '至多1分钟', description: '你尝试说服一个生物你是它的朋友，你在对该生物的魅力检定上具有优势。法术结束时，生物会意识到你影响了它。' },
        { name: '毒气喷溅', nameEn: 'Poison Spray', level: 0, class: ['wizard', 'sorcerer', 'druid', 'warlock', 'artificer'], school: '咒法', castingTime: '1动作', range: '10尺', components: 'V,S', duration: '立即', description: '你向范围内的一个生物喷出一团毒气，它必须进行体质豁免，失败受到1d12毒素伤害。' },
        { name: '魔法伎俩', nameEn: 'Prestidigitation', level: 0, class: ['wizard', 'sorcerer', 'bard', 'warlock', 'artificer'], school: '变化', castingTime: '1动作', range: '10尺', components: 'V,S', duration: '至多1小时', description: '你创造一个微小的魔法效果，如清洁或弄脏物品、点亮或熄灭蜡烛、加热或冷却物品等。' },
        { name: '次级幻影', nameEn: 'Minor Illusion', level: 0, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '幻术', castingTime: '1动作', range: '30尺', components: 'S,M', duration: '1分钟', description: '你创造一个声音或一个物体的影像，大小不超过5尺立方。' }
    ],
    
    // 1环法术
    level1: [
        // 法师/术士法术
        { name: '警报术', nameEn: 'Alarm', level: 1, class: ['wizard', 'ranger', 'artificer'], school: '防护', castingTime: '1分钟', range: '30尺', components: 'V,S,M', duration: '8小时', description: '你在一个门、窗户或区域设置警报，当体型为微型或更大的生物触碰或进入警戒区域时，你会收到警报。' },
        { name: '燃烧之手', nameEn: 'Burning Hands', level: 1, class: ['wizard', 'sorcerer'], school: '塑能', castingTime: '1动作', range: '自身（15尺锥形）', components: 'V,S', duration: '立即', description: '你喷出一道15尺锥形的火焰，范围内生物必须进行敏捷豁免，失败受到3d6火焰伤害，成功伤害减半。' },
        { name: '魅惑人类', nameEn: 'Charm Person', level: 1, class: ['wizard', 'sorcerer', 'bard', 'druid', 'warlock'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,S', duration: '1小时', description: '你尝试魅惑一个人类，它必须通过一次智慧豁免，失败将你视为友善的朋友。' },
        { name: '七彩喷射', nameEn: 'Color Spray', level: 1, class: ['wizard', 'sorcerer'], school: '幻术', castingTime: '1动作', range: '自身（15尺锥形）', components: 'V,S,M', duration: '1轮', description: '你喷出一道炫目的光芒，根据生物的生命值使其目盲。' },
        { name: '通晓语言', nameEn: 'Comprehend Languages', level: 1, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '预言', castingTime: '1动作', range: '自身', components: 'V,S,M', duration: '1小时', description: '你可以理解任何你听到的语言，也可以阅读任何你看到的文字。' },
        { name: '侦测魔法', nameEn: 'Detect Magic', level: 1, class: ['wizard', 'sorcerer', 'bard', 'cleric', 'druid', 'paladin', 'ranger', 'artificer'], school: '预言', castingTime: '1动作', range: '自身', components: 'V,S', duration: '至多10分钟', description: '你可以感知30尺内的魔法，并看出被魔法影响的物品或生物。' },
        { name: '易容术', nameEn: 'Disguise Self', level: 1, class: ['wizard', 'sorcerer', 'bard', 'artificer'], school: '幻术', castingTime: '1动作', range: '自身', components: 'V,S', duration: '1小时', description: '你改变自己的外观，包括服装、护甲、武器等，但不能改变体型。' },
        { name: '脚底抹油', nameEn: 'Expeditious Retreat', level: 1, class: ['wizard', 'sorcerer', 'warlock', 'artificer'], school: '变化', castingTime: '1附赠动作', range: '自身', components: 'V,S', duration: '至多10分钟', description: '你可以以附赠动作进行疾走动作，直到法术结束。' },
        { name: '虚假生命', nameEn: 'False Life', level: 1, class: ['wizard', 'sorcerer', 'artificer'], school: '死灵', castingTime: '1动作', range: '自身', components: 'V,S,M', duration: '1小时', description: '你获得1d4+4临时生命值。使用更高环阶法术位施放时，每高一环额外增加5点。' },
        { name: '羽落术', nameEn: 'Feather Fall', level: 1, class: ['wizard', 'sorcerer', 'bard', 'artificer'], school: '变化', castingTime: '1反应', range: '60尺', components: 'V,M', duration: '1分钟', description: '当生物开始坠落时，你可以反应使它们坠落速度减慢至每轮60尺，安全着陆。' },
        { name: '云雾术', nameEn: 'Fog Cloud', level: 1, class: ['wizard', 'sorcerer', 'druid', 'ranger'], school: '咒法', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '至多1小时', description: '你在范围内创造一个20尺半径的球状浓雾区域，重度遮蔽视野。' },
        { name: '大步奔行', nameEn: 'Longstrider', level: 1, class: ['wizard', 'sorcerer', 'bard', 'druid', 'ranger', 'artificer'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '1小时', description: '你触碰一个生物，其速度增加10尺。' },
        { name: '法师护甲', nameEn: 'Mage Armor', level: 1, class: ['wizard', 'sorcerer'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '8小时', description: '你触碰一个未穿着护甲的自愿生物，其基础AC变为13+敏捷调整值。' },
        { name: '魔法飞弹', nameEn: 'Magic Missile', level: 1, class: ['wizard', 'sorcerer'], school: '塑能', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '立即', description: '你创造三枚飞弹，每枚造成1d4+1力场伤害。使用更高环阶法术位施放时，每高一环额外增加一枚飞弹。' },
        { name: '防护善恶', nameEn: 'Protection from Evil and Good', level: 1, class: ['wizard', 'sorcerer', 'cleric', 'paladin', 'warlock'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '至多10分钟', description: '你触碰一个自愿生物，保护它免受异怪、天界、元素、妖精、邪魔或不死生物的伤害，这些生物对其攻击具有劣势。' },
        { name: '护盾术', nameEn: 'Shield', level: 1, class: ['wizard', 'sorcerer'], school: '防护', castingTime: '1反应', range: '自身', components: 'V,S', duration: '1轮', description: '当你被攻击命中或被魔法飞弹瞄准时，你可以反应获得+5AC，魔法飞弹无法伤害你。' },
        { name: '无声幻影', nameEn: 'Silent Image', level: 1, class: ['wizard', 'sorcerer', 'bard'], school: '幻术', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多10分钟', description: '你创造一个15尺立方内的视觉幻象，可以移动它。' },
        { name: '睡眠术', nameEn: 'Sleep', level: 1, class: ['wizard', 'sorcerer', 'bard'], school: '惑控', castingTime: '1动作', range: '90尺', components: 'V,S,M', duration: '1分钟', description: '你让生物陷入魔法睡眠，从生命值最低的生物开始，总共影响5d8生命值。' },
        { name: '雷鸣波', nameEn: 'Thunderwave', level: 1, class: ['wizard', 'sorcerer', 'bard', 'druid'], school: '塑能', castingTime: '1动作', range: '自身（15尺立方）', components: 'V,S', duration: '立即', description: '你释放出一道雷鸣波，范围内生物必须进行体质豁免，失败受到2d8雷鸣伤害并被推开10尺。' },
        
        // 牧师法术
        { name: '祝福术', nameEn: 'Bless', level: 1, class: ['cleric', 'paladin'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '至多1分钟', description: '你祝福最多三个生物，它们在攻击检定和豁免检定上加上d4。' },
        { name: '命令术', nameEn: 'Command', level: 1, class: ['cleric', 'paladin'], school: '惑控', castingTime: '1动作', range: '60尺', components: 'V', duration: '1轮', description: '你向一个生物发出一个单词的命令，它必须通过一次智慧豁免，失败在下一回合执行该命令。' },
        { name: '治愈真言', nameEn: 'Cure Wounds', level: 1, class: ['cleric', 'druid', 'bard', 'paladin', 'ranger', 'artificer'], school: '塑能', castingTime: '1动作', range: '触及', components: 'V,S', duration: '立即', description: '你触碰一个生物，为其恢复1d8+施法属性调整值的生命值。' },
        { name: '侦测毒性和疾病', nameEn: 'Detect Poison and Disease', level: 1, class: ['cleric', 'druid', 'paladin', 'ranger'], school: '预言', castingTime: '1动作', range: '自身', components: 'V,S,M', duration: '至多10分钟', description: '你可以感知30尺内的毒素、有毒生物和疾病。' },
        { name: '神恩', nameEn: 'Divine Favor', level: 1, class: ['paladin'], school: '塑能', castingTime: '1附赠动作', range: '自身', components: 'V,S', duration: '至多1分钟', description: '你的武器攻击额外造成1d4光耀伤害。' },
        { name: '虔诚护盾', nameEn: 'Shield of Faith', level: 1, class: ['cleric', 'paladin'], school: '防护', castingTime: '1附赠动作', range: '60尺', components: 'V,S,M', duration: '至多10分钟', description: '你创造一个闪烁着微光的力场，保护一个生物，使其AC+2。' },
        { name: '致伤术', nameEn: 'Inflict Wounds', level: 1, class: ['cleric'], school: '死灵', castingTime: '1动作', range: '触及', components: 'V,S', duration: '立即', description: '你进行一次近战法术攻击，命中造成3d10黯蚀伤害。' },
        { name: '治愈术', nameEn: 'Healing Word', level: 1, class: ['cleric', 'druid', 'bard'], school: '塑能', castingTime: '1附赠动作', range: '60尺', components: 'V', duration: '立即', description: '你让范围内的一个生物恢复1d4+施法属性调整值的生命值。' },
        
        // 德鲁伊法术
        { name: '化兽为友', nameEn: 'Animal Friendship', level: 1, class: ['druid', 'ranger', 'bard'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '24小时', description: '你尝试说服一个野兽你是它的朋友，它必须通过一次智慧豁免，失败被你魅惑。' },
        { name: '纠缠术', nameEn: 'Entangle', level: 1, class: ['druid'], school: '变化', castingTime: '1动作', range: '90尺', components: 'V,S', duration: '至多1分钟', description: '你在范围内创造出藤蔓和杂草，区域内成为困难地形，生物可能被束缚。' },
        { name: '妖火', nameEn: 'Faerie Fire', level: 1, class: ['druid', 'bard'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V', duration: '至多1分钟', description: '你在范围内创造出蓝色、绿色或紫色的光芒，勾勒出物体的轮廓，攻击受影响生物时具有优势。' },
        { name: '云雾术', nameEn: 'Fog Cloud', level: 1, class: ['druid', 'ranger', 'wizard', 'sorcerer'], school: '咒法', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '至多1小时', description: '你在范围内创造一个20尺半径的球状浓雾区域，重度遮蔽视野。' },
        { name: '跳跃术', nameEn: 'Jump', level: 1, class: ['druid', 'ranger', 'wizard', 'sorcerer', 'artificer'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '1分钟', description: '你触碰一个生物，其跳跃距离变为三倍。' },
        { name: '神莓术', nameEn: 'Goodberry', level: 1, class: ['druid', 'ranger'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '立即', description: '你创造10颗魔法浆果，食用一颗可以恢复1点生命值并提供一天的营养。' },
        { name: '动物交谈', nameEn: 'Speak with Animals', level: 1, class: ['druid', 'ranger', 'bard'], school: '预言', castingTime: '1动作', range: '自身', components: 'V,S', duration: '10分钟', description: '你可以与野兽进行简单的交流。' },
        { name: '雷鸣斩', nameEn: 'Thunderous Smite', level: 1, class: ['paladin'], school: '塑能', castingTime: '1附赠动作', range: '自身', components: 'V', duration: '至多1分钟', description: '你的下一次武器攻击命中时，目标受到额外2d6雷鸣伤害，并被推开10尺。' },
        
        // 邪术师法术
        { name: '护甲之主', nameEn: 'Armor of Agathys', level: 1, class: ['warlock'], school: '防护', castingTime: '1动作', range: '自身', components: 'V,S,M', duration: '1小时', description: '你获得5点临时生命值，当生物用近战攻击命中你时，它受到5点冷冻伤害。使用更高环阶法术位施放时，效果增强。' },
        { name: '魅惑人类', nameEn: 'Charm Person', level: 1, class: ['warlock', 'wizard', 'sorcerer', 'bard', 'druid'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,S', duration: '1小时', description: '你尝试魅惑一个人类，它必须通过一次智慧豁免，失败将你视为友善的朋友。' },
        { name: '强令对决', nameEn: 'Compulsion', level: 1, class: ['warlock'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,S', duration: '至多1分钟', description: '你尝试强迫一个生物与你战斗，它必须通过一次智慧豁免，失败在法术持续期间被你吸引。' },
        { name: '巫术箭', nameEn: 'Hex', level: 1, class: ['warlock'], school: '惑控', castingTime: '1附赠动作', range: '90尺', components: 'V,S,M', duration: '至多1小时', description: '你对一个生物施加诅咒，你对它的攻击额外造成1d6黯蚀伤害，且它选择一项能力检定具有劣势。' },
        { name: '脆弱诅咒', nameEn: 'Hex', level: 1, class: ['warlock'], school: '惑控', castingTime: '1附赠动作', range: '90尺', components: 'V,S,M', duration: '至多1小时', description: '你对一个生物施加诅咒，你对它的攻击额外造成1d6黯蚀伤害。' },
        
        // 吟游诗人法术
        { name: '不谐低语', nameEn: 'Dissonant Whispers', level: 1, class: ['bard'], school: '惑控', castingTime: '1动作', range: '60尺', components: 'V', duration: '立即', description: '你向一个生物耳语不谐音符，它必须通过一次智慧豁免，失败受到3d6心灵伤害并立即使用反应远离你。' },
        { name: '塔莎狂笑术', nameEn: "Tasha's Hideous Laughter", level: 1, class: ['bard', 'wizard'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '至多1分钟', description: '你让一个生物陷入狂笑，它必须通过一次智慧豁免，失败倒地并失能，直到法术结束。' },
        { name: '妖火', nameEn: 'Faerie Fire', level: 1, class: ['bard', 'druid'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V', duration: '至多1分钟', description: '你在范围内创造出蓝色、绿色或紫色的光芒，勾勒出物体的轮廓，攻击受影响生物时具有优势。' }
    ],
    
    // 2环法术
    level2: [
        { name: '援助术', nameEn: 'Aid', level: 2, class: ['cleric', 'paladin', 'artificer'], school: '防护', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '8小时', description: '你强化最多三个生物的生命力和决心，它们的最大生命值和当前生命值增加5点。' },
        { name: '变身术', nameEn: 'Alter Self', level: 2, class: ['wizard', 'sorcerer', 'artificer'], school: '变化', castingTime: '1动作', range: '自身', components: 'V,S', duration: '至多1小时', description: '你改变自己的形态，可以获得水生适应、改变外观或获得天然武器。' },
        { name: '动物信使', nameEn: 'Animal Messenger', level: 2, class: ['druid', 'ranger', 'bard'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '24小时', description: '你让一个小型野兽为你传递信息，它会前往你指定的地点并传达最多25个单词的信息。' },
        { name: '秘法锁', nameEn: 'Arcane Lock', level: 2, class: ['wizard', 'artificer'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '直到被解除', description: '你锁住一个门、窗户、箱子等，只有指定生物可以轻易打开，其他生物的解锁检定具有劣势。' },
        { name: '卜筮术', nameEn: 'Augury', level: 2, class: ['cleric', 'druid'], school: '预言', castingTime: '1分钟', range: '自身', components: 'V,S,M', duration: '立即', description: '你通过占卜预知一个行动的结果，DM会告诉你结果是吉、凶、吉凶参半或不明。' },
        { name: '树肤术', nameEn: 'Barkskin', level: 2, class: ['druid', 'ranger'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '至多1小时', description: '你触碰一个自愿生物，其AC至少为16，无论它穿着什么护甲。' },
        { name: '黑暗术', nameEn: 'Darkness', level: 2, class: ['wizard', 'sorcerer', 'warlock'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,M', duration: '至多10分钟', description: '你在范围内创造一个15尺半径的魔法黑暗球体，黑暗会阻隔黑暗视觉。' },
        { name: '黑暗视觉', nameEn: 'Darkvision', level: 2, class: ['wizard', 'sorcerer', 'druid', 'ranger', 'artificer'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '8小时', description: '你触碰一个自愿生物，使其在60尺内获得黑暗视觉。' },
        { name: '侦测思想', nameEn: 'Detect Thoughts', level: 2, class: ['wizard', 'sorcerer', 'bard'], school: '预言', castingTime: '1动作', range: '自身', components: 'V,S,M', duration: '至多1分钟', description: '你可以感知30尺内一个生物的表面思想，并深入探测其更深层次的思想。' },
        { name: '强化属性', nameEn: 'Enhance Ability', level: 2, class: ['cleric', 'druid', 'bard', 'artificer'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '至多1小时', description: '你触碰一个生物，增强它的一项属性，获得不同的效果，如力量获得优势检定和双倍负重。' },
        { name: '灼热金属', nameEn: 'Heat Metal', level: 2, class: ['druid', 'bard', 'artificer'], school: '变化', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多1分钟', description: '你让一块金属变得炽热，持握它的生物受到2d8火焰伤害并可能丢弃它。' },
        { name: '人类定身术', nameEn: 'Hold Person', level: 2, class: ['wizard', 'sorcerer', 'bard', 'cleric', 'druid', 'warlock'], school: '惑控', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多1分钟', description: '你尝试麻痹一个人类，它必须通过一次智慧豁免，失败被麻痹。' },
        { name: '隐形术', nameEn: 'Invisibility', level: 2, class: ['wizard', 'sorcerer', 'bard', 'warlock', 'artificer'], school: '幻术', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '至多1小时', description: '你让一个生物隐形，直到它攻击或施法。' },
        { name: '敲击术', nameEn: 'Knock', level: 2, class: ['wizard', 'sorcerer', 'bard', 'artificer'], school: '变化', castingTime: '1动作', range: '60尺', components: 'V', duration: '立即', description: '你解锁或打开一个被魔法封印的门、箱子等，也可以压制秘法锁1轮。' },
        { name: '次级复原术', nameEn: 'Lesser Restoration', level: 2, class: ['cleric', 'druid', 'bard', 'paladin', 'ranger', 'artificer'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S', duration: '立即', description: '你触碰一个生物，结束它的一种疾病或一种状态（目盲、耳聋、麻痹、中毒）。' },
        { name: '浮空术', nameEn: 'Levitate', level: 2, class: ['wizard', 'sorcerer', 'bard', 'artificer'], school: '变化', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多10分钟', description: '你让一个生物或物体垂直上升或下降最多20尺，你可以用动作移动它。' },
        { name: '镜面术', nameEn: 'Mirror Image', level: 2, class: ['wizard', 'sorcerer', 'warlock'], school: '幻术', castingTime: '1动作', range: '自身', components: 'V,S', duration: '1分钟', description: '你创造出三个你的幻象分身，攻击者可能攻击到幻象而不是你。' },
        { name: '迷雾步', nameEn: 'Misty Step', level: 2, class: ['wizard', 'sorcerer', 'warlock', 'ranger'], school: '咒法', castingTime: '1附赠动作', range: '自身', components: 'V', duration: '立即', description: '你短暂地被银色雾气包围，传送到30尺内一个你能看到的未被占据的空间。' },
        { name: '月光术', nameEn: 'Moonbeam', level: 2, class: ['druid'], school: '塑能', castingTime: '1动作', range: '120尺', components: 'V,S,M', duration: '至多1分钟', description: '你创造出一道5尺半径、40尺高的银色光柱，生物进入或在其中开始回合时受到2d10光耀伤害，变形生物使用其原始形态。' },
        { name: '迷魅人类', nameEn: 'Suggestion', level: 2, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,M', duration: '至多8小时', description: '你建议一个生物执行一个行动，它必须通过一次智慧豁免，失败在法术持续期间执行该建议。' },
        { name: '蛛网术', nameEn: 'Web', level: 2, class: ['wizard', 'sorcerer', 'artificer'], school: '咒法', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多1小时', description: '你在范围内创造出一片蛛网，区域内成为困难地形，生物可能被束缚。' },
        { name: '粉碎音波', nameEn: 'Shatter', level: 2, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '立即', description: '你发出一阵强烈的破坏音波，10尺半径球体内生物必须进行体质豁免，失败受到3d8雷鸣伤害。' }
    ],
    
    // 3环法术
    level3: [
        { name: '活化死尸', nameEn: 'Animate Dead', level: 3, class: ['wizard', 'cleric'], school: '死灵', castingTime: '1分钟', range: '10尺', components: 'V,S,M', duration: '立即', description: '你将一具尸体或一堆骨头转化为不死生物骷髅或僵尸，它服从你的命令。' },
        { name: '降咒', nameEn: 'Bestow Curse', level: 3, class: ['wizard', 'cleric', 'bard'], school: '死灵', castingTime: '1动作', range: '触及', components: 'V,S', duration: '至多1分钟', description: '你触碰一个生物，施加诅咒，可以选择：攻击检定劣势、能力检定劣势、豁免检定劣势、或每回合受到1d8黯蚀伤害。' },
        { name: '爆炎术', nameEn: 'Fireball', level: 3, class: ['wizard', 'sorcerer'], school: '塑能', castingTime: '1动作', range: '150尺', components: 'V,S,M', duration: '立即', description: '你在范围内选择一个点，20尺半径球体内爆发火焰，生物必须进行敏捷豁免，失败受到8d6火焰伤害。' },
        { name: '解除魔法', nameEn: 'Dispel Magic', level: 3, class: ['wizard', 'sorcerer', 'bard', 'cleric', 'druid', 'paladin', 'warlock', 'artificer'], school: '防护', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '立即', description: '你选择一个生物、物体或法术效果，结束其上的法术效果。' },
        { name: '飞行术', nameEn: 'Fly', level: 3, class: ['wizard', 'sorcerer', 'warlock', 'artificer'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '至多10分钟', description: '你触碰一个自愿生物，使其获得60尺飞行速度。' },
        { name: '加速术', nameEn: 'Haste', level: 3, class: ['wizard', 'sorcerer', 'artificer'], school: '变化', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '至多1分钟', description: '你让一个生物速度加倍，AC+2，敏捷豁免具有优势，并获得一个额外的动作。' },
        { name: '防护能量伤害', nameEn: 'Protection from Energy', level: 3, class: ['cleric', 'druid', 'ranger', 'sorcerer', 'wizard', 'artificer'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S', duration: '至多1小时', description: '你触碰一个自愿生物，使其对一种伤害类型（酸、冷、火、力、电、毒、心灵、光耀、黯蚀、雷鸣）具有抗性。' },
        { name: '移除诅咒', nameEn: 'Remove Curse', level: 3, class: ['cleric', 'paladin', 'warlock', 'wizard'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S', duration: '立即', description: '你触碰一个生物或物体，结束其上的所有诅咒。' },
        { name: '复活术', nameEn: 'Revivify', level: 3, class: ['cleric', 'paladin', 'druid', 'artificer'], school: '死灵', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '立即', description: '你触碰一个死亡不超过1分钟的生物，使其恢复1点生命值。' },
        { name: '缓慢术', nameEn: 'Slow', level: 3, class: ['wizard', 'sorcerer', 'bard'], school: '变化', castingTime: '1动作', range: '120尺', components: 'V,S,M', duration: '至多1分钟', description: '你让最多六个生物速度减半，AC-2，敏捷豁免具有劣势，不能进行反应，只能进行动作或附赠动作之一。' },
        { name: '灵体武器', nameEn: 'Spiritual Weapon', level: 3, class: ['cleric'], school: '塑能', castingTime: '1附赠动作', range: '60尺', components: 'V,S', duration: '1分钟', description: '你创造出一把浮动的武器，你可以用附赠动作让它攻击60尺内的生物，造成1d8+施法属性调整值的力场伤害。' },
        { name: '闪电束', nameEn: 'Lightning Bolt', level: 3, class: ['wizard', 'sorcerer', 'druid'], school: '塑能', castingTime: '1动作', range: '自身（100尺线形）', components: 'V,S,M', duration: '立即', description: '你发出一道100尺长、5尺宽的闪电，生物必须进行敏捷豁免，失败受到8d6闪电伤害。' },
        { name: '水下呼吸', nameEn: 'Water Breathing', level: 3, class: ['druid', 'ranger', 'sorcerer', 'wizard', 'artificer'], school: '变化', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '24小时', description: '你让最多十个自愿生物获得水下呼吸能力。' },
        { name: '风墙术', nameEn: 'Wind Wall', level: 3, class: ['druid', 'ranger'], school: '塑能', castingTime: '1动作', range: '120尺', components: 'V,S,M', duration: '至多1分钟', description: '你创造出一道风墙，可以阻挡小型飞行生物和远程武器攻击。' }
    ]
};

// 导出法术数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SPELLS };
}
