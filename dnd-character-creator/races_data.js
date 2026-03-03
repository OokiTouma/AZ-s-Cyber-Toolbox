// D&D 5E 完整种族数据 - 基于 DND5E_全种族数据文档.md
// 包含玩家手册、扩展书、战役模组及异界传送系列所有种族

const RACES_DATA = {
    // ==================== 基础种族（玩家手册） ====================
    human: {
        name: '人类',
        nameEn: 'Human',
        source: '玩家手册',
        description: '人类是D&D世界中最年轻的凡人种族，寿命短暂但适应力极强。他们建立帝国、创新技术，是世界的先驱者。',
        abilityScores: {
            strength: 1,
            dexterity: 1,
            constitution: 1,
            intelligence: 1,
            wisdom: 1,
            charisma: 1
        },
        abilityScoreChoice: null,
        age: '不到20岁成年，很少活过100岁',
        size: '中型',
        speed: 30,
        languages: ['通用语'],
        extraLanguages: 1,
        traits: [
            { name: '额外语言', description: '你可以说、读、写通用语和一门额外的自选语言' }
        ],
        variants: {
            variant: {
                name: '变体人类',
                nameEn: 'Variant Human',
                description: '变体人类通过专注训练来发展才能，而非全面发展。',
                abilityScores: {
                    choice: 2,
                    bonus: 1
                },
                abilityScoreText: '选择两项不同属性各+1',
                traits: [
                    { name: '技能熟练', description: '获得一项自选技能作为熟练项' },
                    { name: '专长', description: '1级时获得一个专长' },
                    { name: '额外语言', description: '你可以说、读、写通用语和一门额外的自选语言' }
                ],
                extraLanguages: 1,
                featAtLevel1: true,
                extraSkill: 1
            }
        }
    },

    elf: {
        name: '精灵',
        nameEn: 'Elf',
        source: '玩家手册',
        description: '精灵是带着超凡脱俗般优雅的魔幻民族，寿命可超过700年。他们热爱自然、魔法、艺术和诗歌。',
        abilityScores: {
            dexterity: 2
        },
        age: '约100岁成年，寿命可达750岁',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '精灵语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照。在黑暗中，该范围内可视为等同于微光光照' },
            { name: '敏锐感官', description: '你拥有察觉技能的熟练项' },
            { name: '妖精血统', description: '你进行对抗魅惑的豁免时具有优势，并且不会因魔法效应陷入睡眠' },
            { name: '出神', description: '精灵不需要睡眠，每日4小时冥想等同于人类睡眠8小时' }
        ],
        subraces: {
            high: {
                name: '高等精灵',
                nameEn: 'High Elf',
                abilityScores: { intelligence: 1 },
                traits: [
                    { name: '精灵武器训练', description: '你熟练使用长剑、短剑、短弓和长弓' },
                    { name: '戏法', description: '你习得一个法师戏法，施法属性为智力', grantsSpells: { cantrips: { count: 1, spellList: 'wizard', choose: true, ability: '智力' } } },
                    { name: '额外语言', description: '你能说、读、写一门额外的自选语言' }
                ],
                extraLanguages: 1
            },
            wood: {
                name: '木精灵',
                nameEn: 'Wood Elf',
                abilityScores: { wisdom: 1 },
                speed: 35,
                traits: [
                    { name: '精灵武器训练', description: '你熟练使用长剑、短剑、短弓和长弓' },
                    { name: '轻捷步伐', description: '你的基础步行速度提升至35尺' },
                    { name: '野性面具', description: '在树丛、大雨、落雪、雾气等自然现象中仅获得轻度遮蔽时也可尝试躲藏' }
                ]
            },
            drow: {
                name: '卓尔',
                nameEn: 'Drow',
                abilityScores: { charisma: 1 },
                darkvision: 120,
                traits: [
                    { name: '增强黑暗视觉', description: '你的黑暗视觉范围提升至120尺' },
                    { name: '日光敏感', description: '阳光直射下攻击检定和依赖视觉的感知（察觉）检定具有劣势' },
                    { name: '卓尔魔法', description: '你习得舞光术戏法；3级后可施展妖火术；5级后可施展黑暗术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '舞光术', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '妖火术', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '黑暗术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } },
                    { name: '卓尔武器训练', description: '你熟练使用刺剑、短剑和手弩' }
                ]
            },
            moon: {
                name: '月精灵',
                nameEn: 'Moon Elf',
                abilityScores: { intelligence: 1 },
                traits: [
                    { name: '精灵武器训练', description: '你熟练使用长剑、短剑、短弓和长弓' },
                    { name: '戏法', description: '你习得一个法师戏法，施法属性为智力', grantsSpells: { cantrips: { count: 1, spellList: 'wizard', choose: true, ability: '智力' } } },
                    { name: '额外语言', description: '你能说、读、写一门额外的自选语言' }
                ]
            },
            sun: {
                name: '日精灵',
                nameEn: 'Sun Elf',
                abilityScores: { intelligence: 1 },
                traits: [
                    { name: '精灵武器训练', description: '你熟练使用长剑、短剑、短弓和长弓' },
                    { name: '戏法', description: '你习得一个法师戏法，施法属性为智力', grantsSpells: { cantrips: { count: 1, spellList: 'wizard', choose: true, ability: '智力' } } },
                    { name: '额外语言', description: '你能说、读、写一门额外的自选语言' }
                ]
            },
            eladrin: {
                name: '雅灵',
                nameEn: 'Eladrin',
                source: '魔邓肯的众敌之书',
                abilityScores: { charisma: 1 },
                traits: [
                    { name: '精类血统', description: '你在为自己避免或结束魅惑状态的豁免检定中具有优势' },
                    { name: '精类步', description: '你可以魔法地传送到一处30尺内且未被占据的可见空间。短休或长休后恢复。3级时，精类步根据你的季节获得额外效果：秋-魅惑；冬-恐慌；春-传送盟友；夏-火焰伤害。', grantsSpells: { level2: [{ name: '迷雾步', levelRequired: 1, freeCast: { count: 1, reset: '短休' }, ability: '魅力' }] } }
                ]
            },
            shadarKai: {
                name: '影灵',
                nameEn: 'Shadar-Kai',
                source: '魔邓肯的众敌之书',
                abilityScores: { constitution: 1 },
                traits: [
                    { name: '精类血统', description: '你在为自己避免或结束魅惑状态的豁免检定中具有优势' },
                    { name: '鸦后的祝福', description: '你可以魔法地传送到一处30尺内且未被占据的可见空间。短休或长休后恢复。3级时，传送后获得所有伤害抗性直到你的下一回合开始' },
                    { name: '黯蚀抗性', description: '你具有黯蚀伤害的抗性' }
                ]
            },
            sea: {
                name: '海精灵',
                nameEn: 'Sea Elf',
                source: '魔邓肯的众敌之书',
                abilityScores: { constitution: 1 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照。在黑暗中，该范围内可视为等同于微光光照。你无法在黑暗中分辨颜色，只能看到有灰度的黑白画面' },
                    { name: '海之子', description: '你获得游泳速度，等同于你的步行速度。你可以在水下呼吸空气和水' },
                    { name: '海之友', description: '你可以与任何有游泳速度的野兽传达简单的意念。它们可以感知你的话语的意思，虽然没有特殊能力来回应' }
                ]
            },
            astral: {
                name: '星界精灵',
                nameEn: 'Astral Elf',
                source: '星界冒险者指南',
                abilityScores: { intelligence: 1, wisdom: 1, charisma: 1 },
                abilityScoreText: '选择智力、感知或魅力+1',
                traits: [
                    { name: '星界之火', description: '你知晓一个自选的戏法：舞光术、光亮术或圣火术。智力、感知或魅力是你释放该法术时的施法属性（选择该种族时决定）', grantsSpells: { cantrips: { count: 1, spellList: 'wizard', choose: true, ability: '智力' } } },
                    { name: '星光步', description: '你可以魔法地传送到30尺内一处你可见且未被占据的空间。你能使用本特性的次数等于你的熟练加值，当你完成一次长休，你恢复所有已使用的次数。', grantsSpells: { level2: [{ name: '迷雾步', levelRequired: 1, freeCast: { count: '熟练加值', reset: '长休' }, ability: '魅力' }] } },
                    { name: '星界出神', description: '你不需要睡眠，并且不会因魔法效应而陷入睡眠。你能够在4小时里完成一次长休，只要你在期间进行出神般的冥想，整个过程你都能保持清醒。当你完成出神时，你获得一个自选技能的熟练项，与一件自选武器或自选工具的熟练项。这些熟练项你只能从玩家手册中选择。你通过抽取共享的精灵记忆及星界位面的实体经历，神秘地获得了这些熟练项，这个好处会一直持续到你完成下次长休。' }
                ]
            }
        }
    },

    dwarf: {
        name: '矮人',
        nameEn: 'Dwarf',
        source: '玩家手册',
        description: '矮人是身板结实、坚定的朋友，说话算话。他们重视工艺传统和家族荣誉。',
        abilityScores: {
            constitution: 2
        },
        age: '约50岁成年，寿命可达350年',
        size: '中型',
        speed: 25,
        darkvision: 60,
        languages: ['通用语', '矮人语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '矮人韧性', description: '你进行对抗毒素的豁免时具有优势，并且对毒素伤害具有抗性' },
            { name: '石中精妙', description: '你进行与石质建筑相关的历史检定时，熟练加值加倍' }
        ],
        subraces: {
            hill: {
                name: '丘陵矮人',
                nameEn: 'Hill Dwarf',
                abilityScores: { wisdom: 1 },
                traits: [
                    { name: '矮人韧性', description: '你的生命值上限每升一级增加1点' }
                ]
            },
            mountain: {
                name: '山地矮人',
                nameEn: 'Mountain Dwarf',
                abilityScores: { strength: 2 },
                traits: [
                    { name: '武器训练', description: '你熟练使用战斧、手斧、轻型锤、战锤' }
                ]
            },
            shield: {
                name: '盾矮人',
                nameEn: 'Shield Dwarf',
                abilityScores: { strength: 2 },
                traits: [
                    { name: '武器训练', description: '你熟练使用战斧、手斧、轻型锤、战锤' }
                ]
            },
            gold: {
                name: '金矮人',
                nameEn: 'Gold Dwarf',
                abilityScores: { constitution: 2 },
                traits: [
                    { name: '武器训练', description: '你熟练使用战斧、手斧、轻型锤、战锤' }
                ]
            },
            duergar: {
                name: '灰矮人',
                nameEn: 'Duergar',
                source: '魔邓肯的众敌之书',
                abilityScores: { strength: 1 },
                darkvision: 120,
                traits: [
                    { name: '增强黑暗视觉', description: '你的黑暗视觉范围提升至120尺' },
                    { name: '灰矮人魔法', description: '从3级开始，你可以对自己施展变巨/缩小术，且无需材料成分。从5级开始，你同样可以对自己施展隐形术，且无需材料成分。一旦你使用该特质施展了这些法术中的任何一个，直到完成一次长休，你不能再次使用该特质施展那个法术。你也能用你拥有的相应法术位来施展这些法术。当你使用此特质施展法术时，智力、感知或魅力是你的施法属性（选择该种族时决定）。', grantsSpells: { level2: [{ name: '变巨/缩小术', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '智力' }], level3: [{ name: '隐形术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '智力' }] } },
                    { name: '矮人韧性', description: '你在为自己避免或结束中毒状态的豁免检定时具有优势。你同样具有毒素伤害的抗性。' },
                    { name: '灵能坚韧', description: '你在为自己避免或结束魅惑和震慑状态的豁免检定时具有优势。' }
                ]
            }
        }
    },

    halfling: {
        name: '半身人',
        nameEn: 'Halfling',
        source: '玩家手册',
        description: '半身人是单纯快乐的民族，他们又小又快，擅长隐匿。',
        abilityScores: {
            dexterity: 2
        },
        age: '约20岁成年，寿命可达150年',
        size: '小型',
        speed: 25,
        languages: ['通用语', '半身人语'],
        traits: [
            { name: '幸运', description: '当你掷出攻击、检定或豁免的1时，可以重骰并采用新结果' },
            { name: '勇敢', description: '你进行对抗恐慌的豁免时具有优势' },
            { name: '半身人灵巧', description: '你可以穿越任何体型更大生物的空间' }
        ],
        subraces: {
            lightfoot: {
                name: '轻足半身人',
                nameEn: 'Lightfoot Halfling',
                abilityScores: { charisma: 1 },
                traits: [
                    { name: '天生善言', description: '你可以进行魅力（欺瞒）或（游说）检定隐匿于体型更大生物背后' }
                ]
            },
            stout: {
                name: '强心半身人',
                nameEn: 'Stout Halfling',
                abilityScores: { constitution: 1 },
                traits: [
                    { name: '强心体魄', description: '你对毒素伤害具有抗性，毒素豁免具有优势' }
                ]
            },
            ghostwise: {
                name: '鬼智半身人',
                nameEn: 'Ghostwise Halfling',
                abilityScores: { wisdom: 1 },
                traits: [
                    { name: '鬼灵言语', description: '你可以向30尺内任何生物心灵感应沟通' }
                ]
            }
        }
    },

    gnome: {
        name: '侏儒',
        nameEn: 'Gnome',
        source: '玩家手册',
        description: '侏儒是充满活力和创造力的种族，热爱发明和幻术。',
        abilityScores: {
            intelligence: 2
        },
        age: '约40岁成年，寿命可达350-500年',
        size: '小型',
        speed: 25,
        darkvision: 60,
        languages: ['通用语', '侏儒语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '侏狡黠', description: '你进行对抗魔法的智力、感知、魅力豁免时具有优势' }
        ],
        subraces: {
            forest: {
                name: '森林侏儒',
                nameEn: 'Forest Gnome',
                abilityScores: { dexterity: 1 },
                traits: [
                    { name: '自然幻术师', description: '你知晓次级幻影戏法，施法属性为智力', grantsSpells: { cantrips: [{ name: '次级幻影', alwaysKnown: true, ability: '智力' }] } },
                    { name: '与小型野兽交谈', description: '你可以通过声音和手势与小型或更小的野兽进行简单交流' }
                ]
            },
            rock: {
                name: '岩侏儒',
                nameEn: 'Rock Gnome',
                abilityScores: { constitution: 1 },
                traits: [
                    { name: '工匠学识', description: '你进行与魔法、炼金或技术物品相关的历史检定时，熟练加值加倍' },
                    { name: '修补匠', description: '你拥有工匠工具（修补工具）的熟练，可用1小时和10gp材料制作超小型发条装置' }
                ]
            },
            deep: {
                name: '地底侏儒',
                nameEn: 'Deep Gnome (Svirfneblin)',
                abilityScores: { dexterity: 1 },
                darkvision: 120,
                traits: [
                    { name: '卓越黑暗视觉', description: '你的黑暗视觉范围提升至120尺' },
                    { name: '岩石伪装', description: '你在岩石地形进行隐匿检定时具有优势' }
                ]
            }
        }
    },

    dragonborn: {
        name: '龙裔',
        nameEn: 'Dragonborn',
        source: '玩家手册/费兹班的龙族宝藏',
        description: '龙裔是龙族血统的继承者，拥有龙的力量和吐息武器。他们行走在多元宇宙中，是龙族血脉在凡人世界的体现。',
        abilityScores: {
            strength: 2,
            charisma: 1
        },
        age: '约15岁成年，寿命可达80年',
        size: '中型',
        speed: 30,
        languages: ['通用语', '龙语'],
        traits: [
            { name: '龙族血统', description: '你选择一种龙族血统，获得对应的伤害类型和龙息武器' },
            { name: '龙息武器', description: '你可以使用动作呼出破坏性的能量，伤害类型和范围取决于你的龙族血统（短休或长休恢复）' },
            { name: '伤害抗性', description: '你获得与你龙族血统相对应的伤害抗性' }
        ],
        draconicAncestry: [
            { name: '黑龙', damage: '强酸', breathWeapon: '5尺宽30尺长的直线', dc: '敏捷' },
            { name: '蓝龙', damage: '闪电', breathWeapon: '5尺宽30尺长的直线', dc: '敏捷' },
            { name: '黄铜龙', damage: '火焰', breathWeapon: '5尺宽30尺长的直线', dc: '敏捷' },
            { name: '青铜龙', damage: '闪电', breathWeapon: '5尺宽30尺长的直线', dc: '敏捷' },
            { name: '赤铜龙', damage: '强酸', breathWeapon: '5尺宽30尺长的直线', dc: '敏捷' },
            { name: '金龙', damage: '火焰', breathWeapon: '15尺锥形', dc: '敏捷' },
            { name: '绿龙', damage: '毒素', breathWeapon: '15尺锥形', dc: '体质' },
            { name: '红龙', damage: '火焰', breathWeapon: '15尺锥形', dc: '敏捷' },
            { name: '银龙', damage: '冷冻', breathWeapon: '15尺锥形', dc: '体质' },
            { name: '白龙', damage: '冷冻', breathWeapon: '15尺锥形', dc: '体质' }
        ],
        subraces: {
            // 彩色龙裔（邪恶龙血统）
            black: {
                name: '黑龙裔',
                nameEn: 'Black Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '黑龙裔继承了黑龙的强酸之力，他们的吐息能腐蚀一切。',
                damageType: '强酸',
                breathWeapon: { shape: '直线', range: '5尺宽30尺长', dc: '敏捷' },
                traits: [
                    { name: '强酸吐息', description: '你可以呼出破坏性的强酸，5尺宽30尺长的直线区域，区域内生物必须进行敏捷豁免（DC=8+体质调整值+熟练加值），失败受到2d6强酸伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '强酸抗性', description: '你拥有强酸伤害的抗性' },
                    { name: '两栖', description: '你可以在水下呼吸空气和水' }
                ]
            },
            blue: {
                name: '蓝龙裔',
                nameEn: 'Blue Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '蓝龙裔继承了蓝龙的闪电之力，他们的吐息能撕裂天空。',
                damageType: '闪电',
                breathWeapon: { shape: '直线', range: '5尺宽30尺长', dc: '敏捷' },
                traits: [
                    { name: '闪电吐息', description: '你可以呼出破坏性的闪电，5尺宽30尺长的直线区域，区域内生物必须进行敏捷豁免（DC=8+体质调整值+熟练加值），失败受到2d6闪电伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '闪电抗性', description: '你拥有闪电伤害的抗性' },
                    { name: '沙漠行者', description: '你无视困难地形的沙漠环境效果' }
                ]
            },
            green: {
                name: '绿龙裔',
                nameEn: 'Green Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '绿龙裔继承了绿龙的毒素之力，他们的吐息能让敌人窒息。',
                damageType: '毒素',
                breathWeapon: { shape: '锥形', range: '15尺', dc: '体质' },
                traits: [
                    { name: '毒素吐息', description: '你可以呼出破坏性的毒气，15尺锥形区域，区域内生物必须进行体质豁免（DC=8+体质调整值+熟练加值），失败受到2d6毒素伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '毒素抗性', description: '你拥有毒素伤害的抗性' },
                    { name: '林地伪装', description: '在森林或丛林地形进行隐匿检定时具有优势' }
                ]
            },
            red: {
                name: '红龙裔',
                nameEn: 'Red Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '红龙裔继承了红龙的火焰之力，他们的吐息能焚尽一切。',
                damageType: '火焰',
                breathWeapon: { shape: '锥形', range: '15尺', dc: '敏捷' },
                traits: [
                    { name: '火焰吐息', description: '你可以呼出破坏性的火焰，15尺锥形区域，区域内生物必须进行敏捷豁免（DC=8+体质调整值+熟练加值），失败受到2d6火焰伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '火焰抗性', description: '你拥有火焰伤害的抗性' },
                    { name: '火山适应', description: '你免疫高原反应，可以无视极端高温的环境效果' }
                ]
            },
            white: {
                name: '白龙裔',
                nameEn: 'White Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '白龙裔继承了白龙的冷冻之力，他们的吐息能冻结灵魂。',
                damageType: '冷冻',
                breathWeapon: { shape: '锥形', range: '15尺', dc: '体质' },
                traits: [
                    { name: '冷冻吐息', description: '你可以呼出破坏性的寒气，15尺锥形区域，区域内生物必须进行体质豁免（DC=8+体质调整值+熟练加值），失败受到2d6冷冻伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '冷冻抗性', description: '你拥有冷冻伤害的抗性' },
                    { name: '极地行者', description: '你免疫高原反应，可以无视极端寒冷的环境效果' }
                ]
            },
            // 金属龙裔（善良龙血统）
            brass: {
                name: '黄铜龙裔',
                nameEn: 'Brass Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '黄铜龙裔继承了黄铜龙的火焰之力，他们热爱交谈和阳光。',
                damageType: '火焰',
                breathWeapon: { shape: '直线', range: '5尺宽30尺长', dc: '敏捷' },
                traits: [
                    { name: '火焰吐息', description: '你可以呼出破坏性的火焰，5尺宽30尺长的直线区域，区域内生物必须进行敏捷豁免（DC=8+体质调整值+熟练加值），失败受到2d6火焰伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '火焰抗性', description: '你拥有火焰伤害的抗性' },
                    { name: '沙漠适应', description: '你可以无视极端高温的环境效果' }
                ]
            },
            bronze: {
                name: '青铜龙裔',
                nameEn: 'Bronze Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '青铜龙裔继承了青铜龙的闪电之力，他们热爱海洋和正义。',
                damageType: '闪电',
                breathWeapon: { shape: '直线', range: '5尺宽30尺长', dc: '敏捷' },
                traits: [
                    { name: '闪电吐息', description: '你可以呼出破坏性的闪电，5尺宽30尺长的直线区域，区域内生物必须进行敏捷豁免（DC=8+体质调整值+熟练加值），失败受到2d6闪电伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '闪电抗性', description: '你拥有闪电伤害的抗性' },
                    { name: '两栖', description: '你可以在水下呼吸空气和水' }
                ]
            },
            copper: {
                name: '赤铜龙裔',
                nameEn: 'Copper Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '赤铜龙裔继承了赤铜龙的强酸之力，他们热爱恶作剧和故事。',
                damageType: '强酸',
                breathWeapon: { shape: '直线', range: '5尺宽30尺长', dc: '敏捷' },
                traits: [
                    { name: '强酸吐息', description: '你可以呼出破坏性的强酸，5尺宽30尺长的直线区域，区域内生物必须进行敏捷豁免（DC=8+体质调整值+熟练加值），失败受到2d6强酸伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '强酸抗性', description: '你拥有强酸伤害的抗性' },
                    { name: '岩地行者', description: '在岩石或山地地形进行隐匿检定时具有优势' }
                ]
            },
            gold: {
                name: '金龙裔',
                nameEn: 'Gold Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '金龙裔继承了金龙的火焰之力，他们追求正义和秩序。',
                damageType: '火焰',
                breathWeapon: { shape: '锥形', range: '15尺', dc: '敏捷' },
                traits: [
                    { name: '火焰吐息', description: '你可以呼出破坏性的火焰，15尺锥形区域，区域内生物必须进行敏捷豁免（DC=8+体质调整值+熟练加值），失败受到2d6火焰伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '火焰抗性', description: '你拥有火焰伤害的抗性' },
                    { name: '水下呼吸', description: '你可以在水下呼吸' }
                ]
            },
            silver: {
                name: '银龙裔',
                nameEn: 'Silver Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '银龙裔继承了银龙的冷冻之力，他们热爱云端和善良。',
                damageType: '冷冻',
                breathWeapon: { shape: '锥形', range: '15尺', dc: '体质' },
                traits: [
                    { name: '冷冻吐息', description: '你可以呼出破坏性的寒气，15尺锥形区域，区域内生物必须进行体质豁免（DC=8+体质调整值+熟练加值），失败受到2d6冷冻伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '冷冻抗性', description: '你拥有冷冻伤害的抗性' },
                    { name: '极地适应', description: '你可以无视极端寒冷的环境效果' }
                ]
            },
            // 宝石龙裔（中立龙血统 - 来自费兹班的龙族宝藏）
            amethyst: {
                name: '紫晶龙裔',
                nameEn: 'Amethyst Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '紫晶龙裔继承了紫晶龙的心灵之力，他们追求知识和平衡。',
                damageType: '心灵',
                breathWeapon: { shape: '直线', range: '5尺宽30尺长', dc: '感知' },
                traits: [
                    { name: '心灵吐息', description: '你可以呼出破坏性的心灵能量，5尺宽30尺长的直线区域，区域内生物必须进行感知豁免（DC=8+体质调整值+熟练加值），失败受到2d6心灵伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '心灵抗性', description: '你拥有心灵伤害的抗性' },
                    { name: '宝石抗性', description: '你进行对抗魅惑和恐慌的豁免时具有优势' }
                ]
            },
            crystal: {
                name: '水晶龙裔',
                nameEn: 'Crystal Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '水晶龙裔继承了水晶龙的光耀之力，他们热爱阳光和美丽。',
                damageType: '光耀',
                breathWeapon: { shape: '直线', range: '5尺宽30尺长', dc: '体质' },
                traits: [
                    { name: '光耀吐息', description: '你可以呼出破坏性的光耀能量，5尺宽30尺长的直线区域，区域内生物必须进行体质豁免（DC=8+体质调整值+熟练加值），失败受到2d6光耀伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '光耀抗性', description: '你拥有光耀伤害的抗性' },
                    { name: '宝石抗性', description: '你进行对抗魅惑和恐慌的豁免时具有优势' }
                ]
            },
            emerald: {
                name: '翡翠龙裔',
                nameEn: 'Emerald Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '翡翠龙裔继承了翡翠龙的心灵之力，他们是操纵思想的专家。',
                damageType: '心灵',
                breathWeapon: { shape: '锥形', range: '15尺', dc: '感知' },
                traits: [
                    { name: '心灵吐息', description: '你可以呼出破坏性的心灵能量，15尺锥形区域，区域内生物必须进行感知豁免（DC=8+体质调整值+熟练加值），失败受到2d6心灵伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '心灵抗性', description: '你拥有心灵伤害的抗性' },
                    { name: '宝石抗性', description: '你进行对抗魅惑和恐慌的豁免时具有优势' }
                ]
            },
            sapphire: {
                name: '蓝宝石龙裔',
                nameEn: 'Sapphire Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '蓝宝石龙裔继承了蓝宝石龙的心灵之力，他们是灵能的掌控者。',
                damageType: '心灵',
                breathWeapon: { shape: '直线', range: '5尺宽30尺长', dc: '感知' },
                traits: [
                    { name: '心灵吐息', description: '你可以呼出破坏性的心灵能量，5尺宽30尺长的直线区域，区域内生物必须进行感知豁免（DC=8+体质调整值+熟练加值），失败受到2d6心灵伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '心灵抗性', description: '你拥有心灵伤害的抗性' },
                    { name: '宝石抗性', description: '你进行对抗魅惑和恐慌的豁免时具有优势' }
                ]
            },
            topaz: {
                name: '黄玉龙裔',
                nameEn: 'Topaz Dragonborn',
                source: '费兹班的龙族宝藏',
                description: '黄玉龙裔继承了黄玉龙的黯蚀之力，他们与死亡和遗忘为伴。',
                damageType: '黯蚀',
                breathWeapon: { shape: '锥形', range: '15尺', dc: '体质' },
                traits: [
                    { name: '黯蚀吐息', description: '你可以呼出破坏性的黯蚀能量，15尺锥形区域，区域内生物必须进行体质豁免（DC=8+体质调整值+熟练加值），失败受到2d6黯蚀伤害，成功伤害减半。5级时3d6，11级时4d6，17级时5d6（短休或长休恢复）' },
                    { name: '黯蚀抗性', description: '你拥有黯蚀伤害的抗性' },
                    { name: '宝石抗性', description: '你进行对抗魅惑和恐慌的豁免时具有优势' }
                ]
            }
        },
        // 龙裔变体选项
        variants: {
            draconicGifts: {
                name: '龙族恩赐',
                nameEn: 'Draconic Gifts',
                source: '费兹班的龙族宝藏',
                description: '一些龙裔展现出额外的龙族特征和能力',
                options: [
                    { 
                        name: '龙翼', 
                        description: '你长出龙翼，获得等于步行速度的飞行速度。5级起，你可以使用飞行速度',
                        levelRequired: 5
                    },
                    { 
                        name: '龙尾', 
                        description: '你长出龙尾，可以用它进行徒手打击，造成1d6+力量调整值的钝击伤害，命中后可用附赠动作尝试擒抱或推撞目标'
                    },
                    { 
                        name: '龙爪', 
                        description: '你的爪子变得锋利，徒手打击造成1d6+力量调整值的挥砍伤害'
                    },
                    { 
                        name: '龙鳞强化', 
                        description: '你的鳞片更加坚硬，未着装护甲时AC=13+敏捷调整值'
                    },
                    { 
                        name: '龙息强化', 
                        description: '你的龙息武器伤害骰提升一级（d6变为d8）'
                    }
                ]
            },
            chromaticLegacy: {
                name: '彩色龙传承',
                nameEn: 'Chromatic Legacy',
                source: '费兹班的龙族宝藏',
                description: '彩色龙裔可以选择此变体，获得额外的彩色龙能力',
                traits: [
                    { name: '彩色龙魔法', description: '你知晓戏法毒气喷溅；3级后每日一次施展脆弱诅咒；5级后每日一次施展黑暗术', grantsSpells: { cantrips: [{ name: '毒气喷溅', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '脆弱诅咒', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '黑暗术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            metallicLegacy: {
                name: '金属龙传承',
                nameEn: 'Metallic Legacy',
                source: '费兹班的龙族宝藏',
                description: '金属龙裔可以选择此变体，获得额外的金属龙能力',
                traits: [
                    { name: '金属龙魔法', description: '你知晓戏法光亮术；3级后每日一次施展治愈真言；5级后每日一次施展次级复原术', grantsSpells: { cantrips: [{ name: '光亮术', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '治愈真言', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '次级复原术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            gemLegacy: {
                name: '宝石龙传承',
                nameEn: 'Gem Legacy',
                source: '费兹班的龙族宝藏',
                description: '宝石龙裔可以选择此变体，获得额外的宝石龙能力',
                traits: [
                    { name: '宝石龙魔法', description: '你知晓戏法心灵之楔；3级后每日一次施展护盾术；5级后每日一次施展迷踪步', grantsSpells: { cantrips: [{ name: '心灵之楔', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '护盾术', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '迷踪步', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            }
        }
    },

    halfElf: {
        name: '半精灵',
        nameEn: 'Half-Elf',
        source: '玩家手册/剑湾冒险者指南/扩展',
        description: '半精灵是精灵和人类的混血，继承了两者的优点，但常常不被任何一方完全接纳。他们拥有人类的适应力和精灵的优雅，是优秀的 diplomats 和冒险者。',
        abilityScores: {
            charisma: 2
        },
        abilityScoreChoice: {
            count: 2,
            bonus: 1,
            text: '另两项不同属性各+1'
        },
        age: '约20岁成年，寿命可达180年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '精灵语'],
        extraLanguages: 1,
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照。在黑暗中，该范围内可视为等同于微光光照' },
            { name: '妖精血统', description: '你进行对抗魅惑的豁免时具有优势，并且不会因魔法效应陷入睡眠' },
            { name: '多才多艺', description: '你获得两项自选技能熟练' }
        ],
        extraSkills: 2,
        // 半精灵变体 - 基于精灵血统
        subraces: {
            // 标准半精灵
            standard: {
                name: '标准半精灵',
                nameEn: 'Standard Half-Elf',
                source: '玩家手册',
                description: '最常见的半精灵类型，继承了人类和高等精灵的血统。',
                abilityScores: { charisma: 2 },
                abilityScoreChoice: { count: 2, bonus: 1, text: '另两项不同属性各+1' },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '妖精血统', description: '你进行对抗魅惑的豁免时具有优势，并且不会因魔法效应陷入睡眠' },
                    { name: '多才多艺', description: '你获得两项自选技能熟练' }
                ],
                extraSkills: 2
            },
            // 木精灵血统半精灵
            wood: {
                name: '木精灵血统半精灵',
                nameEn: 'Wood Elf Heritage Half-Elf',
                source: '剑湾冒险者指南',
                description: '继承了木精灵血统的半精灵，与自然有着更深的联系。',
                abilityScores: { charisma: 2 },
                abilityScoreChoice: { count: 2, bonus: 1, text: '另两项不同属性各+1' },
                speed: 35,
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '妖精血统', description: '你进行对抗魅惑的豁免时具有优势，并且不会因魔法效应陷入睡眠' },
                    { name: '精灵武器训练', description: '你熟练使用长剑、短剑、短弓和长弓' },
                    { name: '轻捷步伐', description: '你的基础步行速度提升至35尺' },
                    { name: '多才多艺', description: '你获得一项自选技能熟练' }
                ],
                extraSkills: 1
            },
            // 卓尔血统半精灵
            drow: {
                name: '卓尔血统半精灵',
                nameEn: 'Drow Heritage Half-Elf',
                source: '剑湾冒险者指南',
                description: '继承了卓尔血统的半精灵，拥有幽暗地域的力量。',
                abilityScores: { charisma: 2 },
                abilityScoreChoice: { count: 2, bonus: 1, text: '另两项不同属性各+1' },
                darkvision: 120,
                traits: [
                    { name: '增强黑暗视觉', description: '你的黑暗视觉范围提升至120尺' },
                    { name: '妖精血统', description: '你进行对抗魅惑的豁免时具有优势，并且不会因魔法效应陷入睡眠' },
                    { name: '卓尔魔法', description: '你知晓舞光术戏法；3级后可施展妖火术；5级后可施展黑暗术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '舞光术', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '妖火术', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '黑暗术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } },
                    { name: '日光敏感', description: '阳光直射下攻击检定和依赖视觉的感知（察觉）检定具有劣势' },
                    { name: '多才多艺', description: '你获得一项自选技能熟练' }
                ],
                extraSkills: 1
            },
            // 高等精灵血统半精灵
            high: {
                name: '高等精灵血统半精灵',
                nameEn: 'High Elf Heritage Half-Elf',
                source: '剑湾冒险者指南',
                description: '继承了高等精灵血统的半精灵，拥有奥术天赋。',
                abilityScores: { charisma: 2 },
                abilityScoreChoice: { count: 2, bonus: 1, text: '另两项不同属性各+1' },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '妖精血统', description: '你进行对抗魅惑的豁免时具有优势，并且不会因魔法效应陷入睡眠' },
                    { name: '精灵武器训练', description: '你熟练使用长剑、短剑、短弓和长弓' },
                    { name: '戏法', description: '你习得一个法师戏法，施法属性为智力', grantsSpells: { cantrips: { count: 1, spellList: 'wizard', choose: true, ability: '智力' } } },
                    { name: '多才多艺', description: '你获得一项自选技能熟练' }
                ],
                extraSkills: 1
            },
            // 海精灵血统半精灵
            sea: {
                name: '海精灵血统半精灵',
                nameEn: 'Sea Elf Heritage Half-Elf',
                source: '扩展/魔邓肯的众敌之书',
                description: '继承了海精灵血统的半精灵，与水元素有着特殊的联系。',
                abilityScores: { charisma: 2 },
                abilityScoreChoice: { count: 2, bonus: 1, text: '另两项不同属性各+1' },
                swimSpeed: 30,
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '妖精血统', description: '你进行对抗魅惑的豁免时具有优势，并且不会因魔法效应陷入睡眠' },
                    { name: '海之子', description: '你获得游泳速度，等同于你的步行速度。你可以在水下呼吸空气和水' },
                    { name: '海之友', description: '你可以与任何有游泳速度的野兽传达简单的意念' },
                    { name: '多才多艺', description: '你获得一项自选技能熟练' }
                ],
                extraSkills: 1
            },
            // 雅灵血统半精灵
            eladrin: {
                name: '雅灵血统半精灵',
                nameEn: 'Eladrin Heritage Half-Elf',
                source: '扩展/魔邓肯的众敌之书',
                description: '继承了雅灵血统的半精灵，与妖精荒野有着神秘的联系。',
                abilityScores: { charisma: 2 },
                abilityScoreChoice: { count: 2, bonus: 1, text: '另两项不同属性各+1' },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '妖精血统', description: '你进行避免或结束魅惑状态的豁免时具有优势' },
                    { name: '精类步', description: '你可以魔法地传送到一处30尺内且未被占据的可见空间。短休或长休后恢复。', grantsSpells: { level2: [{ name: '迷雾步', levelRequired: 1, freeCast: { count: 1, reset: '短休' }, ability: '魅力' }] } },
                    { name: '多才多艺', description: '你获得一项自选技能熟练' }
                ],
                extraSkills: 1
            },
            // 影灵血统半精灵
            shadarKai: {
                name: '影灵血统半精灵',
                nameEn: 'Shadar-Kai Heritage Half-Elf',
                source: '扩展/魔邓肯的众敌之书',
                description: '继承了影灵血统的半精灵，与阴影位面有着神秘的联系。',
                abilityScores: { charisma: 2 },
                abilityScoreChoice: { count: 2, bonus: 1, text: '另两项不同属性各+1' },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '妖精血统', description: '你进行避免或结束魅惑状态的豁免时具有优势' },
                    { name: '鸦后的祝福', description: '你可以魔法地传送到一处30尺内且未被占据的可见空间。短休或长休后恢复。3级时，传送后获得所有伤害抗性直到你的下一回合开始' },
                    { name: '暗蚀抗性', description: '你具有黯蚀伤害的抗性' },
                    { name: '多才多艺', description: '你获得一项自选技能熟练' }
                ],
                extraSkills: 1
            },
            // 星界精灵血统半精灵
            astral: {
                name: '星界精灵血统半精灵',
                nameEn: 'Astral Elf Heritage Half-Elf',
                source: '扩展/星界冒险者指南',
                description: '继承了星界精灵血统的半精灵，与星光位面有着神秘的联系。',
                abilityScores: { charisma: 2 },
                abilityScoreChoice: { count: 2, bonus: 1, text: '另两项不同属性各+1' },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '妖精血统', description: '你进行避免或结束魅惑状态的豁免时具有优势' },
                    { name: '星界之火', description: '你知晓一个自选的戏法：舞光术、光亮术或圣火术。智力、感知或魅力是你释放该法术时的施法属性（选择该种族时决定）', grantsSpells: { cantrips: { count: 1, spellList: 'wizard', choose: true, ability: '魅力' } } },
                    { name: '星光步', description: '你可以魔法地传送到30尺内一处你可见且未被占据的空间。你能使用本特性的次数等于你的熟练加值，当你完成一次长休，你恢复所有已使用的次数。', grantsSpells: { level2: [{ name: '迷雾步', levelRequired: 1, freeCast: { count: '熟练加值', reset: '长休' }, ability: '魅力' }] } },
                    { name: '多才多艺', description: '你获得一项自选技能熟练' }
                ],
                extraSkills: 1
            }
        },
    },

    halfOrc: {
        name: '半兽人',
        nameEn: 'Half-Orc',
        source: '玩家手册',
        description: '半兽人是兽人和人类的混血，继承了兽人的力量和凶暴。',
        abilityScores: {
            strength: 2,
            constitution: 1
        },
        age: '约14岁成年，寿命可达75年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '兽人语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '不屈', description: '当你被降至0生命值但未直接杀死时，可以改为降至1生命值（长休恢复）' },
            { name: '凶恶攻击', description: '当你用近战武器攻击造成致命一击时，可以额外增加一个伤害骰' },
            { name: '野蛮攻击', description: '当你用近战武器攻击造成致命一击时，可以额外增加一个伤害骰' }
        ]
    },

    tiefling: {
        name: '提夫林',
        nameEn: 'Tiefling',
        source: '玩家手册/魔邓肯的众敌之书/剑湾冒险者指南',
        description: '提夫林是恶魔或魔鬼的后裔，拥有地狱的血统和力量。他们的外表带有明显的恶魔特征，如角、尾巴和异色瞳孔，但他们并非天生邪恶，而是被多元宇宙中的偏见所困扰。',
        abilityScores: {
            intelligence: 1,
            charisma: 2
        },
        age: '约20岁成年，寿命可达100年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '炼狱语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照。在黑暗中，该范围内可视为等同于微光光照' },
            { name: '火焰抗性', description: '你拥有火焰伤害抗性' },
            { name: '地狱遗赠', description: '你知晓奇术戏法；3级后可施展炼狱叱喝；5级后可施展黑暗术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '奇术', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '炼狱叱喝', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '黑暗术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
        ],
        // 提夫林变体 - 基于不同地狱血统
        subraces: {
            // 阿斯莫提夫林（标准提夫林 - 阿斯莫血统）
            asmodeus: {
                name: '阿斯莫提夫林',
                nameEn: 'Asmodeus Tiefling',
                source: '魔邓肯的众敌之书',
                description: '继承了九层地狱之主阿斯莫血统的提夫林，是最常见的提夫林类型。',
                abilityScores: { intelligence: 1, charisma: 2 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '火焰抗性', description: '你拥有火焰伤害抗性' },
                    { name: '地狱遗赠', description: '你知晓奇术戏法；3级后可施展炼狱叱喝；5级后可施展黑暗术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '奇术', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '炼狱叱喝', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '黑暗术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            // 巴力提夫林
            baalzebul: {
                name: '巴力提夫林',
                nameEn: 'Baalzebul Tiefling',
                source: '魔邓肯的众敌之书',
                description: '继承了苍蝇领主巴力血统的提夫林，擅长腐化和诡计。',
                abilityScores: { intelligence: 1, charisma: 2 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '火焰抗性', description: '你拥有火焰伤害抗性' },
                    { name: '巴力遗赠', description: '你知晓奇术戏法；3级后可施展脆弱诅咒；5级后可施展侦测思想；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '奇术', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '脆弱诅咒', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '侦测思想', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            // 狄斯帕特提夫林
            dispater: {
                name: '狄斯帕特提夫林',
                nameEn: 'Dispater Tiefling',
                source: '魔邓肯的众敌之书',
                description: '继承了迪斯城主狄斯帕特血统的提夫林，是间谍和阴谋的大师。',
                abilityScores: { dexterity: 1, charisma: 2 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '火焰抗性', description: '你拥有火焰伤害抗性' },
                    { name: '狄斯帕特遗赠', description: '你知晓奇术戏法；3级后可施展不谐低语；5级后可施展隐形术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '奇术', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '不谐低语', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '隐形术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            // 菲尔娜提夫林
            fierna: {
                name: '菲尔娜提夫林',
                nameEn: 'Fierna Tiefling',
                source: '魔邓肯的众敌之书',
                description: '继承了菲尔娜血统的提夫林，拥有操控他人情感的能力。',
                abilityScores: { wisdom: 1, charisma: 2 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '火焰抗性', description: '你拥有火焰伤害抗性' },
                    { name: '菲尔娜遗赠', description: '你知晓交友术戏法；3级后可施展魅惑人类；5级后可施展暗示术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '交友术', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '魅惑人类', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '暗示术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            // 格拉斯亚提夫林
            glasya: {
                name: '格拉斯亚提夫林',
                nameEn: 'Glasya Tiefling',
                source: '魔邓肯的众敌之书',
                description: '继承了玛尔博吉女王格拉斯亚血统的提夫林，是欺诈和盗窃的大师。',
                abilityScores: { dexterity: 1, charisma: 2 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '火焰抗性', description: '你拥有火焰伤害抗性' },
                    { name: '格拉斯亚遗赠', description: '你知晓次级幻影戏法；3级后可施展易容术；5级后可施展隐形术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '次级幻影', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '易容术', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '隐形术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            // 莱维思图斯提夫林
            levistus: {
                name: '莱维思图斯提夫林',
                nameEn: 'Levistus Tiefling',
                source: '魔邓肯的众敌之书',
                description: '继承了被冰封的莱维思图斯血统的提夫林，拥有冰冻的力量。',
                abilityScores: { constitution: 1, charisma: 2 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '冷冻抗性', description: '你拥有冷冻伤害抗性' },
                    { name: '莱维思图斯遗赠', description: '你知晓法师之手戏法（呈现为幽灵冰爪）；3级后可施展护甲之主；5级后可施展黑暗术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '法师之手', alwaysKnown: true, ability: '魅力', special: '幽灵冰爪' }], level1: [{ name: '护甲之主', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '黑暗术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            // 玛门提夫林
            mammon: {
                name: '玛门提夫林',
                nameEn: 'Mammon Tiefling',
                source: '魔邓肯的众敌之书',
                description: '继承了贪婪大公玛门血统的提夫林，对财富和宝藏有着天生的敏感。',
                abilityScores: { intelligence: 1, charisma: 2 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '火焰抗性', description: '你拥有火焰伤害抗性' },
                    { name: '玛门遗赠', description: '你知晓法师之手戏法；3级后可施展塔莎狂笑术；5级后可施展蛛行术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '法师之手', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '塔莎狂笑术', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '蛛行术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            // 墨菲斯托费利斯提夫林
            mephistopheles: {
                name: '墨菲斯托费利斯提夫林',
                nameEn: 'Mephistopheles Tiefling',
                source: '魔邓肯的众敌之书',
                description: '继承了墨菲斯托费利斯血统的提夫林，是奥术知识的追求者。',
                abilityScores: { intelligence: 1, charisma: 2 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '火焰抗性', description: '你拥有火焰伤害抗性' },
                    { name: '墨菲斯托费利斯遗赠', description: '你知晓火焰箭戏法；3级后可施展燃烧之手；5级后可施展火焰刀；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '火焰箭', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '燃烧之手', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '火焰刀', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            // 扎瑞尔提夫林
            zariel: {
                name: '扎瑞尔提夫林',
                nameEn: 'Zariel Tiefling',
                source: '魔邓肯的众敌之书',
                description: '继承了堕落天使扎瑞尔血统的提夫林，是战斗和毁灭的化身。',
                abilityScores: { strength: 1, charisma: 2 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '火焰抗性', description: '你拥有火焰伤害抗性' },
                    { name: '扎瑞尔遗赠', description: '你知晓奇术戏法；3级后可施展神恩；5级后可施展印记斩；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '奇术', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '神恩', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '印记斩', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            // 深渊提夫林（恶魔血统）
            abyssal: {
                name: '深渊提夫林',
                nameEn: 'Abyssal Tiefling',
                source: '剑湾冒险者指南/自定义',
                description: '继承了深渊恶魔血统的提夫林，拥有更野蛮和混乱的力量。',
                abilityScores: { constitution: 1, charisma: 2 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '毒素抗性', description: '你拥有毒素伤害抗性' },
                    { name: '深渊遗赠', description: '你知晓毒气喷溅戏法；3级后可施展妖火；5级后可施展蛛行术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '毒气喷溅', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '妖火', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '蛛行术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            },
            // 尤格罗斯提夫林
            yugoloth: {
                name: '尤格罗斯提夫林',
                nameEn: 'Yugoloth Tiefling',
                source: '自定义/扩展',
                description: '继承了尤格罗斯魔血统的提夫林，是中立邪恶位面的后裔。',
                abilityScores: { intelligence: 1, charisma: 2 },
                traits: [
                    { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
                    { name: '黯蚀抗性', description: '你拥有黯蚀伤害抗性' },
                    { name: '尤格罗斯遗赠', description: '你知晓冷冻射线戏法；3级后可施展虚假生命；5级后可施展黑暗术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '冷冻射线', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '虚假生命', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '黑暗术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            }
        },
        // 提夫林变体选项
        variants: {
            winged: {
                name: '有翼提夫林',
                nameEn: 'Winged Tiefling',
                source: '剑湾冒险者指南',
                description: '一些提夫林拥有蝙蝠般的翅膀，可以飞行。',
                traits: [
                    { name: '飞行', description: '你拥有30尺飞行速度。穿戴中甲或重甲时不能使用此飞行速度' }
                ],
                tradeOff: '失去地狱遗赠特性'
            },
            devilTongue: {
                name: '魔鬼之舌',
                nameEn: 'Devil\'s Tongue',
                source: '剑湾冒险者指南',
                description: '你的口才和魅惑能力得到了魔鬼血统的强化。',
                traits: [
                    { name: '魔鬼之舌', description: '你知晓恶毒嘲笑和交友术戏法；3级后可施展魅惑人类；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '恶毒嘲笑', alwaysKnown: true, ability: '魅力' }, { name: '交友术', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '魅惑人类', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ],
                tradeOff: '替换地狱遗赠中的奇术和炼狱叱喝'
            },
            hellfire: {
                name: '地狱之火',
                nameEn: 'Hellfire',
                source: '剑湾冒险者指南',
                description: '你的地狱遗赠能力得到了火焰的强化。',
                traits: [
                    { name: '地狱之火', description: '你的炼狱叱喝额外造成火焰伤害' }
                ]
            },
            infernalLegacy: {
                name: '炼狱传承',
                nameEn: 'Infernal Legacy',
                source: '玩家手册',
                description: '标准的炼狱血统提夫林。',
                traits: [
                    { name: '炼狱传承', description: '你知晓奇术戏法；3级后可施展炼狱叱喝；5级后可施展黑暗术；长休恢复；施法属性为魅力', grantsSpells: { cantrips: [{ name: '奇术', alwaysKnown: true, ability: '魅力' }], level1: [{ name: '炼狱叱喝', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }], level2: [{ name: '黑暗术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '魅力' }] } }
                ]
            }
        }
    },

    aasimar: {
        name: '阿斯莫',
        nameEn: 'Aasimar',
        source: '玩家手册/城主指南',
        description: '阿斯莫是天界生物的后裔，拥有神圣的血统和力量。',
        abilityScores: {
            charisma: 2
        },
        age: '约20岁成年，寿命可达160年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '天界语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '天族抗性', description: '你对光耀伤害和黯蚀伤害具有抗性' },
            { name: '治愈之手', description: '你可以使用动作触摸恢复生命值，等于你的等级（长休恢复）' },
            { name: '光明使徒', description: '你知晓光亮术戏法，施法属性为魅力', grantsSpells: { cantrips: [{ name: '光亮术', alwaysKnown: true, ability: '魅力' }] } }
        ],
        subraces: {
            protector: {
                name: '守护阿斯莫',
                nameEn: 'Protector Aasimar',
                abilityScores: { wisdom: 1 },
                traits: [
                    { name: '光辉灵魂', description: '3级后，你可召唤天界之力1分钟，获得30尺飞行速度，攻击或法术可造成额外光耀伤害（长休恢复）' }
                ]
            },
            scourge: {
                name: '天罚阿斯莫',
                nameEn: 'Scourge Aasimar',
                abilityScores: { constitution: 1 },
                traits: [
                    { name: '光辉焚化', description: '3级后，你可发出10尺明亮光照1分钟，每回合结束对10尺范围内生物造成光耀伤害（长休恢复）' }
                ]
            },
            fallen: {
                name: '堕落阿斯莫',
                nameEn: 'Fallen Aasimar',
                abilityScores: { strength: 1 },
                traits: [
                    { name: '死灵环绕', description: '3级后，10尺内生物可能恐慌，攻击可造成额外暗蚀伤害（长休恢复）' }
                ]
            }
        }
    },

    // ==================== 扩展书种族 ====================
    // 《多元宇宙的怪物》种族 - 使用新版种族规则
    tortle: {
        name: '龟人',
        nameEn: 'Tortle',
        source: '多元宇宙的怪物',
        description: '龟人是拥有龟壳的类人生物，天生具有强大的防御能力。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约50年',
        size: '中型或小型',
        speed: 30,
        swimSpeed: 30,
        languages: ['通用语', '水族语'],
        traits: [
            { name: '利爪', description: '你的徒手打击造成1d6+力量调整值的挥砍伤害' },
            { name: '屏息', description: '你可以屏住呼吸长达1小时' },
            { name: '天生护甲', description: '你的基础AC为17，无法穿戴轻甲、中甲、重甲，但可以使用盾牌' },
            { name: '自然直觉', description: '你从驯兽、医药、自然、察觉、隐匿、生存中选择一项获得熟练' },
            { name: '龟壳防御', description: '你可以缩回壳内，获得+4 AC加值，力量和体质豁免具有优势；期间处于倒地状态，速度为0，敏捷豁免具有劣势' }
        ],
        skillChoices: ['驯兽', '医药', '自然', '察觉', '隐匿', '生存'],
        skillChoiceCount: 1
    },

    eladrin: {
        name: '雅灵',
        nameEn: 'Eladrin',
        source: '多元宇宙的怪物',
        description: '雅灵是来自妖精荒野的精灵，与季节有着神秘的联系。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '750岁以上',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '精灵语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '妖精血统', description: '你进行避免或结束魅惑状态的豁免检定时具有优势' },
            { name: '妖精步', description: '你可以使用附赠动作传送至30尺内可见的未占据空间，次数等于你的熟练加值（长休恢复）' },
            { name: '敏锐感官', description: '你拥有察觉技能的熟练项' },
            { name: '出神', description: '你无需睡眠，4小时冥想完成长休，结束时可变换季节并获得两项武器或工具熟练' },
            { name: '季节特性', description: '3级时妖精步获得额外效果：秋-魅惑、冬-恐慌、春-带人传送、夏-火焰伤害' }
        ],
        seasons: ['秋', '冬', '春', '夏']
    },

    aarakocra: {
        name: '鸟羽人',
        nameEn: 'Aarakocra',
        source: '多元宇宙的怪物',
        description: '拥有鸟类特征的类人生物，能够飞行。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约30年',
        size: '中型',
        speed: 30,
        flySpeed: 30,
        languages: ['通用语', '气族语', '鸟羽人语'],
        traits: [
            { name: '飞行', description: '你拥有等于步行速度的飞行速度，穿戴中甲和重甲时不能使用' },
            { name: '利爪', description: '你的徒手打击造成1d6+力量调整值的挥砍伤害' },
            { name: '呼风者', description: '3级起你可施展造风术，无需材料成分（长休恢复）', grantsSpells: { level2: [{ name: '造风术', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '魅力', noMaterial: true }] } }
        ]
    },

    firbolg: {
        name: '费尔伯格人',
        nameEn: 'Firbolg',
        source: '多元宇宙的怪物',
        description: '温和的巨人族裔，与自然有着深厚的联系。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约500年',
        size: '中型',
        speed: 30,
        languages: ['通用语', '精灵语', '巨人语'],
        traits: [
            { name: '费尔伯格人魔法', description: '你可以随意施展侦测魔法和易容术（长休恢复）', grantsSpells: { level1: [{ name: '侦测魔法', freeCast: { count: Infinity, reset: '随意施展' }, ability: '感知' }, { name: '易容术', freeCast: { count: Infinity, reset: '随意施展' }, ability: '感知' }] } },
            { name: '神隐步', description: '你可以使用附赠动作化为隐形，持续至你的下一回合开始（长休恢复）' },
            { name: '身强力壮', description: '决定载重、推拉抬重量时你视为体型大一级' },
            { name: '兽与叶之语', description: '你可以与野兽、植物有限交流，影响它们的魅力检定具有优势' }
        ]
    },

    lizardfolk: {
        name: '蜥蜴人',
        nameEn: 'Lizardfolk',
        source: '多元宇宙的怪物',
        description: '原始的爬行动物种族，拥有强大的生存能力。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '中型',
        speed: 30,
        swimSpeed: 30,
        languages: ['通用语', '龙语'],
        traits: [
            { name: '啃咬', description: '你的徒手打击造成1d6+力量调整值的穿刺伤害' },
            { name: '屏息', description: '你可以屏住呼吸15分钟' },
            { name: '饥渴之喉', description: '你可以使用附赠动作进行啃咬特殊攻击，命中获得熟练加值的临时生命值' },
            { name: '天生护甲', description: '未着装护甲时你的基础AC为13+敏捷调整值' },
            { name: '自然直觉', description: '你从驯兽、医药、自然、察觉、隐匿、生存中选择两项获得熟练' }
        ],
        skillChoices: ['驯兽', '医药', '自然', '察觉', '隐匿', '生存'],
        skillChoiceCount: 2
    },

    kobold: {
        name: '狗头人',
        nameEn: 'Kobold',
        source: '多元宇宙的怪物',
        description: '小型龙族后裔，以群体智慧和狡猾著称。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '小型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '龙语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '龙吼', description: '你可以使用附赠动作吼向10尺内敌人，你和盟友对该敌人攻击检定具有优势（长休恢复）' },
            { name: '狗头人遗赠', description: '选择一项：机智（奥秘、调查、医药、巧手、生存中选一项熟练）/逆反（避免或结束恐慌状态豁免优势）/龙术（术士法术列表中选一项戏法）' }
        ]
    },

    minotaur: {
        name: '牛头人',
        nameEn: 'Minotaur',
        source: '多元宇宙的怪物',
        description: '拥有牛头和强大力量的类人生物。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '中型',
        speed: 30,
        languages: ['通用语', '牛头人语'],
        traits: [
            { name: '角击', description: '你的徒手打击造成1d6+力量调整值的穿刺伤害' },
            { name: '猛抵冲撞', description: '疾走移动至少20尺后，你可以使用附赠动作以角击发动近战攻击' },
            { name: '角锤', description: '近战攻击命中后，你可以使用附赠动作尝试推开目标' },
            { name: '迷宫追忆', description: '你总是知道北方，导航和追踪的感知（求生）检定具有优势' }
        ]
    },

    bugbear: {
        name: '熊地精',
        nameEn: 'Bugbear',
        source: '多元宇宙的怪物',
        description: '大型地精族裔，以力量和隐秘著称。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '地精语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '妖精血统', description: '你进行避免或结束魅惑状态的豁免时具有优势' },
            { name: '长肢', description: '你的近战攻击触及范围增加5尺' },
            { name: '身强力壮', description: '决定载重、推拉抬重量时你视为体型大一级' },
            { name: '隐秘', description: '你拥有隐匿技能的熟练，可以在仅容小型生物的空间穿行与停留' },
            { name: '突袭攻击', description: '攻击命中战斗开始后未开始过自己回合的生物时，额外造成2d6伤害' }
        ]
    },

    duergar: {
        name: '灰矮人',
        nameEn: 'Duergar',
        source: '多元宇宙的怪物',
        description: '幽暗地域的矮人，拥有灵能能力。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约350年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '矮人语', '地底通用语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '灰矮人魔法', description: '3级起你可对自己施展变巨术/缩小术，5级起可施展隐形术（长休恢复）', grantsSpells: { level2: [{ name: '变巨术/缩小术', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '体质', target: '自身' }], level2: [{ name: '隐形术', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '体质' }] } },
            { name: '矮人韧性', description: '你进行避免或结束中毒状态的豁免时具有优势，毒素伤害抗性' },
            { name: '灵能坚韧', description: '你进行避免或结束魅惑和震慑状态的豁免时具有优势' }
        ]
    },

    seaElf: {
        name: '海精灵',
        nameEn: 'Sea Elf',
        source: '多元宇宙的怪物',
        description: '生活在海洋中的精灵族裔。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '750岁以上',
        size: '中型',
        speed: 30,
        swimSpeed: 30,
        darkvision: 60,
        languages: ['通用语', '精灵语', '水族语'],
        traits: [
            { name: '海之子', description: '你可以在空气和水中呼吸，寒冷伤害抗性' },
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '妖精血统', description: '你进行避免或结束魅惑状态的豁免时具有优势' },
            { name: '海之友', description: '你可以与拥有游泳速度的野兽交流简单想法' },
            { name: '敏锐感官', description: '你拥有察觉技能的熟练项' },
            { name: '出神', description: '你无需睡眠，4小时冥想完成长休，结束时获得两项武器或工具熟练' }
        ]
    },

    goliath: {
        name: '歌利亚',
        nameEn: 'Goliath',
        source: '多元宇宙的怪物',
        description: '高山居住的巨人族裔，以力量和坚韧著称。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约100年',
        size: '中型',
        speed: 30,
        languages: ['通用语', '巨人语'],
        traits: [
            { name: '运动健将', description: '你拥有运动技能的熟练' },
            { name: '生于高山', description: '你拥有寒冷伤害抗性，适应高海拔环境' },
            { name: '石之坚韧', description: '当你受到伤害时，可以使用反应掷d12+体质调整值来减少伤害（短休或长休恢复）' },
            { name: '身强力壮', description: '决定载重、推拉抬重量时你视为体型大一级' }
        ]
    },

    triton: {
        name: '梭螺鱼人',
        nameEn: 'Triton',
        source: '多元宇宙的怪物',
        description: '深海中的两栖类人生物，守护海洋的卫士。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约200年',
        size: '中型',
        speed: 30,
        swimSpeed: 30,
        darkvision: 60,
        languages: ['通用语', '原初语', '水族语'],
        traits: [
            { name: '两栖', description: '你可以在空气和水中呼吸' },
            { name: '控风操水', description: '你可以施展云雾术；3级起造风术；5级起水上行走（长休恢复）' },
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '海之使者', description: '你可以与具有游泳速度的野兽、元素、怪兽沟通' },
            { name: '海渊守卫', description: '你拥有寒冷伤害抗性' }
        ]
    },

    tabaxi: {
        name: '斑猫人',
        nameEn: 'Tabaxi',
        source: '多元宇宙的怪物',
        description: '猫科特征的类人生物，好奇且敏捷。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '中型或小型',
        speed: 30,
        climbSpeed: 30,
        darkvision: 60,
        languages: ['通用语'],
        extraLanguages: 1,
        traits: [
            { name: '猫之利爪', description: '你的徒手打击造成1d6+力量调整值的挥砍伤害' },
            { name: '猫之天性', description: '你拥有察觉和隐匿技能的熟练' },
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '猫之迅捷', description: '战斗中移动时你的速度可翻倍，使用后需在一回合移动0尺才能再次使用' }
        ]
    },

    shadarKai: {
        name: '影灵',
        nameEn: 'Shadar-kai',
        source: '多元宇宙的怪物',
        description: '与阴影位面相连的精灵族裔，受鸦后祝福。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '750岁以上',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '精灵语'],
        traits: [
            { name: '鸦后的祝福', description: '你可以使用附赠动作传送至30尺内可见的未占据空间，3级起传送时你获得所有伤害抗性（长休恢复）' },
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '妖精血统', description: '你进行避免或结束魅惑状态的豁免时具有优势' },
            { name: '敏锐感官', description: '你拥有察觉技能的熟练项' },
            { name: '暗蚀抗性', description: '你拥有暗蚀伤害抗性' },
            { name: '出神', description: '你无需睡眠，4小时冥想完成长休，结束时获得两项武器或工具熟练' }
        ]
    },

    changeling: {
        name: '幻身灵',
        nameEn: 'Changeling',
        source: '多元宇宙的怪物/艾伯伦寻路者指南',
        description: '能够改变外貌的变形者，是天生的间谍和演员。',
        abilityScores: {
            charisma: 2
        },
        abilityScoreChoice: {
            count: 1,
            options: ['dexterity', 'intelligence'],
            bonus: 1,
            text: '敏捷或智力+1'
        },
        size: '中型或小型',
        speed: 30,
        languages: ['通用语'],
        extraLanguages: 2,
        traits: [
            { name: '幻身灵本能', description: '你从欺瞒、洞悉、威吓、表演、游说中选择两项获得熟练' },
            { name: '变形生物', description: '你可以使用动作改变外表和声音，可调整身高体重和体型（中型/小型），保持新形态至使用动作恢复或死亡' }
        ],
        skillChoices: ['欺瞒', '洞悉', '威吓', '表演', '游说'],
        skillChoiceCount: 2
    },

    kenku: {
        name: '天狗',
        nameEn: 'Kenku',
        source: '多元宇宙的怪物',
        description: '无法说话的鸟类人形生物，擅长模仿。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '中型或小型',
        speed: 30,
        languages: ['通用语', '气族语'],
        languageNote: '只能以拟声方式说话，无法以正常方式说话',
        traits: [
            { name: '复制专家', description: '你进行抄写或仿造工艺品检定时具有优势' },
            { name: '天狗训练', description: '你选择两项技能获得熟练，使用熟练技能检定时可让检定具有优势，次数等于你的熟练加值（长休恢复）' },
            { name: '拟声', description: '你可以确切模仿曾听到的声音' }
        ]
    },

    hobgoblin: {
        name: '大地精',
        nameEn: 'Hobgoblin',
        source: '多元宇宙的怪物',
        description: '军事化的地精族裔，重视纪律和战术。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '地精语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '妖精血统', description: '你进行避免或结束魅惑状态的豁免时具有优势' },
            { name: '妖精赠礼', description: '你可以使用附赠动作执行协助动作，3级起可选好客/通行/恶意效果' },
            { name: '集众之运', description: '攻击未命中或检定/豁免失败时，你可以获得30尺内可见盟友数量的加值（最多+3）' }
        ]
    },

    goblin: {
        name: '地精',
        nameEn: 'Goblin',
        source: '多元宇宙的怪物',
        description: '小型地精族裔，以狡猾和敏捷著称。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '小型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '地精语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '妖精血统', description: '你进行避免或结束魅惑状态的豁免时具有优势' },
            { name: '小个子的怒火', description: '对体型大于你的生物造成伤害时，你可以额外造成等于熟练加值的伤害' },
            { name: '迅捷逃生', description: '每个回合你可用附赠动作执行撤离或躲藏动作' }
        ]
    },

    svirfneblin: {
        name: '地底侏儒',
        nameEn: 'Deep Gnome (Svirfneblin)',
        source: '多元宇宙的怪物',
        description: '幽暗地域的侏儒，擅长隐匿和幻术。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约500年',
        size: '小型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '侏儒语', '地底通用语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '斯涅布力赠礼', description: '3级起你可施展易容术，5级起可施展回避侦测（长休恢复）', grantsSpells: { level1: [{ name: '易容术', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '智力' }], level3: [{ name: '回避侦测', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '智力' }] } },
            { name: '侏狡黠', description: '你进行对抗法术的智力、感知、魅力豁免时具有优势' },
            { name: '斯涅布力伪装', description: '你进行敏捷（隐匿）检定时可让检定具有优势' }
        ]
    },

    githyanki: {
        name: '吉斯洋基人',
        nameEn: 'Githyanki',
        source: '多元宇宙的怪物',
        description: '星界的灵能战士，与夺心魔有着深仇大恨。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '星界居住者可永久存活',
        size: '中型',
        speed: 30,
        languages: ['通用语', '吉斯语'],
        traits: [
            { name: '星界知识', description: '长休后你获得一项自选技能熟练和一项武器或工具熟练' },
            { name: '吉斯洋基灵能', description: '你知晓法师之手（隐形）；3级起跳跃术；5级起迷踪步（长休恢复）', grantsSpells: { cantrips: [{ name: '法师之手', alwaysKnown: true, ability: '智力', special: '隐形' }], level1: [{ name: '跳跃术', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '智力' }], level2: [{ name: '迷踪步', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '智力' }] } },
            { name: '心灵抗性', description: '你拥有心灵伤害抗性' }
        ]
    },

    githzerai: {
        name: '吉斯泽莱人',
        nameEn: 'Githzerai',
        source: '多元宇宙的怪物',
        description: '混沌海的灵能修道者，追求心灵的平静。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '中型',
        speed: 30,
        languages: ['通用语', '吉斯语'],
        traits: [
            { name: '吉斯泽莱灵能', description: '你知晓法师之手（隐形）；3级起护盾术；5级起侦测思想（长休恢复）', grantsSpells: { cantrips: [{ name: '法师之手', alwaysKnown: true, ability: '感知', special: '隐形' }], level1: [{ name: '护盾术', levelRequired: 3, freeCast: { count: 1, reset: '长休' }, ability: '感知' }], level2: [{ name: '侦测思想', levelRequired: 5, freeCast: { count: 1, reset: '长休' }, ability: '感知' }] } },
            { name: '精神戒训', description: '你进行避免或结束魅惑和恐慌状态的豁免时具有优势' },
            { name: '心灵抗性', description: '你拥有心灵伤害抗性' }
        ]
    },

    yuanTiPureblood: {
        name: '原体蛇人',
        nameEn: 'Yuan-ti Pureblood',
        source: '多元宇宙的怪物',
        description: '蛇人帝国的后裔，拥有蛇的特征和魔法抗性。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '中型或小型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '龙语', '蛇人语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '魔法抗性', description: '你进行对抗法术的豁免时具有优势' },
            { name: '毒素抗性', description: '你进行避免或结束中毒状态的豁免时具有优势，毒素伤害抗性' },
            { name: '巨蛇法术', description: '你知晓毒气喷涌，可无限次施展化兽为友（仅对蛇），3级起暗示术' }
        ]
    },

    satyr: {
        name: '半羊人',
        nameEn: 'Satyr',
        source: '多元宇宙的怪物',
        description: '拥有山羊特征的妖精生物，热爱享乐和音乐。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '中型',
        speed: 35,
        languages: ['通用语', '木族语'],
        traits: [
            { name: '顶撞', description: '你的徒手打击造成1d6+力量调整值的钝击伤害' },
            { name: '魔法抗性', description: '你进行对抗法术的豁免时具有优势' },
            { name: '欢喜之跃', description: '跳远或跳高时你可以掷d8加入跳跃尺数' },
            { name: '贪欢者', description: '你拥有表演和游说技能的熟练，以及一项自选乐器的熟练' }
        ]
    },

    shifter: {
        name: '化兽者',
        nameEn: 'Shifter',
        source: '多元宇宙的怪物/艾伯伦寻路者指南',
        description: '拥有野兽血统的类人生物，能够短暂展现野兽特征。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约70年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语'],
        traits: [
            { name: '野兽本能', description: '你从特技、运动、威吓、求生中选择一项获得熟练' },
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '化形', description: '你可以使用附赠动作展现野兽姿态，获得临时生命值和亚种额外好处（短休恢复）' }
        ],
        subraces: {
            beasthide: {
                name: '兽皮',
                traits: [
                    { name: '兽皮化形', description: '化形时获得额外1d6临时生命值，AC+1' }
                ]
            },
            longtooth: {
                name: '长牙',
                traits: [
                    { name: '长牙化形', description: '化形时可立即用长牙发动徒手打击，后续回合可用附赠动作再次发动' }
                ]
            },
            swiftstride: {
                name: '迅捷',
                traits: [
                    { name: '迅捷化形', description: '化形时速度增加10尺，敌人进入5尺范围时你可用反应移动10尺' }
                ]
            },
            wildhunt: {
                name: '猎食',
                traits: [
                    { name: '猎食化形', description: '化形时感知检定具有优势，30尺范围内生物对你攻击无法具有优势' }
                ]
            }
        }
    },

    orc: {
        name: '兽人',
        nameEn: 'Orc',
        source: '多元宇宙的怪物',
        description: '强大的战士种族，以力量和战斗本能著称。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约80年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '兽人语'],
        traits: [
            { name: '应激冲刺', description: '你可以使用附赠动作执行疾走动作，获得熟练加值的临时生命值（短休恢复）' },
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '身强力壮', description: '决定载重、推拉抬重量时你视为体型大一级' }
        ]
    },

    harengon: {
        name: '兔人',
        nameEn: 'Harengon',
        source: '多元宇宙的怪物',
        description: '拥有兔子特征的类人生物，敏捷且幸运。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '中型或小型',
        speed: 30,
        languages: ['通用语'],
        extraLanguages: 1,
        traits: [
            { name: '狡兔敏锐', description: '你的熟练加值加入先攻数值' },
            { name: '小兔感官', description: '你拥有察觉技能的熟练' },
            { name: '幸运步伐', description: '敏捷豁免失败时你可以使用反应掷d4加入检定' },
            { name: '兔子跳', description: '你可以使用附赠动作跳跃熟练加值×5尺距离，不触发借机攻击（长休恢复）' }
        ]
    },

    genasi: {
        name: '元素裔',
        nameEn: 'Genasi',
        source: '多元宇宙的怪物',
        description: '元素位面力量后裔，拥有元素之力。',
        abilityScores: {
            constitution: 2
        },
        size: '中型或小型',
        speed: 30,
        languages: ['通用语', '原初语'],
        subraces: {
            air: {
                name: '气元素裔',
                abilityScores: { dexterity: 1 },
                speed: 35,
                traits: [
                    { name: '魔息', description: '你可以闭气 indefinitely' },
                    { name: '闪电抗性', description: '你拥有闪电伤害抗性' },
                    { name: '融入清风', description: '你知晓电爪戏法；3级起羽落术；5级起浮空术（长休恢复）' }
                ]
            },
            earth: {
                name: '土元素裔',
                abilityScores: { strength: 1 },
                traits: [
                    { name: '土行', description: '穿越困难地形不消耗额外移动力' },
                    { name: '混入大地', description: '你知晓剑刃防护戏法；3级起行动无踪（长休恢复）' }
                ]
            },
            fire: {
                name: '火元素裔',
                abilityScores: { intelligence: 1 },
                traits: [
                    { name: '火焰抗性', description: '你拥有火焰伤害抗性' },
                    { name: '烈焰之触', description: '你知晓燃火术戏法；3级起燃烧之手；5级起火焰刀（长休恢复）' }
                ]
            },
            water: {
                name: '水元素裔',
                abilityScores: { wisdom: 1 },
                speed: 30,
                swimSpeed: 30,
                traits: [
                    { name: '强酸抗性', description: '你拥有强酸伤害抗性' },
                    { name: '水陆两栖', description: '你可以在空气和水中呼吸' },
                    { name: '呼唤波浪', description: '你知晓酸液飞溅戏法；3级起造水术/枯水术；5级起水墙术（长休恢复）' }
                ]
            }
        }
    },

    fairy: {
        name: '仙灵',
        nameEn: 'Fairy',
        source: '多元宇宙的怪物',
        description: '来自妖精荒野的小型飞行生物。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '小型',
        speed: 30,
        flySpeed: 30,
        languages: ['通用语'],
        extraLanguages: 1,
        traits: [
            { name: '仙灵魔法', description: '你知晓德鲁伊伎俩；3级起妖火；5级起变巨术/缩小术（长休恢复）' },
            { name: '飞行', description: '你拥有等于步行速度的飞行速度，穿戴中甲和重甲时不能使用' }
        ]
    },

    centaur: {
        name: '人马',
        nameEn: 'Centaur',
        source: '多元宇宙的怪物',
        description: '拥有马身的类人生物，是优秀的战士和猎人。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        size: '中型',
        speed: 40,
        languages: ['通用语', '木族语'],
        traits: [
            { name: '冲锋', description: '直线移动至少30尺后近战攻击命中，你可以使用附赠动作以蹄击攻击目标' },
            { name: '蹄击', description: '你的徒手打击造成1d6+力量调整值的钝击伤害' },
            { name: '马体构造', description: '决定载重与推拉抬极限时你视为体型大一级，攀爬时每移动1尺需花费额外4尺移动力' },
            { name: '生存专家', description: '你从驯兽、医药、自然、生存中选择一项获得熟练' }
        ]
    },

    // ==================== 战役模组种族 ====================
    kender: {
        name: '坎德人',
        nameEn: 'Kender',
        source: '龙枪：龙后',
        description: '无畏的小型种族，以好奇心和嘲讽能力著称。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约100年',
        size: '小型',
        speed: 30,
        languages: ['通用语'],
        extraLanguages: 1,
        traits: [
            { name: '无畏', description: '你进行对抗或结束自身恐惧的豁免时具有优势；失败时可改为成功（长休恢复）' },
            { name: '坎德天赋', description: '你获得一项技能熟练（从洞悉、调查、巧手、隐匿、生存中选择）' },
            { name: '嘲讽', description: '你可以使用附赠动作对60尺内能听到并理解你的生物进行嘲讽，目标感知豁免失败则直至你下回合开始前对除你之外的其他生物攻击检定具有劣势' }
        ]
    },

    // ==================== 异界传送种族 ====================
    naga: {
        name: '那伽',
        nameEn: 'Naga',
        source: 'Plane Shift: 阿芒凯',
        description: '蛇形的类人生物，拥有毒素免疫和绞缠能力。',
        abilityScores: {
            constitution: 2,
            intelligence: 1
        },
        size: '中型',
        speed: 30,
        languages: ['通用语', '那伽语'],
        traits: [
            { name: '天生武器', description: '你的巨口和收缩的蛇身是天生武器，可用于徒手打击' },
            { name: '噬咬攻击', description: '命中造成1d4+力量调整值的穿刺伤害，目标需进行体质豁免（DC=8+熟练加值+体质调整值），失败额外受到1d4毒素伤害' },
            { name: '绞缠攻击', description: '命中造成1d6+力量调整值的钝击伤害，目标被擒抱' },
            { name: '毒素免疫', description: '你对毒素伤害和中毒状态免疫' },
            { name: '毒素亲和', description: '你获得制毒工具的熟练项' }
        ]
    },

    aven: {
        name: '艾文',
        nameEn: 'Aven',
        source: 'Plane Shift: 阿芒凯',
        description: '鸟类特征的类人生物，分为鹭首和鹰首两个亚种。',
        abilityScores: {
            dexterity: 2
        },
        size: '中型',
        speed: 25,
        flySpeed: 30,
        languages: ['通用语', '艾文语'],
        traits: [
            { name: '飞行', description: '你拥有30尺飞行速度，着装中甲或重甲时不能使用' }
        ],
        subraces: {
            ibis: {
                name: '鹭首艾文',
                abilityScores: { intelligence: 1 },
                traits: [
                    { name: '刻法涅的祝福', description: '你进行智力属性检定时，若结果不包含熟练加值，可将熟练加值的一半（向下取整）加入检定结果' }
                ]
            },
            hawk: {
                name: '鹰首艾文',
                abilityScores: { wisdom: 2 },
                traits: [
                    { name: '鹰眼', description: '你获得感知（察觉）技能的熟练，远程武器攻击不会因射程而具有劣势' }
                ]
            }
        }
    },

    khenra: {
        name: '胡狼人',
        nameEn: 'Khenra',
        source: 'Plane Shift: 阿芒凯',
        description: '胡狼特征的类人生物，成长快速，很少活过60岁。',
        abilityScores: {
            dexterity: 2,
            strength: 1
        },
        size: '中型',
        speed: 35,
        languages: ['通用语', '胡狼人语'],
        traits: [
            { name: '胡狼人武器训练', description: '你获得镰刃、长矛和标枪的熟练' },
            { name: '孪生胡狼人', description: '若孪生兄弟还活着且能看到，攻击检定、属性检定或豁免检定掷出1时可重掷' }
        ]
    },

    minotaur_amonkhet: {
        name: '牛头人（阿芒凯）',
        nameEn: 'Minotaur (Amonkhet)',
        source: 'Plane Shift: 阿芒凯',
        description: '阿芒凯世界的牛头人，拥有坚韧不屈的特性。',
        abilityScores: {
            strength: 2,
            wisdom: 1
        },
        age: '约40年',
        size: '中型',
        speed: 30,
        languages: ['通用语', '牛头人语'],
        traits: [
            { name: '天生武器', description: '你可以用角作为天然武器发起徒手攻击，造成1d6+力量调整值的钝击伤害' },
            { name: '庄严存形', description: '你获得恐吓技能的熟练' },
            { name: '坚韧不屈', description: '生命值减少到0点但未被直接杀死时，可降到1点代替（长休恢复）' },
            { name: '凶蛮攻击', description: '使用近战武器攻击造成重击时，额外掷一个该武器的伤害骰' }
        ]
    },

    zendikar_goblin: {
        name: '鬼怪（赞迪卡）',
        nameEn: 'Goblin (Zendikar)',
        source: 'Plane Shift: 赞迪卡',
        description: '赞迪卡世界的鬼怪，拥有火焰和心灵抗性。',
        abilityScores: {
            constitution: 2
        },
        age: '约50年',
        size: '小型',
        speed: 25,
        darkvision: 60,
        languages: ['通用语', '鬼怪语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '坚毅', description: '你获得火焰伤害和心灵伤害的抗性，未穿甲时AC=11+敏捷调整值' }
        ],
        subraces: {
            grotag: {
                name: '葛塔部落',
                traits: [
                    { name: '鬼怪驯骑师', description: '你获得驯兽的熟练' }
                ]
            },
            lavastep: {
                name: '熔足部落',
                traits: [
                    { name: '熔足坚毅', description: '在岩石或地下环境中敏捷（躲藏）检定获得优势' }
                ]
            },
            tuktuk: {
                name: '图图部落',
                traits: [
                    { name: '图图狡诈', description: '你获得盗贼工具的熟练' }
                ]
            }
        }
    },

    kor: {
        name: '寇族',
        nameEn: 'Kor',
        source: 'Plane Shift: 赞迪卡',
        description: '赞迪卡的游牧民族，擅长攀爬和无声手语。',
        abilityScores: {
            dexterity: 2,
            wisdom: 1
        },
        size: '中型',
        speed: 30,
        climbSpeed: 30,
        languages: ['通用语', '寇族语'],
        traits: [
            { name: '寇族攀爬', description: '你获得运动和杂技的熟练' },
            { name: '寇族幸运', description: '攻击检定、属性检定、豁免检定掷出1时可重骰' },
            { name: '寇族勇猛', description: '你进行对抗恐慌的豁免时具有优势' }
        ]
    },

    zendikar_merfolk: {
        name: '人鱼（赞迪卡）',
        nameEn: 'Merfolk (Zendikar)',
        source: 'Plane Shift: 赞迪卡',
        description: '赞迪卡的人鱼，分为特裘如、玖瑞加和慕达雅三个亚种。',
        abilityScores: {
            wisdom: 2
        },
        age: '约750年',
        size: '中型',
        speed: 30,
        swimSpeed: 30,
        darkvision: 60,
        languages: ['通用语', '精灵语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '敏锐感官', description: '你拥有察觉技能的熟练' },
            { name: '妖精血统', description: '你进行对抗魅惑的豁免时具有优势，不会因魔法效应陷入睡眠' }
        ],
        subraces: {
            tajuru: {
                name: '特裘如',
                abilityScores: { charisma: 1 },
                traits: [
                    { name: '泛用技能', description: '你获得两种自选技能或工具的熟练' }
                ]
            },
            joraga: {
                name: '玖瑞加',
                abilityScores: { dexterity: 1 },
                traits: [
                    { name: '精灵武器训练', description: '你拥有长剑、短剑、短弓和长弓的熟练' },
                    { name: '轻捷步伐', description: '你的基础步行速度提升至35尺' },
                    { name: '野性面具', description: '在树丛、大雨、落雪、雾气等自然现象中仅获得轻度遮蔽时也可尝试躲藏' }
                ]
            },
            muldaya: {
                name: '慕达雅',
                abilityScores: { strength: 1 },
                traits: [
                    { name: '增强黑暗视觉', description: '你的黑暗视觉范围提升至120尺' },
                    { name: '日照敏感', description: '阳光直射下攻击检定和依赖视觉的感知（察觉）检定具有劣势' },
                    { name: '慕达雅魔法', description: '你掌握戏法颤栗之触，3级后每日使用一次脆弱诅咒，5级后每日使用一次黑暗术' },
                    { name: '精灵武器训练', description: '你拥有长剑、短剑、短弓和长弓的熟练' }
                ]
            }
        }
    },

    zendikar_vampire: {
        name: '吸血鬼（赞迪卡）',
        nameEn: 'Vampire (Zendikar)',
        source: 'Plane Shift: 赞迪卡',
        description: '赞迪卡的吸血鬼，拥有血液特质和暗蚀抗性。',
        abilityScores: {
            charisma: 2,
            intelligence: 1
        },
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '吸血鬼语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '吸血鬼抗性', description: '你获得暗蚀伤害的抗性' },
            { name: '血液特质', description: '你可以从心甘情愿或被擒抱、失能、束缚的生物身上吸取血液，近战攻击命中造成1点穿刺和1d6点暗蚀伤害' }
        ]
    },

    ixalan_merfolk: {
        name: '人鱼（依夏兰）',
        nameEn: 'Merfolk (Ixalan)',
        source: 'Plane Shift: 依夏兰',
        description: '依夏兰的人鱼，分为绿色和蓝色两个亚种。',
        abilityScores: {
            charisma: 1
        },
        age: '约100年',
        size: '中型',
        speed: 30,
        swimSpeed: 30,
        languages: ['通用语', '人鱼语'],
        extraLanguages: 1,
        traits: [
            { name: '水陆两栖', description: '你可以在空气和水中呼吸' }
        ],
        subraces: {
            green: {
                name: '绿色人鱼',
                abilityScores: { wisdom: 2 },
                traits: [
                    { name: '荒野面具', description: '仅处于轻度遮蔽环境时可尝试躲藏' },
                    { name: '戏法', description: '从德鲁伊法术列表中选择一个戏法，施法属性为感知' }
                ]
            },
            blue: {
                name: '蓝色人鱼',
                abilityScores: { intelligence: 2 },
                traits: [
                    { name: '通晓水域', description: '你拥有历史和自然技能的熟练' },
                    { name: '戏法', description: '从法师法术列表中选择一个戏法，施法属性为智力' }
                ]
            }
        }
    },

    ixalan_vampire: {
        name: '吸血鬼（依夏兰）',
        nameEn: 'Vampire (Ixalan)',
        source: 'Plane Shift: 依夏兰',
        description: '依夏兰的吸血鬼，拥有嗜血能力和鲜血盛宴。',
        abilityScores: {
            charisma: 2,
            wisdom: 1
        },
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '吸血鬼语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '吸血鬼抗性', description: '你对暗蚀伤害具有抗性' },
            { name: '嗜血', description: '你可以从心甘情愿或被擒抱、失能、束缚的生物身上抽取血液，近战攻击命中造成1点穿刺和1d6点暗蚀伤害' },
            { name: '鲜血盛宴', description: '以嗜血能力抽取血液后1分钟内，你的移动速度增加10尺，进行力量和敏捷检定或豁免检定时具有优势' }
        ]
    },

    siren: {
        name: '塞连',
        nameEn: 'Siren',
        source: 'Plane Shift: 依夏兰',
        description: '拥有翅膀的类人生物，以歌声著称。',
        abilityScores: {
            charisma: 2
        },
        alignment: '大多数倾向于混乱阵营',
        size: '中型',
        speed: 25,
        flySpeed: 30,
        languages: ['通用语', '塞连语'],
        traits: [
            { name: '塞连之歌', description: '你知晓戏法交友术，可不需要法术材料成分释放' }
        ]
    },

    kaladesh_vedalken: {
        name: '维多肯（卡拉德许）',
        nameEn: 'Vedalken (Kaladesh)',
        source: 'Plane Shift: 卡拉德许',
        description: '卡拉德许的蓝色皮肤智慧种族，追求知识和完美。',
        abilityScores: {
            intelligence: 2,
            wisdom: 1
        },
        age: '约500年',
        size: '中型',
        speed: 30,
        languages: ['通用语', '维多肯语'],
        traits: [
            { name: '维多肯之狡黠', description: '你进行抵抗魔法的智力、感知和魅力豁免时具有优势' },
            { name: '乙太学识', description: '你对魔法物品或乙太装置进行智力（历史）检定时，熟练加值加倍' }
        ]
    },

    kaladesh_dwarf: {
        name: '矮人（卡拉德许）',
        nameEn: 'Dwarf (Kaladesh)',
        source: 'Plane Shift: 卡拉德许',
        description: '卡拉德许的矮人，擅长工匠技艺。',
        abilityScores: {
            constitution: 2,
            wisdom: 1
        },
        age: '约350年',
        size: '中型',
        speed: 25,
        darkvision: 60,
        languages: ['通用语', '矮人语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '矮人体魄', description: '你进行抵抗毒素的豁免时具有优势，对毒素伤害拥有抗性' },
            { name: '矮人刚毅', description: '你的生命值上限+1，每升一级再+1' },
            { name: '专精工匠', description: '你获得任选两种工匠工具的熟练，使用这两种工具时熟练加值加倍' }
        ]
    },

    kaladesh_elf: {
        name: '精灵（卡拉德许）',
        nameEn: 'Elf (Kaladesh)',
        source: 'Plane Shift: 卡拉德许',
        description: '卡拉德许的精灵，分为不同文化群体。',
        abilityScores: {
            dexterity: 2,
            wisdom: 1
        },
        age: '约750年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '精灵语'],
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '敏锐感官', description: '你拥有察觉技能的熟练' },
            { name: '精灵武器训练', description: '你拥有长剑、短剑、短弓和长弓的熟练' },
            { name: '妖精血统', description: '你进行抵抗魅惑的豁免时具有优势，不会因魔法效应陷入睡眠' },
            { name: '出神', description: '你不需要睡眠，每天需进行4小时深度冥想' }
        ]
    },

    aetherborn: {
        name: '乙太种',
        nameEn: 'Aetherborn',
        source: 'Plane Shift: 卡拉德许',
        description: '从乙太中诞生的生命体，寿命短暂但充满活力。',
        abilityScores: {
            charisma: 2
        },
        abilityScoreChoice: {
            count: 2,
            bonus: 1,
            text: '另两项自选属性各+1'
        },
        age: '约数年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语'],
        extraLanguages: 2,
        traits: [
            { name: '黑暗视觉', description: '在微光光照下，你身边60尺内可以视为等同于明亮光照' },
            { name: '生于乙太', description: '你对暗蚀伤害具有抗性' },
            { name: '凶恶', description: '你获得威吓技能的熟练' },
            { name: '乙太种天资', description: '通过汲取其他生灵的生命菁华延长寿命：一次正常攻击造成1d6暗蚀伤害并恢复同等生命值' }
        ]
    },

    // ==================== 艾伯伦寻路者指南种族 ====================
    kalashtar: {
        name: '离梦人',
        nameEn: 'Kalashtar',
        source: '艾伯伦寻路者指南',
        description: '与梦境位面的灵体共生的种族，拥有心灵感应能力。',
        abilityScores: {
            wisdom: 1,
            charisma: 1
        },
        abilityScoreChoice: {
            count: 1,
            bonus: 1,
            text: '另选一项+1'
        },
        age: '约100年',
        size: '中型',
        speed: 30,
        languages: ['通用语', '梦族语'],
        extraLanguages: 1,
        traits: [
            { name: '双重灵魂', description: '感知豁免检定时可用反应使检定具有优势' },
            { name: '心灵训练', description: '心灵伤害抗性' },
            { name: '心灵链接', description: '60尺内对可见生物心灵感应说话，可用附赠动作让该生物也能对你心灵感应' },
            { name: '超然魅力', description: '洞悉、威吓、表演、游说中选一项，该技能检定具有优势' },
            { name: '隔离梦境', description: '对让你做梦的法术或魔法效应免疫' }
        ]
    },

    warforged: {
        name: '战俑',
        nameEn: 'Warforged',
        source: '艾伯伦寻路者指南',
        description: '在终末战争中创造的人造生命，是活着的构装生物。',
        abilityScores: {
            constitution: 1
        },
        abilityScoreChoice: {
            count: 1,
            bonus: 1,
            text: '子种族额外属性调整'
        },
        age: '约30年',
        size: '中型',
        speed: 30,
        languages: ['通用语'],
        traits: [
            { name: '战俑耐力', description: '对抗毒素豁免具有优势，毒素伤害抗性，免疫疾病，无需吃喝呼吸，无需睡眠' },
            { name: '哨兵式休息', description: '长休时进入6小时静止非激活状态' },
            { name: '综合防护', description: '内置防护层决定AC，可选黑木核心/复合护甲/重型护甲模式' }
        ],
        subraces: {
            envoy: {
                name: '特使',
                abilityScores: { choice: 2, bonus: 1 },
                traits: [
                    { name: '特使特性', description: '自选两项属性各+1，自选一项技能、一种工具和一门语言熟练，内置一种熟练工具' }
                ]
            },
            juggernaut: {
                name: '金刚',
                abilityScores: { strength: 2 },
                traits: [
                    { name: '铁拳', description: '徒手攻击1d4+力量调整值' },
                    { name: '强壮体格', description: '决定载重、推拉抬重量时视为体型大一级' }
                ]
            },
            skirmisher: {
                name: '散兵',
                abilityScores: { dexterity: 2 },
                traits: [
                    { name: '迅捷', description: '速度+5尺' },
                    { name: '轻巧步伐', description: '进行隐匿检定时具有优势' }
                ]
            }
        }
    },

    // ==================== 塞洛斯之神话奥德赛种族 ====================
    leonin: {
        name: '狮族',
        nameEn: 'Leonin',
        source: '塞洛斯之神话奥德赛',
        description: '拥有狮子特征的类人生物，勇猛且骄傲。',
        abilityScores: {
            constitution: 2,
            strength: 1
        },
        age: '约100年',
        size: '中型',
        speed: 35,
        darkvision: 60,
        languages: ['通用语', '狮族语'],
        traits: [
            { name: '爪击', description: '徒手打击造成1d4+力量调整值的挥砍伤害' },
            { name: '猎手本能', description: '运动、威吓、游说、生存中选一项熟练' },
            { name: '畏惧咆哮', description: '附赠动作使10尺内生物感知豁免，失败则恐慌至下回合结束（长休恢复）' }
        ]
    },

    // ==================== 拉尼卡公会长指南种族 ====================
    simicHybrid: {
        name: '析米克混生体',
        nameEn: 'Simic Hybrid',
        source: '拉尼卡公会长指南',
        description: '经过魔法改造的实验生物，拥有动物特征。',
        abilityScores: {
            constitution: 2
        },
        abilityScoreChoice: {
            count: 1,
            bonus: 1,
            exclude: ['constitution']
        },
        abilityScoreText: '体质+2，任选一项其他属性+1',
        age: '约80年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '维多肯语/精灵语'],
        traits: [
            { name: '动物强化（1级）', description: '选择一项：1.蝠鲼滑翔（坠落减100尺伤害，每下降1尺水平移动2尺）；2.灵活攀登（获得等于步行速度的攀爬速度）；3.水下适应（水中呼吸，获得等于步行速度的游泳速度）' },
            { name: '动物强化（5级）', description: '选择一项：1.斗殴附件（长出两个附肢，可进行徒手攻击造成1d6+力量调整值钝击伤害，命中后可附赠动作擒抱）；2.甲壳（无重甲时AC+1）；3.酸液喷吐（30尺内目标，DC=8+体质调整值+熟练加值的敏捷豁免，失败受2d10强酸伤害，可用次数等于体质调整值，长休恢复）' }
        ]
    },

    loxodon: {
        name: '象族',
        nameEn: 'Loxodon',
        source: '拉尼卡公会长指南',
        description: '象头人身的类人生物，温和而强大。',
        abilityScores: {
            constitution: 2,
            wisdom: 1
        },
        age: '约450年',
        size: '中型',
        speed: 30,
        languages: ['通用语', '象族语'],
        traits: [
            { name: '身强力壮', description: '计算负重及拖、拉、拽的重量时，视为大一级的体型' },
            { name: '象之宁静', description: '对抗恐慌和魅惑的豁免检定上具有优势' },
            { name: '天生护甲', description: '未穿戴护甲时AC为12+体质调整值。如果护甲AC更低，可用天生防御AC取代，正常获得盾牌AC加值' },
            { name: '象鼻', description: '5尺触及，可举起力量值5倍磅数的物品。可进行抬起、放下、握住、推物品或生物、打开/关闭门或容器、擒抱或徒手击打。不能使用武器、盾牌、工具、魔法物品或作为法术姿势成分' },
            { name: '敏锐嗅觉', description: '依赖嗅觉的感知（察觉）、感知（求生）和智力（调查）检定上具有优势' }
        ]
    },

    vedalken: {
        name: '维多肯',
        nameEn: 'Vedalken',
        source: '拉尼卡公会长指南',
        description: '蓝色皮肤的智慧种族，追求知识和完美。',
        abilityScores: {
            intelligence: 2,
            wisdom: 1
        },
        age: '约500年',
        size: '中型',
        speed: 30,
        languages: ['通用语', '维多肯语'],
        extraLanguages: 1,
        traits: [
            { name: '维多肯式冷静', description: '所有智力、感知和魅力的豁免检定上具有优势' },
            { name: '追求卓越，不知疲倦', description: '在以下一项技能上具有熟练项：奥秘、历史、调查、医药、表演或巧手。同时获得一种自选工具的熟练项。进行该技能或工具的属性检定时，投一枚d4并将结果加到骰值上' },
            { name: '部分两栖', description: '通过皮肤吸收氧气，可以水下呼吸一小时。超过时限后需完成一次长休才能再次使用' }
        ]
    },

    // ==================== 星界冒险者指南种族 ====================
    astralElf: {
        name: '星界精灵',
        nameEn: 'Astral Elf',
        source: '星界冒险者指南',
        description: '居住在星界的精灵，与星光有着神秘的联系。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约750年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语'],
        extraLanguages: 1,
        traits: [
            { name: '星界之光', description: '可发出5尺半径的明亮光照和额外5尺的微光光照' },
            { name: '星界步伐', description: '可传送至30尺内可见未占据空间，短休或长休恢复' }
        ]
    },

    autognome: {
        name: '自动侏儒',
        nameEn: 'Autognome',
        source: '星界冒险者指南',
        description: '机械构造的侏儒，是活着的构装生物。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约350年',
        size: '小型',
        speed: 25,
        darkvision: 60,
        languages: ['通用语', '侏儒语'],
        traits: [
            { name: '构装生物类型', description: '你是构装生物' },
            { name: '治疗机械', description: '疗伤术等治疗法术对你有效' },
            { name: '机械优势', description: '对抗毒素和疾病豁免具有优势' },
            { name: '内置工具', description: '选择一种工具整合到身体中' }
        ]
    },

    giff: {
        name: '诘弗河马人',
        nameEn: 'Giff',
        source: '星界冒险者指南',
        description: '河马特征的类人生物，是强大的战士。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约80年',
        size: '大型',
        speed: 30,
        swimSpeed: 30,
        languages: ['通用语', '诘弗语'],
        traits: [
            { name: '两栖', description: '可在空气和水中呼吸' },
            { name: '天生护甲', description: '未着装护甲时AC 13+敏捷调整值' },
            { name: '河马冲锋', description: '直线移动至少20尺后可用角攻击，命中可推撞目标' }
        ]
    },

    hadozee: {
        name: '哈多兹鼯猴人',
        nameEn: 'Hadozee',
        source: '星界冒险者指南',
        description: '拥有皮膜翅膀的类人生物，能够滑翔。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约80年',
        size: '小型',
        speed: 25,
        climbSpeed: 25,
        languages: ['通用语', '哈多兹语'],
        traits: [
            { name: '滑翔', description: '可滑翔缓慢下降，每下降1尺可水平移动5尺' },
            { name: '抓握', description: '可用脚进行简单操作，可倒挂' },
            { name: '敏捷攀爬', description: '攀爬速度等于步行速度' }
        ]
    },

    plasmoid: {
        name: '流浆体',
        nameEn: 'Plasmoid',
        source: '星界冒险者指南',
        description: '变形怪般的泥怪生物，能够改变形状。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '不定',
        size: '中型',
        speed: 30,
        languages: ['通用语'],
        extraLanguages: 1,
        traits: [
            { name: '泥怪类型', description: '你是泥怪' },
            { name: '变形', description: '可改变形状和外观，保持泥怪特征' },
            { name: '酸性触碰', description: '徒手打击造成酸蚀伤害' }
        ]
    },

    thriKreen: {
        name: '螳螂人',
        nameEn: 'Thri-kreen',
        source: '星界冒险者指南',
        description: '昆虫特征的类人生物，拥有心灵感应能力。',
        abilityScores: {
            choice: 2
        },
        abilityScoreText: '自选一项+2，另一项+1；或三项不同属性各+1',
        age: '约50年',
        size: '中型',
        speed: 30,
        darkvision: 60,
        languages: ['通用语', '螳螂人语'],
        traits: [
            { name: '心灵感应', description: '可与60尺内生物心灵感应交流' },
            { name: '螳螂爪', description: '徒手打击造成挥砍伤害' },
            { name: '警觉', description: '先攻检定具有优势' }
        ]
    }
};

// 种族分类
const RACE_CATEGORIES = {
    basic: {
        name: '基础种族',
        races: ['human', 'elf', 'dwarf', 'halfling', 'gnome', 'dragonborn', 'halfElf', 'halfOrc', 'tiefling', 'aasimar']
    },
    motm: {
        name: '多元宇宙的怪物',
        races: ['tortle', 'eladrin', 'aarakocra', 'firbolg', 'lizardfolk', 'kobold', 'minotaur', 'bugbear', 'duergar', 'seaElf', 'goliath', 'triton', 'tabaxi', 'shadarKai', 'changeling', 'kenku', 'hobgoblin', 'goblin', 'svirfneblin', 'githyanki', 'githzerai', 'yuanTiPureblood', 'satyr', 'shifter', 'orc', 'harengon', 'genasi', 'fairy', 'centaur']
    },
    eberron: {
        name: '艾伯伦寻路者指南',
        races: ['kalashtar', 'warforged']
    },
    theros: {
        name: '塞洛斯之神话奥德赛',
        races: ['leonin']
    },
    ravnica: {
        name: '拉尼卡公会长指南',
        races: ['simicHybrid', 'loxodon', 'vedalken']
    },
    astral: {
        name: '星界冒险者指南',
        races: ['astralElf', 'autognome', 'giff', 'hadozee', 'plasmoid', 'thriKreen']
    },
    adventure: {
        name: '战役模组',
        races: ['kender']
    },
    planeshift: {
        name: '异界传送',
        races: ['naga', 'aven', 'khenra', 'minotaur_amonkhet', 'zendikar_goblin', 'kor', 'zendikar_merfolk', 'zendikar_vampire', 'ixalan_merfolk', 'ixalan_vampire', 'siren', 'kaladesh_vedalken', 'kaladesh_dwarf', 'kaladesh_elf', 'aetherborn']
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RACES_DATA, RACE_CATEGORIES };
}
