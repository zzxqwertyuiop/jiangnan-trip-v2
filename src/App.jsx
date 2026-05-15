import React, { useMemo, useState } from "react";

const wiki = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1400`;

const IMG = {
  bundHero: wiki("Lujiazui Skyline (Night).jpg"),
  bundRiver: wiki("Lujiazui skyline by night from Bund, fully illuminated.jpg"),
  xujiahui: wiki("Saint-Ignatius cathedral of Shanghai.jpg"),
  yuyuan: wiki("Yu Garden, Shanghai.JPG"),
  yuyuanPond: wiki("View in Yu Garden, Shanghai.JPG"),
  wuzhenHero: wiki("Night in Wuzhen Xizha (20171231174337).jpg"),
  wuzhenStreet: wiki("Wuzhen Xizha 2009-03.jpg"),
  wuzhenDye: wiki("Wuzhen dyeing.jpg"),
  muxin: wiki("Mu Xin Art Museum Wuzhen.jpg"),
  versionHero: wiki("Overlook of the main building - Hangzhou National Archives 06.jpg"),
  versionHall: wiki("Hallway, Hangzhou National Archives 08.jpg"),
  liangzhu: wiki("Liangzhu Museum, 2019-07-07 09.jpg"),
  lingyin: wiki("Lingyin Temple in Hangzhou.jpg"),
  faxi: wiki("Faxi Temple in Hangzhou (Mahavira Hall).jpg"),
  longjingHero: wiki("Longjing tea village Hangzhou.jpg"),
  longjingField: wiki("Longjing tea fields near Hangzhou - panoramio.jpg"),
  longjingTea: wiki("Longjing tea.jpg"),
  shengjian: wiki("Shengjian mantou.jpg"),
  crabNoodle: wiki("Noodles and crabs.jpg"),
  dongpo: wiki("Dongpo pork by superturtle.jpg"),
  teaCup: wiki("Longjing tea 4.jpg"),
  bundFamily: "https://ak-d.tripcdn.com/images/1mh5x12000rinwbcu3C6B_C_340_230_R5.jpg?proc=source%2Ftrip",
  liBaiCrab: "https://res.klook.com/image/upload/w_750%2Ch_469%2Cc_fill%2Cq_85/w_80%2Cx_15%2Cy_15%2Cg_south_west%2Cl_Klook_water_br_trans_yhcmh3/activities/vfleykgwtgid3m9aucy4.webp",
  professorLee: "https://ak-d.tripcdn.com/images/1A0u1f000001g9o3q7D93_D_410_590_R5.jpg?proc=autoorient",
  renheguan: "https://youimg1.c-ctrip.com/target/100q0u000000j4ja834C6.jpg",
  yulanxiang: "https://sghimages.shobserver.com/img/catch/2025/10/17/85c84101-ee5a-42ba-bd79-8222ad569be7.jpg",
  wuzhenFood: wiki("Wuzhen Town 014.JPG"),
};

const moodThemes = {
  dream: {
    label: "Dream",
    zh: "梦游",
    emoji: "🌙",
    bg: "linear-gradient(160deg,#ffe4f3 0%,#edf1ff 42%,#c8dcff 100%)",
    glass: "rgba(255,255,255,.62)",
    card: "rgba(255,255,255,.78)",
    tint: "rgba(255,255,255,.54)",
    accent: "#5578ff",
    accent2: "#ff9bd2",
    gradient: "linear-gradient(135deg,#ff9bd2 0%,#6f94ff 100%)",
    note: "Soft colors, slower walking, more room for photos and tea.",
    noteZh: "粉蓝渐变、慢慢走，多留一点拍照和喝茶时间。",
  },
  energy: {
    label: "Energy",
    zh: "元气",
    emoji: "✨",
    bg: "linear-gradient(160deg,#ffd8ec 0%,#eadcff 44%,#8fb0ff 100%)",
    glass: "rgba(255,247,252,.66)",
    card: "rgba(255,255,255,.82)",
    tint: "rgba(255,235,246,.72)",
    accent: "#3157d7",
    accent2: "#ff8bc7",
    gradient: "linear-gradient(135deg,#ff86c6 0%,#3157d7 100%)",
    note: "Brighter mood. Add one snack, one photo stop, or one extra stroll.",
    noteZh: "更有活力，可以多加一个小吃、拍照点或顺路散步。",
  },
  misty: {
    label: "Misty",
    zh: "雨天",
    emoji: "🌧️",
    bg: "linear-gradient(160deg,#e5efff 0%,#f3dcff 48%,#bdd2ff 100%)",
    glass: "rgba(244,248,255,.72)",
    card: "rgba(255,255,255,.84)",
    tint: "rgba(226,236,255,.72)",
    accent: "#365ee8",
    accent2: "#b38cff",
    gradient: "linear-gradient(135deg,#9fc0ff 0%,#d6a7ff 100%)",
    note: "Rain-friendly. Less outdoor walking, more museums, cafés and taxis.",
    noteZh: "雨天友好，减少户外步行，多安排室内、咖啡和打车。",
  },
};

const days = [
  {
    id: "d25",
    tab: "Day 1 · 25",
    city: "Shanghai",
    cityZh: "上海",
    title: "Arrival + Bund Night",
    titleZh: "抵达上海 · 外滩夜景",
    hero: IMG.bundHero,
    hotel: "Courtyard by Marriott Shanghai Central / 上海浦西万怡酒店",
    address: "338 Hengfeng Road, Jing’an District / 静安区恒丰路338号",
    route: "Hotel 酒店 → Dinner 晚餐 → The Bund 外滩 → Hotel 酒店",
    intro: "A soft first night: old Shanghai façades, Huangpu River reflections, and the Lujiazui skyline in one walk.",
    introZh: "第一晚轻松一点：老上海建筑立面、黄浦江倒影和陆家嘴天际线放在同一条夜游线里。",
    images: [IMG.bundRiver, IMG.bundFamily, IMG.liBaiCrab, IMG.shengjian],
    plan: [
      {
        part: "Afternoon / 下午",
        title: "Check in + reset",
        zh: "入住 + 休息",
        image: IMG.bundRiver,
        place: "Hotel area / 酒店周边",
        transit: "Walk or short taxi 0–10 min / 步行或短打车0–10分钟",
        why: "This is the reset point before the first-night skyline route.",
        whyZh: "这是外滩夜景前的体力重置点，不安排复杂景点。",
      },
      {
        part: "Evening / 晚上",
        title: "Dinner near the Bund + skyline walk",
        zh: "外滩附近晚餐 + 夜景慢走",
        image: IMG.bundHero,
        place: "Hotel → Bund dinner → The Bund",
        transit: "Taxi 20–35 min each way; metro 30–45 min including walking. / 打车单程20–35分钟；地铁含步行30–45分钟。",
        why: "The Bund is Shanghai’s symbolic riverfront: historic banks and trading houses face the modern skyline across the river.",
        whyZh: "外滩是上海最具代表性的滨水地标：历史银行、洋行建筑与对岸现代天际线形成强烈对照。",
      },
    ],
    food: [
      {
        name: "Bund Family Banquet",
        zh: "外滩家宴",
        tag: "Main dinner / 主推晚餐",
        image: IMG.bundFamily,
        map: "外滩家宴 上海 外滩",
        story: "Old-Shanghai dinner direction: soy-braised dishes, seasonal cold plates and richer Jiangnan flavors that match the Bund’s historical setting.",
        storyZh: "老上海晚餐方向：本帮红烧、时令冷菜和偏浓郁的江南口味，和外滩历史建筑氛围比较搭。",
        try: ["Shanghai-style braised dishes 本帮红烧", "Seasonal cold dishes 时令冷菜", "Local soup 汤羹"],
      },
      {
        name: "Li Bai Crab",
        zh: "李百蟹 / 蟹黄面方向",
        tag: "Crab backup / 蟹类备选",
        image: IMG.liBaiCrab,
        map: "李百蟹 外滩 江景餐厅 上海",
        story: "Crab roe noodles turn crab fat and roe into a concentrated golden sauce over warm noodles — rich, aromatic and very memorable.",
        storyZh: "蟹黄面把蟹黄、蟹膏的鲜香浓缩到热面里，浓郁、香气足，是很有记忆点的一口。",
        try: ["Crab roe noodles 蟹黄面", "Crab dishes 蟹类菜", "River-view dinner 江景晚餐"],
      },
    ],
    jumps: [
      ["🌃", "The Bund night view", "外滩夜景", "外滩 上海"],
      ["🥢", "Bund Family Banquet", "外滩家宴", "外滩家宴 上海 外滩"],
      ["🦀", "Li Bai Crab", "李百蟹", "李百蟹 外滩 江景餐厅 上海"],
      ["🚶", "Nanjing East Road", "南京东路", "南京东路 上海"],
    ],
    missions: [
      ["🌃", "Skyline game", "Find one photo angle with old Shanghai and Lujiazui in the same frame.", "找一个能同时拍到老上海建筑和陆家嘴的角度。"],
      ["🥢", "First bite", "Pick one Shanghainese dish that feels new to the group.", "点一道大家没吃过的上海味道。"],
    ],
  },
  {
    id: "d26",
    tab: "Day 2 · 26",
    city: "Shanghai",
    cityZh: "上海",
    title: "Xujiahui + Yu Garden",
    titleZh: "徐家汇 · 豫园 · 上海美食",
    hero: IMG.xujiahui,
    hotel: "Courtyard by Marriott Shanghai Central / 上海浦西万怡酒店",
    address: "338 Hengfeng Road, Jing’an District / 静安区恒丰路338号",
    route: "Hotel 酒店 → Xujiahui 徐家汇 → Lunch 午餐 → Yu Garden 豫园 → Dinner 晚餐",
    intro: "Architecture, books, garden views and old-city food — a compact Shanghai culture day.",
    introZh: "建筑、书院、园林和老城厢美食，组成一个紧凑但不特种兵的上海文化日。",
    images: [IMG.xujiahui, IMG.professorLee, IMG.yuyuan, IMG.yulanxiang],
    plan: [
      {
        part: "Morning / 上午",
        title: "Xujiahui Cathedral + Library",
        zh: "徐家汇天主堂 + 徐家汇书院",
        image: IMG.xujiahui,
        place: "Hotel → Xujiahui Cathedral → Xujiahui Library",
        transit: "Taxi 30–40 min; metro 35–45 min. / 打车30–40分钟；地铁35–45分钟。",
        why: "Xujiahui was shaped by Jesuit history, education and science. The cathedral and library show two sides of that legacy.",
        whyZh: "徐家汇和耶稣会、教育、科学传统有关。天主堂和书院正好呈现这种历史与当代的两面。",
      },
      {
        part: "Afternoon / 下午",
        title: "Yu Garden",
        zh: "豫园",
        image: IMG.yuyuanPond,
        place: "Lunch → Yu Garden / Old City Bazaar",
        transit: "Taxi 25–40 min from Xujiahui; metro 35–45 min. / 从徐家汇打车25–40分钟；地铁35–45分钟。",
        why: "Yu Garden is a Ming-dynasty private garden built around rockeries, ponds, corridors and framed views.",
        whyZh: "豫园是明代私家园林，核心看山石、水池、廊道和被框景组织起来的视线。",
      },
      {
        part: "Evening / 晚上",
        title: "Yu Garden dinner",
        zh: "豫园附近晚餐",
        image: IMG.yulanxiang,
        place: "Yu Garden → Magnolia Chamber / snacks → Hotel",
        transit: "Taxi 15–30 min back to hotel. / 回酒店打车15–30分钟。",
        why: "Old-city Shanghai food fits here: dim sum, crab roe noodles, pan-fried buns and soy-braised dishes.",
        whyZh: "豫园周边适合吃老城厢味道：点心、蟹黄面、生煎包和本帮红烧。",
      },
    ],
    food: [
      { name: "Professor LEE", zh: "Professor LEE", tag: "Xujiahui / 徐家汇", image: IMG.professorLee, map: "Professor Lee 上海 港汇 K11 韩料", story: "A high-energy Korean meal choice: barbecue, stews and sharing plates for a young group.", storyZh: "适合年轻人补充体力的一餐：韩式烤肉、部队锅和多人分享的热闹氛围。", try: ["Korean BBQ 韩式烤肉", "Army stew 部队锅", "Cold noodles 冷面"] },
      { name: "Renheguan", zh: "人和馆", tag: "Jiangnan food / 江南菜", image: IMG.renheguan, map: "人和馆 上海 徐家汇", story: "Jiangnan-style seated meal: river shrimp, braised dishes and seasonal vegetables with a softer local palate.", storyZh: "江南/本帮方向的正餐：河虾、红烧类和时令蔬菜，口味更柔和。", try: ["River shrimp 河虾", "Braised dishes 红烧类", "Seasonal vegetables 时令菜"] },
      { name: "Magnolia Chamber", zh: "玉兰厢", tag: "Yu Garden / 豫园", image: IMG.yulanxiang, map: "玉兰厢 上海 豫园", story: "Near Yu Garden, Shanghainese food continues the old-city atmosphere from garden to table.", storyZh: "豫园附近吃上海菜很顺，能把老城厢的氛围从园林延续到餐桌。", try: ["Shanghainese dishes 本帮菜", "Dim sum 点心", "Noodles 面食"] },
    ],
    jumps: [
      ["⛪", "Xujiahui Cathedral", "徐家汇天主堂", "徐家汇天主堂 上海"],
      ["📚", "Xujiahui Library", "徐家汇书院", "徐家汇书院 上海"],
      ["🏮", "Yu Garden", "豫园", "豫园 上海"],
      ["🍽️", "Magnolia Chamber", "玉兰厢", "玉兰厢 上海 豫园"],
    ],
    missions: [
      ["📚", "Quiet corner", "Find one calm corner inside the library, not just the exterior.", "不要只拍外观，在书院里找一个安静角落。"],
      ["🏮", "Garden hunt", "Look for framed views: doorways, ponds, windows and rockeries.", "在豫园找框景：门洞、池水、窗和假山。"],
    ],
  },
  {
    id: "d27",
    tab: "Day 3 · 27",
    city: "Wuzhen",
    cityZh: "乌镇",
    title: "Shanghai → Wuzhen",
    titleZh: "上海转场乌镇 · 西栅慢游",
    hero: IMG.wuzhenHero,
    hotel: "Passage d'Eau Hotel / 乌镇西栅景区内酒店",
    address: "Xizha Scenic Area, Wuzhen / 乌镇西栅景区内",
    route: "Shanghai 上海 → Huzhou Nanxun 湖州南浔 → Wuzhen Xizha 乌镇西栅",
    intro: "The trip shifts from city lights to Jiangnan canals: bridges, water lanes, white walls and a slower night view.",
    introZh: "从城市灯光切换到江南水巷：石桥、水道、白墙和更慢的夜景。",
    images: [IMG.wuzhenStreet, IMG.wuzhenDye, IMG.muxin, IMG.wuzhenFood],
    plan: [
      { part: "Morning / 上午", title: "Transfer to Wuzhen", zh: "上海 → 乌镇转场", image: IMG.wuzhenStreet, place: "Hotel → Shanghai South Station → Huzhou Nanxun Station → Xizha", transit: "Taxi + train + taxi. Reserve train buffer. / 打车+高铁+打车，预留候车时间。", why: "This route keeps the move efficient without turning the whole day into a long car ride.", whyZh: "这条线能控制转场时间，也避免全程坐车过久。" },
      { part: "Afternoon / 下午", title: "Xizha slow walk + Muxin Art Museum", zh: "西栅慢逛 + 木心美术馆", image: IMG.muxin, place: "Xizha Service Center → canals → Muxin Art Museum", transit: "Walk or scenic shuttle 5–20 min between stops. / 景区内步行或景区车，点位间5–20分钟。", why: "Xizha is the polished night-view side of Wuzhen; Muxin Art Museum adds a quieter literary stop.", whyZh: "西栅适合夜游和慢逛，木心美术馆让水乡路线更有文学气质。" },
      { part: "Evening / 晚上", title: "Dinner + Xizha night view", zh: "晚餐 + 西栅夜景", image: IMG.wuzhenHero, place: "Dinner → optional boat ride → hotel", transit: "Walk / boat inside scenic area. / 景区内步行或摇橹船。", why: "Wuzhen’s night view is the main event: warm lights, bridges and reflections on the canal.", whyZh: "乌镇夜景是重点：灯光、石桥和水面倒影是水乡最有记忆点的部分。" },
    ],
    food: [
      { name: "Xizha snacks", zh: "乌镇西栅小吃", tag: "Local snacks / 当地小吃", image: IMG.wuzhenFood, map: "乌镇西栅 小吃 书生羊肉面 锦记糕点铺", story: "Wuzhen snacks are small portions between walks: lamb noodles, pastries, wontons, fried snacks and rice dumplings.", storyZh: "乌镇小吃适合边走边吃：羊肉面、糕点、馄饨、油煎小吃和粽子。", try: ["Lamb noodles 羊肉面", "Dingsheng cake 定胜糕", "Wontons 馄饨"] },
      { name: "Wuzhen local dishes", zh: "乌镇特色菜", tag: "Dishes / 菜品", image: IMG.wuzhenDye, map: "乌镇西栅 白水鱼 酱鸭 红烧羊肉", story: "River-town comfort food: white fish, soy-sauce duck, lamb, river shrimp and warm pastries.", storyZh: "水乡舒适菜：白水鱼、酱鸭、羊肉、河虾和热乎的糕点。", try: ["White fish 白水鱼", "Soy-sauce duck 酱鸭", "Braised lamb 红烧羊肉"] },
    ],
    jumps: [["🚄", "Shanghai South Station", "上海南站", "上海南站"], ["🚕", "Huzhou Nanxun Station", "湖州南浔站", "湖州南浔站"], ["🌉", "Wuzhen Xizha", "乌镇西栅", "乌镇西栅"], ["🖼️", "Muxin Art Museum", "木心美术馆", "木心美术馆 乌镇"]],
    missions: [["🌉", "Bridge count", "Count how many bridges you cross before dinner.", "晚餐前数一数过了几座桥。"], ["🍢", "Snack roulette", "Everyone chooses one small Wuzhen snack to share.", "每个人选一个乌镇小吃一起分着尝。"]],
  },
  {
    id: "d28",
    tab: "Day 4 · 28",
    city: "Hangzhou",
    cityZh: "杭州",
    title: "Version Museum + Liangzhu",
    titleZh: "杭州国家版本馆 · 良渚文化村",
    hero: IMG.versionHero,
    hotel: "Four Points by Sheraton Hangzhou, Binjiang / 杭州龙禧福朋喜来登酒店",
    address: "868 Dongxin Avenue, Binjiang District / 滨江区东信大道868号",
    route: "Hotel 酒店 → National Archives 版本馆 → Liangzhu 良渚 → Hotel 酒店",
    intro: "A culture day built around books, architecture and early Chinese civilization.",
    introZh: "这一天围绕版本典籍、建筑空间和中国早期文明展开。",
    images: [IMG.versionHall, IMG.dongpo, IMG.liangzhu, IMG.longjingTea],
    plan: [
      { part: "Morning / 上午", title: "National Archives", zh: "杭州国家版本馆", image: IMG.versionHero, place: "Hotel → Hangzhou National Archives", transit: "Taxi 45–65 min. / 打车45–65分钟。", why: "The museum is about books, printing culture and Chinese textual heritage, wrapped in restrained Chinese architecture.", whyZh: "版本馆主题是典籍、印刷和中华文脉，建筑语言偏克制的中式美学。" },
      { part: "Afternoon / 下午", title: "Liangzhu Cultural Village", zh: "良渚文化村", image: IMG.liangzhu, place: "Version Museum area → Liangzhu Cultural Village", transit: "Taxi 15–30 min; return to hotel 50–75 min. / 打车15–30分钟，回酒店50–75分钟。", why: "Liangzhu connects to jade ritual objects, rice agriculture and ancient water-management systems.", whyZh: "良渚关键词是玉器礼制、稻作农业和古代水利系统。" },
      { part: "Evening / 晚上", title: "Dinner near hotel", zh: "酒店附近晚餐", image: IMG.dongpo, place: "Hotel area dinner → rest", transit: "Walk or short taxi 5–15 min. / 步行或短打车5–15分钟。", why: "After longer transfers, choose a close meal: noodles, home-style Hangzhou dishes and seasonal vegetables.", whyZh: "这天转场较长，晚餐适合靠近酒店：片儿川、家常杭帮菜和时蔬。" },
    ],
    food: [
      { name: "Zhujiansanxi", zh: "竹间三喜", tag: "Liangzhu main / 良渚主推", image: IMG.longjingTea, map: "竹间三喜 良渚 杭州", story: "For Liangzhu, location matters: a relaxed restaurant near the cultural village saves energy and fits the slow cultural-area rhythm.", storyZh: "良渚当天餐厅位置比名气更重要，靠近文化村能减少转场，也更符合慢节奏文化片区。", try: ["Creative local dishes 创意菜", "Tea / dessert 茶饮甜品", "Seasonal dishes 时令菜"] },
      { name: "Hangzhou cuisine", zh: "杭帮菜方向", tag: "Local flavor / 当地特色", image: IMG.dongpo, map: "杭州 杭帮菜 东坡肉 龙井虾仁 片儿川", story: "Hangzhou cuisine is gentle and seasonal: Dongpo pork, Longjing shrimp, West Lake vinegar fish and Song Sao fish soup are classic menu names.", storyZh: "杭帮菜偏清雅、重时令。东坡肉、龙井虾仁、西湖醋鱼、宋嫂鱼羹都是经典菜名。", try: ["Dongpo pork 东坡肉", "Longjing shrimp 龙井虾仁", "Pian’erchuan 片儿川"] },
    ],
    jumps: [["🏛️", "National Archives", "杭州国家版本馆", "杭州国家版本馆"], ["🌿", "Liangzhu Cultural Village", "良渚文化村", "良渚文化村 杭州"], ["🍵", "Zhujiansanxi", "竹间三喜", "竹间三喜 良渚 杭州"], ["🍃", "Longjing backup", "龙井茶园备选", "龙井茶园 杭州"]],
    missions: [["🏛️", "Architecture eye", "Find one roofline, corridor or courtyard detail that feels Chinese.", "找一个最有中式气质的屋顶、廊道或庭院细节。"], ["🌿", "Slow civilization", "Look at Liangzhu through jade, rice fields and ancient water systems.", "带着玉器、稻作和古代水利的视角看良渚。"]],
  },
  {
    id: "d29",
    tab: "Day 5 · 29",
    city: "Hangzhou",
    cityZh: "杭州",
    title: "Temple Route + Longjing Tea Fields",
    titleZh: "寺庙线 · 龙井茶园",
    hero: IMG.longjingHero,
    hotel: "Four Points by Sheraton Hangzhou, Binjiang / 杭州龙禧福朋喜来登酒店",
    address: "868 Dongxin Avenue, Binjiang District / 滨江区东信大道868号",
    route: "Hotel 酒店 → Lingyin 灵隐 → Faxi 法喜 → Longjing 龙井茶园 → Hotel 酒店",
    intro: "A quiet final day: wooded temple paths, Buddhist courtyards and tea fields on the hills.",
    introZh: "最后一天安静收尾：山林寺庙、佛寺院落和坡地茶园。",
    images: [IMG.lingyin, IMG.teaCup, IMG.longjingField, IMG.faxi],
    plan: [
      { part: "Morning / 上午", title: "Lingyin temple route", zh: "灵隐寺庙线", image: IMG.lingyin, place: "Hotel → Lingyin / Faxi area", transit: "Taxi 35–55 min from hotel. / 酒店打车35–55分钟。", why: "Lingyin is one of Hangzhou’s classic Buddhist temple areas, set between wooded hills and stone grotto scenery.", whyZh: "灵隐是杭州经典佛寺区域之一，山林、寺庙和石刻景观联系在一起。" },
      { part: "Afternoon / 下午", title: "Longjing Tea Fields", zh: "龙井茶园", image: IMG.longjingField, place: "Temple area → Longjing Tea Fields / Longjing Village", transit: "Taxi 20–35 min from West Lake/Faxi area. / 从西湖/法喜寺方向打车20–35分钟。", why: "Longjing is tied to West Lake Dragon Well tea. The landscape is the point: tea terraces, village lanes and roasting aromas.", whyZh: "龙井对应西湖龙井茶，重点不是单个建筑，而是茶田、村路和炒茶香气。" },
      { part: "Evening / 晚上", title: "Dinner + easy ending", zh: "晚餐 + 轻松收尾", image: IMG.teaCup, place: "Longjing / hotel direction → dinner", transit: "Return to hotel about 40–60 min. / 回酒店约40–60分钟。", why: "The final meal should be close and comforting: noodles, wontons, light Hangzhou dishes or tea dessert.", whyZh: "最后一餐适合近、简单、舒服：片儿川、馄饨、轻杭帮菜或茶点甜品。" },
    ],
    food: [
      { name: "Fuyuanju Restaurant", zh: "福缘居酒楼（文三西路店）", tag: "Main pick / 主推", image: IMG.dongpo, map: "福缘居酒楼 文三西路店 杭州", story: "A proper meal after the temple route: Hangzhou-style braised dishes, seasonal vegetables and soups.", storyZh: "寺庙线后适合吃一顿正式杭帮菜：红烧类、时令蔬菜和汤羹会比较舒服。", try: ["Hangzhou dishes 杭帮菜", "Seasonal vegetables 时蔬", "Soup 汤羹"] },
      { name: "Qunle Restaurant", zh: "群乐饭店（滨安路店）", tag: "Dinner backup / 晚餐备选", image: IMG.dongpo, map: "群乐饭店 滨安路店 杭州", story: "A practical dinner backup on the way back toward Binjiang: convenient, familiar, and local-home-style.", storyZh: "回滨江方向的实用晚餐备选，重点是顺路、方便、家常。", try: ["Pian’erchuan 片儿川", "Wontons 馄饨", "Home-style dishes 家常菜"] },
      { name: "Tea break", zh: "龙井茶歇", tag: "Tea / 茶歇", image: IMG.longjingTea, map: "龙井茶园 杭州 茶馆", story: "In Hangzhou, tea break is part of the trip: Longjing tea, tea snacks, lotus-root dessert and quiet hill views.", storyZh: "杭州茶歇本身就是旅行内容：龙井茶、茶点、桂花糯米藕和山坡景观。", try: ["Longjing tea 龙井茶", "Tea snacks 茶点", "Lotus root dessert 糯米藕"] },
    ],
    jumps: [["⛰️", "Lingyin Temple", "灵隐寺", "灵隐寺 杭州"], ["🙏", "Faxi Temple", "法喜寺", "法喜寺 杭州"], ["🍃", "Longjing Tea Fields", "龙井茶园", "龙井茶园 杭州"], ["🍚", "Fuyuanju", "福缘居", "福缘居酒楼 文三西路店 杭州"]],
    missions: [["⛰️", "Temple silence", "Take five quiet minutes before taking photos.", "进寺庙线后先安静五分钟，再开始拍照。"], ["🍃", "Tea-field pause", "Smell the tea air, then choose one tea or tea snack before leaving.", "到龙井茶园先闻一闻茶香，离开前选一杯茶或茶点。"]],
  },
];

const tabs = [
  ["home", "Today", "首页"],
  ["route", "Route", "路线"],
  ["taste", "Taste", "味道"],
  ["go", "Go", "出发"],
];

function mapLinks(query) {
  const q = encodeURIComponent(query);
  const me = encodeURIComponent("我的位置");
  return {
    amap: `https://uri.amap.com/search?keyword=${q}&callnative=1`,
    baidu: `https://api.map.baidu.com/direction?origin=${me}&destination=${q}&mode=driving&region=${encodeURIComponent("全国")}&output=html&src=jiangnan-trip`,
    apple: `https://maps.apple.com/?daddr=${q}&dirflg=d`,
    google: `https://www.google.com/maps/dir/?api=1&destination=${q}&travelmode=driving`,
  };
}

