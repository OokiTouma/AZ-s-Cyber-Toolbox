/**
 * D&D 5E 怪物数据库 - 完整版
 * 包含详细的攻击信息、特殊能力和完整数据
 */

const MONSTERS_DATA = {
    // 基础规则怪物 (Basic Rules / Monster Manual)
    basics: {
        name: '基础规则',
        description: 'D&D 5E 基础规则中的常见怪物',
        monsters: {
            // ========== 野兽 ==========
            wolf: {
                name: '狼 (Wolf)',
                type: 'enemy',
                size: '中型',
                alignment: '无阵营',
                initiative: 2,
                hp: 11,
                maxHp: 11,
                ac: 13,
                speed: '40尺',
                cr: '1/4',
                xp: 50,
                source: '基础规则',
                abilities: { str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6 },
                skills: { perception: 3, stealth: 4 },
                senses: '被动察觉13',
                traits: [
                    { name: '集群战术', description: '如果狼的盟友在5尺内且未失能，狼的攻击检定有优势。' }
                ],
                actions: [
                    {
                        name: '啃咬 Bite',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '7 (2d4+2)穿刺伤害。如果目标是生物，则必须进行DC 11的力量豁免，失败则被击倒。',
                        damage: '2d4+2 穿刺'
                    }
                ],
                notes: '集群战术：如果狼的盟友在5尺内且未失能，狼的攻击检定有优势。'
            },
            dire_wolf: {
                name: '恐狼 (Dire Wolf)',
                type: 'enemy',
                size: '大型',
                alignment: '无阵营',
                initiative: 2,
                hp: 37,
                maxHp: 37,
                ac: 14,
                speed: '50尺',
                cr: '1',
                xp: 200,
                source: '基础规则',
                abilities: { str: 17, dex: 15, con: 15, int: 3, wis: 12, cha: 7 },
                skills: { perception: 3, stealth: 4 },
                senses: '被动察觉13',
                traits: [
                    { name: '集群战术', description: '如果恐狼的盟友在5尺内且未失能，恐狼的攻击检定有优势。' }
                ],
                actions: [
                    {
                        name: '啃咬 Bite',
                        type: '近战武器攻击',
                        attack: '+5',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '10 (2d6+3)穿刺伤害。如果目标是生物，则必须进行DC 13的力量豁免，失败则被击倒。',
                        damage: '2d6+3 穿刺'
                    }
                ],
                bonusActions: [
                    { name: '附赠动作啃咬', description: '如果目标被击倒，恐狼可用附赠动作对其进行啃咬攻击。' }
                ],
                notes: '集群战术，如果目标被击倒，恐狼可用附赠动作进行攻击。'
            },
            brown_bear: {
                name: '棕熊 (Brown Bear)',
                type: 'enemy',
                size: '大型',
                alignment: '无阵营',
                initiative: 0,
                hp: 34,
                maxHp: 34,
                ac: 11,
                speed: '40尺，攀爬30尺',
                cr: '1',
                xp: 200,
                source: '基础规则',
                abilities: { str: 19, dex: 10, con: 16, int: 2, wis: 13, cha: 7 },
                skills: { perception: 3 },
                senses: '黑暗视觉60尺，被动察觉13',
                traits: [
                    { name: '嗅觉灵敏', description: '棕熊依赖嗅觉进行的感知（察觉）检定具有优势。' }
                ],
                actions: [
                    {
                        name: '多重攻击 Multiattack',
                        type: '特殊',
                        description: '棕熊进行两次攻击：一次啃咬和一次爪击。'
                    },
                    {
                        name: '啃咬 Bite',
                        type: '近战武器攻击',
                        attack: '+5',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '8 (1d8+4)穿刺伤害。',
                        damage: '1d8+4 穿刺'
                    },
                    {
                        name: '爪击 Claws',
                        type: '近战武器攻击',
                        attack: '+5',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '11 (2d6+4)挥砍伤害。',
                        damage: '2d6+4 挥砍'
                    }
                ],
                notes: '嗅觉灵敏，多重攻击：2次爪击'
            },
            
            // ========== 类人生物 ==========
            goblin: {
                name: '地精 (Goblin)',
                type: 'enemy',
                size: '小型',
                alignment: '中立邪恶',
                initiative: 2,
                hp: 7,
                maxHp: 7,
                ac: 15,
                speed: '30尺',
                cr: '1/4',
                xp: 50,
                source: '基础规则',
                abilities: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 },
                skills: { stealth: 6 },
                senses: '黑暗视觉60尺，被动察觉9',
                languages: '通用语，地精语',
                traits: [
                    { name: '敏捷闪避 Nimble Escape', description: '地精可在每个回合执行撤离或躲藏动作，且视为附赠动作。' }
                ],
                actions: [
                    {
                        name: '弯刀 Scimitar',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)挥砍伤害。',
                        damage: '1d6+2 挥砍'
                    },
                    {
                        name: '短弓 Shortbow',
                        type: '远程武器攻击',
                        attack: '+4',
                        range: '80/320尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)穿刺伤害。',
                        damage: '1d6+2 穿刺'
                    }
                ],
                notes: '敏捷闪避：被攻击时可用反应进行躲闪检定，成功则伤害减半。'
            },
            hobgoblin: {
                name: '大地精 (Hobgoblin)',
                type: 'enemy',
                size: '中型',
                alignment: '守序邪恶',
                initiative: 1,
                hp: 11,
                maxHp: 11,
                ac: 18,
                speed: '30尺',
                cr: '1/2',
                xp: 100,
                source: '基础规则',
                abilities: { str: 13, dex: 12, con: 12, int: 10, wis: 10, cha: 9 },
                senses: '黑暗视觉60尺，被动察觉10',
                languages: '通用语，地精语',
                traits: [
                    { name: '军事训练 Martial Advantage', description: '大地精每回合有一次机会，在5尺内有其他生物协助时，对其武器攻击命中造成额外7 (2d6)伤害。' }
                ],
                actions: [
                    {
                        name: '长剑 Longsword',
                        type: '近战武器攻击',
                        attack: '+3',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '5 (1d8+1)挥砍伤害，或双手持用时6 (1d10+1)挥砍伤害。',
                        damage: '1d8+1 挥砍'
                    },
                    {
                        name: '长弓 Longbow',
                        type: '远程武器攻击',
                        attack: '+3',
                        range: '150/600尺',
                        target: '单一目标',
                        hit: '5 (1d8+1)穿刺伤害。',
                        damage: '1d8+1 穿刺'
                    }
                ],
                notes: '军事训练：5尺内有盟友时攻击和伤害+2'
            },
            bugbear: {
                name: '熊地精 (Bugbear)',
                type: 'enemy',
                size: '中型',
                alignment: '混乱邪恶',
                initiative: 1,
                hp: 27,
                maxHp: 27,
                ac: 16,
                speed: '30尺',
                cr: '1',
                xp: 200,
                source: '基础规则',
                abilities: { str: 15, dex: 14, con: 13, int: 8, wis: 11, cha: 9 },
                skills: { intimidation: 2, stealth: 6, survival: 2 },
                senses: '黑暗视觉60尺，被动察觉10',
                languages: '通用语，地精语',
                traits: [
                    { name: '残暴 Brute', description: '近战武器伤害骰额外增加一个伤害骰（已包含在攻击中）。' },
                    { name: '突袭攻击 Surprise Attack', description: '如果熊地精在战斗开始时突袭到至少一个生物，则该回合其首次攻击命中时额外造成7 (2d6)伤害。' }
                ],
                actions: [
                    {
                        name: ' Morningstar',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '11 (2d8+2)穿刺伤害。',
                        damage: '2d8+2 穿刺'
                    },
                    {
                        name: '标枪 Javelin',
                        type: '近战或远程武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        range: '30/120尺',
                        target: '单一目标',
                        hit: '9 (2d6+2)穿刺伤害。',
                        damage: '2d6+2 穿刺'
                    }
                ],
                notes: '突袭攻击：突袭时额外造成2d6伤害，长肢：近战攻击+5尺'
            },
            orc: {
                name: '兽人 (Orc)',
                type: 'enemy',
                size: '中型',
                alignment: '混乱邪恶',
                initiative: 1,
                hp: 15,
                maxHp: 15,
                ac: 13,
                speed: '30尺',
                cr: '1/2',
                xp: 100,
                source: '基础规则',
                abilities: { str: 16, dex: 12, con: 16, int: 7, wis: 11, cha: 10 },
                skills: { intimidation: 2 },
                senses: '黑暗视觉60尺，被动察觉10',
                languages: '通用语，兽人语',
                traits: [
                    { name: '好战 Aggressive', description: '作为一个附赠动作，兽人可以向一个它能看到的敌对生物移动至多相当于其速度的距离。' }
                ],
                actions: [
                    {
                        name: '巨斧 Greataxe',
                        type: '近战武器攻击',
                        attack: '+5',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '9 (1d12+3)挥砍伤害。',
                        damage: '1d12+3 挥砍'
                    },
                    {
                        name: '标枪 Javelin',
                        type: '近战或远程武器攻击',
                        attack: '+5',
                        reach: '5尺',
                        range: '30/120尺',
                        target: '单一目标',
                        hit: '6 (1d6+3)穿刺伤害。',
                        damage: '1d6+3 穿刺'
                    }
                ],
                notes: '好战：HP降至0时可改为降至1（1次/短休）'
            },
            orc_war_chief: {
                name: '兽人战争酋长 (Orc War Chief)',
                type: 'enemy',
                size: '中型',
                alignment: '混乱邪恶',
                initiative: 1,
                hp: 93,
                maxHp: 93,
                ac: 16,
                speed: '30尺',
                cr: '4',
                xp: 1100,
                source: '基础规则',
                abilities: { str: 18, dex: 12, con: 18, int: 11, wis: 11, cha: 16 },
                savingThrows: { str: 6, con: 6, wis: 2, cha: 5 },
                skills: { intimidation: 5 },
                senses: '黑暗视觉60尺，被动察觉10',
                languages: '通用语，兽人语',
                traits: [
                    { name: '好战 Aggressive', description: '作为一个附赠动作，兽人可以向一个它能看到的敌对生物移动至多相当于其速度的距离。' },
                    { name: ' Gruumsh之眼', description: '当兽人生命值降至0时，它可以立刻进行一次近战攻击。' },
                    { name: '战吼 Battle Cry', description: '1次/短休，30尺内兽人攻击检定优势。' }
                ],
                actions: [
                    {
                        name: '多重攻击 Multiattack',
                        type: '特殊',
                        description: '战争酋长进行两次近战攻击。'
                    },
                    {
                        name: '巨斧 Greataxe',
                        type: '近战武器攻击',
                        attack: '+6',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '14 (1d12+4)挥砍伤害。',
                        damage: '1d12+4 挥砍'
                    },
                    {
                        name: '标枪 Javelin',
                        type: '近战或远程武器攻击',
                        attack: '+6',
                        reach: '5尺',
                        range: '30/120尺',
                        target: '单一目标',
                        hit: '7 (1d6+4)穿刺伤害。',
                        damage: '1d6+4 穿刺'
                    }
                ],
                notes: '战吼：30尺内兽人攻击检定优势，指挥官：盟友攻击+1d4'
            },
            kobold: {
                name: '狗头人 (Kobold)',
                type: 'enemy',
                size: '小型',
                alignment: '守序邪恶',
                initiative: 2,
                hp: 5,
                maxHp: 5,
                ac: 12,
                speed: '30尺',
                cr: '1/8',
                xp: 25,
                source: '基础规则',
                abilities: { str: 7, dex: 15, con: 9, int: 8, wis: 7, cha: 8 },
                senses: '黑暗视觉60尺，被动察觉8',
                languages: '通用语，龙语',
                traits: [
                    { name: '集群战术 Pack Tactics', description: '如果狗头人的盟友在5尺内且未失能，狗头人的攻击检定有优势。' },
                    { name: '日光敏感 Sunlight Sensitivity', description: '在日光下攻击检定和感知（察觉）检定依赖视觉时具有劣势。' }
                ],
                actions: [
                    {
                        name: '匕首 Dagger',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '4 (1d4+2)穿刺伤害。',
                        damage: '1d4+2 穿刺'
                    },
                    {
                        name: '投石索 Sling',
                        type: '远程武器攻击',
                        attack: '+4',
                        range: '30/120尺',
                        target: '单一目标',
                        hit: '4 (1d4+2)钝击伤害。',
                        damage: '1d4+2 钝击'
                    }
                ],
                notes: '集群战术：盟友5尺内攻击优势， sunlight sensitivity'
            },
            
            // ========== 不死生物 ==========
            skeleton: {
                name: '骷髅 (Skeleton)',
                type: 'enemy',
                size: '中型',
                alignment: '守序邪恶',
                initiative: 2,
                hp: 13,
                maxHp: 13,
                ac: 13,
                speed: '30尺',
                cr: '1/4',
                xp: 50,
                source: '基础规则',
                abilities: { str: 10, dex: 14, con: 15, int: 6, wis: 8, cha: 5 },
                damageVulnerabilities: '钝击',
                damageImmunities: '毒素',
                conditionImmunities: '中毒、疲劳',
                senses: '黑暗视觉60尺，被动察觉9',
                languages: '理解其生前语言但不会说',
                traits: [
                    { name: '易碎 Brittle', description: '钝击伤害易伤。' }
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
                        name: '短弓 Shortbow',
                        type: '远程武器攻击',
                        attack: '+4',
                        range: '80/320尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)穿刺伤害。',
                        damage: '1d6+2 穿刺'
                    }
                ],
                notes: '易碎：钝击伤害易伤'
            },
            zombie: {
                name: '僵尸 (Zombie)',
                type: 'enemy',
                size: '中型',
                alignment: '中立邪恶',
                initiative: -2,
                hp: 22,
                maxHp: 22,
                ac: 8,
                speed: '20尺',
                cr: '1/4',
                xp: 50,
                source: '基础规则',
                abilities: { str: 13, dex: 6, con: 16, int: 3, wis: 6, cha: 5 },
                savingThrows: { wis: 0 },
                damageImmunities: '毒素',
                conditionImmunities: '中毒、疲劳',
                senses: '黑暗视觉60尺，被动知觉8',
                languages: '理解其生前语言但不会说',
                traits: [
                    { name: '不死坚韧 Undead Fortitude', description: '如果僵尸受到的伤害将其生命值降至0，它必须进行DC 5+所受伤害值的体质豁免，成功则降至1HP。' }
                ],
                actions: [
                    {
                        name: '猛击 Slam',
                        type: '近战武器攻击',
                        attack: '+3',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '4 (1d6+1)钝击伤害。',
                        damage: '1d6+1 钝击'
                    }
                ],
                notes: '不死坚韧：降至0HP时可进行DC5体质豁免，成功则降至1HP'
            },
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
                conditionImmunities: '魅惑、中毒、恐慌、麻痹、昏迷',
                senses: '黑暗视觉60尺，被动察觉10',
                languages: '通用语',
                traits: [
                    { name: '亡灵坚韧', description: '免疫毒素、魅惑、恐慌、麻痹、昏迷。' }
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
                        hit: '7 (2d4+2)挥砍伤害。如果目标是非亡灵生物，则必须进行DC 10的体质豁免，失败则被麻痹1分钟。目标可以在每个其回合结束时重骰豁免，成功则结束该效果。',
                        damage: '2d4+2 挥砍'
                    }
                ],
                notes: '爪击：命中需进行DC10体质豁免，失败则麻痹1分钟'
            },
            
            // ========== 龙类 ==========
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
                source: '基础规则',
                abilities: { str: 19, dex: 12, con: 17, int: 16, wis: 13, cha: 15 },
                savingThrows: { dex: 4, con: 6, wis: 4, cha: 5 },
                skills: { deception: 5, perception: 7, stealth: 4 },
                damageImmunities: '毒素',
                conditionImmunities: '中毒',
                senses: '盲视30尺，黑暗视觉120尺，被动察觉17',
                languages: '通用语，龙语',
                traits: [
                    { name: '水陆两栖 Amphibious', description: '龙可以在空气和水中呼吸。' }
                ],
                actions: [
                    {
                        name: '多重攻击 Multiattack',
                        type: '特殊',
                        description: '龙进行三次攻击：一次啃咬和两次爪击。'
                    },
                    {
                        name: '啃咬 Bite',
                        type: '近战武器攻击',
                        attack: '+7',
                        reach: '10尺',
                        target: '单一目标',
                        hit: '15 (2d10+4)穿刺伤害，外加7 (2d6)毒素伤害。',
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
                        name: '毒素吐息 Poison Breath (充能5-6)',
                        type: '特殊',
                        description: '龙呼出毒素，覆盖30尺锥形区域。区域内每个生物必须进行DC 14的体质豁免，失败则受到42 (12d6)毒素伤害，成功则伤害减半。'
                    }
                ],
                notes: '毒息武器（30尺锥形，DC14体质豁免，12d6毒素伤害）'
            },
            
            // ========== 巨人 ==========
            hill_giant: {
                name: '山丘巨人 (Hill Giant)',
                type: 'enemy',
                size: '巨型',
                alignment: '混乱邪恶',
                initiative: -1,
                hp: 105,
                maxHp: 105,
                ac: 13,
                speed: '40尺',
                cr: '5',
                xp: 1800,
                source: '基础规则',
                abilities: { str: 21, dex: 8, con: 19, int: 5, wis: 9, cha: 6 },
                skills: { perception: 2 },
                senses: '被动察觉12',
                languages: '巨人语',
                actions: [
                    {
                        name: '巨棒 Greatclub',
                        type: '近战武器攻击',
                        attack: '+8',
                        reach: '10尺',
                        target: '单一目标',
                        hit: '18 (3d8+5)钝击伤害。',
                        damage: '3d8+5 钝击'
                    },
                    {
                        name: '投掷石块 Rock',
                        type: '远程武器攻击',
                        attack: '+8',
                        range: '60/240尺',
                        target: '单一目标',
                        hit: '21 (3d10+5)钝击伤害。',
                        damage: '3d10+5 钝击'
                    }
                ],
                notes: '巨棒：+8命中，3d8+5钝击伤害'
            },
            ogre: {
                name: '食人魔 (Ogre)',
                type: 'enemy',
                size: '大型',
                alignment: '混乱邪恶',
                initiative: -1,
                hp: 59,
                maxHp: 59,
                ac: 11,
                speed: '40尺',
                cr: '2',
                xp: 450,
                source: '基础规则',
                abilities: { str: 19, dex: 8, con: 16, int: 5, wis: 7, cha: 7 },
                senses: '黑暗视觉60尺，被动察觉8',
                languages: '通用语，巨人语',
                actions: [
                    {
                        name: '大棒 Greatclub',
                        type: '近战武器攻击',
                        attack: '+6',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '13 (2d8+4)钝击伤害。',
                        damage: '2d8+4 钝击'
                    },
                    {
                        name: '标枪 Javelin',
                        type: '近战或远程武器攻击',
                        attack: '+6',
                        reach: '5尺',
                        range: '30/120尺',
                        target: '单一目标',
                        hit: '11 (2d6+4)穿刺伤害。',
                        damage: '2d6+4 穿刺'
                    }
                ],
                notes: '大棒：+6命中，2d8+4钝击伤害'
            },
            
            // ========== 精类 ==========
            sprite: {
                name: '小妖精 (Sprite)',
                type: 'enemy',
                size: '微型',
                alignment: '中立善良',
                initiative: 4,
                hp: 2,
                maxHp: 2,
                ac: 15,
                speed: '10尺，飞行40尺',
                cr: '1/4',
                xp: 50,
                source: '基础规则',
                abilities: { str: 3, dex: 18, con: 10, int: 14, wis: 13, cha: 11 },
                skills: { perception: 3, stealth: 8 },
                senses: '被动察觉13',
                languages: '通用语，精灵语，木族语',
                traits: [
                    { name: '隐形 Invisibility', description: '小妖精可以变为隐形。' }
                ],
                actions: [
                    {
                        name: '长剑 Longsword',
                        type: '近战武器攻击',
                        attack: '+6',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '1 (1d4-1)挥砍伤害。',
                        damage: '1d4-1 挥砍'
                    },
                    {
                        name: '短弓 Shortbow',
                        type: '远程武器攻击',
                        attack: '+6',
                        range: '40/160尺',
                        target: '单一目标',
                        hit: '1 (1d4-1)穿刺伤害，目标必须进行DC 10的体质豁免，失败则昏迷1分钟。目标受到伤害或另一个生物用动作唤醒它时提前结束。',
                        damage: '1d4-1 穿刺'
                    }
                ],
                notes: '隐形，心形箭：命中需进行DC10魅力豁免，失败则陷入魅惑'
            },
            
            // ========== 元素 ==========
            air_elemental: {
                name: '气元素 (Air Elemental)',
                type: 'enemy',
                size: '大型',
                alignment: '绝对中立',
                initiative: 5,
                hp: 90,
                maxHp: 90,
                ac: 15,
                speed: '0尺，飞行90尺（悬浮）',
                cr: '5',
                xp: 1800,
                source: '基础规则',
                abilities: { str: 14, dex: 20, con: 14, int: 6, wis: 10, cha: 6 },
                damageResistances: '闪电，雷鸣；非魔法武器的钝击、穿刺、挥砍',
                damageImmunities: '毒素',
                conditionImmunities: '中毒、麻痹、石化、倒地、束缚、昏迷、擒抱、疲劳',
                senses: '黑暗视觉60尺，被动察觉10',
                languages: '气族语',
                traits: [
                    { name: '旋风 Whirlwind', description: '可占据其他生物空间。' },
                    { name: '抗性', description: '非魔法武器抗性。' }
                ],
                actions: [
                    {
                        name: '多重攻击 Multiattack',
                        type: '特殊',
                        description: '元素进行两次猛击攻击。'
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
                        name: '旋风 Whirlwind (充能4-6)',
                        type: '特殊',
                        description: '每个在其空间的生物必须进行DC 13的力量豁免，失败则受到15 (3d8+2)钝击伤害，并被推离元素至多20尺且被击倒。成功则伤害减半，且不会被推离或击倒。'
                    }
                ],
                notes: '旋风：可占据其他生物空间，抗性：非魔法武器'
            }
        }
    },
    
    // 凡达林的地精矿坑战役怪物
    phandelver: {
        name: '凡达林的地精矿坑',
        description: 'Lost Mine of Phandelver 战役专属怪物',
        monsters: {
            // ========== 第一章怪物 ==========
            klarg: {
                name: '克拉格 (Klarg)',
                type: 'enemy',
                size: '中型',
                alignment: '混乱邪恶',
                initiative: 1,
                hp: 27,
                maxHp: 27,
                ac: 16,
                speed: '30尺',
                cr: '1',
                xp: 200,
                source: '凡达林的地精矿坑 - 第一章',
                abilities: { str: 15, dex: 14, con: 13, int: 8, wis: 11, cha: 9 },
                skills: { intimidation: 2, stealth: 6, survival: 2 },
                senses: '黑暗视觉60尺，被动察觉10',
                languages: '通用语，地精语',
                traits: [
                    { name: '残暴 Brute', description: '近战武器伤害骰额外增加一个伤害骰（已包含在攻击中）。' },
                    { name: '突袭攻击 Surprise Attack', description: '如果克拉格在战斗开始时突袭到至少一个生物，则该回合其首次攻击命中时额外造成7 (2d6)伤害。' },
                    { name: '熊地精首领', description: '克拉格是地精洞穴的首领，其他地精会听从他的命令。' }
                ],
                actions: [
                    {
                        name: ' Morningstar',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '11 (2d8+2)穿刺伤害。',
                        damage: '2d8+2 穿刺'
                    },
                    {
                        name: '标枪 Javelin',
                        type: '近战或远程武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        range: '30/120尺',
                        target: '单一目标',
                        hit: '9 (2d6+2)穿刺伤害。',
                        damage: '2d6+2 穿刺'
                    }
                ],
                notes: '熊地精首领，突袭攻击额外2d6伤害'
            },
            ripper: {
                name: '瑞普 (Ripper) - 克拉格的狼',
                type: 'enemy',
                size: '中型',
                alignment: '无阵营',
                initiative: 2,
                hp: 11,
                maxHp: 11,
                ac: 13,
                speed: '40尺',
                cr: '1/4',
                xp: 50,
                source: '凡达林的地精矿坑 - 第一章',
                abilities: { str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6 },
                skills: { perception: 3, stealth: 4 },
                senses: '被动察觉13',
                traits: [
                    { name: '集群战术', description: '如果瑞普的盟友在5尺内且未失能，瑞普的攻击检定有优势。' }
                ],
                actions: [
                    {
                        name: '啃咬 Bite',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '7 (2d4+2)穿刺伤害。如果目标是生物，则必须进行DC 11的力量豁免，失败则被击倒。',
                        damage: '2d4+2 穿刺'
                    }
                ],
                notes: '克拉格的宠物狼，集群战术'
            },
            goblin_ambusher: {
                name: '地精伏击者 (Goblin Ambusher)',
                type: 'enemy',
                size: '小型',
                alignment: '中立邪恶',
                initiative: 2,
                hp: 7,
                maxHp: 7,
                ac: 15,
                speed: '30尺',
                cr: '1/4',
                xp: 50,
                source: '凡达林的地精矿坑 - 第一章',
                abilities: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 },
                skills: { stealth: 6 },
                senses: '黑暗视觉60尺，被动察觉9',
                languages: '通用语，地精语',
                traits: [
                    { name: '敏捷闪避', description: '地精可在每个回合执行撤离或躲藏动作，且视为附赠动作。' }
                ],
                actions: [
                    {
                        name: '弯刀 Scimitar',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)挥砍伤害。',
                        damage: '1d6+2 挥砍'
                    },
                    {
                        name: '短弓 Shortbow',
                        type: '远程武器攻击',
                        attack: '+4',
                        range: '80/320尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)穿刺伤害。',
                        damage: '1d6+2 穿刺'
                    }
                ],
                notes: '擅长伏击的地精，通常隐藏在高处或灌木丛中'
            },
            
            // ========== 第二章怪物 ==========
            redbrand_ruffian: {
                name: '红标恶棍 (Redbrand Ruffian)',
                type: 'enemy',
                size: '中型',
                alignment: '中立邪恶',
                initiative: 1,
                hp: 16,
                maxHp: 16,
                ac: 14,
                speed: '30尺',
                cr: '1/2',
                xp: 100,
                source: '凡达林的地精矿坑 - 第二章',
                abilities: { str: 11, dex: 13, con: 12, int: 9, wis: 9, cha: 10 },
                skills: { intimidation: 2 },
                senses: '被动察觉9',
                languages: '通用语',
                traits: [
                    { name: '恶棍战术', description: '红标恶棍在攻击时喜欢以多欺少。' }
                ],
                actions: [
                    {
                        name: '多重攻击 Multiattack',
                        type: '特殊',
                        description: '恶棍进行两次弯刀攻击。'
                    },
                    {
                        name: '弯刀 Scimitar',
                        type: '近战武器攻击',
                        attack: '+3',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '4 (1d6+1)挥砍伤害。',
                        damage: '1d6+1 挥砍'
                    }
                ],
                notes: '红标帮派的打手，通常两人一组行动'
            },
            glassstaff: {
                name: '玻璃法杖 (Iarno "Glassstaff" Albrek)',
                type: 'enemy',
                size: '中型',
                alignment: '守序邪恶',
                initiative: 2,
                hp: 22,
                maxHp: 22,
                ac: 12,
                speed: '30尺',
                cr: '1',
                xp: 200,
                source: '凡达林的地精矿坑 - 第二章',
                abilities: { str: 9, dex: 14, con: 11, int: 17, wis: 12, cha: 11 },
                savingThrows: { int: 5, wis: 3 },
                skills: { arcana: 5, history: 5 },
                senses: '被动察觉11',
                languages: '通用语，龙语，矮人语，精灵语',
                traits: [
                    { name: '施法 Spellcasting', description: '玻璃法杖是一名4级施法者，其施法能力基于智力（法术豁免DC 13，法术攻击+5）。他准备了以下法师法术：\n戏法（随意）：法师之手、光亮术、魔法飞弹、冷冻射线\n1环（4法术位）：魅惑人类、魔法飞弹、护盾术、雷鸣波\n2环（3法术位）：迷踪步、镜影术' }
                ],
                actions: [
                    {
                        name: '法杖 Quarterstaff',
                        type: '近战武器攻击',
                        attack: '+1',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '2 (1d6-1)钝击伤害，或双手持用时3 (1d8-1)钝击伤害。',
                        damage: '1d6-1 钝击'
                    },
                    {
                        name: '魔法飞弹 Magic Missile (1环法术)',
                        type: '法术',
                        description: '自动命中，射程120尺。发射3枚飞弹，每枚造成1d4+1力场伤害。'
                    },
                    {
                        name: '冷冻射线 Ray of Frost (戏法)',
                        type: '法术攻击',
                        attack: '+5',
                        range: '60尺',
                        target: '单一目标',
                        hit: '7 (1d8+3)冷冻伤害，目标速度减少10尺直到你的下一回合开始。',
                        damage: '1d8+3 冷冻'
                    }
                ],
                reactions: [
                    {
                        name: '护盾术 Shield (1环法术，反应)',
                        description: '被攻击命中时，AC+5直到你的下一回合开始，包括对触发攻击。'
                    }
                ],
                notes: '红标帮派首领，4级法师，携带玻璃法杖'
            },
            nothic: {
                name: '诺西克 (Nothic)',
                type: 'enemy',
                size: '中型',
                alignment: '中立邪恶',
                initiative: 3,
                hp: 45,
                maxHp: 45,
                ac: 15,
                speed: '30尺，攀爬30尺',
                cr: '2',
                xp: 450,
                source: '凡达林的地精矿坑 - 第二章',
                abilities: { str: 14, dex: 16, con: 16, int: 13, wis: 10, cha: 8 },
                skills: { arcana: 3, insight: 2, perception: 4, stealth: 5 },
                senses: '真实视觉120尺，被动察觉14',
                languages: '地下通用语',
                traits: [
                    { name: '腐化敏锐 Corrupting Gaze', description: '诺西克凝视一个它能看到的生物，该生物必须进行DC 12的体质豁免，失败则受到10 (3d6)黯蚀伤害，成功则伤害减半。' },
                    { name: '腐化洞察 Corrupting Insight', description: '诺西克可以感知到一个它能看到的生物的最黑暗秘密。' }
                ],
                actions: [
                    {
                        name: '多重攻击 Multiattack',
                        type: '特殊',
                        description: '诺西克进行两次爪击攻击。'
                    },
                    {
                        name: '爪击 Claw',
                        type: '近战武器攻击',
                        attack: '+5',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '6 (1d6+3)挥砍伤害。',
                        damage: '1d6+3 挥砍'
                    }
                ],
                notes: '被诅咒的奥术生物，腐化凝视造成3d6黯蚀伤害'
            },
            
            // ========== 其他重要怪物 ==========
            cragmaw_goblin: {
                name: '克拉格莫地精 (Cragmaw Goblin)',
                type: 'enemy',
                size: '小型',
                alignment: '中立邪恶',
                initiative: 2,
                hp: 7,
                maxHp: 7,
                ac: 15,
                speed: '30尺',
                cr: '1/4',
                xp: 50,
                source: '凡达林的地精矿坑',
                abilities: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 8 },
                skills: { stealth: 6 },
                senses: '黑暗视觉60尺，被动察觉9',
                languages: '通用语，地精语',
                traits: [
                    { name: '敏捷闪避', description: '地精可在每个回合执行撤离或躲藏动作，且视为附赠动作。' }
                ],
                actions: [
                    {
                        name: '弯刀 Scimitar',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)挥砍伤害。',
                        damage: '1d6+2 挥砍'
                    },
                    {
                        name: '短弓 Shortbow',
                        type: '远程武器攻击',
                        attack: '+4',
                        range: '80/320尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)穿刺伤害。',
                        damage: '1d6+2 穿刺'
                    }
                ],
                notes: '克拉格莫部落的地精'
            },
            cragmaw_hobgoblin: {
                name: '克拉格莫大地精 (Cragmaw Hobgoblin)',
                type: 'enemy',
                size: '中型',
                alignment: '守序邪恶',
                initiative: 1,
                hp: 11,
                maxHp: 11,
                ac: 18,
                speed: '30尺',
                cr: '1/2',
                xp: 100,
                source: '凡达林的地精矿坑',
                abilities: { str: 13, dex: 12, con: 12, int: 10, wis: 10, cha: 9 },
                senses: '黑暗视觉60尺，被动察觉10',
                languages: '通用语，地精语',
                traits: [
                    { name: '军事训练', description: '大地精每回合有一次机会，在5尺内有其他生物协助时，对其武器攻击命中造成额外7 (2d6)伤害。' }
                ],
                actions: [
                    {
                        name: '长剑 Longsword',
                        type: '近战武器攻击',
                        attack: '+3',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '5 (1d8+1)挥砍伤害。',
                        damage: '1d8+1 挥砍'
                    },
                    {
                        name: '长弓 Longbow',
                        type: '远程武器攻击',
                        attack: '+3',
                        range: '150/600尺',
                        target: '单一目标',
                        hit: '5 (1d8+1)穿刺伤害。',
                        damage: '1d8+1 穿刺'
                    }
                ],
                notes: '克拉格莫部落的大地精'
            },
            king_grol: {
                name: '格罗尔王 (King Grol)',
                type: 'enemy',
                size: '大型',
                alignment: '混乱邪恶',
                initiative: -1,
                hp: 59,
                maxHp: 59,
                ac: 11,
                speed: '40尺',
                cr: '2',
                xp: 450,
                source: '凡达林的地精矿坑',
                abilities: { str: 19, dex: 8, con: 16, int: 5, wis: 7, cha: 7 },
                senses: '黑暗视觉60尺，被动察觉8',
                languages: '通用语，巨人语',
                traits: [
                    { name: '克拉格莫之王', description: '格罗尔是克拉格莫城堡的统治者，所有地精都服从他的命令。' }
                ],
                actions: [
                    {
                        name: '大棒 Greatclub',
                        type: '近战武器攻击',
                        attack: '+6',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '13 (2d8+4)钝击伤害。',
                        damage: '2d8+4 钝击'
                    },
                    {
                        name: '标枪 Javelin',
                        type: '近战或远程武器攻击',
                        attack: '+6',
                        reach: '5尺',
                        range: '30/120尺',
                        target: '单一目标',
                        hit: '11 (2d6+4)穿刺伤害。',
                        damage: '2d6+4 穿刺'
                    }
                ],
                notes: '克拉格莫城堡的食人魔国王'
            },
            snarl: {
                name: '斯纳尔 (Snarl) - 格罗尔的狼',
                type: 'enemy',
                size: '中型',
                alignment: '无阵营',
                initiative: 2,
                hp: 11,
                maxHp: 11,
                ac: 13,
                speed: '40尺',
                cr: '1/4',
                xp: 50,
                source: '凡达林的地精矿坑',
                abilities: { str: 12, dex: 15, con: 12, int: 3, wis: 12, cha: 6 },
                skills: { perception: 3, stealth: 4 },
                senses: '被动察觉13',
                traits: [
                    { name: '集群战术', description: '如果斯纳尔的盟友在5尺内且未失能，斯纳尔的攻击检定有优势。' }
                ],
                actions: [
                    {
                        name: '啃咬 Bite',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '7 (2d4+2)穿刺伤害。如果目标是生物，则必须进行DC 11的力量豁免，失败则被击倒。',
                        damage: '2d4+2 穿刺'
                    }
                ],
                notes: '格罗尔王的宠物狼'
            },
            black_spider: {
                name: '黑蜘蛛 (The Black Spider)',
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
                source: '凡达林的地精矿坑',
                abilities: { str: 9, dex: 14, con: 11, int: 16, wis: 13, cha: 11 },
                savingThrows: { int: 5, wis: 3 },
                skills: { arcana: 5, deception: 3, perception: 3 },
                senses: '黑暗视觉120尺，被动察觉13',
                languages: '通用语，龙语，地精语，兽人语，木族语',
                traits: [
                    { name: '施法 Spellcasting', description: '黑蜘蛛是一名4级施法者，其施法能力基于智力（法术豁免DC 13，法术攻击+5）。他准备了以下法师法术：\n戏法（随意）：法师之手、光亮术、魔法飞弹、冷冻射线\n1环（4法术位）：魅惑人类、魔法飞弹、护盾术、雷鸣波\n2环（3法术位）：迷踪步、镜影术、蛛网术' },
                    { name: '蜘蛛爬行 Spider Climb', description: '黑蜘蛛可以攀爬困难表面，包括倒挂在天花板上，不需要进行能力检定。' }
                ],
                actions: [
                    {
                        name: '法杖 Quarterstaff',
                        type: '近战武器攻击',
                        attack: '+1',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '2 (1d6-1)钝击伤害。',
                        damage: '1d6-1 钝击'
                    },
                    {
                        name: '魔法飞弹 Magic Missile (1环法术)',
                        type: '法术',
                        description: '自动命中，射程120尺。发射3枚飞弹，每枚造成1d4+1力场伤害。'
                    },
                    {
                        name: '蛛网术 Web (2环法术)',
                        type: '法术',
                        description: '射程60尺，20尺立方区域。生物必须进行DC 13的敏捷豁免，失败则被束缚。'
                    }
                ],
                notes: '主要反派，卓尔法师，4级施法者'
            }
        }
    },
    
    // 扩展规则怪物 (Volo怪物指南等)
    expanded: {
        name: '扩展规则',
        description: '来自Volo怪物指南等扩展内容的怪物',
        monsters: {
            kobold_inventor: {
                name: '狗头人发明家 (Kobold Inventor)',
                type: 'enemy',
                size: '小型',
                alignment: '守序邪恶',
                initiative: 2,
                hp: 7,
                maxHp: 7,
                ac: 12,
                speed: '30尺',
                cr: '1/8',
                xp: 25,
                source: 'Volo怪物指南',
                abilities: { str: 7, dex: 15, con: 9, int: 8, wis: 7, cha: 8 },
                senses: '黑暗视觉60尺，被动察觉8',
                languages: '通用语，龙语',
                traits: [
                    { name: '集群战术', description: '如果狗头人的盟友在5尺内且未失能，狗头人的攻击检定有优势。' },
                    { name: '日光敏感', description: '在日光下攻击检定和感知（察觉）检定依赖视觉时具有劣势。' },
                    { name: '发明家', description: '狗头人发明家携带各种奇怪的发明。' }
                ],
                actions: [
                    {
                        name: '匕首 Dagger',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '4 (1d4+2)穿刺伤害。',
                        damage: '1d4+2 穿刺'
                    },
                    {
                        name: '奇物袋 Bag of Tricks',
                        type: '特殊',
                        description: '狗头人投掷一个奇物，投掷1d6决定效果：\n1-2：酸液瓶，15尺锥形，DC 11敏捷豁免，失败受5 (2d4)酸蚀伤害\n3-4：臭云，10尺半径，DC 11体质豁免，失败受5 (2d4)毒素伤害并中毒1轮\n5-6：绿软泥，5尺半径，DC 11敏捷豁免，失败受5 (2d4)酸蚀伤害并被限制直到逃脱（DC 11力量检定）'
                    }
                ],
                notes: '携带奇物袋，可以投掷各种奇怪的发明'
            },
            goblin_boss: {
                name: '地精头目 (Goblin Boss)',
                type: 'enemy',
                size: '小型',
                alignment: '中立邪恶',
                initiative: 2,
                hp: 21,
                maxHp: 21,
                ac: 17,
                speed: '30尺',
                cr: '1',
                xp: 200,
                source: 'Volo怪物指南',
                abilities: { str: 10, dex: 14, con: 10, int: 10, wis: 8, cha: 10 },
                skills: { stealth: 6 },
                senses: '黑暗视觉60尺，被动察觉9',
                languages: '通用语，地精语',
                traits: [
                    { name: '敏捷闪避', description: '地精可在每个回合执行撤离或躲藏动作，且视为附赠动作。' },
                    { name: '头领反应 Redirect Attack', description: '当一个生物以地精头目为目标进行攻击时，地精头目可以选择一个5尺内的其他生物作为替代目标。' }
                ],
                actions: [
                    {
                        name: '弯刀 Scimitar',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)挥砍伤害。',
                        damage: '1d6+2 挥砍'
                    },
                    {
                        name: '短弓 Shortbow',
                        type: '远程武器攻击',
                        attack: '+4',
                        range: '80/320尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)穿刺伤害。',
                        damage: '1d6+2 穿刺'
                    },
                    {
                        name: '头领攻击 Boss Attack',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '8 (2d6+2)挥砍伤害。',
                        damage: '2d6+2 挥砍'
                    }
                ],
                notes: '地精头目，可以使用头领反应转移攻击'
            },
            quickling: {
                name: '迅妖 (Quickling)',
                type: 'enemy',
                size: '微型',
                alignment: '混乱邪恶',
                initiative: 6,
                hp: 10,
                maxHp: 10,
                ac: 16,
                speed: '120尺',
                cr: '1',
                xp: 200,
                source: 'Volo怪物指南',
                abilities: { str: 4, dex: 23, con: 10, int: 15, wis: 12, cha: 7 },
                skills: { acrobatics: 9, perception: 3, sleightOfHand: 9, stealth: 9 },
                senses: '黑暗视觉60尺，被动察觉13',
                languages: '通用语，木族语',
                traits: [
                    { name: '极速 Speed', description: '迅妖的速度极快，难以被瞄准。所有针对迅妖的攻击检定具有劣势，除非迅妖处于失能状态或被限制。' },
                    { name: '隐形 Invisibility', description: '迅妖可以变为隐形。' }
                ],
                actions: [
                    {
                        name: '匕首 Dagger',
                        type: '近战武器攻击',
                        attack: '+8',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '8 (1d4+6)穿刺伤害。',
                        damage: '1d4+6 穿刺'
                    }
                ],
                bonusActions: [
                    {
                        name: '极速移动',
                        description: '迅妖可以进行撤离、疾跑或躲藏动作，且视为附赠动作。'
                    }
                ],
                notes: '极速生物，攻击具有劣势，速度120尺'
            },
            nilbog: {
                name: '逆地精 (Nilbog)',
                type: 'enemy',
                size: '小型',
                alignment: '混乱中立',
                initiative: 2,
                hp: 7,
                maxHp: 7,
                ac: 15,
                speed: '30尺',
                cr: '1/4',
                xp: 50,
                source: 'Volo怪物指南',
                abilities: { str: 8, dex: 14, con: 10, int: 10, wis: 8, cha: 15 },
                skills: { stealth: 6 },
                senses: '黑暗视觉60尺，被动察觉9',
                languages: '通用语，地精语',
                traits: [
                    { name: '混乱反转 Nilbogism', description: '任何试图对逆地精造成伤害的生物必须进行DC 12的感知豁免，失败则该回合不能攻击逆地精，必须对其使用戏法或进行嘲讽。' },
                    { name: '隐形 Invisibility', description: '逆地精可以变为隐形。' }
                ],
                actions: [
                    {
                        name: '弯刀 Scimitar',
                        type: '近战武器攻击',
                        attack: '+4',
                        reach: '5尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)挥砍伤害。',
                        damage: '1d6+2 挥砍'
                    },
                    {
                        name: '短弓 Shortbow',
                        type: '远程武器攻击',
                        attack: '+4',
                        range: '80/320尺',
                        target: '单一目标',
                        hit: '5 (1d6+2)穿刺伤害。',
                        damage: '1d6+2 穿刺'
                    },
                    {
                        name: '嘲讽 Taunt',
                        type: '特殊',
                        description: '逆地精嘲讽一个30尺内它能看到的生物，该生物必须进行DC 12的感知豁免，失败则在下一回合必须尽可能攻击逆地精。'
                    }
                ],
                reactions: [
                    {
                        name: '混乱反转',
                        description: '当逆地精受到伤害时，它可以将伤害转化为治疗，恢复等量的生命值。'
                    }
                ],
                notes: '混乱生物，攻击它需要进行感知豁免'
            }
        }
    }
};

