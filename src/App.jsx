import React, { useMemo, useState } from "react";

const photo = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1200`;

const photos = {
  bund: photo("Lujiazui Skyline (Night).jpg"),
  bundAlt: photo("Lujiazui skyline by night from Bund, fully illuminated.jpg"),
  cathedral: photo("Saint-Ignatius cathedral of Shanghai.jpg"),
  yuyuan: photo("Shanghai - Yu Garden - 0004.jpg"),
  yuyuanAlt: photo("Shanghai - Yu Garden - 0011.jpg"),
  wuzhen: photo("Night in Wuzhen Xizha (20171231174337).jpg"),
  wuzhenDay: photo("Wuzhen Xizha 2009-03.jpg"),
  wuzhenDye: photo("Wuzhen dyeing.jpg"),
  muxin: photo("Mu Xin Art Museum Wuzhen.jpg"),
  versionMuseum: photo("Overlook of the main building - Hangzhou National Archives 06.jpg"),
  versionMuseumInside: photo("Hallway, Hangzhou National Archives 08.jpg"),
  liangzhu: photo("Liangzhu Museum, 2019-07-07 09.jpg"),
  liangzhuCourtyard: photo("Courtyard of Liangzhu Museum, 2016-06-18.jpg"),
  faxi: photo("Faxi Temple in Hangzhou (Mahavira Hall).jpg"),
  lingyin: photo("Lingyin Temple in Hangzhou.jpg"),
  lingyinHall: photo("Mahavira Hall of Lingyin Temple 20061010.jpg"),
  longjing: photo("Longjing tea village Hangzhou.jpg"),
  longjingFields: photo("Longjing tea fields near Hangzhou - panoramio.jpg"),
  longjingDistrict: photo("Longjing tea district Hangzhou.jpg"),
  crabNoodle: photo("苏州蟹粉面.jpg"),
  shengjian: photo("ShengJianBaoShanghaiChina.jpg"),
  shanghaiTable: "https://ak-d.tripcdn.com/images/1mh5x12000rinwbcu3C6B_C_340_230_R5.jpg?proc=source%2Ftrip",
  crabDish: "https://res.klook.com/image/upload/w_750%2Ch_469%2Cc_fill%2Cq_85/w_80%2Cx_15%2Cy_15%2Cg_south_west%2Cl_Klook_water_br_trans_yhcmh3/activities/vfleykgwtgid3m9aucy4.webp",
  koreanBbq: "https://ak-d.tripcdn.com/images/1A0u1f000001g9o3q7D93_D_410_590_R5.jpg?proc=autoorient",
  jiangnanDish: "https://youimg1.c-ctrip.com/target/100q0u000000j4ja834C6.jpg",
  dimsum: "https://sghimages.shobserver.com/img/catch/2025/10/17/85c84101-ee5a-42ba-bd79-8222ad569be7.jpg",
  wuzhenFood: photo("Wuzhen Town 014.JPG"),
  hangzhouCuisine: "https://youimg1.c-ctrip.com/target/100q0u000000j4ja834C6.jpg",
  teaSnack: photo("Longjing tea district Hangzhou.jpg"),
  bundFamily: "https://ak-d.tripcdn.com/images/1mh5x12000rinwbcu3C6B_C_340_230_R5.jpg?proc=source%2Ftrip",
  liBaiCrab: "https://res.klook.com/image/upload/w_750%2Ch_469%2Cc_fill%2Cq_85/w_80%2Cx_15%2Cy_15%2Cg_south_west%2Cl_Klook_water_br_trans_yhcmh3/activities/vfleykgwtgid3m9aucy4.webp",
  professorLee: "https://ak-d.tripcdn.com/images/1A0u1f000001g9o3q7D93_D_410_590_R5.jpg?proc=autoorient",
  renheguan: "https://youimg1.c-ctrip.com/target/100q0u000000j4ja834C6.jpg",
  yulanxiang: "https://sghimages.shobserver.com/img/catch/2025/10/17/85c84101-ee5a-42ba-bd79-8222ad569be7.jpg",
  teaFieldA: photo("Longjing tea village Hangzhou.jpg"),
  teaFieldB: photo("Longjing tea fields near Hangzhou - panoramio.jpg"),
};

const tripDays = [
  {
    id: "d25",
    date: "25",
    day: "Day 1",
    city: "Shanghai",
    cityZh: "上海",
    title: "Arrival + Bund Night",
    titleZh: "抵达上海 · 外滩夜景",
    hero: photos.bund,
    gallery: [photos.bund, photos.bundAlt, photos.bundFamily, photos.liBaiCrab],
    hotel: "Courtyard by Marriott Shanghai Central / 上海浦西万怡酒店",
    address: "338 Hengfeng Road, Jing’an District / 静安区恒丰路338号",
    routeSummary: "Hotel 酒店 → Dinner 晚餐 → The Bund 外滩 → Hotel 酒店",
    vibe: "First night, skyline, river view, simple dinner.",
    vibeZh: "第一晚看天际线和黄浦江夜景，晚餐放在外滩附近。",
    schedule: [
      {
        period: "Afternoon / 下午",
        time: "14:00–16:30",
        title: "Check in + short rest",
        titleZh: "入住 + 短暂休息",
        route: "Hotel → Rest → Prepare map apps",
        routeZh: "酒店 → 休息 → 准备地图软件",
        transport: "Hotel area: walk or short taxi 0–10 min / 酒店周边步行或短打车0–10分钟",
        note: "Keep the arrival day light. Rest first, then go out for dinner and the night view.",
        noteZh: "抵达日保持轻松，先休息，再出门吃晚餐和看夜景。",
        legs: [
          "Arrival point → Hotel: Shanghai Railway Station is about 5–10 min by taxi; Hongqiao hub is about 35–55 min. / 抵达点→酒店：上海站打车约5–10分钟，虹桥枢纽约35–55分钟。",
          "Metro reference: get to Hanzhong Road Station, then walk about 5–8 min to the hotel. / 地铁参考：到汉中路站后步行约5–8分钟到酒店。",
        ],
      },
      {
        period: "Evening / 晚上",
        time: "17:30–21:00",
        title: "Dinner near the Bund + night view",
        titleZh: "外滩附近晚餐 + 夜景",
        route: "Hotel → Bund dinner → The Bund → Hotel",
        routeZh: "酒店 → 外滩附近晚餐 → 外滩夜景 → 回酒店",
        transport: "Taxi 20–35 min each way; metro about 30–45 min including walking. / 打车单程约20–35分钟；地铁含步行约30–45分钟。",
        note: "The focus is the skyline and river night view. Keep the evening within the Bund / Huangpu River area.",
        noteZh: "重点是外滩天际线和黄浦江夜景，晚上的活动尽量控制在外滩/黄浦江沿线。",
        legs: [
          "Hotel → The Bund: taxi usually takes about 20–35 min in evening traffic. / 酒店→外滩晚间打车通常预留20–35分钟。",
          "Metro: Hanzhong Road Station → Line 1 to People’s Square → Line 2 to East Nanjing Road → walk to the Bund. / 地铁：汉中路站→1号线人民广场→换2号线南京东路→步行到外滩。",
        ],
      },
    ],
    routeNotes: [
      "Taxi to the Bund is the cleanest option for the first night. / 第一晚去外滩打车最省心。",
      "Dinner and river view should stay in one area. / 晚餐和夜景尽量放在同一区域。",
    ],
    restaurants: [
      {
        name: "Bund Family Banquet",
        zh: "外滩家宴",
        image: photos.bundFamily,
        tag: "Main dinner / 主推晚餐",
        area: "The Bund / 外滩附近",
        note: "Main choice for Day 1 dinner. Suitable for old-Shanghai flavor and a complete seated meal before or after the Bund night view.",
        noteZh: "第一晚主推，适合外滩夜景前后吃一顿较完整的老上海风味晚餐。",
        dishes: ["Shanghai-style braised dishes 本帮红烧类", "Seasonal Shanghai dishes 时令本帮菜", "Local cold dishes 本帮冷菜"],
        map: "外滩家宴 上海 外滩",
      },
      {
        name: "Li Bai Crab",
        zh: "李百蟹 / 李百蟹外滩江景餐厅",
        image: photos.liBaiCrab,
        tag: "Main backup / 主备选",
        area: "The Bund / 外滩附近",
        note: "Backup option if the group wants crab or river-view dining. Use it only when the queue and location are convenient.",
        noteZh: "如果当天想吃蟹类或江景餐厅，可以作为主备选；排队和位置合适再去。",
        dishes: ["Crab dishes 蟹类菜", "Crab roe noodles 蟹黄面/蟹粉面", "Shanghai-style dishes 本帮菜"],
        map: "李百蟹 外滩 江景餐厅 上海",
      },
      {
        name: "Other nearby references",
        zh: "其它附近参考",
        tag: "Reference / 仅参考",
        area: "Bund / Huangpu area · 外滩/黄浦区",
        note: "Use only if the main restaurants are unavailable or another place is much closer.",
        noteZh: "只在主推餐厅不合适或其它店更顺路时参考。",
        dishes: ["遇外滩", "沪公馆·上海菜", "新荣记", "外滩家宴上海菜"],
      },
    ],
    backup: ["Arrive early: add a short Suzhou Creek walk. / 到得早：可加一小段苏州河。", "Simple version: dinner + Bund only. / 最轻松版本：只保留晚餐和外滩。"],
  },
  {
    id: "d26",
    date: "26",
    day: "Day 2",
    city: "Shanghai",
    cityZh: "上海",
    title: "Xujiahui + Yu Garden",
    titleZh: "徐家汇 · 豫园 · 上海美食",
    hero: photos.cathedral,
    gallery: [photos.cathedral, photos.yuyuan, photos.yuyuanAlt, photos.professorLee, photos.renheguan, photos.yulanxiang],
    hotel: "Courtyard by Marriott Shanghai Central / 上海浦西万怡酒店",
    address: "338 Hengfeng Road, Jing’an District / 静安区恒丰路338号",
    routeSummary: "Hotel 酒店 → Xujiahui 徐家汇 → Lunch 午餐 → Yu Garden 豫园 → Dinner 晚餐 → Hotel 酒店",
    vibe: "Architecture, library, garden, local food.",
    vibeZh: "上午看建筑和书院，下午豫园，餐厅跟着路线走。",
    schedule: [
      {
        period: "Morning / 上午",
        time: "10:00–12:00",
        title: "Xujiahui Cathedral + Library",
        titleZh: "徐家汇天主堂 + 徐家汇书院",
        route: "Hotel → Xujiahui Cathedral → Xujiahui Library",
        routeZh: "酒店 → 徐家汇天主堂 → 徐家汇书院",
        transport: "Taxi 30–40 min; metro 35–45 min. / 打车约30–40分钟；地铁约35–45分钟。",
        note: "The two Xujiahui stops are close to each other and suitable for a focused morning route.",
        noteZh: "徐家汇两个点距离集中，适合上午集中游览。",
        legs: [
          "Hotel → Xujiahui Cathedral: taxi usually takes about 30–40 min. / 酒店→徐家汇天主堂打车通常预留30–40分钟。",
          "Xujiahui Cathedral → Xujiahui Library: walk about 5–10 min. / 徐家汇天主堂→徐家汇书院：步行约5–10分钟。",
          "Metro: Hanzhong Road Station → Line 1 to Xujiahui Station → walk 8–12 min. / 地铁：汉中路站→1号线徐家汇站→步行8–12分钟。",
        ],
      },
      {
        period: "Noon / 中午",
        time: "12:00–14:00",
        title: "Lunch near Xujiahui",
        titleZh: "徐家汇附近午餐",
        route: "Xujiahui Library → Lunch → Rest",
        routeZh: "徐家汇书院 → 午餐 → 休息",
        transport: "Walk or short taxi 5–20 min depending on restaurant. / 视餐厅位置步行或短打车约5–20分钟。",
        note: "Choose Professor Lee or Renheguan according to queue and preference.",
        noteZh: "根据排队情况和口味，在Professor LEE和人和馆之间选择。",
        meal: ["Professor LEE: Korean BBQ 韩式烤肉", "Professor LEE: Army stew 部队锅", "人和馆：江浙菜/本帮菜", "人和馆：河虾、红烧类、时令蔬菜"],
      },
      {
        period: "Afternoon / 下午",
        time: "14:30–16:30",
        title: "Yu Garden",
        titleZh: "豫园",
        route: "Lunch → Yu Garden / Old City Bazaar",
        routeZh: "午餐 → 豫园/城隍庙区域",
        transport: "Taxi 25–40 min from Xujiahui; metro 35–45 min. / 从徐家汇打车约25–40分钟；地铁约35–45分钟。",
        note: "Classic Chinese-style stop. Keep the visit focused and avoid adding too many side stops.",
        noteZh: "这是中式视觉重点，控制游览范围，不再增加过多零散点。",
        legs: [
          "From Xujiahui lunch area to Yu Garden: reserve 25–40 min by taxi. / 从徐家汇午餐点去豫园，打车建议预留25–40分钟。",
          "Metro reference: Line 1 to People’s Square, then taxi or transfer toward Yu Garden. / 地铁参考：1号线到人民广场，再打车或换乘前往豫园。",
        ],
      },
      {
        period: "Evening / 晚上",
        time: "17:30–20:00",
        title: "Dinner near Yu Garden",
        titleZh: "豫园附近晚餐",
        route: "Yu Garden → Magnolia Chamber / nearby dinner → Hotel",
        routeZh: "豫园 → 玉兰厢/附近晚餐 → 回酒店",
        transport: "Taxi 15–30 min back to hotel. / 回酒店打车约15–30分钟。",
        note: "Magnolia Chamber is the main Yu Garden-area choice. Crab roe noodles and shengjianbao can be added if nearby.",
        noteZh: "豫园附近主推玉兰厢。如果附近方便，可以补蟹黄面和生煎包。",
        meal: ["玉兰厢：本帮菜/上海菜", "Crab roe noodles 蟹黄面", "Shengjianbao 生煎包", "Xiaolongbao 小笼包"],
      },
    ],
    routeNotes: ["Xujiahui Cathedral and Xujiahui Library are close enough to walk between. / 徐家汇天主堂和徐家汇书院之间适合步行。", "Yu Garden dinner should stay nearby. / 豫园后的晚餐尽量留在附近。"],
    restaurants: [
      { name: "Professor Lee", zh: "Professor LEE（港汇 or K11）", image: photos.professorLee, tag: "Xujiahui option / 徐家汇推荐", area: "Xujiahui / K11 · 徐家汇/港汇或K11方向", note: "Good lunch option if the group wants Korean food. Check queue before deciding.", noteZh: "如果想吃韩料，可作为徐家汇午餐选择；建议看排队情况再决定。", dishes: ["Korean BBQ 韩式烤肉", "Army stew 部队锅", "Cold noodles 冷面", "Fried chicken 炸鸡"], map: "Professor Lee 上海 港汇 K11 韩料" },
      { name: "Renheguan", zh: "人和馆", image: photos.renheguan, tag: "Xujiahui option / 徐家汇推荐", area: "Xujiahui / central Shanghai · 徐家汇/市中心方向", note: "Good for a seated Jiangnan / local-style lunch or dinner after Xujiahui.", noteZh: "适合徐家汇后坐下来吃一顿江浙/本帮风味正餐。", dishes: ["Jiangnan-style dishes 江浙菜", "Braised dishes 红烧类", "River shrimp 河虾", "Seasonal vegetables 时令蔬菜"], map: "人和馆 上海 徐家汇" },
      { name: "Magnolia Chamber", zh: "玉兰厢", image: photos.yulanxiang, tag: "Yu Garden option / 豫园推荐", area: "Yu Garden / 豫园附近", note: "Main recommendation around Yu Garden. Use it after the Yu Garden visit or as an early dinner.", noteZh: "豫园附近主推，适合豫园游览后或作为早晚餐。", dishes: ["Shanghai-style dishes 本帮菜", "Local noodles 上海面食", "Dim sum / snacks 点心小吃", "Seasonal dishes 时令菜"], map: "玉兰厢 上海 豫园" },
      { name: "Other nearby references", zh: "其它附近参考", tag: "Reference / 仅参考", area: "Xujiahui / Yu Garden · 徐家汇/豫园周边", note: "Use only if they are closer or have shorter queues than the main choices.", noteZh: "只有在距离更近或排队更短时，从参考名单里选。", dishes: ["豆库", "白玉兰传统小吃", "榛田熟成茶行", "南翔馒头店", "绿波廊", "上海老饭店"] },
    ],
    backup: ["Backup: Shanghai Expo / China Pavilion. / 备选：上海世博园/中国馆。", "If the schedule feels full: keep Xujiahui + dinner, move Yu Garden to optional. / 如果行程偏满：保留徐家汇和晚餐，豫园改备选。"],
  },
  {
    id: "d27",
    date: "27",
    day: "Day 3",
    city: "Wuzhen",
    cityZh: "乌镇",
    title: "Shanghai → Wuzhen",
    titleZh: "上海转场乌镇 · 西栅慢游",
    hero: photos.wuzhen,
    gallery: [photos.wuzhen, photos.wuzhenDay, photos.wuzhenDye, photos.muxin],
    hotel: "Passage d'Eau Hotel / 乌镇西栅景区内酒店",
    address: "Xizha Scenic Area, Wuzhen / 乌镇西栅景区内",
    routeSummary: "Hotel 酒店 → Shanghai South 上海南 → Huzhou Nanxun 湖州南浔 → Xizha 西栅 → Muxin Art Museum 木心美术馆 → Night View 夜景",
    vibe: "Transfer, canals, museum, night view.",
    vibeZh: "上午转场，下午慢逛西栅，晚上看夜景。",
    schedule: [
      { period: "Transfer / 转场", time: "08:30–14:30", title: "Shanghai to Wuzhen transfer", titleZh: "上海 → 乌镇转场", route: "Hotel → Shanghai South Station → Huzhou Nanxun Station → Xizha hotel", routeZh: "酒店 → 上海南站 → 湖州南浔站 → 西栅酒店", transport: "Taxi + train + taxi. Total reference: about 2h11min plus waiting/check-in buffer. / 打车+高铁+打车，参考总时长约2小时11分钟，另加候车和入住缓冲。", note: "Use the Shanghai South Station plan. It balances speed and cost. Reserve enough time before the train.", noteZh: "采用上海南站方案，兼顾速度和性价比。高铁前需要预留足够候车时间。", legs: ["Hotel → Shanghai South Station: taxi about 30 min, around ¥43. / 酒店→上海南站：打车约30分钟，约43元。", "Shanghai South → Huzhou Nanxun: train about 43 min, tickets from about ¥58. / 上海南→湖州南浔：高铁约43分钟，票价58元起。", "Huzhou Nanxun Station → Xizha hotel: taxi about 23 min, around ¥54. / 湖州南浔站→西栅酒店：打车约23分钟，约54元。", "Arrive at Shanghai South Station at least 45 min before train departure. / 建议至少提前45分钟到上海南站。"], meal: ["Wuzhen lamb noodles 乌镇羊肉面", "Dingsheng cake 定胜糕", "Sister-in-law pastry 姑嫂饼", "Radish pastry 萝卜丝饼"] },
      { period: "Afternoon / 下午", time: "15:00–17:00", title: "Xizha slow walk + Muxin Art Museum", titleZh: "西栅慢逛 + 木心美术馆", route: "Xizha Service Center → canal streets → bridges → Muxin Art Museum", routeZh: "西栅服务中心 → 水巷 → 桥区 → 木心美术馆", transport: "Inside Xizha: walk or scenic shuttle 5–20 min between stops. / 西栅内部步行或景区车，点位间约5–20分钟。", note: "Use the Xizha walking route as a reference, but keep the actual pace flexible.", noteZh: "以西栅步行路线为参考，实际节奏根据体力和人流调整。", legs: ["Suggested walking line: Xizha Service Center → Water Market → Wuzhen Post Office → bridges/canal streets → Muxin Art Museum. / 建议步行线：西栅服务中心→水上集市→乌镇邮局→桥区/水巷→木心美术馆。", "Optional small stops: Water Theater, Qiaoliqiao, Zhaoming Academy, Grass and Wood Dye Workshop. / 可选点：水剧场、桥里桥、昭明书院、草木染坊。"] },
      { period: "Evening / 晚上", time: "17:30–20:30", title: "Dinner + Xizha night view", titleZh: "晚餐 + 西栅夜景", route: "Dinner → optional boat ride → night-view walk → hotel", routeZh: "晚餐 → 可选摇橹船 → 夜景慢走 → 回酒店", transport: "Walk / boat inside scenic area 5–25 min; boat adds 20–40 min plus queue. / 景区内步行/坐船约5–25分钟；坐船另加20–40分钟及排队时间。", note: "The night view is the main focus of Wuzhen. Keep enough time for photos and walking.", noteZh: "夜景是乌镇重点，晚上留足拍照和慢走时间。", meal: ["Steamed white fish 清蒸白水鱼", "Wuzhen soy-sauce duck 乌镇酱鸭", "Braised lamb 红烧羊肉", "River shrimp 河虾"] },
    ],
    routeNotes: ["Main line: Xizha Service Center → Water Market → Wuzhen Post Office → bridge/canal streets → Muxin Art Museum → night-view area. / 主线：西栅服务中心→水上集市→乌镇邮局→桥区/水巷→木心美术馆→夜景区域。", "Evening: dinner first, then optional boat ride and night-view walk. / 晚上：先晚餐，再按排队情况选择摇橹船和夜景慢走。"],
    restaurants: [
      { name: "Xizha food reference list", zh: "乌镇西栅美食参考清单", image: photos.wuzhenFood, tag: "Local reference / 当地参考", area: "Inside Xizha / 西栅景区内", note: "Use as an on-site search list. Choose according to queue, distance and opening hours.", noteZh: "作为现场搜索清单，根据排队、距离和营业情况选择。", dishes: ["书生羊肉面", "锦记糕点铺", "吴妈馄饨", "早茶客", "滋啦啦油煎铺", "舌尖葱包烩", "杯里杯烧饼铺", "默默的家", "茅老太臭豆腐", "通济酱粽店"] },
      { name: "Recommended Wuzhen dishes", zh: "乌镇特色菜品方向", image: photos.wuzhenFood, tag: "Dishes / 菜品方向", area: "Inside Xizha / 西栅景区内", note: "These are local food directions rather than fixed restaurants.", noteZh: "这些是当地菜品方向，不固定餐厅。", dishes: ["Wuzhen lamb noodles 乌镇羊肉面", "Dingsheng cake 定胜糕", "Sister-in-law pastry 姑嫂饼", "Radish pastry 萝卜丝饼", "Steamed white fish 清蒸白水鱼", "Soy-sauce duck 酱鸭", "Braised lamb 红烧羊肉"] },
    ],
    backup: ["Boat ride is optional. / 摇橹船作为可选项。", "East Gate is not included in the main route. / 东栅不放主线。"],
  },
  {
    id: "d28",
    date: "28",
    day: "Day 4",
    city: "Hangzhou",
    cityZh: "杭州",
    title: "Version Museum + Liangzhu",
    titleZh: "杭州国家版本馆 · 良渚文化村",
    hero: photos.versionMuseum,
    gallery: [photos.versionMuseum, photos.versionMuseumInside, photos.liangzhu, photos.liangzhuCourtyard],
    hotel: "Four Points by Sheraton Hangzhou, Binjiang / 杭州龙禧福朋喜来登酒店",
    address: "868 Dongxin Avenue, Binjiang District / 滨江区东信大道868号",
    routeSummary: "Hotel 酒店 → National Archives 版本馆 → Lunch 午餐 → Liangzhu Cultural Village 良渚文化村 → Hotel 酒店",
    vibe: "Architecture, culture, Liangzhu afternoon.",
    vibeZh: "上午看版本馆建筑，下午良渚文化村。",
    schedule: [
      { period: "Morning / 上午", time: "09:30–12:00", title: "National Archives of Publications and Culture", titleZh: "杭州国家版本馆", route: "Hotel → Hangzhou National Archives", routeZh: "酒店 → 杭州国家版本馆", transport: "Taxi 45–65 min; public transport is transfer-heavy. / 打车约45–65分钟；公共交通换乘较多。", note: "Check reservation and entry rules before departure.", noteZh: "出发前确认预约和入场规则。" },
      { period: "Noon / 中午", time: "12:00–14:00", title: "Lunch + transfer buffer", titleZh: "午餐 + 转场缓冲", route: "Lunch near Version Museum or on the way to Liangzhu", routeZh: "版本馆附近或去良渚路上吃午餐", transport: "Taxi 15–35 min depending on restaurant. / 视餐厅位置打车约15–35分钟。", note: "Use lunch as a buffer because this day has longer transfers.", noteZh: "这天转场较长，午餐也作为缓冲时间。", meal: ["竹间三喜", "Dongpo pork 东坡肉", "Longjing shrimp 龙井虾仁", "West Lake vinegar fish 西湖醋鱼", "Beggar’s chicken 叫花鸡"] },
      { period: "Afternoon / 下午", time: "14:00–16:30", title: "Liangzhu Cultural Village", titleZh: "良渚文化村", route: "Lunch → Liangzhu Cultural Village → Hotel", routeZh: "午餐 → 良渚文化村 → 回酒店", transport: "Taxi 15–30 min from Version Museum area; return to hotel 50–75 min. / 从版本馆一带打车约15–30分钟；回酒店约50–75分钟。", note: "Treat Liangzhu as one cultural-area visit and avoid adding extra stops.", noteZh: "把良渚作为一个文化片区游览，不再增加过多零散点。" },
      { period: "Evening / 晚上", time: "18:00–20:00", title: "Dinner near hotel", titleZh: "酒店附近晚餐", route: "Hotel area dinner → Rest", routeZh: "酒店附近晚餐 → 休息", transport: "Walk or short taxi 5–15 min. / 步行或短打车约5–15分钟。", note: "Keep dinner close because this day has more travel time.", noteZh: "这天路程较长，晚餐建议留在酒店附近。", meal: ["Pian’erchuan noodles 片儿川", "Dongpo pork 东坡肉", "Braised bamboo shoots 油焖春笋", "Lotus root with sticky rice 桂花糯米藕"] },
    ],
    routeNotes: ["If Liangzhu feels too far, replace it with a Longjing Tea Fields afternoon walk. / 如果良渚觉得太远，可换成龙井茶园轻松散步。"],
    restaurants: [
      { name: "Liangzhu main pick", zh: "竹间三喜", image: photos.hangzhouCuisine, tag: "Liangzhu main / 良渚主推", area: "Liangzhu / 良渚周边", note: "Main food choice around Liangzhu. Use it if the route stays near Liangzhu Cultural Village or Yniao Collection area.", noteZh: "良渚周边主推餐厅。如果当天主要在良渚文化村、玉鸟集一带活动，可以优先考虑。", dishes: ["Creative local dishes 创意菜", "Seafood pot / signature pot 招牌锅物", "Seasonal dishes 时令菜", "Tea / dessert 茶饮甜品"], map: "竹间三喜 良渚 杭州" },
      { name: "Liangzhu nearby references", zh: "良渚附近参考", image: photos.teaSnack, tag: "Reference / 仅参考", area: "Liangzhu / 良渚周边", note: "Use these only when they are closer, easier to book, or have shorter queues.", noteZh: "这些作为良渚附近备选，只在更近、更好订位或排队更短时参考。", dishes: ["玉鸟集", "良玉邻家", "村民食堂", "一面面馆"] },
      { name: "Hangzhou cuisine direction", zh: "杭帮菜方向", image: photos.hangzhouCuisine, tag: "Local food / 当地特色", area: "Liangzhu / Binjiang / West Lake areas · 良渚/滨江/西湖方向", note: "Choose the restaurant on the day based on location and queue.", noteZh: "具体餐厅到当天根据位置和排队情况选择。", dishes: ["Dongpo pork 东坡肉", "Longjing shrimp 龙井虾仁", "West Lake vinegar fish 西湖醋鱼", "Song Sao fish soup 宋嫂鱼羹", "Pian’erchuan noodles 片儿川"] },
    ],
    backup: ["If the Version Museum reservation is difficult, swap it with the temple route. / 如果版本馆预约不方便，可和寺庙线顺序互换。", "If Liangzhu feels too far, replace it with Longjing Tea Fields. / 如果良渚觉得太远，可换成龙井茶园。"],
  },
  {
    id: "d29",
    date: "29",
    day: "Day 5",
    city: "Hangzhou",
    cityZh: "杭州",
    title: "Temple Route + Longjing Tea Fields",
    titleZh: "寺庙线 · 龙井茶园",
    hero: photos.longjing,
    gallery: [photos.lingyin, photos.lingyinHall, photos.faxi, photos.longjing, photos.longjingFields, photos.longjingDistrict],
    hotel: "Four Points by Sheraton Hangzhou, Binjiang / 杭州龙禧福朋喜来登酒店",
    address: "868 Dongxin Avenue, Binjiang District / 滨江区东信大道868号",
    routeSummary: "Hotel 酒店 → Lingyin route 灵隐寺庙线 → Lunch 午餐 → Longjing Tea Fields 龙井茶园 → Hotel 酒店",
    vibe: "Temple walk, tea fields, soft final day.",
    vibeZh: "上午寺庙线，下午龙井茶园，最后一天轻松收尾。",
    schedule: [
      { period: "Morning / 上午", time: "09:30–12:00", title: "Lingyin temple route", titleZh: "灵隐寺庙线", route: "Beigao Peak / Lingyin area → Lingyin Temple → Faxi direction", routeZh: "北高峰/灵隐区域 → 灵隐寺 → 法喜寺方向", transport: "Taxi 35–55 min from hotel; walking between temple stops depends on route choice. / 酒店打车约35–55分钟；寺庙间步行视路线选择而定。", note: "Use the temple line as a flexible morning route. Shorten it if the group wants a lighter day.", noteZh: "把寺庙线作为上午弹性路线；如果想轻松，可以只保留灵隐寺或法喜寺。", legs: ["Long version: Beigao Peak Cableway → Ling Shun Temple → Taoguang Temple → Yongfu Temple → Lingyin Temple → Faxi direction. / 完整版：北高峰索道→灵顺寺→韬光寺→永福寺→灵隐寺→法喜寺方向。", "Short version: Lingyin Temple → Faxi Temple. / 轻松版：灵隐寺→法喜寺。"] },
      { period: "Noon / 中午", time: "12:00–14:00", title: "Lunch + tea break", titleZh: "午餐 + 茶歇", route: "Temple route → Fuyuanju / nearby lunch", routeZh: "寺庙线 → 福缘居/附近午餐", transport: "Walk or taxi 10–25 min around West Lake west side. / 西湖西侧步行或打车约10–25分钟。", note: "Keep the final day relaxed before the tea-field walk.", noteZh: "最后一天保持轻松，去龙井茶园前安排一次休息。", meal: ["福缘居酒楼（文三西路店）", "Vegetarian noodles 素面", "Longjing shrimp 龙井虾仁", "Song Sao fish soup 宋嫂鱼羹", "Lotus root with sticky rice 桂花糯米藕"] },
      { period: "Afternoon / 下午", time: "15:00–17:00", title: "Longjing Tea Fields", titleZh: "龙井茶园", route: "Lunch → Longjing Tea Fields / Longjing Village → Hotel", routeZh: "午餐 → 龙井茶园/龙井村 → 回酒店", transport: "Taxi 20–35 min from West Lake/Faxi area; return to hotel about 40–60 min. / 从西湖/法喜寺方向打车约20–35分钟；回酒店约40–60分钟。", note: "A relaxed tea-field stop with green hills, tea village atmosphere and photo-friendly views.", noteZh: "下午龙井茶园节奏更轻松，有茶山、村落氛围和适合拍照的绿色景观。" },
      { period: "Evening / 晚上", time: "18:00–20:00", title: "Dinner + packing", titleZh: "晚餐 + 整理行李", route: "Hotel area dinner → Pack", routeZh: "酒店附近晚餐 → 整理行李", transport: "Walk or short taxi 5–15 min. / 步行或短打车约5–15分钟。", note: "Keep the final evening simple and close to the hotel.", noteZh: "最后一晚保持简单，尽量留在酒店附近。", meal: ["群乐饭店（滨安路店）", "Pian’erchuan noodles 片儿川", "Hangzhou-style wontons 馄饨", "Dongpo pork 东坡肉", "Local dessert 本地甜品"] },
    ],
    routeNotes: ["Temple long route: Beigao Peak Cableway → Ling Shun Temple → Taoguang Temple → Yongfu Temple → Lingyin Temple → Faxi direction. / 寺庙长线：北高峰索道→灵顺寺→韬光寺→永福寺→灵隐寺→法喜寺方向。", "Tea-field afternoon: Longjing Tea Fields / Longjing Village. / 下午：龙井茶园/龙井村。"],
    restaurants: [
      { name: "Fuyuanju Restaurant", zh: "福缘居酒楼（文三西路店）", image: photos.hangzhouCuisine, tag: "Main pick / 主推", area: "West Lake west side / 西湖西侧、灵隐至龙井方向", note: "Main restaurant choice for the temple and tea-field day. It works well if the group wants a proper Hangzhou-style seated meal after the morning route.", noteZh: "寺庙线和龙井茶园这天的主推餐厅，适合上午走完后吃一顿比较正式的杭帮菜。", dishes: ["Hangzhou-style dishes 杭帮菜", "Braised dishes 红烧类", "Seasonal vegetables 时令蔬菜", "Local soup / noodles 汤羹或面食"], map: "福缘居酒楼 文三西路店 杭州" },
      { name: "Qunle Restaurant", zh: "群乐饭店（滨安路店）", image: photos.jiangnanDish, tag: "Main backup / 主备选", area: "Binjiang / 滨江回酒店方向", note: "Good backup choice near the hotel-return direction. Use it for dinner if the group wants to eat closer to Binjiang after Longjing.", noteZh: "适合回滨江酒店方向时作为晚餐主备选。如果龙井茶园结束后不想再绕路，可以考虑它。", dishes: ["Local Hangzhou dishes 本地菜", "Home-style dishes 家常菜", "Noodles / simple dishes 面食或简餐", "Seasonal dishes 时令菜"], map: "群乐饭店 滨安路店 杭州" },
      { name: "Lingyin food references", zh: "灵隐寺附近参考", image: photos.teaSnack, tag: "Reference / 仅参考", area: "Lingyin / Faxi / West Lake west side · 灵隐/法喜寺/西湖西侧", note: "Use these as nearby references for lunch, tea break or vegetarian food around the temple route.", noteZh: "这些作为灵隐寺附近午餐、茶歇或素食参考，不固定安排。", dishes: ["庆春朴门", "十方苑", "知竹", "食日长酒家", "法相素食", "元古·观山", "三生小坞"] },
      { name: "Hangzhou light meals and tea break", zh: "杭州轻餐与茶歇方向", image: photos.teaSnack, tag: "Local food / 当地特色", area: "Faxi / Longjing / Binjiang · 法喜寺/龙井/滨江方向", note: "Use these as flexible local choices based on the actual route.", noteZh: "根据当天路线作为灵活选择，不固定餐厅。", dishes: ["Vegetarian noodles 素面", "Pian’erchuan noodles 片儿川", "Lotus root with sticky rice 桂花糯米藕", "Longjing tea 龙井茶", "Tea snacks 茶点"] },
    ],
    backup: ["If the temple route is crowded, shorten the morning and keep Longjing Tea Fields as the relaxed afternoon stop. / 如果寺庙线人多，上午缩短游览，下午保留龙井茶园作为轻松收尾。", "If it rains, replace the tea-field walk with a nearby tea house or café. / 如果下雨，可把茶园步行改为附近茶馆或咖啡休息。"],
  },
];

const spots = tripDays.flatMap((d) => d.gallery.map((image, idx) => ({
  city: d.city,
  cityZh: d.cityZh,
  name: idx === 0 ? d.title : `${d.title} · ${idx + 1}`,
  zh: idx === 0 ? d.titleZh : `${d.titleZh} · 图 ${idx + 1}`,
  image,
  tag: idx === 0 ? "Main" : "Photo",
  note: d.vibe,
  noteZh: d.vibeZh,
})));

const navTabs = [
  { id: "home", label: "Today", zh: "首页" },
  { id: "plan", label: "Route", zh: "路线" },
  { id: "food", label: "Food", zh: "美食" },
  { id: "jump", label: "Go", zh: "出发" },
];

const moodThemes = {
  soft: {
    label: "Soft",
    zh: "轻松",
    emoji: "☁️",
    bg: "#f5f5f7",
    glass: "rgba(245,245,247,0.82)",
    card: "rgba(255,255,255,0.92)",
    accent: "#111111",
    tint: "#f2f2f2",
    note: "Soft pace: fewer decisions, calmer walking, more room for coffee and photos.",
    noteZh: "轻松模式：少做选择，慢一点走，给咖啡和拍照留时间。",
  },
  energy: {
    label: "Energy",
    zh: "元气",
    emoji: "⚡",
    bg: "#fff7ed",
    glass: "rgba(255,247,237,0.84)",
    card: "rgba(255,255,255,0.94)",
    accent: "#ea580c",
    tint: "#ffedd5",
    note: "Energy mode: keep the main route, add one snack or photo stop if everyone feels good.",
    noteZh: "元气模式：保留主线，如果大家状态好，可以加一个小吃或拍照点。",
  },
  rain: {
    label: "Rain",
    zh: "雨天",
    emoji: "🌧️",
    bg: "#eef4ff",
    glass: "rgba(238,244,255,0.86)",
    card: "rgba(255,255,255,0.94)",
    accent: "#2563eb",
    tint: "#dbeafe",
    note: "Rain mode: reduce outdoor walking and prioritize libraries, museums, restaurants and taxis.",
    noteZh: "雨天模式：减少户外步行，优先书院、博物馆、餐厅和打车。",
  },
};

function MoodSwitch({ mood, setMood, theme }) {
  return (
    <section className="rounded-[32px] p-4 shadow-[0_16px_50px_rgba(0,0,0,0.055)] ring-1 ring-white/80" style={{ background: theme.card }}>
      <SectionTitle kicker="Mood Switch" title="旅行状态" right={<Badge tone="orange">fun</Badge>} />
      <div className="grid grid-cols-3 gap-2">
        {Object.entries(moodThemes).map(([key, item]) => (
          <button
            key={key}
            onClick={() => setMood(key)}
            className="rounded-2xl px-3 py-3 text-center text-xs font-black transition active:scale-95"
            style={{
              background: mood === key ? item.accent : item.tint,
              color: mood === key ? "white" : "#262626",
              boxShadow: mood === key ? "0 14px 35px rgba(0,0,0,0.16)" : "none",
            }}
          >
            <span className="block text-lg">{item.emoji}</span>
            <span className="mt-1 block">{item.label}</span>
            <span className="block text-[10px] opacity-80">{item.zh}</span>
          </button>
        ))}
      </div>
      <p className="mt-3 rounded-2xl p-3 text-sm leading-6" style={{ background: theme.tint, color: "#3f3f46" }}>
        {theme.note}<br /><span className="text-neutral-500">{theme.noteZh}</span>
      </p>
    </section>
  );
}

function mapLinks(query) {
  const q = encodeURIComponent(query);
  const myLocation = encodeURIComponent("我的位置");
  const region = encodeURIComponent("全国");
  return {
    amap: `https://uri.amap.com/search?keyword=${q}&callnative=1`,
    baidu: `https://api.map.baidu.com/direction?origin=${myLocation}&destination=${q}&mode=driving&region=${region}&output=html&src=jiangnan-trip`,
    apple: `https://maps.apple.com/?daddr=${q}&dirflg=d`,
    google: `https://www.google.com/maps/dir/?api=1&destination=${q}&travelmode=driving`,
  };
}

