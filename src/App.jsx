import React, { useMemo, useState } from 'react';

const photo = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1200`;

const photos = {
  bund: photo('Lujiazui Skyline (Night).jpg'),
  cathedral: photo('Saint-Ignatius cathedral of Shanghai.jpg'),
  yuyuan: photo('Shanghai - Yu Garden - 0004.jpg'),
  wuzhen: photo('Night in Wuzhen Xizha (20171231174337).jpg'),
  muxin: photo('Mu Xin Art Museum Wuzhen.jpg'),
  versionMuseum: photo('Overlook of the main building - Hangzhou National Archives 06.jpg'),
  liangzhu: photo('Liangzhu Museum, 2019-07-07 01.jpg'),
  faxi: photo('Faxi Temple in Hangzhou (Mahavira Hall).jpg'),
  canal: photo('Wulinmen, Beijing-Hangzhou Grand Canal.jpg'),
  bundFamily: 'https://ak-d.tripcdn.com/images/1mh5x12000rinwbcu3C6B_C_340_230_R5.jpg?proc=source%2Ftrip',
  liBaiCrab: 'https://res.klook.com/image/upload/w_750%2Ch_469%2Cc_fill%2Cq_85/activities/vfleykgwtgid3m9aucy4.webp',
  professorLee: 'https://ak-d.tripcdn.com/images/1A0u1f000001g9o3q7D93_D_410_590_R5.jpg?proc=autoorient',
  renheguan: 'https://youimg1.c-ctrip.com/target/100q0u000000j4ja834C6.jpg',
  yulanxiang: 'https://sghimages.shobserver.com/img/catch/2025/10/17/85c84101-ee5a-42ba-bd79-8222ad569be7.jpg',
};

const restaurants = {
  d25: [
    {
      name: 'Bund Family Banquet', zh: '外滩家宴', tag: '主推晚餐', area: 'The Bund / 外滩附近', image: photos.bundFamily,
      note: 'Main choice for the Bund night. Old-Shanghai flavor and a complete seated dinner.',
      noteZh: '外滩夜景当天主推，适合坐下来吃一顿较完整的老上海风味晚餐。',
      dishes: ['本帮红烧类', '时令本帮菜', '本帮冷菜'], map: '外滩家宴 上海 外滩'
    },
    {
      name: 'Li Bai Crab', zh: '李百蟹 / 李百蟹外滩江景餐厅', tag: '主备选', area: 'The Bund / 外滩附近', image: photos.liBaiCrab,
      note: 'Backup choice if the group wants crab or a river-view meal.',
      noteZh: '如果当天想吃蟹类或江景餐厅，可以作为外滩晚餐主备选。',
      dishes: ['蟹类菜', '蟹黄面/蟹粉面', '本帮菜'], map: '李百蟹 外滩 江景餐厅 上海'
    },
    {
      name: 'Other nearby references', zh: '其它附近参考', tag: '仅参考', area: 'Bund / Huangpu area · 外滩/黄浦区',
      note: 'Use only if the main choices are unavailable or another place is much closer.',
      noteZh: '只在主推餐厅不合适或其它店更顺路时参考。',
      dishes: ['遇外滩', '沪公馆·上海菜', '新荣记', '外滩家宴上海菜']
    }
  ],
  d26: [
    {
      name: 'Professor Lee', zh: 'Professor LEE（港汇 or K11）', tag: '徐家汇推荐', area: 'Xujiahui / K11 · 徐家汇/港汇或K11方向', image: photos.professorLee,
      note: 'Good lunch option if the group wants Korean food. Check queue before deciding.',
      noteZh: '如果想吃韩料，可作为徐家汇午餐选择；建议看排队情况再决定。',
      dishes: ['韩式烤肉', '部队锅', '冷面', '炸鸡'], map: 'Professor Lee 上海 港汇 K11 韩料'
    },
    {
      name: 'Renheguan', zh: '人和馆', tag: '徐家汇推荐', area: 'Xujiahui / central Shanghai · 徐家汇/市中心方向', image: photos.renheguan,
      note: 'A comfortable seated Jiangnan / local-style meal after Xujiahui.',
      noteZh: '适合徐家汇后坐下来吃一顿江浙/本帮风味正餐。',
      dishes: ['江浙菜', '红烧类', '河虾', '时令蔬菜'], map: '人和馆 上海 徐家汇'
    },
    {
      name: 'Magnolia Chamber', zh: '玉兰厢', tag: '豫园推荐', area: 'Yu Garden / 豫园附近', image: photos.yulanxiang,
      note: 'Main recommendation around Yu Garden, good after the garden visit.',
      noteZh: '豫园附近主推，适合豫园游览后或作为早晚餐。',
      dishes: ['本帮菜', '上海面食', '点心小吃', '时令菜'], map: '玉兰厢 上海 豫园'
    },
    {
      name: 'Other nearby references', zh: '其它附近参考', tag: '仅参考', area: 'Xujiahui / Yu Garden · 徐家汇/豫园周边',
      note: 'Use only if they are closer or have shorter queues than the main choices.',
      noteZh: '只有在距离更近或排队更短时，从参考名单里选。',
      dishes: ['豆库', '白玉兰传统小吃', '榛田熟成茶行', '南翔馒头店', '绿波廊', '上海老饭店']
    }
  ],
  d27: [
    {
      name: 'Xizha food reference list', zh: '乌镇西栅美食参考清单', tag: '当地参考', area: 'Inside Xizha / 西栅景区内',
      note: 'Use as an on-site search list. Choose according to queue, distance and opening hours.',
      noteZh: '作为现场搜索清单，根据排队、距离和营业情况选择。',
      dishes: ['书生羊肉面', '锦记糕点铺', '吴妈馄饨', '早茶客', '滋啦啦油煎铺', '舌尖葱包烩', '杯里杯烧饼铺', '默默的家', '茅老太臭豆腐', '通济酱粽店'],
      map: '乌镇西栅 美食 书生羊肉面 锦记糕点铺 吴妈馄饨'
    },
    {
      name: 'Recommended Wuzhen dishes', zh: '乌镇特色菜品方向', tag: '菜品方向', area: 'Inside Xizha / 西栅景区内',
      note: 'Local food directions rather than fixed restaurants.', noteZh: '当地菜品方向，不固定餐厅。',
      dishes: ['乌镇羊肉面', '定胜糕', '姑嫂饼', '萝卜丝饼', '清蒸白水鱼', '酱鸭', '红烧羊肉']
    }
  ],
  d28: [{ name: 'Hangzhou cuisine direction', zh: '杭帮菜方向', tag: '当地特色', area: 'Liangzhu / Binjiang / West Lake areas', note: 'Choose the restaurant on the day based on location and queue.', noteZh: '具体餐厅到当天根据位置和排队情况选择。', dishes: ['东坡肉', '龙井虾仁', '西湖醋鱼', '宋嫂鱼羹', '片儿川'] }],
  d29: [{ name: 'Hangzhou light meals and tea break', zh: '杭州轻餐与茶歇方向', tag: '当地特色', area: 'Faxi / Grand Canal / Binjiang', note: 'Flexible local choices based on the actual route.', noteZh: '根据当天路线作为灵活选择，不固定餐厅。', dishes: ['素面', '片儿川', '桂花糯米藕', '茶饮/本地甜品'] }]
};

const tripDays = [
  {
    id: 'd25', date: 'Day 1 · 25', city: 'Shanghai', cityZh: '上海', title: 'Arrival + Bund Night', titleZh: '抵达上海 · 外滩夜景', hero: photos.bund,
    hotel: 'Courtyard by Marriott Shanghai Central / 上海浦西万怡酒店', address: '338 Hengfeng Road, Jing’an District / 静安区恒丰路338号', hotelMap: '上海浦西万怡酒店 恒丰路338号',
    routeSummary: 'Hotel 酒店 → Dinner 晚餐 → The Bund 外滩 → Hotel 酒店',
    schedule: [
      { period: 'Afternoon / 下午', time: '14:00–16:30', title: 'Check in + short rest', titleZh: '入住 + 短暂休息', route: 'Hotel → Rest', routeZh: '酒店 → 休息', transport: 'Hotel area: walk or short taxi 0–10 min / 酒店周边步行或短打车0–10分钟', note: 'Keep the arrival day light before going out for dinner.', noteZh: '抵达日保持轻松，先休息，再出门吃晚餐。' },
      { period: 'Evening / 晚上', time: '17:30–21:00', title: 'Bund dinner + night view', titleZh: '外滩晚餐 + 夜景', route: 'Hotel → Bund dinner → The Bund → Hotel', routeZh: '酒店 → 外滩附近晚餐 → 外滩夜景 → 回酒店', transport: 'Taxi 20–35 min each way; metro about 30–45 min including walking. / 打车单程约20–35分钟；地铁含步行约30–45分钟。', note: 'Keep the evening within the Bund / Huangpu River area.', noteZh: '晚上的活动尽量控制在外滩/黄浦江沿线。' }
    ],
    routeNotes: [
      { title: 'Hotel → The Bund', titleZh: '酒店 → 外滩', items: ['Taxi: reserve 20–35 min at night. / 打车：晚上建议预留20–35分钟。', 'Metro: Hanzhong Road Station → Line 1 to People’s Square → Line 2 to East Nanjing Road → walk to the Bund. / 地铁：汉中路站→1号线人民广场→换2号线南京东路→步行到外滩。', 'Suggested order: dinner near the Bund first, then walk to the riverfront for photos. / 建议顺序：先在外滩附近吃晚餐，再步行到江边拍照。'] }
    ],
    backup: ['If the group arrives early: add a short Suzhou Creek walk. / 如果到得早：可加一小段苏州河。', 'Simplest version: dinner + Bund only. / 最轻松版本：只保留晚餐和外滩。']
  },
  {
    id: 'd26', date: 'Day 2 · 26', city: 'Shanghai', cityZh: '上海', title: 'Xujiahui + Yu Garden', titleZh: '徐家汇 · 豫园 · 上海美食', hero: photos.cathedral,
    hotel: 'Courtyard by Marriott Shanghai Central / 上海浦西万怡酒店', address: '338 Hengfeng Road, Jing’an District / 静安区恒丰路338号', hotelMap: '上海浦西万怡酒店 恒丰路338号',
    routeSummary: 'Hotel 酒店 → Xujiahui Cathedral 徐家汇天主堂 → Xujiahui Library 徐家汇书院 → Lunch 午餐 → Yu Garden 豫园 → Dinner 晚餐 → Hotel 酒店',
    schedule: [
      { period: 'Morning / 上午', time: '10:00–12:00', title: 'Xujiahui Cathedral + Library', titleZh: '徐家汇天主堂 + 徐家汇书院', route: 'Hotel → Xujiahui Cathedral → Xujiahui Library', routeZh: '酒店 → 徐家汇天主堂 → 徐家汇书院', transport: 'Taxi 30–40 min; metro 35–45 min. / 打车约30–40分钟；地铁约35–45分钟。', note: 'The two Xujiahui stops are close to each other.', noteZh: '徐家汇两个点距离集中，适合上午集中游览。' },
      { period: 'Noon / 中午', time: '12:00–14:00', title: 'Lunch near Xujiahui', titleZh: '徐家汇附近午餐', route: 'Xujiahui Library → Lunch → Rest', routeZh: '徐家汇书院 → 午餐 → 休息', transport: 'Walk or short taxi 5–20 min depending on restaurant. / 视餐厅位置步行或短打车约5–20分钟。', note: 'Choose Professor Lee or Renheguan according to queue and preference.', noteZh: '根据排队情况和口味，在Professor LEE和人和馆之间选择。' },
      { period: 'Afternoon / 下午', time: '14:30–16:30', title: 'Yu Garden', titleZh: '豫园', route: 'Lunch → Yu Garden / Old City Bazaar', routeZh: '午餐 → 豫园/城隍庙区域', transport: 'Taxi 25–40 min from Xujiahui lunch area. / 从徐家汇午餐点出发，打车约25–40分钟。', note: 'Classic Chinese-style stop.', noteZh: '这是中式视觉重点，控制游览范围。' },
      { period: 'Evening / 晚上', time: '17:30–20:00', title: 'Dinner near Yu Garden', titleZh: '豫园附近晚餐', route: 'Yu Garden → Magnolia Chamber / nearby dinner → Hotel', routeZh: '豫园 → 玉兰厢/附近晚餐 → 回酒店', transport: 'Taxi 15–30 min back to hotel. / 回酒店打车约15–30分钟。', note: 'Magnolia Chamber is the main Yu Garden-area choice.', noteZh: '豫园附近主推玉兰厢。' }
    ],
    routeNotes: [
      { title: 'Hotel → Xujiahui', titleZh: '酒店 → 徐家汇', items: ['Taxi: reserve 30–40 min. / 打车预留30–40分钟。', 'Metro: Hanzhong Road Station → Line 1 → Xujiahui Station, then walk. / 地铁：汉中路站→1号线→徐家汇站，再步行。'] },
      { title: 'Xujiahui → Yu Garden', titleZh: '徐家汇 → 豫园', items: ['Taxi: reserve 25–40 min depending on traffic. / 打车根据路况预留25–40分钟。', 'Yu Garden dinner should stay nearby; do not cross the city again after this stop. / 豫园后的晚餐尽量留在附近，不建议再跨区。'] }
    ],
    backup: ['Backup: Shanghai Expo / China Pavilion. / 备选：上海世博园/中国馆。', 'If the schedule feels full: keep Xujiahui + dinner, move Yu Garden to optional. / 如果行程偏满：保留徐家汇和晚餐，豫园改备选。']
  },
  {
    id: 'd27', date: 'Day 3 · 27', city: 'Wuzhen', cityZh: '乌镇', title: 'Shanghai → Wuzhen', titleZh: '上海转场乌镇 · 西栅慢游', hero: photos.wuzhen,
    hotel: "Passage d'Eau Hotel / 乌镇西栅景区内酒店", address: 'Xizha Scenic Area, Wuzhen / 乌镇西栅景区内', hotelMap: '水巷驿 乌镇西栅',
    routeSummary: 'Hotel 酒店 → Shanghai South 上海南 → Huzhou Nanxun 湖州南浔 → Xizha 西栅 → Muxin Art Museum 木心美术馆 → Night View 夜景',
    schedule: [
      { period: 'Transfer / 转场', time: '08:30–14:30', title: 'Shanghai to Wuzhen transfer', titleZh: '上海 → 乌镇转场', route: 'Hotel → Shanghai South Station → Huzhou Nanxun Station → Xizha hotel', routeZh: '酒店 → 上海南站 → 湖州南浔站 → 西栅酒店', transport: 'Taxi + train + taxi. Reference total: about 2h11min plus waiting/check-in buffer. / 打车+高铁+打车，参考总时长约2小时11分钟，另加候车和入住缓冲。', note: 'Use the Shanghai South Station plan and reserve enough time before the train.', noteZh: '采用上海南站方案，高铁前需要预留足够候车时间。' },
      { period: 'Afternoon / 下午', time: '15:00–17:00', title: 'Xizha slow walk + Muxin Art Museum', titleZh: '西栅慢逛 + 木心美术馆', route: 'Xizha Service Center → canal streets → bridges → Muxin Art Museum', routeZh: '西栅服务中心 → 水巷 → 桥区 → 木心美术馆', transport: 'Inside Xizha: walk or scenic shuttle 5–20 min between stops. / 西栅内部步行或景区车，点位间约5–20分钟。', note: 'Use the Xizha walking route as a reference.', noteZh: '以西栅步行路线为参考，实际节奏根据体力和人流调整。' },
      { period: 'Evening / 晚上', time: '17:30–20:30', title: 'Dinner + Xizha night view', titleZh: '晚餐 + 西栅夜景', route: 'Dinner → optional boat ride → night-view walk → hotel', routeZh: '晚餐 → 可选摇橹船 → 夜景慢走 → 回酒店', transport: 'Walk / boat inside scenic area 5–25 min; boat adds 20–40 min plus queue. / 景区内步行/坐船约5–25分钟；坐船另加20–40分钟及排队时间。', note: 'The night view is the main focus of Wuzhen.', noteZh: '夜景是乌镇重点，晚上留足拍照和慢走时间。' }
    ],
    routeNotes: [
      { title: 'Shanghai → Wuzhen transfer', titleZh: '上海 → 乌镇转场', items: ['Hotel → Shanghai South Station by taxi: about 30 min, around ¥43. / 酒店打车到上海南站：约30分钟，约43元。', 'Shanghai South → Huzhou Nanxun by train: about 43 min, ticket from about ¥58. / 上海南到湖州南浔：高铁约43分钟，票价58元起。', 'Huzhou Nanxun → Xizha by taxi: about 23 min, around ¥54. / 湖州南浔到西栅：打车约23分钟，约54元。', 'Arrive at Shanghai South Station at least 45 min before departure. / 建议至少提前45分钟到上海南站。'] },
      { title: 'Xizha walking route', titleZh: '西栅步行路线', items: ['Xizha Service Center → Water Market → Wuzhen Post Office → bridge/canal streets → Muxin Art Museum → night-view area. / 西栅服务中心→水上集市→乌镇邮局→桥区/水巷→木心美术馆→夜景区域。', 'Optional stops: Water Theater, Qiaoliqiao, Zhaoming Academy, Grass and Wood Dye Workshop. / 可选点：水剧场、桥里桥、昭明书院、草木染坊。'] }
    ],
    backup: ['Boat ride is optional. / 摇橹船作为可选项。', 'East Gate is not included in the main route. / 东栅不放主线。']
  },
  {
    id: 'd28', date: 'Day 4 · 28', city: 'Hangzhou', cityZh: '杭州', title: 'Version Museum + Liangzhu', titleZh: '杭州国家版本馆 · 良渚文化村', hero: photos.versionMuseum,
    hotel: 'Four Points by Sheraton Hangzhou, Binjiang / 杭州龙禧福朋喜来登酒店', address: '868 Dongxin Avenue, Binjiang District / 滨江区东信大道868号', hotelMap: '杭州龙禧福朋喜来登酒店 滨江区东信大道868号',
    routeSummary: 'Hotel 酒店 → National Archives 版本馆 → Lunch 午餐 → Liangzhu Cultural Village 良渚文化村 → Hotel 酒店',
    schedule: [
      { period: 'Morning / 上午', time: '09:30–12:00', title: 'National Archives of Publications and Culture', titleZh: '杭州国家版本馆', route: 'Hotel → Hangzhou National Archives', routeZh: '酒店 → 杭州国家版本馆', transport: 'Taxi 45–65 min; public transport is transfer-heavy. / 打车约45–65分钟；公共交通换乘较多。', note: 'Check reservation and entry rules before departure.', noteZh: '出发前确认预约和入场规则。' },
      { period: 'Noon / 中午', time: '12:00–14:00', title: 'Lunch + transfer buffer', titleZh: '午餐 + 转场缓冲', route: 'Lunch near Version Museum or on the way to Liangzhu', routeZh: '版本馆附近或去良渚路上吃午餐', transport: 'Taxi 15–35 min depending on restaurant. / 视餐厅位置打车约15–35分钟。', note: 'Use lunch as a transfer buffer.', noteZh: '这天转场较长，午餐也作为缓冲时间。' },
      { period: 'Afternoon / 下午', time: '14:00–16:30', title: 'Liangzhu Cultural Village', titleZh: '良渚文化村', route: 'Lunch → Liangzhu Cultural Village → Hotel', routeZh: '午餐 → 良渚文化村 → 回酒店', transport: 'Taxi 15–30 min from Version Museum area; return to hotel 50–75 min. / 从版本馆一带打车约15–30分钟；回酒店约50–75分钟。', note: 'Treat Liangzhu as one cultural-area visit.', noteZh: '把良渚作为一个文化片区游览。' },
      { period: 'Evening / 晚上', time: '18:00–20:00', title: 'Dinner near hotel', titleZh: '酒店附近晚餐', route: 'Hotel area dinner → Rest', routeZh: '酒店附近晚餐 → 休息', transport: 'Walk or short taxi 5–15 min. / 步行或短打车约5–15分钟。', note: 'Keep dinner close because this day has more travel time.', noteZh: '这天路程较长，晚餐建议留在酒店附近。' }
    ],
    backup: ['If the Version Museum reservation is difficult, swap it with Faxi Temple. / 如果版本馆预约不方便，可和法喜寺顺序互换。', 'If Liangzhu feels too far, replace it with a Grand Canal evening walk. / 如果良渚觉得太远，可换成京杭大运河轻松散步。']
  },
  {
    id: 'd29', date: 'Day 5 · 29', city: 'Hangzhou', cityZh: '杭州', title: 'Faxi Temple + Grand Canal', titleZh: '法喜寺 · 京杭大运河', hero: photos.faxi,
    hotel: 'Four Points by Sheraton Hangzhou, Binjiang / 杭州龙禧福朋喜来登酒店', address: '868 Dongxin Avenue, Binjiang District / 滨江区东信大道868号', hotelMap: '杭州龙禧福朋喜来登酒店 滨江区东信大道868号',
    routeSummary: 'Hotel 酒店 → Faxi Temple 法喜寺 → Lunch 午餐 → Grand Canal 京杭大运河 → Hotel 酒店',
    schedule: [
      { period: 'Morning / 上午', time: '09:30–12:00', title: 'Faxi Temple', titleZh: '法喜寺', route: 'Hotel → Faxi Temple', routeZh: '酒店 → 法喜寺', transport: 'Taxi 35–55 min; public transport + taxi about 60–80 min. / 打车约35–55分钟；公共交通+打车约60–80分钟。', note: 'Go earlier for a calmer visit.', noteZh: '建议上午早点去，重点看寺庙。' },
      { period: 'Noon / 中午', time: '12:00–14:00', title: 'Lunch + tea break', titleZh: '午餐 + 茶歇', route: 'Faxi Temple → Lunch / tea break', routeZh: '法喜寺 → 午餐/茶歇', transport: 'Walk or taxi 10–25 min around West Lake / Faxi area. / 西湖/法喜寺周边步行或打车约10–25分钟。', note: 'Keep the final day relaxed.', noteZh: '最后一天保持轻松。' },
      { period: 'Afternoon / 下午', time: '15:00–17:00', title: 'Beijing–Hangzhou Grand Canal', titleZh: '京杭大运河', route: 'Lunch → Grand Canal / Wulinmen area → Hotel', routeZh: '午餐 → 京杭大运河/武林门一带 → 回酒店', transport: 'Taxi 25–45 min from West Lake/Faxi area; return to hotel 25–45 min. / 从西湖/法喜寺方向打车约25–45分钟；回酒店约25–45分钟。', note: 'Relaxed final citywalk.', noteZh: '适合作为收尾的轻松城市漫步。' },
      { period: 'Evening / 晚上', time: '18:00–20:00', title: 'Dinner + packing', titleZh: '晚餐 + 整理行李', route: 'Hotel area dinner → Pack', routeZh: '酒店附近晚餐 → 整理行李', transport: 'Walk or short taxi 5–15 min. / 步行或短打车约5–15分钟。', note: 'Keep the final evening simple and close to the hotel.', noteZh: '最后一晚保持简单，尽量留在酒店附近。' }
    ],
    backup: ['If Faxi Temple is crowded, switch the morning to the Grand Canal and make Faxi optional. / 如果法喜寺人多，上午先去运河，法喜寺改可选。', 'If the group wants tea instead of canal, use Longjing tea area as backup. / 如果更想喝茶，可用龙井茶区替换运河。']
  }
];

const spots = [
  { city: 'Shanghai', name: 'The Bund at Night', zh: '外滩夜景', image: photos.bund, tag: 'Must', type: 'View', note: 'First-night skyline and river view.' },
  { city: 'Shanghai', name: 'Xujiahui Cathedral', zh: '徐家汇天主堂', image: photos.cathedral, tag: 'Photo', type: 'Culture', note: 'Gothic architecture, paired with Xujiahui Library.' },
  { city: 'Shanghai', name: 'Yu Garden', zh: '豫园', image: photos.yuyuan, tag: 'Classic', type: 'Garden', note: 'Chinese-style garden and old-city atmosphere.' },
  { city: 'Wuzhen', name: 'Xizha', zh: '西栅', image: photos.wuzhen, tag: 'Main', type: 'Water town', note: 'Canals, bridges and night view.' },
  { city: 'Wuzhen', name: 'Muxin Art Museum', zh: '木心美术馆', image: photos.muxin, tag: 'Culture', type: 'Museum', note: 'Quiet cultural stop inside Wuzhen.' },
  { city: 'Hangzhou', name: 'National Archives', zh: '杭州国家版本馆', image: photos.versionMuseum, tag: 'Preferred', type: 'Architecture', note: 'Chinese aesthetics and architecture.' },
  { city: 'Hangzhou', name: 'Liangzhu Cultural Village', zh: '良渚文化村', image: photos.liangzhu, tag: 'Preferred', type: 'Culture', note: 'Cultural-area visit.' },
  { city: 'Hangzhou', name: 'Faxi Temple', zh: '法喜寺', image: photos.faxi, tag: 'Preferred', type: 'Temple', note: 'Temple stop with a calmer mood.' },
  { city: 'Hangzhou', name: 'Grand Canal', zh: '京杭大运河', image: photos.canal, tag: 'Preferred', type: 'Citywalk', note: 'Relaxed final walk.' },
];

const cityOptions = ['All', 'Shanghai', 'Wuzhen', 'Hangzhou'];
const typeOptions = ['All', 'Culture', 'Garden', 'Water town', 'Museum', 'Architecture', 'Temple', 'Citywalk'];

function mapLinks(query) {
  const q = encodeURIComponent(query);
  const myLocation = encodeURIComponent('我的位置');
  return {
    amap: `https://uri.amap.com/search?keyword=${q}&callnative=1`,
    baidu: `https://api.map.baidu.com/direction?origin=${myLocation}&destination=${q}&mode=driving&region=${encodeURIComponent('全国')}&output=html&src=jiangnan-trip`,
    apple: `https://maps.apple.com/?daddr=${q}&dirflg=d`,
    google: `https://www.google.com/maps/dir/?api=1&destination=${q}&travelmode=driving`,
  };
}

