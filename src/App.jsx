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
  teaCup: wiki("Longjing tea 4.jpg"),
  shengjian: wiki("Shengjian mantou.jpg"),
  crabNoodle: wiki("Noodles and crabs.jpg"),
  dongpo: wiki("Dongpo pork by superturtle.jpg"),
  dongpoHangzhou: wiki("Dongpo pork (a Hangzhou dish).jpg"),
  longjingShrimp: wiki("Zhi Wei Guan, Longjing Shrimps.jpg"),
  westLakeFish: wiki("West Lake Fish in Vinegar Gravy.jpg"),
  wuzhenFood: wiki("Wuzhen Town 014.JPG"),
  bundFamily: "https://ak-d.tripcdn.com/images/1mh5x12000rinwbcu3C6B_C_340_230_R5.jpg?proc=source%2Ftrip",
  liBaiCrab: "https://res.klook.com/image/upload/w_750%2Ch_469%2Cc_fill%2Cq_85/w_80%2Cx_15%2Cy_15%2Cg_south_west%2Cl_Klook_water_br_trans_yhcmh3/activities/vfleykgwtgid3m9aucy4.webp",
  professorLee: "https://ak-d.tripcdn.com/images/1A0u1f000001g9o3q7D93_D_410_590_R5.jpg?proc=autoorient",
  renheguan: "https://youimg1.c-ctrip.com/target/100q0u000000j4ja834C6.jpg",
  yulanxiang: "https://sghimages.shobserver.com/img/catch/2025/10/17/85c84101-ee5a-42ba-bd79-8222ad569be7.jpg",
};

const moodThemes = {
  comfort: {
    label: "Comfort", zh: "轻松", emoji: "☁️",
    note: "Keep the main route, reduce decisions, and leave space for photos, coffee, and slow walks.",
    noteZh: "保留主线，减少临时选择，给拍照、咖啡和慢走留空间。",
    tintBoost: "rgba(255,255,255,.58)",
  },
  active: {
    label: "Active", zh: "多逛", emoji: "✨",
    note: "Keep the main route and add one small stop: a snack, a photo angle, or a short nearby walk.",
    noteZh: "保留主线，再加一个小停靠：小吃、拍照角度或顺路短散步。",
    tintBoost: "rgba(255,255,255,.50)",
  },
  rain: {
    label: "Rain", zh: "雨天", emoji: "🌧️",
    note: "Move less outdoors. Prioritize taxis, indoor stops, restaurants, museums, libraries, and tea breaks.",
    noteZh: "减少户外步行，优先打车、室内点、餐厅、博物馆、书院和茶歇。",
    tintBoost: "rgba(236,243,255,.70)",
  },
};

const placeThemes = {
  d25: {
    name: "Shanghai Night", zh: "上海夜色",
    bg: "linear-gradient(160deg,#ece8f4 0%,#dfe6f5 42%,#ccd7ec 100%)",
    energyBg: "linear-gradient(160deg,#f1dce8 0%,#dee5f6 46%,#bccdec 100%)",
    mistyBg: "linear-gradient(160deg,#e7edf7 0%,#dce5f4 48%,#c8d5ea 100%)",
    nightBg: "linear-gradient(160deg,#d8d9e8 0%,#c9d4e9 46%,#9fb4d4 100%)",
    cultureBg: "linear-gradient(160deg,#eee7df 0%,#e4e8f0 50%,#cbd8ea 100%)",
    gradient: "linear-gradient(135deg,#c58eb0 0%,#6176c4 100%)",
    energyGradient: "linear-gradient(135deg,#cf89ac 0%,#4f68c0 100%)",
    mistyGradient: "linear-gradient(135deg,#98aacd 0%,#5d75c3 100%)",
    nightGradient: "linear-gradient(135deg,#7984c7 0%,#2f477f 100%)",
    cultureGradient: "linear-gradient(135deg,#b49a82 0%,#6074a8 100%)",
    accent: "#6176c4", accent2: "#c58eb0",
  },
  d26: {
    name: "Garden Rose", zh: "园林粉墙",
    bg: "linear-gradient(160deg,#f5e8e1 0%,#edf0e5 45%,#d8e5df 100%)",
    energyBg: "linear-gradient(160deg,#f5dfd7 0%,#eee8d7 48%,#d2e3d7 100%)",
    mistyBg: "linear-gradient(160deg,#eee7e0 0%,#e4eadf 50%,#d5e2df 100%)",
    nightBg: "linear-gradient(160deg,#e8d8d5 0%,#d6ddcf 50%,#b9cfc7 100%)",
    cultureBg: "linear-gradient(160deg,#f0e5d8 0%,#e6eadf 46%,#d3ded0 100%)",
    gradient: "linear-gradient(135deg,#ca8d9a 0%,#76a185 100%)",
    energyGradient: "linear-gradient(135deg,#d28b8f 0%,#6b9d78 100%)",
    mistyGradient: "linear-gradient(135deg,#b6a39a 0%,#7f9c99 100%)",
    nightGradient: "linear-gradient(135deg,#ad7e89 0%,#607d70 100%)",
    cultureGradient: "linear-gradient(135deg,#b89169 0%,#718f73 100%)",
    accent: "#76a185", accent2: "#ca8d9a",
  },
  d27: {
    name: "Water Town", zh: "水乡蓝绿",
    bg: "linear-gradient(160deg,#e7f1ee 0%,#dce9ef 45%,#cbdcea 100%)",
    energyBg: "linear-gradient(160deg,#dff0ea 0%,#d7e8ee 46%,#bfd9e8 100%)",
    mistyBg: "linear-gradient(160deg,#e4eeee 0%,#d9e5ea 48%,#c7d8e2 100%)",
    nightBg: "linear-gradient(160deg,#cfdfdf 0%,#bacdd8 48%,#8ba8bf 100%)",
    cultureBg: "linear-gradient(160deg,#e7ece6 0%,#d8e5e2 50%,#c7d9dc 100%)",
    gradient: "linear-gradient(135deg,#7fb9ad 0%,#5b86b5 100%)",
    energyGradient: "linear-gradient(135deg,#6fbda9 0%,#4f84bc 100%)",
    mistyGradient: "linear-gradient(135deg,#96aaa9 0%,#708bad 100%)",
    nightGradient: "linear-gradient(135deg,#5d9b94 0%,#2f5f8a 100%)",
    cultureGradient: "linear-gradient(135deg,#8fa08a 0%,#5f84a0 100%)",
    accent: "#5b86b5", accent2: "#7fb9ad",
  },
  d28: {
    name: "Archive Gold", zh: "版本馆暖金",
    bg: "linear-gradient(160deg,#f3eadf 0%,#ede7d9 46%,#d8e1df 100%)",
    energyBg: "linear-gradient(160deg,#f4e3d4 0%,#eee1cc 48%,#d4ddd4 100%)",
    mistyBg: "linear-gradient(160deg,#ede9df 0%,#e5e3d8 46%,#d4dddd 100%)",
    nightBg: "linear-gradient(160deg,#ded3c4 0%,#d1d0c3 48%,#b6c4c5 100%)",
    cultureBg: "linear-gradient(160deg,#efe2cf 0%,#e7dfcd 48%,#d0d9d2 100%)",
    gradient: "linear-gradient(135deg,#c49a65 0%,#6f9a92 100%)",
    energyGradient: "linear-gradient(135deg,#d09b59 0%,#669a82 100%)",
    mistyGradient: "linear-gradient(135deg,#b0a391 0%,#789793 100%)",
    nightGradient: "linear-gradient(135deg,#9f8059 0%,#53766f 100%)",
    cultureGradient: "linear-gradient(135deg,#b88a52 0%,#7e8063 100%)",
    accent: "#6f9a92", accent2: "#c49a65",
  },
  d29: {
    name: "Longjing Tea", zh: "龙井茶绿",
    bg: "linear-gradient(160deg,#e9f1dd 0%,#dcead9 48%,#cbded2 100%)",
    energyBg: "linear-gradient(160deg,#e4efcf 0%,#d7ead4 48%,#c3ddce 100%)",
    mistyBg: "linear-gradient(160deg,#e7eedf 0%,#dbe7dc 48%,#c9d9d4 100%)",
    nightBg: "linear-gradient(160deg,#d3dfc5 0%,#c0d1c5 48%,#99b4aa 100%)",
    cultureBg: "linear-gradient(160deg,#e9ecd8 0%,#dce6d2 48%,#c8d8c5 100%)",
    gradient: "linear-gradient(135deg,#94b96e 0%,#5c9d8b 100%)",
    energyGradient: "linear-gradient(135deg,#9fc45d 0%,#4f9f80 100%)",
    mistyGradient: "linear-gradient(135deg,#9eaa90 0%,#719991 100%)",
    nightGradient: "linear-gradient(135deg,#789a5f 0%,#3f746e 100%)",
    cultureGradient: "linear-gradient(135deg,#a19b62 0%,#5e8d6a 100%)",
    accent: "#5c9d8b", accent2: "#94b96e",
  },
};

function getTheme(dayId, mood) {
  const place = placeThemes[dayId] || placeThemes.d25;
  const mode = moodThemes[mood] || moodThemes.comfort;
  const themeKey = mood === "comfort" ? "" : mood === "active" ? "energy" : "misty";
  return {
    ...mode,
    placeName: place.name,
    placeZh: place.zh,
    bg: place[`${themeKey}Bg`] || place.bg,
    gradient: place[`${themeKey}Gradient`] || place.gradient,
    glass: "rgba(255,255,255,.72)",
    card: "rgba(255,255,255,.84)",
    tint: mode.tintBoost,
    accent: place.accent,
    accent2: place.accent2,
  };
}

