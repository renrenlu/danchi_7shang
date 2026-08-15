/* ============================================================
 * 词汇数据文件 —— 以后添加新单元，只需在 UNITS 数组末尾
 * 照同样格式追加一个对象即可，页面会自动渲染。
 *
 * 字段说明：
 *   id      单元标识，如 "u3"
 *   title   单元标题，如 "Unit 3 · 知识小结"
 *   source  来源说明（课本页码等）
 *   core    核心词（带派生词）：{ en 英文, zh 中文, ipa 音标, star 是否重点,
 *             deriv: [{ label 词性说明, en 派生词, zh 中文, ipa 音标 }] }
 *   basic   基础词汇：{ en, zh, ipa, star }
 *   phrases 重点短语：{ en, zh, ipa }
 * ============================================================ */

const UNITS = [
  {
    id: "u1",
    title: "Unit 1 · 知识小结",
    source: "课本 Unit 1 知识小结页（P49–53）",

    /* 一、核心词与派生（1–12） */
    core: [
      { en: "honest",     zh: "诚实的",        ipa: "/ˈɒnɪst/",      star: true,
        deriv: [{ label: "名", en: "honesty",      zh: "诚实",        ipa: "/ˈɒnəsti/" },
                { label: "反", en: "dishonest",    zh: "不诚实的",    ipa: "/dɪsˈɒnɪst/" }] },
      { en: "patient",    zh: "有耐心的",       ipa: "/ˈpeɪʃnt/",     star: false,
        deriv: [{ label: "名", en: "patience",     zh: "耐心",        ipa: "/ˈpeɪʃns/" },
                { label: "反", en: "impatient",    zh: "不耐烦的",    ipa: "/ɪmˈpeɪʃnt/" }] },
      { en: "improve",    zh: "改进；改善",     ipa: "/ɪmˈpruːv/",    star: false,
        deriv: [{ label: "名", en: "improvement",  zh: "改进；改善",  ipa: "/ɪmˈpruːvmənt/" }] },
      { en: "confident",  zh: "自信的",         ipa: "/ˈkɒnfɪdənt/",  star: false,
        deriv: [{ label: "名", en: "confidence",   zh: "自信；信心",  ipa: "/ˈkɒnfɪdəns/" }] },
      { en: "courage",    zh: "勇气；胆量",     ipa: "/ˈkʌrɪdʒ/",     star: true,
        deriv: [{ label: "动", en: "encourage",    zh: "鼓励",        ipa: "/ɪnˈkʌrɪdʒ/" },
                { label: "形", en: "courageous",   zh: "勇敢的",      ipa: "/kəˈreɪdʒəs/" }] },
      { en: "admiration", zh: "钦佩；赞赏",     ipa: "/ˌædməˈreɪʃn/", star: false,
        deriv: [{ label: "动", en: "admire",       zh: "钦佩；赞赏",  ipa: "/ədˈmaɪə(r)/" }] },
      { en: "support",    zh: "支持；鼓励",     ipa: "/səˈpɔːt/",     star: false,
        deriv: [{ label: "形", en: "supportive",   zh: "给予支持的",  ipa: "/səˈpɔːtɪv/" }] },
      { en: "personal",   zh: "个性的；个人的", ipa: "/ˈpɜːsənl/",    star: false,
        deriv: [{ label: "名", en: "personality",  zh: "个性；性格",  ipa: "/ˌpɜːsəˈnæləti/" }] },
      { en: "describe",   zh: "描述",           ipa: "/dɪˈskraɪb/",   star: false,
        deriv: [{ label: "名", en: "description",  zh: "描述",        ipa: "/dɪˈskrɪpʃn/" }] },
      { en: "glad",       zh: "高兴的",         ipa: "/ɡlæd/",        star: false,
        deriv: [{ label: "名", en: "gladness",     zh: "高兴",        ipa: "/ˈɡlædnəs/" }] },
      { en: "rise",       zh: "上升",           ipa: "/raɪz/",        star: false,
        deriv: [{ label: "过", en: "rose",         zh: "过去式",      ipa: "/rəʊz/" },
                { label: "过分", en: "risen",      zh: "过去分词",    ipa: "/ˈrɪzn/" }] },
      { en: "trust",      zh: "信任",           ipa: "/trʌst/",       star: false,
        deriv: [{ label: "形", en: "trustful",     zh: "信任的",      ipa: "/ˈtrʌstfl/" }] }
    ],

    /* 二、基础词汇（13–27） */
    basic: [
      { en: "respect",     zh: "尊敬；尊重",  ipa: "/rɪˈspekt/",     star: false },
      { en: "friendship",  zh: "友谊",        ipa: "/ˈfrendʃɪp/",    star: false },
      { en: "guitar",      zh: "吉他",        ipa: "/ɡɪˈtɑː(r)/",    star: false },
      { en: "survey",      zh: "调查",        ipa: "/ˈsɜːveɪ/",      star: false },
      { en: "quality",     zh: "品质",        ipa: "/ˈkwɒləti/",     star: false },
      { en: "caring",      zh: "体贴周到的",  ipa: "/ˈkeərɪŋ/",      star: false },
      { en: "appearance",  zh: "外貌",        ipa: "/əˈpɪərəns/",    star: false },
      { en: "straight",    zh: "直的",        ipa: "/streɪt/",       star: false },
      { en: "dark",        zh: "乌黑的；褐色的", ipa: "/dɑːk/",      star: false },
      { en: "same",        zh: "同一的",      ipa: "/seɪm/",         star: false },
      { en: "basic",       zh: "基本的",      ipa: "/ˈbeɪsɪk/",      star: false },
      { en: "thought",     zh: "想法",        ipa: "/θɔːt/",         star: false },
      { en: "however",     zh: "然而",        ipa: "/haʊˈevə(r)/",   star: false },
      { en: "end",         zh: "结局",        ipa: "/end/",          star: false },
      { en: "heart",       zh: "心",          ipa: "/hɑːt/",         star: false }
    ],

    /* 三、重点短语（28–44） */
    phrases: [
      { en: "be good at",            zh: "擅长",           ipa: "/bi ɡʊd æt/" },
      { en: "turn to sb for help",   zh: "求助于某人",     ipa: "/tɜːn tuː ˈsʌmbədi fɔː help/" },
      { en: "after school",          zh: "放学后",         ipa: "/ˈɑːftə skuːl/" },
      { en: "be willing to do",      zh: "愿意做某事",     ipa: "/bi ˈwɪlɪŋ tuː duː/" },
      { en: "thanks to",             zh: "幸亏；由于",     ipa: "/θæŋks tuː/" },
      { en: "count on",              zh: "依靠",           ipa: "/kaʊnt ɒn/" },
      { en: "medium height",         zh: "中等身高",       ipa: "/ˈmiːdiəm haɪt/" },
      { en: "modern dance",          zh: "现代舞",         ipa: "/ˈmɒdn dɑːns/" },
      { en: "take care of",          zh: "照顾",           ipa: "/teɪk keə(r) əv/" },
      { en: "watch over",            zh: "照管；监督",     ipa: "/wɒtʃ ˈəʊvə(r)/" },
      { en: "rise into",             zh: "上升到",         ipa: "/raɪz ˈɪntuː/" },
      { en: "cry out",               zh: "大叫",           ipa: "/kraɪ aʊt/" },
      { en: "cry oneself to sleep",  zh: "哭着入睡",       ipa: "/kraɪ wʌnˈself tuː sliːp/" },
      { en: "wake up",               zh: "醒来",           ipa: "/weɪk ʌp/" },
      { en: "come and go",           zh: "来去",           ipa: "/kʌm ənd ɡəʊ/" },
      { en: "take sb's place",       zh: "替代某人",       ipa: "/teɪk ˈsʌmbədiz pleɪs/" },
      { en: "come along",            zh: "出现",           ipa: "/kʌm əˈlɒŋ/" }
    ],

    /* 四、课文短语填空（45–60）
     * answer 处显示时标橙色；say 是点读时朗读的完整句子。 */
    fillin: [
      { num: 45, zh: "交朋友",           pre: "make",    answer: "friends",    post: "with",            say: "make friends with" },
      { num: 46, zh: "对……有耐心",      pre: "be patient", answer: "with",    post: "",                say: "be patient with" },
      { num: 47, zh: "对……友好",        pre: "be friendly", answer: "to",     post: "",                say: "be friendly to" },
      { num: 48, zh: "数学问题",         pre: "maths",    answer: "problem",    post: "",                say: "maths problem" },
      { num: 49, zh: "有趣的事",         pre: "something", answer: "interesting", post: "",             say: "something interesting" },
      { num: 50, zh: "发生在某人身上",    pre: "happen",   answer: "to sb",     post: "",                say: "happen to somebody" },
      { num: 51, zh: "做某事很有趣",      pre: "it is fun", answer: "to do",    post: "sth",             say: "it is fun to do something" },
      { num: 52, zh: "和某人分享快乐",    pre: "share happiness", answer: "with", post: "sb",           say: "share happiness with somebody" },
      { num: 53, zh: "感到悲伤",         pre: "feel",     answer: "sad",        post: "",                say: "feel sad" },
      { num: 54, zh: "让我们感觉更好",    pre: "make us",  answer: "feel",      post: "better",          say: "make us feel better" },
      { num: 55, zh: "在他的帮助下",      pre: "",         answer: "with",      post: "his help",        say: "with his help" },
      { num: 56, zh: "亲密的朋友",        pre: "",         answer: "close",     post: "friends",         say: "close friends" },
      { num: 57, zh: "不但……而且",      pre: "not only…", answer: "but also", post: "",                say: "not only but also" },
      { num: 58, zh: "相处得好",         pre: "get along well", answer: "with", post: "",               say: "get along well with" },
      { num: 59, zh: "对自己有信心",      pre: "feel sure", answer: "about",    post: "oneself",
        extra: { pre: "be confident", answer: "of", post: "oneself" },
        say: "feel sure about oneself, be confident of oneself" },
      { num: 60, zh: "关于如何演奏的建议", pre: "Advice",  answer: "on",        post: "how to play",     say: "advice on how to play" }
    ]
  },
  {
    id: "u2",
    title: "Unit 2 · 知识小结",
    source: "课本 Unit 2 知识小结页（P16）",

    /* 一、核心词与派生（1–11） */
    core: [
      { en: "activity",   zh: "活动",          ipa: "/ækˈtɪvəti/",  star: false,
        deriv: [{ label: "形", en: "active",       zh: "活跃的",       ipa: "/ˈæktɪv/" },
                { label: "名", en: "action",       zh: "行动",         ipa: "/ˈækʃn/" }] },
      { en: "practise",   zh: "练习（+doing）",  ipa: "/ˈpræktɪs/",   star: false,
        deriv: [{ label: "名", en: "practice",     zh: "练习",         ipa: "/ˈpræktɪs/" }] },
      { en: "solve",      zh: "解答",          ipa: "/sɒlv/",       star: false,
        deriv: [{ label: "名", en: "solution",     zh: "解决办法",     ipa: "/səˈluːʃn/" }] },
      { en: "develop",    zh: "加强；发展",     ipa: "/dɪˈveləp/",   star: false,
        deriv: [{ label: "名", en: "development",  zh: "发展",         ipa: "/dɪˈveləpmənt/" },
                { label: "形", en: "developing",   zh: "发展中的",     ipa: "/dɪˈveləpɪŋ/" },
                { label: "形", en: "developed",    zh: "发达的",       ipa: "/dɪˈveləpt/" }] },
      { en: "skill",      zh: "技术",          ipa: "/skɪl/",       star: false,
        deriv: [{ label: "形", en: "skilled",      zh: "熟练的",       ipa: "/skɪld/" }] },
      { en: "teen",       zh: "青少年的",       ipa: "/tiːn/",       star: false,
        deriv: [{ label: "名", en: "teenager",     zh: "青少年",       ipa: "/ˈtiːneɪdʒə(r)/" }] },
      { en: "greeting",   zh: "问候",          ipa: "/ˈɡriːtɪŋ/",   star: false,
        deriv: [{ label: "动", en: "greet",        zh: "问候；打招呼", ipa: "/ɡriːt/" }] },
      { en: "energy",     zh: "精力",          ipa: "/ˈenədʒi/",    star: false,
        deriv: [{ label: "形", en: "energetic",    zh: "精力充沛的",   ipa: "/ˌenəˈdʒetɪk/" }] },
      { en: "lucky",      zh: "幸运的",        ipa: "/ˈlʌki/",      star: false,
        deriv: [{ label: "反", en: "unlucky",      zh: "不幸的",       ipa: "/ʌnˈlʌki/" },
                { label: "名", en: "luck",         zh: "运气",         ipa: "/lʌk/" },
                { label: "副", en: "luckily",      zh: "幸运地",       ipa: "/ˈlʌkɪli/" }] },
      { en: "celebrate",  zh: "庆祝",          ipa: "/ˈselɪbreɪt/", star: false,
        deriv: [{ label: "名", en: "celebration",  zh: "庆祝；庆典",   ipa: "/ˌselɪˈbreɪʃn/" }] },
      { en: "success",    zh: "成功",          ipa: "/səkˈses/",    star: false,
        deriv: [{ label: "形", en: "successful",   zh: "成功的",       ipa: "/səkˈsesfl/" },
                { label: "动", en: "succeed",      zh: "成功（+doing）", ipa: "/səkˈsiːd/" }] }
    ],

    /* 二、基础词汇（12–27） */
    basic: [
      { en: "geography",    zh: "地理",        ipa: "/dʒiˈɒɡrəfi/",  star: false },
      { en: "corner",       zh: "角，墙角",    ipa: "/ˈkɔːnə(r)/",   star: false },
      { en: "club",         zh: "社团",        ipa: "/klʌb/",        star: false },
      { en: "magazine",     zh: "杂志",        ipa: "/ˌmæɡəˈziːn/",  star: false },
      { en: "grade",        zh: "年级",        ipa: "/ɡreɪd/",       star: false },
      { en: "drama",        zh: "戏剧",        ipa: "/ˈdrɑːmə/",     star: false },
      { en: "sincerely",    zh: "真诚地",      ipa: "/sɪnˈsɪəli/",   star: false },
      { en: "diary",        zh: "日记",        ipa: "/ˈdaɪəri/",     star: false },
      { en: "project",      zh: "课题",        ipa: "/ˈprɒdʒekt/",   star: false },
      { en: "poster",       zh: "海报",        ipa: "/ˈpəʊstə(r)/",  star: false },
      { en: "realize",      zh: "意识到",      ipa: "/ˈrɪəlaɪz/",    star: false },
      { en: "just",         zh: "恰巧",        ipa: "/dʒʌst/",       star: false },
      { en: "presentation", zh: "演示",        ipa: "/ˌpreznˈteɪʃn/", star: false },
      { en: "mood",         zh: "情绪，心情",  ipa: "/muːd/",        star: false },
      { en: "mind",         zh: "介意",        ipa: "/maɪnd/",       star: false },
      { en: "pack",         zh: "打包",        ipa: "/pæk/",         star: false }
    ],

    /* 三、重点短语（28–41） */
    phrases: [
      { en: "rocky",                zh: "困难的",       ipa: "/ˈrɒki/" },
      { en: "do the dishes",        zh: "洗碗",         ipa: "/duː ðə ˈdɪʃɪz/" },
      { en: "junior high school",   zh: "初级中学",     ipa: "/ˈdʒuːniə haɪ skuːl/" },
      { en: "take part in",         zh: "参与",         ipa: "/teɪk pɑːt ɪn/" },
      { en: "look forward to doing", zh: "期盼",        ipa: "/lʊk ˈfɔːwəd tuː ˈduːɪŋ/" },
      { en: "daily life",           zh: "日常生活",     ipa: "/ˈdeɪli laɪf/" },
      { en: "go to bed",            zh: "去睡觉",       ipa: "/ɡəʊ tuː bed/" },
      { en: "get up",               zh: "起床",         ipa: "/ɡet ʌp/" },
      { en: "on foot",              zh: "步行",         ipa: "/ɒn fʊt/" },
      { en: "full of energy",       zh: "充满活力",     ipa: "/fʊl əv ˈenədʒi/" },
      { en: "get ready for",        zh: "准备好……",     ipa: "/ɡet ˈredi fɔː/" },
      { en: "put on",               zh: "举办，上演",   ipa: "/pʊt ɒn/" },
      { en: "clean up",             zh: "打扫干净",     ipa: "/kliːn ʌp/" },
      { en: "pick up",              zh: "取（某物）；拾起", ipa: "/pɪk ʌp/" }
    ]
  },
  {
    id: "u3",
    title: "Unit 3 · 知识小结",
    source: "课本 Unit 3 知识小结页",

    /* 一、核心词与派生（1–12） */
    core: [
      { en: "deep",      zh: "深的",            ipa: "/diːp/",        star: true,
        deriv: [{ label: "名", en: "depth",       zh: "深度",          ipa: "/depθ/" }] },
      { en: "sandy",     zh: "铺满沙子的",       ipa: "/ˈsændi/",      star: false,
        deriv: [{ label: "名", en: "sand",        zh: "沙子",          ipa: "/sænd/" }] },
      { en: "south",     zh: "南方",            ipa: "/saʊθ/",        star: false,
        deriv: [{ label: "形", en: "southern",    zh: "南方的",        ipa: "/ˈsʌðən/" }] },
      { en: "loudly",    zh: "喧闹地，大声地",   ipa: "/ˈlaʊdli/",     star: false,
        deriv: [{ label: "形", en: "loud",        zh: "喧闹的",        ipa: "/laʊd/" }] },
      { en: "peaceful",  zh: "安静的；平静的",   ipa: "/ˈpiːsfl/",     star: false,
        deriv: [{ label: "名", en: "peace",       zh: "平静；和平",     ipa: "/piːs/" }] },
      { en: "reason",    zh: "原因",            ipa: "/ˈriːzn/",      star: true,
        deriv: [{ label: "形", en: "reasonable",  zh: "合理的",        ipa: "/ˈriːznəbl/" }] },
      { en: "alive",     zh: "有生气的",         ipa: "/əˈlaɪv/",      star: false,
        deriv: [{ label: "动", en: "live",        zh: "生活；居住",     ipa: "/lɪv/" },
                { label: "形", en: "living",      zh: "活着的",        ipa: "/ˈlɪvɪŋ/" }] },
      { en: "follow",    zh: "按……方式发展",     ipa: "/ˈfɒləʊ/",      star: false,
        deriv: [{ label: "形", en: "following",   zh: "下列的；下述的", ipa: "/ˈfɒləʊɪŋ/" }] },
      { en: "decide",    zh: "决定",            ipa: "/dɪˈsaɪd/",     star: false,
        deriv: [{ label: "名", en: "decision",    zh: "决定",          ipa: "/dɪˈsɪʒn/" }] },
      { en: "culture",   zh: "文化",            ipa: "/ˈkʌltʃə(r)/",  star: false,
        deriv: [{ label: "形", en: "cultural",    zh: "文化的",        ipa: "/ˈkʌltʃərəl/" }] },
      { en: "tradition", zh: "传统",            ipa: "/trəˈdɪʃn/",    star: false,
        deriv: [{ label: "形", en: "traditional", zh: "传统的",        ipa: "/trəˈdɪʃənl/" }] },
      { en: "fog",       zh: "雾",              ipa: "/fɒɡ/",         star: false,
        deriv: [{ label: "形", en: "foggy",       zh: "有雾的",        ipa: "/ˈfɒɡi/" }] }
    ],

    /* 二、基础词汇（13–31） */
    basic: [
      { en: "footprint",  zh: "脚印，足迹",  ipa: "/ˈfʊtprɪnt/",  star: true  },
      { en: "wet",        zh: "潮湿的",      ipa: "/wet/",        star: false },
      { en: "kick",       zh: "踢踹",        ipa: "/kɪk/",        star: false },
      { en: "town",       zh: "镇",          ipa: "/taʊn/",       star: false },
      { en: "feature",    zh: "特色；特征",  ipa: "/ˈfiːtʃə(r)/", star: false },
      { en: "clear",      zh: "晴朗的",      ipa: "/klɪə(r)/",    star: false },
      { en: "thunder",    zh: "雷",          ipa: "/ˈθʌndə(r)/",  star: false },
      { en: "lightning",  zh: "闪电",        ipa: "/ˈlaɪtnɪŋ/",   star: false },
      { en: "fresh",      zh: "新鲜的",      ipa: "/freʃ/",       star: false },
      { en: "gather",     zh: "采集",        ipa: "/ˈɡæðə(r)/",   star: false },
      { en: "snake",      zh: "蛇",          ipa: "/sneɪk/",      star: false },
      { en: "through",    zh: "自始至终",    ipa: "/θruː/",       star: false },
      { en: "region",     zh: "区域",        ipa: "/ˈriːdʒən/",   star: false },
      { en: "article",    zh: "文章",        ipa: "/ˈɑːtɪkl/",    star: true  },
      { en: "sandcastle", zh: "沙堡",        ipa: "/ˈsændkɑːsl/", star: false },
      { en: "divide",     zh: "分开",        ipa: "/dɪˈvaɪd/",    star: false },
      { en: "crop",       zh: "庄稼",        ipa: "/krɒp/",       star: false },
      { en: "local",      zh: "地方的",      ipa: "/ˈləʊkl/",     star: false },
      { en: "continue",   zh: "持续，继续",  ipa: "/kənˈtɪnjuː/", star: false }
    ],

    /* 三、重点短语（32–39） */
    phrases: [
      { en: "have picnics",              zh: "野餐",                 ipa: "/hæv ˈpɪknɪks/" },
      { en: "work one's land",           zh: "耕种土地",             ipa: "/wɜːk wʌnz lænd/" },
      { en: "take a trip",               zh: "去旅行",               ipa: "/teɪk ə trɪp/" },
      { en: "solar term",                zh: "节气",                 ipa: "/ˈsəʊlə tɜːm/" },
      { en: "in fact",                   zh: "事实上",               ipa: "/ɪn fækt/" },
      { en: "be divided into",           zh: "被划分成……",           ipa: "/bi dɪˈvaɪdɪd ˈɪntuː/" },
      { en: "be based on",               zh: "基于……",               ipa: "/bi beɪst ɒn/" },
      { en: "play an important part in", zh: "在……上发挥重要作用",   ipa: "/pleɪ ən ɪmˈpɔːtnt pɑːt ɪn/" }
    ]
  },
  {
    id: "u4",
    title: "Unit 4 · 知识小结",
    source: "课本 Unit 4 知识小结页",

    /* 一、核心词与派生（1–10） */
    core: [
      { en: "amazing",    zh: "令人惊奇的（sth）",  ipa: "/əˈmeɪzɪŋ/",   star: false,
        deriv: [{ label: "形(人)", en: "amazed (at)", zh: "感到惊奇的（sb）", ipa: "/əˈmeɪzd/" },
                { label: "动",     en: "amaze",       zh: "使惊奇",           ipa: "/əˈmeɪz/" },
                { label: "名",     en: "amazement",   zh: "惊奇",             ipa: "/əˈmeɪzmənt/" }] },
      { en: "north",      zh: "北方",              ipa: "/nɔːθ/",       star: false,
        deriv: [{ label: "形", en: "northern",     zh: "北方的",        ipa: "/ˈnɔːðən/" }] },
      { en: "wide",       zh: "宽阔的",            ipa: "/waɪd/",       star: false,
        deriv: [{ label: "名", en: "width",        zh: "宽度",          ipa: "/wɪdθ/" },
                { label: "副", en: "widely",       zh: "广泛地",        ipa: "/ˈwaɪdli/" }] },
      { en: "explore",    zh: "探索",              ipa: "/ɪkˈsplɔː(r)/", star: false,
        deriv: [{ label: "名", en: "exploration",  zh: "探索",          ipa: "/ˌekspləˈreɪʃn/" },
                { label: "人", en: "explorer",     zh: "探索者",        ipa: "/ɪkˈsplɔːrə(r)/" }] },
      { en: "disappear",  zh: "消失",              ipa: "/ˌdɪsəˈpɪə(r)/", star: false,
        deriv: [{ label: "名", en: "disappearance", zh: "消失",         ipa: "/ˌdɪsəˈpɪərəns/" }] },
      { en: "pollution",  zh: "污染",              ipa: "/pəˈluːʃn/",   star: false,
        deriv: [{ label: "动", en: "pollute",      zh: "污染",          ipa: "/pəˈluːt/" }] },
      { en: "protect",    zh: "保护",              ipa: "/prəˈtekt/",   star: false,
        deriv: [{ label: "名", en: "protection",   zh: "保护",          ipa: "/prəˈtekʃn/" }] },
      { en: "harmful",    zh: "有害的",            ipa: "/ˈhɑːmfl/",    star: false,
        deriv: [{ label: "反", en: "harmless",     zh: "无害的",        ipa: "/ˈhɑːmləs/" },
                { label: "名/动", en: "harm",      zh: "伤害",          ipa: "/hɑːm/" }] },
      { en: "hunt",       zh: "打猎",              ipa: "/hʌnt/",       star: false,
        deriv: [{ label: "名", en: "hunting",      zh: "打猎",          ipa: "/ˈhʌntɪŋ/" },
                { label: "人", en: "hunter",       zh: "猎手",          ipa: "/ˈhʌntə(r)/" }] },
      { en: "blow",       zh: "刮；吹",            ipa: "/bləʊ/",       star: false,
        deriv: [{ label: "过去式", en: "blew",     zh: "吹（过去式）",   ipa: "/bluː/" },
                { label: "过去分词", en: "blown",  zh: "吹（过去分词）", ipa: "/bləʊn/" }] }
    ],

    /* 二、基础词汇（11–38） */
    basic: [
      { en: "system",      zh: "系统",        ipa: "/ˈsɪstəm/",      star: false },
      { en: "file",        zh: "档案",        ipa: "/faɪl/",         star: false },
      { en: "planet",      zh: "行星",        ipa: "/ˈplænɪt/",      star: false },
      { en: "billion",     zh: "十亿",        ipa: "/ˈbɪljən/",      star: false },
      { en: "cover",       zh: "覆盖",        ipa: "/ˈkʌvə(r)/",     star: false },
      { en: "area",        zh: "地区；地域",  ipa: "/ˈeəriə/",       star: false },
      { en: "freezing",    zh: "极冷的",      ipa: "/ˈfriːzɪŋ/",     star: false },
      { en: "pole",        zh: "极",          ipa: "/pəʊl/",         star: false },
      { en: "desert",      zh: "沙漠",        ipa: "/ˈdezət/",       star: false },
      { en: "metre",       zh: "米",          ipa: "/ˈmiːtə(r)/",    star: false },
      { en: "reach",       zh: "足够到达",    ipa: "/riːtʃ/",        star: false },
      { en: "grain",       zh: "谷粒",        ipa: "/ɡreɪn/",        star: false },
      { en: "whale",       zh: "鲸鱼",        ipa: "/weɪl/",         star: false },
      { en: "butterfly",   zh: "蝴蝶",        ipa: "/ˈbʌtəflaɪ/",    star: false },
      { en: "provide",     zh: "提供",        ipa: "/prəˈvaɪd/",     star: false },
      { en: "plastic",     zh: "塑料",        ipa: "/ˈplæstɪk/",     star: false },
      { en: "chemical",    zh: "化学制品",    ipa: "/ˈkemɪkl/",      star: false },
      { en: "groundwater", zh: "地下水",      ipa: "/ˈɡraʊndwɔːtə(r)/", star: false },
      { en: "burn",        zh: "燃烧",        ipa: "/bɜːn/",         star: false },
      { en: "oil",         zh: "石油",        ipa: "/ɔɪl/",          star: false },
      { en: "gas",         zh: "天然气",      ipa: "/ɡæs/",          star: false },
      { en: "website",     zh: "网站",        ipa: "/ˈwebsaɪt/",     star: false },
      { en: "own",         zh: "自己的",      ipa: "/əʊn/",          star: false },
      { en: "emperor",     zh: "皇帝",        ipa: "/ˈempərə(r)/",   star: false },
      { en: "war",         zh: "战争",        ipa: "/wɔː(r)/",       star: false },
      { en: "sandstorm",   zh: "沙暴",        ipa: "/ˈsændstɔːm/",   star: false },
      { en: "solution",    zh: "解决办法",    ipa: "/səˈluːʃn/",     star: false },
      { en: "generation",  zh: "一代人",      ipa: "/ˌdʒenəˈreɪʃn/", star: false }
    ],

    /* 三、重点短语（39–48） */
    phrases: [
      { en: "solar system",         zh: "太阳系",           ipa: "/ˈsəʊlə ˈsɪstəm/" },
      { en: "fact file",            zh: "事实档案",         ipa: "/fækt faɪl/" },
      { en: "be covered by",        zh: "被……覆盖",       ipa: "/bi ˈkʌvəd baɪ/" },
      { en: "as far as we know",    zh: "据我们所知",       ipa: "/æz fɑːr əz wiː nəʊ/" },
      { en: "sea level",            zh: "海平面",           ipa: "/siː ˈlevl/" },
      { en: "what's more",          zh: "更重要的是",       ipa: "/wɒts mɔː(r)/" },
      { en: "provide sb with sth",  zh: "提供某人某物",     ipa: "/prəˈvaɪd ˈsʌmbədi wɪð ˈsʌmθɪŋ/" },
      { en: "cut down",             zh: "砍倒",             ipa: "/kʌt daʊn/" },
      { en: "hundreds of",          zh: "数以百计",         ipa: "/ˈhʌndrədz əv/" },
      { en: "blow away",            zh: "吹走",             ipa: "/bləʊ əˈweɪ/" }
    ]
  }
];
