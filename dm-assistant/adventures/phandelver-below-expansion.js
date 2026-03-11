(() => {
    const join = (...parts) => parts.join('\n\n');
    const story = ({ background = '', trajectory = [], hiddenInfo = [], impact = '' }) => ({ background, trajectory, hiddenInfo, impact });
    const clues = ({ obvious = [], hidden = [], misleading = [], rewards = [] }) => ({ obvious, hidden, misleading, rewards });
    const tips = ({ tableFlow = [], pacing = '', ambience = [], contingency = [], lessons = [], music = [] }) => ({ tableFlow, pacing, ambience, contingency, lessons, music });

    const PSIONIC_GOBLIN = { hp: '16 (3d6+6)', ac: 15, challenge: '1/2 (100 XP)', speed: '30 尺', stats: '力 8 敏 14 体 14 智 10 感 8 魅 10', senses: '黑暗视觉 60 尺，被动察觉 9', languages: '通用语、地精语' };
    const GRELL = { hp: '55 (10d10)', ac: 12, challenge: '3 (700 XP)', speed: '10 尺，飞行 30 尺', stats: '力 15 敏 14 体 11 智 12 感 13 魅 9', senses: '盲视 60 尺，被动察觉 11', languages: '地底语' };
    const ASHENWIGHT = { hp: '45 (6d8+18)', ac: 14, challenge: '3 (700 XP)', speed: '30 尺', stats: '力 14 敏 12 体 16 智 8 感 10 魅 8', senses: '黑暗视觉 60 尺，被动察觉 10', languages: '理解生前语言但很少开口' };
    const ABERRANT_ZEALOT = { hp: '33 (6d8+6)', ac: 13, challenge: '2 (450 XP)', speed: '30 尺', stats: '力 12 敏 12 体 13 智 10 感 11 魅 12', senses: '黑暗视觉 60 尺，被动察觉 10', languages: '通用语、地底语' };
    const SHIELD_GUARDIAN = { hp: '142 (15d10+60)', ac: 17, challenge: '7 (2900 XP)', speed: '30 尺', stats: '力 18 敏 8 体 18 智 7 感 10 魅 3', senses: '盲视 10 尺，被动察觉 10', languages: '理解主人的命令' };
    const DROW_ELITE = { hp: '71 (11d8+22)', ac: 18, challenge: '5 (1800 XP)', speed: '30 尺', stats: '力 13 敏 18 体 14 智 11 感 13 魅 12', senses: '黑暗视觉 120 尺，被动察觉 15', languages: '精灵语、地底语、通用语' };
    const MIND_FLAYER = { hp: '71 (13d8+13)', ac: 15, challenge: '7 (2900 XP)', speed: '30 尺', stats: '力 11 敏 12 体 12 智 19 感 17 魅 17', senses: '黑暗视觉 120 尺，被动察觉 13', languages: '深语、地底语、心灵感应 120 尺' };
    const SPECTATOR = { hp: '39 (6d8+12)', ac: 14, challenge: '3 (700 XP)', speed: '0 尺，飞行 30 尺', stats: '力 8 敏 14 体 14 智 13 感 14 魅 11', senses: '黑暗视觉 120 尺，被动察觉 16', languages: '深语、通用语' };
    const ILVAASH = { hp: '168 (16d10+80)', ac: 18, challenge: '12 (8400 XP)', speed: '0 尺，飞行 40 尺', stats: '力 18 敏 18 体 20 智 19 感 18 魅 20', senses: '真实视觉 120 尺，被动察觉 18', languages: '深语、心灵感应 120 尺' };

    const chapters = [
        {
            id: 'pbtso-part-5',
            title: '第五章：危途歧路',
            summary: '凯旋后的凡达林并未恢复平静；怪梦、村井、老鸮井与佐祖拉之憩共同把故事推向灵能惊悚的后半段。',
            scenes: [
                {
                    id: 'pbtso-5-return',
                    title: '重返凡达林',
                    location: '凡达林与石丘旅店',
                    mood: '凯旋后的不安',
                    tags: ['归来', '凡达林', '异变'],
                    narration: join('庆功是真的，但每个镇民都像用力过猛地庆祝，仿佛只要声音够大，黄昏后的怪梦和失踪就会被一起压下去。托布伦笑着上酒，修达却只盯着井口和街角。', '几个人先后提到同一种梦：黑水、低语、会呼吸的石头。胜利没有结束故事，它只是把玩家带回了一个更值得被拯救、也更危险的凡达林。'),
                    summary: '把前四章的英雄归来平滑切进后四章的灵能异变。',
                    storySummary: story({ background: '黑蜘蛛已败，但方尖碑相关的污染没有结束。', trajectory: ['玩家会从庆功和问话里拼出怪梦、失踪与井边异状。'], hiddenInfo: ['凡达林脚下还埋着更古老的麻烦。'], impact: '让玩家重新把凡达林当成主角之一。' }),
                    roleplayTips: [{ npc: '托布伦·石丘', role: '旅店主', voice: '热情里带虚', personality: '真心感谢玩家，却怕庆功一结束就又出事。', motivation: '让凡达林保持“还能正常过日子”的样子。' }, { npc: '修达·霍温特', role: '秩序观察者', voice: '低沉谨慎', personality: '克制、负责、先确认再行动。', motivation: '在城镇失控前摸清源头。' }],
                    playerClues: clues({ obvious: ['镇民普遍失眠、紧张。', '多个人做了高度相似的梦。'], hidden: ['线索会反复落到村井、老鸮井和镇外山丘。'], misleading: ['有人会把一切怪到矿坑残毒上。'], rewards: ['若先安抚凡达林，后面每次回镇都会更有情感回报。'] }),
                    branchPrompts: [{ choice: '先庆功问话', outcome: '更有人情味。', reward: '城镇关系更稳。' }, { choice: '直接追查异状', outcome: '更紧迫。', reward: '更快切进主线。' }],
                    dmTips: tips({ tableFlow: ['先给一点凯旋，再慢慢压下笑声。'], pacing: '温暖转阴冷。', ambience: ['灯火、热汤、风铃和忽然失手摔碎的杯子。'], contingency: ['若玩家拖太久，就用新的尖叫或失踪打断庆功。'], lessons: ['续章开头先让玩家想守住这个地方。'], music: ['凯旋后降温'] }),
                    combat: null,
                    nextScenes: ['pbtso-5-village-well', 'pbtso-5-old-owl-well']
                },
                {
                    id: 'pbtso-5-village-well',
                    title: '村井之下',
                    location: '凡达林村井与井下石腔',
                    mood: '湿冷、狭窄、像被什么注视着',
                    tags: ['村井', '灵能地精', '地下'],
                    narration: join('白天再普通不过的井口，到了夜里就比周围阴影更黑一层。下井后，玩家会立刻明白镇民没有夸张：这里不只是藏着敌人，还藏着一种会顺着脑海边缘说话的东西。', '井道里的地精不再像前四章那样只是胆怯又狡猾，它们开始同步、开始共享节奏，像某个更深处的意志正借它们试探凡达林。'),
                    summary: '建立后半段敌人的新手感：更灵能、更协调、更不舒服。',
                    storySummary: story({ background: '井下前哨被灵能污染后的地精控制。', trajectory: ['玩家战斗并追出更明确的镇外活动路径。'], hiddenInfo: ['这些地精在替更高位的存在工作。'], impact: '把异变从“传闻”升级为“组织行动”。' }),
                    roleplayTips: [{ npc: '灵能地精侦察者', role: '前线触手', voice: '像几个人挤在一句话里', personality: '神经质又同步。', motivation: '试探、窥视、执行命令。' }],
                    playerClues: clues({ obvious: ['井下敌人不是普通地精。', '足迹把线索指向镇外。'], hidden: ['残留记号会把剧情推向老鸮井和佐祖拉之憩。'], rewards: ['镇民会更愿意相信你们。'] }),
                    branchPrompts: [{ choice: '悄悄下井', outcome: '容易先手。', reward: '能看清敌人布置。' }, { choice: '地面设伏', outcome: '更安全。', reward: '镇民会直接见证你们的保护。' }],
                    dmTips: tips({ tableFlow: ['把井口先演得平常，再慢慢变怪。'], pacing: '短促而不舒服的第一战。', ambience: ['绳桶回声、潮湿石苔、脑海低语。'], contingency: ['若玩家不下井，就让逃兵把线索往深处带。'], lessons: ['新敌人的差异最好先体现在行为逻辑。'], music: ['井下遭遇'] }),
                    combat: {
                        title: '村井下的灵能伏击',
                        objective: '清理前哨并拿到凡达林异变的直接线索。',
                        stakes: '若让敌人撤走，凡达林会继续被更精准地窥探。',
                        recommendedLevel: '5 级',
                        difficulty: 'standard',
                        terrain: ['狭窄井道、湿滑石阶、半淹没石腔。'],
                        terrainDetails: { hazards: ['湿滑地面会放大换位失误。'], chokepoints: ['绳梯与狭缝让队伍难以并排展开。'] },
                        tactics: ['地精先打散阵型，格雷尔抓走落单后排。'],
                        tacticsPhases: { opening: '利用高低差先手。', firstRound: '远程压制配合低语。', midFight: '集中切后排。', emergency: '幸存者试图带着线索逃。' },
                        difficultyAdjustments: { easy: '减少 1 名灵能地精。', standard: '4 名灵能地精与 1 只格雷尔。', hard: '让格雷尔更早从顶部扑下。' },
                        rewards: ['镇外活动路径', '灵能碎语', '凡达林信任'],
                        enemies: [
                            { name: '灵能地精侦察者', count: 4, ...PSIONIC_GOBLIN, attacks: ['短弓 +4，1d6+2 穿刺外加 1d4 心灵', '弯刀 +4，1d6+2 劈砍'], traits: ['灵巧撤离', '共享低语'], positioning: '井壁凹槽与石腔转角。', tactics: '打了就撤，始终逼玩家换位。' },
                            { name: '井下格雷尔', count: 1, ...GRELL, attacks: ['触须缠绕 +6，1d6+4 穿刺', '喙击 +6，1d6+4 穿刺'], traits: ['黑暗突袭', '优先抓后排'], positioning: '石腔顶部阴影。', tactics: '专找脱节目标。' }
                        ]
                    },
                    nextScenes: ['pbtso-5-old-owl-well', 'pbtso-5-zorzulas-rest']
                },
                {
                    id: 'pbtso-5-old-owl-well',
                    title: '老鸮井',
                    location: '老鸮井遗址',
                    mood: '旧伤被重新撕开',
                    tags: ['老鸮井', '死灵', '线索'],
                    narration: join('老鸮井本来就不适合让人安心，如今更像被某种新力量顺手翻找过的坟冢：有人来过，有东西被带走，也有东西被重新叫了起来。', '这里把玩家带向一个更大的结论：敌人并不是只盯着凡达林，而是在系统性地搜索、激活、利用所有古老节点。'),
                    summary: '把旧危险变成新阴谋的证据库。',
                    storySummary: story({ background: '老鸮井被临时当作灵能势力的中转站。', trajectory: ['玩家清理守卫并回收日志。'], hiddenInfo: ['记录会指向佐祖拉之憩和更深遗址。'], impact: '让第五章调查线更完整。' }),
                    roleplayTips: [{ npc: '灰烬枯魂', role: '被二次利用的死者', voice: '砂砾磨骨般沙哑', personality: '残响多于人格。', motivation: '守住被污染过的现场。' }],
                    playerClues: clues({ obvious: ['这里被人新近翻查过。', '亡灵只是表层现象。'], hidden: ['日志能直接点出佐祖拉之憩。'], rewards: ['后续据点攻坚会更有方向。'] }),
                    branchPrompts: [{ choice: '先搜日志', outcome: '信息更完整。', reward: '后续路线更清晰。' }, { choice: '先清怪', outcome: '更稳。', reward: '现场更安全。' }],
                    dmTips: tips({ tableFlow: ['重点放在“情报现场”，别把它演成又一个普通刷怪点。'], pacing: '短探索 + 短战斗。', ambience: ['断塔、冷风、旧帐篷和发霉羊皮纸。'], contingency: ['若玩家漏掉情报，就让半毁日志更直白。'], lessons: ['经典地点回归要有新用途。'], music: ['荒野遗迹'] }),
                    combat: {
                        title: '老鸮井的灰烬守卫',
                        objective: '带走指向下一站的记录。',
                        stakes: '若仓促离开，会少一层先行情报。',
                        recommendedLevel: '5 级',
                        difficulty: 'standard',
                        terrain: ['半塌石塔、破营地与枯井边缘。'],
                        tactics: ['灰烬枯魂堵路，狂信者试图烧毁记录。'],
                        difficultyAdjustments: { easy: '减少 1 名灰烬枯魂。', standard: '2 名灰烬枯魂与 1 名畸变狂信者。', hard: '再加 2 名灵能地精骚扰。' },
                        rewards: ['残留日志', '路径草图'],
                        enemies: [
                            { name: '灰烬枯魂', count: 2, ...ASHENWIGHT, attacks: ['长剑 +4，1d8+2 劈砍', '枯爪 +4，1d6+2 黯蚀'], traits: ['不死压迫'], positioning: '石塔入口与营地边缘。', tactics: '拖住前排。' },
                            { name: '畸变狂信者', count: 1, ...ABERRANT_ZEALOT, attacks: ['弯刃 +3，1d6+1 劈砍', '心灵尖刺 +4，1d8 心灵'], traits: ['会优先烧日志'], positioning: '旧营帐后方。', tactics: '拖时间、毁资料。' }
                        ]
                    },
                    nextScenes: ['pbtso-5-zorzulas-rest']
                },
                {
                    id: 'pbtso-5-zorzulas-rest',
                    title: '佐祖拉之憩',
                    location: 'Zorzulas Rest 废墟据点',
                    mood: '旧圣地被新腐化占据',
                    tags: ['佐祖拉之憩', '据点', '章节终点'],
                    narration: join('佐祖拉之憩原本属于安静与休整，如今却成了会监听来客的前哨。古老休憩纹样与后刻的扭曲符号叠在一起，像一张温和面孔被硬缝进了别人的牙。', '到了这里，玩家终于能把梦境、村井、老鸮井和外部活动线拼成一条完整链条：有人在为方尖碑碎片系统性铺路。'),
                    summary: '第五章收束点：给玩家一个能打、能搜、能带走第六章方向的据点。',
                    storySummary: story({ background: '佐祖拉之憩是灵能地精的集结与转运节点。', trajectory: ['玩家潜入或强攻，并回收明确指向塔尔亨德雷斯的资料。'], hiddenInfo: ['更高位的夺心魔已亲自评估过这里。'], impact: '把调查推进成明确追猎。' }),
                    roleplayTips: [{ npc: '灵能地精头目', role: '中层执行者', voice: '笑得很快也停得很快', personality: '机灵、狂热、惧怕失去赐力。', motivation: '证明自己配得上聆听更深声音。' }],
                    playerClues: clues({ obvious: ['这不是杂兵窝点，而是有层级的据点。', '所有资料都指向碎片和旧城。'], hidden: ['据点资料还能把凡达林地下通道和塔尔亨德雷斯连起来。'], rewards: ['第六章会有更强主动权。'] }),
                    branchPrompts: [{ choice: '潜入先切头目', outcome: '更利落。', reward: '更容易保住资料。' }, { choice: '直接强攻', outcome: '战斗更爽。', reward: '气势拉满。' }],
                    dmTips: tips({ tableFlow: ['把“旧圣地被篡改”的反差做足。'], pacing: '前半攻坚，后半读资料。', ambience: ['裂像、祈祷纹、铁锈味与潮湿风。'], contingency: ['若资料被烧，幸存者也要能交代塔尔亨德雷斯。'], lessons: ['章节终点最好同时给战斗高潮和下一章坐标。'], music: ['据点攻坚'] }),
                    combat: {
                        title: '佐祖拉之憩攻坚战',
                        objective: '拿下前哨并夺回主动权。',
                        stakes: '若核心资料被毁，第六章会更像盲闯。',
                        recommendedLevel: '5-6 级',
                        difficulty: 'hard',
                        terrain: ['残墙、回廊与旧祈祷大厅。'],
                        tactics: ['守军靠多角度游击拖节奏，再让头目找关键击杀。'],
                        difficultyAdjustments: { easy: '减少 2 名灵能地精。', standard: '6 名灵能地精与 1 名狂信者。', hard: '再加入 1 名头目。' },
                        rewards: ['塔尔亨德雷斯资料', '方尖碑势力轮廓'],
                        enemies: [
                            { name: '灵能地精守军', count: 6, ...PSIONIC_GOBLIN, attacks: ['短弓 +4，1d6+2 穿刺外加 1d4 心灵', '弯刀 +4，1d6+2 劈砍'], traits: ['灵巧撤离', '高地换位'], positioning: '断墙与高台之间。', tactics: '多角度消耗推进者。' },
                            { name: '畸变狂信者', count: 1, ...ABERRANT_ZEALOT, attacks: ['弯刃 +3，1d6+1 劈砍', '心灵尖刺 +4，1d8 心灵'], traits: ['干扰施法'], positioning: '大厅后段。', tactics: '保护头目。' },
                            { name: '灵能地精头目', count: 1, ...PSIONIC_GOBLIN, hp: '38 (7d6+14)', ac: 16, challenge: '2 (450 XP)', attacks: ['短弓 +5，1d6+3 穿刺外加 1d6 心灵', '长弯刀 +5，1d8+3 劈砍'], traits: ['指挥低语'], positioning: '石台附近。', tactics: '优先集火脆弱目标。' }
                        ]
                    },
                    nextScenes: ['pbtso-6-beneath']
                }
            ]
        },
        {
            id: 'pbtso-part-6',
            title: '第六章：破碎方尖碑',
            summary: '凡达林地下的线索最终指向塔尔亨德雷斯、塔尔洪德墓窟、绞架渡口与方尖碑圣所，玩家第一次真正贴近碎片和高位指挥者。',
            scenes: [
                {
                    id: 'pbtso-6-beneath',
                    title: '凡达林地下',
                    location: '村井深处与古老石室',
                    mood: '镇子正压在头顶上',
                    tags: ['地下', '过门', '碎片'],
                    narration: join('重新下到井下时，玩家会立刻感觉这里已经不是临时巢穴，而是通往更古老遗址的根系。岩面偶尔闪过压住的脉动，像某种坏掉的心脏在地底轻轻收缩。', '凡达林的危险不只是“被敌人盯上”，而是镇子本来就踩在某种遗留之物上，如今终于有人知道从哪里把它撬开。'),
                    summary: '第六章入口：把城镇异变直接连到方尖碑碎片。',
                    storySummary: story({ background: '凡达林地下通道是通往旧城系统的一部分。', trajectory: ['玩家夺回通道控制并拿到塔尔亨德雷斯的明确坐标。'], hiddenInfo: ['这条路是旧文明留下的系统，不是偶然形成。'], impact: '把剧情从守镇推到追根。' }),
                    roleplayTips: [{ npc: '修达·霍温特', role: '现实锚点', voice: '冷静简练', personality: '知道何时该守镇、何时该下地。', motivation: '让玩家带着尽可能完整的情报出发。' }],
                    playerClues: clues({ obvious: ['凡达林地下与更古老结构相连。', '敌人一直沿这条线活动。'], hidden: ['遗留记号会反复指向塔尔亨德雷斯。'], rewards: ['越仔细侦查，后续越少吃亏。'] }),
                    branchPrompts: [{ choice: '先彻底侦查', outcome: '更稳。', reward: '路线更清楚。' }, { choice: '快速追击', outcome: '更紧迫。', reward: '压迫感更强。' }],
                    dmTips: tips({ tableFlow: ['重点是“发现根系”，不是打持久仗。'], pacing: '短探索 + 短战斗。', ambience: ['渗水岩壁、远处井口回声、微弱异光。'], contingency: ['若玩家没意识到旧城重要性，就把地图画得更直白。'], lessons: ['过门场景要给足坐标。'], music: ['下井再入古道'] }),
                    combat: {
                        title: '地下石室清剿',
                        objective: '夺回地下通道并拿到旧城线索。',
                        stakes: '若通道失守，凡达林会持续被地下渗透。',
                        recommendedLevel: '6 级',
                        difficulty: 'standard',
                        terrain: ['天然洞道、半塌石室与狭窄侧道。'],
                        tactics: ['地精边打边撤，格雷尔抓后排。'],
                        rewards: ['旧城路径', '转运痕迹'],
                        enemies: [
                            { name: '灵能地精搬运者', count: 4, ...PSIONIC_GOBLIN, attacks: ['短弓 +4，1d6+2 穿刺外加 1d4 心灵', '弯刀 +4，1d6+2 劈砍'], traits: ['共享低语'], positioning: '石室与侧道。', tactics: '护送关键物件后撤。' },
                            { name: '格雷尔伏击者', count: 1, ...GRELL, attacks: ['触须缠绕 +6，1d6+4 穿刺', '喙击 +6，1d6+4 穿刺'], traits: ['高处伏击'], positioning: '石室顶部。', tactics: '专抓法师或治疗者。' }
                        ]
                    },
                    nextScenes: ['pbtso-6-crypt', 'pbtso-6-gibbet']
                },
                {
                    id: 'pbtso-6-crypt',
                    title: '塔尔洪德墓窟',
                    location: 'Crypt of the Talhund',
                    mood: '被打扰的庄严',
                    tags: ['墓窟', '家族守护', '探索'],
                    narration: join('塔尔洪德墓窟不是藏宝洞，而是一处仍让人想放轻脚步的地方。祭龛、碑文、巡逻痕迹都说明这里曾被认真守护，正因为如此，它被撬开时的冒犯感才格外强。', '玩家在这里第一次意识到，真正关键的不只是“谁拿走碎片”，更是“为什么有人要拼命守着它”。'),
                    summary: '把旧家族守护和方尖碑秘密连起来。',
                    storySummary: story({ background: '塔尔洪德家族与碎片的隔离与守护有关。', trajectory: ['玩家可理解墓窟礼制，也可直接闯关。'], hiddenInfo: ['家族并非想用碎片，而是想隔离它。'], impact: '给第六章终局加上历史重量。' }),
                    roleplayTips: [{ npc: '墓窟守卫构装体', role: '旧秩序继承者', voice: '单调精确', personality: '忠实、僵硬。', motivation: '守住墓窟与秘密。' }],
                    playerClues: clues({ obvious: ['墓窟防守逻辑仍在。', '这里守着的不是普通陪葬。'], hidden: ['碑文能解释碎片与圣所的关系。'], rewards: ['认真对待礼制，信息会更完整。'] }),
                    branchPrompts: [{ choice: '先研究墓窟逻辑', outcome: '更聪明。', reward: '资源消耗更少。' }, { choice: '直接攻穿', outcome: '更紧张。', reward: '推进更快。' }],
                    dmTips: tips({ tableFlow: ['重点是“礼制被打断后的不协调感”。'], pacing: '先探索后冲突。', ambience: ['石棺、祭柱、规律得可怕的脚步声。'], contingency: ['即便玩家全打，也要保留可读出的命令残片。'], lessons: ['高价值遗迹要同时支持“打过去”和“读进去”。'], music: ['墓窟回响'] }),
                    combat: {
                        title: '墓窟守卫与被扰之灵',
                        objective: '拿到碎片与圣所的核心信息。',
                        stakes: '若破坏太多，信息链会被自己切断。',
                        recommendedLevel: '6-7 级',
                        difficulty: 'standard',
                        terrain: ['石棺走廊、祭龛厅与封闭主墓室。'],
                        tactics: ['护盾卫士堵口，灰烬枯魂逼位。'],
                        rewards: ['墓窟铭文', '圣所路径'],
                        enemies: [
                            { name: '护盾卫士', count: 1, ...SHIELD_GUARDIAN, attacks: ['重拳 +7，2d6+4 钝击'], traits: ['高耐久', '堵口'], positioning: '主墓室入口。', tactics: '卡住最能突破前线的人。' },
                            { name: '灰烬枯魂', count: 2, ...ASHENWIGHT, attacks: ['长剑 +4，1d8+2 劈砍', '枯爪 +4，1d6+2 黯蚀'], traits: ['守墓怨念'], positioning: '石棺之间。', tactics: '利用环境逼失位。' }
                        ]
                    },
                    nextScenes: ['pbtso-6-gibbet', 'pbtso-6-sanctum']
                },
                {
                    id: 'pbtso-6-gibbet',
                    title: '绞架渡口',
                    location: 'Gibbet Crossing',
                    mood: '悬空、暴露、很怕被推下去',
                    tags: ['桥战', '旧城', '封锁'],
                    narration: join('绞架渡口最先压人的不是桥，而是桥边那些旧木架和尸笼。这里曾被用来公开震慑，如今这份威慑又被新敌人继承得恰到好处。', '桥战的可怕不在于谁真的掉下去，而在于每个人都很清楚自己有可能掉下去。'),
                    summary: '第六章中段的空间战术高点。',
                    storySummary: story({ background: '渡口是进入圣所外围的关键封锁点。', trajectory: ['玩家可抢高点、绕侧翼或正面硬渡。'], hiddenInfo: ['桥后的守军显然在替圣所拖时间。'], impact: '它是进入终局前的最后一层显性封锁。' }),
                    roleplayTips: [{ npc: '渡口守军', role: '封锁者', voice: '命令简短', personality: '实用、纪律化。', motivation: '拖住一切追到这里的人。' }],
                    playerClues: clues({ obvious: ['桥后区域非常重要。', '旧城交通点已被系统控制。'], hidden: ['高处侦查可发现包抄点。'], rewards: ['拿下渡口，圣所节奏会更主动。'] }),
                    branchPrompts: [{ choice: '先夺高处', outcome: '更稳。', reward: '减少桥面惩罚。' }, { choice: '正面强渡', outcome: '更史诗。', reward: '压迫感拉满。' }],
                    dmTips: tips({ tableFlow: ['把桥和绞架本身当半个敌人。'], pacing: '中高强度、重位置。', ambience: ['裂谷风声、木架吱呀、石屑滚落。'], contingency: ['若队伍被压太狠，给一条危险但可行的侧绕。'], lessons: ['优秀桥战的核心是人人都怕失误。'], music: ['裂谷桥战'] }),
                    combat: {
                        title: '绞架渡口争夺战',
                        objective: '突破旧城封锁并进入圣所外围。',
                        stakes: '拖太久会让圣所准备更完整。',
                        recommendedLevel: '7 级',
                        difficulty: 'hard',
                        terrain: ['狭长石桥、桥后平台与绞架高点。'],
                        tactics: ['高点射击，近战堵头，格雷尔抓边缘目标。'],
                        rewards: ['圣所入口控制权', '敌方布防模式'],
                        enemies: [
                            { name: '畸变狂信者', count: 2, ...ABERRANT_ZEALOT, attacks: ['弯刃 +3，1d6+1 劈砍', '心灵尖刺 +4，1d8 心灵'], traits: ['桥面扰乱'], positioning: '桥头与平台。', tactics: '把人留在桥中央。' },
                            { name: '格雷尔', count: 2, ...GRELL, attacks: ['触须缠绕 +6，1d6+4 穿刺', '喙击 +6，1d6+4 穿刺'], traits: ['高处俯冲'], positioning: '桥上方与裂谷壁。', tactics: '专抓危险位置的角色。' },
                            { name: '卓尔精英战士', count: 1, ...DROW_ELITE, attacks: ['短剑双击 +7，1d6+4 穿刺', '手弩 +7，1d6+4 穿刺'], traits: ['精准换位'], positioning: '桥后掩体。', tactics: '优先打断推进节奏。' }
                        ]
                    },
                    nextScenes: ['pbtso-6-sanctum']
                },
                {
                    id: 'pbtso-6-sanctum',
                    title: '方尖碑圣所',
                    location: '旧城深处的碎片圣所',
                    mood: '像看见坏掉的心脏还在跳',
                    tags: ['方尖碑', '夺心魔', '章节终战'],
                    narration: join('圣所最先夺走注意力的不是敌人，而是碎片本身。它不靠夸张光效取胜，而靠一种让人无法忽视的存在感压住空气：裂纹、反光和细微脉动都像在说这不是文物，而是现象。', '到了这里，玩家终于能把梦境、村井、老鸮井、佐祖拉之憩、墓窟和旧城封锁全连成一条线。'),
                    summary: '第六章终点：第一次真正贴近碎片和高位指挥者。',
                    storySummary: story({ background: '碎片被安置于旧圣所，高位敌人在此稳定影响。', trajectory: ['玩家需在处理碎片、仪式和指挥者之间做分工。'], hiddenInfo: ['真正目标是把裂缝稳定到足以让更深存在贴近现实。'], impact: '把剧情升级为阻止世界被改写。' }),
                    roleplayTips: [{ npc: '夺心魔使者', role: '高位代表', voice: '克制、礼貌、毫无温度', personality: '傲慢、专业、把短命种当实验对象。', motivation: '完成碎片稳定并评估玩家。' }],
                    playerClues: clues({ obvious: ['所有异常的中心就是碎片。', '夺心魔已实地介入。'], hidden: ['圣所资料会把下一站指向伊利希诺克。'], rewards: ['第七章目标会非常清晰。'] }),
                    branchPrompts: [{ choice: '先拆节点', outcome: '更稳。', reward: '环境压力降低。' }, { choice: '先斩首使者', outcome: '更爽快。', reward: '战斗节奏更明确。' }],
                    dmTips: tips({ tableFlow: ['把碎片当成场景主角来演。'], pacing: '快速聚焦的章节终战。', ambience: ['低频回响、空气发紧、偶尔掠过的头痛。'], contingency: ['若战斗太难，让碎片不稳定反过来短暂打乱敌方。'], lessons: ['章节 Boss 场要同时推进世界观和下章方向。'], music: ['圣所终战'] }),
                    combat: {
                        title: '方尖碑圣所决战',
                        objective: '终止碎片稳定并查明裂缝下一步方向。',
                        stakes: '若圣所完成稳定，凡达林与周边的异变会大幅升级。',
                        recommendedLevel: '7 级',
                        difficulty: 'hard',
                        terrain: ['中央碎片台、外围节点与环形回廊。'],
                        tactics: ['使者逼玩家在“处理碎片”和“处理敌人”之间痛苦分工。'],
                        rewards: ['伊利希诺克线索', '碎片资料'],
                        enemies: [
                            { name: '夺心魔使者', count: 1, ...MIND_FLAYER, attacks: ['触须 +7，2d10+4 心灵与擒抱', '心灵冲击'], traits: ['高位控场'], positioning: '碎片台后方。', tactics: '先切最关键角色。' },
                            { name: '畸变狂信者', count: 2, ...ABERRANT_ZEALOT, attacks: ['弯刃 +3，1d6+1 劈砍', '心灵尖刺 +4，1d8 心灵'], traits: ['守节点'], positioning: '仪式节点附近。', tactics: '拖住处理机制的人。' }
                        ]
                    },
                    nextScenes: ['pbtso-7-rifts']
                }
            ]
        },
        {
            id: 'pbtso-part-7',
            title: '第七章：现实裂隙',
            summary: '即使玩家在旧城重创了敌人，凡达林周边的现实仍开始破裂；第七章要把守镇、研究、追源和异界旧城四件事绑在一起。',
            scenes: [
                {
                    id: 'pbtso-7-rifts',
                    title: '凡达林的裂缝',
                    location: '凡达林主街与外围田地',
                    mood: '熟悉的地方开始不可靠',
                    tags: ['凡达林', '裂缝', '守镇'],
                    narration: join('回到凡达林后，最让人不安的不是破坏，而是错位：屋檐滴下咸味冷凝，街角会让人短暂迷路，有人发誓自己听见地底有海。', '这说明旧城的胜利没有白费，但也说明裂缝已经被撕开过。现在的问题不是“有没有危险”，而是“凡达林还能不能继续算作现实的一部分”。'),
                    summary: '把威胁从局部怪事升级为现实层面的灾变。',
                    storySummary: story({ background: '裂缝开始外溢到凡达林。', trajectory: ['玩家要先稳住城镇，再决定先救哪里。'], hiddenInfo: ['这些异常都与伊利希诺克方向同步。'], impact: '让第七章建立在“必须救镇”上。' }),
                    roleplayTips: [{ npc: '加莉尔修女', role: '精神支点', voice: '温柔而急迫', personality: '有同理心，也更快承认超自然危机。', motivation: '先稳住最容易崩的人。' }],
                    playerClues: clues({ obvious: ['异变已变成全镇异常。', '黄昏后更活跃。'], hidden: ['多个现象都与同一脉动同步。'], rewards: ['越认真安置凡达林，后续情感收益越大。'] }),
                    branchPrompts: [{ choice: '先守镇', outcome: '情感更厚。', reward: '凡达林真正成为后方。' }, { choice: '先抓规律', outcome: '推进更快。', reward: '更快指向伊利希诺克。' }],
                    dmTips: tips({ tableFlow: ['熟悉场景被轻微改坏，比全盘陌生更恐怖。'], pacing: '管理与判读先于大战。', ambience: ['咸味水珠、错位影子、半句梦话。'], contingency: ['若玩家只想立刻出发，就先让他们处理一场局部事故。'], lessons: ['升级的后果要落到玩家已关心的人和地。'], music: ['城镇陌生化'] }),
                    combat: null,
                    nextScenes: ['pbtso-7-dumathoin', 'pbtso-7-outskirts']
                },
                {
                    id: 'pbtso-7-dumathoin',
                    title: '杜玛松神殿',
                    location: 'Dumathoin 神殿遗址',
                    mood: '冷静、庄重、暂时能把狂乱框住',
                    tags: ['神殿', '研究', '净化'],
                    narration: join('如果说凡达林像正在发烧，杜玛松神殿就是一块还能测体温的冷石。它不给“立刻安全”的安慰，但给规律、历史和一种把狂乱重新框起来的秩序。', '在这里，玩家终于能相对冷静地理解裂缝、碎片和伊利希诺克之间的关系。'),
                    summary: '第七章的信息与喘息中心。',
                    storySummary: story({ background: '神殿保留着关于封印与深地脉动的知识。', trajectory: ['玩家可研究、休整并准备伊利希诺克之行。'], hiddenInfo: ['只在凡达林表面止血已经不够。'], impact: '把纯惊悚转回可执行任务。' }),
                    roleplayTips: [{ npc: '神殿看守', role: '知识守门人', voice: '平稳低沉', personality: '谨慎，不轻信。', motivation: '不让错误的人再误用封印知识。' }],
                    playerClues: clues({ obvious: ['伊利希诺克是裂缝扩大关键。', '碎片只是大问题的一部分。'], hidden: ['神殿能提供异境中保持心智的准备。'], rewards: ['后面推进会显得更“有备而来”。'] }),
                    branchPrompts: [{ choice: '多花时间准备', outcome: '更稳。', reward: '后面更从容。' }, { choice: '拿关键结论立刻出发', outcome: '更紧。', reward: '主线推进更快。' }],
                    dmTips: tips({ tableFlow: ['把这里演成“世界观变清晰”的地方，而不是灌设定大会。'], pacing: '中低强度。', ambience: ['冷石、静火、整齐卷轴和封印器具。'], lessons: ['高压章节里必须有秩序场景。'], music: ['静默秩序'] }),
                    combat: null,
                    nextScenes: ['pbtso-7-outskirts', 'pbtso-7-core']
                },
                {
                    id: 'pbtso-7-outskirts',
                    title: '伊利希诺克外围',
                    location: 'Illithinoch 外圈洞窟与扭曲街廊',
                    mood: '古老、恶心、规模压人',
                    tags: ['伊利希诺克', '外围', '探索'],
                    narration: join('伊利希诺克最可怕的地方是它先用“文明感”压你，而不是用怪物吓你。街廊、台阶和通行结构都说明这里不是野生巢穴，而是一座曾经按某种高等秩序运转的城市。', '于是恐怖变得更具体：你们正走进一座以心智、实验和支配为设计理念的都市遗骸。'),
                    summary: '把伊利希诺克立成真正的地方性角色。',
                    storySummary: story({ background: '伊利希诺克是裂缝和夺心魔网络的核心旧城。', trajectory: ['玩家在外围理解城市结构与守军层级。'], hiddenInfo: ['主脑系统仍在某种程度运作。'], impact: '为核心区和终章越界做足铺垫。' }),
                    roleplayTips: [{ npc: '城市残响', role: '场景级反派气质', voice: '不说话，却处处像在看人。', personality: '冷、整齐、无同理心。', motivation: '维持被污染后的旧秩序。' }],
                    playerClues: clues({ obvious: ['外围就有明确的等级与防御逻辑。'], hidden: ['侦查得好可找到通往核心区的优线。'], rewards: ['理解结构后，后面更有掌控感。'] }),
                    branchPrompts: [{ choice: '慢推记路线', outcome: '更聪明。', reward: '少吃布局亏。' }, { choice: '追着最新痕迹直进', outcome: '更像猎杀。', reward: '压迫感拉满。' }],
                    dmTips: tips({ tableFlow: ['用建筑用途讲故事。'], pacing: '探索与遭遇混编。', ambience: ['过于光滑的墙、湿润石面、无源低语。'], lessons: ['异界城市的魅力在于让人相信它曾正常运转过。'], music: ['异界古城'] }),
                    combat: {
                        title: '伊利希诺克外围突破',
                        objective: '摸清进入核心区的方式。',
                        stakes: '若在外围失速，核心区会更完整地针对玩家布防。',
                        recommendedLevel: '9 级',
                        difficulty: 'standard',
                        terrain: ['扭曲街廊、高差平台与半封闭洞室。'],
                        tactics: ['守军以拖延和观测为主，不急着拼到底。'],
                        rewards: ['核心路线', '城市结构认知'],
                        enemies: [
                            { name: '灵能地精巡哨', count: 4, ...PSIONIC_GOBLIN, attacks: ['短弓 +4，1d6+2 穿刺外加 1d4 心灵', '弯刀 +4，1d6+2 劈砍'], traits: ['高低差游击'], positioning: '高台与连桥。', tactics: '逼玩家浪费行动。' },
                            { name: '格雷尔', count: 2, ...GRELL, attacks: ['触须缠绕 +6，1d6+4 穿刺', '喙击 +6，1d6+4 穿刺'], traits: ['街廊俯冲'], positioning: '顶部与盲角。', tactics: '拖走侦查者或后排。' }
                        ]
                    },
                    nextScenes: ['pbtso-7-core']
                },
                {
                    id: 'pbtso-7-core',
                    title: '伊利希诺克核心',
                    location: '伊利希诺克中枢与裂隙之厅',
                    mood: '现实开始不服从自己',
                    tags: ['核心区', '裂隙', '章节终战'],
                    narration: join('核心区不像普通 Boss 房，而像某种更大的意识在借城市看你。视线、距离和回声都带着轻微延迟，仿佛现实得先征求别的东西同意，才肯继续正常运转。', '玩家走到这里时，应该非常清楚：下一步已经不是“继续闯地下城”，而是要真正越界。'),
                    summary: '第七章终点：直面裂隙核心，打开通往终章异境的门。',
                    storySummary: story({ background: '核心中枢维持着现实裂缝网络。', trajectory: ['玩家一边作战，一边打断中枢。'], hiddenInfo: ['眼前仍不是最终本体，只是更大存在的阶段性回声。'], impact: '把故事从守镇推向真正越界。' }),
                    roleplayTips: [{ npc: '核心夺心魔', role: '高层执行者', voice: '礼貌而毫无体温', personality: '傲慢、专业。', motivation: '维持中枢运转并确认裂缝扩张。' }],
                    playerClues: clues({ obvious: ['现实裂缝已被系统化维持。', '这里仍不是终点。'], hidden: ['中枢资料会指出“无光之星之外”的路径。'], rewards: ['第八章开场会很有底气。'] }),
                    branchPrompts: [{ choice: '先抢节点', outcome: '更稳。', reward: '环境压力更可控。' }, { choice: '先斩首高层', outcome: '更爽。', reward: '节奏更直接。' }],
                    dmTips: tips({ tableFlow: ['让环境本身也参与战斗。'], pacing: '第七章最高压一场。', ambience: ['回声延迟、地面轻微起伏、视角错位。'], contingency: ['若队伍被环境压垮，就让某个节点更明显地暴露弱点。'], lessons: ['世界观答案和战术问题最好是同一件事。'], music: ['裂隙核心'] }),
                    combat: {
                        title: '伊利希诺克核心中枢',
                        objective: '击破中枢守军并打断裂隙稳定。',
                        stakes: '若中枢继续运转，凡达林与周边会被持续改写。',
                        recommendedLevel: '10 级',
                        difficulty: 'hard',
                        terrain: ['核心台、节点桥与裂隙边缘。'],
                        tactics: ['夺心魔控场，仆从守节点，环境逼队伍分工。'],
                        rewards: ['通往终章异境的门', '中枢资料'],
                        enemies: [
                            { name: '核心夺心魔', count: 1, ...MIND_FLAYER, attacks: ['触须 +7，2d10+4 心灵与擒抱', '心灵冲击'], traits: ['高强控场'], positioning: '核心台与桥面交界。', tactics: '优先瓦解队伍协作。' },
                            { name: '畸变狂信者', count: 2, ...ABERRANT_ZEALOT, attacks: ['弯刃 +3，1d6+1 劈砍', '心灵尖刺 +4，1d8 心灵'], traits: ['守节点'], positioning: '节点桥与侧台。', tactics: '拖住处理环境的人。' },
                            { name: '观众', count: 1, ...SPECTATOR, attacks: ['眼棱射线', '咬击 +4，1d6+1 穿刺'], traits: ['漂浮监视'], positioning: '核心台上方。', tactics: '用异常射线打乱节奏。' }
                        ]
                    },
                    nextScenes: ['pbtso-8-briny-pool']
                }
            ]
        },
        {
            id: 'pbtso-part-8',
            title: '第八章：超越无光之星',
            summary: '玩家越过中枢之后，真正离开了还能靠常识解释的世界：咸潮池、咸潮迷阵、无尽虚空、阿斯忒瑞亚与伊尔瓦什之魂影共同构成异界终局。',
            scenes: [
                {
                    id: 'pbtso-8-briny-pool',
                    title: '咸潮池',
                    location: '裂隙深处的咸潮池',
                    mood: '门槛感极强',
                    tags: ['异境', '入口'],
                    narration: join('咸潮池不像湖，也不像传送门，更像一层拒绝决定自己到底是什么的界面。越靠近它，凡达林、旧城和一路以来所有还能解释的东西就越像正在身后慢慢合上。', '这是终章最关键的情绪转折：玩家要感觉到，自己确实离开了“还能用地图说清楚”的世界。'),
                    summary: '给第八章一个明确的“越界”仪式。',
                    storySummary: story({ background: '咸潮池是通往更深裂隙空间的稳定入口。', trajectory: ['玩家可在此做最后整备和角色互动。'], hiddenInfo: ['越过这里后，环境本身会开始主动影响记忆和方向感。'], impact: '让终章真正有过门感。' }),
                    roleplayTips: [{ npc: '咸潮池回响', role: '门槛试探', voice: '像从角色记忆里反过来传来', personality: '无。', motivation: '放大犹豫。' }],
                    playerClues: clues({ obvious: ['越过这里后规则会变。'], hidden: ['在池边准备得越充分，后面越能抗住认知压力。'], rewards: ['很适合做一次角色为何继续往前的表态。'] }),
                    branchPrompts: [{ choice: '先整备互动', outcome: '情感更厚。', reward: '终局动机更清楚。' }, { choice: '直接踏入', outcome: '更决绝。', reward: '节奏一口气拉满。' }],
                    dmTips: tips({ tableFlow: ['这是终章最后一次深呼吸。'], pacing: '偏静。', ambience: ['盐味、无风、水面像在呼吸。'], lessons: ['终章入口最重要的是仪式感。'], music: ['最后整备'] }),
                    combat: null,
                    nextScenes: ['pbtso-8-briny-maze']
                },
                {
                    id: 'pbtso-8-briny-maze',
                    title: '咸潮迷阵',
                    location: '盐雾、回环与错位墙面的迷阵',
                    mood: '方向感被一点点偷走',
                    tags: ['迷阵', '异境', '导航'],
                    narration: join('咸潮迷阵最折磨人的地方不是完全看不懂，而是“每次快看懂时就会被轻轻改掉一点”。路标、脚印、墙面反光甚至同伴上一秒说的话，都可能在你回头后出现一丝无法立刻举证的偏差。', '于是玩家和角色都得在保持方向感、不被引开、打赢眼前敌人之间同时分配注意力。'),
                    summary: '终章前段的方向感摧毁器。',
                    storySummary: story({ background: '迷阵会通过空间回环和畸变仆从消磨入侵者。', trajectory: ['玩家需在推进与稳路之间不断平衡。'], hiddenInfo: ['迷阵会放大个体犹豫和分歧。'], impact: '把第八章从“景观怪”推进到“规则怪”。' }),
                    roleplayTips: [{ npc: '迷阵回声', role: '环境压迫', voice: '偶尔模仿队友', personality: '无。', motivation: '分散队伍注意力。' }],
                    playerClues: clues({ obvious: ['迷阵会主动干扰协同。'], hidden: ['实体标记和绳索比单凭感觉更可靠。'], rewards: ['若玩家自己发明稳路方法，成就感会很高。'] }),
                    branchPrompts: [{ choice: '缓慢布标推进', outcome: '更稳。', reward: '少吃方向感亏。' }, { choice: '高速强闯', outcome: '更刺激。', reward: '推进更快。' }],
                    dmTips: tips({ tableFlow: ['迷阵靠反复轻微打脸成立，不靠一次性大骗局。'], pacing: '中高压。', ambience: ['盐雾、潮气、重复又轻微错位的脚步声。'], contingency: ['若玩家被困烦了，就让聪明办法稳定奏效。'], lessons: ['迷宫的乐趣在于破解规则。'], music: ['迷阵'] }),
                    combat: {
                        title: '咸潮迷阵遭遇',
                        objective: '守住队伍不被分割，并找到前往无尽虚空的出口。',
                        stakes: '若在此被打散，后面会在资源和信息上双吃亏。',
                        recommendedLevel: '10-11 级',
                        difficulty: 'standard',
                        terrain: ['回环廊道、盐雾盲区与偶尔重置的岔路。'],
                        tactics: ['敌人先切碎队伍，再慢慢收口。'],
                        rewards: ['稳定前进路径', '对异境规则的第一轮适应'],
                        enemies: [
                            { name: '格雷尔', count: 2, ...GRELL, attacks: ['触须缠绕 +6，1d6+4 穿刺', '喙击 +6，1d6+4 穿刺'], traits: ['迷阵俯冲'], positioning: '盐雾上方与岔路盲角。', tactics: '优先拖走落单者。' },
                            { name: '畸变狂信者', count: 2, ...ABERRANT_ZEALOT, attacks: ['弯刃 +3，1d6+1 劈砍', '心灵尖刺 +4，1d8 心灵'], traits: ['拖节奏'], positioning: '交汇处。', tactics: '把玩家往错误路线逼。' }
                        ]
                    },
                    nextScenes: ['pbtso-8-void']
                },
                {
                    id: 'pbtso-8-void',
                    title: '无尽虚空与阿斯忒瑞亚',
                    location: '无尽虚空中的星辉锚点',
                    mood: '尺度被拿走后，终于看见一小块清明',
                    tags: ['无尽虚空', '阿斯忒瑞亚', '锚点'],
                    narration: join('无尽虚空会拿走判断自己的全部参照物：地平线、距离、上下、甚至“刚才走了多久”。而阿斯忒瑞亚的价值，正是它在这种环境里仍像一小块勉强保住的秩序。', '终章在这里给玩家最后一次机会去校准彼此、确认分工、说清楚自己为什么还要继续往前。'),
                    summary: '把终章的超现实尺度感与最终战前的清明喘息合在一起。',
                    storySummary: story({ background: '无尽虚空是迷阵和终局节点之间的过渡界面，阿斯忒瑞亚则是仍未崩塌的锚点。', trajectory: ['玩家一边维持现实感，一边在锚点完成最后整备。'], hiddenInfo: ['真正有效的“方向”来自团队间的校准，而不来自环境本身。'], impact: '让最终战前的角色选择有落脚处。' }),
                    roleplayTips: [{ npc: '锚点回光', role: '最后的清明', voice: '不像指导者，更像提醒你们还拥有彼此', personality: '无明确人格，但有保护倾向。', motivation: '维持最后一块稳定。' }],
                    playerClues: clues({ obvious: ['这里能短暂稳定心智。', '最终节点已经很近。'], hidden: ['主动在此明确分工，会让最终战更有组织感。'], rewards: ['非常适合做最后一次角色对话。'] }),
                    branchPrompts: [{ choice: '先校准队伍再出发', outcome: '更稳。', reward: '终局团队感更强。' }, { choice: '不多停留直接进入终局', outcome: '更利落。', reward: '气势更足。' }],
                    dmTips: tips({ tableFlow: ['先演失重与空，再演阿斯忒瑞亚的珍贵。'], pacing: '压迫中带一口缓气。', ambience: ['极远处单一点光、无风、星辉像勉强维持。'], lessons: ['终章前的喘息场景是为了让主题句落地。'], music: ['终局前清明'] }),
                    combat: {
                        title: '无尽虚空守望者',
                        objective: '顶住虚空骚扰并安全抵达阿斯忒瑞亚。',
                        stakes: '若在此完全失序，最终战开局就会背着明显疲惫。',
                        recommendedLevel: '11 级',
                        difficulty: 'standard',
                        terrain: ['几乎没有可依赖地形，最大的地形就是缺少地形。'],
                        tactics: ['守望者优先扰乱队伍同步。'],
                        rewards: ['终局前最后一次节奏校准'],
                        enemies: [
                            { name: '观众', count: 2, ...SPECTATOR, attacks: ['眼棱射线', '咬击 +4，1d6+1 穿刺'], traits: ['异常视线'], positioning: '不同高度的黑暗界面。', tactics: '专门打断队伍同步。' }
                        ]
                    },
                    nextScenes: ['pbtso-8-ilvaash']
                },
                {
                    id: 'pbtso-8-ilvaash',
                    title: '伊尔瓦什之魂影',
                    location: '终极折射室',
                    mood: '终于看见一直站在镜子后面的人影',
                    tags: ['伊尔瓦什', '最终战', 'Boss'],
                    narration: join('伊尔瓦什之魂影并不显得暴躁，它更像一种早已存在、只是现在终于有足够缝隙把自己压进现实的意识回声。它每一次移动都像在重新决定什么是上、什么是下、什么是距离、什么是你以为的胜算。', '这正是整场战役真正要收束的对象：不是某支地精部落，不是某个夺心魔小队，甚至不只是方尖碑碎片，而是那股把这些全串起来、持续试探现实边界的庞大意志。'),
                    summary: '最终 Boss 战应同时是战术难题、奇观和主题回收。',
                    storySummary: story({ background: '伊尔瓦什之魂影是更大存在压近现实的战斗化回声。', trajectory: ['玩家必须在环境扭曲、仆从骚扰与 Boss 压力间完成分工。'], hiddenInfo: ['真正的胜利是让现实重新获得定义权。'], impact: '决定整场战役最后的味道。' }),
                    roleplayTips: [{ npc: '伊尔瓦什之魂影', role: '最终对手', voice: '像许多声音折射成同一句', personality: '古老、冷静、超越个体怨恨。', motivation: '靠近、改写、侵入现实。' }],
                    playerClues: clues({ obvious: ['环境本身就是 Boss 战的一部分。'], hidden: ['抓住折射节点比无脑输出更关键。'], rewards: ['若每名角色都在这里有一个站出来的瞬间，终局会很完整。'] }),
                    branchPrompts: [{ choice: '先打折射节点', outcome: '更稳。', reward: '环境压力可控。' }, { choice: '直接冲 Boss', outcome: '更硬派。', reward: '戏剧张力极高。' }],
                    dmTips: tips({ tableFlow: ['把 Boss、环境与分工绑成同一个问题。'], pacing: '终局最高点。', ambience: ['折射光、空间翻转、低语汇成巨响。'], contingency: ['若队伍被环境压死，就让某个节点更明显暴露弱点。'], lessons: ['最终战必须是情感与机制双高潮。'], music: ['最终异界 Boss 战'] }),
                    combat: {
                        title: '伊尔瓦什之魂影',
                        objective: '击败魂影并夺回终极节点的定义权。',
                        stakes: '若失败，凡达林与周边将逐步被改写成异境的一部分。',
                        recommendedLevel: '12 级',
                        difficulty: 'hard',
                        terrain: ['折射节点、悬浮平台与不断重定义方向的空间。'],
                        tactics: ['Boss 迫使玩家在追击它、压住环境和保护队友之间不断取舍。'],
                        rewards: ['战役终局', '现实闭合', '凡达林的未来'],
                        enemies: [
                            { name: '伊尔瓦什之魂影', count: 1, ...ILVAASH, attacks: ['折射触击、心灵脉冲与环境操控'], traits: ['空间重定义', '高位心灵压迫'], positioning: '围绕关键节点与高位平台移动。', tactics: '逼队伍在机制、救场和输出之间分工。' },
                            { name: '观众', count: 2, ...SPECTATOR, attacks: ['眼棱射线', '咬击 +4，1d6+1 穿刺'], traits: ['终局骚扰'], positioning: '折射室上空与侧台。', tactics: '把本就吃紧的节奏彻底打散。' }
                        ]
                    },
                    nextScenes: ['pbtso-8-refraction']
                },
                {
                    id: 'pbtso-8-refraction',
                    title: '折光余波',
                    location: '终局节点崩解后的折光界面',
                    mood: '胜利像刚被从水里捞出来',
                    tags: ['结局', '余波', '抉择'],
                    narration: join('当终极回声被击溃后，异境不会立刻像噩梦一样消失。它更像一整面绷得太久的玻璃终于开始回到自己的张力：裂纹、光、远处的海声和那些不属于现实的角度，正一层层从你们眼前退下去。', '这正是结尾最宝贵的几分钟——玩家有机会决定留下些什么、带回什么，以及准备如何面对一个“确实被救了，但不可能当作什么都没发生过”的凡达林。'),
                    summary: '用选择而不是纯文案收尾。',
                    storySummary: story({ background: '终极节点失控后，现实开始闭合，但余波与代价仍需处理。', trajectory: ['玩家可决定如何封存残余、如何叙述这段经历。'], hiddenInfo: ['真正的尾味取决于玩家如何定义“胜利之后要守住的世界”。'], impact: '让八章战役真正落回玩家手里。' }),
                    roleplayTips: [{ npc: '队友彼此', role: '最后的镜子', voice: '此刻比任何 NPC 都重要', personality: '每个人都该回应自己一路以来的主题。', motivation: '把“为何走到这里”说完。' }],
                    playerClues: clues({ obvious: ['战争赢了，但余波仍需处理。'], hidden: ['如何封存和讲述后果，会定义整个战役的尾味。'], rewards: ['适合做角色总结、关系回收和凡达林未来选择。'] }),
                    branchPrompts: [{ choice: '彻底封存异常痕迹', outcome: '更安全。', reward: '凡达林恢复更快。' }, { choice: '保留部分证据或力量研究', outcome: '更适合接后续。', reward: '留下新的冒险钩子。' }],
                    dmTips: tips({ tableFlow: ['不要急着替玩家总结，先让他们自己说。'], pacing: '放慢。', ambience: ['裂光退去、海声远去、终于再次像属于现实的呼吸。'], lessons: ['最好的结局不是解释完一切，而是让玩家知道自己改变了什么。'], music: ['终局余波'] }),
                    combat: null,
                    nextScenes: []
                }
            ]
        }
    ];

    const adventure = Array.isArray(window.ADVENTURES)
        ? window.ADVENTURES.find(item => item.id === 'lost-mine-of-phandelver')
        : null;

    if (!adventure) return;

    const ids = new Set(chapters.map(ch => ch.id));
    adventure.name = '凡戴尔之下：破碎方尖碑';
    adventure.description = '面向桌边带团的《凡戴尔之下：破碎方尖碑》增强版作战包：保留前四章《凡戴尔的失落矿坑》，并补齐第 5–8 章的灵能惊悚、旧城探索、现实裂隙与异界终局。';
    adventure.recommendedLevel = '1-12 级';
    adventure.tone = ['护送伏击', '城镇阴谋', '矿坑终局', '灵能惊悚', '旧城探索', '现实裂隙', '异界终战'];
    adventure.chapters = (adventure.chapters || []).filter(ch => !ids.has(ch.id));
    adventure.chapters.push(...chapters);
})();