const days = [
  {
    id: "d25", tab: "Day 1 · 25", city: "Shanghai", cityZh: "上海",
    title: "Arrival + Bund Night", titleZh: "抵达上海 · 外滩夜景", hero: IMG.bundHero,
    hotel: "Courtyard by Marriott Shanghai Central", hotelZh: "上海浦西万怡酒店", address: "338 Hengfeng Road, Jing’an District", addressZh: "静安区恒丰路338号",
    route: "Hotel → Bund dinner → The Bund → Hotel", routeZh: "酒店 → 外滩附近晚餐 → 外滩夜景 → 回酒店",
    intro: "A soft first night: historic façades, Huangpu River reflections, and the Lujiazui skyline in one walk.",
    introZh: "第一晚轻松一点：历史建筑立面、黄浦江倒影和陆家嘴天际线放在同一条夜游线里。",
    plan: [
      {
        part: "Afternoon", partZh: "下午", title: "Check in + reset", zh: "入住 + 休息", image: IMG.bundRiver,
        place: "Hotel area", placeZh: "酒店周边",
        transit: "Walk or short taxi, about 0–10 min.", transitZh: "步行或短打车，约0–10分钟。",
        why: "Use the hotel as the anchor point before the first-night skyline route.", whyZh: "先把酒店作为集合和回程锚点，再出发去外滩夜景。",
        legs: [
          ["Arrival point → Hotel", "If arriving at Shanghai Railway Station, taxi is usually about 5–10 min. From Hongqiao hub, reserve about 35–55 min by taxi.", "抵达点 → 酒店", "从上海站到酒店打车通常约5–10分钟；从虹桥枢纽打车建议预留35–55分钟。"],
          ["Taxi fallback", "If traffic is heavy, ask the driver to stop near Hanzhong Road / Hengfeng Road and walk the final 5–8 min.", "打车备选", "如果堵车，可以让司机停在汉中路/恒丰路附近，最后步行约5–8分钟。"],
        ],
      },
      {
        part: "Evening", partZh: "晚上", title: "Dinner near the Bund + skyline walk", zh: "外滩附近晚餐 + 夜景慢走", image: IMG.bundHero,
        place: "Hotel → Bund dinner → The Bund", placeZh: "酒店 → 外滩附近晚餐 → 外滩",
        transit: "Taxi 20–35 min each way. Use direct taxi for this evening route.", transitZh: "打车单程约20–35分钟；这晚建议直接打车，不安排地铁。",
        why: "The Bund is Shanghai’s symbolic riverfront: historic banks and trading houses face the modern skyline across the river.", whyZh: "外滩是上海最具代表性的滨水地标：历史银行、洋行建筑与对岸现代天际线形成强烈对照。",
        legs: [
          ["Taxi route", "Hotel → Yan’an Elevated Road / central route → Bund area. Best for the first night.", "打车路线", "酒店 → 延安高架/市中心路线 → 外滩区域，第一晚最省心。"],
          ["Drop-off + walk", "Ask the driver to drop off near the Bund / East Nanjing Road side, then walk 8–15 min along the riverfront.", "下车后步行", "打车到外滩/南京东路一侧下车，再沿江步行约8–15分钟。"],
        ],
      },
    ],
    food: [
      { name: "Bund Family Banquet", zh: "外滩家宴", tag: "Main dinner", tagZh: "主推晚餐", image: IMG.bundFamily, map: "外滩家宴 上海 外滩", story: "Old-Shanghai dinner direction: soy-braised dishes, seasonal cold plates, and richer Jiangnan flavors that match the Bund’s historical setting.", storyZh: "老上海晚餐方向：本帮红烧、时令冷菜和偏浓郁的江南口味，和外滩历史建筑氛围比较搭。", try: [["Shanghai-style braised dishes", "本帮红烧"], ["Seasonal cold plates", "时令冷菜"], ["Local soup", "本地汤羹"]] },
      { name: "Li Bai Crab", zh: "李百蟹 / 蟹黄面方向", tag: "Crab backup", tagZh: "蟹类备选", image: IMG.liBaiCrab, map: "李百蟹 外滩 江景餐厅 上海", story: "Crab roe noodles turn crab fat and roe into a concentrated golden sauce over warm noodles — rich, aromatic, and memorable.", storyZh: "蟹黄面把蟹黄、蟹膏的鲜香浓缩到热面里，浓郁、香气足，是很有记忆点的一口。", try: [["Crab roe noodles", "蟹黄面"], ["Crab dishes", "蟹类菜"], ["River-view dinner", "江景晚餐"]] },
    ],
    references: { en: "Nearby references", zh: "附近参考", items: [["遇外滩", "Bund-view dining option", "外滩景观餐厅备选"], ["沪公馆·上海菜", "Shanghainese cuisine", "上海菜正餐备选"], ["新荣记", "Refined Chinese seafood", "精致中餐/海鲜方向"], ["外滩家宴上海菜", "Old-Shanghai flavor", "老上海本帮菜方向"], ["沈大成", "Classic Shanghai snacks", "上海传统点心参考"]] },
    jumps: [["🌃", "The Bund night view", "外滩夜景", "外滩 上海"], ["🥢", "Bund Family Banquet", "外滩家宴", "外滩家宴 上海 外滩"], ["🦀", "Li Bai Crab", "李百蟹", "李百蟹 外滩 江景餐厅 上海"], ["🚶", "Nanjing East Road", "南京东路", "南京东路 上海"]],
    missions: [["🌃", "Skyline game", "Find one angle with old Shanghai and Lujiazui in the same frame.", "找一个能同时拍到老上海建筑和陆家嘴的角度。"], ["🥢", "First bite", "Pick one Shanghainese dish that feels new to the group.", "点一道大家没吃过的上海味道。"]],
  },
  {
    id: "d26", tab: "Day 2 · 26", city: "Shanghai", cityZh: "上海",
    title: "Xujiahui + Yu Garden", titleZh: "徐家汇 · 豫园 · 上海美食", hero: IMG.xujiahui,
    hotel: "Courtyard by Marriott Shanghai Central", hotelZh: "上海浦西万怡酒店", address: "338 Hengfeng Road, Jing’an District", addressZh: "静安区恒丰路338号",
    route: "Hotel → Xujiahui → Lunch → Yu Garden → Dinner", routeZh: "酒店 → 徐家汇 → 午餐 → 豫园 → 晚餐",
    intro: "Architecture, books, garden views, and old-city food — a compact Shanghai culture day.", introZh: "建筑、书院、园林和老城厢美食，组成一个紧凑但不特种兵的上海文化日。",
    plan: [
      { part: "Morning", partZh: "上午", title: "Xujiahui Cathedral + Library", zh: "徐家汇天主堂 + 徐家汇书院", image: IMG.xujiahui, place: "Hotel → Xujiahui Cathedral → Xujiahui Library", placeZh: "酒店 → 徐家汇天主堂 → 徐家汇书院", transit: "Taxi 30–40 min. Use taxi as the main transfer.", transitZh: "打车约30–40分钟；本路线以打车为主。", why: "Xujiahui was shaped by Jesuit history, education, and science. The cathedral and library show two sides of that legacy.", whyZh: "徐家汇和耶稣会、教育、科学传统有关。天主堂和书院正好呈现这种历史与当代的两面。", legs: [["Taxi drop-off", "Hotel → Xujiahui Cathedral area by taxi. After getting off, walk 5–12 min between the cathedral and library.", "打车落点", "酒店 → 徐家汇天主堂区域打车到达；下车后天主堂和书院之间步行约5–12分钟。"], ["Walking link", "Cathedral → Library: about 5–10 min on foot.", "步行连接", "天主堂 → 书院：步行约5–10分钟。"]] },
      { part: "Afternoon", partZh: "下午", title: "Yu Garden", zh: "豫园", image: IMG.yuyuanPond, place: "Lunch → Yu Garden / Old City Bazaar", placeZh: "午餐 → 豫园/城隍庙区域", transit: "Taxi 25–40 min from Xujiahui. Keep the afternoon transfer simple.", transitZh: "从徐家汇打车约25–40分钟；下午转场尽量简单。", why: "Yu Garden is a Ming-dynasty private garden built around rockeries, ponds, corridors, and framed views.", whyZh: "豫园是明代私家园林，核心看山石、水池、廊道和被框景组织起来的视线。", legs: [["Taxi route", "Xujiahui area → Yu Garden. Keep the afternoon focused in the old-city area.", "打车路线", "徐家汇区域 → 豫园，下午尽量集中在老城厢。"], ["Drop-off + walk", "Ask the driver to stop near Yu Garden / Old City Bazaar, then walk inside the pedestrian area.", "下车后步行", "打车到豫园/城隍庙附近下车，再进入步行区慢逛。"]] },
      { part: "Evening", partZh: "晚上", title: "Dinner near Yu Garden", zh: "豫园附近晚餐", image: IMG.yulanxiang, place: "Yu Garden → Magnolia Chamber / snacks → Hotel", placeZh: "豫园 → 玉兰厢/附近小吃 → 回酒店", transit: "Taxi 15–30 min back to hotel.", transitZh: "回酒店打车约15–30分钟。", why: "Old-city Shanghai food fits here: dim sum, crab roe noodles, pan-fried buns, and soy-braised dishes.", whyZh: "豫园周边适合吃老城厢味道：点心、蟹黄面、生煎包和本帮红烧。" },
    ],
    food: [
      { name: "Professor LEE", zh: "Professor LEE", tag: "Xujiahui option", tagZh: "徐家汇推荐", image: IMG.professorLee, map: "Professor Lee 上海 港汇 K11 韩料", story: "A high-energy Korean meal choice: barbecue, stews, and sharing plates for a young group.", storyZh: "适合年轻人补充体力的一餐：韩式烤肉、部队锅和多人分享的热闹氛围。", try: [["Korean BBQ", "韩式烤肉"], ["Army stew", "部队锅"], ["Cold noodles", "冷面"]] },
      { name: "Renheguan", zh: "人和馆", tag: "Jiangnan food", tagZh: "江南菜", image: IMG.renheguan, map: "人和馆 上海 徐家汇", story: "A Jiangnan-style seated meal: river shrimp, braised dishes, and seasonal vegetables with a softer local palate.", storyZh: "江南/本帮方向的正餐：河虾、红烧类和时令蔬菜，口味更柔和。", try: [["River shrimp", "河虾"], ["Braised dishes", "红烧类"], ["Seasonal vegetables", "时令菜"]] },
      { name: "Magnolia Chamber", zh: "玉兰厢", tag: "Yu Garden option", tagZh: "豫园推荐", image: IMG.yulanxiang, map: "玉兰厢 上海 豫园", story: "Near Yu Garden, Shanghainese food continues the old-city atmosphere from garden to table.", storyZh: "豫园附近吃上海菜很顺，能把老城厢的氛围从园林延续到餐桌。", try: [["Shanghainese dishes", "本帮菜"], ["Dim sum", "点心"], ["Noodles", "面食"]] },
    ],
    references: { en: "Other useful food references", zh: "其它餐厅参考", items: [["豆库", "Light Western meal", "轻西餐/简餐参考"], ["白玉兰传统小吃", "Local snack shop", "传统小吃参考"], ["榛田熟成茶行", "Tea drink break", "茶饮休息参考"], ["南翔馒头店", "Soup dumplings", "小笼/点心参考"], ["绿波廊", "Classic Yu Garden restaurant", "豫园老牌餐厅参考"], ["上海老饭店", "Traditional Shanghainese food", "传统本帮菜参考"], ["宁波汤团店", "Sweet rice dumplings", "宁波汤圆/甜品参考"]] },
    jumps: [["⛪", "Xujiahui Cathedral", "徐家汇天主堂", "徐家汇天主堂 上海"], ["📚", "Xujiahui Library", "徐家汇书院", "徐家汇书院 上海"], ["🏮", "Yu Garden", "豫园", "豫园 上海"], ["🍽️", "Magnolia Chamber", "玉兰厢", "玉兰厢 上海 豫园"]],
    missions: [["📚", "Quiet corner", "Find one calm corner inside the library, not just the exterior.", "不要只拍外观，在书院里找一个安静角落。"], ["🏮", "Garden hunt", "Look for framed views: doorways, ponds, windows, and rockeries.", "在豫园找框景：门洞、池水、窗和假山。"]],
  },
  {
    id: "d27", tab: "Day 3 · 27", city: "Wuzhen", cityZh: "乌镇",
    title: "Shanghai → Wuzhen", titleZh: "上海转场乌镇 · 西栅慢游", hero: IMG.wuzhenHero,
    hotel: "Passage d'Eau Hotel / Xizha Area", hotelZh: "乌镇西栅景区内酒店", address: "Xizha Scenic Area, Wuzhen", addressZh: "乌镇西栅景区内",
    route: "Shanghai hotel → Shanghai South Station → Huzhou Nanxun Station → Wuzhen Xizha", routeZh: "上海酒店 → 上海南站 → 湖州南浔站 → 乌镇西栅",
    intro: "The trip shifts from city lights to Jiangnan canals: bridges, water lanes, white walls, and slower night views.", introZh: "从城市灯光切换到江南水巷：石桥、水道、白墙和更慢的夜景。",
    plan: [
      { part: "Morning", partZh: "上午", title: "Transfer to Wuzhen", zh: "上海 → 乌镇转场", image: IMG.wuzhenStreet, place: "Shanghai hotel → Shanghai South Station → Huzhou Nanxun Station → Xizha hotel", placeZh: "上海酒店 → 上海南站 → 湖州南浔站 → 西栅酒店", transit: "Taxi + high-speed train + taxi. Pure moving time is about 1 hr 35 min; plan 2–2.5 hr with station buffer.", transitZh: "打车+高铁+打车。纯移动时间约1小时35分钟；加上进站候车，建议按2–2.5小时预留。", why: "This was the fastest and most balanced transfer plan from the earlier route notes.", whyZh: "这是前面整理里性价比和速度最平衡的上海南站方案。", legs: [["1. Hotel → Shanghai South Station", "Taxi about 30 min, around ¥43. If traffic is heavy, still keep taxi as the default and leave earlier.", "1. 酒店 → 上海南站", "打车约30分钟，约43元；如果遇到堵车，仍建议以打车为主，只是提前出发。"], ["2. Shanghai South → Huzhou Nanxun", "High-speed train about 43 min, tickets from about ¥58. Reserve at least 45 min for security and boarding.", "2. 上海南 → 湖州南浔", "高铁约43分钟，票价58元起；建议至少提前45分钟到站安检候车。"], ["3. Huzhou Nanxun Station → Xizha hotel", "Taxi about 23 min, around ¥54. Direct to the hotel or scenic-area entrance.", "3. 湖州南浔站 → 西栅酒店", "打车约23分钟，约54元，直达酒店或景区入口。"]] },
      { part: "Afternoon", partZh: "下午", title: "Xizha slow walk + Muxin Art Museum", zh: "西栅慢逛 + 木心美术馆", image: IMG.muxin, place: "Xizha Service Center → water lanes → Muxin Art Museum", placeZh: "西栅服务中心 → 水巷 → 木心美术馆", transit: "Inside Xizha: walk or scenic shuttle, about 5–20 min between stops.", transitZh: "西栅内部步行或景区车，点位间约5–20分钟。", why: "Xizha is the polished night-view side of Wuzhen; Muxin Art Museum adds a quieter literary stop.", whyZh: "西栅适合夜游和慢逛，木心美术馆让水乡路线更有文学气质。", legs: [["Suggested walk", "Xizha Service Center → Water Market → Wuzhen Post Office → bridge streets → Muxin Art Museum.", "建议步行线", "西栅服务中心 → 水上集市 → 乌镇邮局 → 桥区水巷 → 木心美术馆。"], ["Optional stops", "Water Theater, Qiaoliqiao, Zhaoming Academy, Grass and Wood Dye Workshop.", "可选小点", "水剧场、桥里桥、昭明书院、草木染坊。"]] },
      { part: "Evening", partZh: "晚上", title: "Dinner + Xizha night view", zh: "晚餐 + 西栅夜景", image: IMG.wuzhenHero, place: "Dinner → optional boat ride → night-view walk → hotel", placeZh: "晚餐 → 可选摇橹船 → 夜景慢走 → 回酒店", transit: "Walk or boat inside the scenic area. Boat adds about 20–40 min plus queue.", transitZh: "景区内步行或坐船；坐船另加约20–40分钟和排队时间。", why: "Wuzhen’s night view is the main event: warm lights, bridges, and reflections on the canal.", whyZh: "乌镇夜景是重点：灯光、石桥和水面倒影是水乡最有记忆点的部分。" },
    ],
    food: [
      { name: "Xizha snacks", zh: "乌镇西栅小吃", tag: "Local snacks", tagZh: "当地小吃", image: IMG.wuzhenFood, map: "乌镇西栅 小吃 书生羊肉面 锦记糕点铺", story: "Wuzhen snacks are small portions between walks: lamb noodles, pastries, wontons, fried snacks, and rice dumplings.", storyZh: "乌镇小吃适合边走边吃：羊肉面、糕点、馄饨、油煎小吃和粽子。", try: [["Lamb noodles", "羊肉面"], ["Dingsheng cake", "定胜糕"], ["Wontons", "馄饨"]] },
      { name: "Wuzhen local dishes", zh: "乌镇特色菜", tag: "Local dishes", tagZh: "水乡菜", image: IMG.wuzhenDye, map: "乌镇西栅 白水鱼 酱鸭 红烧羊肉", story: "River-town comfort food: white fish, soy-sauce duck, lamb, river shrimp, and warm pastries.", storyZh: "水乡舒适菜：白水鱼、酱鸭、羊肉、河虾和热乎的糕点。", try: [["White fish", "白水鱼"], ["Soy-sauce duck", "酱鸭"], ["Braised lamb", "红烧羊肉"]] },
    ],
    references: { en: "Xizha food references", zh: "西栅美食参考", items: [["书生羊肉面", "Lamb noodles", "羊肉面"], ["锦记糕点铺", "Pastries", "糕点"], ["吴妈馄饨", "Wontons", "馄饨"], ["早茶客", "Breakfast / tea", "早茶"], ["滋啦啦油煎铺", "Pan-fried snacks", "油煎小吃"], ["舌尖葱包烩", "Scallion snack", "葱包烩"], ["杯里杯烧饼铺", "Baked flatbread", "烧饼"], ["茅老太臭豆腐", "Stinky tofu", "臭豆腐"], ["通济酱粽店", "Rice dumplings", "酱粽"]] },
    jumps: [["🚄", "Shanghai South Station", "上海南站", "上海南站"], ["🚕", "Huzhou Nanxun Station", "湖州南浔站", "湖州南浔站"], ["🌉", "Wuzhen Xizha", "乌镇西栅", "乌镇西栅"], ["🖼️", "Muxin Art Museum", "木心美术馆", "木心美术馆 乌镇"]],
    missions: [["🌉", "Bridge count", "Count how many bridges you cross before dinner.", "晚餐前数一数过了几座桥。"], ["🍢", "Snack roulette", "Everyone chooses one small Wuzhen snack to share.", "每个人选一个乌镇小吃一起分着尝。"]],
  },
  {
    id: "d28", tab: "Day 4 · 28", city: "Hangzhou", cityZh: "杭州",
    title: "Wuzhen → Hangzhou", titleZh: "乌镇转场杭州 · 版本馆与良渚", hero: IMG.versionHero,
    hotel: "Four Points by Sheraton Hangzhou, Binjiang", hotelZh: "杭州龙禧福朋喜来登酒店", address: "868 Dongxin Avenue, Binjiang District", addressZh: "滨江区东信大道868号",
    route: "Wuzhen Xizha → Huzhou Nanxun Station → Hangzhou West Station → Hangzhou hotel", routeZh: "乌镇西栅 → 湖州南浔站 → 杭州西站 → 杭州酒店",
    intro: "A transfer-and-culture day: move from the water town into Hangzhou, then keep the visit focused on one or two cultural areas.", introZh: "转场加文化日：从水乡进入杭州，游览集中在一到两个文化片区。",
    plan: [
      { part: "Morning", partZh: "上午", title: "Transfer to Hangzhou", zh: "乌镇 → 杭州转场", image: IMG.versionHall, place: "Xizha hotel → Huzhou Nanxun Station → Hangzhou West Station → hotel", placeZh: "西栅酒店 → 湖州南浔站 → 杭州西站 → 酒店", transit: "Taxi + high-speed train + taxi. Pure moving time is about 1 hr 40 min; plan 2.5–3.5 hr with luggage and station buffer.", transitZh: "打车+高铁+打车。纯移动时间约1小时40分钟；加上行李、进站和候车，建议按2.5–3.5小时预留。", why: "This follows the earlier route note: it is faster and more comfortable than a long ground transfer.", whyZh: "按照前面给的路线，这比全程地面接驳更快也更省心。", legs: [["1. Xizha / Shui Xiang Yi → Huzhou Nanxun Station", "Taxi about 26 min, around ¥55. Direct to the station entrance is the easiest option.", "1. 西栅/水巷驿 → 湖州南浔高铁站", "打车约26分钟，约55元，直达进站口最省心。"], ["2. Huzhou Nanxun → Hangzhou West", "High-speed train about 33 min, tickets from about ¥50. Many daily trains; buy ahead if possible.", "2. 湖州南浔 → 杭州西", "高铁约33分钟，票价50元起，全天班次较多，建议提前购票。"], ["3. Hangzhou West → Four Points Binjiang", "Taxi about 39 min, around ¥127. Direct to the hotel is the lazy and comfortable choice.", "3. 杭州西站 → 杭州龙禧福朋喜来登酒店", "打车约39分钟，约127元，直达酒店门口，懒人首选。"]] },
      { part: "Afternoon", partZh: "下午", title: "National Archives + Liangzhu", zh: "杭州国家版本馆 + 良渚", image: IMG.liangzhu, place: "Hotel / station area → Hangzhou National Archives → Liangzhu Cultural Village", placeZh: "酒店/车站方向 → 杭州国家版本馆 → 良渚文化村", transit: "Use taxi between these cultural areas. Each transfer can take about 15–45 min depending on starting point.", transitZh: "这些文化片区之间建议打车，视出发点每段约15–45分钟。", why: "The National Archives focuses on books and textual heritage; Liangzhu connects to jade ritual objects, rice agriculture, and ancient water systems.", whyZh: "版本馆看典籍与中华文脉，良渚看玉器礼制、稻作农业和古代水利系统。" },
      { part: "Evening", partZh: "晚上", title: "Dinner near hotel", zh: "酒店附近晚餐", image: IMG.dongpoHangzhou, place: "Hotel area dinner → rest", placeZh: "酒店附近晚餐 → 休息", transit: "Walk or short taxi, about 5–15 min.", transitZh: "步行或短打车，约5–15分钟。", why: "After a transfer day, choose a close meal: noodles, home-style Hangzhou dishes, and seasonal vegetables.", whyZh: "转场日结束后，晚餐适合靠近酒店：片儿川、家常杭帮菜和时蔬。" },
    ],
    food: [
      { name: "Zhujiansanxi", zh: "竹间三喜", tag: "Liangzhu main", tagZh: "良渚主推", image: IMG.teaCup, map: "竹间三喜 良渚 杭州", story: "For Liangzhu, location matters: a relaxed restaurant near the cultural village saves energy. Tea drinks and gentle desserts also fit the slow cultural-area rhythm better than a heavy meal.", storyZh: "良渚当天餐厅位置比名气更重要，靠近文化村能减少转场。茶饮和清爽甜品也更符合文化片区的慢节奏，比吃得太重更舒服。", try: [["Longjing tea drink", "龙井茶饮"], ["Osmanthus dessert", "桂花甜品"], ["Seasonal creative dishes", "时令创意菜"]] },
      { name: "Hangzhou cuisine", zh: "杭帮菜方向", tag: "Local flavor", tagZh: "当地特色", image: IMG.longjingShrimp, map: "杭州 杭帮菜 东坡肉 龙井虾仁 西湖醋鱼 宋嫂鱼羹", story: "Hangzhou cuisine is gentle and seasonal: Dongpo pork, Longjing shrimp, West Lake vinegar fish, and Song Sao fish soup are classic menu names.", storyZh: "杭帮菜偏清雅、重时令。东坡肉、龙井虾仁、西湖醋鱼、宋嫂鱼羹都是经典菜名。", try: [["Dongpo pork", "东坡肉"], ["Longjing shrimp", "龙井虾仁"], ["Song Sao fish soup", "宋嫂鱼羹"]] },
    ],
    references: { en: "Liangzhu nearby references", zh: "良渚附近参考", items: [["玉鸟集", "Lifestyle block", "良渚商业街区"], ["良玉邻家", "Local homestyle food", "本地家常菜"], ["村民食堂", "Simple local meal", "简餐/家常饭"], ["一面面馆", "Noodles", "面馆"], ["庆春朴门", "Vegetarian / light meal", "素食/轻餐"], ["十方苑", "Tea / vegetarian option", "茶食/素食参考"]] },
    jumps: [["🚄", "Huzhou Nanxun Station", "湖州南浔站", "湖州南浔站"], ["🚉", "Hangzhou West Station", "杭州西站", "杭州西站"], ["🏛️", "National Archives", "杭州国家版本馆", "杭州国家版本馆"], ["🌿", "Liangzhu Cultural Village", "良渚文化村", "良渚文化村 杭州"], ["🍵", "Zhujiansanxi", "竹间三喜", "竹间三喜 良渚 杭州"]],
    missions: [["🏛️", "Architecture eye", "Find one roofline, corridor, or courtyard detail that feels Chinese.", "找一个最有中式气质的屋顶、廊道或庭院细节。"], ["🌿", "Slow civilization", "Look at Liangzhu through jade, rice fields, and ancient water systems.", "带着玉器、稻作和古代水利的视角看良渚。"]],
  },
  {
    id: "d29", tab: "Day 5 · 29", city: "Hangzhou", cityZh: "杭州",
    title: "Temple Route + Longjing", titleZh: "寺庙线 · 龙井茶园", hero: IMG.longjingHero,
    hotel: "Four Points by Sheraton Hangzhou, Binjiang", hotelZh: "杭州龙禧福朋喜来登酒店", address: "868 Dongxin Avenue, Binjiang District", addressZh: "滨江区东信大道868号",
    route: "Hotel → Lingyin / Faxi temple area → Longjing Tea Fields → Hotel", routeZh: "酒店 → 灵隐/法喜寺庙区 → 龙井茶园 → 回酒店",
    intro: "A quiet final day: wooded temple paths, Buddhist courtyards, tea fields, and a soft ending.", introZh: "最后一天安静收尾：山林寺庙、佛寺院落、茶园和轻松晚餐。",
    plan: [
      { part: "Morning", partZh: "上午", title: "Lingyin temple route", zh: "灵隐寺庙线", image: IMG.lingyin, place: "Hotel → Lingyin / Faxi area", placeZh: "酒店 → 灵隐/法喜寺区域", transit: "Taxi 35–55 min from hotel. Use taxi here; it is simpler for this group.", transitZh: "酒店打车约35–55分钟；这一段直接打车，更适合这组人。", why: "Lingyin is one of Hangzhou’s classic Buddhist temple areas, set between wooded hills and stone grotto scenery.", whyZh: "灵隐是杭州经典佛寺区域之一，山林、寺庙和石刻景观联系在一起。", legs: [["Long version", "Beigao Peak Cableway → Ling Shun Temple → Taoguang Temple → Yongfu Temple → Lingyin Temple → Faxi direction.", "完整线", "北高峰索道 → 灵顺寺 → 韬光寺 → 永福寺 → 灵隐寺 → 法喜寺方向。"], ["Short version", "Lingyin Temple → Faxi Temple. Better if the group wants a softer morning.", "轻松线", "灵隐寺 → 法喜寺。如果想轻松一点，这个版本更合适。"]] },
      { part: "Afternoon", partZh: "下午", title: "Longjing Tea Fields", zh: "龙井茶园", image: IMG.longjingField, place: "Temple area → Longjing Tea Fields / Longjing Village", placeZh: "寺庙区域 → 龙井茶园/龙井村", transit: "Taxi 20–35 min from the West Lake / Faxi side. Return to hotel about 40–60 min.", transitZh: "从西湖/法喜寺方向打车约20–35分钟；回酒店约40–60分钟。", why: "Longjing is tied to West Lake Dragon Well tea. The landscape is the point: tea terraces, village lanes, and roasting aromas.", whyZh: "龙井对应西湖龙井茶，重点不是单个建筑，而是茶田、村路和炒茶香气。" },
      { part: "Evening", partZh: "晚上", title: "Dinner + easy ending", zh: "晚餐 + 轻松收尾", image: IMG.teaCup, place: "Longjing / hotel direction → dinner", placeZh: "龙井/回酒店方向 → 晚餐", transit: "Choose a restaurant on the way back. Avoid another far detour.", transitZh: "晚餐尽量选在回酒店方向，避免再绕远路。", why: "The final meal should be close and comforting: noodles, wontons, light Hangzhou dishes, or tea dessert.", whyZh: "最后一餐适合近、简单、舒服：片儿川、馄饨、轻杭帮菜或茶点甜品。" },
    ],
    food: [
      { name: "Fuyuanju Restaurant", zh: "福缘居酒楼（文三西路店）", tag: "Main pick", tagZh: "主推", image: IMG.westLakeFish, map: "福缘居酒楼 文三西路店 杭州", story: "A proper meal after the temple route: Hangzhou-style braised dishes, seasonal vegetables, and soups.", storyZh: "寺庙线后适合吃一顿正式杭帮菜：红烧类、时令蔬菜和汤羹会比较舒服。", try: [["Hangzhou dishes", "杭帮菜"], ["Seasonal vegetables", "时蔬"], ["Soup", "汤羹"]] },
      { name: "Qunle Restaurant", zh: "群乐饭店（滨安路店）", tag: "Dinner backup", tagZh: "晚餐备选", image: IMG.dongpo, map: "群乐饭店 滨安路店 杭州", story: "A practical dinner backup on the way back toward Binjiang: convenient, familiar, and local-home-style.", storyZh: "回滨江方向的实用晚餐备选，重点是顺路、方便、家常。", try: [["Pian’erchuan noodles", "片儿川"], ["Wontons", "馄饨"], ["Home-style dishes", "家常菜"]] },
      { name: "Tea break", zh: "龙井茶歇", tag: "Tea", tagZh: "茶歇", image: IMG.longjingTea, map: "龙井茶园 杭州 茶馆", story: "In Hangzhou, a tea break is part of the trip: Longjing tea, tea snacks, lotus-root dessert, and quiet hill views.", storyZh: "杭州茶歇本身就是旅行内容：龙井茶、茶点、桂花糯米藕和山坡景观。", try: [["Longjing tea", "龙井茶"], ["Tea snacks", "茶点"], ["Lotus-root dessert", "糯米藕"]] },
    ],
    references: { en: "Lingyin / Longjing references", zh: "灵隐/龙井参考", items: [["庆春朴门", "Vegetarian / light meal", "素食/轻餐"], ["十方苑", "Temple-area vegetarian food", "寺庙区素食"], ["知竹", "Noodles / casual meal", "面馆/简餐"], ["食日长酒家", "Homestyle local dishes", "本地家常菜"], ["法相素食", "Vegetarian meal", "素食"], ["元古·观山", "Scenic creative dining", "观景创意菜"], ["三生小坞", "Tea-field nearby option", "茶园附近参考"]] },
    jumps: [["⛰️", "Lingyin Temple", "灵隐寺", "灵隐寺 杭州"], ["🙏", "Faxi Temple", "法喜寺", "法喜寺 杭州"], ["🍃", "Longjing Tea Fields", "龙井茶园", "龙井茶园 杭州"], ["🍚", "Fuyuanju", "福缘居", "福缘居酒楼 文三西路店 杭州"], ["🥢", "Qunle Restaurant", "群乐饭店", "群乐饭店 滨安路店 杭州"]],
    missions: [["⛰️", "Temple silence", "Take five quiet minutes before taking photos.", "进寺庙线后先安静五分钟，再开始拍照。"], ["🍃", "Tea-field pause", "Smell the tea air, then choose one tea or tea snack before leaving.", "到龙井茶园先闻一闻茶香，离开前选一杯茶或茶点。"]],
  },
];