function SmartImage({ src, alt, className }) {
  const [bad, setBad] = useState(false);
  return bad ? (
    <div className={`${className} flex items-center justify-center bg-gradient-to-br from-indigo-200 via-pink-200 to-blue-300 text-xs font-bold text-white`}>Photo loading</div>
  ) : (
    <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setBad(true)} className={className} />
  );
}

function Badge({ children, style }) {
  return <span className="inline-flex shrink-0 items-center rounded-full bg-white/74 px-3 py-1 text-[11px] font-black text-neutral-800 shadow-sm" style={style}>{children}</span>;
}

function SectionTitle({ kicker, title, right }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-neutral-500">{kicker}</p>
        <h2 className="mt-1 text-[22px] font-black leading-tight tracking-[-0.04em]">{title}</h2>
      </div>
      {right}
    </div>
  );
}

function MapButtons({ query }) {
  const links = mapLinks(query);
  const item = "rounded-2xl py-2.5 text-center text-xs font-black transition active:scale-95";
  return (
    <div className="grid grid-cols-2 gap-2">
      <a href={links.amap} target="_blank" rel="noreferrer" className={`${item} text-white`} style={{ background: "linear-gradient(135deg,#ff8ac5,#5178ff)" }}>高德导航</a>
      <a href={links.baidu} target="_blank" rel="noreferrer" className={`${item} text-white`} style={{ background: "linear-gradient(135deg,#6f94ff,#264bd8)" }}>百度驾车</a>
      <a href={links.apple} target="_blank" rel="noreferrer" className={`${item} bg-white/70 text-neutral-800`}>Apple</a>
      <a href={links.google} target="_blank" rel="noreferrer" className={`${item} bg-white/70 text-neutral-800`}>Google</a>
    </div>
  );
}

