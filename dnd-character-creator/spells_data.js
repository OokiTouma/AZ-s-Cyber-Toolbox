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
        { name: '鉴定术', nameEn: 'Identify', level: 1, class: ['wizard', 'bard', 'artificer'], school: '预言', castingTime: '1分钟', range: '触及', components: 'V,S,M', duration: '立即', description: '你选择一个物品，了解其是否为魔法物品、如何使用方法、需要同调等。' },
        { name: '油腻术', nameEn: 'Grease', level: 1, class: ['wizard', 'sorcerer', 'artificer'], school: '咒法', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '1分钟', description: '你在范围内创造一个10尺方形的滑腻油脂区域，区域内成为困难地形，生物可能滑倒。' },
        { name: '跳跃术', nameEn: 'Jump', level: 1, class: ['wizard', 'sorcerer', 'druid', 'ranger', 'artificer'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '1分钟', description: '你触碰一个生物，其跳跃距离变为三倍。' },
        { name: '塔莎狂笑术', nameEn: "Tasha's Hideous Laughter", level: 1, class: ['wizard', 'bard'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '至多1分钟', description: '你让一个生物陷入狂笑，它必须通过一次智慧豁免，失败倒地并失能，直到法术结束。' },
        { name: '不谐低语', nameEn: 'Dissonant Whispers', level: 1, class: ['bard'], school: '惑控', castingTime: '1动作', range: '60尺', components: 'V', duration: '立即', description: '你向一个生物耳语不谐音符，它必须通过一次智慧豁免，失败受到3d6心灵伤害并立即使用反应远离你。' },
        { name: '雷鸣斩', nameEn: 'Thunderous Smite', level: 1, class: ['paladin'], school: '塑能', castingTime: '1附赠动作', range: '自身', components: 'V', duration: '至多1分钟', description: '你的下一次武器攻击命中时，目标受到额外2d6雷鸣伤害，并被推开10尺。' },
        { name: '庇护术', nameEn: 'Sanctuary', level: 1, class: ['cleric', 'artificer'], school: '防护', castingTime: '1附赠动作', range: '30尺', components: 'V,S,M', duration: '1分钟', description: '你保护一个生物，攻击该生物的生物必须先进行智慧豁免，失败必须选择新目标或放弃攻击。' },
        { name: '灾祸术', nameEn: 'Bane', level: 1, class: ['cleric', 'bard'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '至多1分钟', description: '你诅咒最多三个生物，它们在攻击检定和豁免检定上减去d4。' },
        { name: '英雄气概', nameEn: 'Heroism', level: 1, class: ['bard', 'paladin'], school: '惑控', castingTime: '1动作', range: '触及', components: 'V,S', duration: '至多1分钟', description: '你触碰一个自愿生物，它在每个回合开始时获得临时生命值，且免疫恐慌。' },
        { name: '疗伤术', nameEn: 'Healing Word', level: 1, class: ['cleric', 'druid', 'bard'], school: '塑能', castingTime: '1附赠动作', range: '60尺', components: 'V', duration: '立即', description: '你让范围内的一个生物恢复1d4+施法属性调整值的生命值。' },
        { name: '致伤术', nameEn: 'Inflict Wounds', level: 1, class: ['cleric'], school: '死灵', castingTime: '1动作', range: '触及', components: 'V,S', duration: '立即', description: '你进行一次近战法术攻击，命中造成3d10黯蚀伤害。' },
        { name: '虔诚护盾', nameEn: 'Shield of Faith', level: 1, class: ['cleric', 'paladin'], school: '防护', castingTime: '1附赠动作', range: '60尺', components: 'V,S,M', duration: '至多10分钟', description: '你创造一个闪烁着微光的力场，保护一个生物，使其AC+2。' },
        { name: '神恩', nameEn: 'Divine Favor', level: 1, class: ['paladin'], school: '塑能', castingTime: '1附赠动作', range: '自身', components: 'V,S', duration: '至多1分钟', description: '你的武器攻击额外造成1d4光耀伤害。' },
        { name: '命令术', nameEn: 'Command', level: 1, class: ['cleric', 'paladin'], school: '惑控', castingTime: '1动作', range: '60尺', components: 'V', duration: '1轮', description: '你向一个生物发出一个单词的命令，它必须通过一次智慧豁免，失败在下一回合执行该命令。' },
        { name: '祝福术', nameEn: 'Bless', level: 1, class: ['cleric', 'paladin'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '至多1分钟', description: '你祝福最多三个生物，它们在攻击检定和豁免检定上加上d4。' },
        { name: '治愈真言', nameEn: 'Cure Wounds', level: 1, class: ['cleric', 'druid', 'bard', 'paladin', 'ranger', 'artificer'], school: '塑能', castingTime: '1动作', range: '触及', components: 'V,S', duration: '立即', description: '你触碰一个生物，为其恢复1d8+施法属性调整值的生命值。' },
        { name: '侦测毒性和疾病', nameEn: 'Detect Poison and Disease', level: 1, class: ['cleric', 'druid', 'paladin', 'ranger'], school: '预言', castingTime: '1动作', range: '自身', components: 'V,S,M', duration: '至多10分钟', description: '你可以感知30尺内的毒素、有毒生物和疾病。' },
        { name: '化兽为友', nameEn: 'Animal Friendship', level: 1, class: ['druid', 'ranger', 'bard'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '24小时', description: '你尝试说服一个野兽你是它的朋友，它必须通过一次智慧豁免，失败被你魅惑。' },
        { name: '纠缠术', nameEn: 'Entangle', level: 1, class: ['druid'], school: '变化', castingTime: '1动作', range: '90尺', components: 'V,S', duration: '至多1分钟', description: '你在范围内创造出藤蔓和杂草，区域内成为困难地形，生物可能被束缚。' },
        { name: '妖火', nameEn: 'Faerie Fire', level: 1, class: ['druid', 'bard'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V', duration: '至多1分钟', description: '你在范围内创造出蓝色、绿色或紫色的光芒，勾勒出物体的轮廓，攻击受影响生物时具有优势。' },
        { name: '神莓术', nameEn: 'Goodberry', level: 1, class: ['druid', 'ranger'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '立即', description: '你创造10颗魔法浆果，食用一颗可以恢复1点生命值并提供一天的营养。' },
        { name: '动物交谈', nameEn: 'Speak with Animals', level: 1, class: ['druid', 'ranger', 'bard'], school: '预言', castingTime: '1动作', range: '自身', components: 'V,S', duration: '10分钟', description: '你可以与野兽进行简单的交流。' },
        { name: '造风术', nameEn: 'Gust of Wind', level: 1, class: ['druid', 'sorcerer', 'wizard'], school: '塑能', castingTime: '1动作', range: '自身（60尺线形）', components: 'V,S,M', duration: '至多1分钟', description: '你创造出强风，可以推开生物和物体，熄灭火焰。' },
        { name: '隐形仆役', nameEn: 'Unseen Servant', level: 1, class: ['wizard', 'bard', 'warlock'], school: '咒法', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '1小时', description: '你创造出一个隐形的力场仆役，可以执行简单的任务。' },
        { name: '巫术箭', nameEn: 'Hex', level: 1, class: ['warlock'], school: '惑控', castingTime: '1附赠动作', range: '90尺', components: 'V,S,M', duration: '至多1小时', description: '你对一个生物施加诅咒，你对它的攻击额外造成1d6黯蚀伤害，且它选择一项能力检定具有劣势。' },
        { name: '护甲之主', nameEn: 'Armor of Agathys', level: 1, class: ['warlock'], school: '防护', castingTime: '1动作', range: '自身', components: 'V,S,M', duration: '1小时', description: '你获得5点临时生命值，当生物用近战攻击命中你时，它受到5点冷冻伤害。使用更高环阶法术位施放时，效果增强。' },
        { name: '强令对决', nameEn: "Compelled Duel", level: 1, class: ['paladin'], school: '惑控', castingTime: '1附赠动作', range: '30尺', components: 'V', duration: '至多1分钟', description: '你尝试与一个生物进行对决。目标必须通过一次智慧豁免，否则在法术持续期间被限制与你战斗。它对你以外的生物攻击具有劣势，且必须尝试靠近你。' },
        { name: '至圣斩', nameEn: "Divine Smite", level: 1, class: ['paladin'], school: '塑能', castingTime: '1反应', range: '自身', components: 'V', duration: '立即', description: '当你用近战武器攻击命中一个生物时，你可以消耗一个法术位造成额外光耀伤害。2环或更低环阶造成2d8光耀伤害，对邪魔或不死生物额外增加1d8，如果目标是不死生物则再增加1d8。' },
        { name: '侦测善恶', nameEn: 'Detect Evil and Good', level: 1, class: ['paladin', 'cleric'], school: '预言', castingTime: '1动作', range: '自身', components: 'V,S', duration: '至多10分钟', description: '你可以感知30尺内的天界、元素、妖精、邪魔或不死生物，并感知被祝圣或亵渎的物品和地点。' },
        { name: '炽焰斩', nameEn: 'Searing Smite', level: 1, class: ['paladin'], school: '塑能', castingTime: '1附赠动作', range: '自身', components: 'V', duration: '至多1分钟', description: '你的下一次武器攻击命中时，目标受到额外1d6火焰伤害，并在每个回合开始时受到1d6火焰伤害，直到它通过一次体质豁免。' },
        { name: '激愤斩', nameEn: 'Wrathful Smite', level: 1, class: ['paladin'], school: '塑能', castingTime: '1附赠动作', range: '自身', components: 'V', duration: '至多1分钟', description: '你的下一次武器攻击命中时，目标受到额外1d6心灵伤害，并必须通过一次智慧豁免，否则恐慌直到法术结束。' },
        { name: '净化饮食', nameEn: 'Purify Food and Drink', level: 1, class: ['paladin', 'cleric', 'druid'], school: '变化', castingTime: '1 动作', range: '10 尺', components: 'V,S', duration: '立即', description: '你净化 5 尺半径内的所有非魔法食物和饮水，移除毒素和疾病。' },
        { name: '哈达之臂', nameEn: 'Arms of Hadar', level: 1, class: ['warlock'], school: '咒法', castingTime: '1 动作', range: '自身（10 尺半径）', components: 'V,S', duration: '立即', description: '你召唤出哈达的触手能量，10 尺半径内生物必须进行力量豁免，失败受到 2d6 黯蚀伤害且本回合无法进行反应，成功则伤害减半。' },
        { name: '炼狱叱喝', nameEn: 'Hellish Rebuke', level: 1, class: ['warlock'], school: '塑能', castingTime: '1 反应', range: '60 尺', components: 'V,S', duration: '立即', description: '当你受到伤害时，你可以反应让伤害来源进行敏捷豁免，失败受到 2d10 火焰伤害，成功伤害减半。' },
        { name: '迷幻手稿', nameEn: 'Illusory Script', level: 1, class: ['warlock', 'wizard'], school: '幻术', castingTime: '1 分钟', range: '触及', components: 'S,M', duration: '10 天', description: '你触碰一段墨水或文字，为其施加幻觉，只有你指定的生物才能看到真实内容，其他人看到的内容由你决定。' }
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
        { name: '粉碎音波', nameEn: 'Shatter', level: 2, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '立即', description: '你发出一阵强烈的破坏音波，10尺半径球体内生物必须进行体质豁免，失败受到3d8雷鸣伤害。' },
        { name: '朦胧术', nameEn: 'Blur', level: 2, class: ['wizard', 'sorcerer', 'artificer'], school: '幻术', castingTime: '1动作', range: '自身', components: 'V', duration: '至多1分钟', description: '你的身体变得模糊不清，攻击你的生物在攻击检定上具有劣势。' },
        { name: '马友夫强酸箭', nameEn: "Melf's Acid Arrow", level: 2, class: ['wizard', 'sorcerer', 'artificer'], school: '塑能', castingTime: '1动作', range: '90尺', components: 'V,S,M', duration: '立即', description: '你向目标射出一支闪烁的绿色箭，命中造成4d4酸伤害，并在下一回合造成2d4酸伤害。' },
        { name: '炽焰法球', nameEn: 'Flaming Sphere', level: 2, class: ['wizard', 'sorcerer', 'druid'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多1分钟', description: '你创造出一个5尺直径的燃烧法球，可以用动作移动它，生物接触时受到2d6火焰伤害。' },
        { name: '灼热射线', nameEn: 'Scorching Ray', level: 2, class: ['wizard', 'sorcerer'], school: '塑能', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '立即', description: '你创造出三道火焰射线，每道造成2d6火焰伤害。' },
        { name: '灵体武器', nameEn: 'Spiritual Weapon', level: 2, class: ['cleric'], school: '塑能', castingTime: '1附赠动作', range: '60尺', components: 'V,S', duration: '1分钟', description: '你创造出一把浮动的武器，可以用附赠动作攻击60尺内的生物，造成1d8+施法属性调整值的力场伤害。' },
        { name: '沉默术', nameEn: 'Silence', level: 2, class: ['cleric', 'bard', 'ranger'], school: '幻术', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '至多10分钟', description: '你在范围内创造一个20尺半径的沉默区域，区域内无法发出声音，法术无法 verbal 成分。' },
        { name: '守护之链', nameEn: 'Warding Bond', level: 2, class: ['cleric', 'paladin'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '1小时', description: '你与一个生物建立魔法链接，你获得+1AC、+1豁免检定，且它受到的伤害的一半由你承担。' },
        { name: '野兽形态', nameEn: 'Beast Sense', level: 2, class: ['druid', 'ranger'], school: '预言', castingTime: '1动作', range: '触及', components: 'S', duration: '1小时', description: '你可以通过一只自愿野兽的感官来感知，直到你使用动作结束法术。' },
        { name: '荆棘丛生', nameEn: 'Spike Growth', level: 2, class: ['druid', 'ranger'], school: '变化', castingTime: '1动作', range: '150尺', components: 'V,S,M', duration: '至多10分钟', description: '你在范围内创造出一片棘刺区域，区域内成为困难地形，生物移动时受到2d4穿刺伤害。' },
        { name: '火焰刀', nameEn: 'Flame Blade', level: 2, class: ['druid'], school: '塑能', castingTime: '1附赠动作', range: '自身', components: 'V,S,M', duration: '至多10分钟', description: '你召唤出一把炽热的火焰刀，可以造成3d6火焰伤害。' },
        { name: '寻获坐骑', nameEn: 'Find Steed', level: 2, class: ['paladin'], school: '咒法', castingTime: '10分钟', range: '30尺', components: 'V,S', duration: '立即', description: '你召唤出一个智能坐骑（战马、矮种马、骆驼、野猪或獒犬），它服从你的命令，与你心灵感应，并在你召唤时获得你的法术位加成。' },
        { name: '遗体防腐', nameEn: 'Gentle Repose', level: 2, class: ['paladin', 'cleric', 'wizard'], school: '死灵', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '10天', description: '你触碰一具尸体或其他遗骸，使其在持续时间内不会腐烂，且无法被转化为不死生物。' },
        { name: '物件定位术', nameEn: 'Locate Object', level: 2, class: ['paladin', 'bard', 'cleric', 'druid', 'ranger', 'wizard'], school: '预言', castingTime: '1动作', range: '自身', components: 'V,S,M', duration: '至多10分钟', description: '你可以感知一个你熟悉的特定物品或一类物品的方向和距离，只要在1000尺内且不被铅或薄银片阻挡。' },
        { name: '魔化武器', nameEn: 'Magic Weapon', level: 2, class: ['paladin', 'wizard', 'artificer'], school: '变化', castingTime: '1附赠动作', range: '触及', components: 'V,S', duration: '至多1小时', description: '你触碰一把非魔法武器，使其成为+1魔法武器，攻击检定和伤害检定获得+1加值。' },
        { name: '治疗祷言', nameEn: 'Prayer of Healing', level: 2, class: ['paladin', 'cleric'], school: '塑能', castingTime: '10分钟', range: '30尺', components: 'V', duration: '立即', description: '你让至多六个生物恢复2d8+施法属性调整值的生命值。' },
        { name: '防护毒素', nameEn: 'Protection from Poison', level: 2, class: ['paladin', 'cleric', 'druid', 'ranger'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S', duration: '1小时', description: '你触碰一个生物，中和其体内的毒素，结束中毒状态，并在持续时间内对毒素伤害具有抗性。' },
        { name: '闪耀斩', nameEn: 'Branding Smite', level: 2, class: ['paladin'], school: '塑能', castingTime: '1附赠动作', range: '自身', components: 'V', duration: '至多1分钟', description: '你的下一次武器攻击命中时，目标受到额外2d6光耀伤害，发出光芒，无法隐形，并在每次攻击时额外受到1d6光耀伤害。' },
        { name: '诚实之域', nameEn: "Zone of Truth", level: 2, class: ['paladin', 'cleric', 'bard'], school: '惑控', castingTime: '1 动作', range: '60 尺', components: 'V,S', duration: '10 分钟', description: '你创造一个 15 尺半径的球形区域，区域内的生物在说话时不能说谎，可以通过魅力豁免抵抗此效果。' },
        { name: '匕首之云', nameEn: 'Cloud of Daggers', level: 2, class: ['warlock', 'wizard', 'sorcerer'], school: '咒法', castingTime: '1 动作', range: '60 尺', components: 'V,S,M', duration: '至多 1 分钟', description: '你在 5 尺立方内创造出一团旋转的魔法匕首，生物在区域内开始回合或进入时受到 2d4 挥砍伤害。' },
        { name: '疯狂冠冕', nameEn: 'Crown of Madness', level: 2, class: ['warlock', 'wizard', 'sorcerer'], school: '惑控', castingTime: '1 动作', range: '120 尺', components: 'V,S', duration: '至多 1 分钟', description: '你尝试控制一个生物，它必须通过一次智慧豁免，失败被你魅惑，你可以用附赠动作控制它攻击。' },
        { name: '注目术', nameEn: 'Enthrall', level: 2, class: ['warlock', 'bard'], school: '惑控', castingTime: '1 动作', range: '60 尺', components: 'V,S', duration: '1 分钟', description: '你说出魅惑之言，60 尺内能听到你的生物必须进行智慧豁免，失败在 1 分钟内对你的攻击具有劣势。' },
        { name: '心灵尖刺', nameEn: 'Mind Spike', level: 2, class: ['warlock', 'wizard'], school: '预言', castingTime: '1 动作', range: '60 尺', components: 'S', duration: '至多 1 小时', description: '你刺穿目标的思想，造成 3d8 心灵伤害，并在持续时间内感知其位置。' },
        { name: '蛛行术', nameEn: 'Spider Climb', level: 2, class: ['warlock', 'wizard', 'sorcerer'], school: '变化', castingTime: '1 动作', range: '触及', components: 'V,S,M', duration: '至多 1 小时', description: '你触碰一个自愿生物，赋予它在天花板和墙壁上攀爬的能力。' },
        { name: '衰弱射线', nameEn: 'Ray of Enfeeblement', level: 2, class: ['warlock', 'wizard'], school: '死灵', castingTime: '1 动作', range: '60 尺', components: 'V,S', duration: '至多 1 分钟', description: '你射出一道黑色能量射线，目标必须进行体质豁免，失败在持续时间内进行武器攻击时伤害骰减半。' }
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
        { name: '闪电束', nameEn: 'Lightning Bolt', level: 3, class: ['wizard', 'sorcerer', 'druid'], school: '塑能', castingTime: '1动作', range: '自身（100尺线形）', components: 'V,S,M', duration: '立即', description: '你发出一道100尺长、5尺宽的闪电，生物必须进行敏捷豁免，失败受到8d6闪电伤害。' },
        { name: '水下呼吸', nameEn: 'Water Breathing', level: 3, class: ['druid', 'ranger', 'sorcerer', 'wizard', 'artificer'], school: '变化', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '24小时', description: '你让最多十个自愿生物获得水下呼吸能力。' },
        { name: '风墙术', nameEn: 'Wind Wall', level: 3, class: ['druid', 'ranger'], school: '塑能', castingTime: '1动作', range: '120尺', components: 'V,S,M', duration: '至多1分钟', description: '你创造出一道风墙，可以阻挡小型飞行生物和远程武器攻击。' },
        { name: '法术反制', nameEn: 'Counterspell', level: 3, class: ['wizard', 'sorcerer', 'warlock'], school: '防护', castingTime: '1反应', range: '60尺', components: 'S', duration: '立即', description: '你试图打断一个生物正在施放的法术，如果目标法术环阶不高于3环则自动失败，否则进行施法属性检定。' },
        { name: '恐惧术', nameEn: 'Fear', level: 3, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '幻术', castingTime: '1动作', range: '自身（30尺锥形）', components: 'V,S,M', duration: '至多1分钟', description: '你投射出可怕的幻象，锥形区域内生物必须进行智慧豁免，失败恐慌并必须疾走远离你。' },
        { name: '气化形体', nameEn: 'Gaseous Form', level: 3, class: ['wizard', 'sorcerer', 'warlock', 'artificer'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '至多1小时', description: '你触碰一个自愿生物，使其变成一团云雾，可以穿过小缝隙，获得60尺飞行速度。' },
        { name: '催眠图纹', nameEn: 'Hypnotic Pattern', level: 3, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '幻术', castingTime: '1动作', range: '120尺', components: 'S,M', duration: '至多1分钟', description: '你创造出一个扭曲的光彩图纹，30尺立方区域内生物必须进行智慧豁免，失败被魅惑并失能。' },
        { name: '高等幻影', nameEn: 'Major Image', level: 3, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '幻术', castingTime: '1动作', range: '120尺', components: 'V,S,M', duration: '至多10分钟', description: '你创造一个20尺立方内的视觉幻象，包括声音、气味和温度效果。' },
        { name: '死者交谈', nameEn: 'Speak with Dead', level: 3, class: ['cleric', 'bard', 'wizard'], school: '死灵', castingTime: '1动作', range: '10尺', components: 'V,S,M', duration: '10分钟', description: '你可以向一具尸体提问，它会回答你所知道的关于其生前的问题。' },
        { name: '植物滋长', nameEn: 'Plant Growth', level: 3, class: ['druid', 'ranger', 'bard'], school: '变化', castingTime: '1动作或8小时', range: '150尺', components: 'V,S', duration: '立即', description: '你在范围内使植物快速生长，区域内成为困难地形，或者使作物产量翻倍。' },
        { name: '召雷术', nameEn: 'Call Lightning', level: 3, class: ['druid'], school: '塑能', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '至多10分钟', description: '你召唤出一道雷云，可以用动作召唤闪电攻击，造成3d10闪电伤害。' },
        { name: '饥饿之刃', nameEn: 'Hunger of Hadar', level: 3, class: ['warlock'], school: '咒法', castingTime: '1动作', range: '150尺', components: 'V,S,M', duration: '至多1分钟', description: '你打开一个通往哈达尔黑暗领域的传送门，20尺半径球体内成为重度遮蔽，生物在其中开始回合时受到2d6冷冻伤害。' },
        { name: '吸血鬼之触', nameEn: 'Vampiric Touch', level: 3, class: ['warlock', 'wizard', 'sorcerer'], school: '死灵', castingTime: '1动作', range: '自身', components: 'V,S', duration: '至多1分钟', description: '你的触碰造成3d6黯蚀伤害，你恢复等于造成伤害一半的生命值。' },
        { name: '活力灵光', nameEn: 'Aura of Vitality', level: 3, class: ['paladin'], school: '塑能', castingTime: '1动作', range: '自身（30尺半径）', components: 'V', duration: '至多1分钟', description: '你散发出治愈能量，可以用附赠动作让30尺内的一个生物恢复2d6生命值。' },
        { name: '致盲斩', nameEn: "Blinding Smite", level: 3, class: ['paladin'], school: '塑能', castingTime: '1附赠动作', range: '自身', components: 'V', duration: '至多1分钟', description: '你的下一次武器攻击命中时，目标受到额外3d8光耀伤害，并必须通过一次体质豁免，否则目盲直到法术结束。' },
        { name: '造粮术', nameEn: 'Create Food and Water', level: 3, class: ['paladin', 'cleric', 'druid'], school: '咒法', castingTime: '1动作', range: '30尺', components: 'V,S', duration: '立即', description: '你创造出45磅的食物和30加仑的饮水，足够15个生物食用一天。' },
        { name: '十字军披风', nameEn: "Crusader's Mantle", level: 3, class: ['paladin'], school: '塑能', castingTime: '1动作', range: '自身', components: 'V', duration: '至多1分钟', description: '你散发出神圣力量，30尺内的友方生物在命中生物时额外造成1d4光耀伤害。' },
        { name: '昼明术', nameEn: 'Daylight', level: 3, class: ['paladin', 'cleric', 'druid', 'ranger', 'sorcerer', 'wizard'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '1小时', description: '你触碰一个物体，使其发出60尺明亮光照和额外60尺微光光照，可驱散魔法黑暗。' },
        { name: '元素武器', nameEn: 'Elemental Weapon', level: 3, class: ['paladin'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S', duration: '至多1小时', description: '你触碰一把非魔法武器，选择一种伤害类型（酸、冷、火、电、雷鸣），武器攻击检定获得+1，并额外造成1d4选定类型的伤害。' },
        { name: '防护法阵', nameEn: 'Magic Circle', level: 3, class: ['paladin', 'cleric', 'warlock', 'wizard'], school: '防护', castingTime: '1 分钟', range: '10 尺', components: 'V,S,M', duration: '1 小时', description: '你创造一个 10 尺半径的圆柱形法阵，可以困住或保护天界、元素、妖精或邪魔。' },
        { name: '妖精召唤术', nameEn: 'Summon Fey', level: 3, class: ['warlock', 'druid', 'ranger'], school: '咒法', castingTime: '1 动作', range: '90 尺', components: 'V,S,M', duration: '至多 1 小时', description: '你召唤出一个妖精生物为你战斗，可以选择迷雾生物（控制型）、欺诈妖精（幻术型）或狂怒精类（攻击型）。' },
        { name: '亡灵召唤术', nameEn: 'Summon Undead', level: 3, class: ['warlock', 'wizard'], school: '死灵', castingTime: '1 动作', range: '90 尺', components: 'V,S,M', duration: '至多 1 小时', description: '你召唤出一个亡灵生物为你战斗，可以选择幽灵（飞行型）、骷髅（远程型）或僵尸（近战型）。' },
        { name: '巧言术', nameEn: 'Tongues', level: 3, class: ['warlock', 'cleric', 'wizard', 'sorcerer', 'bard'], school: '预言', castingTime: '1 动作', range: '触及', components: 'V,M', duration: '1 小时', description: '你触碰一个生物，赋予它理解任何语言并让任何生物理解它的能力。' },
        { name: '回生术', nameEn: 'Revivify', level: 3, class: ['cleric', 'paladin', 'druid', 'artificer'], school: '死灵', castingTime: '1 动作', range: '触及', components: 'V,S,M', duration: '立即', description: '你触碰一个死亡不超过 1 分钟的生物，使其恢复 1 点生命值。' },
        { name: '闪现术', nameEn: 'Blink', level: 3, class: ['wizard', 'sorcerer', 'artificer'], school: '变化', castingTime: '1 动作', range: '自身', components: 'V,S', duration: '1 分钟', description: '你每回合结束时掷 d20，11 或更高则进入以太位面，回合开始时返回。' },
        { name: '反制咒法', nameEn: 'Counterspell', level: 3, class: ['wizard', 'sorcerer', 'warlock'], school: '防护', castingTime: '1 反应', range: '60 尺', components: 'S', duration: '立即', description: '你试图打断一个生物正在施放的法术，如果目标法术环阶不高于 3 环则自动失败，否则进行施法属性检定。' },
        { name: '火球术', nameEn: 'Fireball', level: 3, class: ['wizard', 'sorcerer'], school: '塑能', castingTime: '1 动作', range: '150 尺', components: 'V,S,M', duration: '立即', description: '你在范围内选择一个点，20 尺半径球体内爆发火焰，生物必须进行敏捷豁免，失败受到 8d6 火焰伤害。' },
        { name: '探知术', nameEn: 'Clairvoyance', level: 3, class: ['cleric', 'wizard', 'sorcerer', 'bard'], school: '预言', castingTime: '10 分钟', range: '1 英里', components: 'V,S,M', duration: '至多 10 分钟', description: '你在熟悉的位置创造一个隐形的传感器，可以看到或听到该区域。' }
    ],
    
    // 4环法术
    level4: [
        { name: '秘法眼', nameEn: 'Arcane Eye', level: 4, class: ['wizard', 'artificer'], school: '预言', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '至多1小时', description: '你创造出一个隐形的魔法眼，可以移动并向你传递视觉信息，具有黑暗视觉。' },
        { name: '放逐术', nameEn: 'Banishment', level: 4, class: ['cleric', 'paladin', 'warlock', 'sorcerer', 'wizard'], school: '防护', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多1分钟', description: '你尝试将一个生物驱逐到另一个位面，它必须通过一次魅力豁免，失败被放逐。' },
        { name: '枯萎术', nameEn: 'Blight', level: 4, class: ['druid', 'sorcerer', 'warlock', 'wizard'], school: '死灵', castingTime: '1动作', range: '30尺', components: 'V,S', duration: '立即', description: '你让目标生物的水分流失，造成8d8黯蚀伤害，植物生物具有劣势。' },
        { name: '信仰守卫', nameEn: 'Guardian of Faith', level: 4, class: ['cleric'], school: '塑能', castingTime: '1动作', range: '30尺', components: 'V', duration: '8小时', description: '你召唤出一个巨大的幽灵守卫，生物靠近时受到20点光耀伤害。' },
        { name: '行动自如', nameEn: 'Freedom of Movement', level: 4, class: ['cleric', 'druid', 'ranger', 'bard', 'artificer'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '1小时', description: '你触碰一个自愿生物，使其无视困难地形，自动摆脱束缚和麻痹。' },
        { name: '变形术', nameEn: 'Polymorph', level: 4, class: ['wizard', 'sorcerer', 'bard', 'druid'], school: '变化', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多1小时', description: '你将一个生物变成另一种生物，其属性被新形态的属性替代。' },
        { name: '塑石术', nameEn: 'Stone Shape', level: 4, class: ['cleric', 'druid', 'wizard', 'artificer'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '立即', description: '你触碰一块石头，将其塑造成你选择的任何形状。' },
        { name: '石肤术', nameEn: 'Stoneskin', level: 4, class: ['druid', 'ranger', 'sorcerer', 'wizard', 'artificer'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '至多1小时', description: '你触碰一个自愿生物，使其获得对非魔法钝击、穿刺和挥砍伤害的抗性。' },
        { name: '火墙术', nameEn: 'Wall of Fire', level: 4, class: ['druid', 'sorcerer', 'wizard'], school: '塑能', castingTime: '1动作', range: '120尺', components: 'V,S,M', duration: '至多1分钟', description: '你创造出一道火墙，生物穿过或在其旁边结束回合时受到5d8火焰伤害。' },
        { name: '高等隐形术', nameEn: 'Greater Invisibility', level: 4, class: ['wizard', 'sorcerer', 'bard', 'artificer'], school: '幻术', castingTime: '1动作', range: '触及', components: 'V,S', duration: '至多1分钟', description: '你让一个生物隐形，即使攻击或施法也保持隐形。' },
        { name: '幻景', nameEn: 'Hallucinatory Terrain', level: 4, class: ['wizard', 'druid', 'bard', 'warlock'], school: '幻术', castingTime: '10分钟', range: '300尺', components: 'V,S,M', duration: '24小时', description: '你让一片自然地形看起来、听起来和闻起来像另一种地形。' },
        { name: '欧提路克弹力法球', nameEn: "Otiluke's Resilient Sphere", level: 4, class: ['wizard', 'artificer'], school: '防护', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '至多1分钟', description: '你将一个生物或物体包围在一个球形力场中，力场内外的攻击和效果都无法穿透。' },
        { name: '魅影杀手', nameEn: 'Phantasmal Killer', level: 4, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '幻术', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '至多1分钟', description: '你让目标生物看到最恐惧的幻象，每回合受到4d10心灵伤害并恐慌。' },
        { name: '生物定位术', nameEn: 'Locate Creature', level: 4, class: ['cleric', 'druid', 'ranger', 'bard', 'wizard'], school: '预言', castingTime: '1动作', range: '自身', components: 'V,S,M', duration: '至多1小时', description: '你可以感知一个你熟悉的生物的方向和距离，只要它在1000尺内。' },
        { name: '净化灵体', nameEn: 'Death Ward', level: 4, class: ['cleric', 'paladin'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S', duration: '8小时', description: '你触碰一个生物，当其生命值降至0时改为1，或当受到即死效果时免疫。' },
        { name: '召唤林地生物', nameEn: 'Conjure Woodland Beings', level: 4, class: ['druid', 'ranger'], school: '咒法', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多1小时', description: '你召唤出妖精生物为你战斗，可以选择召唤一个CR2或更低，或两个CR1或更低等。' },
        { name: '支配野兽', nameEn: 'Dominate Beast', level: 4, class: ['druid', 'sorcerer', 'warlock', 'ranger'], school: '惑控', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '至多1分钟', description: '你尝试控制一个野兽，它必须通过一次智慧豁免，失败被你控制。' },
        { name: '生命灵光', nameEn: 'Aura of Life', level: 4, class: ['paladin'], school: '防护', castingTime: '1动作', range: '自身（30尺半径）', components: 'V', duration: '至多10分钟', description: '你散发出生命能量，30尺内的非敌对生物对黯蚀伤害具有抗性，生命值上限不会降低，且在其回合开始时若生命值为0则恢复1点生命值。' },
        { name: '净化灵光', nameEn: 'Aura of Purity', level: 4, class: ['paladin'], school: '防护', castingTime: '1动作', range: '自身（30尺半径）', components: 'V', duration: '至多10分钟', description: '你散发出净化能量，30尺内的友方生物对毒素伤害具有抗性，不会中毒或患病，并对魅惑和恐慌具有优势。' },
        { name: '防死结界', nameEn: 'Death Ward', level: 4, class: ['paladin', 'cleric'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S', duration: '8小时', description: '你触碰一个生物，当其生命值降至0时改为1，或当受到即死效果时免疫。' },
        { name: '惊惧斩', nameEn: 'Staggering Smite', level: 4, class: ['paladin'], school: '塑能', castingTime: '1附赠动作', range: '自身', components: 'V', duration: '至多1分钟', description: '你的下一次武器攻击命中时，目标受到额外4d6心灵伤害，并必须通过一次智慧豁免，否则在法术持续期间攻击检定和豁免检定具有劣势，且不能进行反应。' }
    ],
    
    // 5环法术
    level5: [
        { name: '异界誓缚', nameEn: 'Planar Binding', level: 5, class: ['wizard', 'cleric', 'druid', 'bard'], school: '防护', castingTime: '1小时', range: '60尺', components: 'V,S,M', duration: '24小时', description: '你尝试束缚一个天界、元素、妖精或邪魔，它必须通过一次魅力豁免，失败为你服务。' },
        { name: '异界传送', nameEn: 'Teleportation Circle', level: 5, class: ['wizard', 'bard', 'sorcerer'], school: '咒法', castingTime: '1分钟', range: '10尺', components: 'V,M', duration: '1轮', description: '你画出一个传送法阵，可以将生物传送到你已知的另一个传送法阵。' },
        { name: '活化物体', nameEn: 'Animate Objects', level: 5, class: ['wizard', 'sorcerer', 'bard', 'artificer'], school: '变化', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '至多1分钟', description: '你让至多十个非魔法物体活化并服从你的命令。' },
        { name: '焰击术', nameEn: 'Flame Strike', level: 5, class: ['cleric'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '立即', description: '你召唤出一道垂直的圣火柱，10尺半径、40尺高，生物受到4d6火焰伤害和4d6光耀伤害。' },
        { name: '群体疗伤术', nameEn: 'Mass Cure Wounds', level: 5, class: ['cleric', 'druid', 'bard'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '立即', description: '你让至多六个生物恢复3d8+施法属性调整值的生命值。' },
        { name: '死者复活', nameEn: 'Raise Dead', level: 5, class: ['cleric', 'paladin', 'bard', 'druid'], school: '死灵', castingTime: '1小时', range: '触及', components: 'V,S,M', duration: '立即', description: '你触碰一个死亡不超过10天的生物，使其复活并恢复1点生命值。' },
        { name: '圣居', nameEn: 'Hallow', level: 5, class: ['cleric'], school: '塑能', castingTime: '24小时', range: '触及', components: 'V,S,M', duration: '直到被解除', description: '你触碰一个点，影响60尺半径区域，可以选择让特定生物类型无法进入或在该区域内具有劣势。' },
        { name: '通神术', nameEn: 'Commune', level: 5, class: ['cleric'], school: '预言', castingTime: '1分钟', range: '自身', components: 'V,S,M', duration: '1分钟', description: '你向神祇提出三个可以回答是或否的问题，神祇会如实回答。' },
        { name: '疫病术', nameEn: 'Contagion', level: 5, class: ['cleric', 'druid'], school: '死灵', castingTime: '1动作', range: '触及', components: 'V,S', duration: '7天', description: '你触碰一个生物，使其感染疾病，它必须进行体质豁免，失败受到疾病效果。' },
        { name: '支配人类', nameEn: 'Dominate Person', level: 5, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '惑控', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '至多1分钟', description: '你尝试控制一个人类，它必须通过一次智慧豁免，失败被你控制。' },
        { name: '托梦术', nameEn: 'Dream', level: 5, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '幻术', castingTime: '1分钟', range: '特殊', components: 'V,S,M', duration: '8小时', description: '你可以向一个生物托梦，可以传达信息或造成3d6心灵伤害。' },
        { name: '怪物定身术', nameEn: 'Hold Monster', level: 5, class: ['wizard', 'sorcerer', 'bard', 'warlock', 'cleric'], school: '惑控', castingTime: '1动作', range: '90尺', components: 'V,S,M', duration: '至多1分钟', description: '你尝试麻痹一个生物，它必须通过一次智慧豁免，失败被麻痹。' },
        { name: '力场墙', nameEn: 'Wall of Force', level: 5, class: ['wizard', 'artificer'], school: '塑能', castingTime: '1动作', range: '120尺', components: 'V,S,M', duration: '至多10分钟', description: '你创造出一道无形的力场墙，无法被法术效果穿透，免疫所有伤害。' },
        { name: '传送术', nameEn: 'Teleport', level: 5, class: ['wizard', 'bard', 'sorcerer'], school: '咒法', castingTime: '1动作', range: '10尺', components: 'V', duration: '立即', description: '你将自己和最多八个自愿生物传送到你熟悉的地点。' },
        { name: '伪装术', nameEn: 'Seeming', level: 5, class: ['wizard', 'sorcerer', 'bard'], school: '幻术', castingTime: '1动作', range: '30尺', components: 'V,S', duration: '8小时', description: '你改变至多八个生物的外观，包括服装、护甲、武器等。' },
        { name: '拉瑞心灵联结', nameEn: "Rary's Telepathic Bond", level: 5, class: ['wizard', 'bard'], school: '预言', castingTime: '1动作', range: '30尺', components: 'V,S,M', duration: '1小时', description: '你在至多八个生物之间建立心灵链接，它们可以通过心灵感应交流。' },
        { name: '死云术', nameEn: 'Cloudkill', level: 5, class: ['wizard', 'sorcerer'], school: '咒法', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '至多10分钟', description: '你创造出一团20尺半径的黄色毒云，生物在其中开始回合时受到5d8毒素伤害。' },
        { name: '寒冰锥', nameEn: 'Cone of Cold', level: 5, class: ['wizard', 'sorcerer'], school: '塑能', castingTime: '1动作', range: '自身（60尺锥形）', components: 'V,S,M', duration: '立即', description: '你释放出一道极寒的能量波，60尺锥形区域内生物受到8d8冷冻伤害。' },
        { name: '造物术', nameEn: 'Creation', level: 5, class: ['wizard', 'sorcerer', 'artificer'], school: '幻术', castingTime: '1分钟', range: '30尺', components: 'V,S,M', duration: '特殊', description: '你创造出一个非魔法物体，材质决定持续时间，从布料到秘银。' },
        { name: '启蒙术', nameEn: 'Awaken', level: 5, class: ['druid', 'bard', 'ranger'], school: '变化', castingTime: '8小时', range: '触及', components: 'V,S,M', duration: '立即', description: '你触碰一个野兽或植物，赋予它人类水平的智慧和说话能力。' },
        { name: '放逐斩', nameEn: 'Banishing Smite', level: 5, class: ['paladin'], school: '防护', castingTime: '1 附赠动作', range: '自身', components: 'V', duration: '至多 1 分钟', description: '你的下一次武器攻击命中时，目标受到额外 5d10 力场伤害，如果目标生命值降至 50 或更低，你可以将其放逐到其家乡位面（如果是异界生物）或暂时困在无害的半位面（如果不是）。' },
        { name: '原力法阵', nameEn: 'Circle of Power', level: 5, class: ['paladin'], school: '防护', castingTime: '1 动作', range: '自身（30 尺半径）', components: 'V', duration: '至多 10 分钟', description: '你散发出神圣能量，30 尺内的友方生物在对抗法术和其他魔法效果的豁免检定上具有优势，且如果成功豁免则不会受到任何伤害（即使通常成功豁免也会受到一半伤害）。' },
        { name: '湮灭波', nameEn: 'Destructive Wave', level: 5, class: ['paladin'], school: '塑能', castingTime: '1 动作', range: '自身（30 尺半径）', components: 'V', duration: '立即', description: '你释放出一道神圣能量波，30 尺内你选择的所有生物必须进行体质豁免，失败受到 5d6 雷鸣伤害和 5d6 光耀或黯蚀伤害（你选择），成功伤害减半。' },
        { name: '驱逐善恶', nameEn: 'Dispel Evil and Good', level: 5, class: ['paladin', 'cleric'], school: '防护', castingTime: '1 动作', range: '自身', components: 'V,S,M', duration: '至多 1 分钟', description: '你被神圣能量包围，对天界、元素、妖精、邪魔和不死生物的攻击具有优势，可以用动作尝试驱逐这些生物（它们必须进行魅力豁免，失败被放逐）。' },
        { name: '指使术', nameEn: 'Geas', level: 5, class: ['paladin', 'bard', 'cleric', 'druid', 'wizard'], school: '惑控', castingTime: '1 分钟', range: '60 尺', components: 'V', duration: '30 天', description: '你对一个生物施加魔法命令，它必须通过一次智慧豁免，失败必须服从你的命令或受到 5d10 心灵伤害。' },
        { name: '高等复原术', nameEn: 'Greater Restoration', level: 5, class: ['paladin', 'cleric', 'druid', 'bard', 'artificer'], school: '防护', castingTime: '1 动作', range: '触及', components: 'V,S,M', duration: '立即', description: '你触碰一个生物，结束一种削弱它的效应，可以恢复能力值减少、结束魅惑、石化、诅咒或恢复生命值上限。' },
        { name: '天界召唤术', nameEn: 'Summon Celestial', level: 5, class: ['paladin', 'cleric'], school: '咒法', castingTime: '1 动作', range: '90 尺', components: 'V,S,M', duration: '至多 1 小时', description: '你召唤出一个天界生物为你战斗，可以选择复仇者（攻击型）或 Defender（防御型）。' },
        { name: '召雷术', nameEn: 'Call Lightning', level: 5, class: ['druid'], school: '塑能', castingTime: '1 动作', range: '120 尺', components: 'V,S', duration: '至多 10 分钟', description: '你召唤出一道雷云，可以用动作召唤闪电攻击，造成 3d10 闪电伤害。' },
        { name: '群体恢复术', nameEn: 'Mass Healing Word', level: 5, class: ['cleric'], school: '塑能', castingTime: '1 附赠动作', range: '60 尺', components: 'V', duration: '立即', description: '你让至多六个生物各恢复 1d4+ 施法属性调整值的生命值。' },
        { name: '异界之门', nameEn: 'Gate', level: 5, class: ['cleric', 'wizard', 'sorcerer'], school: '咒法', castingTime: '1 动作', range: '60 尺', components: 'V,S,M', duration: '至多 1 分钟', description: '你打开一个通往另一个位面的传送门，可以召唤特定生物。' }
    ],
    
    // 6 环法术
    level6: [
        { name: '秘法门', nameEn: 'Arcane Gate', level: 6, class: ['wizard', 'sorcerer', 'warlock'], school: '咒法', castingTime: '1动作', range: '500尺', components: 'V,S', duration: '至多10分钟', description: '你创造出两个相连的传送门，生物可以从一个门进入从另一个门出来。' },
        { name: '连锁闪电', nameEn: 'Chain Lightning', level: 6, class: ['wizard', 'sorcerer'], school: '塑能', castingTime: '1动作', range: '150尺', components: 'V,S,M', duration: '立即', description: '你创造出一道闪电，对主目标造成10d8闪电伤害，然后可以跳跃到三个其他目标。' },
        { name: '死亡法阵', nameEn: 'Circle of Death', level: 6, class: ['wizard', 'sorcerer', 'warlock'], school: '死灵', castingTime: '1动作', range: '150尺', components: 'V,S,M', duration: '立即', description: '你在60尺半径球体内释放出负能量，生物受到8d6黯蚀伤害。' },
        { name: '解离术', nameEn: 'Disintegrate', level: 6, class: ['wizard', 'sorcerer'], school: '变化', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '立即', description: '你发射出一道细绿射线，目标受到10d6+40力场伤害，如果降至0生命值则被解离。' },
        { name: '石化术', nameEn: 'Flesh to Stone', level: 6, class: ['wizard', 'sorcerer', 'warlock'], school: '变化', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多1分钟', description: '你尝试将一个生物变成石头，它必须进行体质豁免，失败被束缚并逐渐被石化。' },
        { name: '群体暗示术', nameEn: 'Mass Suggestion', level: 6, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '惑控', castingTime: '1动作', range: '60尺', components: 'V,M', duration: '至多24小时', description: '你建议至多十二个生物执行一个行动，它们必须通过一次智慧豁免，失败执行建议。' },
        { name: '奥图迷舞', nameEn: "Otto's Irresistible Dance", level: 6, class: ['wizard', 'bard'], school: '惑控', castingTime: '1动作', range: '30尺', components: 'V', duration: '至多1分钟', description: '你强迫一个生物开始跳舞，它必须进行魅力豁免，失败开始跳舞并失能。' },
        { name: '阳炎射线', nameEn: 'Sunbeam', level: 6, class: ['druid', 'sorcerer', 'wizard'], school: '塑能', castingTime: '1动作', range: '自身（60尺线形）', components: 'V,S,M', duration: '至多1分钟', description: '你发出一道耀眼的光束，5尺宽、60尺长，生物受到6d8光耀伤害并目盲。' },
        { name: '真知术', nameEn: 'True Seeing', level: 6, class: ['wizard', 'sorcerer', 'cleric', 'warlock', 'bard', 'druid'], school: '预言', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '1小时', description: '你触碰一个自愿生物，使其获得120尺真实视觉，可以看穿隐形和幻象。' },
        { name: '铜墙铁壁', nameEn: 'Forbiddance', level: 6, class: ['cleric'], school: '防护', castingTime: '10分钟', range: '触及', components: 'V,S,M', duration: '1天', description: '你保护一个区域，防止传送和位面旅行，特定生物类型进入时受到5d10光耀或黯蚀伤害。' },
        { name: '寻路术', nameEn: 'Find the Path', level: 6, class: ['cleric', 'druid', 'bard'], school: '预言', castingTime: '1分钟', range: '自身', components: 'V,S,M', duration: '至多24小时', description: '你可以找到通往一个你熟悉的地点的最直接路径。' },
        { name: '医疗术', nameEn: 'Heal', level: 6, class: ['cleric', 'druid'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '立即', description: '你让一个生物恢复70点生命值，并结束目盲、耳聋和疾病效果。' },
        { name: '英雄宴', nameEn: "Heroes' Feast", level: 6, class: ['cleric', 'druid'], school: '咒法', castingTime: '10分钟', range: '30尺', components: 'V,S,M', duration: '立即', description: '你召唤出一场盛宴，食用者获得多种增益，包括免疫毒素和恐慌、生命值最大值增加等。' },
        { name: '异界誓盟', nameEn: 'Planar Ally', level: 6, class: ['cleric'], school: '咒法', castingTime: '10分钟', range: '60尺', components: 'V,S', duration: '立即', description: '你请求一个天界、元素或邪魔的帮助，它可能会要求回报。' },
        { name: '剑刃护壁', nameEn: 'Blade Barrier', level: 6, class: ['cleric'], school: '塑能', castingTime: '1动作', range: '90尺', components: 'V,S', duration: '至多10分钟', description: '你创造出一道由魔法力场刀片组成的墙，生物穿过时受到6d10挥砍伤害。' },
        { name: '重伤术', nameEn: 'Harm', level: 6, class: ['cleric'], school: '死灵', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '立即', description: '你释放出一道负能量波，目标受到14d6黯蚀伤害，生命值上限减少相同数值。' },
        { name: '魔魂壶', nameEn: 'Magic Jar', level: 6, class: ['wizard'], school: '死灵', castingTime: '1分钟', range: '自身', components: 'V,S,M', duration: '直到被解除', description: '你将灵魂转移到一个容器中，可以占据其他生物的身体。' },
        { name: '触发术', nameEn: 'Contingency', level: 6, class: ['wizard'], school: '塑能', castingTime: '10分钟', range: '自身', components: 'V,S,M', duration: '10天', description: '你将一个6环或更低环阶的法术绑定到自己身上，当特定条件发生时自动施放。' },
        { name: '摄心目光', nameEn: 'Eyebite', level: 6, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '死灵', castingTime: '1动作', range: '自身', components: 'V,S', duration: '至多1分钟', description: '你的眼睛变成死亡之眼，每回合可以选择一个生物使其沉睡、恐慌或患病。' },
        { name: '地动术', nameEn: 'Move Earth', level: 6, class: ['druid', 'sorcerer', 'wizard'], school: '变化', castingTime: '1动作', range: '120尺', components: 'V,S,M', duration: '至多2小时', description: '你可以移动泥土，改变地形，可以创造或填平沟渠、改变山坡等。' },
        { name: '木遁术', nameEn: 'Transport via Plants', level: 6, class: ['druid'], school: '咒法', castingTime: '1动作', range: '10尺', components: 'V,S', duration: '1轮', description: '你可以通过一株大型或更大的植物进入，从另一株你熟悉的植物处出来。' }
    ],
    
    // 7环法术
    level7: [
        { name: '延迟爆裂火球', nameEn: 'Delayed Blast Fireball', level: 7, class: ['wizard', 'sorcerer'], school: '塑能', castingTime: '1动作', range: '150尺', components: 'V,S,M', duration: '至多1分钟', description: '你创造出一个金色光珠，在你的回合结束时爆炸，每延迟一回合伤害增加1d6，基础12d6火焰伤害。' },
        { name: '以太化', nameEn: 'Etherealness', level: 7, class: ['wizard', 'sorcerer', 'bard', 'cleric', 'warlock'], school: '变化', castingTime: '1动作', range: '自身', components: 'V,S', duration: '至多8小时', description: '你进入以太位面，可以穿过物体和生物，看到主物质位面但无法影响它。' },
        { name: '死亡一指', nameEn: 'Finger of Death', level: 7, class: ['wizard', 'sorcerer', 'warlock'], school: '死灵', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '立即', description: '你发出负能量，目标受到8d8+30黯蚀伤害，如果降至0生命值则变成僵尸。' },
        { name: '力场牢笼', nameEn: 'Forcecage', level: 7, class: ['wizard', 'bard'], school: '塑能', castingTime: '1动作', range: '100尺', components: 'V,S,M', duration: '1小时', description: '你创造出一个无形的牢笼，可以困住生物，无法被法术效果穿透。' },
        { name: '幻影囚笼', nameEn: 'Mirage Arcane', level: 7, class: ['wizard', 'bard', 'druid'], school: '幻术', castingTime: '10分钟', range: '视线', components: 'V,S', duration: '10天', description: '你让1英里范围内的地形看起来、听起来和闻起来像另一种地形，包括温度。' },
        { name: '魔邓肯豪宅术', nameEn: "Mordenkainen's Magnificent Mansion", level: 7, class: ['wizard', 'bard'], school: '咒法', castingTime: '1分钟', range: '300尺', components: 'V,S,M', duration: '24小时', description: '你创造出一个异次元豪宅，可以容纳很多生物，提供食物和仆人。' },
        { name: '魔邓肯之剑', nameEn: "Mordenkainen's Sword", level: 7, class: ['wizard', 'bard'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多1分钟', description: '你创造出一把飘浮的剑，可以用动作攻击，造成3d10力场伤害。' },
        { name: '虹光喷射', nameEn: 'Prismatic Spray', level: 7, class: ['wizard', 'sorcerer'], school: '塑能', castingTime: '1动作', range: '自身（60尺锥形）', components: 'V,S', duration: '立即', description: '你喷射出多彩光芒，生物受到随机颜色的效果，从火焰伤害到石化。' },
        { name: '投影术', nameEn: 'Project Image', level: 7, class: ['wizard', 'bard'], school: '幻术', castingTime: '1动作', range: '500英里', components: 'V,S,M', duration: '至多24小时', description: '你创造一个你的幻象分身，可以通过它看、听和说话，施放法术。' },
        { name: '再生术', nameEn: 'Regenerate', level: 7, class: ['cleric', 'druid', 'bard'], school: '变化', castingTime: '1分钟', range: '触及', components: 'V,S,M', duration: '1小时', description: '你触碰一个生物，使其每回合恢复1点生命值，并重新长出失去的身体部位。' },
        { name: '复生术', nameEn: 'Resurrection', level: 7, class: ['cleric', 'bard', 'druid'], school: '死灵', castingTime: '1小时', range: '触及', components: 'V,S,M', duration: '立即', description: '你触碰一个死亡不超过100年的生物，使其完全复活并恢复所有生命值。' },
        { name: '异界传送', nameEn: 'Plane Shift', level: 7, class: ['cleric', 'druid', 'sorcerer', 'warlock', 'wizard'], school: '咒法', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '立即', description: '你至多可以将八个自愿生物传送到另一个位面，或放逐一个非自愿生物。' },
        { name: '圣言术', nameEn: 'Divine Word', level: 7, class: ['cleric'], school: '塑能', castingTime: '1附赠动作', range: '30尺', components: 'V', duration: '立即', description: '你说出神圣之言，生物根据剩余生命值受到不同效果，从耳聋到死亡。' },
        { name: '火焰风暴', nameEn: 'Fire Storm', level: 7, class: ['cleric', 'druid', 'sorcerer'], school: '塑能', castingTime: '1动作', range: '150尺', components: 'V,S', duration: '立即', description: '你召唤出火焰风暴，10个10尺立方区域内生物受到7d10火焰伤害。' },
        { name: '律令震慑', nameEn: 'Symbol', level: 7, class: ['wizard', 'cleric', 'bard'], school: '防护', castingTime: '1分钟', range: '触及', components: 'V,S,M', duration: '直到被解除或触发', description: '你在一个表面上刻下符文，触发时产生各种效果，如死亡、恐惧、痛苦等。' },
        { name: '反重力', nameEn: 'Reverse Gravity', level: 7, class: ['druid', 'sorcerer', 'wizard'], school: '变化', castingTime: '1动作', range: '100尺', components: 'V,S,M', duration: '至多1分钟', description: '你在50尺半径、100尺高的圆柱内反转重力，生物和物体向上坠落。' },
        { name: '隔离术', nameEn: 'Sequester', level: 7, class: ['wizard'], school: '变化', castingTime: '1动作', range: '触及', components: 'V,S,M', duration: '直到被解除', description: '你让一个生物或物体隐形且无法被预言魔法探测，生物陷入沉睡。' },
        { name: '传送术', nameEn: 'Teleport', level: 7, class: ['wizard', 'bard', 'sorcerer'], school: '咒法', castingTime: '1动作', range: '10尺', components: 'V', duration: '立即', description: '你将自己和最多八个自愿生物传送到你熟悉的地点。' }
    ],
    
    // 8环法术
    level8: [
        { name: '动物形态', nameEn: 'Animal Shapes', level: 8, class: ['druid'], school: '变化', castingTime: '1动作', range: '30尺', components: 'V,S', duration: '至多24小时', description: '你让至多四个自愿生物变成你选择的野兽形态，保持心智但获得野兽的属性。' },
        { name: '反魔法力场', nameEn: 'Antimagic Field', level: 8, class: ['cleric', 'wizard'], school: '防护', castingTime: '1动作', range: '自身（10尺半径）', components: 'V,S,M', duration: '至多1小时', description: '你在10尺半径内创造出反魔法区域，法术无法施放，魔法效果被压制。' },
        { name: '嫌恶/关怀术', nameEn: 'Antipathy/Sympathy', level: 8, class: ['wizard', 'druid'], school: '惑控', castingTime: '1小时', range: '60尺', components: 'V,S,M', duration: '10天', description: '你让一个物体或区域产生强烈的嫌恶或吸引力，影响特定生物类型。' },
        { name: '克隆术', nameEn: 'Clone', level: 8, class: ['wizard'], school: '死灵', castingTime: '1小时', range: '触及', components: 'V,S,M', duration: '立即', description: '你创造出一个生物的魔法复制品，如果原生物死亡，灵魂会转移到克隆体中。' },
        { name: '操控天气', nameEn: 'Control Weather', level: 8, class: ['cleric', 'druid', 'wizard'], school: '变化', castingTime: '10分钟', range: '自身（5英里半径）', components: 'V,S,M', duration: '至多8小时', description: '你可以控制5英里半径内的天气，改变降雨、温度、风等。' },
        { name: '地震术', nameEn: 'Earthquake', level: 8, class: ['cleric', 'druid', 'sorcerer'], school: '变化', castingTime: '1动作', range: '500尺', components: 'V,S,M', duration: '至多1分钟', description: '你在100尺半径内引发强烈地震，地面裂开，建筑倒塌，生物倒地。' },
        { name: '圣洁光环', nameEn: 'Holy Aura', level: 8, class: ['cleric'], school: '防护', castingTime: '1动作', range: '自身', components: 'V,S,M', duration: '至多1分钟', description: '你发出神圣光芒，30尺内友方生物AC+2，豁免具有优势，敌方法术攻击具有劣势。' },
        { name: '禁锢术', nameEn: 'Imprisonment', level: 8, class: ['wizard', 'warlock'], school: '防护', castingTime: '1分钟', range: '30尺', components: 'V,S,M', duration: '直到被解除', description: '你将一个生物禁锢在特定方式中，如埋入地下、困在宝石中等。' },
        { name: '迷宫术', nameEn: 'Maze', level: 8, class: ['wizard'], school: '咒法', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '至多10分钟', description: '你将一个生物困在异次元迷宫中，它必须通过智慧检定才能逃脱。' },
        { name: '心灵屏障', nameEn: 'Mind Blank', level: 8, class: ['wizard', 'bard'], school: '防护', castingTime: '1动作', range: '触及', components: 'V,S', duration: '24小时', description: '你触碰一个自愿生物，使其免疫心灵伤害，无法被读心或预言魔法探测。' },
        { name: '律令震慑', nameEn: 'Power Word Stun', level: 8, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '惑控', castingTime: '1动作', range: '60尺', components: 'V', duration: '立即', description: '你说出一个力量之语，生命值不超过150的生物被震慑。' },
        { name: '阳炎爆', nameEn: 'Sunburst', level: 8, class: ['druid', 'sorcerer', 'wizard'], school: '塑能', castingTime: '1动作', range: '150尺', components: 'V,S,M', duration: '立即', description: '你召唤出耀眼的阳光，60尺半径球体内生物受到12d6光耀伤害并目盲。' },
        { name: '心灵感应', nameEn: 'Telepathy', level: 8, class: ['wizard', 'sorcerer', 'warlock'], school: '变化', castingTime: '1动作', range: '无限', components: 'V,S,M', duration: '24小时', description: '你可以与任何你熟悉的生物进行心灵感应交流，无论距离多远。' },
        { name: '海啸术', nameEn: 'Tsunami', level: 8, class: ['druid'], school: '咒法', castingTime: '1分钟', range: '视线', components: 'V,S', duration: '至多6轮', description: '你召唤出300尺长、300尺高的巨浪，冲击海岸并造成巨大破坏。' },
        { name: '星界投影', nameEn: 'Astral Projection', level: 8, class: ['cleric', 'warlock', 'wizard'], school: '死灵', castingTime: '1小时', range: '10尺', components: 'V,S,M', duration: '特殊', description: '你和至多八个自愿生物将星界身体投射到星界，可以前往其他位面。' },
        { name: '焚身爆', nameEn: 'Incendiary Cloud', level: 8, class: ['wizard', 'sorcerer'], school: '咒法', castingTime: '1动作', range: '150尺', components: 'V,S', duration: '至多1分钟', description: '你创造出一团20尺半径的燃烧云雾，生物在其中开始回合时受到10d8火焰伤害。' }
    ],
    
    // 9环法术
    level9: [
        { name: '星界投影', nameEn: 'Astral Projection', level: 9, class: ['cleric', 'warlock', 'wizard'], school: '死灵', castingTime: '1小时', range: '10尺', components: 'V,S,M', duration: '特殊', description: '你和至多八个自愿生物将星界身体投射到星界，可以前往其他位面。' },
        { name: '预警术', nameEn: 'Foresight', level: 9, class: ['wizard', 'druid', 'bard', 'warlock'], school: '预言', castingTime: '1分钟', range: '触及', components: 'V,S,M', duration: '8小时', description: '你触碰一个自愿生物，使其在8小时内不会受惊，攻击检定、检定和豁免具有优势，敌方攻击具有劣势。' },
        { name: '禁锢术', nameEn: 'Imprisonment', level: 9, class: ['wizard', 'warlock'], school: '防护', castingTime: '1分钟', range: '30尺', components: 'V,S,M', duration: '直到被解除', description: '你将一个生物禁锢在特定方式中，如埋入地下、困在宝石中等。' },
        { name: '群体医疗术', nameEn: 'Mass Heal', level: 9, class: ['cleric'], school: '塑能', castingTime: '1动作', range: '60尺', components: 'V,S', duration: '立即', description: '你让至多十个生物恢复700点生命值，并结束所有疾病和状态。' },
        { name: '律令死亡', nameEn: 'Power Word Kill', level: 9, class: ['wizard', 'sorcerer', 'bard', 'warlock'], school: '惑控', castingTime: '1动作', range: '60尺', components: 'V', duration: '立即', description: '你说出一个力量之语，生命值不超过100的生物立即死亡。' },
        { name: '完全复生术', nameEn: 'True Resurrection', level: 9, class: ['cleric', 'druid'], school: '死灵', castingTime: '1小时', range: '触及', components: 'V,S,M', duration: '立即', description: '你触碰一个死亡不超过200年的生物，即使只剩一点残骸也能完全复活。' },
        { name: '时间停止', nameEn: 'Time Stop', level: 9, class: ['wizard', 'sorcerer'], school: '变化', castingTime: '1动作', range: '自身', components: 'V', duration: '立即', description: '你短暂地停止时间，其他生物被冻结，你可以进行1d4+1个回合的行动。' },
        { name: '祈愿术', nameEn: 'Wish', level: 9, class: ['wizard', 'sorcerer'], school: '咒法', castingTime: '1动作', range: '自身', components: 'V', duration: '立即', description: '你可以模拟任何8环或更低环阶的法术，或者提出其他请求，但可能有意外后果。' },
        { name: '内爆术', nameEn: 'Implosion', level: 9, class: ['cleric'], school: '变化', castingTime: '1动作', range: '30尺', components: 'V,S', duration: '至多1分钟', description: '你创造出一个毁灭性的引力球，每回合可以压缩一个生物，造成10d10+40力场伤害。' },
        { name: '风暴之眼', nameEn: 'Storm of Vengeance', level: 9, class: ['druid'], school: '咒法', castingTime: '1动作', range: '视线', components: 'V,S', duration: '至多1分钟', description: '你召唤出毁灭性的风暴，360尺半径内受到各种效果，从闪电到酸雨到飓风。' },
        { name: '怪奇物语', nameEn: 'Weird', level: 9, class: ['wizard', 'warlock'], school: '幻术', castingTime: '1动作', range: '120尺', components: 'V,S', duration: '至多1分钟', description: '你在目标生物的脑海中创造出最恐惧的幻象，每回合受到6d10心灵伤害并恐慌。' },
        { name: '异界之门', nameEn: 'Gate', level: 9, class: ['cleric', 'sorcerer', 'wizard'], school: '咒法', castingTime: '1动作', range: '60尺', components: 'V,S,M', duration: '至多1分钟', description: '你打开一个通往另一个位面的传送门，可以召唤特定生物。' },
        { name: '流星爆', nameEn: 'Meteor Swarm', level: 9, class: ['wizard', 'sorcerer'], school: '塑能', castingTime: '1动作', range: '1英里', components: 'V,S', duration: '立即', description: '你召唤出四颗燃烧的陨石，每颗在40尺半径内造成20d6火焰伤害和20d6钝击伤害。' }
    ]
};

// 职业法术列表 - 按职业分类
const CLASS_SPELLS = {
    // 法师法术
    wizard: {
        name: '法师',
        cantrips: ['酸液飞溅', '剑刃防护', '冻寒之触', '舞光术', '火焰箭', '法师之手', '冷冻射线', '电爪', '克敌机先', '光亮术', '修复术', '毒气喷溅', '魔法伎俩', '次级幻影', '交友术'],
        level1: ['警报术', '燃烧之手', '魅惑人类', '七彩喷射', '通晓语言', '侦测魔法', '易容术', '脚底抹油', '虚假生命', '羽落术', '云雾术', '大步奔行', '法师护甲', '魔法飞弹', '防护善恶', '护盾术', '无声幻影', '睡眠术', '雷鸣波', '鉴定术', '油腻术', '跳跃术', '塔莎狂笑术', '隐形仆役', '不谐低语'],
        level2: ['变身术', '秘法锁', '黑暗术', '黑暗视觉', '侦测思想', '朦胧术', '马友夫强酸箭', '炽焰法球', '灼热射线', '隐形术', '敲击术', '浮空术', '镜面术', '迷雾步', '粉碎音波', '蛛网术', '人类定身术'],
        level3: ['活化死尸', '降咒', '爆炎术', '解除魔法', '飞行术', '加速术', '法术反制', '恐惧术', '气化形体', '催眠图纹', '闪电束', '高等幻影', '防护能量伤害', '移除诅咒', '缓慢术', '死者交谈', '闪现术', '探知术', '火球术'],
        level4: ['秘法眼', '放逐术', '枯萎术', '高等隐形术', '幻景', '欧提路克弹力法球', '魅影杀手', '生物定位术', '变形术', '塑石术', '石肤术', '火墙术'],
        level5: ['异界誓缚', '异界传送', '活化物体', '死云术', '支配人类', '怪物定身术', '托梦术', '力场墙', '传送术', '伪装术', '拉瑞心灵联结', '寒冰锥', '造物术', '异界之门'],
        level6: ['秘法门', '连锁闪电', '死亡法阵', '解离术', '石化术', '群体暗示术', '魔魂壶', '触发术', '摄心目光', '真知术'],
        level7: ['延迟爆裂火球', '以太化', '死亡一指', '力场牢笼', '幻影囚笼', '魔邓肯豪宅术', '魔邓肯之剑', '虹光喷射', '投影术', '隔离术', '传送术'],
        level8: ['反魔法力场', '克隆术', '操控天气', '地震术', '禁锢术', '迷宫术', '心灵屏障', '律令震慑', '焚身爆', '心灵感应'],
        level9: ['星界投影', '预警术', '禁锢术', '律令死亡', '时间停止', '祈愿术', '异界之门', '流星爆']
    },
    
    // 术士法术
    sorcerer: {
        name: '术士',
        cantrips: ['酸液飞溅', '剑刃防护', '冻寒之触', '舞光术', '火焰箭', '法师之手', '冷冻射线', '电爪', '克敌机先', '光亮术', '修复术', '毒气喷溅', '魔法伎俩', '次级幻影', '交友术'],
        level1: ['燃烧之手', '魅惑人类', '七彩喷射', '通晓语言', '侦测魔法', '易容术', '脚底抹油', '虚假生命', '羽落术', '云雾术', '大步奔行', '法师护甲', '魔法飞弹', '防护善恶', '护盾术', '无声幻影', '睡眠术', '雷鸣波', '油腻术', '跳跃术'],
        level2: ['变身术', '黑暗术', '黑暗视觉', '侦测思想', '朦胧术', '炽焰法球', '灼热射线', '隐形术', '敲击术', '浮空术', '镜面术', '迷雾步', '粉碎音波', '蛛网术', '人类定身术'],
        level3: ['爆炎术', '解除魔法', '飞行术', '加速术', '恐惧术', '气化形体', '催眠图纹', '闪电束', '防护能量伤害', '移除诅咒', '缓慢术', '火球术', '闪现术'],
        level4: ['放逐术', '枯萎术', '高等隐形术', '变形术', '石肤术', '火墙术'],
        level5: ['异界传送', '活化物体', '死云术', '支配人类', '怪物定身术', '托梦术', '寒冰锥', '造物术', '异界之门'],
        level6: ['秘法门', '连锁闪电', '死亡法阵', '解离术', '石化术', '群体暗示术', '阳炎射线', '真知术', '摄心目光'],
        level7: ['延迟爆裂火球', '以太化', '死亡一指', '火焰风暴', '异界传送'],
        level8: ['地震术', '律令震慑', '阳炎爆', '心灵感应'],
        level9: ['预警术', '律令死亡', '时间停止', '祈愿术', '流星爆']
    },
    
    // 牧师法术
    cleric: {
        name: '牧师',
        cantrips: ['神导术', '光亮术', '修复术', '圣火术', '维生术', '奇术'],
        level1: ['祝福术', '命令术', '治愈真言', '侦测毒性和疾病', '神恩', '虔诚护盾', '致伤术', '侦测魔法', '防护善恶', '庇护术', '灾祸术', '侦测善恶'],
        level2: ['援助术', '卜筮术', '强化属性', '人类定身术', '次级复原术', '灵体武器', '沉默术', '守护之链', '侦测思想'],
        level3: ['活化死尸', '降咒', '解除魔法', '信仰守卫', '复活术', '死者交谈', '净化灵体', '回生术', '探知术'],
        level4: ['放逐术', '行动自如', '信仰守卫', '塑石术', '生物定位术', '防死结界'],
        level5: ['异界誓盟', '焰击术', '群体疗伤术', '死者复活', '圣居', '通神术', '疫病术', '群体恢复术', '异界之门', '指使术', '高等复原术', '天界召唤术'],
        level6: ['铜墙铁壁', '寻路术', '医疗术', '英雄宴', '剑刃护壁', '重伤术', '真知术'],
        level7: ['异界传送', '复生术', '圣言术', '火焰风暴', '再生术'],
        level8: ['反魔法力场', '圣洁光环', '地震术', '操控天气', '星界投影'],
        level9: ['星界投影', '群体医疗术', '完全复生术', '内爆术', '异界之门']
    },
    
    // 德鲁伊法术
    druid: {
        name: '德鲁伊',
        cantrips: ['神导术', '光亮术', '修复术', '毒气喷溅', '德鲁伊伎俩', '橡棍术', '荆棘之鞭'],
        level1: ['化兽为友', '纠缠术', '妖火', '云雾术', '神莓术', '动物交谈', '造风术', '治愈真言', '侦测毒性和疾病', '跳跃术'],
        level2: ['动物信使', '卜筮术', '树肤术', '黑暗视觉', '强化属性', '灼热金属', '人类定身术', '月光术', '野兽形态', '荆棘丛生', '火焰刀'],
        level3: ['解除魔法', '召雷术', '植物滋长', '水下呼吸', '风墙术', '闪电束', '防护能量伤害'],
        level4: ['枯萎术', '行动自如', '塑石术', '石肤术', '火墙术', '召唤林地生物', '支配野兽'],
        level5: ['异界誓缚', '群体疗伤术', '死者复活', '疫病术', '启蒙术', '召雷术'],
        level6: ['寻路术', '医疗术', '英雄宴', '地动术', '木遁术', '阳炎射线'],
        level7: ['火焰风暴', '异界传送', '复生术', '再生术', '反重力'],
        level8: ['动物形态', '嫌恶/关怀术', '地震术', '阳炎爆', '海啸术', '操控天气'],
        level9: ['完全复生术', '风暴之眼', '预警术']
    },
    
    // 吟游诗人
    bard: {
        name: '吟游诗人',
        cantrips: ['剑刃防护', '舞光术', '法师之手', '克敌机先', '光亮术', '修复术', '毒气喷溅', '魔法伎俩', '次级幻影', '交友术', '恶毒嘲笑'],
        level1: ['魅惑人类', '通晓语言', '侦测魔法', '易容术', '羽落术', '大步奔行', '无声幻影', '睡眠术', '雷鸣波', '治愈真言', '不谐低语', '塔莎狂笑术', '妖火', '化兽为友', '动物交谈', '英雄气概', '灾祸术', '防护善恶', '隐形仆役'],
        level2: ['动物信使', '侦测思想', '强化属性', '隐形术', '敲击术', '浮空术', '迷魅人类', '粉碎音波', '灼热金属', '沉默术', '人类定身术'],
        level3: ['解除魔法', '飞行术', '恐惧术', '催眠图纹', '高等幻影', '缓慢术', '死者交谈', '植物滋长', '探知术'],
        level4: ['放逐术', '行动自如', '高等隐形术', '幻景', '生物定位术', '变形术'],
        level5: ['异界誓缚', '异界传送', '活化物体', '支配人类', '托梦术', '伪装术', '拉瑞心灵联结', '死者复活', '指使术', '高等复原术'],
        level6: ['群体暗示术', '奥图迷舞', '真知术', '摄心目光', '寻路术', '医疗术'],
        level7: ['以太化', '异界传送', '复生术', '再生术', '投影术', '力场牢笼'],
        level8: ['心灵屏障', '律令震慑', '心灵感应'],
        level9: ['预警术', '律令死亡', '完全复生术']
    },
    
    // 圣武士
    paladin: {
        name: '圣武士',
        cantrips: [],
        level1: ['祝福术', '命令术', '强令对决', '治愈真言', '侦测善恶', '侦测魔法', '侦测毒性和疾病', '神恩', '至圣斩', '英雄气概', '防护善恶', '净化饮食', '炽焰斩', '虔诚护盾', '雷鸣斩', '激愤斩'],
        level2: ['援助术', '寻获坐骑', '遗体防腐', '次级复原术', '物件定位术', '魔化武器', '治疗祷言', '防护毒素', '闪耀斩', '守护之链', '诚实之域'],
        level3: ['活力灵光', '致盲斩', '造粮术', '十字军披风', '昼明术', '解除魔法', '元素武器', '防护法阵', '移除诅咒', '回生术'],
        level4: ['生命灵光', '净化灵光', '放逐术', '防死结界', '生物定位术', '惊惧斩'],
        level5: ['放逐斩', '原力法阵', '湮灭波', '驱逐善恶', '指使术', '高等复原术', '死者复活', '天界召唤术'],
        level6: [],
        level7: [],
        level8: [],
        level9: []
    },
    
    // 游侠
    ranger: {
        name: '游侠',
        cantrips: [],
        level1: ['警报术', '化兽为友', '治愈真言', '侦测毒性和疾病', '侦测魔法', '云雾术', '大步奔行', '神莓术', '动物交谈', '跳跃术'],
        level2: ['动物信使', '树肤术', '黑暗视觉', '人类定身术', '迷雾步', '荆棘丛生'],
        level3: ['解除魔法', '植物滋长', '水下呼吸', '风墙术', '闪电束', '防护能量伤害'],
        level4: ['行动自如', '石肤术', '火墙术', '召唤林地生物', '支配野兽'],
        level5: ['群体疗伤术', '死者复活', '启蒙术', '疫病术'],
        level6: [],
        level7: [],
        level8: [],
        level9: []
    },
    
    // 邪术师
    warlock: {
        name: '邪术师',
        cantrips: ['剑刃防护', '冻寒之触', '法师之手', '克敌机先', '魔能爆', '毒气喷溅', '魔法伎俩', '次级幻影', '交友术'],
        level1: ['魅惑人类', '通晓语言', '脚底抹油', '羽落术', '巫术箭', '护甲之主', '哈达之臂', '炼狱叱喝', '迷幻手稿', '防护善恶', '动物交谈', '塔莎狂笑术', '隐形仆役', '侦测魔法', '灾祸术'],
        level2: ['黑暗术', '隐形术', '镜面术', '迷雾步', '粉碎音波', '迷魅人类', '匕首之云', '疯狂冠冕', '注目术', '心灵尖刺', '蛛行术', '衰弱射线', '人类定身术', '侦测思想'],
        level3: ['解除魔法', '飞行术', '法术反制', '恐惧术', '气化形体', '催眠图纹', '饥饿之刃', '吸血鬼之触', '妖精召唤术', '亡灵召唤术', '巧言术', '防护法阵', '移除诅咒', '高等幻影'],
        level4: ['放逐术', '枯萎术', '高等隐形术', '魅影杀手', '变形术'],
        level5: ['死云术', '支配人类', '托梦术', '怪物定身术', '饥饿之刃'],
        level6: ['秘法门', '死亡法阵', '石化术', '摄心目光', '真知术', '群体暗示术'],
        level7: ['死亡一指', '以太化', '异界传送', '力场牢笼'],
        level8: ['禁锢术', '律令震慑', '心灵感应', '心灵屏障'],
        level9: ['星界投影', '预警术', '律令死亡', '怪奇物语']
    },
    
    // 奇械师
    artificer: {
        name: '奇械师',
        cantrips: ['酸液飞溅', '剑刃防护', '舞光术', '火焰箭', '法师之手', '冷冻射线', '电爪', '神导术', '光亮术', '修复术', '毒气喷溅', '魔法伎俩', '荆棘之鞭'],
        level1: ['警报术', '治愈真言', '侦测魔法', '易容术', '脚底抹油', '虚假生命', '羽落术', '大步奔行', '魔法飞弹', '庇护术', '鉴定术', '油腻术', '跳跃术'],
        level2: ['援助术', '变身术', '秘法锁', '黑暗视觉', '强化属性', '灼热金属', '隐形术', '敲击术', '浮空术', '次级复原术', '朦胧术', '马友夫强酸箭', '蛛网术'],
        level3: ['解除魔法', '飞行术', '加速术', '气化形体', '防护能量伤害', '复活术', '水下呼吸'],
        level4: ['秘法眼', '高等隐形术', '欧提路克弹力法球', '石肤术', '变形术'],
        level5: ['活化物体', '造物术', '力场墙'],
        level6: [],
        level7: [],
        level8: [],
        level9: []
    }
};

// 导出法术数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SPELLS, CLASS_SPELLS };
}