const tabs = [["home", "Today", "首页"], ["route", "Route", "路线"], ["taste", "Taste", "味道"], ["culture", "Story", "文化"], ["go", "Go", "出发"]];

function mapLinks(query) {
  const q = encodeURIComponent(query);
  const me = encodeURIComponent("我的位置");
  return { amap: `https://uri.amap.com/search?keyword=${q}&callnative=1`, baidu: `https://api.map.baidu.com/direction?origin=${me}&destination=${q}&mode=driving&region=${encodeURIComponent("全国")}&output=html&src=jiangnan-trip`, apple: `https://maps.apple.com/?daddr=${q}&dirflg=d`, google: `https://www.google.com/maps/dir/?api=1&destination=${q}&travelmode=driving` };
}

function SmartImage({ src, alt, className }) {
  const [bad, setBad] = useState(false);
  return bad ? <div className={`${className} flex items-center justify-center bg-gradient-to-br from-slate-200 via-pink-100 to-blue-200 text-xs font-bold text-white`}>Photo</div> : <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setBad(true)} className={className} />;
}

function Pair({ en, zh, className = "" }) {
  return <div className={className}><div>{en}</div><div className="text-neutral-500">{zh}</div></div>;
}

function Badge({ children, style }) {
  return <span className="inline-flex shrink-0 items-center rounded-full bg-white/74 px-3 py-1 text-[11px] font-black text-neutral-800 shadow-sm" style={style}>{children}</span>;
}

