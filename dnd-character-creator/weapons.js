// D&D 5E 武器数据 - 包含基础武器和魔法武器

const WEAPONS = {
    // 简易近战武器
    simpleMelee: [
        { name: '短棒', nameEn: 'Club', cost: '1sp', damage: '1d4', damageType: '钝击', weight: '2磅', properties: ['轻型'], category: 'simple', type: 'melee' },
        { name: '匕首', nameEn: 'Dagger', cost: '2gp', damage: '1d4', damageType: '穿刺', weight: '1磅', properties: ['轻型', '灵巧', '投掷(20/60)'], category: 'simple', type: 'melee' },
        { name: '巨棒', nameEn: 'Greatclub', cost: '2sp', damage: '1d8', damageType: '钝击', weight: '10磅', properties: ['双手'], category: 'simple', type: 'melee' },
        { name: '手斧', nameEn: 'Handaxe', cost: '5gp', damage: '1d6', damageType: '挥砍', weight: '2磅', properties: ['轻型', '投掷(20/60)'], category: 'simple', type: 'melee' },
        { name: '标枪', nameEn: 'Javelin', cost: '5sp', damage: '1d6', damageType: '穿刺', weight: '2磅', properties: ['投掷(30/120)'], category: 'simple', type: 'melee' },
        { name: '轻锤', nameEn: 'Light Hammer', cost: '2gp', damage: '1d4', damageType: '钝击', weight: '2磅', properties: ['轻型', '投掷(20/60)'], category: 'simple', type: 'melee' },
        { name: '硬头锤', nameEn: 'Mace', cost: '5gp', damage: '1d6', damageType: '钝击', weight: '4磅', properties: [], category: 'simple', type: 'melee' },
        { name: '长棍', nameEn: 'Quarterstaff', cost: '2sp', damage: '1d6', damageType: '钝击', weight: '4磅', properties: [' versatile(1d8)'], category: 'simple', type: 'melee' },
        { name: '镰刀', nameEn: 'Sickle', cost: '1gp', damage: '1d4', damageType: '挥砍', weight: '2磅', properties: ['轻型'], category: 'simple', type: 'melee' },
        { name: '矛', nameEn: 'Spear', cost: '1gp', damage: '1d6', damageType: '穿刺', weight: '3磅', properties: ['投掷(20/60)', ' versatile(1d8)'], category: 'simple', type: 'melee' },
        { name: '指虎', nameEn: 'Brass Knuckles', cost: '2gp', damage: '1d4', damageType: '钝击', weight: '1磅', properties: ['轻型', '隐蔽'], category: 'simple', type: 'melee' },
        { name: '短棒', nameEn: 'Sap', cost: '1gp', damage: '1d6', damageType: '钝击', weight: '2磅', properties: ['轻型', '隐蔽'], category: 'simple', type: 'melee' }
    ],
    // 军用近战武器
    martialMelee: [
        { name: '战斧', nameEn: 'Battleaxe', cost: '10gp', damage: '1d8', damageType: '挥砍', weight: '4磅', properties: [' versatile(1d10)'], category: 'martial', type: 'melee' },
        { name: '链枷', nameEn: 'Flail', cost: '10gp', damage: '1d8', damageType: '钝击', weight: '2磅', properties: [], category: 'martial', type: 'melee' },
        { name: '长剑', nameEn: 'Longsword', cost: '15gp', damage: '1d8', damageType: '挥砍', weight: '3磅', properties: [' versatile(1d10)'], category: 'martial', type: 'melee' },
        { name: '巨斧', nameEn: 'Greataxe', cost: '30gp', damage: '1d12', damageType: '挥砍', weight: '7磅', properties: ['重型', '双手'], category: 'martial', type: 'melee' },
        { name: '巨剑', nameEn: 'Greatsword', cost: '50gp', damage: '2d6', damageType: '挥砍', weight: '6磅', properties: ['重型', '双手'], category: 'martial', type: 'melee' },
        { name: '戟', nameEn: 'Halberd', cost: '20gp', damage: '1d10', damageType: '挥砍', weight: '6磅', properties: ['重型', '触及', '双手'], category: 'martial', type: 'melee' },
        { name: '长柄刀', nameEn: 'Glaive', cost: '20gp', damage: '1d10', damageType: '挥砍', weight: '6磅', properties: ['重型', '触及', '双手'], category: 'martial', type: 'melee' },
        { name: '骑枪', nameEn: 'Lance', cost: '10gp', damage: '1d12', damageType: '穿刺', weight: '6磅', properties: ['触及', '特殊'], category: 'martial', type: 'melee' },
        { name: '长矛', nameEn: 'Pike', cost: '5gp', damage: '1d10', damageType: '穿刺', weight: '18磅', properties: ['重型', '触及', '双手'], category: 'martial', type: 'melee' },
        { name: '钉头锤', nameEn: 'Morningstar', cost: '15gp', damage: '1d8', damageType: '穿刺', weight: '4磅', properties: [], category: 'martial', type: 'melee' },
        { name: '刺剑', nameEn: 'Rapier', cost: '25gp', damage: '1d8', damageType: '穿刺', weight: '2磅', properties: ['灵巧'], category: 'martial', type: 'melee' },
        { name: '弯刀', nameEn: 'Scimitar', cost: '25gp', damage: '1d6', damageType: '挥砍', weight: '3磅', properties: ['轻型', '灵巧'], category: 'martial', type: 'melee' },
        { name: '短剑', nameEn: 'Shortsword', cost: '10gp', damage: '1d6', damageType: '穿刺', weight: '2磅', properties: ['轻型', '灵巧'], category: 'martial', type: 'melee' },
        { name: '三叉戟', nameEn: 'Trident', cost: '5gp', damage: '1d6', damageType: '穿刺', weight: '4磅', properties: ['投掷(20/60)', ' versatile(1d8)'], category: 'martial', type: 'melee' },
        { name: '战锤', nameEn: 'Warhammer', cost: '15gp', damage: '1d8', damageType: '钝击', weight: '2磅', properties: [' versatile(1d10)'], category: 'martial', type: 'melee' },
        { name: '鞭子', nameEn: 'Whip', cost: '2gp', damage: '1d4', damageType: '挥砍', weight: '3磅', properties: ['灵巧', '触及'], category: 'martial', type: 'melee' }
    ],
    // 简易远程武器
    simpleRanged: [
        { name: '轻弩', nameEn: 'Light Crossbow', cost: '25gp', damage: '1d8', damageType: '穿刺', weight: '5磅', properties: ['弹药(80/320)', '装填', '双手'], category: 'simple', type: 'ranged' },
        { name: '飞镖', nameEn: 'Dart', cost: '5cp', damage: '1d4', damageType: '穿刺', weight: '1/4磅', properties: ['灵巧', '投掷(20/60)'], category: 'simple', type: 'ranged' },
        { name: '短弓', nameEn: 'Shortbow', cost: '25gp', damage: '1d6', damageType: '穿刺', weight: '2磅', properties: ['弹药(80/320)', '双手'], category: 'simple', type: 'ranged' },
        { name: '投石索', nameEn: 'Sling', cost: '1sp', damage: '1d4', damageType: '钝击', weight: '-', properties: ['弹药(30/120)'], category: 'simple', type: 'ranged' },
        { name: '手铳', nameEn: 'Pistol', cost: '250gp', damage: '1d10', damageType: '穿刺', weight: '3磅', properties: ['弹药(30/90)', '装填'], category: 'simple', type: 'ranged' },
        { name: '火绳枪', nameEn: 'Musket', cost: '500gp', damage: '1d12', damageType: '穿刺', weight: '10磅', properties: ['弹药(40/120)', '装填', '双手'], category: 'simple', type: 'ranged' }
    ],
    // 军用远程武器
    martialRanged: [
        { name: '吹箭筒', nameEn: 'Blowgun', cost: '10gp', damage: '1', damageType: '穿刺', weight: '1磅', properties: ['弹药(25/100)', '装填'], category: 'martial', type: 'ranged' },
        { name: '手弩', nameEn: 'Hand Crossbow', cost: '75gp', damage: '1d6', damageType: '穿刺', weight: '3磅', properties: ['弹药(30/120)', '轻型', '装填'], category: 'martial', type: 'ranged' },
        { name: '重弩', nameEn: 'Heavy Crossbow', cost: '50gp', damage: '1d10', damageType: '穿刺', weight: '18磅', properties: ['弹药(100/400)', '重型', '装填', '双手'], category: 'martial', type: 'ranged' },
        { name: '长弓', nameEn: 'Longbow', cost: '50gp', damage: '1d8', damageType: '穿刺', weight: '2磅', properties: ['弹药(150/600)', '重型', '双手'], category: 'martial', type: 'ranged' },
        { name: '网', nameEn: 'Net', cost: '1gp', damage: '-', damageType: '-', weight: '3磅', properties: ['特殊', '投掷(5/15)'], category: 'martial', type: 'ranged' },
        { name: '左轮手枪', nameEn: 'Revolver', cost: '400gp', damage: '2d8', damageType: '穿刺', weight: '3磅', properties: ['弹药(40/120)'], category: 'martial', type: 'ranged' },
        { name: '步枪', nameEn: 'Rifle', cost: '800gp', damage: '2d10', damageType: '穿刺', weight: '8磅', properties: ['弹药(80/240)', '双手'], category: 'martial', type: 'ranged' },
        { name: '霰弹枪', nameEn: 'Shotgun', cost: '500gp', damage: '2d8', damageType: '穿刺', weight: '7磅', properties: ['弹药(30/90)', '双手'], category: 'martial', type: 'ranged' }
    ],
    // 魔法武器 - +1武器
    magicPlus1: [
        { name: '+1 短棒', nameEn: '+1 Club', cost: '1000gp', damage: '1d4+1', damageType: '钝击', weight: '2磅', properties: ['轻型', '魔法'], category: 'magic', rarity: 'uncommon', bonus: 1, type: 'melee' },
        { name: '+1 匕首', nameEn: '+1 Dagger', cost: '1000gp', damage: '1d4+1', damageType: '穿刺', weight: '1磅', properties: ['轻型', '灵巧', '投掷(20/60)', '魔法'], category: 'magic', rarity: 'uncommon', bonus: 1, type: 'melee' },
        { name: '+1 长剑', nameEn: '+1 Longsword', cost: '1000gp', damage: '1d8+1', damageType: '挥砍', weight: '3磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'uncommon', bonus: 1, type: 'melee' },
        { name: '+1 巨剑', nameEn: '+1 Greatsword', cost: '1000gp', damage: '2d6+1', damageType: '挥砍', weight: '6磅', properties: ['重型', '双手', '魔法'], category: 'magic', rarity: 'uncommon', bonus: 1, type: 'melee' },
        { name: '+1 战斧', nameEn: '+1 Battleaxe', cost: '1000gp', damage: '1d8+1', damageType: '挥砍', weight: '4磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'uncommon', bonus: 1, type: 'melee' },
        { name: '+1 长弓', nameEn: '+1 Longbow', cost: '1000gp', damage: '1d8+1', damageType: '穿刺', weight: '2磅', properties: ['弹药(150/600)', '重型', '双手', '魔法'], category: 'magic', rarity: 'uncommon', bonus: 1, type: 'ranged' },
        { name: '+1 短弓', nameEn: '+1 Shortbow', cost: '1000gp', damage: '1d6+1', damageType: '穿刺', weight: '2磅', properties: ['弹药(80/320)', '双手', '魔法'], category: 'magic', rarity: 'uncommon', bonus: 1, type: 'ranged' }
    ],
    // 魔法武器 - +2武器
    magicPlus2: [
        { name: '+2 长剑', nameEn: '+2 Longsword', cost: '4000gp', damage: '1d8+2', damageType: '挥砍', weight: '3磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'rare', bonus: 2, type: 'melee' },
        { name: '+2 巨剑', nameEn: '+2 Greatsword', cost: '4000gp', damage: '2d6+2', damageType: '挥砍', weight: '6磅', properties: ['重型', '双手', '魔法'], category: 'magic', rarity: 'rare', bonus: 2, type: 'melee' },
        { name: '+2 战锤', nameEn: '+2 Warhammer', cost: '4000gp', damage: '1d8+2', damageType: '钝击', weight: '2磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'rare', bonus: 2, type: 'melee' },
        { name: '+2 长弓', nameEn: '+2 Longbow', cost: '4000gp', damage: '1d8+2', damageType: '穿刺', weight: '2磅', properties: ['弹药(150/600)', '重型', '双手', '魔法'], category: 'magic', rarity: 'rare', bonus: 2, type: 'ranged' }
    ],
    // 魔法武器 - +3武器
    magicPlus3: [
        { name: '+3 长剑', nameEn: '+3 Longsword', cost: '16000gp', damage: '1d8+3', damageType: '挥砍', weight: '3磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'veryrare', bonus: 3, type: 'melee' },
        { name: '+3 巨剑', nameEn: '+3 Greatsword', cost: '16000gp', damage: '2d6+3', damageType: '挥砍', weight: '6磅', properties: ['重型', '双手', '魔法'], category: 'magic', rarity: 'veryrare', bonus: 3, type: 'melee' },
        { name: '+3 长弓', nameEn: '+3 Longbow', cost: '16000gp', damage: '1d8+3', damageType: '穿刺', weight: '2磅', properties: ['弹药(150/600)', '重型', '双手', '魔法'], category: 'magic', rarity: 'veryrare', bonus: 3, type: 'ranged' }
    ],
    // 特殊魔法武器
    magicSpecial: [
        { name: '火焰之剑', nameEn: 'Flame Tongue', cost: '5000gp', damage: '1d8', damageType: '挥砍+2d6火焰', weight: '3磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'rare', special: '火焰', type: 'melee', description: '说出命令词后，剑刃被火焰包围，额外造成2d6火焰伤害' },
        { name: '冰霜之刃', nameEn: 'Frost Brand', cost: '5000gp', damage: '1d8', damageType: '挥砍+1d6冷冻', weight: '3磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'rare', special: '冷冻', type: 'melee', description: '攻击命中时额外造成1d6冷冻伤害，持有者获得火焰抗性' },
        { name: '闪电标枪', nameEn: 'Javelin of Lightning', cost: '1500gp', damage: '1d6', damageType: '穿刺+4d6闪电', weight: '2磅', properties: ['投掷(30/120)', '魔法'], category: 'magic', rarity: 'uncommon', special: '闪电', type: 'melee', description: '投掷时释放5尺宽120尺长的闪电束，范围内生物受4d6闪电伤害' },
        { name: '神圣复仇者', nameEn: 'Holy Avenger', cost: '50000gp', damage: '2d6', damageType: '挥砍+2d10光耀', weight: '6磅', properties: ['重型', '双手', '魔法'], category: 'magic', rarity: 'legendary', special: '神圣', type: 'melee', description: '圣武士专用，攻击命中时额外造成2d10光耀伤害，30尺内盟友对法术豁免具有优势' },
        { name: '毒蛇之牙', nameEn: 'Dagger of Venom', cost: '2500gp', damage: '1d4', damageType: '穿刺+2d10毒素', weight: '1磅', properties: ['轻型', '灵巧', '投掷(20/60)', '魔法'], category: 'magic', rarity: 'rare', special: '毒素', type: 'melee', description: '说出命令词后，刀刃涂毒，命中时目标受2d10毒素伤害' },
        { name: '雷霆之锤', nameEn: 'Mace of Disruption', cost: '8000gp', damage: '1d6', damageType: '钝击+2d6光耀', weight: '4磅', properties: ['魔法'], category: 'magic', rarity: 'rare', special: '神圣', type: 'melee', description: '攻击不死生物或邪魔时额外造成2d6光耀伤害，若目标生命值低于25则可能被摧毁' },
        { name: '风之弯刀', nameEn: 'Scimitar of Speed', cost: '10000gp', damage: '1d6+1', damageType: '挥砍', weight: '3磅', properties: ['轻型', '灵巧', '魔法'], category: 'magic', rarity: 'veryrare', special: '速度', type: 'melee', description: '每回合可以进行一次额外的武器攻击作为附赠动作' },
        { name: '巨人杀手', nameEn: 'Giant Slayer', cost: '7000gp', damage: '1d8', damageType: '挥砍', weight: '3磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'rare', special: '巨人杀手', type: 'melee', description: '攻击巨人时命中检定具有优势，命中后若巨人未通过力量豁免则倒地' },
        { name: '龙杀手', nameEn: 'Dragon Slayer', cost: '8000gp', damage: '1d8', damageType: '挥砍+3d6', weight: '3磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'rare', special: '龙杀手', type: 'melee', description: '攻击龙类生物时额外造成3d6伤害' },
        { name: '幸运之刃', nameEn: 'Luck Blade', cost: '20000gp', damage: '1d6', damageType: '穿刺', weight: '2磅', properties: ['轻型', '灵巧', '魔法'], category: 'magic', rarity: 'legendary', special: '幸运', type: 'melee', description: '持有者获得所有豁免检定+1加值，且可以许愿（1d4-1次）' },
        { name: '九命夺魂者', nameEn: 'Nine Lives Stealer', cost: '8000gp', damage: '2d6', damageType: '挥砍', weight: '6磅', properties: ['重型', '双手', '魔法'], category: 'magic', rarity: 'veryrare', special: '即死', type: 'melee', description: '造成致命一击时，若目标生命值低于100且未通过体质豁免则立即死亡（1d8+1次充能）' },
        { name: '锐锋之剑', nameEn: 'Sword of Sharpness', cost: '1700gp', damage: '1d8+1', damageType: '挥砍', weight: '3磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'rare', special: '锐锋', type: 'melee', description: '造成致命一击时额外造成4d6伤害，且有概率切断肢体' },
        { name: '生命窃取者', nameEn: 'Sword of Life Stealing', cost: '5000gp', damage: '1d8', damageType: '挥砍+3d6黯蚀', weight: '3磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'rare', special: '生命窃取', type: 'melee', description: '造成致命一击时额外造成3d6黯蚀伤害，你获得等于该伤害的临时生命值' },
        { name: '应答之盾', nameEn: 'Defender', cost: '18000gp', damage: '1d8+3', damageType: '挥砍', weight: '3磅', properties: [' versatile(1d10)', '魔法'], category: 'magic', rarity: 'legendary', special: '防御', type: 'melee', description: '每回合可以将武器的攻击加值转移到AC上（最多+3）' }
    ]
};

// 武器属性说明
const WEAPON_PROPERTIES = {
    '轻型': '轻型武器适合双持，使用两把轻型武器时可以进行双武器战斗。',
    '重型': '重型武器需要一定的力量才能有效使用。小型生物使用重型武器时攻击检定具有劣势。',
    '灵巧': '使用灵巧武器时，你可以选择使用力量或敏捷调整值进行攻击和伤害检定。',
    '双手': '使用双手武器需要两只手。',
    ' versatile': ' versatile武器可以单手或双手使用。双手使用时伤害骰增大。',
    '触及': '触及武器可以攻击10尺外的目标，而非通常的5尺。',
    '投掷': '投掷武器可以投掷出去进行远程攻击。',
    '弹药': '弹药武器需要弹药才能使用。',
    '装填': '装填武器每回合只能发射一次，即使你有多次攻击能力。',
    '特殊': '特殊武器有特殊的规则。',
    '隐蔽': '隐蔽武器易于隐藏。'
};

// 导出武器数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WEAPONS, WEAPON_PROPERTIES };
}