function MoodSwitch({ mood, setMood, theme }) {
  return (
    <section className="rounded-[32px] p-4 shadow-[0_18px_50px_rgba(75,91,180,0.12)] ring-1 ring-white/70" style={{ background: theme.card }}>
      <SectionTitle kicker="Mood Switch" title="旅行状态" right={<Badge>fun</Badge>} />
      <div className="grid grid-cols-3 gap-2">
        {Object.entries(moodThemes).map(([key, item]) => (
          <button key={key} onClick={() => setMood(key)} className="rounded-2xl px-3 py-3 text-center text-xs font-black transition active:scale-95" style={{ background: mood === key ? item.gradient : item.tint, color: mood === key ? "white" : "#333", boxShadow: mood === key ? "0 14px 35px rgba(70,90,220,.22)" : "none" }}>
            <span className="block text-lg">{item.emoji}</span>
            <span className="mt-1 block">{item.label}</span>
            <span className="block text-[10px] opacity-80">{item.zh}</span>
          </button>
        ))}
      </div>
      <p className="mt-3 rounded-2xl p-3 text-sm leading-6 text-neutral-700" style={{ background: theme.tint }}>{theme.note}<br /><span className="text-neutral-500">{theme.noteZh}</span></p>
    </section>
  );
}

function Hero({ day, theme, openGuide }) {
  return (
    <button onClick={openGuide} className="group relative h-[360px] w-full overflow-hidden rounded-[40px] text-left shadow-[0_26px_80px_rgba(66,82,180,.24)] transition active:scale-[.99]">
      <SmartImage src={day.hero} alt={day.titleZh} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#10205f]/86 via-[#3157d7]/16 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32" style={{ background: "linear-gradient(180deg,rgba(255,190,230,.34),transparent)" }} />
      <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full blur-3xl" style={{ background: theme.accent2, opacity: .38 }} />
      <div className="relative flex h-full flex-col justify-end p-5 text-white">
        <div className="mb-3 flex gap-2"><Badge>{day.city} · {day.cityZh}</Badge><Badge>{day.tab}</Badge></div>
        <h2 className="text-[36px] font-black leading-[.92] tracking-[-.06em]">{day.title}</h2>
        <p className="mt-2 text-lg font-semibold text-white/90">{day.titleZh}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/86">{day.intro} / {day.introZh}</p>
      </div>
    </button>
  );
}