function SectionTitle({ kicker, title, zh, right }) {
  return <div className="mb-3 flex items-end justify-between gap-3"><div><p className="text-[11px] font-black uppercase tracking-[0.18em] text-neutral-500">{kicker}</p><h2 className="mt-1 text-[22px] font-black leading-tight tracking-[-0.04em]">{title}</h2>{zh && <p className="text-sm font-semibold text-neutral-500">{zh}</p>}</div>{right}</div>;
}

function MapButtons({ query }) {
  const [more, setMore] = useState(false);
  const links = mapLinks(query);
  const item = "rounded-2xl py-2.5 text-center text-xs font-black transition active:scale-95";
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <a href={links.amap} target="_blank" rel="noreferrer" className={`${item} text-white`} style={{ background: "linear-gradient(135deg,#c98aaf,#657dca)" }}>Amap / 高德</a>
        <a href={links.apple} target="_blank" rel="noreferrer" className={`${item} bg-white/70 text-neutral-800`}>Apple Maps</a>
      </div>
      {more && (
        <div className="grid grid-cols-2 gap-2">
          <a href={links.baidu} target="_blank" rel="noreferrer" className={`${item} text-white`} style={{ background: "linear-gradient(135deg,#7487cc,#5269b9)" }}>Baidu / 百度</a>
          <a href={links.google} target="_blank" rel="noreferrer" className={`${item} bg-white/70 text-neutral-800`}>Google Maps</a>
        </div>
      )}
      <button onClick={() => setMore(!more)} className="w-full rounded-2xl bg-white/50 py-2 text-[11px] font-black text-neutral-600 transition active:scale-95">
        {more ? "Hide maps / 收起地图" : "More maps / 更多地图"}
      </button>
    </div>
  );
}

function getMoodAdvice(day, mood) {
  const base = {
    comfort: {
      en: "Best choice for this group: keep the route simple, use taxis for longer transfers, and do not add extra stops unless they are right next door.",
      zh: "最适合这组人的版本：路线保持简单，长距离优先打车，除非非常顺路，不额外加点。",
    },
    active: {
      en: "Use this only when everyone still has energy: add one snack stop, one photo spot, or one nearby culture stop.",
      zh: "只有大家状态好时用：加一个小吃点、一个拍照点或一个附近文化点。",
    },
    rain: {
      en: "Use this if the weather turns bad: reduce outdoor walking and move the day toward indoor sights, meals, cafés, and direct taxis.",
      zh: "天气不好时用：减少户外步行，把当天转向室内景点、餐厅、咖啡和直接打车。",
    },
  };
  const daySpecific = {
    d25: {
      comfort: ["Dinner + Bund only", "只保留晚餐 + 外滩夜景"],
      active: ["Add Nanjing East Road walk", "顺路加南京东路短散步"],
      rain: ["Taxi to dinner, short Bund view only", "打车去晚餐，外滩只短暂停留"],
    },
    d26: {
      comfort: ["Xujiahui + Yu Garden, no extra detours", "徐家汇 + 豫园，不额外绕路"],
      active: ["Add one snack around Yu Garden", "豫园附近加一个小吃点"],
      rain: ["Library + restaurant first, shorten garden time", "优先书院和餐厅，缩短豫园户外时间"],
    },
    d27: {
      comfort: ["Stay inside Xizha after arrival", "到达后只在西栅内部慢逛"],
      active: ["Add boat ride or dye workshop", "加摇橹船或草木染坊"],
      rain: ["Hotel + museum + nearby food", "酒店、木心美术馆和附近餐食优先"],
    },
    d28: {
      comfort: ["Version Museum + one Liangzhu area stop", "版本馆 + 良渚一个片区即可"],
      active: ["Add Yuniao Collection / Liangzhu walk", "加玉鸟集或良渚短散步"],
      rain: ["Version Museum first, Liangzhu optional", "优先版本馆，良渚改可选"],
    },
    d29: {
      comfort: ["Short temple route + Longjing tea", "短寺庙线 + 龙井茶园"],
      active: ["Longer Lingyin route before Longjing", "龙井前走更完整的灵隐线"],
      rain: ["Temple short route + tea house", "寺庙短线 + 茶馆休息"],
    },
  };
  return { ...base[mood], action: daySpecific[day.id]?.[mood] || ["Keep it flexible", "灵活调整"] };
}

