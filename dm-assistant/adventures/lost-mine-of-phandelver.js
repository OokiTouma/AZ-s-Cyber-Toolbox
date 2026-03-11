const joinParas = (...paragraphs) => paragraphs.join('\n\n');

const buildStorySummary = ({ background = '', trajectory = [], hiddenInfo = [], impact = '' }) => ({
    background,
    trajectory,
    hiddenInfo,
    impact
});

const buildClues = ({ obvious = [], hidden = [], misleading = [], rewards = [] }) => ({
    obvious,
    hidden,
    misleading,
    rewards
});

const buildDmTips = ({
    tableFlow = [],
    pacing = '',
    pacingBeats = [],
    ambience = [],
    sensoryDetails = {},
    contingency = [],
    contingencyDetails = {},
    lessons = [],
    commonMistakes = [],
    variantIdeas = [],
    spotlightMoments = [],
    music = []
}) => ({
    tableFlow,
    pacing,
    pacingBeats,
    ambience,
    sensoryDetails,
    contingency,
    contingencyDetails,
    lessons,
    commonMistakes,
    variantIdeas,
    spotlightMoments,
    music
});

const GOBLIN_BASE = { hp: '7 (2d6)', ac: 15, initiative: 2, speed: '30 尺', challenge: '1/4 (50 XP)', stats: '力 8 敏 14 体 10 智 10 感 8 魅 8', skills: '隐匿 +6', senses: '黑暗视觉 60 尺，被动察觉 9', languages: '通用语、地精语' };
const WOLF_BASE = { hp: '11 (2d8+2)', ac: 13, initiative: 2, speed: '40 尺', challenge: '1/4 (50 XP)', stats: '力 12 敏 15 体 12 智 3 感 12 魅 6', skills: '察觉 +3，隐匿 +4', senses: '被动察觉 13', languages: '—' };
const BUGBEAR_BASE = { hp: '27 (5d8+5)', ac: 16, initiative: 2, speed: '30 尺', challenge: '1 (200 XP)', stats: '力 15 敏 14 体 13 智 8 感 11 魅 9', skills: '隐匿 +6', senses: '黑暗视觉 60 尺，被动察觉 10', languages: '通用语、地精语' };
const REDBRAND_BASE = { hp: '16 (3d8+3)', ac: 14, initiative: 1, speed: '30 尺', challenge: '1/2 (100 XP)', stats: '力 11 敏 12 体 12 智 10 感 10 魅 10', senses: '被动察觉 10', languages: '通用语' };
const NOTHIC_BASE = { hp: '45 (6d8+18)', ac: 15, initiative: 3, speed: '30 尺', challenge: '2 (450 XP)', stats: '力 14 敏 16 体 16 智 13 感 10 魅 8', senses: '黑暗视觉 120 尺，真实视觉，被动察觉 10', languages: '地底语' };
const ZOMBIE_BASE = { hp: '22 (3d8+9)', ac: 8, initiative: -2, speed: '20 尺', challenge: '1/4 (50 XP)', stats: '力 13 敏 6 体 16 智 3 感 6 魅 5', senses: '黑暗视觉 60 尺，被动察觉 8', languages: '理解生前语言但不会说' };
const ORC_BASE = { hp: '15 (2d8+6)', ac: 13, initiative: 1, speed: '30 尺', challenge: '1/2 (100 XP)', stats: '力 16 敏 12 体 16 智 7 感 11 魅 10', senses: '黑暗视觉 60 尺，被动察觉 10', languages: '通用语、兽人语' };
const HOBGOBLIN_BASE = { hp: '11 (2d8+2)', ac: 18, initiative: 1, speed: '30 尺', challenge: '1/2 (100 XP)', stats: '力 13 敏 12 体 12 智 10 感 10 魅 9', senses: '黑暗视觉 60 尺，被动察觉 10', languages: '通用语、地精语' };
const DOPPELGANGER_BASE = { hp: '52 (8d8+16)', ac: 14, initiative: 4, speed: '30 尺', challenge: '3 (700 XP)', stats: '力 11 敏 18 体 14 智 11 感 12 魅 14', skills: '洞悉 +3，欺瞒 +6', senses: '黑暗视觉 60 尺，被动察觉 11', languages: '通用语' };
const SKELETON_BASE = { hp: '13 (2d8+4)', ac: 13, initiative: 2, speed: '30 尺', challenge: '1/4 (50 XP)', stats: '力 10 敏 14 体 15 智 6 感 8 魅 5', senses: '黑暗视觉 60 尺，被动察觉 9', languages: '理解生前语言但不会说' };
const GIANT_SPIDER_BASE = { hp: '26 (4d10+4)', ac: 14, initiative: 3, speed: '30 尺，攀爬 30 尺', challenge: '1 (200 XP)', stats: '力 14 敏 16 体 12 智 2 感 11 魅 4', senses: '盲视 10 尺，黑暗视觉 60 尺，被动察觉 10', languages: '—' };
const BLACK_SPIDER_BASE = { hp: '27 (6d8)', ac: 15, initiative: 3, speed: '30 尺', challenge: '2 (450 XP)', stats: '力 9 敏 14 体 10 智 17 感 13 魅 12', skills: '奥秘 +5，察觉 +3，隐匿 +4', senses: '黑暗视觉 120 尺，被动察觉 13', languages: '精灵语、地底语、通用语' };
const YOUNG_GREEN_DRAGON_BASE = { hp: '136 (16d10+48)', ac: 18, initiative: 0, speed: '40 尺，飞行 80 尺，游泳 40 尺', challenge: '8 (3900 XP)', stats: '力 19 敏 12 体 17 智 16 感 13 魅 15', skills: '欺瞒 +6，察觉 +7，隐匿 +4', senses: '盲视 30 尺，黑暗视觉 120 尺，被动察觉 17', languages: '通用语、龙语' };
const PSIONIC_GOBLIN_BASE = { hp: '16 (3d6+6)', ac: 15, initiative: 2, speed: '30 尺', challenge: '1/2 (100 XP)', stats: '力 8 敏 14 体 14 智 10 感 8 魅 10', skills: '隐匿 +6', senses: '黑暗视觉 60 尺，被动察觉 9', languages: '通用语、地精语' };
const ASHENWIGHT_BASE = { hp: '45 (6d8+18)', ac: 14, initiative: 2, speed: '30 尺', challenge: '3 (700 XP)', stats: '力 14 敏 12 体 16 智 8 感 10 魅 8', senses: '黑暗视觉 60 尺，被动察觉 10', languages: '理解生前语言但很少开口' };
const SHIELD_GUARDIAN_BASE = { hp: '142 (15d10+60)', ac: 17, initiative: 0, speed: '30 尺', challenge: '7 (2900 XP)', stats: '力 18 敏 8 体 18 智 7 感 10 魅 3', senses: '盲视 10 尺，被动察觉 10', languages: '理解主人的命令' };
const ABERRANT_ZEALOT_BASE = { hp: '33 (6d8+6)', ac: 13, initiative: 1, speed: '30 尺', challenge: '2 (450 XP)', stats: '力 12 敏 12 体 13 智 10 感 11 魅 12', senses: '黑暗视觉 60 尺，被动察觉 10', languages: '通用语、地底语' };
const DROW_ELITE_BASE = { hp: '71 (11d8+22)', ac: 18, initiative: 4, speed: '30 尺', challenge: '5 (1800 XP)', stats: '力 13 敏 18 体 14 智 11 感 13 魅 12', skills: '察觉 +5，隐匿 +10', senses: '黑暗视觉 120 尺，被动察觉 15', languages: '精灵语、地底语、通用语' };
const GRELL_BASE = { hp: '55 (10d10)', ac: 12, initiative: 3, speed: '10 尺，飞行 30 尺', challenge: '3 (700 XP)', stats: '力 15 敏 14 体 11 智 12 感 13 魅 9', senses: '盲视 60 尺，被动察觉 11', languages: '地底语' };
const MIND_FLAYER_BASE = { hp: '71 (13d8+13)', ac: 15, initiative: 1, speed: '30 尺', challenge: '7 (2900 XP)', stats: '力 11 敏 12 体 12 智 19 感 17 魅 17', skills: '奥秘 +7，洞悉 +6，隐匿 +4', senses: '黑暗视觉 120 尺，被动察觉 13', languages: '深语、地底语、心灵感应 120 尺' };
const SPECTATOR_BASE = { hp: '39 (6d8+12)', ac: 14, initiative: 1, speed: '0 尺，飞行 30 尺', challenge: '3 (700 XP)', stats: '力 8 敏 14 体 14 智 13 感 14 魅 11', senses: '黑暗视觉 120 尺，被动察觉 16', languages: '深语、通用语' };
const ILVAASH_ECHO_BASE = { hp: '168 (16d10+80)', ac: 18, initiative: 4, speed: '0 尺，飞行 40 尺', challenge: '12 (8400 XP)', stats: '力 18 敏 18 体 20 智 19 感 18 魅 20', skills: '奥秘 +8，洞悉 +8，察觉 +8', senses: '真实视觉 120 尺，被动察觉 18', languages: '深语、心灵感应 120 尺' };

