// D&D 5E 语言数据

const LANGUAGES = {
    common: { name: '通用语', nameEn: 'Common', description: '大多数文明种族使用的通用语言。' },
    dwarvish: { name: '矮人语', nameEn: 'Dwarvish', description: '矮人使用的语言，有着复杂的语法和深厚的喉音。' },
    elvish: { name: '精灵语', nameEn: 'Elvish', description: '精灵使用的优美语言，有着流畅的语调和复杂的语法结构。' },
    giant: { name: '巨人语', nameEn: 'Giant', description: '巨人使用的原始语言，词汇简单但表达力强。' },
    gnomish: { name: '侏儒语', nameEn: 'Gnomish', description: '侏儒使用的技术性语言，包含大量关于机械和魔法的术语。' },
    goblin: { name: '地精语', nameEn: 'Goblin', description: '地精类生物使用的粗俗语言。' },
    halfling: { name: '半身人语', nameEn: 'Halfling', description: '半身人使用的温和语言，充满家庭和田园词汇。' },
    orc: { name: '兽人语', nameEn: 'Orc', description: '兽人使用的粗犷语言，充满喉音和爆破音。' },
    abyssal: { name: '深渊语', nameEn: 'Abyssal', description: '邪魔使用的邪恶语言，听起来如同恶魔的嘶吼。' },
    celestial: { name: '天界语', nameEn: 'Celestial', description: '天界生物使用的神圣语言，有着悦耳的音调。' },
    draconic: { name: '龙语', nameEn: 'Draconic', description: '龙类使用的古老语言，被认为是最古老的魔法语言之一。' },
    infernal: { name: '炼狱语', nameEn: 'Infernal', description: '魔鬼使用的语言，有着复杂的语法和恶魔般的韵律。' },
    primordial: { name: '原初语', nameEn: 'Primordial', description: '元素生物使用的原始语言，分为四种方言：风之语、水之语、火之语和土之语。' },
    sylvan: { name: '木精语', nameEn: 'Sylvan', description: '妖精和木林生物使用的语言，与精灵语有相似之处。' },
    undercommon: { name: '地底通用语', nameEn: 'Undercommon', description: '幽暗地域生物使用的混合语言，融合了多种语言的元素。' },
    deepspeech: { name: '深地语', nameEn: 'Deepspeech', description: '夺心魔和其他地底生物使用的语言。' },
    gith: { name: '吉斯语', nameEn: 'Gith', description: '吉斯洋基和吉斯瑟雷使用的语言。' },
    gnoll: { name: '鬣狗人语', nameEn: 'Gnoll', description: '鬣狗人使用的野蛮语言。' },
    aarakocra: { name: '鹰身人语', nameEn: 'Aarakocra', description: '鹰身人使用的语言，包含大量鸣叫和颤音。' },
    abyssal: { name: '深渊语', nameEn: 'Abyssal', description: '邪魔使用的邪恶语言。' },
    aquan: { name: '水元素语', nameEn: 'Aquan', description: '水元素生物使用的语言，是原初语的方言。' },
    auran: { name: '风元素语', nameEn: 'Auran', description: '风元素生物使用的语言，是原初语的方言。' },
    ignan: { name: '火元素语', nameEn: 'Ignan', description: '火元素生物使用的语言，是原初语的方言。' },
    terran: { name: '土元素语', nameEn: 'Terran', description: '土元素生物使用的语言，是原初语的方言。' }
};

// 种族初始语言
const RACE_LANGUAGES = {
    human: ['common'],
    hill_dwarf: ['common', 'dwarvish'],
    mountain_dwarf: ['common', 'dwarvish'],
    high_elf: ['common', 'elvish'],
    wood_elf: ['common', 'elvish'],
    lightfoot_halfling: ['common', 'halfling'],
    stout_halfling: ['common', 'halfling'],
    forest_gnome: ['common', 'gnomish'],
    rock_gnome: ['common', 'gnomish'],
    half_elven: ['common', 'elvish'],
    half_orc: ['common', 'orc'],
    tiefling: ['common', 'infernal'],
    dragonborn: ['common', 'draconic'],
    aasimar: ['common', 'celestial'],
    goliath: ['common', 'giant'],
    tabaxi: ['common', 'sylvan'],
    triton: ['common', 'primordial'],
    genasi: ['common', 'primordial'],
    firbolg: ['common', 'elvish', 'giant'],
    kenku: ['common'],
    lizardfolk: ['common', 'draconic'],
    tortle: ['common'],
    bugbear: ['common', 'goblin'],
    goblin: ['common', 'goblin'],
    hobgoblin: ['common', 'goblin'],
    kobold: ['common', 'draconic'],
    orc: ['common', 'orc'],
    yuan_t_pureblood: ['common', 'undercommon']
};

// 背景初始语言
const BACKGROUND_LANGUAGES = {
    acolyte: 2,
    criminal: 0,
    folk_hero: 0,
    noble: 0,
    sage: 2,
    soldier: 0,
    urchin: 0,
    charlatan: 0,
    entertainer: 0,
    gladiator: 0,
    guild_artisan: 0,
    hermit: 1,
    outlander: 1,
    sailor: 0,
    scholar: 2,
    pirate: 0,
    soldier: 0
};

// 职业初始语言
const CLASS_LANGUAGES = {
    wizard: 0, // 法师可以选择任何语言
    cleric: 0, // 牧师可以选择天界语等
    druid: 0, // 德鲁伊可以选择木精语
    fighter: 0,
    rogue: 0,
    paladin: 0,
    ranger: 0,
    bard: 0,
    sorcerer: 0,
    warlock: 0,
    monk: 0,
    barbarian: 0,
    artificer: 0,
    pugilist: 0
};

// 导出语言数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LANGUAGES, RACE_LANGUAGES, BACKGROUND_LANGUAGES, CLASS_LANGUAGES };
}