function MoodSwitch({ mood, setMood, theme, day }) {
  const advice = getMoodAdvice(day, mood);
  return <section className="rounded-[32px] p-4 shadow-[0_18px_50px_rgba(75,91,180,0.10)] ring-1 ring-white/70" style={{ background: theme.card }}><SectionTitle kicker="Route Mode" title="Choose the pace" zh="选择今天的节奏" right={<Badge>{theme.placeName} / {theme.placeZh}</Badge>} /><div className="grid grid-cols-3 gap-2">{Object.entries(moodThemes).map(([key, item]) => <button key={key} onClick={() => setMood(key)} className="rounded-2xl px-3 py-3 text-center text-xs font-black transition active:scale-95" style={{ background: mood === key ? theme.gradient : theme.tint, color: mood === key ? "white" : "#333", boxShadow: mood === key ? "0 14px 35px rgba(70,90,220,.18)" : "none" }}><span className="block text-base">{item.emoji}</span><span className="mt-1 block text-[11px]">{item.label}</span><span className="block text-[9px] opacity-80">{item.zh}</span></button>)}</div><div className="mt-3 rounded-2xl p-3 text-sm leading-6 text-neutral-700" style={{ background: theme.tint }}><strong>{advice.action[0]}</strong><br /><span className="text-neutral-500">{advice.action[1]}</span><div className="mt-2">{advice.en}<br /><span className="text-neutral-500">{advice.zh}</span></div></div></section>;
}

function Hero({ day, theme, openGuide }) {
  return <button onClick={openGuide} className="group relative h-[360px] w-full overflow-hidden rounded-[40px] text-left shadow-[0_26px_80px_rgba(66,82,180,.20)] transition active:scale-[.99]"><SmartImage src={day.hero} alt={day.titleZh} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#10205f]/82 via-[#3157d7]/12 to-transparent" /><div className="absolute inset-x-0 top-0 h-32" style={{ background: "linear-gradient(180deg,rgba(255,210,230,.24),transparent)" }} /><div className="absolute bottom-0 right-0 h-44 w-44 rounded-full blur-3xl" style={{ background: theme.accent2, opacity: .30 }} /><div className="relative flex h-full flex-col justify-end p-5 text-white"><div className="mb-3 flex gap-2"><Badge>{day.city} / {day.cityZh}</Badge><Badge>{day.tab}</Badge></div><h2 className="text-[35px] font-black leading-[.94] tracking-[-.055em]">{day.title}</h2><p className="mt-2 text-lg font-semibold text-white/90">{day.titleZh}</p><p className="mt-3 line-clamp-3 text-sm leading-6 text-white/86">{day.intro}<br />{day.introZh}</p></div></button>;
}

function RouteCard({ step, index, theme, open, onToggle }) {
  return <article className="overflow-hidden rounded-[34px] shadow-[0_18px_56px_rgba(75,91,180,.12)] ring-1 ring-white/70" style={{ background: theme.card }}><button onClick={onToggle} className="relative h-40 w-full overflow-hidden bg-neutral-200"><SmartImage src={step.image} alt={step.zh} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#17307a]/50 to-transparent" /><div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white"><span className="text-xs font-black uppercase tracking-[.14em]">{step.part} / {step.partZh}</span><span className="rounded-full bg-white/92 px-3 py-1 text-xs font-black text-neutral-900">Loose plan / 大致安排</span></div></button><button onClick={onToggle} className="w-full p-4 text-left"><div className="mb-3 flex items-start gap-3"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white" style={{ background: theme.gradient }}>{String(index + 1).padStart(2, "0")}</div><div className="min-w-0 flex-1"><h3 className="text-lg font-black leading-tight tracking-[-.03em]">{step.title}</h3><p className="mt-0.5 text-sm font-semibold text-neutral-500">{step.zh}</p></div><div className="rounded-full bg-white/70 px-2 py-1 text-xs font-black">{open ? "−" : "+"}</div></div><div className="space-y-2"><div className="rounded-2xl p-3 text-sm leading-6" style={{ background: theme.tint }}><span className="text-[11px] font-black uppercase tracking-[.12em] text-neutral-500">Place / 地点</span><Pair en={step.place} zh={step.placeZh} /></div><div className="rounded-2xl p-3 text-sm leading-6 text-blue-950" style={{ background: "rgba(226,236,255,.76)" }}><span className="text-[11px] font-black uppercase tracking-[.12em] text-blue-500">Transit / 交通</span><Pair en={step.transit} zh={step.transitZh} /></div></div></button>{open && <div className="space-y-3 border-t border-white/70 p-4 pt-3"><div className="rounded-2xl bg-white/66 p-3 text-sm leading-6 text-neutral-700"><strong>Why it matters / 为什么值得去</strong><Pair en={step.why} zh={step.whyZh} /></div>{step.legs?.map(([enTitle, en, zhTitle, zh]) => <div key={enTitle} className="rounded-2xl p-3 text-sm leading-6" style={{ background: theme.tint }}><strong>{enTitle}</strong><p>{en}</p><p className="mt-1 text-neutral-500"><strong>{zhTitle}</strong>：{zh}</p></div>)}</div>}</article>;
}

function FoodCard({ item, theme, onOpen }) {
  return <button onClick={() => onOpen(item)} className="w-full overflow-hidden rounded-[34px] text-left shadow-[0_18px_56px_rgba(75,91,180,.12)] ring-1 ring-white/70 transition active:scale-[.99]" style={{ background: theme.card }}><SmartImage src={item.image} alt={item.zh} className="h-44 w-full object-cover" /><div className="p-4"><div className="mb-2 flex items-start justify-between gap-3"><div><h3 className="text-lg font-black leading-tight tracking-[-.03em]">{item.name}</h3><p className="text-sm font-semibold text-neutral-500">{item.zh}</p></div><Badge>{item.tag} / {item.tagZh}</Badge></div><Pair en={item.story} zh={item.storyZh} className="text-sm leading-6 text-neutral-700" /><div className="mt-3 flex flex-wrap gap-2">{item.try.slice(0, 3).map(([en, zh]) => <span key={en} className="rounded-full px-3 py-1 text-[11px] font-bold text-neutral-700" style={{ background: theme.tint }}>{en} / {zh}</span>)}</div></div></button>;
}