function RouteCard({ step, index, theme, open, onToggle }) {
  return (
    <article className="overflow-hidden rounded-[34px] shadow-[0_18px_56px_rgba(75,91,180,.13)] ring-1 ring-white/70" style={{ background: theme.card }}>
      <button onClick={onToggle} className="relative h-40 w-full overflow-hidden bg-neutral-200">
        <SmartImage src={step.image} alt={step.zh} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17307a]/55 to-transparent" />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
          <span className="text-xs font-black uppercase tracking-[.14em]">{step.part}</span>
          <span className="rounded-full bg-white/92 px-3 py-1 text-xs font-black text-neutral-900">Loose plan</span>
        </div>
      </button>
      <button onClick={onToggle} className="w-full p-4 text-left">
        <div className="mb-3 flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white" style={{ background: theme.gradient }}>{String(index + 1).padStart(2, "0")}</div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-black leading-tight tracking-[-.03em]">{step.title}</h3>
            <p className="mt-0.5 text-sm font-semibold text-neutral-500">{step.zh}</p>
          </div>
          <div className="rounded-full bg-white/70 px-2 py-1 text-xs font-black">{open ? "−" : "+"}</div>
        </div>
        <div className="space-y-2">
          <div className="rounded-2xl p-3 text-sm leading-6" style={{ background: theme.tint }}><span className="text-[11px] font-black uppercase tracking-[.12em] text-neutral-500">Place / 地点</span><br />{step.place}</div>
          <div className="rounded-2xl p-3 text-sm leading-6 text-blue-950" style={{ background: "rgba(219,234,254,.78)" }}><span className="text-[11px] font-black uppercase tracking-[.12em] text-blue-500">Transit / 交通</span><br />{step.transit}</div>
        </div>
      </button>
      {open && <div className="space-y-3 border-t border-white/70 p-4 pt-3"><div className="rounded-2xl bg-white/66 p-3 text-sm leading-6 text-neutral-700"><strong>Why it matters / 为什么值得去</strong><br />{step.why}<br /><span className="text-neutral-500">{step.whyZh}</span></div></div>}
    </article>
  );
}