// 预设战斗数据
const PRESET_ENCOUNTERS = {
    // 凡达林的地精矿坑战役
    phandelver: {
        name: '凡达林的地精矿坑',
        description: 'Lost Mine of Phandelver 战役预设战斗',
        chapters: {
            chapter1: {
                name: '第一章：地精伏击',
                description: '从三猪小径到克拉格莫城堡的遭遇',
                encounters: {
                    goblin_ambush: {
                        name: '地精伏击',
                        description: '三猪小径上的经典伏击',
                        monsters: [
                            { id: 'goblin_ambusher', count: 4 }
                        ]
                    },
                    klarg_lair: {
                        name: '克拉格巢穴',
                        description: '熊地精首领克拉格和他的宠物',
                        monsters: [
                            { id: 'klarg', count: 1 },
                            { id: 'ripper', count: 1 },
                            { id: 'goblin', count: 2 }
                        ]
                    },
                    goblin_cave_entrance: {
                        name: '地精洞穴入口',
                        description: '守卫洞穴入口的地精',
                        monsters: [
                            { id: 'goblin', count: 2 }
                        ]
                    },
                    goblin_cave_guards: {
                        name: '地精洞穴守卫',
                        description: '洞穴深处的守卫',
                        monsters: [
                            { id: 'goblin', count: 4 },
                            { id: 'wolf', count: 2 }
                        ]
                    },
                    goblin_cave_boss: {
                        name: '地精洞穴首领',
                        description: '克拉格和他的随从',
                        monsters: [
                            { id: 'klarg', count: 1 },
                            { id: 'ripper', count: 1 },
                            { id: 'goblin', count: 3 },
                            { id: 'wolf', count: 2 }
                        ]
                    }
                }
            },
            chapter2: {
                name: '第二章：菲安德林的麻烦',
                description: '城镇内的红标帮派威胁',
                encounters: {
                    redbrand_patrol: {
                        name: '红标巡逻队',
                        description: '城镇内的红标帮派巡逻队',
                        monsters: [
                            { id: 'redbrand_ruffian', count: 2 }
                        ]
                    },
                    redbrand_hideout_entrance: {
                        name: '红标藏身处入口',
                        description: '酒馆地下室入口的守卫',
                        monsters: [
                            { id: 'redbrand_ruffian', count: 2 },
                            { id: 'goblin', count: 1 }
                        ]
                    },
                    redbrand_boss: {
                        name: '红标头目',
                        description: '玻璃法杖和红标打手',
                        monsters: [
                            { id: 'glassstaff', count: 1 },
                            { id: 'redbrand_ruffian', count: 3 },
                            { id: 'goblin', count: 2 }
                        ]
                    },
                    nothic_lair: {
                        name: '诺西克巢穴',
                        description: '地窖中的诺西克',
                        monsters: [
                            { id: 'nothic', count: 1 }
                        ]
                    },
                    orc_raiders: {
                        name: '兽人袭击者',
                        description: '游荡的兽人袭击队伍',
                        monsters: [
                            { id: 'orc', count: 3 },
                            { id: 'orc_war_chief', count: 1 }
                        ]
                    },
                    ogre_encounter: {
                        name: '食人魔遭遇',
                        description: '野外的食人魔',
                        monsters: [
                            { id: 'ogre', count: 1 }
                        ]
                    }
                }
            },
            chapter3: {
                name: '第三章：克拉格莫城堡',
                description: '最终要塞的战斗',
                encounters: {
                    castle_entrance: {
                        name: '城堡入口',
                        description: '城堡大门守卫',
                        monsters: [
                            { id: 'cragmaw_goblin', count: 3 },
                            { id: 'cragmaw_hobgoblin', count: 1 }
                        ]
                    },
                    castle_courtyard: {
                        name: '城堡庭院',
                        description: '庭院内的巡逻队',
                        monsters: [
                            { id: 'cragmaw_goblin', count: 4 },
                            { id: 'wolf', count: 2 }
                        ]
                    },
                    king_grol_throne: {
                        name: '格罗尔王座',
                        description: '格罗尔王和他的宠物',
                        monsters: [
                            { id: 'king_grol', count: 1 },
                            { id: 'snarl', count: 1 },
                            { id: 'dire_wolf', count: 1 }
                        ]
                    },
                    black_spider_lair: {
                        name: '黑蜘蛛巢穴',
                        description: '最终决战',
                        monsters: [
                            { id: 'black_spider', count: 1 },
                            { id: 'bugbear', count: 2 },
                            { id: 'goblin', count: 4 }
                        ]
                    }
                }
            }
        }
    },
    
    // 通用遭遇
    generic: {
        name: '通用遭遇',
        description: '适合任何战役的通用怪物组合',
        chapters: {
            wilderness: {
                name: '野外遭遇',
                description: '适合森林、平原等野外环境',
                encounters: {
                    wolf_pack: {
                        name: '狼群',
                        description: '一群饥饿的狼',
                        monsters: [
                            { id: 'wolf', count: 4 },
                            { id: 'dire_wolf', count: 1 }
                        ]
                    },
                    goblin_raiders: {
                        name: '地精劫掠者',
                        description: '地精劫掠小队',
                        monsters: [
                            { id: 'goblin', count: 4 },
                            { id: 'goblin_boss', count: 1 }
                        ]
                    },
                    undead_horde: {
                        name: '不死军团',
                        description: '不死生物群',
                        monsters: [
                            { id: 'skeleton', count: 4 },
                            { id: 'zombie', count: 3 },
                            { id: 'ghoul', count: 1 }
                        ]
                    },
                    orc_warband: {
                        name: '兽人战团',
                        description: '兽人战斗小队',
                        monsters: [
                            { id: 'orc', count: 4 },
                            { id: 'orc_war_chief', count: 1 }
                        ]
                    },
                    hill_giant_encounter: {
                        name: '山丘巨人',
                        description: '单独的山丘巨人',
                        monsters: [
                            { id: 'hill_giant', count: 1 }
                        ]
                    }
                }
            },
            dungeon: {
                name: '地城遭遇',
                description: '适合地下城、废墟等环境',
                encounters: {
                    kobold_trappers: {
                        name: '狗头人陷阱师',
                        description: '携带发明的狗头人',
                        monsters: [
                            { id: 'kobold', count: 3 },
                            { id: 'kobold_inventor', count: 1 }
                        ]
                    },
                    hobgoblin_squad: {
                        name: '大地精小队',
                        description: '训练有素的大地精',
                        monsters: [
                            { id: 'hobgoblin', count: 4 }
                        ]
                    },
                    undead_guardians: {
                        name: '不死守卫',
                        description: '守护古墓的不死生物',
                        monsters: [
                            { id: 'skeleton', count: 3 },
                            { id: 'ghoul', count: 2 }
                        ]
                    },
                    bugbear_ambush: {
                        name: '熊地精伏击',
                        description: '熊地精伏击小队',
                        monsters: [
                            { id: 'bugbear', count: 3 },
                            { id: 'goblin', count: 2 }
                        ]
                    },
                    elemental_rift: {
                        name: '元素裂隙',
                        description: '元素生物出现',
                        monsters: [
                            { id: 'air_elemental', count: 1 }
                        ]
                    }
                }
            }
        }
    }
};

// 导出数据（如果在模块环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MONSTERS_DATA, PRESET_ENCOUNTERS };
}