function ReferenceCard({ refs, theme }) {
  if (!refs) return null;
  return (
    <section className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.10)] ring-1 ring-white/70" style={{ background: theme.card }}>
      <SectionTitle kicker="References" title={refs.en} zh={refs.zh} />
      <div className="space-y-2">
        {refs.items.map((item) => {
          const [name, en, zh] = Array.isArray(item) ? item : [item, "Reference", "参考"];
          return (
            <div key={name} className="rounded-2xl p-3 text-sm leading-5" style={{ background: theme.tint }}>
              <div className="font-black text-neutral-900">{name}</div>
              <div className="mt-1 text-xs font-semibold text-neutral-600">{en}</div>
              <div className="text-xs font-semibold text-neutral-500">{zh}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function getCultureNotes(day) {
  const notes = {
    d25: [
      { icon: "🏙️", title: "Riverfront contrast", zh: "滨江对照", en: "The Bund is powerful because it places two versions of Shanghai face to face: historic trading-port façades on one side and the modern Lujiazui skyline on the other.", cn: "外滩最有力量的地方，是把两个上海放在同一个画面里：一边是近代通商口岸留下的建筑立面，一边是陆家嘴的现代天际线。" },
      { icon: "🍜", title: "Shanghai flavor", zh: "上海味道", en: "Shanghainese food often uses soy sauce, sugar, rice wine and slow braising. The result is glossy, rich, slightly sweet and very comforting.", cn: "本帮菜常用酱油、糖、黄酒和红烧慢炖，味道浓郁、色泽油亮，带一点甜，是很有上海记忆点的味型。" },
    ],
    d26: [
      { icon: "⛪", title: "Xujiahui layers", zh: "徐家汇层次", en: "Xujiahui grew around education, religion, science and publishing. That is why a cathedral and a contemporary library can feel natural in the same morning walk.", cn: "徐家汇的气质和教育、宗教、科学、出版传统有关，所以天主堂和现代书院放在同一条上午路线里是顺的。" },
      { icon: "🏮", title: "Garden as a painting", zh: "园林像画", en: "A Chinese garden is not only about plants. Rockeries, water, corridors and windows are arranged to create framed views, almost like walking through small paintings.", cn: "中式园林不只是看植物，山石、水面、廊道和窗都在组织视线，让人像走进一幅幅被框起来的小画。" },
    ],
    d27: [
      { icon: "🌉", title: "Water-town rhythm", zh: "水乡节奏", en: "Wuzhen is best understood slowly: bridges divide the route, canals reflect the lights, and white-wall houses make the town feel softer at night.", cn: "乌镇适合慢慢理解：桥把路线切成小段，水面映出灯光，白墙民居让夜晚的水乡变得更柔和。" },
      { icon: "🖼️", title: "Muxin inside Xizha", zh: "水乡里的木心", en: "Muxin Art Museum adds a literary layer to the water-town visit. It keeps the day from becoming only bridges and snacks.", cn: "木心美术馆给水乡路线加了一层文学气质，让这一天不只是桥、水巷和小吃。" },
    ],
    d28: [
      { icon: "📚", title: "Textual heritage", zh: "版本与文脉", en: "The National Archives is about preserving editions, books and the memory of texts. Its quiet architecture makes the idea of cultural continuity visible.", cn: "国家版本馆关注版本、典籍和文字记忆，克制的建筑空间把“文脉延续”这件事变得可看见。" },
      { icon: "🏺", title: "Liangzhu civilization", zh: "良渚文明", en: "Liangzhu represents an early urban civilization in the lower Yangtze region, known for jade ritual objects, rice agriculture and water-management systems.", cn: "良渚代表长江下游早期城市文明，关键词是玉器礼制、稻作农业和水利系统。" },
    ],
    d29: [
      { icon: "🙏", title: "Temple landscape", zh: "山寺景观", en: "Hangzhou temples are not isolated buildings. They sit inside hills, trees, grotto scenery and walking paths, so the landscape itself becomes part of the visit.", cn: "杭州寺庙不是孤立建筑，它们和山林、石刻、步道连在一起，所以山水本身也是寺庙体验的一部分。" },
      { icon: "🍃", title: "Longjing tea culture", zh: "龙井茶文化", en: "Longjing is not just a drink. Tea fields, village lanes, roasting aromas and quiet hill views turn tea culture into a landscape experience.", cn: "龙井不只是喝一杯茶，茶田、村路、炒茶香和山坡景观一起，把茶文化变成了一种空间体验。" },
    ],
  };
  return notes[day.id] || [];
}

function CulturePage({ day, theme }) {
  const notes = getCultureNotes(day);
  return (
    <div className="space-y-3">
      <section className="overflow-hidden rounded-[36px] shadow-[0_18px_56px_rgba(75,91,180,.12)] ring-1 ring-white/70" style={{ background: theme.card }}>
        <div className="relative h-52 overflow-hidden">
          <SmartImage src={day.hero} alt={day.titleZh} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10205f]/75 via-[#3157d7]/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs font-black uppercase tracking-[.16em] text-white/80">Culture lens / 文化视角</p>
            <h3 className="mt-1 text-2xl font-black tracking-[-.04em]">{day.city}</h3>
            <p className="text-sm font-semibold text-white/85">{day.cityZh}</p>
          </div>
        </div>
        <div className="p-4">
          <Pair en={day.intro} zh={day.introZh} className="text-sm leading-6 text-neutral-700" />
        </div>
      </section>
      {notes.map((item, index) => (
        <section key={item.title} className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.10)] ring-1 ring-white/70" style={{ background: theme.card }}>
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl text-white" style={{ background: theme.gradient }}>{item.icon}</div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-[.14em] text-neutral-500">Story {String(index + 1).padStart(2, "0")}</p>
              <h3 className="text-lg font-black leading-tight tracking-[-.03em]">{item.title}</h3>
              <p className="text-sm font-semibold text-neutral-500">{item.zh}</p>
            </div>
          </div>
          <Pair en={item.en} zh={item.cn} className="rounded-2xl p-3 text-sm leading-6 text-neutral-700" />
        </section>
      ))}
      <section className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.10)] ring-1 ring-white/70" style={{ background: theme.card }}>
        <SectionTitle kicker="Look for" title="What to notice" zh="现场看什么" />
        <div className="space-y-2">
          {day.plan.map((step) => (
            <div key={step.title} className="rounded-2xl p-3 text-sm leading-6" style={{ background: theme.tint }}>
              <strong>{step.title}</strong><br />{step.why}<br /><span className="text-neutral-500">{step.whyZh}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function getMapSegments(day) {
  const maps = {
    d25: [
      { mode: "drive", icon: "🚕", title: "Hotel → Bund dinner", zh: "酒店 → 外滩晚餐", time: "20–35 min", note: "Direct taxi. Ask to stop near the restaurant or Bund entrance.", noteZh: "直接打车，到餐厅或外滩入口附近下车。", query: "外滩家宴 上海 外滩" },
      { mode: "walk", icon: "🚶", title: "Dinner → The Bund riverfront", zh: "晚餐 → 外滩滨江", time: "8–20 min", note: "Slow walk after dinner. Keep the route along the riverfront and photo spots.", noteZh: "饭后慢走，沿滨江和拍照点移动。", query: "外滩 上海" },
      { mode: "walk", icon: "📸", title: "Bund photo walk", zh: "外滩拍照慢走", time: "30–60 min", note: "Best views: historic façades behind you, Lujiazui skyline across the river.", noteZh: "最佳视角：背后是历史建筑，对岸是陆家嘴天际线。", query: "外滩观景平台 上海" },
      { mode: "drive", icon: "🚕", title: "The Bund → Hotel", zh: "外滩 → 酒店", time: "20–35 min", note: "Taxi back. Avoid adding another far stop on the first night.", noteZh: "打车回酒店，第一晚不再加远距离点。", query: "上海浦西万怡酒店 静安区恒丰路338号" },
    ],
    d26: [
      { mode: "drive", icon: "🚕", title: "Hotel → Xujiahui Cathedral", zh: "酒店 → 徐家汇天主堂", time: "30–40 min", note: "Taxi directly to the cathedral area. Start the morning with the architecture stop.", noteZh: "直接打车到天主堂区域，上午从建筑点开始。", query: "徐家汇天主堂 上海" },
      { mode: "walk", icon: "🚶", title: "Cathedral → Xujiahui Library", zh: "天主堂 → 徐家汇书院", time: "5–12 min", note: "Short walking link. Keep it slow and look for the quiet corners around the library.", noteZh: "短步行连接，慢慢走，找书院里的安静角落。", query: "徐家汇书院 上海" },
      { mode: "drive", icon: "🚕", title: "Xujiahui lunch → Yu Garden", zh: "徐家汇午餐 → 豫园", time: "25–40 min", note: "Taxi to Yu Garden / Old City Bazaar. Drop off outside the pedestrian zone.", noteZh: "打车到豫园/城隍庙区域，在步行区外下车。", query: "豫园 上海" },
      { mode: "walk", icon: "🏮", title: "Yu Garden + old-city walk", zh: "豫园 + 老城厢慢逛", time: "60–120 min", note: "Walk inside the garden and nearby bazaar. Look for framed views, ponds and rockeries.", noteZh: "在园内和周边慢逛，重点看框景、池水和假山。", query: "豫园 上海" },
      { mode: "drive", icon: "🚕", title: "Yu Garden dinner → Hotel", zh: "豫园晚餐 → 酒店", time: "15–30 min", note: "Taxi back after dinner. Keep the evening simple.", noteZh: "晚餐后打车回酒店，晚上保持轻松。", query: "上海浦西万怡酒店 静安区恒丰路338号" },
    ],
    d27: [
      { mode: "drive", icon: "🚕", title: "Shanghai hotel → Shanghai South Station", zh: "上海酒店 → 上海南站", time: "about 30 min", note: "Taxi is the default. Leave enough time for station entry and security.", noteZh: "默认打车，预留进站和安检时间。", query: "上海南站" },
      { mode: "train", icon: "🚄", title: "Shanghai South → Huzhou Nanxun", zh: "上海南 → 湖州南浔", time: "about 43 min", note: "High-speed train. Buy tickets ahead if possible.", noteZh: "高铁段，建议提前购票。", query: "湖州南浔站" },
      { mode: "drive", icon: "🚕", title: "Huzhou Nanxun Station → Xizha hotel", zh: "湖州南浔站 → 西栅酒店", time: "about 23 min", note: "Taxi directly to the hotel or Xizha scenic-area entrance.", noteZh: "打车直达酒店或西栅景区入口。", query: "乌镇西栅" },
      { mode: "walk", icon: "🚶", title: "Xizha service area → Muxin Art Museum", zh: "西栅服务区 → 木心美术馆", time: "20–45 min", note: "Walk slowly through water lanes, bridges and the post office area.", noteZh: "穿过水巷、石桥和邮局区域慢慢走。", query: "木心美术馆 乌镇" },
      { mode: "walk", icon: "🌉", title: "Dinner → Xizha night-view loop", zh: "晚餐 → 西栅夜景环线", time: "45–90 min", note: "Optional boat ride can be added, but walking gives more flexible photo stops.", noteZh: "可加摇橹船，但步行更方便随时拍照。", query: "乌镇西栅 夜景" },
    ],
    d28: [
      { mode: "drive", icon: "🚕", title: "Xizha hotel → Huzhou Nanxun Station", zh: "西栅酒店 → 湖州南浔站", time: "about 26 min", note: "Taxi to the station entrance. Keep luggage handling simple.", noteZh: "打车到进站口，行李处理最省心。", query: "湖州南浔站" },
      { mode: "train", icon: "🚄", title: "Huzhou Nanxun → Hangzhou West", zh: "湖州南浔 → 杭州西", time: "about 33 min", note: "High-speed train. Many daily trains, but still buy ahead.", noteZh: "高铁段，班次较多但仍建议提前购票。", query: "杭州西站" },
      { mode: "drive", icon: "🚕", title: "Hangzhou West → Hotel", zh: "杭州西站 → 酒店", time: "about 39 min", note: "Taxi directly to Four Points Binjiang. This is the easiest hotel transfer.", noteZh: "打车直达杭州龙禧福朋喜来登，最省心。", query: "杭州龙禧福朋喜来登酒店 滨江" },
      { mode: "drive", icon: "🚕", title: "Hotel / station area → National Archives", zh: "酒店/车站方向 → 杭州国家版本馆", time: "30–65 min", note: "Use taxi between cultural areas; distances are not ideal for walking.", noteZh: "文化片区之间建议打车，距离不适合步行连接。", query: "杭州国家版本馆" },
      { mode: "drive", icon: "🚕", title: "National Archives → Liangzhu Cultural Village", zh: "版本馆 → 良渚文化村", time: "15–30 min", note: "Keep this as the main afternoon transfer. Do not add another far district.", noteZh: "这是下午主转场，不建议再加远距离区域。", query: "良渚文化村 杭州" },
      { mode: "walk", icon: "🌿", title: "Liangzhu cultural walk", zh: "良渚文化慢走", time: "45–90 min", note: "Walk around the cultural village / Yuniao / 玉鸟集 area depending on energy.", noteZh: "按体力在文化村/玉鸟集周边慢走。", query: "玉鸟集 良渚" },
    ],
    d29: [
      { mode: "drive", icon: "🚕", title: "Hotel → Lingyin / Faxi area", zh: "酒店 → 灵隐/法喜区域", time: "35–55 min", note: "Taxi directly to the temple area. Avoid multi-transfer routes.", noteZh: "直接打车去寺庙区，避免多次换乘。", query: "灵隐寺 杭州" },
      { mode: "walk", icon: "🙏", title: "Short temple walk", zh: "寺庙短线步行", time: "60–120 min", note: "Comfort route: Lingyin Temple → Faxi Temple. Active route can add nearby temple stops.", noteZh: "轻松线：灵隐寺 → 法喜寺；多逛模式可加附近寺庙点。", query: "法喜寺 杭州" },
      { mode: "drive", icon: "🚕", title: "Temple area → Longjing Tea Fields", zh: "寺庙区 → 龙井茶园", time: "20–35 min", note: "Taxi through the West Lake / hill area. Roads may be slow on weekends.", noteZh: "打车穿过西湖/山路方向，周末可能慢一点。", query: "龙井茶园 杭州" },
      { mode: "walk", icon: "🍃", title: "Longjing tea-field walk", zh: "龙井茶园慢走", time: "45–90 min", note: "Walk village lanes and tea fields, then choose a tea break.", noteZh: "走村路和茶田，再选一个茶歇点。", query: "龙井村 杭州" },
      { mode: "drive", icon: "🚕", title: "Longjing / dinner → Hotel", zh: "龙井/晚餐 → 酒店", time: "40–60 min", note: "Choose dinner on the way back and avoid another far detour.", noteZh: "晚餐选在回酒店方向，避免再绕远路。", query: "杭州龙禧福朋喜来登酒店 滨江" },
    ],
  };
  return maps[day.id] || [];
}

function MapItinerarySheet({ day, theme, onClose }) {
  if (!day) return null;
  const segments = getMapSegments(day);
  const modeStyle = {
    drive: { label: "Driving / 行车", cls: "border-l-4 border-blue-400", bg: "rgba(226,236,255,.72)" },
    walk: { label: "Walking / 步行", cls: "border-l-4 border-emerald-400", bg: "rgba(220,252,231,.58)" },
    train: { label: "Train / 高铁", cls: "border-l-4 border-purple-400", bg: "rgba(237,233,254,.64)" },
  };
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-indigo-950/35 px-3 pb-3" onClick={onClose}>
      <div className="max-h-[90vh] w-full max-w-[430px] overflow-hidden rounded-[38px] shadow-[0_30px_100px_rgba(34,48,140,.30)] ring-1 ring-white/70" style={{ background: theme.bg }} onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-white/60 px-5 py-4 backdrop-blur-xl" style={{ background: theme.glass }}>
          <div>
            <p className="text-xs font-black uppercase tracking-[.14em] text-neutral-500">Day map / 一天地图</p>
            <h3 className="text-xl font-black leading-tight tracking-[-.04em]">{day.title}</h3>
            <p className="text-sm font-semibold text-neutral-500">{day.titleZh}</p>
          </div>
          <button onClick={onClose} className="rounded-full bg-white/80 px-4 py-2 text-sm font-black shadow-sm">Close / 关闭</button>
        </div>
        <div className="max-h-[76vh] overflow-y-auto p-5">
          <section className="mb-4 rounded-[28px] p-4 text-sm leading-6 shadow-sm ring-1 ring-white/60" style={{ background: theme.card }}>
            <SectionTitle kicker="Overview" title="Full-day route" zh="全天路线总览" />
            <Pair en={day.route} zh={day.routeZh} className="font-semibold text-neutral-700" />
          </section>
          <div className="space-y-3">
            {segments.map((seg, index) => {
              const style = modeStyle[seg.mode] || modeStyle.drive;
              return (
                <section key={`${seg.title}-${index}`} className={`rounded-[28px] p-4 shadow-sm ring-1 ring-white/60 ${style.cls}`} style={{ background: theme.card }}>
                  <div className="mb-2 flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg" style={{ background: style.bg }}>{seg.icon}</div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-black uppercase tracking-[.14em] text-neutral-500">Step {index + 1} · {style.label}</p>
                      <h4 className="text-base font-black leading-tight tracking-[-.02em]">{seg.title}</h4>
                      <p className="text-sm font-semibold text-neutral-500">{seg.zh}</p>
                    </div>
                    <Badge>{seg.time}</Badge>
                  </div>
                  <Pair en={seg.note} zh={seg.noteZh} className="rounded-2xl p-3 text-sm leading-6 text-neutral-700" />
                  <div className="mt-3"><MapButtons query={seg.query} /></div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailSheet({ item, theme, onClose }) {
  if (!item) return null;
  return <div className="fixed inset-0 z-50 flex items-end justify-center bg-indigo-950/30 px-3 pb-3" onClick={onClose}><div className="max-h-[88vh] w-full max-w-[430px] overflow-hidden rounded-[38px] shadow-[0_30px_100px_rgba(34,48,140,.28)] ring-1 ring-white/70" style={{ background: theme.bg }} onClick={(e) => e.stopPropagation()}><div className="flex items-center justify-between border-b border-white/60 px-5 py-4 backdrop-blur-xl" style={{ background: theme.glass }}><div><p className="text-xs font-black uppercase tracking-[.14em] text-neutral-500">Detail / 详情</p><h3 className="text-xl font-black leading-tight tracking-[-.04em]">{item.name}</h3><p className="text-sm font-semibold text-neutral-500">{item.zh}</p></div><button onClick={onClose} className="rounded-full bg-white/80 px-4 py-2 text-sm font-black shadow-sm">Close / 关闭</button></div><div className="max-h-[72vh] overflow-y-auto p-5">{item.image && <SmartImage src={item.image} alt={item.zh} className="mb-4 h-60 w-full rounded-[30px] object-cover" />}<Pair en={item.story || item.note} zh={item.storyZh || item.noteZh} className="text-sm leading-6 text-neutral-700" />{item.try && <div className="mt-4 rounded-2xl bg-white/66 p-4 text-sm leading-6"><strong>{item.map ? "What to try / 推荐尝试" : "Highlights / 重点内容"}</strong><ul className="mt-2 list-disc space-y-1 pl-4">{item.try.map(([en, zh]) => <li key={en}>{en} / {zh}</li>)}</ul></div>}{item.map && <div className="mt-4"><MapButtons query={item.map} /></div>}</div></div></div>;
}

function JumpCard({ icon, title, zh, query, theme, onOpen, note, noteZh }) {
  return (
    <div className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.11)] ring-1 ring-white/70" style={{ background: theme.card }}>
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl text-white" style={{ background: theme.gradient }}>{icon}</div>
        <div>
          <h3 className="text-lg font-black leading-tight tracking-[-.03em]">{title}</h3>
          <p className="text-sm font-semibold text-neutral-500">{zh}</p>
        </div>
      </div>
      {(note || noteZh) && <Pair en={note} zh={noteZh} className="mb-3 rounded-2xl p-3 text-sm leading-5 text-neutral-700" />}
      {onOpen ? <button onClick={onOpen} className="w-full rounded-2xl py-3 text-xs font-black text-white" style={{ background: theme.gradient }}>{title.includes("map") || title.includes("Map") ? "Open map / 打开地图" : title.includes("Culture") ? "Open story / 打开文化页" : "Open guide / 打开攻略"}</button> : <MapButtons query={query} />}
    </div>
  );
}

function getSmartJumps(day, mood) {
  const topFood = day.food?.[0];
  const photoSpot = day.id === "d25" ? ["📸", "Photo stop", "拍照点", "外滩 上海", "Best for skyline photos and river reflections.", "适合拍天际线和黄浦江倒影。"]
    : day.id === "d26" ? ["📸", "Photo stop", "拍照点", "豫园 上海", "Best for framed garden views and old-city details.", "适合拍园林框景和老城厢细节。"]
    : day.id === "d27" ? ["📸", "Photo stop", "拍照点", "乌镇西栅", "Best for bridges, canals and night reflections.", "适合拍石桥、水巷和夜景倒影。"]
    : day.id === "d28" ? ["📸", "Photo stop", "拍照点", "杭州国家版本馆", "Best for calm architecture and Chinese-style lines.", "适合拍建筑线条和中式空间。"]
    : ["📸", "Photo stop", "拍照点", "龙井茶园 杭州", "Best for tea fields and green hills.", "适合拍茶田和山坡层次。"];
  const cultureSpot = day.id === "d25" ? ["🏙️", "Culture mode", "文化模式", "外滩历史建筑群 上海", "Read the riverfront as Shanghai’s modern history.", "把外滩当作上海近代城市史来逛。"]
    : day.id === "d26" ? ["🏛️", "Culture mode", "文化模式", "徐家汇书院 上海", "Architecture, books and Xujiahui’s educational history.", "建筑、书院和徐家汇教育传统。"]
    : day.id === "d27" ? ["🖼️", "Culture mode", "文化模式", "木心美术馆 乌镇", "A quiet literary stop inside the water town.", "水乡里更安静的文学艺术点。"]
    : day.id === "d28" ? ["🏺", "Culture mode", "文化模式", "良渚文化村 杭州", "Jade, rice agriculture and early urban civilization.", "玉器、稻作和早期城市文明。"]
    : ["🙏", "Culture mode", "文化模式", "灵隐寺 杭州", "Temple courtyards, wooded hills and grotto scenery.", "寺院、山林和石刻景观。"];
  const easySpot = day.id === "d27" ? ["🛶", "Easy mode", "轻松路线", "乌镇西栅", "Stay inside Xizha and keep the day walkable.", "只留在西栅内部，减少转场。"]
    : day.id === "d29" ? ["🍃", "Easy mode", "轻松路线", "法喜寺 杭州", "Choose the shorter temple route before tea fields.", "先走短寺庙线，再去茶园。"]
    : ["☁️", "Easy mode", "轻松路线", `${day.hotel} ${day.hotelZh}`, "Use the hotel as the reset point and keep the route simple.", "以酒店为重置点，路线保持简单。"];
  const activeExtra = day.id === "d25" ? ["➕", "One more stop", "再加一站", "南京东路 上海", "Add a short Nanjing East Road walk if the first night still feels easy.", "第一晚还有精神，就顺路走一小段南京东路。"]
    : day.id === "d26" ? ["➕", "One more snack", "再加一口", "南翔馒头店 豫园 上海", "Add one classic Yu Garden snack instead of another far destination.", "不要再跨区，加一个豫园附近传统小吃就好。"]
    : day.id === "d27" ? ["➕", "One more water-town stop", "再加一个水乡点", "草木染坊 乌镇西栅", "Add the dye workshop or a short boat ride inside Xizha.", "在西栅内部加草木染坊或一小段摇橹船。"]
    : day.id === "d28" ? ["➕", "One more Liangzhu stop", "再加一个良渚点", "玉鸟集 良渚 杭州", "Add Yuniao Collection if the culture-day route feels relaxed.", "如果文化日不累，可以加玉鸟集短逛。"]
    : ["➕", "One more tea stop", "再加一个茶点", "龙井茶园 茶馆 杭州", "Add a tea house instead of another distant attraction.", "不要再跑远，加一个茶馆更顺。"];
  const feedMe = ["🍜", "Feed me", "带我去吃饭", topFood?.map || topFood?.name || day.route, `Go to today’s main food pick: ${topFood?.name || "nearby food"}.`, `去今天主推：${topFood?.zh || "附近餐厅"}。`];
  const rainSafe = ["☔", "Rain-safe stop", "雨天安全点", day.id === "d26" ? "徐家汇书院 上海" : day.id === "d27" ? "木心美术馆 乌镇" : day.id === "d28" ? "杭州国家版本馆" : day.id === "d29" ? "灵隐寺 杭州" : `${day.hotel} ${day.hotelZh}`, "Less outdoor walking, easier shelter, better for bad weather.", "减少户外步行，更容易避雨和休息。"];

  const order = mood === "rain" ? [rainSafe, feedMe, easySpot, cultureSpot]
    : mood === "active" ? [activeExtra, photoSpot, cultureSpot, feedMe]
    : [easySpot, feedMe, photoSpot, cultureSpot];
  return order.map(([icon, title, zh, query, note, noteZh]) => ({ icon, title, zh, query, note, noteZh }));
}

function uniqueJumpCards(cards) {
  const seen = new Set();
  return cards.filter((card) => {
    const key = (card.query || card.title || "guide").trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function FoodPassport({ theme, passport, setPassport, dayId, compact = false }) {
  const dailyItems = {
    d25: [
      ["d25-bund-dinner", "🥢", "Old-Shanghai dinner", "老上海晚餐", "Bund area", "外滩方向"],
      ["d25-crab", "🦀", "Crab roe noodles", "蟹黄面", "Shanghai", "上海"],
      ["d25-shengjian", "🥟", "Shengjianbao", "生煎包", "Shanghai snack", "上海小吃"],
      ["d25-braised", "🍖", "Soy-braised dish", "本帮红烧", "Shanghai flavor", "本帮味道"],
      ["d25-dessert", "🍡", "Classic pastry", "传统点心", "Snack option", "点心参考"],
    ],
    d26: [
      ["d26-bbq", "🔥", "Korean BBQ", "韩式烤肉", "Xujiahui", "徐家汇"],
      ["d26-stew", "🍲", "Army stew", "部队锅", "Professor LEE", "韩料参考"],
      ["d26-shrimp", "🦐", "River shrimp", "河虾", "Renheguan", "人和馆方向"],
      ["d26-xiaolong", "🥟", "Xiaolongbao", "小笼包", "Yu Garden", "豫园"],
      ["d26-tangyuan", "🍡", "Sweet rice dumplings", "宁波汤团", "Old city snack", "老城厢小吃"],
    ],
    d27: [
      ["d27-lamb", "🍜", "Lamb noodles", "羊肉面", "Xizha", "西栅"],
      ["d27-cake", "🍡", "Dingsheng cake", "定胜糕", "Wuzhen pastry", "乌镇糕点"],
      ["d27-wonton", "🥣", "Wontons", "吴妈馄饨", "Xizha snack", "西栅小吃"],
      ["d27-fish", "🐟", "White fish", "白水鱼", "Water-town dish", "水乡菜"],
      ["d27-duck", "🦆", "Soy-sauce duck", "酱鸭", "Wuzhen flavor", "乌镇味道"],
    ],
    d28: [
      ["d28-tea-dessert", "🍵", "Longjing tea drink", "龙井茶饮", "Zhujiansanxi", "竹间三喜"],
      ["d28-osmanthus", "🌼", "Osmanthus dessert", "桂花甜品", "Liangzhu", "良渚"],
      ["d28-dongpo", "🥘", "Dongpo pork", "东坡肉", "Hangzhou", "杭州"],
      ["d28-shrimp", "🦐", "Longjing shrimp", "龙井虾仁", "Hangzhou classic", "杭帮经典"],
      ["d28-fish-soup", "🥣", "Song Sao fish soup", "宋嫂鱼羹", "Hangzhou classic", "杭帮经典"],
    ],
    d29: [
      ["d29-vegetarian", "🥬", "Temple vegetarian meal", "寺庙素食", "Lingyin / Faxi", "灵隐/法喜"],
      ["d29-dongpo", "🥘", "Dongpo pork", "东坡肉", "Hangzhou meal", "杭帮菜"],
      ["d29-noodles", "🍜", "Pian’erchuan noodles", "片儿川", "Dinner backup", "晚餐备选"],
      ["d29-tea", "🍵", "Longjing tea", "龙井茶", "Tea field", "龙井茶园"],
      ["d29-lotus", "🌸", "Lotus-root dessert", "糯米藕", "Tea break", "茶歇"],
    ],
  };
  const allItems = Object.values(dailyItems).flat();
  const visibleItems = dayId ? dailyItems[dayId] || [] : allItems;
  const doneAll = allItems.filter(([id]) => passport[id]).length;
  const todayDone = visibleItems.filter(([id]) => passport[id]).length;
  const totalLabel = visibleItems.length || 5;
  const toggle = (id) => setPassport((prev) => ({ ...prev, [id]: !prev[id] }));
  return (
    <section className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.11)] ring-1 ring-white/70" style={{ background: theme.card }}>
      <SectionTitle kicker="Food Passport" title={compact ? "5 tastes today" : "Daily taste cards"} zh={compact ? "今日5个美食打卡" : "每天固定5个美食打卡"} right={<Badge>{dayId ? `${todayDone}/${totalLabel}` : `${doneAll}/${allItems.length}`}</Badge>} />
      <div className="grid grid-cols-2 gap-2">
        {visibleItems.map(([id, icon, en, zh, city, cityZh]) => {
          const active = !!passport[id];
          return (
            <button key={id} onClick={() => toggle(id)} className="rounded-2xl p-3 text-left transition active:scale-95" style={{ background: active ? theme.gradient : theme.tint, color: active ? "white" : "#333" }}>
              <div className="mb-1 text-xl">{active ? "✅" : icon}</div>
              <div className="text-xs font-black leading-4">{en}</div>
              <div className="text-[11px] font-semibold opacity-80">{zh}</div>
              <div className="mt-2 text-[10px] font-bold opacity-70">{city} / {cityZh}</div>
            </button>
          );
        })}
      </div>
      <p className="mt-3 rounded-2xl p-3 text-xs font-semibold leading-5 text-neutral-600" style={{ background: theme.tint }}>Five fixed food cards each day. Tap what you actually try. / 每天固定5个美食打卡，吃到什么就点亮什么。</p>
    </section>
  );
}

export default function JiangnanTravelGuideApp() {
  const [dayId, setDayId] = useState("d25");
  const [tab, setTab] = useState("home");
  const [mood, setMood] = useState("comfort");
  const [openStep, setOpenStep] = useState(0);
  const [detail, setDetail] = useState(null);
  const [mapOpen, setMapOpen] = useState(false);
  const [passport, setPassport] = useState({});
  const day = days.find((d) => d.id === dayId) || days[0];
  const theme = getTheme(day.id, mood);
  const guide = useMemo(() => ({ name: "Spot + Food Guide", zh: "景点与美食详细介绍", image: day.hero, story: day.intro, storyZh: day.introZh, try: [...day.plan.map((p) => [p.title, p.zh]), ...day.food.flatMap((f) => f.try)].slice(0, 12) }), [day]);
  const pageTitle = { home: ["Overview", "今日概览"], route: ["Loose Route", "大致路线"], taste: ["Taste Guide", "味道推荐"], culture: ["Culture Notes", "文化科普"], go: ["Quick Go", "快速出发"] }[tab];

  return <div className="min-h-screen text-neutral-950 transition-all duration-700" style={{ background: theme.bg }}><div className="relative mx-auto min-h-screen max-w-[430px] overflow-hidden shadow-[0_30px_90px_rgba(74,91,180,.16)]" style={{ background: theme.bg }}><div className="pointer-events-none absolute -right-24 top-12 h-64 w-64 rounded-full blur-3xl" style={{ background: theme.accent2, opacity: .24 }} /><div className="pointer-events-none absolute -left-24 top-80 h-72 w-72 rounded-full blur-3xl" style={{ background: theme.accent, opacity: .14 }} />
    <header className="sticky top-0 z-30 border-b border-white/55 px-5 pb-3 pt-5 backdrop-blur-2xl" style={{ background: theme.glass }}><div className="flex items-start justify-between gap-3"><div><p className="text-[11px] font-black uppercase tracking-[.20em] text-neutral-500">Jiangnan private guide</p><h1 className="mt-1 bg-clip-text text-[31px] font-black leading-tight tracking-[-.05em] text-transparent" style={{ backgroundImage: theme.gradient }}>Jiangnan Trip</h1><p className="mt-1 text-sm font-medium text-neutral-500">Places · Transit · Taste · Fun</p></div><button onClick={() => setDetail(guide)} className="rounded-full bg-white/78 px-4 py-2 text-sm font-black shadow-sm">Guide / 攻略</button></div><div className="mt-4 flex gap-2 overflow-x-auto pb-1">{days.map((d) => <button key={d.id} onClick={() => { setDayId(d.id); setTab("home"); setOpenStep(0); }} className="shrink-0 rounded-full px-4 py-2 text-sm font-bold shadow-sm transition active:scale-95" style={dayId === d.id ? { background: theme.gradient, color: "white" } : { background: "rgba(255,255,255,.72)", color: "#52525b" }}>{d.tab}</button>)}</div></header>
    <main className="relative z-10 space-y-5 px-5 pb-28 pt-5"><Hero day={day} theme={theme} openGuide={() => setDetail(guide)} /><SectionTitle kicker={day.city} title={pageTitle[0]} zh={pageTitle[1]} right={<Badge style={{ background: theme.tint }}>{day.cityZh}</Badge>} />
      {tab === "home" && <div className="space-y-5"><section className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.11)] ring-1 ring-white/70" style={{ background: theme.card }}><SectionTitle kicker="Hotel" title="Hotel + anchor" zh="酒店与起点" /><p className="text-sm font-bold leading-6">{day.hotel}<br /><span className="text-neutral-500">{day.hotelZh}</span></p><p className="mt-1 text-sm leading-6 text-neutral-500">{day.address}<br />{day.addressZh}</p><div className="mt-3"><MapButtons query={`${day.hotel} ${day.hotelZh} ${day.addressZh}`} /></div></section><section className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.11)] ring-1 ring-white/70" style={{ background: theme.card }}><SectionTitle kicker="Route" title="Main line" zh="今日主线" right={<Badge>{theme.emoji} {theme.label} · {theme.placeZh}</Badge>} /><div className="rounded-2xl p-3 text-sm font-semibold leading-6" style={{ background: theme.tint }}>{day.route}<br /><span className="text-neutral-500">{day.routeZh}</span></div><button onClick={() => setMapOpen(true)} className="mt-3 w-full rounded-2xl py-3 text-xs font-black text-white shadow-sm transition active:scale-95" style={{ background: theme.gradient }}>Open day map / 打开一天地图行程</button></section><MoodSwitch mood={mood} setMood={setMood} theme={theme} day={day} /><FoodPassport theme={theme} passport={passport} setPassport={setPassport} dayId={day.id} compact /><section className="rounded-[34px] p-4 shadow-[0_18px_56px_rgba(75,91,180,.11)] ring-1 ring-white/70" style={{ background: theme.card }}><SectionTitle kicker="Tiny missions" title="Tiny missions" zh="今日小任务" right={<Badge>Play / 好玩</Badge>} /><div className="space-y-2">{day.missions.map(([i, t, e, z]) => <div key={t} className="rounded-2xl p-3 text-sm leading-6" style={{ background: theme.tint }}><strong>{i} {t}</strong><br />{e}<br /><span className="text-neutral-500">{z}</span></div>)}</div></section><section className="grid grid-cols-2 gap-3"><button onClick={() => setTab("route")} className="rounded-[28px] p-4 text-left shadow-sm ring-1 ring-white/70 transition active:scale-95" style={{ background: theme.card }}><p className="text-xs font-bold text-neutral-500">Route</p><h3 className="mt-1 text-lg font-black">Loose route</h3><p className="mt-2 text-sm text-neutral-500">上午 / 下午 / 晚上</p></button><button onClick={() => setTab("go")} className="rounded-[28px] p-4 text-left text-white shadow-sm transition active:scale-95" style={{ background: theme.gradient }}><p className="text-xs font-bold text-white/70">Go</p><h3 className="mt-1 text-lg font-black">Quick jump</h3><p className="mt-2 text-sm text-white/80">导航 / 美食 / 景点</p></button><button onClick={() => setTab("culture")} className="col-span-2 rounded-[30px] p-4 text-left shadow-sm ring-1 ring-white/70 transition active:scale-95" style={{ background: theme.card }}><p className="text-xs font-bold text-neutral-500">Culture</p><h3 className="mt-1 text-lg font-black">Open culture notes</h3><p className="mt-2 text-sm text-neutral-500">文化科普 · 建筑 / 园林 / 水乡 / 茶</p></button></section></div>}
      {tab === "route" && <div className="space-y-3"><button onClick={() => setMapOpen(true)} className="w-full rounded-[28px] py-3 text-xs font-black text-white shadow-sm transition active:scale-95" style={{ background: theme.gradient }}>Open day map / 打开一天地图行程</button>{day.plan.map((s, i) => <RouteCard key={s.title} step={s} index={i} theme={theme} open={openStep === i} onToggle={() => setOpenStep(openStep === i ? -1 : i)} />)}</div>}
      {tab === "taste" && <div className="space-y-3"><FoodPassport theme={theme} passport={passport} setPassport={setPassport} dayId={day.id} />{day.food.map((f) => <FoodCard key={f.name} item={f} theme={theme} onOpen={setDetail} />)}<ReferenceCard refs={day.references} theme={theme} /></div>}
      {tab === "culture" && <CulturePage day={day} theme={theme} />}
      {tab === "go" && <div className="space-y-3"><JumpCard icon="🗺️" title="Day map itinerary" zh="一天地图行程" theme={theme} onOpen={() => setMapOpen(true)} note="See driving, train and walking segments in one popup." noteZh="把行车、高铁和步行段一次看清楚。" /><JumpCard icon="✨" title="Spot + Food Guide" zh="景点与美食详细介绍" theme={theme} onOpen={() => setDetail(guide)} /><JumpCard icon="🏛️" title="Culture notes" zh="文化科普页" theme={theme} onOpen={() => setTab("culture")} note="Read the cultural background before choosing a route." noteZh="先看文化背景，再决定怎么逛。" />{uniqueJumpCards([...getSmartJumps(day, mood), ...[["🏨", "Hotel anchor", "回酒店", `${day.hotel} ${day.hotelZh} ${day.addressZh}`], ...day.jumps].map(([icon, title, zh, query]) => ({ icon, title, zh, query }))]).map((item) => <JumpCard key={`${item.title}-${item.query || item.zh}`} {...item} theme={theme} />)}</div>}
    </main>
    <nav className="fixed bottom-0 left-1/2 z-40 w-full max-w-[430px] -translate-x-1/2 border-t border-white/60 px-3 py-3 backdrop-blur-2xl" style={{ background: theme.glass }}><div className="grid grid-cols-5 gap-1 rounded-[28px] bg-white/60 p-2 shadow-[0_20px_60px_rgba(72,89,190,.12)] ring-1 ring-white/80">{tabs.map(([id, en, zh]) => <button key={id} onClick={() => setTab(id)} className="rounded-2xl px-2 py-2 text-xs font-black transition active:scale-95" style={tab === id ? { background: theme.gradient, color: "white" } : { color: "#71717a" }}><span className="block">{en}</span><span className="block text-[10px] opacity-80">{zh}</span></button>)}</div></nav><DetailSheet item={detail} theme={theme} onClose={() => setDetail(null)} /><MapItinerarySheet day={mapOpen ? day : null} theme={theme} onClose={() => setMapOpen(false)} /></div></div>;
}