function FoodCard({ item, theme, onOpen }) {
  return (
    <button onClick={() => onOpen(item)} className="w-full overflow-hidden rounded-[34px] text-left shadow-[0_18px_56px_rgba(75,91,180,.13)] ring-1 ring-white/70 transition active:scale-[.99]" style={{ background: theme.card }}>
      <SmartImage src={item.image} alt={item.zh} className="h-44 w-full object-cover" />
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-3"><div><h3 className="text-lg font-black leading-tight tracking-[-.03em]">{item.name}</h3><p className="text-sm font-semibold text-neutral-500">{item.zh}</p></div><Badge>{item.tag}</Badge></div>
        <p className="text-sm leading-6 text-neutral-700">{item.story}</p>
        <p className="mt-1 text-sm leading-6 text-neutral-500">{item.storyZh}</p>
        <div className="mt-3 flex flex-wrap gap-2">{item.try.slice(0, 3).map((x) => <span key={x} className="rounded-full px-3 py-1 text-[11px] font-bold text-neutral-700" style={{ background: theme.tint }}>{x}</span>)}</div>
      </div>
    </button>
  );
}

function DetailSheet({ item, theme, onClose }) {
  if (!item) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-indigo-950/35 px-3 pb-3" onClick={onClose}>
      <div className="max-h-[88vh] w-full max-w-[430px] overflow-hidden rounded-[38px] shadow-[0_30px_100px_rgba(34,48,140,.32)] ring-1 ring-white/70" style={{ background: theme.bg }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-white/60 px-5 py-4 backdrop-blur-xl" style={{ background: theme.glass }}>
          <div><p className="text-xs font-black uppercase tracking-[.14em] text-neutral-500">Detail</p><h3 className="text-xl font-black leading-tight tracking-[-.04em]">{item.name}</h3><p className="text-sm font-semibold text-neutral-500">{item.zh}</p></div>
          <button onClick={onClose} className="rounded-full bg-white/80 px-4 py-2 text-sm font-black shadow-sm">Close</button>
        </div>
        <div className="max-h-[72vh] overflow-y-auto p-5">
          {item.image && <SmartImage src={item.image} alt={item.zh} className="mb-4 h-60 w-full rounded-[30px] object-cover" />}
          <p className="text-sm leading-6 text-neutral-700">{item.story || item.note}</p>
          <p className="mt-1 text-sm leading-6 text-neutral-500">{item.storyZh || item.noteZh}</p>
          {item.try && <div className="mt-4 rounded-2xl bg-white/66 p-4 text-sm leading-6"><strong>What to try / 推荐尝试</strong><ul className="mt-2 list-disc space-y-1 pl-4">{item.try.map((x) => <li key={x}>{x}</li>)}</ul></div>}
          {item.map && <div className="mt-4"><MapButtons query={item.map} /></div>}
          {item.image && <p className="mt-3 rounded-2xl bg-white/55 p-3 text-[11px] font-semibold leading-5 text-neutral-500">Real-photo reference / 真实参考图：used for recognition and travel context, not for advertising.</p>}
        </div>
      </div>
    </div>
  );
}