function Badge({ children, tone = "neutral" }) {
  const colors = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    purple: "bg-purple-50 text-purple-700",
    orange: "bg-amber-50 text-amber-800",
    neutral: "bg-neutral-100 text-neutral-700",
    black: "bg-neutral-950 text-white",
    white: "bg-white/90 text-neutral-950",
  };
  return <span className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-[11px] font-semibold ${colors[tone] || colors.neutral}`}>{children}</span>;
}

function SmartImage({ src, alt, className }) {
  const [bad, setBad] = useState(false);
  return bad ? <div className={`${className} bg-gradient-to-br from-neutral-300 to-neutral-500`} /> : <img src={src} alt={alt} loading="lazy" onError={() => setBad(true)} className={className} />;
}

function SectionTitle({ kicker, title, right }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">{kicker}</p>
        <h2 className="mt-1 text-[22px] font-black leading-tight tracking-tight">{title}</h2>
      </div>
      {right}
    </div>
  );
}

function MapButtons({ query }) {
  const links = mapLinks(query);
  return (
    <div className="grid grid-cols-2 gap-2">
      <a href={links.amap} target="_blank" rel="noreferrer" className="rounded-2xl bg-neutral-950 py-2.5 text-center text-xs font-semibold text-white">高德导航</a>
      <a href={links.baidu} target="_blank" rel="noreferrer" className="rounded-2xl bg-neutral-950 py-2.5 text-center text-xs font-semibold text-white">百度驾车</a>
      <a href={links.apple} target="_blank" rel="noreferrer" className="rounded-2xl bg-neutral-100 py-2.5 text-center text-xs font-semibold text-neutral-800">Apple</a>
      <a href={links.google} target="_blank" rel="noreferrer" className="rounded-2xl bg-neutral-100 py-2.5 text-center text-xs font-semibold text-neutral-800">Google</a>
    </div>
  );
}

function Hero({ day, onOpen }) {
  return (
    <button onClick={() => onOpen({ type: "day", ...day })} className="group relative h-[360px] w-full overflow-hidden rounded-[38px] bg-neutral-900 text-left shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition active:scale-[0.99]">
      <SmartImage src={day.hero} alt={day.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/24 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-5 text-white">
        <div className="mb-3 flex gap-2">
          <Badge tone="white">{day.city} · {day.cityZh}</Badge>
          <Badge tone="white">{day.date}</Badge>
        </div>
        <h2 className="text-[34px] font-black leading-[0.95] tracking-[-0.055em]">{day.title}</h2>
        <p className="mt-1 text-lg font-semibold text-white/90">{day.titleZh}</p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/85">{day.vibe} / {day.vibeZh}</p>
      </div>
    </button>
  );
}

function ImageStrip({ images, onOpen }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1">
      {images.map((src, idx) => (
        <button key={`${src}-${idx}`} onClick={() => onOpen({ type: "image", image: src, name: `Photo ${idx + 1}`, zh: `图片 ${idx + 1}` })} className="relative h-28 w-36 shrink-0 overflow-hidden rounded-3xl bg-neutral-200 shadow-sm">
          <SmartImage src={src} alt="gallery" className="h-full w-full object-cover" />
          <div className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-1 text-[10px] font-bold text-white">{idx + 1}</div>
        </button>
      ))}
    </div>
  );
}

function getSpotIntro(title) {
  const introMap = {
    "Check in + short rest": {
      en: "This is not a sightseeing stop; it is the reset point. The hotel sits near major transport lines, so it works as a practical anchor before the first-night Bund route.",
      zh: "这一段不是景点，而是全队的体力重置点。酒店靠近市中心交通线，适合作为第一晚外滩路线前的出发锚点。",
    },
    "Dinner near the Bund + night view": {
      en: "The Bund became Shanghai’s most symbolic waterfront because early banks, trading houses and civic buildings gathered along the Huangpu River. The view works best at night: historic façades on one side, Lujiazui’s skyline on the other.",
      zh: "外滩之所以成为上海最具代表性的滨水地标，是因为早期银行、洋行和公共建筑沿黄浦江集中形成了城市门面。夜晚看它最好：一边是历史建筑立面，一边是陆家嘴天际线。",
    },
    "Xujiahui Cathedral + Library": {
      en: "Xujiahui was shaped by Jesuit history, education and science. The cathedral brings the Gothic-revival skyline, while Xujiahui Library makes the stop more contemporary and calm.",
      zh: "徐家汇的气质和耶稣会、教育、科学传统有关。天主堂负责看哥特复兴式建筑轮廓，徐家汇书院则让这一站变得更安静、更当代。",
    },
    "Lunch near Xujiahui": {
      en: "This meal is placed here because Xujiahui has both mall restaurants and local-style dining. It is a good moment to choose between Korean food for energy or Jiangnan-style dishes for a seated lunch.",
      zh: "午餐放在徐家汇，是因为这里既有商场餐饮，也有适合坐下来的江浙/本帮菜。想轻松热闹可以吃韩料，想正式一点可以吃人和馆这类正餐。",
    },
    "Yu Garden": {
      en: "Yu Garden is a Ming-dynasty private garden built around rockeries, ponds, corridors and framed views. It is small but visually dense, so it works better as a focused cultural stop than a long walk.",
      zh: "豫园是明代私家园林，核心看点是山石、水池、廊道和被框景组织起来的视线。园子不大但信息密度高，更适合作为一个集中参观的中式园林点。",
    },
    "Dinner near Yu Garden": {
      en: "Yu Garden sits inside Shanghai’s old-city food zone, so dinner here should lean toward Shanghainese flavors: rich soy-braised dishes, dim sum, crab roe noodles and pan-fried buns.",
      zh: "豫园周边本来就是上海老城厢美食区，晚餐适合往本帮菜、小吃、蟹黄面、生煎包这些方向靠，而不是再跨区找餐厅。",
    },
    "Shanghai to Wuzhen transfer": {
      en: "This is the travel bridge from a modern metropolis to a water-town stay. The train-and-taxi route keeps the transfer efficient while avoiding a full private-car ride.",
      zh: "这一段是从上海现代都市切换到江南水乡的转场。高铁加打车能兼顾效率和舒适度，比全程包车更灵活。",
    },
    "Xizha slow walk + Muxin Art Museum": {
      en: "Xizha is the more polished night-view side of Wuzhen, built around canals, stone bridges, white-wall houses and evening lights. Muxin Art Museum adds a quieter literary stop to the water-town walk.",
      zh: "西栅是乌镇更适合夜游和慢逛的一侧，核心是水巷、石桥、白墙民居和夜间灯光。木心美术馆则给水乡路线加入了更安静的文学气质。",
    },
    "Dinner + Xizha night view": {
      en: "Wuzhen’s food is best treated as small-town Jiangnan comfort food: noodles, pastries, river fish, soy-sauce duck and warm snacks between walks.",
      zh: "乌镇的吃法更适合当作江南小镇舒适餐：面、糕点、河鲜、酱鸭和边走边吃的小吃，比固定大餐更自然。",
    },
    "National Archives of Publications and Culture": {
      en: "The Hangzhou branch of the national editions system is about books, printing culture and Chinese textual heritage. Architecturally, it uses a restrained Chinese aesthetic, so the visit is both cultural and visual.",
      zh: "杭州国家版本馆的主题是版本、典籍、印刷与中华文脉。它的建筑语言偏克制的中式美学，所以这一站既是文化点，也是很适合拍照的建筑点。",
    },
    "Lunch + transfer buffer": {
      en: "This meal sits between two spread-out cultural areas, so it should be treated as both lunch and a time buffer. Hangzhou cuisine works well here: mild seasoning, river ingredients, bamboo shoots and tea-related flavors.",
      zh: "这顿饭夹在两个距离较远的文化片区之间，所以既是午餐也是缓冲。杭帮菜适合放在这里：味道相对温和，常见河鲜、笋、茶香和时令菜。",
    },
    "Liangzhu Cultural Village": {
      en: "Liangzhu connects to one of China’s earliest urban civilizations, known for jade ritual objects, rice agriculture and water-management systems. The visit should feel open, archaeological and calm.",
      zh: "良渚对应的是中国早期城市文明的重要遗存，关键词是玉器礼制、稻作农业和水利系统。这里不适合赶路打卡，更适合用开阔、考古和文化片区的方式理解。",
    },
    "Dinner near hotel": {
      en: "After Liangzhu, dinner should be simple and close to the hotel. Good choices are Hangzhou noodles, light home-style dishes and seasonal vegetables.",
      zh: "良渚结束后路程较长，晚餐最好靠近酒店。适合选片儿川、简单杭帮家常菜、时令蔬菜这类轻松一点的餐。",
    },
    "Lingyin temple route": {
      en: "Lingyin is one of Hangzhou’s classic Buddhist temple areas, set between wooded hills and stone grotto scenery. The route can be long or short: keep the atmosphere quiet rather than turning it into a checklist.",
      zh: "灵隐是杭州最经典的佛寺区域之一，山林、寺庙和石刻景观联系在一起。路线可以长也可以短，重点是山寺氛围，不要把它走成打卡清单。",
    },
    "Lunch + tea break": {
      en: "After the temple route, food can lean lighter: vegetarian noodles, Hangzhou-style soups, lotus-root dessert, or a proper local meal before moving toward the tea fields.",
      zh: "寺庙线之后，午餐适合清淡一点：素面、杭州汤羹、桂花糯米藕，或者吃一顿正式杭帮菜后再去茶园。",
    },
    "Longjing Tea Fields": {
      en: "Longjing is tied to West Lake Dragon Well tea, one of China’s best-known green teas. The landscape is the point: tea terraces, village lanes, roasting aromas and green hills.",
      zh: "龙井茶园对应的是西湖龙井这一中国名茶。这里的重点不是单个建筑，而是茶田、村路、炒茶香气和山坡绿色景观。",
    },
    "Dinner + packing": {
      en: "The final meal should be close, easy and comforting. Noodles, wontons, simple Hangzhou dishes or a tea dessert make more sense than another far destination.",
      zh: "最后一晚的晚餐适合近、简单、舒服。片儿川、馄饨、简单杭帮菜或茶点甜品，都比再跑远更合适。",
    },
  };
  return introMap[title] || null;
}

function SchedulePreview({ item, index, open, onToggle, image }) {
  const intro = getSpotIntro(item.title);
  return (
    <article className="overflow-hidden rounded-[32px] bg-white/95 shadow-[0_18px_60px_rgba(0,0,0,0.065)] ring-1 ring-white/80 transition active:scale-[0.995]">
      {image && (
        <button onClick={onToggle} className="relative h-36 w-full overflow-hidden bg-neutral-200">
          <SmartImage src={image} alt={item.titleZh || item.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
            <span className="text-xs font-bold uppercase tracking-[0.14em]">{item.period}</span>
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black text-neutral-950">Loose plan</span>
          </div>
        </button>
      )}
      <button onClick={onToggle} className="w-full p-4 text-left">
        <div className="mb-3 flex items-start gap-3">
          <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-neutral-950 text-center text-white">
            <span className="text-[10px] font-bold">STEP</span>
            <span className="text-xs font-black">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold text-neutral-500">{item.period}</p>
            <h3 className="mt-1 text-lg font-black leading-tight tracking-tight">{item.title}</h3>
            <p className="mt-0.5 text-sm font-semibold text-neutral-500">{item.titleZh}</p>
          </div>
          <div className="mt-2 rounded-full bg-neutral-100 px-2 py-1 text-xs font-black">{open ? "−" : "+"}</div>
        </div>

        <div className="grid gap-2">
          <div className="rounded-2xl bg-neutral-50 p-3 text-sm leading-6 text-neutral-800">
            <span className="text-[11px] font-black uppercase tracking-[0.12em] text-neutral-400">Part of day / 大致时段</span><br />{item.period}
          </div>
          <div className="rounded-2xl bg-neutral-50 p-3 text-sm leading-6 text-neutral-800">
            <span className="text-[11px] font-black uppercase tracking-[0.12em] text-neutral-400">Place / 地点</span><br />{item.routeZh}
          </div>
          <div className="rounded-2xl bg-blue-50 p-3 text-sm leading-6 text-blue-950">
            <span className="text-[11px] font-black uppercase tracking-[0.12em] text-blue-500">Transport / 交通工具</span><br />{item.transport}
          </div>
        </div>
      </button>
      {open && (
        <div className="space-y-3 border-t border-neutral-100 p-4 pt-3">
          <div className="rounded-2xl bg-white p-3 text-sm leading-6 text-neutral-700 ring-1 ring-neutral-200"><strong>Full route / 完整路线</strong><br />{item.route}<br />{item.routeZh}</div>
          {item.legs && <div className="space-y-2">{item.legs.map((leg) => <div key={leg} className="rounded-2xl border border-neutral-200 bg-white p-3 text-xs leading-5 text-neutral-700">{leg}</div>)}</div>}
          {item.meal && <div className="rounded-2xl bg-amber-50 p-3 text-xs leading-5 text-amber-950"><strong>Food ideas / 餐食参考</strong><ul className="mt-2 list-disc space-y-1 pl-4">{item.meal.map((dish) => <li key={dish}>{dish}</li>)}</ul></div>}
          <div className="rounded-2xl bg-emerald-50 p-3 text-sm leading-6 text-emerald-950">
            <strong>Why go / 简介</strong><br />{intro?.en || item.note}<br />{intro?.zh || item.noteZh}
          </div>
        </div>
      )}
    </article>
  );
}

function getFoodBackground(name) {
  const bg = {
    "Bund Family Banquet": {
      en: "Think of this as an old-Shanghai dinner direction: soy-braised dishes, seasonal cold plates and richer Jiangnan flavors that match the Bund’s historical setting.",
      zh: "这类餐厅适合理解“老上海晚餐”的感觉：本帮红烧、时令冷菜、偏浓郁的江南口味，和外滩历史建筑氛围比较搭。",
    },
    "Li Bai Crab": {
      en: "Crab roe noodles turn crab fat and roe into a concentrated sauce over noodles. It is rich, seasonal in spirit, and works well as a Shanghai food experience near the Bund.",
      zh: "蟹黄面/蟹粉面是把蟹黄、蟹膏的鲜香浓缩到面里，口味厚、香气足，很适合作为上海城市美食体验。",
    },
    "Professor Lee": {
      en: "This is not a local-history stop; it is a high-energy meal choice. Korean barbecue and stews work well for a young group that wants heat, sharing and a lively lunch.",
      zh: "这不是传统本地菜，而是适合年轻人补充体力的一餐。韩式烤肉、部队锅这类食物适合多人分享，氛围也更热闹。",
    },
    "Renheguan": {
      en: "A Jiangnan-style meal is a better seated alternative to mall food: river shrimp, braised dishes and seasonal vegetables show the softer, slightly sweet local palate.",
      zh: "人和馆这类江南/本帮餐比商场简餐更适合坐下来吃，河虾、红烧类、时蔬能体现上海周边偏柔和、略带甜感的口味。",
    },
    "Magnolia Chamber": {
      en: "Near Yu Garden, Shanghainese food makes cultural sense: dim sum, noodles and soy-braised dishes continue the old-city atmosphere from the garden to the table.",
      zh: "豫园附近吃上海菜是顺的：点心、面食、本帮红烧会把老城厢的氛围从园林延续到餐桌上。",
    },
    "Xizha food reference list": {
      en: "Wuzhen snacks are about small portions between walks: lamb noodles, pastries, wontons, fried snacks and rice dumplings. Choose by queue and smell rather than a fixed reservation.",
      zh: "乌镇小吃适合边走边吃：羊肉面、糕点、馄饨、油煎小吃、粽子都属于水乡慢游的一部分。到现场看排队和香气选择最自然。",
    },
    "Recommended Wuzhen dishes": {
      en: "The local meal direction is Jiangnan river-town comfort food: white fish, soy-sauce duck, lamb, river shrimp and warm pastries rather than heavy banquet dishes.",
      zh: "乌镇正餐更适合江南水乡舒适菜：白水鱼、酱鸭、羊肉、河虾和糕点，不需要吃得太重。",
    },
    "Liangzhu main pick": {
      en: "For Liangzhu, a relaxed restaurant near the cultural village is more useful than a famous downtown restaurant. The food should fit the slow cultural-area rhythm.",
      zh: "良渚当天餐厅位置比名气更重要，靠近文化村能减少转场。食物风格适合偏轻松、有一点创意或茶饮甜品搭配。",
    },
    "Liangzhu nearby references": {
      en: "These are practical nearby choices. Use them when the group wants something closer, easier or faster around Liangzhu.",
      zh: "这些是良渚附近的实用备选，适合想找更近、更快、更好排队的店时使用。",
    },
    "Hangzhou cuisine direction": {
      en: "Hangzhou cuisine is usually gentle and seasonal: Dongpo pork, Longjing shrimp, West Lake vinegar fish and Song Sao fish soup are classic names to recognize on menus.",
      zh: "杭帮菜整体偏清雅、重时令。东坡肉、龙井虾仁、西湖醋鱼、宋嫂鱼羹是菜单上很容易识别的经典菜。",
    },
    "Fuyuanju Restaurant": {
      en: "This is the proper-meal choice for the temple day. Look for Hangzhou-style braised dishes, seasonal vegetables and soups after the morning walk.",
      zh: "这是寺庙线当天比较适合的正餐选择。上午走完后可以点杭帮红烧、时令蔬菜、汤羹这类更舒服的菜。",
    },
    "Qunle Restaurant": {
      en: "This works as a practical dinner backup on the way back toward Binjiang. The value is convenience and a familiar local home-style meal.",
      zh: "群乐饭店更适合作为回滨江方向的晚餐备选，重点是顺路、方便、能吃到比较家常的本地菜。",
    },
    "Lingyin food references": {
      en: "Around Lingyin and Faxi, vegetarian noodles, tea houses and light meals fit the temple atmosphere better than a heavy lunch.",
      zh: "灵隐、法喜寺附近更适合素面、茶馆、轻餐这类选择，和山寺氛围更搭，也不会影响下午行程。",
    },
    "Hangzhou light meals and tea break": {
      en: "Tea breaks matter in Hangzhou. Longjing tea, tea snacks, lotus-root dessert and simple noodles can be part of the route, not just a meal stop.",
      zh: "杭州的茶歇本身就是旅行内容。龙井茶、茶点、桂花糯米藕、简单面食，都可以成为路线体验的一部分。",
    },
  };
  return bg[name] || null;
}

function FoodCard({ item, onOpen }) {
  const isRef = item.tag?.includes("Reference") || item.tag?.includes("仅参考");
  const background = getFoodBackground(item.name);
  return (
    <button onClick={() => onOpen({ type: "food", ...item })} className="w-full overflow-hidden rounded-[32px] bg-white/95 text-left shadow-[0_18px_60px_rgba(0,0,0,0.065)] ring-1 ring-white/80 transition active:scale-[0.99]">
      {item.image ? <SmartImage src={item.image} alt={item.zh || item.name} className="h-44 w-full object-cover" /> : <div className="h-3 bg-neutral-200" />}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-black leading-tight">{item.name}</h3>
            <p className="mt-0.5 text-sm font-semibold text-neutral-500">{item.zh}</p>
          </div>
          <Badge tone={isRef ? "neutral" : "orange"}>{item.tag}</Badge>
        </div>
        <p className="text-xs font-semibold text-neutral-500">{item.area}</p>
        <p className="mt-2 text-sm leading-6 text-neutral-700">{background?.en || item.note}</p>
        <p className="mt-1 text-sm leading-6 text-neutral-500">{background?.zh || item.noteZh}</p>
        {item.dishes && <div className="mt-3 flex flex-wrap gap-2">{item.dishes.slice(0, 3).map((dish) => <span key={dish} className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-900">{dish}</span>)}</div>}
      </div>
    </button>
  );
}

function DetailSheet({ selected, onClose }) {
  if (!selected) return null;
  const background = getFoodBackground(selected.name);
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 px-3 pb-3" onClick={onClose}>
      <div className="max-h-[88vh] w-full max-w-[430px] overflow-hidden rounded-[36px] bg-[#f5f5f7] shadow-[0_30px_100px_rgba(0,0,0,0.30)] ring-1 ring-white/70" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-white/70 bg-white/55 px-5 py-4 backdrop-blur-xl">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">Detail</p>
            <h3 className="text-xl font-black leading-tight">{selected.name || selected.title}</h3>
            <p className="text-sm font-semibold text-neutral-500">{selected.zh || selected.titleZh}</p>
          </div>
          <button onClick={onClose} className="rounded-full bg-white px-4 py-2 text-sm font-black shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition active:scale-95">Close</button>
        </div>
        <div className="max-h-[72vh] overflow-y-auto p-5">
          {selected.image && <SmartImage src={selected.image} alt={selected.name} className="mb-4 h-60 w-full rounded-3xl object-cover" />}
          {selected.hero && <SmartImage src={selected.hero} alt={selected.title} className="mb-4 h-60 w-full rounded-3xl object-cover" />}
          <p className="text-sm leading-6 text-neutral-700">{background?.en || selected.note || selected.vibe}</p>
          <p className="mt-1 text-sm leading-6 text-neutral-500">{background?.zh || selected.noteZh || selected.vibeZh}</p>
          {selected.dishes && <div className="mt-4 rounded-2xl bg-white p-4 text-sm leading-6"><strong>Recommended / 推荐</strong><ul className="mt-2 list-disc space-y-1 pl-4">{selected.dishes.map((d) => <li key={d}>{d}</li>)}</ul></div>}
          {selected.routeNotes && <div className="mt-4 space-y-2">{selected.routeNotes.map((n) => <div key={n} className="rounded-2xl bg-white p-3 text-sm leading-6 text-neutral-700">{n}</div>)}</div>}
          {selected.map && !selected.tag?.includes("Reference") && <div className="mt-4"><MapButtons query={selected.map} /></div>}
        </div>
      </div>
    </div>
  );
}

function buildDayGuide(day) {
  const foodIdeas = day.restaurants.flatMap((r) => {
    const bg = getFoodBackground(r.name);
    return [r.zh, bg?.zh, ...(r.dishes || []).slice(0, 2)].filter(Boolean);
  }).slice(0, 14);
  const routeDetails = day.schedule.map((s) => {
    const intro = getSpotIntro(s.title);
    return `${s.titleZh}: ${intro?.zh || s.noteZh}`;
  });
  return {
    type: "guide",
    name: "Spot + Food Guide",
    zh: "景点与美食详细介绍",
    hero: day.hero,
    note: day.vibe,
    noteZh: day.vibeZh,
    dishes: foodIdeas,
    routeNotes: [...routeDetails, ...(day.backup || [])],
  };
}

function getFunCards(dayId) {
  const cards = {
    d25: [
      ["🌃", "Skyline game", "Find one angle where old Shanghai and Lujiazui appear in the same photo.", "找一个角度，让老上海建筑和陆家嘴天际线出现在同一张照片里。"],
      ["🥢", "First bite", "Choose one Shanghainese dish that feels new to the group.", "点一道大家没吃过的上海味道，当作第一晚的记忆点。"],
    ],
    d26: [
      ["📚", "Quiet mode", "Pick one beautiful corner inside the library instead of only taking exterior photos.", "不要只拍外观，在书院里找一个安静好看的角落。"],
      ["🏮", "Garden hunt", "Look for framed views: doorways, windows, ponds and rockeries.", "在豫园找框景：门洞、窗、池水和假山。"],
    ],
    d27: [
      ["🌉", "Bridge count", "Count how many bridges you cross before dinner.", "晚餐前数一数自己过了几座桥。"],
      ["🍢", "Snack roulette", "Everyone chooses one small Wuzhen snack to share.", "每个人选一个乌镇小吃，大家一起分着尝。"],
    ],
    d28: [
      ["🏛️", "Architecture eye", "Find one roofline, corridor or courtyard detail that feels very Chinese.", "在版本馆找一个最有中式气质的屋顶、廊道或庭院细节。"],
      ["🌿", "Slow civilization", "At Liangzhu, think of jade, rice fields and ancient water systems instead of only taking photos.", "在良渚不要只拍照，可以把它理解成玉器、稻作和古代水利的文明现场。"],
    ],
    d29: [
      ["⛰️", "Temple silence", "Take five quiet minutes before taking photos.", "进寺庙线后先安静五分钟，再开始拍照。"],
      ["🍃", "Tea-field pause", "Smell the tea air, then choose one tea or tea snack before leaving.", "到龙井茶园先闻一闻茶香，离开前选一杯茶或一个茶点。"],
    ],
  };
  return (cards[dayId] || []).map(([emoji, title, en, zh]) => ({ emoji, title, en, zh }));
}

function getQuickJumps(day, mainRestaurants) {
  const dayMap = {
    d25: [
      ["The Bund night view", "外滩夜景", "🌃", "外滩 上海", "First-night skyline stop. / 第一晚城市天际线。"],
      ["Bund Family Banquet", "外滩家宴", "🥢", "外滩家宴 上海 外滩", "Main dinner pick. / 第一晚主推餐厅。"],
      ["Li Bai Crab", "李百蟹", "🦀", "李百蟹 外滩 江景餐厅 上海", "Crab backup near the Bund. / 外滩蟹类备选。"],
      ["Nanjing East Road", "南京东路", "🚶", "南京东路 上海", "Easy walk before or after the Bund. / 外滩前后顺路散步。"],
    ],
    d26: [
      ["Xujiahui Cathedral", "徐家汇天主堂", "⛪", "徐家汇天主堂 上海", "Morning architecture stop. / 上午建筑点。"],
      ["Xujiahui Library", "徐家汇书院", "📚", "徐家汇书院 上海", "Indoor cultural stop. / 室内文化点。"],
      ["Yu Garden", "豫园", "🏮", "豫园 上海", "Classic Chinese garden stop. / 中式园林重点。"],
      ["Professor LEE", "韩料备选", "🔥", "Professor Lee 上海 港汇 K11 韩料", "Xujiahui lunch option. / 徐家汇午餐选择。"],
      ["Magnolia Chamber", "玉兰厢", "🍽️", "玉兰厢 上海 豫园", "Yu Garden dinner pick. / 豫园附近主推。"],
    ],
    d27: [
      ["Shanghai South Station", "上海南站", "🚄", "上海南站", "Train transfer start. / 去乌镇转场起点。"],
      ["Huzhou Nanxun Station", "湖州南浔站", "🚕", "湖州南浔站", "Taxi to Wuzhen from here. / 到站后打车去西栅。"],
      ["Wuzhen Xizha", "乌镇西栅", "🌉", "乌镇西栅", "Main water-town area. / 乌镇主游览区。"],
      ["Muxin Art Museum", "木心美术馆", "🖼️", "木心美术馆 乌镇", "Quiet museum stop inside Xizha. / 西栅内文化点。"],
      ["Xizha snacks", "西栅小吃", "🍢", "乌镇西栅 小吃 书生羊肉面 锦记糕点铺", "Flexible local snacks. / 到当地边走边找。"],
    ],
    d28: [
      ["National Archives", "杭州国家版本馆", "🏛️", "杭州国家版本馆", "Architecture and culture stop. / 建筑与文化重点。"],
      ["Liangzhu Cultural Village", "良渚文化村", "🌿", "良渚文化村 杭州", "Afternoon cultural area. / 下午文化片区。"],
      ["Zhujiansanxi", "竹间三喜", "🍵", "竹间三喜 良渚 杭州", "Liangzhu main food pick. / 良渚主推餐厅。"],
      ["Longjing backup", "龙井茶园备选", "🍃", "龙井茶园 杭州", "Backup if Liangzhu feels far. / 良渚太远时替换。"],
    ],
    d29: [
      ["Lingyin Temple", "灵隐寺", "⛰️", "灵隐寺 杭州", "Temple route anchor. / 寺庙线核心点。"],
      ["Faxi Temple", "法喜寺", "🙏", "法喜寺 杭州", "Short version temple stop. / 轻松版寺庙点。"],
      ["Longjing Tea Fields", "龙井茶园", "🍃", "龙井茶园 杭州", "Tea-field afternoon. / 下午茶园收尾。"],
      ["Fuyuanju", "福缘居", "🍚", "福缘居酒楼 文三西路店 杭州", "Main lunch pick. / 午餐主推。"],
      ["Qunle Restaurant", "群乐饭店", "🥢", "群乐饭店 滨安路店 杭州", "Dinner backup near hotel direction. / 回酒店方向晚餐备选。"],
    ],
  };

  const base = [["Hotel anchor", "回酒店", "🏨", `${day.hotel} ${day.address}`, "Safe regroup point. / 集合、回程、打车都先认这个点。"]];
  const restaurantExtras = mainRestaurants.filter((r) => r.map).slice(0, 2).map((r, i) => [r.name, r.zh, i === 0 ? "⭐" : "🍽️", r.map, r.area]);
  const all = [...base, ...(dayMap[day.id] || []), ...restaurantExtras];
  return all.map(([title, zh, emoji, query, note]) => ({ title, zh, emoji, query, note })).filter((item, index, arr) => arr.findIndex((x) => x.title === item.title) === index);
}

function JumpCard({ title, zh, emoji, query, note, onOpen }) {
  return (
    <div className="rounded-[32px] bg-white/92 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.055)] ring-1 ring-white/80">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-950 text-xl text-white">{emoji}</div>
        <div>
          <h3 className="text-lg font-black leading-tight">{title}</h3>
          <p className="text-sm font-semibold text-neutral-500">{zh}</p>
        </div>
      </div>
      {note && <p className="mb-3 text-sm leading-6 text-neutral-600">{note}</p>}
      {onOpen ? <button onClick={onOpen} className="w-full rounded-2xl bg-neutral-950 py-3 text-center text-xs font-semibold text-white">Open guide / 打开详细攻略</button> : <MapButtons query={query} />}
    </div>
  );
}

export default function JiangnanTravelGuideApp() {
  const [selectedDayId, setSelectedDayId] = useState("d25");
  const [activeTab, setActiveTab] = useState("home");
  const [mood, setMood] = useState("soft");
  const [openStep, setOpenStep] = useState(0);
  const [selected, setSelected] = useState(null);

  const selectedDay = tripDays.find((d) => d.id === selectedDayId) || tripDays[0];
  const theme = moodThemes[mood];
  const mainRestaurants = useMemo(() => selectedDay.restaurants.filter((r) => !(r.tag || "").includes("Reference") && !(r.tag || "").includes("仅参考")), [selectedDay]);
  const quickJumps = useMemo(() => getQuickJumps(selectedDay, mainRestaurants), [selectedDay, mainRestaurants]);

  const pageTitle = {
    home: "今日概览",
    plan: "清晰路线",
    food: selectedDay.city === "Shanghai" ? "餐厅推荐" : "当地美食参考",
    jump: "快速出发",
  }[activeTab];

  return (
    <div className="min-h-screen text-neutral-950 transition-colors duration-500" style={{ background: theme.bg }}>
      <div className="mx-auto min-h-screen max-w-[430px] shadow-[0_30px_90px_rgba(0,0,0,0.10)] transition-colors duration-500" style={{ background: theme.bg }}>
        <header className="sticky top-0 z-30 border-b border-white/60 px-5 pb-3 pt-5 backdrop-blur-2xl transition-colors duration-500" style={{ background: theme.glass }}>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.20em] text-neutral-500">Jiangnan private guide</p>
              <h1 className="mt-1 text-[30px] font-black leading-tight tracking-[-0.04em]">Jiangnan Trip</h1>
              <p className="mt-1 text-sm font-medium text-neutral-500">Places · Transit · Food · Fun</p>
            </div>
            <button onClick={() => setSelected(buildDayGuide(selectedDay))} className="rounded-full bg-white/90 px-4 py-2 text-sm font-black shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition active:scale-95">Guide</button>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {tripDays.map((day) => (
              <button key={day.id} onClick={() => { setSelectedDayId(day.id); setActiveTab("home"); setOpenStep(0); }} className={selectedDayId === day.id ? "shrink-0 rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.16)] transition active:scale-95" : "shrink-0 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-neutral-700 shadow-[0_8px_26px_rgba(0,0,0,0.05)] transition active:scale-95"}>{day.day} · {day.date}</button>
            ))}
          </div>
        </header>

        <main className="space-y-5 px-5 pb-28 pt-5">
          <Hero day={selectedDay} onOpen={() => setSelected(buildDayGuide(selectedDay))} />
          <SectionTitle kicker={selectedDay.city} title={pageTitle} right={<Badge tone="black">{selectedDay.cityZh}</Badge>} />

          {activeTab === "home" && (
            <div className="space-y-5">
              <section className="rounded-[32px] bg-white/92 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.055)] ring-1 ring-white/80">
                <SectionTitle kicker="Hotel" title="酒店与起点" />
                <p className="text-sm font-bold leading-6 text-neutral-900">{selectedDay.hotel}</p>
                <p className="mt-1 text-sm leading-6 text-neutral-500">{selectedDay.address}</p>
                <div className="mt-3"><MapButtons query={`${selectedDay.hotel} ${selectedDay.address}`} /></div>
              </section>
              <section className="rounded-[32px] bg-white/92 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.055)] ring-1 ring-white/80">
                <SectionTitle kicker="Route" title="今日主线" right={<Badge>{theme.emoji} {theme.label}</Badge>} />
                <div className="rounded-2xl bg-neutral-50 p-3 text-sm font-semibold leading-6 text-neutral-800">{selectedDay.routeSummary}</div>
              </section>
              <MoodSwitch mood={mood} setMood={setMood} theme={theme} />
              <section className="rounded-[32px] bg-white/92 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.055)] ring-1 ring-white/80">
                <SectionTitle kicker="Tiny missions" title="今日小任务" right={<Badge tone="orange">fun</Badge>} />
                <div className="space-y-2">
                  {getFunCards(selectedDay.id).map((card) => (
                    <div key={card.title} className="rounded-2xl bg-neutral-50 p-3 text-sm leading-6 text-neutral-700">
                      <div className="mb-1 font-black text-neutral-950">{card.emoji} {card.title}</div>
                      {card.en}<br /><span className="text-neutral-500">{card.zh}</span>
                    </div>
                  ))}
                </div>
              </section>
              <section className="grid grid-cols-2 gap-3">
                <button onClick={() => setActiveTab("plan")} className="rounded-[28px] bg-white/95 p-4 text-left shadow-[0_14px_44px_rgba(0,0,0,0.055)] ring-1 ring-white/80 transition active:scale-[0.98]"><p className="text-xs font-bold text-neutral-500">Route</p><h3 className="mt-1 text-lg font-black">看路线</h3><p className="mt-2 text-sm text-neutral-500">上午/下午/晚上</p></button>
                <button onClick={() => setActiveTab("jump")} className="rounded-[28px] bg-neutral-950 p-4 text-left text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition active:scale-[0.98]"><p className="text-xs font-bold text-white/60">Go</p><h3 className="mt-1 text-lg font-black">一键出发</h3><p className="mt-2 text-sm text-white/70">酒店/餐厅/景点</p></button>
              </section>
            </div>
          )}

          {activeTab === "plan" && (
            <div className="space-y-3">
              {selectedDay.schedule.map((item, index) => <SchedulePreview key={`${selectedDay.id}-${item.time}-${item.title}`} item={item} index={index} image={selectedDay.gallery[index % selectedDay.gallery.length]} open={openStep === index} onToggle={() => setOpenStep(openStep === index ? -1 : index)} />)}
              <section className="rounded-[32px] bg-white/92 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.055)] ring-1 ring-white/80">
                <SectionTitle kicker="Key route" title="关键路线" />
                <div className="space-y-2">{selectedDay.routeNotes.map((item) => <div key={item} className="rounded-2xl bg-neutral-50 p-3 text-sm leading-6 text-neutral-700">{item}</div>)}</div>
              </section>
              <section className="rounded-[32px] bg-white/92 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.055)] ring-1 ring-white/80">
                <SectionTitle kicker="Backup" title="备选方案" />
                <div className="space-y-2">{selectedDay.backup.map((item) => <div key={item} className="rounded-2xl bg-neutral-50 p-3 text-sm leading-6 text-neutral-700">{item}</div>)}</div>
              </section>
            </div>
          )}

          {activeTab === "food" && (
            <section className="space-y-3">
              <p className="rounded-2xl bg-white p-4 text-sm leading-6 text-neutral-600 shadow-sm">主推餐厅放在前面，参考名单用于现场灵活选择。Main picks come first; references are for flexible choices nearby.</p>
              {selectedDay.restaurants.map((item) => <FoodCard key={item.name} item={item} onOpen={setSelected} />)}
            </section>
          )}

          {activeTab === "jump" && (
            <section className="space-y-3">
              <JumpCard title="Spot + Food Guide" zh="景点与美食详细介绍" emoji="✨" note="Open a compact guide for today before jumping into maps. / 出发前先看当天景点和美食重点。" onOpen={() => setSelected(buildDayGuide(selectedDay))} />
              {quickJumps.map((item) => <JumpCard key={item.title} {...item} />)}
            </section>
          )}
        </main>

        <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[430px] -translate-x-1/2 border-t border-white/60 px-3 py-3 backdrop-blur-2xl transition-colors duration-500" style={{ background: theme.glass }}>
          <div className="grid grid-cols-4 gap-2 rounded-[28px] bg-white/86 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-white/80">
            {navTabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={activeTab === tab.id ? "rounded-2xl bg-neutral-950 px-2 py-2 text-xs font-black text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition active:scale-95" : "rounded-2xl px-2 py-2 text-xs font-bold text-neutral-500 transition active:scale-95"}>
                <span className="block">{tab.label}</span>
                <span className="block text-[10px] opacity-80">{tab.zh}</span>
              </button>
            ))}
          </div>
        </nav>

        <DetailSheet selected={selected} onClose={() => setSelected(null)} />
      </div>
    </div>
  );}