function Badge({ children, tone = 'neutral' }) {
  const colors = { blue: 'bg-blue-50 text-blue-700', green: 'bg-emerald-50 text-emerald-700', purple: 'bg-purple-50 text-purple-700', orange: 'bg-amber-50 text-amber-800', neutral: 'bg-neutral-100 text-neutral-700', black: 'bg-neutral-950 text-white' };
  return <span className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-[11px] font-semibold ${colors[tone]}`}>{children}</span>;
}

function MapButtons({ query }) {
  const links = mapLinks(query);
  return <div className="grid grid-cols-2 gap-2"><a href={links.amap} target="_blank" rel="noreferrer" className="rounded-2xl bg-neutral-950 py-2.5 text-center text-xs font-semibold text-white">高德导航</a><a href={links.baidu} target="_blank" rel="noreferrer" className="rounded-2xl bg-neutral-950 py-2.5 text-center text-xs font-semibold text-white">百度驾车</a><a href={links.apple} target="_blank" rel="noreferrer" className="rounded-2xl bg-neutral-100 py-2.5 text-center text-xs font-semibold text-neutral-800">Apple</a><a href={links.google} target="_blank" rel="noreferrer" className="rounded-2xl bg-neutral-100 py-2.5 text-center text-xs font-semibold text-neutral-800">Google</a></div>;
}

function SectionTitle({ kicker, title, right }) { return <div className="mb-3 flex items-end justify-between gap-3"><div className="min-w-0"><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">{kicker}</p><h2 className="mt-1 text-[22px] font-black leading-tight tracking-tight">{title}</h2></div>{right}</div>; }
function InfoBlock({ title, children, tone = 'neutral' }) { const toneClass = tone === 'blue' ? 'bg-blue-50 text-blue-950' : tone === 'amber' ? 'bg-amber-50 text-amber-950' : 'bg-neutral-50 text-neutral-800'; return <div className={`rounded-2xl p-3 text-xs leading-5 ${toneClass}`}>{title && <div className="mb-1 font-black">{title}</div>}{children}</div>; }

function ImageCard({ src, title, children }) { const [bad, setBad] = useState(false); return <div className="relative h-[260px] overflow-hidden rounded-[32px] bg-neutral-300">{!bad && <img src={src} alt={title} loading="lazy" onError={() => setBad(true)} className="absolute inset-0 h-full w-full object-cover" />}{bad && <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-400" />}<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" /><div className="relative flex h-full flex-col justify-end p-5 text-white">{children}</div></div>; }

function RouteNoteCard({ note }) { return <div className="rounded-[26px] bg-white p-4 shadow-sm"><h3 className="text-base font-black leading-tight">{note.title}</h3><p className="mt-1 text-sm font-semibold text-neutral-500">{note.titleZh}</p><ul className="mt-3 space-y-2 text-sm leading-6 text-neutral-700">{note.items.map((item) => <li key={item} className="rounded-2xl bg-neutral-50 p-3">{item}</li>)}</ul></div>; }

function ScheduleCard({ item }) { return <article className="rounded-[30px] bg-white p-4 shadow-sm"><div className="mb-3 flex items-start gap-3"><div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-neutral-950 text-center text-white"><span className="text-[10px] font-bold leading-tight">{item.period.split('/')[0].trim()}</span><span className="mt-0.5 text-xs font-black leading-tight">{item.period.includes('/') ? item.period.split('/')[1].trim() : ''}</span></div><div className="min-w-0 flex-1"><p className="text-xs font-bold text-neutral-500">{item.time}</p><h3 className="mt-1 text-lg font-black leading-tight tracking-tight">{item.title}</h3><p className="mt-0.5 text-sm font-semibold text-neutral-500">{item.titleZh}</p></div></div><InfoBlock title="Route / 路线">{item.route}<br />{item.routeZh}</InfoBlock><div className="mt-2"><InfoBlock title="Transport / 交通" tone="blue">{item.transport}</InfoBlock></div><p className="mt-3 text-sm leading-6 text-neutral-700">{item.note}</p><p className="mt-1 text-sm leading-6 text-neutral-500">{item.noteZh}</p></article>; }

function RestaurantCard({ item }) { return <div className="overflow-hidden rounded-[26px] bg-neutral-50">{item.image && <img src={item.image} alt={item.zh || item.name} loading="lazy" className="h-44 w-full object-cover" />}<div className="p-4"><div className="mb-2 flex items-start justify-between gap-3"><div className="min-w-0"><h3 className="text-base font-black leading-tight">{item.name}</h3><p className="mt-0.5 text-sm font-semibold text-neutral-500">{item.zh}</p></div><Badge tone="neutral">{item.tag}</Badge></div><p className="text-xs font-semibold text-neutral-500">{item.area}</p><p className="mt-2 text-sm leading-6 text-neutral-700">{item.note}</p><p className="mt-1 text-sm leading-6 text-neutral-500">{item.noteZh}</p><div className="mt-3 rounded-2xl bg-white p-3 text-xs leading-5 text-neutral-700"><strong>Recommended / 推荐：</strong><ul className="mt-1 list-disc space-y-1 pl-4">{item.dishes.map((dish) => <li key={dish}>{dish}</li>)}</ul></div>{item.map && item.tag !== '仅参考' && <div className="mt-3"><MapButtons query={item.map} /></div>}</div></div>; }

export default function JiangnanTravelGuideApp() {
  const [selectedDayId, setSelectedDayId] = useState('d25');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const selectedDay = tripDays.find((d) => d.id === selectedDayId) || tripDays[0];
  const filteredSpots = useMemo(() => spots.filter((spot) => (selectedCity === 'All' || spot.city === selectedCity) && (selectedType === 'All' || spot.type === selectedType)), [selectedCity, selectedType]);
  return <div className="min-h-screen bg-neutral-200 text-neutral-950"><div className="mx-auto min-h-screen max-w-[430px] bg-[#f7f7f5] shadow-2xl"><header className="sticky top-0 z-30 border-b border-neutral-200/70 bg-[#f7f7f5]/90 px-5 pb-3 pt-5 backdrop-blur-xl"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">5 days · main route + flexible meals</p><h1 className="mt-1 text-[28px] font-black leading-tight tracking-tight">Jiangnan Trip</h1><p className="mt-1 text-sm font-medium text-neutral-500">中英双语 · 早中晚路线 · 打车/地铁参考</p></div><div className="rounded-full bg-white px-3 py-2 text-sm font-black shadow-sm">江南</div></div><div className="mt-4 flex gap-2 overflow-x-auto pb-1">{tripDays.map((day) => <button key={day.id} onClick={() => setSelectedDayId(day.id)} className={selectedDayId === day.id ? 'shrink-0 rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white' : 'shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm'}>{day.date}</button>)}</div></header><main className="space-y-5 px-5 pb-10 pt-5"><section><ImageCard src={selectedDay.hero} title={selectedDay.title}><Badge tone={selectedDay.city === 'Wuzhen' ? 'green' : selectedDay.city === 'Hangzhou' ? 'purple' : 'blue'}>{selectedDay.city} · {selectedDay.cityZh}</Badge><h2 className="mt-3 text-3xl font-black leading-tight tracking-tight">{selectedDay.title}</h2><p className="mt-1 text-lg font-semibold text-white/90">{selectedDay.titleZh}</p><p className="mt-2 text-sm leading-6 text-white/90">{selectedDay.routeSummary}</p></ImageCard></section><section className="rounded-[30px] bg-white p-4 shadow-sm"><SectionTitle kicker="Hotel" title="酒店与起点" /><p className="text-sm font-bold leading-6 text-neutral-900">{selectedDay.hotel}</p><p className="mt-1 text-sm leading-6 text-neutral-500">{selectedDay.address}</p><div className="mt-3"><MapButtons query={selectedDay.hotelMap} /></div></section><section className="rounded-[30px] bg-white p-4 shadow-sm"><SectionTitle kicker="Overview" title="今日主线" right={<Badge tone="black">soft pace</Badge>} /><div className="rounded-2xl bg-neutral-50 p-3 text-sm font-semibold leading-6 text-neutral-800">{selectedDay.routeSummary}</div></section><section className="space-y-3"><SectionTitle kicker="Morning · Noon · Evening" title="早中晚安排" right={<Badge tone="orange">relaxed</Badge>} />{selectedDay.schedule.map((item) => <ScheduleCard key={`${selectedDay.id}-${item.time}-${item.title}`} item={item} />)}</section>{selectedDay.routeNotes && <section className="space-y-3"><SectionTitle kicker="Key route" title="关键路线" />{selectedDay.routeNotes.map((note) => <RouteNoteCard key={note.title} note={note} />)}</section>}<section className="rounded-[30px] bg-white p-4 shadow-sm"><SectionTitle kicker="Food" title={selectedDay.city === 'Shanghai' ? '餐厅推荐' : '当地美食参考'} right={<Badge tone="orange">Food</Badge>} /><p className="mb-3 text-sm leading-6 text-neutral-600">主推项优先考虑；当天根据排队、位置和大家状态调整。Restaurants are references, not fixed bookings.</p><div className="space-y-3">{(restaurants[selectedDay.id] || []).map((item) => <RestaurantCard key={item.name} item={item} />)}</div></section><section className="rounded-[30px] bg-white p-4 shadow-sm"><SectionTitle kicker="Backup" title="备选方案" right={<Badge>flexible</Badge>} /><div className="space-y-2">{selectedDay.backup.map((item) => <div key={item} className="rounded-2xl bg-neutral-50 p-3 text-sm leading-6 text-neutral-700">{item}</div>)}</div></section><section><SectionTitle kicker="More choices" title="更多点位" /><div className="mb-3 flex gap-2 overflow-x-auto pb-1">{cityOptions.map((city) => <button key={city} onClick={() => setSelectedCity(city)} className={selectedCity === city ? 'shrink-0 rounded-full bg-neutral-950 px-4 py-2 text-xs font-semibold text-white' : 'shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm'}>{city}</button>)}</div><div className="mb-3 flex gap-2 overflow-x-auto pb-1">{typeOptions.map((type) => <button key={type} onClick={() => setSelectedType(type)} className={selectedType === type ? 'shrink-0 rounded-full bg-neutral-950 px-4 py-2 text-xs font-semibold text-white' : 'shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm'}>{type}</button>)}</div><div className="space-y-4">{filteredSpots.map((spot) => <article key={`${spot.city}-${spot.name}`} className="overflow-hidden rounded-[30px] bg-white shadow-sm"><img src={spot.image} alt={spot.name} loading="lazy" className="h-44 w-full object-cover" /><div className="p-4"><div className="mb-2 flex items-start justify-between gap-3"><div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">{spot.city}</p><h3 className="text-xl font-black leading-tight">{spot.name}</h3><p className="text-sm font-semibold text-neutral-500">{spot.zh}</p></div><Badge tone={spot.city === 'Wuzhen' ? 'green' : spot.city === 'Hangzhou' ? 'purple' : 'blue'}>{spot.tag}</Badge></div><p className="text-sm leading-6 text-neutral-700">{spot.note}</p></div></article>)}</div></section></main></div></div>;
}