function JumpCard({ icon, title, zh, query, theme, onOpen }) {
  return (
    <div className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.13)] ring-1 ring-white/70" style={{ background: theme.card }}>
      <div className="mb-3 flex items-center gap-3"><div className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl text-white" style={{ background: theme.gradient }}>{icon}</div><div><h3 className="text-lg font-black leading-tight tracking-[-.03em]">{title}</h3><p className="text-sm font-semibold text-neutral-500">{zh}</p></div></div>
      {onOpen ? <button onClick={onOpen} className="w-full rounded-2xl py-3 text-xs font-black text-white" style={{ background: theme.gradient }}>Open guide / 打开攻略</button> : <MapButtons query={query} />}
    </div>
  );
}

export default function JiangnanTravelGuideApp() {
  const [dayId, setDayId] = useState("d25");
  const [tab, setTab] = useState("home");
  const [mood, setMood] = useState("dream");
  const [openStep, setOpenStep] = useState(0);
  const [detail, setDetail] = useState(null);
  const day = days.find((d) => d.id === dayId) || days[0];
  const theme = moodThemes[mood];
  const guide = useMemo(() => ({ name: "Spot + Food Guide", zh: "景点与美食详细介绍", image: day.hero, story: day.intro, storyZh: day.introZh, try: [...day.plan.map((p) => `${p.zh}: ${p.whyZh}`), ...day.food.flatMap((f) => f.try)].slice(0, 12) }), [day]);

  return (
    <div className="min-h-screen text-neutral-950 transition-all duration-700" style={{ background: theme.bg }}>
      <div className="relative mx-auto min-h-screen max-w-[430px] overflow-hidden shadow-[0_30px_90px_rgba(74,91,180,.18)]" style={{ background: theme.bg }}>
        <div className="pointer-events-none absolute -right-24 top-12 h-64 w-64 rounded-full blur-3xl" style={{ background: theme.accent2, opacity: .30 }} />
        <div className="pointer-events-none absolute -left-24 top-80 h-72 w-72 rounded-full blur-3xl" style={{ background: theme.accent, opacity: .18 }} />
        <header className="sticky top-0 z-30 border-b border-white/55 px-5 pb-3 pt-5 backdrop-blur-2xl" style={{ background: theme.glass }}>
          <div className="flex items-start justify-between gap-3"><div><p className="text-[11px] font-black uppercase tracking-[.20em] text-neutral-500">Jiangnan private guide</p><h1 className="mt-1 bg-clip-text text-[31px] font-black leading-tight tracking-[-.05em] text-transparent" style={{ backgroundImage: theme.gradient }}>Jiangnan Trip</h1><p className="mt-1 text-sm font-medium text-neutral-500">Places · Transit · Taste · Fun</p></div><button onClick={() => setDetail(guide)} className="rounded-full bg-white/78 px-4 py-2 text-sm font-black shadow-sm">Guide</button></div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">{days.map((d) => <button key={d.id} onClick={() => { setDayId(d.id); setTab("home"); setOpenStep(0); }} className="shrink-0 rounded-full px-4 py-2 text-sm font-bold shadow-sm transition active:scale-95" style={dayId === d.id ? { background: theme.gradient, color: "white" } : { background: "rgba(255,255,255,.72)", color: "#52525b" }}>{d.tab}</button>)}</div>
        </header>

        <main className="relative z-10 space-y-5 px-5 pb-28 pt-5">
          <Hero day={day} theme={theme} openGuide={() => setDetail(guide)} />
          <SectionTitle kicker={day.city} title={{ home: "今日概览", route: "大致路线", taste: "味道推荐", go: "快速出发" }[tab]} right={<Badge style={{ background: theme.tint }}>{day.cityZh}</Badge>} />

          {tab === "home" && <div className="space-y-5">
            <section className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.13)] ring-1 ring-white/70" style={{ background: theme.card }}><SectionTitle kicker="Hotel" title="酒店与起点" /><p className="text-sm font-bold leading-6">{day.hotel}</p><p className="mt-1 text-sm leading-6 text-neutral-500">{day.address}</p><div className="mt-3"><MapButtons query={`${day.hotel} ${day.address}`} /></div></section>
            <section className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.13)] ring-1 ring-white/70" style={{ background: theme.card }}><SectionTitle kicker="Route" title="今日主线" right={<Badge>{theme.emoji} {theme.label}</Badge>} /><div className="rounded-2xl p-3 text-sm font-semibold leading-6" style={{ background: theme.tint }}>{day.route}</div></section>
            <MoodSwitch mood={mood} setMood={setMood} theme={theme} />
            <section className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.13)] ring-1 ring-white/70" style={{ background: theme.card }}><SectionTitle kicker="Tiny missions" title="今日小任务" right={<Badge>play</Badge>} /><div className="space-y-2">{day.missions.map(([i, t, e, z]) => <div key={t} className="rounded-2xl p-3 text-sm leading-6" style={{ background: theme.tint }}><strong>{i} {t}</strong><br />{e}<br /><span className="text-neutral-500">{z}</span></div>)}</div></section>
            <section className="grid grid-cols-2 gap-3"><button onClick={() => setTab("route")} className="rounded-[28px] p-4 text-left shadow-sm ring-1 ring-white/70 transition active:scale-95" style={{ background: theme.card }}><p className="text-xs font-bold text-neutral-500">Route</p><h3 className="mt-1 text-lg font-black">看路线</h3><p className="mt-2 text-sm text-neutral-500">上午/下午/晚上</p></button><button onClick={() => setTab("go")} className="rounded-[28px] p-4 text-left text-white shadow-sm transition active:scale-95" style={{ background: theme.gradient }}><p className="text-xs font-bold text-white/70">Go</p><h3 className="mt-1 text-lg font-black">一键出发</h3><p className="mt-2 text-sm text-white/80">酒店/餐厅/景点</p></button></section>
          </div>}

          {tab === "route" && <div className="space-y-3">{day.plan.map((s, i) => <RouteCard key={s.title} step={s} index={i} theme={theme} open={openStep === i} onToggle={() => setOpenStep(openStep === i ? -1 : i)} />)}</div>}
          {tab === "taste" && <div className="space-y-3"><p className="rounded-2xl p-4 text-sm leading-6 text-neutral-600 shadow-sm" style={{ background: theme.card }}>Main picks come first. Food notes explain background, ingredients and why each taste fits the route. / 主推放前面，每个美食说明都包含背景、材料和为什么适合这条路线。</p>{day.food.map((f) => <FoodCard key={f.name} item={f} theme={theme} onOpen={setDetail} />)}</div>}
          {tab === "go" && <div className="space-y-3"><JumpCard icon="✨" title="Spot + Food Guide" zh="景点与美食详细介绍" theme={theme} onOpen={() => setDetail(guide)} />{[["🏨", "Hotel anchor", "回酒店", `${day.hotel} ${day.address}`], ...day.jumps].map(([i, t, z, q]) => <JumpCard key={t} icon={i} title={t} zh={z} query={q} theme={theme} />)}</div>}
        </main>

        <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[430px] -translate-x-1/2 border-t border-white/60 px-3 py-3 backdrop-blur-2xl" style={{ background: theme.glass }}><div className="grid grid-cols-4 gap-2 rounded-[28px] bg-white/60 p-2 shadow-[0_20px_60px_rgba(72,89,190,.14)] ring-1 ring-white/80">{tabs.map(([id, en, zh]) => <button key={id} onClick={() => setTab(id)} className="rounded-2xl px-2 py-2 text-xs font-black transition active:scale-95" style={tab === id ? { background: theme.gradient, color: "white" } : { color: "#71717a" }}><span className="block">{en}</span><span className="block text-[10px] opacity-80">{zh}</span></button>)}</div></nav>
        <DetailSheet item={detail} theme={theme} onClose={() => setDetail(null)} />
      </div>
    </div>
  );
}