const LOST_MINE_OF_PHANDELVER = {
    id: 'lost-mine-of-phandelver',
    name: '凡戴尔的失落矿坑',
    description: '面向桌边带团的《凡戴尔的失落矿坑》增强版作战包：统一正式译名，并补强凡达林前四章的朗读文本、NPC 扮演、线索分层与战斗预案。',
    recommendedLevel: '1-5 级',
    tone: ['护送伏击', '城镇阴谋', '开放调查', '矿坑终局'],
    chapters: [
        {
            id: 'lmp-part-1',
            title: '第一章：通往凡达林的道路',
            summary: '从无冬城酒馆里的晚餐委托起步，迅速切进伏击、追踪与克拉摩窝点救援，让玩家意识到自己卷入了一件远比护送更大的事。',
            scenes: [
                {
                    id: 'lmp-1-gundren-commission',
                    title: '酒馆里的晚餐委托',
                    location: '无冬城南门的“海雾酒馆”',
                    mood: '热络、兴奋、带着刻意压住的秘密',
                    tags: ['委托', '晚餐', '启程', '秘密'],
                    narration: joinParas('海雾酒馆正是晚餐最热闹的时候：木杯碰撞，烤肉滋滋作响，旅人们把一路的尘土和疲惫一并倒进啤酒里。就在这片喧闹中央，甘德伦·寻岩者已经替你们把桌子摆满，像是生怕这顿饭还没开始，庆功宴的气氛就先散掉了。', '甘德伦把杯子往桌上一放，笑得胡子都在抖：\n“来，先吃，先喝。明天一早，你们替我把一车矿工补给和勘探用品送去凡达林。”\n他又把声音压低一点，补上一句：\n“到了地方，报酬少不了。至于为什么是现在……等到了凡达林，你们就知道这趟差事值不值了。”', '修达·霍温特始终坐得笔直，目光不时扫过门口和窗边。等主菜吃到一半，甘德伦忽然站起身披上斗篷：\n“修达，我们先走一步，去把接货和住处安排好。”\n他随手把 5 枚金币拍在柜台上，对老板玛拉·铜杯大声道：\n“他们今晚加菜加酒，都记我账上！”\n说完，他带着压不住的兴奋，也带着一点说不清的急迫，先行离开了酒馆。'),
                    summary: '把护送任务包装成一次热络的晚餐委托，同时用甘德伦的提前离开和压低声量把主线悬念立起来。',
                    storySummary: buildStorySummary({ background: '甘德伦雇佣队伍把物资送往凡达林，自己与修达提前动身，为接下来的矿坑计划抢时间。', trajectory: ['若玩家追问，可得知凡达林近来并不安稳，红标帮与物资失踪都在恶化。', '若玩家顺势接单，氛围会从热闹酒馆自然切换到“人刚走就出事”的冒险开场。'], hiddenInfo: ['甘德伦已经接近失落矿坑的关键线索。', '他怕消息传到黑蜘蛛和竞争者耳中，所以宁愿把重要内容留到凡达林再说。'], impact: '这场景决定玩家会把后续危机当作普通劫案，还是当成一场早已有人盯上的大事。' }),
                    roleplayTips: [
                        { npc: '甘德伦·寻岩者', role: '雇主 / 兴奋过头的矿工领袖', voice: '中高音，语速快，总像压不住喜悦。', speech: '常用“到了凡达林再说”“这次真的要成了”收尾。', bodyLanguage: '端杯劝酒、拍桌大笑、说到关键处又忽然压低声音。', personality: '热情、务实、保密意识不足。', motivation: '抢在所有人前面把线索变成真正的矿坑发现。', fear: '秘密泄露、被人抢先。', emotionalBeat: '兴奋', responses: { friendly: '会多说一些凡达林近况和自己的期待。', suspicious: '立刻收口，只说“到镇上再谈”。' } },
                        { npc: '修达·霍温特', role: '护送同伴 / 老练军人', voice: '低沉稳重，句子短。', speech: '把重点放在路线、安全和责任。', bodyLanguage: '坐姿笔直，眼神总在扫门口、窗边和邻桌。', personality: '克制、可靠、观察力强。', motivation: '保证甘德伦安全抵达，并调查凡达林局势。', fear: '队伍准备不足，凡达林比传闻更糟。', responses: { friendly: '会给出很实际的防伏击建议。', aggressive: '态度转冷，强调任务纪律。' } },
                        { npc: '玛拉·铜杯', role: '海雾酒馆老板', voice: '麻利、爽快，像永远知道哪桌该添酒。', speech: '记账比寒暄快，听见“大方雇主”就会露出职业笑容。', bodyLanguage: '一边擦杯子一边竖着耳朵听客人动静。', personality: '精明、圆滑、见多识广。', motivation: '让酒馆平安做生意，也记住每一笔该收的钱。', fear: '酒馆里闹出伤人见血的大乱子。', responses: { friendly: '愿意告诉玩家甘德伦最近几次来店都心神不宁。', suspicious: '会只谈账单，不谈客人的事。' } }
                    ],
                    playerClues: buildClues({ obvious: ['甘德伦把你们当成值得拉拢的“伙伴”，不只是临时苦力。', '他公开留下 5GP 给老板记账，说明这顿饭和你们接下来的好感投资都在他的计划里。'], hidden: ['仔细检查随车清单能发现测绘纸、矿工工具与勘探器具。', '追问凡达林近况会听到红标帮、失踪物资与镇上不太平的传闻。'], misleading: ['甘德伦会故意把整件事说成“普通护送”。'], rewards: ['让玩家在出发前补足口粮、绳索和火把，会让后续追踪与地城段更顺。'] }),
                    branchPrompts: [
                        { choice: '边吃边继续追问秘密', outcome: '能强化矿坑悬念，但不要把谜底说穿。', risk: '说太多会削弱后续调查。', reward: '玩家更主动追查失踪案。' },
                        { choice: '顺势接下委托、好好吃完这顿饭', outcome: '开场更自然，先建立队伍与雇主的关系。', risk: '悬念会更依赖甘德伦突然离席来抬高。', reward: '第一章情绪铺垫更足。' }
                    ],
                    dmTips: buildDmTips({ tableFlow: ['先让甘德伦请客，把“被照顾”的感觉做出来，再讲任务、目的地和报酬。', '用甘德伦突然提前离席、修达始终警觉和老板收下 5GP 来暗示事情没那么简单。'], pacing: '控制在 10 到 15 分钟内：先轻松用餐，再把剧情推到“雇主先走一步”。', pacingBeats: ['先给热闹酒馆与请客吃饭的轻松印象。', '再用压低声音与提前离席抬高风险。'], ambience: ['酒杯碰撞、烤肉香、旅人喧哗。', '热闹中夹着甘德伦几次不自然的停顿和修达的警觉扫视。'], sensoryDetails: { sound: '木杯碰撞、酒客笑声和楼下厨火噼啪作响。', light: '暖黄烛火把每个人的表情都映得比白天更近。', smell: '烤肉、麦酒、胡椒和湿斗篷带进来的冷空气。' }, contingency: ['玩家不追问也没关系，让甘德伦留下“到了凡达林再说”的钩子。', '若他们拖太久，用修达提醒夜路和行程，促成甘德伦先行离开。'], lessons: ['开场要给目标，也要给一个暂时说不透的谜。'], music: ['热闹酒馆', '低强度悬念弦乐'] }),
                    combat: null,
                    nextScenes: ['lmp-1-tavern-dice-game', 'lmp-1-cart-ambush']
                },
                {
                    id: 'lmp-1-tavern-dice-game',
                    title: '酒馆里的双倍赌局',
                    location: '无冬城南门的“海雾酒馆”',
                    mood: '热闹表象下的试探与可疑好运',
                    tags: ['社交', '赌博', '调查', '暗示'],
                    narration: joinParas('甘德伦和修达前脚刚走，邻桌的喧闹立刻显得格外清楚。两个冒险者把木杯倒扣当赌盅，骨骰在桌面上弹得啪啪作响；其中一个已经把钱袋翻得只剩几枚铜币，最后甚至把自己的长剑也咬牙压上了桌。', '又输了一把后，那倒霉家伙猛地拍桌起身：\n“你这走运也太邪门了！”\n他一脚踢开椅子，空着剑鞘冲出酒馆。赢得盆满钵满的那位则慢悠悠收起钱袋和长剑，脸上的笑意像只刚吃饱的狐狸。', '那人把骨骰往你们桌上一抛，语气熟得像老朋友：\n“几位，要不要来两把？今晚我手气正旺，跟你们玩双倍赌注。”\n如果有人盯着他的手看久一点，就会发现一件事——从他摸到那对骨骰开始，他的指尖就几乎没真正离开过它们。'),
                    summary: '这是一个轻松开场后的试探场景：既能让玩家在出发前小赌一把，也能用一次出千暗示“别把看似偶然的事全当运气”。',
                    storySummary: buildStorySummary({ background: '甘德伦离席后，酒馆的杂音重新占满舞台，而邻桌赌局给了玩家一次在真正上路前体验风险与判断力的小机会。', trajectory: ['若玩家接局，先让他们感受热闹和自信，再在输局后递出“有点不对劲”的暗示。', '若玩家拆穿作弊，这个场景会变成一段关于谨慎与观察的前置教学。'], hiddenInfo: ['赢家靠一套带魔法的骰子在酒馆里专挑外地人下手。', '他不想把事情闹大，因为一旦被搜出骰子，他今晚赢的东西大半都保不住。'], impact: '这个场景能让第一章在上路前多一层生活感，也给玩家一个用技能主动发现异常的理由。' }),
                    roleplayTips: [
                        { npc: '雷姆·双骰', role: '自来熟的赌徒 / 出千者', voice: '轻快、亲热，像跟谁都能立刻称兄道弟。', speech: '常把“手气”“翻倍”“就玩两把”挂在嘴边。', bodyLanguage: '手指总爱把骰子在指节间来回拨弄，笑得太从容。', personality: '机灵、贪心、懂得见风使舵。', motivation: '趁旅人上路前骗一笔大的。', fear: '被当众拆穿并搜出魔法骰子。', responses: { friendly: '会故意表现得像个豪爽赌友。', suspicious: '会立刻想用钱息事宁人。' } },
                        { npc: '博伦·断鞘', role: '输光钱的倒霉冒险者', voice: '沙哑、恼火、酒意上头。', speech: '骂人比讲道理快，离开前会扔下一句“他那骰子不干净”。', bodyLanguage: '输掉长剑后整个人绷得像快断掉的弓弦。', personality: '冲动、好面子、输不起。', motivation: '赶紧离开这张让自己丢尽脸的桌子。', fear: '被更多人看笑话。', responses: { friendly: '若有人追出去，能补一句“那混蛋的手从不离骰子”。' } }
                    ],
                    playerClues: buildClues({ obvious: ['刚才那名冒险者不只输光了钱，连自己的长剑都输掉了。', '雷姆太积极地想让玩家接双倍赌注，像是早就挑好了下一桌。'], hidden: ['若玩家在输掉一轮后起疑，可进行 DC 13 奥秘或调查检定，发现骰子上附着微弱魔法，点数会在掌中悄悄偏转。', '若有人追出酒馆找博伦，他会含糊抱怨“那骰子不干净，只是我抓不到证据”。'], misleading: ['雷姆会把一切都包装成单纯手气和胆量。'], rewards: ['若拆穿雷姆，他会拿出 70GP 和刚赢来的那把长剑当封口费，求玩家别把事情闹大。'] }),
                    branchPrompts: [
                        { choice: '接受双倍赌注', outcome: '场景会立刻进入输赢与怀疑交织的试探。', risk: '玩家可能先赔进去一笔钱。', reward: '最容易触发对魔法骰子的调查。' },
                        { choice: '先观察几轮再上桌', outcome: '更稳，也更像在抓破绽。', risk: '雷姆会故意催促，想打乱节奏。', reward: '更容易给出“这人手法太熟练”的前置印象。' },
                        { choice: '输局后当场质疑', outcome: '戏剧张力最高。', risk: '若没有证据，可能先变成口角。', reward: '查出真相后能立刻获得 70GP 与长剑的封口提案。' }
                    ],
                    dmTips: buildDmTips({ tableFlow: ['先演完邻桌输光钱又赔上长剑的过程，再让雷姆端着赢来的兴头走到玩家桌边。', '开始赌局前先讲清楚赌注；若玩家输了，再给出“他这好运有点过头”的异常感。'], pacing: '这是一段 5 到 10 分钟的小插曲：先轻松，再起疑，最后决定是收钱封口还是把事闹开。', pacingBeats: ['先让玩家觉得这只是普通酒馆趣闻。', '再用离谱连胜和输家抱怨把怀疑抬起来。', '最后把 DC 13 奥秘 / 调查与 70GP + 长剑的封口费作为结尾钩子。'], ambience: ['骰子敲木桌的脆响、酒客起哄、赢钱后那种过分轻松的笑。'], sensoryDetails: { sound: '骨骰撞击桌面的声音在热闹酒馆里格外清脆。', light: '烛火会在骰面上打出一瞬间不自然的冷亮。', smell: '麦酒、旧皮甲和桌上洒开的烈酒混在一起。' }, contingency: ['若玩家完全不想赌，让雷姆随口炫耀今晚连长剑都赢来了，当作一个带生活感的收尾。', '若玩家赢了第一把，雷姆会立刻提议再来一轮双倍或三倍，试图把局拖回自己熟悉的节奏。'], contingencyDetails: { missedClues: '若玩家输了却没起疑，让博伦在酒馆门口骂一句“他那对骰子迟早会害死人”。', earlyReveal: '若玩家一开始就盯骰子，可允许更早进行 DC 13 奥秘或调查检定。', refusal: '若玩家拒绝参赌，雷姆会悻悻离开，但仍能让玩家记住“这家伙过于殷勤”。' }, lessons: ['生活化小场景最适合教玩家：失败后不一定只能认栽，还可以追查“为什么会失败”。'], music: ['热闹酒馆', '轻度诡计'] }),
                    combat: null,
                    nextScenes: ['lmp-1-cart-ambush']
                },
                {
                    id: 'lmp-1-cart-ambush',
                    title: '马车伏击',
                    location: '通往凡达林的林间道路',
                    mood: '骤然收紧',
                    tags: ['伏击', '战斗', '追踪'],
                    narration: joinParas('再往凡达林去的林间道路上，两匹熟悉的马横倒在路中央，黑羽箭还扎在皮革和鬃毛里。四周一下安静得不正常，只剩风吹过树叶的干响。', '翻倒的鞍袋里散落着干粮、地图碎片和一只断开的酒囊，路边泥土被拖出两道凌乱长痕，一直没入林子深处。这里看起来不像单纯的抢劫，更像一次有目标、有准备的劫持。', '林子里没有喊叫，也没有脚步声。那种安静反而像一张已经拉开的弓——你们知道，有东西正躲在树影后看着你们，等你们自己走进杀伤区。'),
                    summary: '确认甘德伦与修达遭遇袭击，并把“追还是不追”变成第一章的第一个主动选择。',
                    storySummary: buildStorySummary({ background: '哥布林在路上截获了甘德伦和修达，留下明显但不完整的线索。', trajectory: ['打完伏击后，玩家应发现有人被活捉。', '下一步要么立刻追踪，要么先做短暂整备。'], hiddenInfo: ['哥布林受上层势力驱使，不只是抢劫。'], impact: '这一场决定玩家会不会把主线节奏推得很快。' }),
                    roleplayTips: [{ npc: '哥布林伏击者', role: '惊慌但狡猾的基层劫匪', voice: '尖细、急促，像随时准备跑。', speech: '更像嘶嘶低语和短促命令，不喜欢长句。', bodyLanguage: '弓拉得很快，射完立刻换掩体。', personality: '欺软怕硬，依赖地形。', motivation: '完成抓人任务后活着撤离。', fear: '近战缠住、失去掩体。', responses: { fearful: '一旦被单独抓住，很容易把据点方向招出来。', aggressive: '会一边辱骂一边后撤，不愿硬拼。' } }],
                    playerClues: buildClues({ obvious: ['马匹属于甘德伦和修达。', '拖拽痕迹说明至少有人被活捉。'], hidden: ['箭羽和脚印指向同一条隐蔽小径。', '若检查现场，会发现敌人埋伏时选了绝佳交叉射界。'], misleading: ['现场看上去像随机劫案，但目标显然是人而不是货。'], rewards: ['若活捉一名哥布林，可直接获得据点和哨兵情报。'] }),
                    branchPrompts: [
                        { choice: '战后立刻追踪', outcome: '把压力直接带进小径与据点。', risk: '队伍可能来不及整备。', reward: '敌人更难重新布防。' },
                        { choice: '先搜索再追', outcome: '能多拿信息与战利品。', risk: '据点警戒会更高。', reward: '线索更完整。' }
                    ],
                    dmTips: buildDmTips({ tableFlow: ['先允许玩家观察，再触发箭雨。', '战斗结束后立刻把焦点切回现场调查。'], pacing: '描述慢一点，开打要快，收尾也要快。', ambience: ['死马、黑羽箭、压抑树林。'], sensoryDetails: { sound: '林中太安静，反而衬得箭矢破风声刺耳。', smell: '血腥味和湿土味混在一起。' }, contingency: ['玩家不追踪时，把小径痕迹描写得更明显。'], lessons: ['开场战斗必须服务主线，而不是只为了热身。'], music: ['伏击鼓点'] }),
                    combat: {
                        title: '哥布林箭雨',
                        objective: '击退伏击者，确认俘虏被带向林中据点。',
                        stakes: '这一战的价值不在经验值，而在让玩家立刻意识到任务已经升级。',
                        recommendedLevel: '1 级',
                        difficulty: 'standard',
                        terrain: ['死马与货车残骸提供半掩护。', '道路两侧灌木和树干形成交叉火力。', '林缘狭窄，前排若贸然冲锋容易被分割。'],
                        terrainDetails: { cover: ['死马后方是最明显的临时掩体。', '右侧低树丛可以让灵巧角色贴近敌人。'], hazards: ['站在道路中央会暴露在全部射界中。'], chokepoints: ['狭路限制多人并排前推。'], interactables: ['货箱可推倒成更好的掩体。'] },
                        tactics: ['哥布林优先射击最暴露的目标。', '若被逼近就后撤并尝试隐藏。'],
                        tacticsPhases: { opening: '四名哥布林分散在树后，争取第一轮齐射。', firstRound: '优先点名没有掩体的施法者或远程角色。', midFight: '失去位置优势后立刻撤向树林，不恋战。', emergency: '半数倒下时，剩余者试图逃往小径方向。' },
                        difficultyAdjustments: { easy: '改为 3 名哥布林，且第一轮不集中火力。', standard: '4 名哥布林按模组标准伏击。', hard: '在后排加 1 名高处射手。' },
                        dynamicAdjustments: ['若队伍连续吃箭，可让哥布林过早暴露位置。'],
                        rewards: ['小径方向的追踪痕迹', '被劫持不是误伤的明确信号'],
                        rewardDetails: { loot: ['粗制短弓、弯刀、少量铜币。'], intel: ['敌人来自同一条林中小径。'], fallout: '若有哥布林逃脱，据点警戒上升。' },
                        enemies: [{ name: '哥布林伏击者', count: 4, ...GOBLIN_BASE, attacks: ['短弓 +4，1d6+2 穿刺', '弯刀 +4，1d6+2 劈砍'], traits: ['灵巧撤离', '喜欢利用半掩护'], features: [{ name: '灵巧撤离', description: '可用附赠动作执行撤离或隐藏。' }], actions: [{ name: '短弓', attack: '+4 命中，射程 80/320 尺', damage: '1d6+2 穿刺', description: '优先射击没有掩体的目标。' }, { name: '弯刀', attack: '+4 命中，触及 5 尺', damage: '1d6+2 劈砍', description: '仅在被近身时使用。' }], positioning: '分散在道路两侧树后。', tactics: '先射后撤，维持距离。', retreat: '倒下两名同伴后试图逃跑。' }]
                    },
                    nextScenes: ['lmp-1-goblin-trail']
                },
                {
                    id: 'lmp-1-goblin-trail',
                    title: '追踪哥布林小径',
                    location: '溪流边的隐蔽兽径',
                    mood: '压迫与试探',
                    tags: ['追踪', '陷阱', '侦查'],
                    narration: joinParas('主路边那条几乎看不见的小径，贴着溪流悄悄钻进树林。浅浅的泥印一路向前，像有人刻意挑了最难被外人追上的路线。', '越往里走，绊索的痕迹、折断的树枝和狼的粪便就越多。这里不像一条单纯搬运赃物的路，更像一条会先削弱猎物、再把猎物拖进洞里的前厅。', '前方的水流声时隐时现，偶尔夹着几声不自然的石子滚落。你们还没看见敌人，但那种感觉已经很清楚——有人在盯着你们，只是还没决定什么时候动手。'),
                    summary: '把战斗节奏切成“调查—预警—小规模冲突”，为据点前哨和洞穴布局做预告。',
                    storySummary: buildStorySummary({ background: '这是从伏击现场通往据点的缓冲带，核心价值是信息和压力。', trajectory: ['谨慎前进会换来外圈先手。', '鲁莽推进则会惊动更多守卫。'], hiddenInfo: ['哥布林对这条路非常熟悉，失败也会用警报止损。'], impact: '队伍在这里的表现会直接影响据点外圈难度。' }),
                    roleplayTips: [{ npc: '哥布林哨兵', role: '负责拖延和报信的巡哨', voice: '压低嗓子，喜欢用短促口哨互通位置。', bodyLanguage: '永远不在原地停太久。', personality: '胆小，但习惯把恐惧转成偷袭。', motivation: '拖到洞里同伴做好准备。', fear: '被沉默地贴身放倒。', responses: { fearful: '只要失去同伴就会转身跑。' } }],
                    playerClues: buildClues({ obvious: ['拖拽痕迹和脚印都沿溪流走。', '路径两侧明显有布设陷阱的痕迹。'], hidden: ['成功侦查能提前看到绊索或哨位。', '狼毛和碎骨说明据点里养着看门兽。'], misleading: ['安静不代表安全，真正危险在“看不见的报信”。'], rewards: ['若无声解决哨兵，据点首轮会少一次警报增援。'] }),
                    branchPrompts: [{ choice: '慢速排雷前进', outcome: '更稳，但会拉长紧张感。', risk: '耗时更久。', reward: '更容易拿到外圈先手。' }, { choice: '快速冲刺到尽头', outcome: '节奏更猛。', risk: '可能直接吃到警报与夹击。', reward: '能保持追兵的急迫感。' }],
                    dmTips: buildDmTips({ tableFlow: ['把这里当“战前侦查段”而不是纯跑路。', '失败的代价更适合是暴露位置，而不是单纯掉血。'], pacing: '用一到两次关键检定制造压力，不必把每十米都做成关卡。', ambience: ['湿泥、浅溪、断枝和狼味。'], contingency: ['若队伍完全没搜到线索，就让一名哨兵不小心暴露。'], lessons: ['探索的最佳回报是信息优势。'], music: ['潜行氛围'] }),
                    combat: {
                        title: '小径哨兵与陷阱',
                        objective: '穿过警戒线，尽量别让据点做好万全准备。',
                        recommendedLevel: '1 级',
                        difficulty: 'standard',
                        terrain: ['绊索与湿滑地面影响冲锋。', '弯道与树丛有利于伏击者。'],
                        terrainDetails: { cover: ['溪边石块和倒木可作半掩护。'], hazards: ['绊索会让前锋暴露在远程火力下。'], interactables: ['割断绊索或故意触发，能反过来制造噪音陷阱。'] },
                        tactics: ['哨兵优先报信，不追求击杀。', '狼会压低身形从侧面扑咬。'],
                        tacticsPhases: { opening: '哨兵隐蔽观察，狼在后方待命。', firstRound: '若发现敌人，则一名哨兵后退报信。', midFight: '狼缠住前排，哨兵射击后排。', emergency: '一旦劣势明显，敌人立刻撤入洞穴。' },
                        difficultyAdjustments: { easy: '只有 2 名哥布林哨兵。', standard: '2 名哨兵加 1 头狼。', hard: '增加第 3 名哨兵或让陷阱先手触发。' },
                        rewards: ['据点外围情报', '洞内有狼与水流机关的预警'],
                        enemies: [{ name: '哥布林哨兵', count: 2, ...GOBLIN_BASE, attacks: ['短弓 +4，1d6+2 穿刺', '弯刀 +4，1d6+2 劈砍'], traits: ['灵巧撤离', '优先报信'], positioning: '躲在弯道与树丛后方。', tactics: '发现不对立刻后撤。', retreat: '一旦同伴倒下就向洞穴奔跑。' }, { name: '看门狼', count: 1, ...WOLF_BASE, attacks: ['撕咬 +4，2d4+2 穿刺'], traits: ['灵敏嗅觉', '扑倒配合'], positioning: '藏在更深的灌木后。', tactics: '扑咬最靠前的目标，逼停推进。', retreat: '没有主人支援时会回洞。' }]
                    },
                    nextScenes: ['lmp-1-cragmaw-hideout']
                },
                {
                    id: 'lmp-1-cragmaw-hideout',
                    title: '5-1：狼栏前厅',
                    location: '克拉摩窝点洞口与狼栏前厅',
                    mood: '还没开打就已经能闻到危险',
                    tags: ['潜入', '狼栏', '前哨'],
                    narration: joinParas('顺着洞穴标记一路往里走，最先拦在前面的不是地精，而是三头被圈养在前厅的狼。它们原本埋头啃着骨头，可你们刚一靠近，三双兽眼就几乎同时抬了起来，铁链在湿冷石地上拖出一阵刺耳的摩擦声。', '这地方离洞穴深处还有一段距离，却已经足够把警报送进去。狼群的鼻息里满是饥饿和紧张——它们不是忠心的守卫，更像一串随时会被扯响的铃。', '如果有人慢慢取出食物、压低动作，也许还能把这一幕变成一次安静的通过；可只要其中一头先嚎出来，里面的地精就会立刻知道，有陌生人闯进洞里了。'),
                    summary: '把原本整段窝点战拆成第一小幕：先决定三只狼是被安抚，还是把整座洞穴叫醒。',
                    storySummary: buildStorySummary({ background: '根据给定地图，入口后的第一道障碍就是三只看门狼。', trajectory: ['若安静通过，后续两幕会更像潜入。', '若狼群嚎叫，耶米克、埃克与克拉格一方都会更早进入警戒。'], hiddenInfo: ['狼群更多是被饥饿和鞭打驱使，不是死忠看守。', '这里的处理方式会决定玩家对整座据点的初始节奏。'], impact: '成功安抚能明显降低后续压力，也能让玩家觉得自己是在“拆据点”，而不是一次性硬冲。' }),
                    roleplayTips: [{ npc: '三只看门狼', role: '被地精当作活动警铃的守门兽', voice: '低吼、呲牙、铁链刮地的金属噪音。', speech: '不会说话，但会用鼻息、退缩和前扑表达态度。', bodyLanguage: '耳朵后贴、身形压低，闻到食物时会短暂停顿。', personality: '饥饿、紧张、对痛苦反应强于忠诚。', motivation: '吃饱、活着、别再挨打。', fear: '火焰、突然逼近和更强的捕食者。', responses: { friendly: '若有人用食物并成功通过一次驯兽检定，狼会暂时安静下来。', aggressive: '若有人硬闯狼栏或先出手，狼会一边扑咬一边嚎叫。' } }],
                    playerClues: buildClues({ obvious: ['洞口后的前厅有三只狼。', '只要它们一齐叫起来，洞内地精就会立刻警觉。'], hidden: ['狼更在意食物、声音和陌生气味，不一定非要拼命死守。', '从铁链长度和骨头堆位置看，角色可以在较远距离先做投喂和安抚。'], misleading: ['看见狼不代表这幕必须先开战。'], rewards: ['若用驯兽或投喂安静通过，5-2 可以视作未触发全面警报。'] }),
                    branchPrompts: [{ choice: '喂食并尝试驯兽', outcome: '狼群短时间内会安静，给队伍留出潜入窗口。', risk: '检定失败会让三只狼同时暴躁起来。', reward: '后续房间更容易保持先手。' }, { choice: '直接打穿狼栏', outcome: '最快、也最干脆。', risk: '噪音会把后面两幕都抬成强袭节奏。', reward: '撤退时不会留下追击威胁。' }],
                    dmTips: buildDmTips({ tableFlow: ['先把“它们闻到你们了，但还没完全叫出来”的那一口气演足。', '明确告诉玩家：这是可以靠驯兽、食物和谨慎处理解决的遭遇。'], pacing: '短而紧，是据点真正展开前的试探幕。', pacingBeats: ['先让玩家意识到三只狼比单纯的伤害更像警报器。', '再给出安抚、投喂、潜行或强杀这些不同答案。'], ambience: ['湿冷泥地、狼臭、腐肉、铁链声。'], sensoryDetails: { sound: '低吼和铁链刮地声会被洞穴回音放大。', smell: '湿毛、烂骨与霉水味混在一起。', light: '入口余光照不进狼栏深处，火把一晃全是反光的兽眼。' }, contingency: ['若玩家完全没想到安抚，就让其中一只狼先因食物味而犹豫，给他们一个明显提示。'], lessons: ['前哨遭遇最好的奖励不是掉血，而是后续信息和先手。'], music: ['洞穴潜行', '低压潜入'] }),
                    combat: {
                        title: '狼栏前厅',
                        objective: '安静穿过入口狼栏，尽量别让洞内守卫得到完整警报。',
                        stakes: '狼群若嚎叫，后续遭遇会提前集结。',
                        recommendedLevel: '1 级',
                        difficulty: 'easy',
                        terrain: ['狼栏木桩与铁链限制近战走位。', '入口弯道给远程、投喂和安抚动作都留出距离。'],
                        terrainDetails: { cover: ['石柱、洞壁拐角和堆放的木桶都能作半掩护。'], hazards: ['铁链和骨堆会拖慢前排。'], interactables: ['肉干、口粮、法术或一次 DC 12 的驯兽检定都能稳住狼群。'] },
                        tactics: ['若没受刺激，狼会先嗅闻和试探。', '一旦有一只狼受惊嚎叫，另外两只会立刻跟上。'],
                        tacticsPhases: { opening: '三只狼各自拴住，但都已朝入口转身。', firstRound: '若角色靠太近或动作粗暴，狼开始连锁低吼。', midFight: '狼会扑最近目标，把前厅拖成混战。', emergency: '最后一只狼会尽量朝洞里嚎一声报信。' },
                        difficultyAdjustments: { easy: '允许一次明显的投喂机会。', standard: '三只狼都处于紧张状态。', hard: '在洞里加一名听动静的地精巡逻者。' },
                        rewards: ['潜入优势', '狼栏与入口布局情报'],
                        rewardDetails: { intel: ['玩家会知道洞内守卫更依赖警报串联，而不是严整编制。'] },
                        enemies: [{ name: '看门狼', count: 3, ...WOLF_BASE, attacks: ['撕咬 +4，2d4+2 穿刺'], traits: ['灵敏嗅觉', '若受惊会嚎叫报信'], positioning: '入口狼栏与蘑菇堆之间。', tactics: '围住最靠前的角色，把局面拖成混乱。', retreat: '除非被安抚，否则不会主动撤离。' }]
                    },
                    nextScenes: ['lmp-1-cragmaw-hideout-yeemik']
                },
                {
                    id: 'lmp-1-cragmaw-hideout-yeemik',
                    title: '5-2：修达、Yeemik 与 Errk',
                    location: '克拉摩窝点人质室与地精休息区',
                    mood: '每个人都在拿别人当筹码',
                    tags: ['人质', '谈判', '小头目'],
                    narration: joinParas('再往里走，洞里的脏乱终于有了“房间”的样子。较大的内室里，修达·霍温特被绳索绑着坐在地上，脸色发白，却依然努力让自己保持镇定；而在他旁边，耶米克与埃克正像两只互相提防的鬣狗一样守着这个人质。', '耶米克把短刀往修达肩边一横，先尖声开口：\n“站那儿，外来人。想让他活着，就先听我说。”\n门边的埃克立刻龇牙抢话：\n“跟他们废什么话？杀了，东西都是我们的！”\n修达抬起头，声音发哑却依旧很稳：\n“别急着冲……他们彼此也不信。”', '隔壁休息室里，还断断续续传来两只偷懒地精的鼾声。这里的空气绷得像一根细线——谁先动手，谁先谈崩，谁先把人质从筹码变成战场中心，这一幕就会立刻从僵持滑进混战。'),
                    summary: '第二小幕聚焦人质室：修达被关押，Yeemik 与 Errk 在场，旁边休息室还有两只可能被惊醒的地精。',
                    storySummary: buildStorySummary({ background: '根据你给的地图，这一带是据点里最适合谈判与突然翻脸的节点。', trajectory: ['玩家可以先谈、先救人，或直接斩首 Yeemik / Errk。', '若处理得好，修达会在 Boss 战前给出克拉格与裂皮的站位情报。'], hiddenInfo: ['Yeemik 更会讲条件，Errk 更容易先动手。', '旁屋两只偷懒地精只有在闹出足够大动静时才会卷进来。'], impact: '救出修达后，第一章从“追踪与潜入”正式转向“夺回主动权”。' }),
                    roleplayTips: [{ npc: 'Yeemik', role: '想借外人上位的哥布林头目', voice: '故作镇定，但情绪一高就会尖起来。', speech: '开口就是条件，喜欢把“交易”挂在嘴边。', bodyLanguage: '总让人质和掩体挡在自己前面。', personality: '投机、胆小、很想当老大。', motivation: '借玩家的手除掉更强的上级。', fear: '谈崩以后两边都不放过自己。', responses: { friendly: '愿意拿修达和情报换命。', suspicious: '会立刻把修达推出来自保。' } }, { npc: 'Errk', role: '更好斗的地精头目', voice: '粗短、急躁、喜欢抢话。', speech: '比起谈判更爱先放狠话。', bodyLanguage: '手总搭在武器上，喜欢站在门边卡位。', personality: '暴躁、逞强、急于证明自己。', motivation: '不想在外人面前显得比 Yeemik 更软。', fear: '被当成第二个可随时牺牲的小头目。', responses: { aggressive: '会第一个扑上来。', fearful: '一旦吃亏就想把责任全推给 Yeemik。' } }, { npc: '修达·霍温特', role: '被俘盟友', voice: '虚弱但仍尽量稳住节奏。', speech: '会先确认队伍状况，再给出最关键的战术情报。', bodyLanguage: '受伤、疲惫，但仍在观察房间里的每个人。', personality: '可靠、务实、感恩。', motivation: '活着离开，并把凡达林与据点情报交给玩家。', fear: '救援者因鲁莽也被困在这里。' }],
                    playerClues: buildClues({ obvious: ['修达还活着。', 'Yeemik 与 Errk 都不像真正说了算的人。'], hidden: ['隔壁休息室那两只睡觉地精，可以在战斗爆发前先被控制或绕过。', '若前一幕没有惊动狼群，这里起手会更像紧张谈判，而不是立刻乱战。'], misleading: ['看见人质并不代表只能乖乖谈判。'], rewards: ['修达会告诉玩家：克拉格和裂皮在更深的房间里，外圈还有四只地精分布在大房间与侧室。'] }),
                    branchPrompts: [{ choice: '先稳住 Yeemik', outcome: '能短暂把战场切成小块。', risk: 'Errk 可能先忍不住出手。', reward: '修达更容易被活着救下。' }, { choice: '直接扑向人质位', outcome: '节奏很猛，容易抢下修达。', risk: '会同时吃到两名小头目和旁屋增援。', reward: '不给对方谈条件的空间。' }],
                    dmTips: buildDmTips({ tableFlow: ['把这幕当成“刀尖上的谈判”，不是单纯的小房间乱斗。', '要明确告诉玩家：旁屋两只地精处于“会不会被惊醒”的边缘状态。'], pacing: '先给半分钟对话和观察，再决定是否引爆。', pacingBeats: ['先让玩家看到修达仍活着。', '再让 Yeemik 和 Errk 的不同性格同时显出来。', '最后让玩家决定是救人、谈判还是先斩首。'], ambience: ['湿石壁回音、人质绳索摩擦、隔壁断断续续的鼾声。'], sensoryDetails: { sound: '近处是压低的争吵声，远处还能听见水流。', light: '火把把修达的影子拉得很长，也把 Yeemik 的掩体照得更阴。', smell: '汗味、霉味和地精休息室里的酒臭混在一起。' }, contingency: ['若玩家在这里吃太多伤害，可让旁屋两只地精继续睡死，别把压力全堆满。'], lessons: ['低级地城里，“谁会晚一轮进场”常比单纯加减人数更有戏。'], music: ['人质僵局', '洞穴紧张对峙'] }),
                    combat: {
                        title: '人质室遭遇',
                        objective: '救出修达，打破 Yeemik 和 Errk 对内室的控制。',
                        stakes: '若拖得太久，对方会把修达和洞内情报都当成人质筹码。',
                        recommendedLevel: '1 级',
                        difficulty: 'standard',
                        terrain: ['修达被绑在中央房间，不适合乱用范围攻击。', '相邻休息室里有两只偷懒睡觉的地精，噪音过大就会醒。'],
                        terrainDetails: { cover: ['长桌、门框、木桶和破箱子都可提供半掩护。'], hazards: ['修达人在火线中央，误伤风险真实存在。'], chokepoints: ['连接休息室与人质室的窄门非常容易卡位。'], interactables: ['割断绳索、关门拖延休息室增援、用话术吊住 Yeemik 都能改战局。'] },
                        tactics: ['Yeemik 会优先拿修达拖时间。', 'Errk 更倾向直接贴近最近目标。', '旁屋两只地精通常在明显战斗声出现后的下一轮加入。'],
                        tacticsPhases: { opening: 'Yeemik 躲在掩体后，Errk 抢门位，修达被绑在中间。', firstRound: '若玩家先谈，Yeemik 会继续拖；若玩家先冲，Errk 会先扑上来。', midFight: '休息室地精被惊醒后从侧门补射。', emergency: '若两名头目之一倒下，另一人会立刻考虑把消息卖给玩家换命。' },
                        difficultyAdjustments: { easy: '让旁屋地精睡得更死，或让 Yeemik 更愿意谈。', standard: 'Yeemik、Errk 与 2 名休息室地精按正常节奏加入。', hard: '若 5-1 已惊动据点，则休息室地精首轮就已持武器在手。' },
                        rewards: ['修达获救', '克拉格与裂皮的房间情报', '通往凡达林的后续线索'],
                        rewardDetails: { intel: ['修达会指出：克拉格不会最开始就加入战斗，而是躲在自己的房间里等别人先消耗你们。'], reputation: ['修达会把队伍视为真正可靠的援手。'] },
                        enemies: [
                            { name: 'Yeemik', count: 1, ...GOBLIN_BASE, hp: '9 (2d6+2)', attacks: ['短弓 +4，1d6+2 穿刺', '弯刀 +4，1d6+2 劈砍'], traits: ['拿人质谈判', '一旦失势会求交易'], positioning: '修达附近的掩体后。', tactics: '先把修达和情报都当成筹码。', retreat: '若单独存活，会优先求饶。' },
                            { name: 'Errk', count: 1, ...GOBLIN_BASE, hp: '9 (2d6+2)', attacks: ['短弓 +4，1d6+2 穿刺', '弯刀 +4，1d6+2 劈砍'], traits: ['更好斗', '急着证明自己'], positioning: '门边或长桌另一侧。', tactics: '趁玩家分心救人时贴近。', retreat: '若吃到重伤，会把责任全推给 Yeemik。' },
                            { name: '休息室地精', count: 2, ...GOBLIN_BASE, attacks: ['短弓 +4，1d6+2 穿刺', '弯刀 +4，1d6+2 劈砍'], traits: ['起初在睡觉', '被惊醒后才加入'], positioning: '隔壁休息室的地铺与杂物旁。', tactics: '醒来后优先从门框后射击。', retreat: '头目倒下时最容易逃散。' }
                        ]
                    },
                    nextScenes: ['lmp-1-cragmaw-hideout-klarg']
                },
                {
                    id: 'lmp-1-cragmaw-hideout-klarg',
                    title: '5-3：克拉格与裂皮',
                    location: '克拉摩窝点大洞厅、侧室与克拉格私室',
                    mood: '真正的首领正在后面等你们自己闯进来',
                    tags: ['Boss战', '多房间', '克拉格'],
                    narration: joinParas('穿过修达所在的人质区后，洞穴一下子豁得更深。前方大洞厅里散着粗糙桌椅和杂物，旁边小房间黑着口子，而更深处那扇通向私室的门后，正传来某种比地精沉重得多的呼吸声。', '你们还没真正看见克拉格，先听见一声压着怒气的低吼从门后滚出来：\n“外面在吵什么？”\n紧接着，是兽爪刮地的闷响和更粗重的脚步。那不是普通守卫会发出的动静——门后那个家伙，显然正等着别人先替他把局面搅乱。', '如果你们一路推进得够安静，这里像一层层剥开的防线；可要是前面已经把整座洞闹醒，那么现在，你们听见的就会像整座巢穴最后一次同时睁开眼。'),
                    summary: '第三小幕是明确的 Boss 战：前厅两只地精、侧室两只地精，克拉格与裂皮最初待在自己的房间里。',
                    storySummary: buildStorySummary({ background: '根据给定地图，克拉格并不站在最前面，而是让外圈房间和裂皮替自己创造优势。', trajectory: ['玩家可以先清外圈，再逼房门。', '也可以直接冲 Boss 房，但会吃更凶的夹击。'], hiddenInfo: ['克拉格不会第一时间加入战斗，是因为他相信外圈能先磨掉玩家资源。', '裂皮是他真正信任的同伴，会跟着一起扑出。'], impact: '打掉克拉格后，第一章的“追踪—潜入—救援”结构完整闭环，玩家也正式拿回主导权。' }),
                    roleplayTips: [{ npc: '克拉格', role: '克拉摩地精真正的头目', voice: '粗重、爱吼、把自信建立在体型和先手优势上。', speech: '喜欢羞辱失败者，把“谁才是老大”挂在嘴边。', bodyLanguage: '坐得像整个洞都是他的，直到听见不对劲才猛地站起。', personality: '残暴、自大、但并不蠢。', motivation: '守住据点，继续把战利品和俘虏送给上层。', fear: '外圈太快崩掉，让自己来不及挑时机出手。', responses: { aggressive: '会带着裂皮一起猛扑最脆的一侧。', fearful: '除非彻底失势，否则不会轻易认输。' } }, { npc: '裂皮（Ripper）', role: '克拉格的狼伙伴', voice: '比普通狼更低沉、更有威胁感。', speech: '不会说话，但会紧跟克拉格的肢体信号。', bodyLanguage: '总守在房门或床铺附近，像随时准备扑出去。', personality: '凶狠、听主人的、对陌生人极端敌意。', motivation: '保护克拉格、咬倒闯入者。', fear: '火焰和被多人围住。', responses: { aggressive: '会直扑落单者。', fearful: '若克拉格倒下，会瞬间失去气势。' } }],
                    playerClues: buildClues({ obvious: ['大房间里有两只地精，侧室还有两只。', '克拉格与裂皮最开始不在前线，而是在更深的私室。'], hidden: ['若外圈被无声解决，克拉格可能直到开门前都不会主动冲出来。', '侧室那两只地精正是你地图上标出的“偷懒”房间，可以被先手清掉。'], misleading: ['看见 Boss 房并不代表应该第一时间冲进去。'], rewards: ['逐层拆房能让 Boss 战更干净，也更符合地图上的实际分布。'] }),
                    branchPrompts: [{ choice: '先清大房间与侧室', outcome: '把 Boss 战拆成数个小战斗。', risk: '拖得更久，克拉格有时间准备。', reward: '面对克拉格时场面更清爽。' }, { choice: '直接撞开克拉格房门', outcome: '节奏最猛。', risk: '会同时吃到外圈射击、裂皮扑咬和克拉格重击。', reward: '若抢到先手，可能在 Boss 还没完全展开前压住他。' }],
                    dmTips: buildDmTips({ tableFlow: ['把这幕按你给的地图清楚分成“大房间—侧室—Boss 房”三层。', '强调克拉格不是傻站在最前面的怪，而是在等最划算的加入时机。'], pacing: '这是一场可以被拆解的 Boss 战，让玩家感到他们前两幕的选择在这里兑现。', pacingBeats: ['先让玩家看见外圈四只地精分布。', '再通过门后低吼和重步声提醒克拉格与裂皮还没入场。', '最后在合适时机让 Boss 房爆开。'], ambience: ['潮湿洞厅、翻倒木桌、地精低语和门后传来的兽吼。'], sensoryDetails: { sound: '外圈是急促脚步和短弓拉弦声，Boss 房里则是更重的脚步和更低的咆哮。', light: '大房间火光散，侧室更暗，克拉格私室像一块压着人的黑影。', smell: '酒气、脏床铺和狼窝味混在一起，比入口更闷。' }, contingency: ['若队伍前两幕消耗过大，可让侧室两只地精更犹豫，不一定第一轮就打满。'], lessons: ['Boss 战的“加入时机”本身就是设计的一部分。'], music: ['洞穴首领战', 'Boss 房突袭'] }),
                    combat: {
                        title: '克拉格的 Boss 战',
                        objective: '击溃克拉格与裂皮，夺下克拉摩窝点最后控制权。',
                        stakes: '若克拉格带着情报逃走，玩家的行动会被更大的克拉摩势力提前得知。',
                        recommendedLevel: '1 级',
                        difficulty: 'hard',
                        terrain: ['前方大房间里有 2 只地精拖延。', '旁边的小房间里还有 2 只地精准备侧射。', '克拉格与裂皮最初待在自己的房间里，不会一开始就加入。'],
                        terrainDetails: { cover: ['餐桌、木桶、床铺和门框都能提供掩护。'], hazards: ['通向 Boss 房的窄门是明显的集火点。'], chokepoints: ['大房间门口与克拉格私室门口会决定谁能先接战。'], interactables: ['先反锁侧室、诱敌开门、占住门框都能把 Boss 战拆小。'] },
                        tactics: ['外圈四只地精先拖时间。', '克拉格通常要等到第二轮、外圈有人倒下或玩家逼近私室时才加入。', '裂皮会跟着克拉格一起扑向最孤立的目标。'],
                        tacticsPhases: { opening: '大房间 2 只地精与侧室 2 只地精先接敌。', firstRound: '若玩家没撞开私室，克拉格仍在后面观察。', midFight: '克拉格带裂皮一起冲出，试图靠重击和扑倒逆转。', emergency: '若外圈全灭且自己重伤，克拉格会缩回房内做最后死守。' },
                        difficultyAdjustments: { easy: '移除侧室的 2 只地精。', standard: '按地图分布为大房间 2、侧室 2、Boss 房克拉格 + 裂皮。', hard: '让克拉格在开门瞬间就带标枪先手。' },
                        rewards: ['克拉格战利品', '被抢补给', '克拉摩堡与甘德伦下落的线索'],
                        rewardDetails: { loot: ['首领房间内的粗制财物、补给和可回收的小件。'], intel: ['更大的克拉摩据点仍在运作，甘德伦的命运也还没结束。'], reputation: ['玩家在凡达林会被视为真正在外面把问题打回去的人。'] },
                        enemies: [
                            { name: '大房间地精', count: 2, ...GOBLIN_BASE, attacks: ['短弓 +4，1d6+2 穿刺', '弯刀 +4，1d6+2 劈砍'], traits: ['熟悉掩体', '优先拖时间'], positioning: '前方大房间的掩体与门边。', tactics: '射击、后撤、把玩家钉在外圈。', retreat: '若克拉格倒下，会很快失去斗志。' },
                            { name: '侧室地精', count: 2, ...GOBLIN_BASE, attacks: ['短弓 +4，1d6+2 穿刺', '弯刀 +4，1d6+2 劈砍'], traits: ['侧射补位', '起初未必马上现身'], positioning: '旁边房间的床铺与杂物堆。', tactics: '从侧门或门框后偷射。', retreat: '若被抄后路最容易崩溃。' },
                            { name: '裂皮（Ripper）', count: 1, ...WOLF_BASE, hp: '13 (2d8+4)', attacks: ['撕咬 +4，2d4+2 穿刺'], traits: ['克拉格的狼伙伴', '跟随主人突袭'], positioning: '克拉格私室内或房门后。', tactics: '扑最孤立、最脆或刚穿门的人。', retreat: '若克拉格倒下，士气会明显下滑。' },
                            { name: '克拉格', count: 1, ...BUGBEAR_BASE, attacks: ['巨棒 +4，2d8+2 钝击', '标枪 +4，1d6+2 穿刺'], traits: ['不会最先加入战斗', '重击目标后会继续追杀'], positioning: '自己的房间里，等外圈先消耗玩家。', tactics: '挑被分散或已受伤的目标打出重击。', retreat: '除非彻底失势，否则不会轻易逃跑。' }
                        ]
                    },
                    nextScenes: ['lmp-2-phandalin-exploration']
                }
            ]
        },
        {
            id: 'lmp-part-2',
            title: '第二章：凡达林',
            summary: '进入开放调查阶段：玩家在凡达林结识重要 NPC、摸清红标帮的压迫网络、清剿崔森德庄园，并第一次真正决定自己要如何影响一座城镇。',
            scenes: [
                {
                    id: 'lmp-2-phandalin-exploration',
                    title: '凡达林探索',
                    location: '凡达林主街与各处店铺',
                    mood: '边境小镇的脆弱平静',
                    tags: ['城镇', '支线', 'NPC'],
                    narration: joinParas('凡达林看上去并不大：几条尘土路、几栋新旧不一的木屋、一间吵闹的旅馆、几家靠商路和矿工吃饭的店铺，以及一座像是勉强维持秩序的公所。', '这里的人见到陌生武装不会惊讶，但会迅速安静下来打量你们。镇民显然习惯了麻烦，却也习惯了没人真正替他们解决麻烦。', '在石丘旅馆、巴森补给、幸运圣坛、狮盾小贩与矿工交易所之间，线索像散在桌上的牌：只要翻得对，你们很快就会知道红标帮正在把恐惧当税收。'),
                    summary: '这是第二章的枢纽场景，核心是建立城镇关系网并明确红标帮的压迫。',
                    storySummary: buildStorySummary({ background: '凡达林表面恢复繁荣，实则被地痞、失序和沉默慢慢侵蚀。', trajectory: ['玩家可自由挑选同盟、商店和支线入口。', '无论先找谁，红标帮都应成为共同背景噪音。'], hiddenInfo: ['镇上的许多人已经学会“别惹红标帮”。', '真正能推进主线的人往往藏在普通店主、神职者和退伍老兵之中。'], impact: '玩家是否愿意站出来，会决定凡达林对他们的态度。' }),
                    roleplayTips: [
                        { npc: '托布伦·石丘', role: '石丘旅馆老板', voice: '热情却压低音量，像怕被谁听见。', bodyLanguage: '招呼客人时自然，一提红标帮就会看门口。', personality: '善良、实际、怕惹祸。', motivation: '让生意撑下去并盼着有人解决麻烦。', fear: '店里再被红标帮找麻烦。' },
                        { npc: '哈利娅·桑顿', role: '矿工交易所负责人', voice: '从容、带一点试探。', speech: '每句话都像在衡量对方值不值得投资。', personality: '聪明、现实、愿意利用局势。', motivation: '维持自己在镇上的影响力。', fear: '把筹码压在错误的人身上。' },
                        { npc: '奎琳·阿德里夫', role: '乐于助人的半身人农夫', voice: '温和、利落，像早已习惯照顾镇上的孩子和外来者。', personality: '亲切、警惕、富有同情心。', motivation: '保护儿子卡普，也希望凡达林别再被恶徒掐住喉咙。', fear: '孩子们在大人的沉默里学会害怕。' },
                        { npc: '加莉尔修女', role: '幸运圣坛的精灵牧师', voice: '轻柔、礼貌、带着训练有素的分寸感。', personality: '虔诚、敏锐、善于保留关键信息。', motivation: '帮助凡达林，也完成竖琴手交给她的任务。', fear: '把线索交给不值得信任的人。' },
                        { npc: '达朗·埃德玛', role: '退休冒险者', voice: '低沉、直接，像只对有胆量的人才多说几句。', personality: '老练、正直、不爱废话。', motivation: '不想看着凡达林继续被恶棍和怪物拿捏。', fear: '年轻人把危险当戏耍。' },
                        { npc: '莱妮·灰风', role: '狮盾小贩负责人', voice: '干脆、精明，像每句话都能换算成成本。', personality: '务实、记仇、赏罚分明。', motivation: '找回被抢货物，恢复商路秩序。', fear: '红标帮把凡达林变成没人敢做生意的地方。' },
                        { npc: '修达·霍温特', role: '领主联盟特工', voice: '稳重、节制、优先谈正事。', personality: '可靠、谨慎、重视秩序。', motivation: '查清伊阿诺·阿布雷克失踪的真相，并帮助凡达林站稳脚跟。', fear: '自己来得太晚，局势已经烂到根里。' }
                    ],
                    playerClues: buildClues({ obvious: ['镇民一提到红标帮就会压低声音。', '多个地点都会指向同一个问题：治安被人私占。'], hidden: ['愿意多聊的 NPC 会给出不同切入点：酒馆冲突、孩子失踪、庄园废墟。'], misleading: ['表面最热情的 NPC 不一定最无私。'], rewards: ['若花时间认识镇民，后面每次回镇都会更有重量。'] }),
                    branchPrompts: [{ choice: '先收集情报再动手', outcome: '更像调查剧。', reward: '能更稳地打进红标帮主线。' }, { choice: '看到不公就立刻出头', outcome: '英雄感更强。', risk: '会更早被红标帮盯上。', reward: '镇民会更快站到你们这一边。' }],
                    dmTips: buildDmTips({ tableFlow: ['让每个重要地点都给出不同风味的信息与人情关系。', '不要一次倒完整个镇子的设定，让托布伦、哈利娅、加莉尔修女等人分批把线索交出来。'], pacing: '这是一段开放场景，让玩家自己决定先和谁结盟。', ambience: ['尘土路、酒馆笑声、远处铁匠声。'], contingency: ['若玩家不知道先去哪，就让托布伦或修达明确提到红标帮。'], lessons: ['城镇探索最好让信息来自人，而不是来自任务板。'], music: ['边境小镇'] }),
                    combat: null,
                    nextScenes: ['lmp-2-redbrand-threat', 'lmp-2-sleeping-giant']
                },
                {
                    id: 'lmp-2-redbrand-threat',
                    title: '红标帮的威胁',
                    location: '凡达林街巷与居民区',
                    mood: '压迫、耻辱、等人出头',
                    tags: ['红标帮', '调查', '压力'],
                    narration: joinParas('红标帮不会躲在阴影里，他们就那样穿着红披巾走在街上，像这座镇本来就该属于他们。', '被打翻的货摊、低声安抚孩子的母亲和匆忙关门的店主，让你们很快明白这里的恐惧不是传闻，而是一种日常。', '问题从来不是“他们做了什么”，而是“镇上的人已经默认他们还会继续做”。'),
                    summary: '把红标帮从名字变成真实压迫，让玩家产生介入动机。',
                    storySummary: buildStorySummary({ background: '红标帮通过暴力和示众建立威慑，镇民普遍不敢反抗。', trajectory: ['玩家可以收集证词、安抚镇民或主动挑衅红标帮。'], hiddenInfo: ['越多镇民开口，越能确认问题源头在庄园地下。'], impact: '它为酒馆冲突和塔内泽沙城堡行动建立情绪基础。' }),
                    roleplayTips: [{ npc: '受惊的镇民', role: '潜在证人', voice: '起初犹豫，确认安全后才慢慢说完整句。', bodyLanguage: '说话时不看人，总在看街角。', personality: '不是懦弱，而是长期被训练成沉默。', motivation: '希望有人阻止红标帮，但不愿先站出来。' }, { npc: '红标帮打手', role: '街头威慑者', voice: '故意大声，借羞辱扩大控制。', personality: '仗着后台嚣张，本质并不忠诚。', motivation: '维持表面威风，避免让头目觉得自己办事不力。' }],
                    playerClues: buildClues({ obvious: ['镇民都默认“有人会被打”。', '红标帮把恐惧当成展示权力的工具。'], hidden: ['几个不同证人都会把线索指向旧庄园。'], misleading: ['有人会说“别管了”，但那更多是自保而非真的无所谓。'], rewards: ['若玩家认真安抚镇民，后续更容易获得支援与信任。'] }),
                    branchPrompts: [{ choice: '先当倾听者', outcome: '更容易建立镇民信任。', reward: '后续证词更完整。' }, { choice: '主动约战红标帮', outcome: '能快速把冲突摆到台面。', risk: '更早触发报复。', reward: '英雄感很强。' }],
                    dmTips: buildDmTips({ tableFlow: ['把压迫感放在镇民反应上，而不只是坏人台词上。'], pacing: '这是一段情绪铺垫，为酒馆冲突预热。', ambience: ['关门声、压低的耳语、孩子被拉回屋里的动静。'], contingency: ['若玩家没感受到怒火，就让红标帮在他们眼前再羞辱一次镇民。'], lessons: ['让玩家看到具体受害者，动机会更自然。'], music: ['低压城镇阴影'] }),
                    combat: null,
                    nextScenes: ['lmp-2-sleeping-giant', 'lmp-2-tresendar-manor']
                },
                {
                    id: 'lmp-2-sleeping-giant',
                    title: '沉睡巨人酒馆',
                    location: '凡达林边缘的沉睡巨人酒馆前',
                    mood: '挑衅到爆发的一瞬',
                    tags: ['街头冲突', '红标帮', '展示实力'],
                    narration: joinParas('沉睡巨人酒馆看上去像一处早就不欢迎正经客人的地方：门口酒渍发黑，窗框歪斜，里面传出的笑声总带着恶意。', '当你们靠近时，几名红标帮已经故意把椅子拖到门口，像是在给你们搭一座必须踩上去的台阶。', '他们不是真的想谈，只想看看这些新来的外乡人，是不是也会像镇上其他人一样低头绕开。'),
                    summary: '让玩家第一次正面打碎红标帮的气势，城镇风向会从这一刻开始变化。',
                    storySummary: buildStorySummary({ background: '红标帮用公开挑衅巩固威信，酒馆前是他们的示众舞台。', trajectory: ['可以先嘴炮，再开打。', '无论怎么开始，重点都是让镇民看到有人敢还手。'], hiddenInfo: ['红标帮并不统一忠诚，很多人只是靠人数和名声壮胆。'], impact: '赢下这场后，庄园清剿就从“多管闲事”变成“众望所归”。' }),
                    roleplayTips: [{ npc: '红标帮带头打手', role: '挑衅者', voice: '懒散、拖长音，故意显得轻蔑。', speech: '会反复用外号和侮辱来试探底线。', bodyLanguage: '坐着不站起，靠着门框喝酒。', personality: '享受占上风的感觉，真正遇到强硬反击时会慌。', motivation: '当众压住新来的队伍。', fear: '被打得太难看，回去交不了差。' }],
                    playerClues: buildClues({ obvious: ['这是一次公开示威，不是普通口角。'], hidden: ['若玩家观察站位，会发现对方把门口和侧巷都算进了退路。'], rewards: ['赢下公开冲突会明显提升镇民态度。'] }),
                    branchPrompts: [{ choice: '先接几句台词再开打', outcome: '戏剧张力更强。', reward: '玩家会更记住这次对峙。' }, { choice: '直接动手', outcome: '节奏干净。', risk: '少一点口头羞辱带来的情绪堆叠。', reward: '更快进入战斗。' }],
                    dmTips: buildDmTips({ tableFlow: ['让挑衅留有“你现在还能走”的空间，玩家才会更痛快地选择不走。'], pacing: '短对峙后立刻爆发，不要拖成冗长谈判。', ambience: ['泼出的酒、歪斜桌椅、看热闹的人群。'], lessons: ['公开冲突的核心是观众：谁在看、看完以后会怎么想。'], music: ['街头斗殴'] }),
                    combat: {
                        title: '酒馆门前的红披巾',
                        objective: '击退挑衅的红标帮，向凡达林证明他们不是不可碰的。',
                        recommendedLevel: '2 级',
                        difficulty: 'standard',
                        terrain: ['门口木柱和酒桶能提供临时掩护。', '狭窄门廊限制多人并排。'],
                        tactics: ['红标帮试图围住单独突前的人。', '若局势不利，会边打边退回酒馆内。'],
                        tacticsPhases: { opening: '先用嘲讽逼玩家走近。', firstRound: '两人压前，两人从侧面包。', midFight: '吃痛后开始拉扯和撤退。', emergency: '倒下两人后就想脱身。' },
                        difficultyAdjustments: { easy: '3 名红标帮。', standard: '4 名红标帮。', hard: '加 1 名后手冲出的支援。' },
                        rewards: ['镇民的敬意', '通往庄园的更明确动机'],
                        enemies: [{ name: '红标帮打手', count: 4, ...REDBRAND_BASE, attacks: ['短剑 +3，1d6+1 穿刺'], traits: ['抱团围殴', '欺压平民时很凶'], positioning: '门口两人，侧巷两人。', tactics: '先围住最孤立的目标。', retreat: '明显劣势就退进酒馆或四散。' }]
                    },
                    nextScenes: ['lmp-2-tresendar-manor']
                },
                {
                    id: 'lmp-2-tresendar-manor',
                    title: '崔森德庄园（Tresendar Manor）',
                    location: '旧庄园废墟与地下密室',
                    mood: '腐败、残忍、真相逐层下沉',
                    tags: ['地城', '红标帮', '玻璃手杖'],
                    narration: joinParas('庄园地表只剩被时间和忽视啃坏的空壳，真正让人不舒服的是它下面：潮湿地道、旧石室和被人重新利用过的牢房。', '红标帮把这里改成了犯罪窝点，赌博声、低声争执和被关押者的喘息交错在一起，让每一间房都像在说这里的秩序属于拳头。', '越深入，你们越能感到这里不只是地痞聚集地。有人在更高的位置上安排这一切，而且懂得怎样让恐惧替自己工作。'),
                    summary: '第二章的核心地城，兼顾潜入、救援、怪物异变与头目收束。',
                    storySummary: buildStorySummary({ background: '庄园地下连接着红标帮的日常运转、囚禁与头目活动。', trajectory: ['可以逐房清理，也可以先找人质和头目。', '不索斯和玻璃手杖让这里有了“街头恶棍之外”的危险感。'], hiddenInfo: ['玻璃手杖并非死战型首领，更擅长逃脱。'], impact: '清掉庄园后，凡达林第一次真正呼吸到希望。' }),
                    roleplayTips: [{ npc: '玻璃手杖（伊阿诺·阿布雷克）', role: '头目 / 自负的奥术操盘者', voice: '慢条斯理，像在点评失败的学生。', speech: '优先贬低对手、强调自己“更懂局势”。', bodyLanguage: '不愿离退路太远，时刻靠近门或密道。', personality: '虚荣、谨慎、把人当工具。', motivation: '保住自己和上级的计划。', fear: '被逼进正面死战。', responses: { friendly: '会试着拖时间并撒下假情报。', aggressive: '先放狠话，真正危险时优先逃跑。' } }, { npc: '米尔娜·登德拉', role: '被囚的镇民', voice: '虚弱、克制，但带着强烈求生意志。', personality: '恐惧里仍保有尊严。', motivation: '带着孩子活着出去。' }],
                    playerClues: buildClues({ obvious: ['这里同时是据点、牢房和私掠仓库。', '红标帮并不全靠蛮力，也靠恐吓和组织。'], hidden: ['审问俘虏或搜查文件可发现玻璃手杖与更大阴谋相连。', '不索斯能提前用低语施压。'], misleading: ['看到头目房间并不代表首领会留在原地等人。'], rewards: ['救出镇民能显著改变凡达林后续态度。'] }),
                    branchPrompts: [{ choice: '先救人质', outcome: '更具英雄感。', risk: '会给头目更多准备时间。', reward: '镇民支持更强。' }, { choice: '直扑玻璃手杖', outcome: '更像突袭行动。', risk: '可能错过救援与侧室信息。', reward: '能更快切断指挥。' }],
                    dmTips: buildDmTips({ tableFlow: ['让玩家不断感到“这里有人在统筹”，而不是随机小怪房。'], pacing: '前半段调查与清剿交错，后半段加速冲向首领。', ambience: ['潮湿石墙、旧木桶、压抑的人声和怪异低语。'], contingency: ['若队伍状态差，可让玻璃手杖提前撤离，留下较轻的残局。'], lessons: ['地城高潮不一定靠大 Boss，也可以靠“你终于知道这里是谁在作恶”。'], music: ['地下据点', '诡异异变'] }),
                    combat: {
                        title: '庄园地下清剿',
                        objective: '瓦解红标帮据点，救出人质，并把玻璃手杖逼出牌桌。',
                        recommendedLevel: '2-3 级',
                        difficulty: 'standard',
                        terrain: ['石廊狭窄，房间切换频繁。', '牢房、储藏室和异怪巢穴让战场风格不断变化。'],
                        terrainDetails: { cover: ['门框与石柱适合短距离拉扯。'], hazards: ['不索斯会利用视线死角偷看和骚扰。'], chokepoints: ['狭廊限制多人围攻。'], interactables: ['关门、开牢、夺火把都能改变局势。'] },
                        tactics: ['红标帮靠人数拖时间，不索斯负责打乱节奏。', '玻璃手杖若现身，多半是在看见胜算或看见逃路之后。'],
                        tacticsPhases: { opening: '外围打手先顶住入口。', firstRound: '不索斯用诡秘低语制造心理压力。', midFight: '打手抱团拖延，给头目争取撤离窗口。', emergency: '玻璃手杖会选择逃走而非战死。' },
                        difficultyAdjustments: { easy: '减少 1-2 名打手，或让不索斯退得更快。', standard: '打手与不索斯交替施压。', hard: '玻璃手杖短暂参战后再撤离。' },
                        rewards: ['庄园控制权', '玻璃手杖线索', '凡达林支持'],
                        rewardDetails: { intel: ['能把红标帮和更大阴谋联系起来。'], reputation: ['凡达林开始把你们视作真正的保护者。'] },
                        enemies: [{ name: '红标帮打手', count: 4, ...REDBRAND_BASE, attacks: ['短剑 +3，1d6+1 穿刺'], traits: ['抱团包夹'], positioning: '分布在走廊和主要房间。', tactics: '用人数拖住入口与前排。' }, { name: '不索斯', count: 1, ...NOTHIC_BASE, attacks: ['爪击 +4，1d6+3 劈砍'], traits: ['诡秘洞察', '腐化凝视'], positioning: '在阴影与转角附近游走。', tactics: '先扰乱心态，再挑落单者。', retreat: '若被压制，会缩回更黑暗的房间。' }]
                    },
                    nextScenes: ['lmp-3-conyberry-agatha', 'lmp-3-old-owl-well', 'lmp-3-wyvern-tor', 'lmp-3-thundertree', 'lmp-3-cragmaw-castle']
                }
            ]
        },
        {
            id: 'lmp-part-3',
            title: '第三章：蜘蛛之网',
            summary: '玩家离开凡达林，在多个地点追查线索、建立盟友与清理威胁，逐步逼近甘德伦与黑蜘蛛。',
            scenes: [
                {
                    id: 'lmp-3-conyberry-agatha',
                    title: '兔莓与阿加莎',
                    location: '荒废村落与女妖巢屋',
                    mood: '空寂、礼数与危险并存',
                    tags: ['社交', '女妖', '支线情报'],
                    narration: joinParas('兔莓像一口被时间遗忘的井：断墙、荒草和空屋安静得连风吹过都显得多余。', '真正的危险不在废村本身，而在那座仍被某种古老骄傲守着的小屋。阿加莎不是野兽，她更像一条仍然记得自己曾经尊贵的裂缝。', '在这里，语气和礼物与武器一样重要。你们不是来赢一场战斗，而是来避免一场本不该打的战斗。'),
                    summary: '这是一次高张力社交场景，重点在礼仪、请求与交换。',
                    storySummary: buildStorySummary({ background: '女妖阿加莎掌握重要线索，但极难以正常方式交流。', trajectory: ['尊重和礼物会换来答案。', '鲁莽和命令式语气会直接毁掉谈话。'], hiddenInfo: ['阿加莎并不需要帮助，她需要的是被正确对待。'], impact: '拿到答案能推进后续关键地点与故事理解。' }),
                    roleplayTips: [{ npc: '阿加莎', role: '女妖 / 知识守门人', voice: '空灵、缓慢，像从远处水底传来。', speech: '对恭维和礼节有反应，但讨厌被催促。', bodyLanguage: '飘忽不定，不完全直视来客。', personality: '高傲、敏感、爱惜尊严。', motivation: '维持自己的地位感，不被凡人轻慢。', fear: '被人像怪物一样粗暴对待。', responses: { friendly: '愿意给出精确而有限的答案。', aggressive: '会立刻把交涉变成灾难。' } }],
                    playerClues: buildClues({ obvious: ['这里需要礼仪，不需要蛮力。'], hidden: ['合适的献礼和称呼能显著降低难度。'], rewards: ['成功交涉比战斗胜利值钱得多。'] }),
                    branchPrompts: [{ choice: '先准备礼物与说辞', outcome: '交涉更稳。', reward: '答案更完整。' }, { choice: '直接发问', outcome: '节奏快。', risk: '极易惹怒阿加莎。', reward: '若侥幸成功会很戏剧化。' }],
                    dmTips: buildDmTips({ tableFlow: ['让玩家在门外就感觉到“语气会决定结果”。'], pacing: '慢一点，把每一次措辞都变得重要。', ambience: ['废村寂静、灰尘、屋内陈旧香味。'], lessons: ['社交场不该被“掷一次魅力”简单跳过。'], music: ['空灵女妖'] }),
                    combat: null,
                    nextScenes: ['lmp-3-old-owl-well', 'lmp-3-cragmaw-castle']
                },
                {
                    id: 'lmp-3-old-owl-well',
                    title: '古枭井（Old Owl Well）',
                    location: '古塔遗迹与僵尸营地',
                    mood: '诡异平静',
                    tags: ['亡灵', '法师', '谈判或战斗'],
                    narration: joinParas('破旧石塔在平地上像一根不愿倒下的骨头，周围散着被重新挖开的土和不自然整齐的脚印。', '几具僵尸像旗杆一样安静站在营地边缘，连乌鸦都不会在它们附近停留。', '营火旁的红袍法师并不急着攻击，因为他比你们更享受这种“谁先开口就算先表态”的局面。'),
                    summary: '这是第三章典型的“可以打，但更值得先谈”的场景。',
                    storySummary: buildStorySummary({ background: '哈姆·科斯特正在研究遗迹，同时对周边局势也有兴趣。', trajectory: ['玩家可交换情报、接临时委托，或直接清理亡灵。'], hiddenInfo: ['哈姆并不是此刻最重要的敌人，他更像风险不低的外部观察者。'], impact: '处理方式会影响你如何塑造这片区域的灰色人物。' }),
                    roleplayTips: [{ npc: '哈姆·科斯特', role: '红袍法师', voice: '礼貌、缓慢、带一点傲慢。', speech: '把危险说得像研究步骤。', personality: '冷静、好奇、并不急着开战。', motivation: '研究遗迹并从地方势力中获利。', fear: '浪费时间在无意义冲突上。', responses: { curious: '愿意交换情报和小任务。', aggressive: '会立刻让僵尸向前顶住。' } }],
                    playerClues: buildClues({ obvious: ['亡灵受人控制，而且控制者就在营火旁。'], hidden: ['哈姆知道区域内其他势力和怪事。'], rewards: ['若先谈判，可用更低成本拿到区域情报。'] }),
                    branchPrompts: [{ choice: '把他当临时情报源', outcome: '能换到更平滑的区域推进。', reward: '节省资源。' }, { choice: '把亡灵视作必须清除的威胁', outcome: '价值观很清晰。', risk: '会多打一场不算必要的战斗。', reward: '区域更安全。' }],
                    dmTips: buildDmTips({ tableFlow: ['把营地描写得足够诡异，让“先谈”本身就显得危险。'], pacing: '先静，再决定是谈还是打。', ambience: ['古塔碎石、灰烬营火、亡灵静止感。'], lessons: ['灰色 NPC 最有趣的地方在于他未必站在你这边，但也不急着站在对面。'], music: ['荒原与亡灵'] }),
                    combat: {
                        title: '古枭井的亡灵守卫',
                        objective: '若谈判失败，则压制哈姆与其亡灵护卫。',
                        recommendedLevel: '3 级',
                        difficulty: 'standard',
                        terrain: ['塔基碎石与营火形成遮挡。'],
                        tactics: ['僵尸向前顶住，施法者留在后方观察。'],
                        tacticsPhases: { opening: '僵尸先站成墙。', firstRound: '哈姆试探玩家是否真的要死斗。', midFight: '若队伍强势，他会优先自保。' },
                        difficultyAdjustments: { easy: '3 具僵尸。', standard: '4 具僵尸加哈姆支援。', hard: '增加一轮额外法术压制。' },
                        rewards: ['区域安全感', '从哈姆营地获得笔记'],
                        enemies: [{ name: '僵尸守卫', count: 4, ...ZOMBIE_BASE, attacks: ['猛击 +3，1d6+1 钝击'], traits: ['不死顽强'], positioning: '排成缓慢推进的前线。', tactics: '用身体占住空间，给施法者拖时间。' }]
                    },
                    nextScenes: ['lmp-3-wyvern-tor', 'lmp-3-thundertree', 'lmp-3-cragmaw-castle']
                },
                {
                    id: 'lmp-3-wyvern-tor',
                    title: '飞龙崖（Wyvern Tor）',
                    location: '岩坡与兽人营地',
                    mood: '粗暴直接',
                    tags: ['兽人', '清剿', '山地战'],
                    narration: joinParas('飞龙崖不是一座真正的堡垒，而是一处被蛮力临时占住的高地。碎石坡、稀疏灌木和被砍断的木桩围出一块适合强者说话的地方。', '营地里没有精致布防，只有“谁敢靠近就狠狠干回去”的粗暴逻辑。', '也正因此，只要你们让他们觉得自己正在失去优势，整场战斗会比看起来更快崩盘。'),
                    summary: '这是一场节奏直接的山地战，突出兽人冲锋与高地压力。',
                    storySummary: buildStorySummary({ background: '飞龙崖的兽人袭击周边道路和村民，是必须处理的区域威胁。', trajectory: ['可以侦查后偷袭，也可以正面爬坡强攻。'], hiddenInfo: ['兽人依赖气势，一旦头目受挫就容易乱。'], impact: '解决这里能让玩家真正感觉自己在清理地图上的危险。' }),
                    roleplayTips: [{ npc: '布洛戈·咬斧者', role: '兽人首领', voice: '低吼式咆哮，几乎像在用声音压人。', speech: '不爱废话，只会用威胁和战吼。', bodyLanguage: '站在高处，故意让自己看起来更大。', personality: '粗暴、自信、轻视细致策略。', motivation: '维持掠夺与威望。', fear: '在手下面前显得软弱。' }],
                    playerClues: buildClues({ obvious: ['兽人占据高地和俯冲路线。'], hidden: ['若先侦查，可找到更安全的接近路径。'], rewards: ['击败头目会极大削弱其余敌人士气。'] }),
                    branchPrompts: [{ choice: '先埋伏再冲', outcome: '战术感更强。', reward: '能削弱高地优势。' }, { choice: '正面硬攻', outcome: '更热血。', risk: '首轮很吃位置。', reward: '打赢后成就感很高。' }],
                    dmTips: buildDmTips({ tableFlow: ['让高地、落石和冲锋路线一开始就看得见。'], pacing: '短侦查后迅速进入对撞。', ambience: ['风声、碎石、兽人吼叫。'], lessons: ['地形要让战斗像这个场景独有的样子。'], music: ['山地冲锋'] }),
                    combat: {
                        title: '飞龙崖突袭',
                        objective: '击溃兽人头目与营地战力，解除周边威胁。',
                        recommendedLevel: '3 级',
                        difficulty: 'standard',
                        terrain: ['高地、碎石坡与落差决定冲锋路线。'],
                        tactics: ['兽人用气势和高低差压制前排。'],
                        tacticsPhases: { opening: '头目站高处，杂兵分散堵坡。', firstRound: '先冲最显眼的目标。', midFight: '头目若掉血过快，其他兽人会动摇。' },
                        difficultyAdjustments: { easy: '3 名兽人。', standard: '4 名兽人。', hard: '增加远处掷矛支援。' },
                        rewards: ['道路安全', '地方声望'],
                        enemies: [{ name: '兽人掠夺者', count: 4, ...ORC_BASE, attacks: ['巨斧 +5，1d12+3 劈砍', '标枪 +5，1d6+3 穿刺'], traits: ['激进冲锋'], positioning: '分散守在坡道与营地边缘。', tactics: '优先压前排，逼对方在斜坡上硬接。' }]
                    },
                    nextScenes: ['lmp-3-thundertree', 'lmp-3-cragmaw-castle']
                },
                {
                    id: 'lmp-3-thundertree',
                    title: '雷树镇废墟（Thundertree）',
                    location: '被毒龙阴影笼罩的废村',
                    mood: '腐败、美丽、致命',
                    tags: ['废墟', '龙', '多线危险'],
                    narration: joinParas('雷树镇像一场被灰烬封住的旧梦。倒塌房屋之间长出扭曲藤蔓，空气里浮着潮湿孢子的味道，让每一次呼吸都像吸进一小口腐败。', '这里的危险并不只来自废墟本身。德鲁伊、狂热信徒、植物怪和一条把整座村庄当巢穴试用品的年轻绿龙，让每条街都像能通向不同的灾难。', '你们不是进入一个地城，而是踏进一个正在缓慢腐烂、同时被更高存在凝视着的舞台。'),
                    summary: '雷树镇强调探索与选择：你要清怪、谈判、找盟友，还是冒险面对毒牙。',
                    storySummary: buildStorySummary({ background: '废村中混杂着自然腐败、邪教狂热和龙的领地意识。', trajectory: ['里多斯可以成为可靠向导。', '毒牙既可交涉也可成为高危战斗。'], hiddenInfo: ['整片区域的压迫感来自“这里不是人类的地盘了”。'], impact: '它能让第三章从普通支线调查抬升到史诗危险。' }),
                    roleplayTips: [{ npc: '里多斯', role: '德鲁伊 / 朴素盟友', voice: '低声、耐心，像在跟树林而不是跟人对话。', personality: '谨慎、真诚、不喜欢废话。', motivation: '赶走毒牙，让这片土地有机会恢复。' }, { npc: '毒牙（Venomfang）', role: '年轻绿龙', voice: '柔滑、优雅，像在半开玩笑地宣布死亡。', speech: '喜欢先让别人以为自己有谈判空间。', bodyLanguage: '总占据更高、更安全的位置。', personality: '傲慢、聪明、玩味猎物反应。', motivation: '扩大领地，享受支配感。', fear: '被群体围住、被看穿虚张声势。', responses: { friendly: '会试图把玩家当可利用的临时工具。', aggressive: '立刻把对话变成恐吓或吐息威胁。' } }],
                    playerClues: buildClues({ obvious: ['这里到处都有“被占领的自然”痕迹。'], hidden: ['里多斯会告诉你毒牙更看重支配而不是死斗。'], misleading: ['毒龙看起来像在给机会，但大多是为了先读你们。'], rewards: ['若处理得好，可同时拿到盟友、情报和龙的压力体验。'] }),
                    branchPrompts: [{ choice: '先找里多斯', outcome: '能得到更稳的区域建议。', reward: '少走弯路。' }, { choice: '直面毒牙', outcome: '戏剧性极强。', risk: '容易把自己送进超模战斗。', reward: '一旦谈成会非常震撼。' }],
                    dmTips: buildDmTips({ tableFlow: ['把雷树镇当一整块危险生态，而不是几间独立房间。'], pacing: '探索要慢，见龙要更慢。', ambience: ['灰烬、潮气、扭曲植物和若有若无的酸毒气味。'], lessons: ['龙场景的重点是存在感，不是立刻开打。'], music: ['废墟迷雾', '龙之凝视'] }),
                    combat: {
                        title: '雷树镇的高危遭遇',
                        objective: '在废村中清理威胁，并在需要时从毒牙手中全身而退或逼退它。',
                        recommendedLevel: '3-4 级',
                        difficulty: 'hard',
                        terrain: ['废屋、断墙和植被让视线经常被切断。', '高处屋顶与倒塌烟囱给龙提供俯视位。'],
                        tactics: ['若毒牙上场，它更喜欢恐吓与游击，不愿白白换血。'],
                        tacticsPhases: { opening: '先让较弱敌人消耗玩家，再显露更高威胁。', firstRound: '毒牙会测试队伍是否害怕它。', midFight: '保持机动，利用吐息和高度差。', emergency: '血量过低时直接飞离，不做无意义死战。' },
                        difficultyAdjustments: { easy: '把龙压成纯社交威胁，只打植物或亡灵。', standard: '龙仅在被挑衅或时机成熟时出手。', hard: '龙短暂参战并用环境切割队伍。' },
                        rewards: ['废村情报', '里多斯盟助', '对龙威胁的实战印象'],
                        enemies: [{ name: '灰烬僵尸', count: 3, ...ZOMBIE_BASE, attacks: ['猛击 +3，1d6+1 钝击'], traits: ['不死顽强', '被火惊动更躁动'], positioning: '在废屋与街口缓慢出现。', tactics: '拖住玩家，为更大威胁制造压迫。' }, { name: '毒牙（可选）', count: 1, ...YOUNG_GREEN_DRAGON_BASE, attacks: ['啃咬、爪击、毒息'], traits: ['飞行压制', '毒息威慑', '高位谈判者'], positioning: '优先占据高屋顶或残塔。', tactics: '绝不在不必要时落地和玩家换血。', retreat: '一旦看见真正风险就撤走。' }]
                    },
                    nextScenes: ['lmp-3-cragmaw-castle']
                },
                {
                    id: 'lmp-3-cragmaw-castle',
                    title: '克拉摩堡（Cragmaw Castle）',
                    location: '破败城堡与被占据的大厅',
                    mood: '紧绷、肮脏、首领间互不信任',
                    tags: ['救援', '城堡', '甘德伦线'],
                    narration: joinParas('克拉摩堡残破得像一具旧伤未愈的尸体：坍塌外墙、漏雨大厅和被匆忙修补过的木门拼出一种既危险又可利用的混乱。', '这里的空气和据点洞穴不同，不再是混乱野味，而是一种压着权力斗争的霉味。甘德伦就在城堡某处，而每个守卫都知道他值钱。', '你们接近的不只是俘虏地点，也是黑蜘蛛势力第一次露出更清楚轮廓的地方。'),
                    summary: '第三章收束点：救甘德伦、见到更高层命令链、为矿坑入口做最终跳板。',
                    storySummary: buildStorySummary({ background: '甘德伦被带到城堡，哥布林、熊地精和更危险的幕后命令在此交汇。', trajectory: ['潜入、突袭和离间都可用。', '重点是救人和拿到矿坑线索，而非清完全图。'], hiddenInfo: ['格罗尔在和变形怪做不稳定交易。'], impact: '这场后，剧情会明确转向 Wave Echo Cave。' }),
                    roleplayTips: [{ npc: '格罗尔王', role: '城堡首领', voice: '低沉、慢，像在故意让别人等他发怒。', personality: '贪婪、怀疑心重、重面子。', motivation: '把俘虏与情报卖到最高价。', fear: '被手下或合作方看出自己失去控制。' }, { npc: '变形怪使者', role: '黑蜘蛛代理人', voice: '平静得不带情绪，几乎像背稿。', personality: '实用、冷漠、目标明确。', motivation: '尽快把矿坑情报带回黑蜘蛛。' }],
                    playerClues: buildClues({ obvious: ['城堡内部的权力并不稳。'], hidden: ['监听或侦查能发现格罗尔和使者之间并不信任。'], rewards: ['成功救出甘德伦会把主线直接推到第四章。'] }),
                    branchPrompts: [{ choice: '优先救人', outcome: '更像特种行动。', reward: '节省资源，直接推进主线。' }, { choice: '先打乱城堡秩序', outcome: '更适合喜欢系统清图的队伍。', risk: '更容易惊动首领室。', reward: '能多拿情报与战利品。' }],
                    dmTips: buildDmTips({ tableFlow: ['强调“这里每个房间都可能在等命令”，和第一章据点形成对比。'], pacing: '前半潜入侦查，后半迅速爆发。', ambience: ['霉味、漏雨、粗糙修补的木门。'], lessons: ['救援任务的重点是目标优先级，而不一定是清图。'], music: ['破败城堡', '俘虏营救'] }),
                    combat: {
                        title: '克拉摩堡突入',
                        objective: '救出甘德伦，并阻止矿坑情报继续上交。',
                        recommendedLevel: '4 级',
                        difficulty: 'standard',
                        terrain: ['残墙、门厅和杂乱房间适合潜入与包夹。'],
                        tactics: ['守军依赖房间切割而不是整齐阵线。'],
                        tacticsPhases: { opening: '外圈守卫拖时间，内圈准备保护首领和俘虏。', firstRound: '霍布哥布林组织更严密，优先守通路。', midFight: '格罗尔会先判断情报与俘虏还能不能保住。' },
                        difficultyAdjustments: { easy: '减少一组精锐守卫。', standard: '守卫、首领和使者形成混乱三角。', hard: '让变形怪更早介入并偷袭后排。' },
                        rewards: ['甘德伦获救', '矿坑入口信息'],
                        enemies: [{ name: '霍布哥布林守军', count: 3, ...HOBGOBLIN_BASE, attacks: ['长剑 +3，1d8+1 劈砍', '长弓 +3，1d8+1 穿刺'], traits: ['纪律性', '集火脆弱目标'], positioning: '守在关键门口和大厅。', tactics: '利用房间门框和整齐站位作战。' }, { name: '格罗尔王', count: 1, ...BUGBEAR_BASE, attacks: ['晨星锤 +4，2d8+2 钝击'], traits: ['残忍压制'], positioning: '靠近俘虏与核心房间。', tactics: '把人质和空间一起当筹码。' }, { name: '变形怪使者', count: 1, ...DOPPELGANGER_BASE, attacks: ['钉头槌 +6，1d6+4'], traits: ['变形', '读心'], positioning: '伪装在混乱中心。', tactics: '优先找落单或受伤目标。', retreat: '任务失败时优先脱身。' }]
                    },
                    nextScenes: ['lmp-4-wave-echo-entrance']
                }
            ]
        },
        {
            id: 'lmp-part-4',
            title: '第四章：潮音洞穴',
            summary: '矿坑入口、黑蜘蛛与最终对决收束全部主线，关键是把前面几章积累的选择与关系都带回终章。',
            scenes: [
                {
                    id: 'lmp-4-wave-echo-entrance',
                    title: '寻找矿坑入口',
                    location: '荒丘裂隙与矿坑外圈',
                    mood: '终章前的屏息',
                    tags: ['入口', '终章', '远古遗迹'],
                    narration: joinParas('入口不是一扇门，而是一种从地表渐渐下沉的气氛。碎石坡间吹出的风带着金属、潮气和某种陈旧魔法残留的味道。', '越靠近裂隙，脚下越能听见回声像从石头内部传出来，仿佛整个山体都记得曾经有锤声、咒文和财富在这里苏醒。', '这不是普通地城门口，而是终章的吸气。你们只要再往前一步，所有旧线索都会开始回收。'),
                    summary: '终章前的入口场景，用氛围和外圈守卫把战场气质先立起来。',
                    storySummary: buildStorySummary({ background: '矿坑入口的价值是“过门”：让玩家感到自己终于来到真正的故事中心。', trajectory: ['可先侦查，再决定如何突破外圈。'], hiddenInfo: ['黑蜘蛛的人已在更深处布好第一层迟滞防线。'], impact: '它决定终章开场是从容踏入，还是在压力中被迫闯入。' }),
                    roleplayTips: [{ npc: '矿坑守卫', role: '拖延时间的前哨', voice: '不多说话，主要靠短促警报和手势交流。', personality: '比前面遇到的杂兵更懂“任务不是赢，是拖”。', motivation: '把闯入者卡在外圈，给内部争取时间。' }],
                    playerClues: buildClues({ obvious: ['入口周边有人类或类人生物活动的近期痕迹。'], hidden: ['若观察到高地和支架，可推断守卫更重视拖延而非死守。'], rewards: ['稳住外圈能让终章第一印象更从容。'] }),
                    branchPrompts: [{ choice: '先踩点再突入', outcome: '更像精确行动。', reward: '更易拿到好位置。' }, { choice: '直接打穿入口', outcome: '压迫感拉满。', risk: '内部会更快得知你们到来。', reward: '节奏非常猛。' }],
                    dmTips: buildDmTips({ tableFlow: ['把入口当作“终章门槛”，让所有描述都带一点庄严感。'], pacing: '短侦查后迅速拉开终章帷幕。', ambience: ['回声、矿尘、旧魔法的冷感。'], lessons: ['终章入口本身应该像一个角色。'], music: ['矿坑序曲'] }),
                    combat: {
                        title: '矿坑外围警戒',
                        objective: '突破前哨防线，为深入矿坑建立战术优势。',
                        recommendedLevel: '4 级',
                        difficulty: 'standard',
                        terrain: ['碎石坡、高低差与木支架形成外圈火力点。'],
                        tactics: ['守卫优先示警和拖延，不恋战。'],
                        tacticsPhases: { opening: '高处守卫观察，低处人手准备后撤。', firstRound: '先拉警报，再用地形拖慢推进。' },
                        difficultyAdjustments: { easy: '减少 1 名守卫。', standard: '3 名守卫和高位火力。', hard: '高处再加 1 名射手。' },
                        rewards: ['终章前置情报'],
                        enemies: [{ name: '矿坑守卫', count: 3, ...SKELETON_BASE, attacks: ['短弓 +4，1d6+2 穿刺', '短剑 +4，1d6+2 穿刺'], traits: ['熟悉外圈地形'], positioning: '高低位交错。', tactics: '优先示警并拖时间。' }]
                    },
                    nextScenes: ['lmp-4-black-spider-lair']
                },
                {
                    id: 'lmp-4-black-spider-lair',
                    title: '黑蜘蛛巢穴',
                    location: '潮音洞穴深处的遗迹作业区',
                    mood: '阴谋终于具象化',
                    tags: ['反派', '对峙', '矿坑核心'],
                    narration: joinParas('蛛丝在古老石梁间结成半透明帘幕，旧矿坑的秩序与新侵入者的痕迹被粗暴地缝在一起。', '黑蜘蛛不是误闯者，他把这里当成工作台：记录、守卫、囚犯与法术材料都摆得像一场长期经营。', '走到这里时，玩家应当有一种很清楚的感觉：幕后黑手终于从传闻变成了可以对话、可以仇恨、也可以亲手击碎的人。'),
                    summary: '黑蜘蛛应当像真正的反派登场，而不是一张等着被掀开的怪物卡。',
                    storySummary: buildStorySummary({ background: '黑蜘蛛把矿坑遗迹改造成自己的行动中心，并掌握大量先手信息。', trajectory: ['可以先谈，先骗，或者直接抢位置。'], hiddenInfo: ['他知道比玩家想象更多的前因后果。'], impact: '这一场决定最终战的情绪高度。' }),
                    roleplayTips: [{ npc: '黑蜘蛛（内兹纳）', role: '幕后主使', voice: '冷静、干净、像每句话都提前打过草稿。', speech: '喜欢替别人定义动机，用“你们其实也只是…”一类句式抢话语权。', bodyLanguage: '几乎不浪费动作，总在安全距离内指挥。', personality: '骄傲、精于算计、不愿承认自己会失控。', motivation: '独占矿坑与其蕴含的力量。', fear: '布局在最后一步被人破坏。', responses: { friendly: '会试图把玩家拉进交易和谎言里。', aggressive: '立刻切成控制战场的姿态。' } }, { npc: '南卓·寻岩者', role: '受害者', voice: '虚弱、急切。', personality: '受创但还没放弃。', motivation: '活下来并阻止矿坑彻底落入敌手。' }],
                    playerClues: buildClues({ obvious: ['这里的一切都说明黑蜘蛛已经经营许久。'], hidden: ['从记录与布防能看出他不是鲁莽赌徒。'], rewards: ['多听几句反派台词，能让终章更有重量。'] }),
                    branchPrompts: [{ choice: '先套情报', outcome: '更能凸显反派脑力。', risk: '也给他更多观察时间。', reward: '终局会更完整。' }, { choice: '先抢站位', outcome: '战术上更稳。', reward: '能降低首轮压力。' }],
                    dmTips: buildDmTips({ tableFlow: ['让黑蜘蛛先“存在”几句，再进入战斗或追逐。'], pacing: '先压低气压，再爆发冲突。', ambience: ['蛛丝、低语、潮湿石面与冷色法术光。'], lessons: ['反派的魅力往往来自控制场面的方式，而不只是数值。'], music: ['反派对峙'] }),
                    combat: {
                        title: '黑蜘蛛前哨战',
                        objective: '拆掉黑蜘蛛的第一层防线，并把他逼入真正的终局。',
                        recommendedLevel: '4-5 级',
                        difficulty: 'standard',
                        terrain: ['蛛网阻碍移动，断柱形成掩体。'],
                        tactics: ['黑蜘蛛偏爱控制站位，让护卫负责缠斗。'],
                        tacticsPhases: { opening: '反派先用语言拖住半拍，再看你们的站位。', firstRound: '护卫先顶，黑蜘蛛从后排施压。', midFight: '优先切断队伍协同。', emergency: '若劣势明显，转向更深处或最终区域。' },
                        difficultyAdjustments: { easy: '减少 1 名护卫。', standard: '黑蜘蛛加 2 名护卫。', hard: '再加蛛网与额外蜘蛛。' },
                        rewards: ['终局前核心情报'],
                        enemies: [{ name: '黑蜘蛛', count: 1, ...BLACK_SPIDER_BASE, attacks: ['法术攻击与控制法术'], traits: ['战场控制', '反派预判'], positioning: '总在护卫和掩体之后。', tactics: '优先打散队伍并迫使玩家换位。' }, { name: '巨蜘蛛护卫', count: 2, ...GIANT_SPIDER_BASE, attacks: ['咬击 +5，1d8+3 穿刺外加毒素'], traits: ['蛛网移动', '缠住孤立目标'], positioning: '从侧壁与天花板压下。', tactics: '专找后排与单独目标。' }]
                    },
                    nextScenes: ['lmp-4-final-confrontation']
                },
                {
                    id: 'lmp-4-final-confrontation',
                    title: '最终对决',
                    location: '潮音洞穴核心区域',
                    mood: '史诗与崩塌边缘',
                    tags: ['高潮', '终局战', '矿坑命运'],
                    narration: joinParas('矿坑最深处的回响像一座还未死去的钟，每一步、每句咒文和每一次金属相撞都被它放大。', '这里终于容得下所有东西同时存在：失落财富的诱惑、黑蜘蛛的野心、寻岩者家族的执念，以及你们一路走到这里留下的全部选择。', '终局真正重要的不是“谁最后一击”，而是让玩家感觉自己正在决定凡达林和矿坑未来会变成什么样。'),
                    summary: '最终战要把战斗、环境危机和情感回收同时打包，不只是把 Boss 的 HP 打空。',
                    storySummary: buildStorySummary({ background: '黑蜘蛛最后的抵抗与矿坑本身的不稳定在这里合流。', trajectory: ['可专注集火反派，也可兼顾矿坑、盟友与环境。'], hiddenInfo: ['如果你前面铺垫得好，终局会像一场选择题而不是 DPS 检查。'], impact: '它定义这次冒险在玩家记忆中的最终味道。' }),
                    roleplayTips: [{ npc: '黑蜘蛛（终局姿态）', role: '被逼到角落的主谋', voice: '比之前更尖锐，克制开始裂开。', speech: '从高高在上转向急于重新掌控局面。', bodyLanguage: '一边指挥，一边不断看向能翻盘的环境点。', personality: '仍然骄傲，但已经露出恐慌。', motivation: '哪怕失去矿坑，也不愿把胜利交给别人。' }],
                    playerClues: buildClues({ obvious: ['矿坑本身也是战场的一部分。'], hidden: ['前面建立的盟友和选择都可在这里回收。'], rewards: ['若玩家分工得当，终局会更像团队完成的高点。'] }),
                    branchPrompts: [{ choice: '专注斩首反派', outcome: '战斗可能更快结束。', risk: '环境压力会更难处理。', reward: '节奏更紧。' }, { choice: '一边稳矿坑一边作战', outcome: '更具英雄叙事。', risk: '对团队协作要求更高。', reward: '结局更有情感回报。' }],
                    dmTips: buildDmTips({ tableFlow: ['把前面章节的重要人、情报和后果尽量带回来。'], pacing: '开场拉满，中段转折，结尾收束。', ambience: ['矿脉冷光、碎石崩落、深处回声。'], lessons: ['最终战必须是情感高点，而不只是数值高点。'], spotlightMoments: ['给每个角色一个能决定局面的瞬间。'], music: ['最终 Boss 战'] }),
                    combat: {
                        title: '潮音洞穴终局',
                        objective: '击败黑蜘蛛并稳住矿坑局势，让这座矿坑重新回到你们选择的未来。',
                        stakes: '若只顾打 Boss，矿坑和周边人命可能一起坍进黑暗。',
                        recommendedLevel: '5 级',
                        difficulty: 'standard',
                        terrain: ['发光矿脉、断桥、深坑与不稳定平台共同组成终局地形。'],
                        terrainDetails: { cover: ['断柱与矿脉凸起提供临时掩护。'], hazards: ['崩落平台和深坑会惩罚盲目冲锋。'], chokepoints: ['狭桥与边缘平台会迫使队伍分工。'], interactables: ['绞盘、支架与矿脉节点都可被利用或破坏。'] },
                        tactics: ['黑蜘蛛把“击败你们”和“让矿坑失控”绑定成同一个威胁。'],
                        tacticsPhases: { opening: '反派试图先用环境占心理优势。', firstRound: '护卫上前缠斗，黑蜘蛛控场。', midFight: '开始把战斗目标转成“谁去处理环境危机”。', emergency: '反派会赌最后一次翻盘机会，而不是体面撤退。' },
                        difficultyAdjustments: { easy: '减少 1 名护卫，并降低环境压力。', standard: '反派、护卫和环境危机并存。', hard: '增加平台崩塌或额外蜘蛛骚扰。' },
                        dynamicAdjustments: ['若队伍被环境压得太狠，可让危机延后一轮爆发。'],
                        rewards: ['矿坑控制权', '凡达林地区声望', '完整终局回报'],
                        rewardDetails: { loot: ['黑蜘蛛遗物、矿坑样本、可用于后续经营的资源。'], reputation: ['寻岩者家族与凡达林都会记住这场胜利。'], fallout: '玩家对矿坑处理方式会决定结局基调。' },
                        enemies: [{ name: '黑蜘蛛', count: 1, ...BLACK_SPIDER_BASE, attacks: ['法术攻击与控制法术'], traits: ['终局指挥者', '环境利用'], positioning: '始终围绕关键矿脉与高位移动。', tactics: '逼玩家在追击他与处理危机间做选择。' }, { name: '巨蜘蛛残部', count: 2, ...GIANT_SPIDER_BASE, attacks: ['咬击 +5，1d8+3 穿刺外加毒素'], traits: ['缠住后排', '利用高处'], positioning: '从天花板和侧壁突入。', tactics: '骚扰施法者和处理机关的人。' }]
                    },
                    nextScenes: []
                }
            ]
        }
    ]
};

window.ADVENTURES = Array.isArray(window.ADVENTURES)
    ? window.ADVENTURES.filter(adventure => adventure.id !== LOST_MINE_OF_PHANDELVER.id)
    : [];

window.ADVENTURES.push(LOST_MINE_OF_PHANDELVER);
