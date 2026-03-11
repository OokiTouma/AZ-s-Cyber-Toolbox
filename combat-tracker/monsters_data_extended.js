/**
 * D&D 5E 怪物数据库 - 扩展版
 * 包含凡戴尔的失落矿坑、怪物手册、基础规则中的完整怪物数据
 */

const MONSTERS_DATA_EXTENDED = {
    // ========== 凡戴尔的失落矿坑专用怪物 ==========
    phandelver: {
        name: '凡戴尔的失落矿坑',
        description: 'LMOP 模组中的特殊怪物和NPC',
        monsters: {
            // 克拉格莫据点
            klarg: {
                name: '克拉格莫 Klarg',
                type: 'enemy',
                size: '大型',
                alignment: '混乱邪恶',
                initiative: 1,
                hp: 27,
                maxHp: 27,
                ac: 15,
                speed: '30尺',
                cr: '1',
                xp: 200,
                source: 'LMOP',
                abilities: { str: 16, dex: 12, con: 14, int: 8, wis: 11, cha: 9 },
                senses: '黑暗视觉60尺，被动察觉10',
                languages: '通用语，地精语',
                traits: [
                    { name: '残暴 Brute', description: '近战武器伤害骰额外增加一个伤害骰。' }
                ],
                actions: [
                    {
                        name: '巨棒 Greatclub',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '13 (2d8+4)钝击伤害。',
                        damage: '2d8+4 钝击'
                    },
                    {
                        name: '标枪 Javelin',
                        type: '近战或远程武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        range: '30/120尺',
                        target: '单一目标',
                        hit: '9 (2d6+4)穿刺伤害。',
                        damage: '2d6+4 穿刺'
                    }
                ],
                notes: '克拉格莫据点的首领，有一只宠物狼。残暴特性使其伤害更高。'
            },
            
            // 红标帮
            redbrand_ruffian: {
                name: '红标帮暴徒 Redbrand Ruffian',
                type: 'enemy',
                size: '中型',
                alignment: '中立邪恶',
                initiative: 2,
                hp: 16,
                maxHp: 16,
                ac: 14,
                speed: '30尺',
                cr: '1/2',
                xp: 100,
                source: 'LMOP',
                abilities: { str: 11, dex: 14, con: 12, int: 9, wis: 9, cha: 11 },
                skills: { intimidation: 2 },
                senses: '被动察觉9',
                languages: '通用语',
                traits: [
                    { name: '集群战术', description: '如果盟友在5尺内且未失能，攻击检定有优势。' }
                ],
                actions: [
                    {
                        name: '短剑 Shortsword',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)穿刺伤害。',
                        damage: '1d6+2 穿刺'
                    },
                    {
                        name: '轻弩 Light Crossbow',
                        type: '远程武器攻击',
                        attack: '+4',
                        range: '80/320尺',
                        target: '单一目标',
                        hit: '6 (1d8+2)穿刺伤害。',
                        damage: '1d8+2 穿刺'
                    }
                ],
                notes: '红标帮的普通成员，在凡戴尔镇街头巡逻。'
            },
            
            redbrand_boss: {
                name: '红标帮头目 Redbrand Boss',
                type: 'enemy',
                size: '中型',
                alignment: '中立邪恶',
                initiative: 1,
                hp: 33,
                maxHp: 33,
                ac: 15,
                speed: '30尺',
                cr: '1',
                xp: 200,
                source: 'LMOP',
                abilities: { str: 13, dex: 12, con: 14, int: 10, wis: 11, cha: 13 },
                skills: { intimidation: 3, perception: 2 },
                senses: '被动察觉12',
                languages: '通用语',
                traits: [
                    { name: '指挥官', description: '30尺内的盟友攻击检定+1d4。' }
                ],
                actions: [
                    {
                        name: '多重攻击',
                        type: '特殊',
                        description: '进行两次长剑攻击。'
                    },
                    {
                        name: '长剑 Longsword',
                        type: '近战武器攻击',
                        attack: '+3',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '5 (1d8+1)挥砍伤害。',
                        damage: '1d8+1 挥砍'
                    }
                ],
                notes: '红标帮的小队长，指挥3-4名暴徒。'
            },
            
            // 黑蜘蛛
            black_spider: {
                name: '黑蜘蛛 Black Spider',
                type: 'enemy',
                size: '中型',
                alignment: '中立邪恶',
                initiative: 2,
                hp: 27,
                maxHp: 27,
                ac: 12,
                speed: '30尺',
                cr: '2',
                xp: 450,
                source: 'LMOP',
                abilities: { str: 9, dex: 14, con: 11, int: 16, wis: 13, cha: 11 },
                savingThrows: { int: 5, wis: 3 },
                skills: { arcana: 5, perception: 3, stealth: 4 },
                senses: '黑暗视觉60尺，被动察觉13',
                languages: '通用语，精灵语，地精语',
                traits: [
                    { name: '特殊装备', description: '持有蜘蛛法杖（Staff of Spiders）。' }
                ],
                actions: [
                    {
                        name: '法杖 Staff',
                        type: '近战武器攻击',
                        attack: '+2',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '3 (1d6)钝击伤害。',
                        damage: '1d6 钝击'
                    }
                ],
                spellcasting: {
                    class: '法师',
                    level: 4,
                    dc: 13,
                    attack: 5,
                    slots: '1环×4, 2环×2',
                    spells: [
                        { level: 0, spells: '法师之手、魔法飞弹（戏法）、冷冻射线' },
                        { level: 1, spells: '魔法飞弹、护盾术、睡眠术' },
                        { level: 2, spells: '蛛网术、迷雾术' }
                    ]
                },
                notes: '卓尔法师，幕后黑手，试图控制wave echo cave。会召唤蜘蛛助战。'
            },
            
            // 巨型蜘蛛
            giant_spider: {
                name: '巨型蜘蛛 Giant Spider',
                type: 'enemy',
                size: '大型',
                alignment: '无阵营',
                initiative: 3,
                hp: 26,
                maxHp: 26,
                ac: 14,
                speed: '30尺，攀爬30尺',
                cr: '1',
                xp: 200,
                source: '基础规则',
                abilities: { str: 14, dex: 16, con: 12, int: 2, wis: 11, cha: 4 },
                skills: { stealth: 7 },
                senses: '盲视10尺，黑暗视觉60尺，被动察觉10',
                traits: [
                    { name: '蛛行', description: '可以攀爬困难表面，包括倒挂在天花板上，不需要进行能力检定。' },
                    { name: '蛛网感知', description: '在接触蛛网时，知晓其他接触同一蛛网的生物的确切位置。' }
                ],
                actions: [
                    {
                        name: '啃咬 Bite',
                        type: '近战武器攻击',
                        attack: '+5',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '7 (1d8+3)穿刺伤害，目标必须进行DC 11的体质豁免，失败则受到9 (2d8)毒素伤害，成功则伤害减半。如果毒素伤害将目标生命值降至0，目标将稳定但中毒1小时，期间无法恢复生命值。',
                        damage: '1d8+3 穿刺 + 2d8 毒素'
                    },
                    {
                        name: '蛛网 Web',
                        type: '特殊',
                        recharge: '5-6',
                        description: '射程30/60尺，限制单一目标。目标必须进行DC 12的敏捷豁免，失败则被束缚。被束缚的生物可以用动作进行DC 12的力量检定，成功则挣脱。蛛网AC 10，生命值5，火焰易伤。'
                    }
                ],
                notes: '蛛行、蛛网感知、毒咬、吐网（充能5-6）。'
            }
        }
    },
    
    // ========== 基础规则怪物扩展 ==========
    basics: {
        name: '基础规则扩展',
        description: '基础规则中的更多怪物',
        monsters: {
            // 野兽
            panther: {
                name: '黑豹 (Panther)',
                type: 'enemy',
                size: '中型',
                alignment: '无阵营',
                initiative: 2,
                hp: 13,
                maxHp: 13,
                ac: 12,
                speed: '50尺，攀爬40尺',
                cr: '1/4',
                xp: 50,
                source: '基础规则',
                abilities: { str: 14, dex: 15, con: 10, int: 3, wis: 14, cha: 7 },
                skills: { perception: 4, stealth: 6 },
                senses: '被动察觉14',
                traits: [
                    { name: '集群战术', description: '如果盟友在5尺内且未失能，攻击检定有优势。' },
                    { name: '猛扑', description: '如果黑豹在战斗开始时突袭到至少一个生物，则该回合其首次攻击命中时额外造成7 (2d6)伤害。' }
                ],
                actions: [
                    {
                        name: '爪击 Claw',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '6 (1d6+2)挥砍伤害。',
                        damage: '1d6+2 挥砍'
                    },
                    {
                        name: '啃咬 Bite',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '5 (1d4+2)穿刺伤害。',
                        damage: '1d4+2 穿刺'
                    }
                ],
                notes: '集群战术，猛扑突袭额外伤害。'
            },
            
            // 类人生物扩展
            bandit: {
                name: '强盗 (Bandit)',
                type: 'enemy',
                size: '中型',
                alignment: '非守序阵营',
                initiative: 1,
                hp: 11,
                maxHp: 11,
                ac: 12,
                speed: '30尺',
                cr: '1/8',
                xp: 25,
                source: '基础规则',
                abilities: { str: 11, dex: 12, con: 12, int: 10, wis: 10, cha: 10 },
                senses: '被动察觉10',
                languages: '任意一种语言（通常是通用语）',
                actions: [
                    {
                        name: '弯刀 Scimitar',
                        type: '近战武器攻击',
                        attack: '+3',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '4 (1d6+1)挥砍伤害。',
                        damage: '1d6+1 挥砍'
                    },
                    {
                        name: '轻弩 Light Crossbow',
                        type: '远程武器攻击',
                        attack: '+3',
                        range: '80/320尺',
                        target: '单一目标',
                        hit: '5 (1d8+1)穿刺伤害。',
                        damage: '1d8+1 穿刺'
                    }
                ],
                notes: '普通强盗，常见于道路伏击。'
            },
            
            bandit_captain: {
                name: '强盗首领 (Bandit Captain)',
                type: 'enemy',
                size: '中型',
                alignment: '非守序阵营',
                initiative: 3,
                hp: 65,
                maxHp: 65,
                ac: 15,
                speed: '30尺',
                cr: '2',
                xp: 450,
                source: '基础规则',
                abilities: { str: 15, dex: 16, con: 14, int: 14, wis: 11, cha: 14 },
                savingThrows: { str: 4, dex: 5, wis: 2 },
                skills: { athletics: 4, deception: 4, intimidation: 4 },
                senses: '被动察觉10',
                languages: '任意两种语言',
                actions: [
                    {
                        name: '多重攻击',
                        type: '特殊',
                        description: '进行三次近战攻击：两次弯刀和一次匕首。'
                    },
                    {
                        name: '弯刀 Scimitar',
                        type: '近战武器攻击',
                        attack: '+5',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '6 (1d6+3)挥砍伤害。',
                        damage: '1d6+3 挥砍'
                    },
                    {
                        name: '匕首 Dagger',
                        type: '近战或远程武器攻击',
                        attack: '+5',
                        reach: '5尺',
                        range: '20/60尺',
                        target: '单一目标',
                        hit: '5 (1d4+3)穿刺伤害。',
                        damage: '1d4+3 穿刺'
                    }
                ],
                reactions: [
                    { name: '格挡 Parry', description: '当一次近战攻击命中首领时，其伤害减少7 (2d6)。' }
                ],
                notes: '指挥3-6名强盗，使用格挡反应减少伤害。'
            },
            
            // 不死生物扩展
            ghoul: {
                name: '食尸鬼 (Ghoul)',
                type: 'enemy',
                size: '中型',
                alignment: '混乱邪恶',
                initiative: 2,
                hp: 22,
                maxHp: 22,
                ac: 12,
                speed: '30尺',
                cr: '1',
                xp: 200,
                source: '基础规则',
                abilities: { str: 13, dex: 15, con: 10, int: 7, wis: 10, cha: 6 },
                damageImmunities: '毒素',
                conditionImmunities: '魅惑、中毒',
                senses: '黑暗视觉60尺，被动察觉10',
                languages: '通用语',
                traits: [
                    { name: '食腐', description: '食尸鬼依赖嗅觉进行的感知（察觉）检定具有优势。' }
                ],
                actions: [
                    {
                        name: '啃咬 Bite',
                        type: '近战武器攻击',
                        attack: '+2',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '9 (2d6+2)穿刺伤害。',
                        damage: '2d6+2 穿刺'
                    },
                    {
                        name: '爪击 Claws',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '7 (2d4+2)挥砍伤害。如果目标是类人生物，则必须进行DC 10的体质豁免，失败则麻痹1分钟。目标可以在每个回合结束时重复豁免，成功则结束效果。',
                        damage: '2d4+2 挥砍'
                    }
                ],
                notes: '爪击可能麻痹类人生物，对精灵无效。'
            },
            
            wight: {
                name: '尸妖 (Wight)',
                type: 'enemy',
                size: '中型',
                alignment: '中立邪恶',
                initiative: 2,
                hp: 45,
                maxHp: 45,
                ac: 14,
                speed: '30尺',
                cr: '3',
                xp: 700,
                source: '基础规则',
                abilities: { str: 15, dex: 14, con: 16, int: 10, wis: 13, cha: 15 },
                skills: { perception: 3, stealth: 4 },
                damageResistances: '非魔法攻击的钝击、穿刺、挥砍',
                damageImmunities: '毒素、坏死',
                conditionImmunities: '中毒、疲劳',
                senses: '黑暗视觉60尺，被动察觉13',
                languages: '其生前语言',
                traits: [
                    { name: '生命吸取', description: '近战武器命中时，目标必须进行DC 13的体质豁免，失败则其生命值上限减少等于尸妖造成的伤害数值。如果该效果将目标的生命值上限降至0，目标死亡。该减少效果持续到完成一次长休。' },
                    { name: '日照敏感', description: '在日光下攻击检定和感知（察觉）检定依赖视觉时具有劣势。' }
                ],
                actions: [
                    {
                        name: '多重攻击',
                        type: '特殊',
                        description: '进行两次长剑攻击或两次长弓攻击。'
                    },
                    {
                        name: '长剑 Longsword',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '6 (1d8+2)挥砍伤害，或双手持用时7 (1d10+2)挥砍伤害。',
                        damage: '1d8+2 挥砍'
                    },
                    {
                        name: '长弓 Longbow',
                        type: '远程武器攻击',
                        attack: '+4',
                        range: '150/600尺',
                        target: '单一目标',
                        hit: '6 (1d8+2)穿刺伤害。',
                        damage: '1d8+2 穿刺'
                    }
                ],
                notes: '生命吸取降低HP上限，可指挥僵尸和骷髅。'
            },
            
            // 魔法生物
            mimic: {
                name: '拟形怪 (Mimic)',
                type: 'enemy',
                size: '中型',
                alignment: '中立',
                initiative: 1,
                hp: 58,
                maxHp: 58,
                ac: 12,
                speed: '15尺',
                cr: '2',
                xp: 450,
                source: '基础规则',
                abilities: { str: 17, dex: 12, con: 15, int: 5, wis: 13, cha: 8 },
                skills: { stealth: 5 },
                damageImmunities: '强酸',
                conditionImmunities: '倒地、目盲',
                senses: '黑暗视觉60尺，被动察觉11',
                traits: [
                    { name: '变形生物', description: '拟形怪可以用动作变形为物体或变回其真实形态。在物体形态下，拟形怪不能攻击，但移动速度为0。拟形怪的变形不会触发侦测魔法。' },
                    { name: '黏着', description: '拟形怪对任何接触它的生物具有擒抱优势。被擒抱的生物被束缚。' },
                    { name: '伪形', description: '拟形怪在物体形态下与真实物体难以区分。' }
                ],
                actions: [
                    {
                        name: '伪足 Pseudopod',
                        type: '近战武器攻击',
                        attack: '+5',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '7 (1d8+3)钝击伤害。如果目标是生物，则被擒抱（逃脱DC 13）。',
                        damage: '1d8+3 钝击'
                    },
                    {
                        name: '啃咬 Bite',
                        type: '近战武器攻击',
                        attack: '+5',
                        reach: '5尺',
                        target: '单一被擒抱生物',
                        hit: '7 (1d8+3)穿刺伤害加4 (1d8)强酸伤害。',
                        damage: '1d8+3 穿刺 + 1d8 强酸'
                    }
                ],
                notes: '伪装成宝箱或门，黏着擒抱，强酸伤害。'
            },
            
            // 元素生物
            air_elemental: {
                name: '气元素 (Air Elemental)',
                type: 'enemy',
                size: '大型',
                alignment: '中立',
                initiative: 5,
                hp: 90,
                maxHp: 90,
                ac: 15,
                speed: '0尺，飞行90尺（悬浮）',
                cr: '5',
                xp: 1800,
                source: '基础规则',
                abilities: { str: 14, dex: 20, con: 14, int: 6, wis: 10, cha: 6 },
                damageResistances: '闪电、雷鸣、非魔法攻击的钝击、穿刺、挥砍',
                damageImmunities: '毒素',
                conditionImmunities: '中毒、倒地、擒抱、束缚、麻痹、石化、倒地、昏迷',
                senses: '黑暗视觉60尺，被动察觉10',
                languages: '气族语',
                traits: [
                    { name: '空气形态', description: '气元素可以进入并占据其他生物的空间。它可以穿过任何缝隙，只要缝隙不小于1英寸宽。' },
                    { name: '旋风', description: '每个回合第一次使用疾走动作时，穿过其他生物空间的每个生物必须进行DC 13的力量豁免，失败则受到15 (3d8+2)雷鸣伤害，成功则伤害减半。' }
                ],
                actions: [
                    {
                        name: '多重攻击',
                        type: '特殊',
                        description: '进行两次猛击攻击。'
                    },
                    {
                        name: '猛击 Slam',
                        type: '近战武器攻击',
                        attack: '+8',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '14 (2d8+5)钝击伤害。',
                        damage: '2d8+5 钝击'
                    },
                    {
                        name: '旋风 Whirlwind',
                        type: '特殊',
                        recharge: '4-6',
                        description: '每个在气元素空间内的生物必须进行DC 13的力量豁免，失败则受到15 (3d8+2)雷鸣伤害，并被推离气元素至多20尺且被击倒。成功则伤害减半，且不会被推离或击倒。'
                    }
                ],
                notes: '飞行90尺，旋风充能，雷鸣伤害。'
            }
        }
    },
    
    // ========== 龙类 ==========
    dragons: {
        name: '龙类',
        description: '各种颜色的龙',
        monsters: {
            young_green_dragon: {
                name: '青年绿龙 (Young Green Dragon)',
                type: 'enemy',
                size: '大型',
                alignment: '守序邪恶',
                initiative: 1,
                hp: 136,
                maxHp: 136,
                ac: 18,
                speed: '40尺，飞行80尺，游泳40尺',
                cr: '8',
                xp: 3900,
                source: '怪物手册',
                abilities: { str: 19, dex: 12, con: 17, int: 16, wis: 13, cha: 15 },
                savingThrows: { dex: 4, con: 6, wis: 4, cha: 5 },
                skills: { deception: 5, perception: 7, stealth: 4 },
                damageImmunities: '毒素',
                conditionImmunities: '中毒',
                senses: '盲视30尺，黑暗视觉120尺，被动察觉17',
                languages: '通用语，龙语',
                traits: [
                    { name: '水陆两栖', description: '绿龙可以在空气和水中呼吸。' }
                ],
                actions: [
                    {
                        name: '多重攻击',
                        type: '特殊',
                        description: '龙进行三次攻击：一次啃咬和两次爪击。'
                    },
                    {
                        name: '啃咬 Bite',
                        type: '近战武器攻击',
                        attack: '+7',
                        reach: '10尺',
                        target: '单一目标',
                        hit: '15 (2d10+4)穿刺伤害加7 (2d6)毒素伤害。',
                        damage: '2d10+4 穿刺 + 2d6 毒素'
                    },
                    {
                        name: '爪击 Claw',
                        type: '近战武器攻击',
                        attack: '+7',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '11 (2d6+4)挥砍伤害。',
                        damage: '2d6+4 挥砍'
                    },
                    {
                        name: '毒性吐息 Poison Breath',
                        type: '特殊',
                        recharge: '5-6',
                        description: '龙呼出毒气，30尺锥形区域。区域内每个生物必须进行DC 14的体质豁免，失败则受到42 (12d6)毒素伤害，成功则伤害减半。'
                    }
                ],
                notes: '雷霆树的可能遭遇，毒性吐息，飞行80尺。'
            }
        }
    },
    
    // ========== 预设遭遇 ==========
    encounters: {
        name: '预设遭遇',
        description: '常用遭遇组合',
        encounters: [
            {
                name: '哥布林伏击',
                description: '4名哥布林在道路旁伏击',
                difficulty: 'easy',
                enemies: [
                    { monster: 'goblin', count: 4 }
                ],
                tactics: '哥布林利用掩体射击，使用灵巧撤离保持距离。'
            },
            {
                name: '红标帮街头战',
                description: '4名红标帮暴徒在街头挑衅',
                difficulty: 'medium',
                enemies: [
                    { monster: 'redbrand_ruffian', count: 4 }
                ],
                tactics: '暴徒优先围攻最脆弱的目标。'
            },
            {
                name: '克拉格莫据点',
                description: '克拉格莫和他的手下',
                difficulty: 'hard',
                enemies: [
                    { monster: 'klarg', count: 1 },
                    { monster: 'wolf', count: 2 },
                    { monster: 'goblin', count: 4 }
                ],
                tactics: '克拉格莫在近战范围内重击，狼扑击落单目标，哥布林利用地形拖延。'
            },
            {
                name: '黑蜘蛛巢穴',
                description: '黑蜘蛛和巨型蜘蛛守卫',
                difficulty: 'hard',
                enemies: [
                    { monster: 'black_spider', count: 1 },
                    { monster: 'giant_spider', count: 2 }
                ],
                tactics: '黑蜘蛛使用法术控制战场，巨型蜘蛛从天花板攻击并吐网。'
            }
        ]
    }
};

// 导出数据（如果在模块环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MONSTERS_DATA_EXTENDED };
}
