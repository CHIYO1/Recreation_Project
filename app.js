// app.js
App({

  //存放店铺数据的字典
  store:{
    Morning_Tea:[
      {
        id:1,
        name:"蒸武门(桥南旗舰店)",
        score:9.0,
        cost:50,
        image:"/image/Morning_Tea/1.png"
      },
      {
        id:2,
        name:"广式茶点(新村店)",
        score:8.4,
        cost:41,
        image:"/image/Morning_Tea/2.png"
      },
      {
        id:3,
        name:"点都德",
        score:9.0,
        cost:82,
        image:"/image/Morning_Tea/3.png"
      },
      {
        id:4,
        name:"聚福楼",
        score:8.9,
        cost:82,
        image:"/image/Morning_Tea/4.png"
      },
      {
        id:5,
        name:"迎点广式点心",
        score:9.0,
        cost:59,
        image:"/image/Morning_Tea/5.png"
      },
      {
        id:6,
        name:"广式茶点(西塱店)",
        score:9.0,
        cost:61,
        image:"/image/Morning_Tea/6.png"
      },
      {
        id:7,
        name:"点都德(南岗店) ",
        score:8.8,
        cost:86,
        image:"/image/Morning_Tea/7.png"
      },
      {
        id:8,
        name:"点都德(南沙环宇城店)",
        score:8.3,
        cost:77,
        image:"/image/Morning_Tea/8.png"
      },
      {
        id:9,
        name:"冠盛尚好酒家",
        score:9.1,
        cost:82,
        image:"/image/Morning_Tea/9.png"
      },
      {
        id:10,
        name:"蔡澜港式点心",
        score:9.1,
        cost:80,
        image:"/image/Morning_Tea/10.png"
      },
      {
        id:11,
        name:"子曰禮·茶居",
        score:9.9,
        cost:50,
        image:"/image/Morning_Tea/11.png"
      },
      {
        id:12,
        name:"广式茶点(金福星店)",
        score:8.8,
        cost:51,
        image:"/image/Morning_Tea/12.png"
      },

    ],
    siroin:[
      {
        id:1,
        name:"犇料牛老广炭炉牛杂牛腩",
        score:7.0,
        cost:22,
        image:"/image/siroin/1.png"
      },
      {
        id:2,
        name:"肥姨牛腩档(大石店)",
        score:7.6,
        cost:31,
        image:"/image/siroin/2.png"
      },
      {
        id:3,
        name:"天一牛腩粉",
        score:7.0,
        cost:68,
        image:"/image/siroin/3.png"
      },
      {
        id:4,
        name:"西关牛杂（文昌南店)",
        score:7.3,
        cost:19,
        image:"/image/siroin/4.png"
      },
      {
        id:5,
        name:"牛楠楠(骏壹万邦店)",
        score:8.0,
        cost:53,
        image:"/image/siroin/5.png"
      },
      {
        id:6,
        name:"牛鲜生化州牛杂",
        score:8.0,
        cost:52,
        image:"/image/siroin/6.png"
      },
      {
        id:7,
        name:"牛小灶牛杂煲",
        score:8.6,
        cost:32,
        image:"/image/siroin/7.png"
      },
      {
        id:8,
        name:"荣光牛杂牛腩粉面",
        score:7.0,
        cost:69,
        image:"/image/siroin/8.png"
      },
      {
        id:9,
        name:"司富牛腩火锅(大华店)",
        score:7.7,
        cost:25,
        image:"/image/siroin/9.png"
      },
      {
        id:10,
        name:"诏鑫号牛腩牛杂",
        score:6.8,
        cost:15,
        image:"/image/siroin/10.png"
      },
      {
        id:11,
        name:"辛会牛腩",
        score:7.2,
        cost:13,
        image:"/image/siroin/11.png"
      },
      {
        id:12,
        name:"宜姐牛杂（盘福路店)",
        score:7.9,
        cost:71,
        image:"/image/siroin/12.png"
      }
    ],
    wax:[
      {
        id:1,
        name:"荔博园果木烧鹅",
        score:8.2,
        cost:76,
        image:"/image/wax/1.png"
      },
      {
        id:2,
        name:"陶陶居酒家",
        score:8.3,
        cost:111,
        image:"/image/wax/2.png"
      },  
      {
        id:3,
        name:"果木烧鹅(从化店)",
        score:8.2,
        cost:76,
        image:"/image/wax/3.png"
      },
      {
        id:4,
        name:"锦记烧腊",
        score:9.0,
        cost:39,
        image:"/image/wax/4.png"
      },
      {
        id:5,
        name:"陶陶居酒家",
        score:8.9,
        cost:108,
        image:"/image/wax/5.png"
      },
      {
        id:6,
        name:"锦堂春想·广州粤菜",
        score:8.9,
        cost:179,
        image:"/image/wax/6.png"
      },
      {
        id:7,
        name:"永兴烧腊",
        score:8.3,
        cost:97,
        image:"/image/wax/7.png"
      },
      {
        id:8,
        name:"大凼烧鹅",
        score:8.4,
        cost:18,
        image:"/image/wax/8.png"
      },
      {
        id:9,
        name:"通记深井烧鹅海鲜大排档",
        score:7.8,
        cost:109,
        image:"/image/wax/9.png"
      },
      {
        id:10,
        name:"小炳胜(天环店)",
        score:8.6,
        cost:151,
        image:"/image/wax/10.png"
      },
      {
        id:11,
        name:"港兴烧腊(永泰店)",
        score:8.5,
        cost:18,
        image:"/image/wax/11.png"
      },
      {
        id:12,
        name:"旺角烧腊(翠华街店)",
        score:7.4,
        cost:73,
        image:"/image/wax/12.png"
      }
    ]
  },

  //存放店铺详情的字典
  store_detail:{
    Morning_Tea:[
      {
        id:1,
        name:"蒸武门·广式茶点(桥南旗舰店)",
        taste_score:9.0,
        environment_score:9.1,
        serve_score:9.1,
        phone:"18102602982",
        address:"亚运大道1号永旺梦乐城",
        image:"/image/Morning_Tea/1.png",
        link:"https://www.dianping.com/shop/H4zAuvHbAEYFiWLG"
      },
      {
        id:2,
        name:"蒸武门·广式茶点(新村店)",
        taste_score:8.4 ,
        environment_score:8.6,
        serve_score:8.5,
        phone:"18902324728",
        address:"街口街新村路14号116室",
        image:"/image/Morning_Tea/2.png",
        link:"https://www.dianping.com/shop/FInKCtasxR7daE1H"
      },
      {
        id:3,
        name:"点都德(海珠万达广场店)",
        taste_score:9.0,
        environment_score:9.0,
        serve_score:8.9,
        phone:"020-89111281",
        address:"逸景路238号海珠万达广场",
        image:"/image/Morning_Tea/3.png",
        link:"https://www.dianping.com/shop/k70XCog3mJwTYLZO"
      },
      {
        id:4,
        name:"点都德(聚福楼店)",
        taste_score:8.9,
        environment_score:8.5,
        serve_score:8.3,
        phone:"020-83028976",
        address:"环市东路374号三茂大酒店",
        image:"/image/Morning_Tea/4.png",
        link:"https://www.dianping.com/shop/k6QeMw4kaD8rFvgr"
      },
      {
        id:5,
        name:"迎点广式点心(建设北店)",
        taste_score:9.0,
        environment_score:9.0,
        serve_score:8.9,
        phone:"020-36968986",
        address:"建设北路190号",
        image:"/image/Morning_Tea/5.png",
        link: "https://www.dianping.com/shop/k7mRX0IOry2fhSro"
      },
      {
        id:6,
        name:"蒸武门·广式茶点(西塱店)",
        taste_score:9.0,
        environment_score:9.0,
        serve_score:8.8,
        phone:"020-31052514",
        address:"环市西路52号201房",
        image:"/image/Morning_Tea/6.png",
        link:"https://www.dianping.com/shop/k1DLLuiE512WM1q0"
      },
      {
        id:7,
        name:"点都德(南岗店)",
        taste_score:8.8,
        environment_score:8.8,
        serve_score:8.8,
        phone:"020-31702019",
        address:"盛凯大街2号101房L2-1铺",
        image:"/image/Morning_Tea/7.png",
        link:"https://www.dianping.com/shop/H5daW6VM6WyBpNxn"
      },
      {
        id:8,
        name:"点都德(南沙环宇城店)",
        taste_score:8.3,
        environment_score:8.3,
        serve_score:8.3,
        phone:"15322032091",
        address:"西北角南沙环宇城L2层",
        image:"/image/Morning_Tea/8.png",
        link:"https://www.dianping.com/shop/G9XhJX2NlQr1SGFd"
      },
      {
        id:9,
        name:"冠盛尚好酒家·潮粤融合(天河公园店)",
        taste_score:9.1,
        environment_score:9.1,
        serve_score:9.0,
        phone:"020-83028976",
        address:"龙洞购物中心龙泰广场",
        image:"/image/Morning_Tea/9.png",
        link:"https://www.dianping.com/shop/G2X5nUR252p8RoLZ"
      },
      {
        id:10,
        name:"蔡澜港式点心(白云凯德店)",
        taste_score:9.1,
        environment_score:9.0,
        serve_score:9.1,
        phone:"020-35623871",
        address:"云城西路890号凯德广场",
        image:"/image/Morning_Tea/10.png",
        link:"https://www.dianping.com/shop/G1cNNhPWzpeIK3i7"
      },
      {
        id:11,
        name:"子曰禮·茶居(白云鹅掌坦店)",
        taste_score:9.1,
        environment_score:9.2,
        serve_score:9.1,
        phone:"020-31154714",
        address:"西槎路98-100号",
        image:"/image/Morning_Tea/11.png",
        link:"https://www.dianping.com/shop/H1TS9ixfjf5uxl7G"
      },
      {
        id:12,
        name:"蒸武门·广式茶点(金福星店)",
        taste_score:8.8,
        environment_score:8.6,
        serve_score:8.4,
        phone:"13682211299",
        address:"新新大道南路32号",
        image:"/image/Morning_Tea/12.png",
        link:"https://www.dianping.com/shop/H3VFV8GgpKitC9ZT"
      }
    ],
    siroin:[
      {
        id:1,
        name:"犇牪牛老广炭炉牛杂牛腩煲",
        taste_score:6.9,
        environment_score:6.9,
        serve_score:6.9,
        phone:"15218833288",
        address:"嘉胜路17-34号",
        image:"/image/siroin/1.png",
        link:"https://www.dianping.com/shop/G15VqXAerKehR89B"
      },
      {
        id:2,
        name:"肥姨牛腩档(大石店)",
        taste_score:7.6,
        environment_score:7.8,
        serve_score:7.5,
        phone:"13710713332",
        address:"群贤路1号之2",
        image:"/image/siroin/2.png",
        link:"https://www.dianping.com/shop/H8ZsME7a61nHgUqn"
      },
      {
        id:3,
        name:"天一牛腩粉",
        taste_score:7.9,
        environment_score:7.5,
        serve_score:7.3,
        phone:"17665186180",
        address:"珠江二路与珠江二路一巷",
        image:"/image/siroin/3.png",
        link:"https://www.dianping.com/shop/k6gkOJk2dBy8rKgB"
      },
      {
        id:4,
        name:"西关牛杂(文昌南店)",
        taste_score:7.3,
        environment_score:7.0,
        serve_score:7.1,
        phone:"18922100047",
        address:"文昌南路34号首层之3号",
        image:"/image/siroin/4.png",
        link:"https://www.dianping.com/shop/k1GvpprU4DrpkDP9"
      },
      {
        id:5,
        name:"牛楠楠(骏壹万邦店)",
        taste_score:8.0,
        environment_score:8.1,
        serve_score:8.1,
        phone:"17324321598",
        address:"花城街道骏壹万邦3楼",
        image:"/image/siroin/5.png",
        link:"https://www.dianping.com/shop/k7A5a3kFg0NznY1T"
      },
      {
        id:6,
        name:"牛鲜生化州牛杂",
        taste_score:8.0,
        environment_score:8.0 ,
        serve_score:8.1,
        phone:"13570568007",
        address:"商业大道57号",
        image:"/image/siroin/6.png",
        link:"https://www.dianping.com/shop/l6EP1Kd9Ko7mH6Al"
      },
      {
        id:7,
        name:"牛小灶牛杂煲(来又来店)",
        taste_score:8.6,
        environment_score:8.6,
        serve_score:8.6,
        phone:"020-36998025",
        address:"龙珠路新华来又来4楼",
        image:"/image/siroin/7.png",
        link:"https://www.dianping.com/shop/k2woChP09Ev7Ovn8"
      },
      {
        id:8,
        name:"荣光牛杂·牛腩粉面(三华店)",
        taste_score:8.0,
        environment_score:7.5,
        serve_score:7.0,
        phone:"18588628375",
        address:"新华街道三华中新大街",
        image:"/image/siroin/8.png",
        link:"https://www.dianping.com/shop/l7a5nLkddDbwLB8W"
      },
      {
        id:9,
        name:"司富牛腩火锅(大华店)",
        taste_score:7.7,
        environment_score:7.7,
        serve_score:7.8,
        phone:"18928781105",
        address:"大华一路12号朗晴轩",
        image:"/image/siroin/9.png",
        link:"https://www.dianping.com/shop/l8svuvEzc3QyHxUO"
      },
      {
        id:10,
        name:"诏鑫号牛腩牛杂",
        taste_score:6.8,
        environment_score:6.9,
        serve_score:6.9,
        phone:"13725235296",
        address:"秀全街岭东路38号",
        image:"/image/siroin/10.png",
        link:"https://www.dianping.com/shop/k9MlrYd4IzXhO30P"
      },
      {
        id:11,
        name:"幸会牛腩",
        taste_score:7.2,
        environment_score:7.2,
        serve_score:7.2,
        phone:"19802066660",
        address:"大南路191号",
        image:"/image/siroin/11.png",
        link:"https://www.dianping.com/shop/H9qZMfOcJeEgNBLr"
      },
      {
        id:12,
        name:"宜姐牛杂(盘福路店)",
        taste_score:7.9,
        environment_score: 7.4,
        serve_score:7.8,
        phone:"13728086615",
        address:"盘福路医国街102号104左",
        image:"/image/siroin/12.png",
        link:"https://www.dianping.com/shop/H4ikNWb4zAvLrrgt"
      }
    ],
    wax:[
      {
        id:1,
        name:"荔博园果木烧鹅(从化店)",
        taste_score:8.2,
        environment_score:8.2 ,
        serve_score:8.1,
        phone:"18925041048",
        address:"环市东路1282号博览园",
        image:"/image/wax/1.png",
        link:"https://www.dianping.com/shop/H5gRV5ywkdXeVIvi"
      },
      {
        id:2,
        name:"陶陶居酒家(番禺天河城店)",
        taste_score:8.3,
        environment_score:8.6,
        serve_score:8.4,
        phone:"020-38391272",
        address:"汉溪大道东366号天河城A",
        image:"/image/wax/2.png",
        link:"https://www.dianping.com/shop/G2JGjYMgalVlPdld"
      },
      {
        id:3,
        name:"凤小馆·顺德菜(祈福店)",
        taste_score:9.1,
        environment_score:9.1,
        serve_score:9.1,
        phone:"020-84539983",
        address:"学院路祈福名家五街",
        image:"/image/wax/3.png",
        link:"https://www.dianping.com/shop/l24OuFHTq6Ohu8om"
      },
      {
        id:4,
        name:"锦记烧腊(市二宫总店)",
        taste_score:9.0,
        environment_score:8.9,
        serve_score:9.0,
        phone:"13580308833",
        address:"同福东路598号18-1铺",
        image:"/image/wax/4.png",
        link:"https://www.dianping.com/shop/l1kTvcjgefEchTpW"
      },
      {
        id:5,
        name:"陶陶居酒家(解放北路店)",
        taste_score:8.9,
        environment_score:8.9,
        serve_score:8.8,
        phone:"020-83643379",
        address:"解放北路801号桂冠大厦",
        image:"/image/wax/5.png",
        link:"https://www.dianping.com/shop/l8klHE1bb5QRi83C"
      },
      {
        id:6,
        name:"锦堂春想·广州粤菜(广州古风店)",
        taste_score:8.9,
        environment_score:9.1,
        serve_score:8.7,
        phone:"020-83028976",
        address:"三东大道93号商务大厦",
        image:"/image/wax/6.png",
        link:"https://www.dianping.com/shop/iKPJJIcV5jWPDdlF"
      },
      {
        id:7,
        name:"永兴烧腊",
        taste_score:8.3,
        environment_score:7.6,
        serve_score:7.8,
        phone:"18620404522",
        address:"梯云东路21号一4",
        image:"/image/wax/7.png",
        link:"https://www.dianping.com/shop/G8COFTq4XL5CzptG"
      },
      {
        id:8,
        name:"大塘烧鹅",
        taste_score:8.4,
        environment_score:8.5,
        serve_score:8.4,
        phone:"020-89996021",
        address:"阅江西路222号广州塔东",
        image:"/image/wax/8.png",
        link:"https://www.dianping.com/shop/EevnW4w823xXRQsq"
      },
      {
        id:9,
        name:"通记深井烧鹅海鲜大排档(鹿颈店)",
        taste_score:7.8,
        environment_score: 7.8,
        serve_score:7.7,
        phone:"18933987723",
        address:"南沙街道鹿颈村桥韵路",
        image:"/image/wax/9.png",
        link:"https://www.dianping.com/shop/G9fzUlNUFMHiEUAS"
      },
      {
        id:10,
        name:"小炳胜(天环店)",
        taste_score:8.6,
        environment_score:8.7,
        serve_score:8.4,
        phone:"020-83980130",
        address:"天河路383号太古汇商场",
        image:"/image/wax/10.png",
        link:"https://www.dianping.com/shop/H3NMTQXJE8I4cTXg"
      },
      {
        id:11,
        name:"港兴烧腊(永泰店)",
        taste_score:8.9,
        environment_score:8.5,
        serve_score:8.3,
        phone:"020-31522518",
        address:"棠乐路1357号百信广场西",
        image:"/image/wax/11.png",
        link:"https://www.dianping.com/shop/H64vSYxosxbeyXOv"
      },
      {
        id:12,
        name:"旺角烧腊(翠华街店)",
        taste_score:7.4,
        environment_score:7.4,
        serve_score:7.4,
        phone:"18122002588",
        address:"荔城街荔乡路65号",
        image:"/image/wax/12.png",
        link:"https://www.dianping.com/shop/H3duaPWDQUGIPrGu"
      }
    ]
  },

  //评论列表
  Comments:[
    {
      "username": "夏莲",
      "avatar": "/image/avatar/1.png",
      "comment": "老板挺好说话的，服务态度也挺好的"
  },
  {
      "username": "北欧",
      "avatar": "/image/avatar/2.png",
      "comment": "终于来吃了，之前一直想来"
  },
  {
      "username": "小兔",
      "avatar": "/image/avatar/3.png",
      "comment": "点评上的高分店铺，过来打卡一下。"
  },
  {
      "username": "蓝梦",
      "avatar": "/image/avatar/4.png",
      "comment": "若将今天最差的餐馆出品秒送秦朝，一定会获五星好评"
  },
  {
      "username": "秋翠",
      "avatar": "/image/avatar/5.png",
      "comment": "主动热情，服务细致"
  },
  {
      "username": "小羊",
      "avatar": "/image/avatar/6.png",
      "comment": "可能算半个网红店？有络绎不绝的游客前来打卡。"
  },
  {
      "username": "天赐",
      "avatar": "/image/avatar/7.png",
      "comment": "味道还是不错的，附近的话可以来试试"
  },
  {
      "username": "瑶儿",
      "avatar": "/image/avatar/8.png",
      "comment": "环境:干净舒服，大厅都坐满了，我们来到刚好有一桌走"
  },
  {
      "username": "琳琅",
      "avatar": "/image/avatar/9.png",
      "comment": "性价比很高的一顿～"
  },
  {
      "username": "唯梦",
      "avatar": "/image/avatar/10.png",
      "comment": "在广州这家餐厅算是比较高级的了，环境很赞"
  },
   {
        "username": "静心",
        "avatar": "/image/avatar/11.png",
        "comment": "环境大气，位置优越，服务一流，菜品欠佳！"
    },
    {
        "username": "明心",
        "avatar": "/image/avatar/12.png",
        "comment": "老广特别认可哒一家店，我们去的时候已经基本卖光了"
    },
    {
        "username": "鸿雁",
        "avatar": "/image/avatar/13.png",
        "comment": "真挺喜欢这家店的，路过看到在排队，结果次日人更多"
    },
    {
        "username": "明月",
        "avatar": "/image/avatar/14.png",
        "comment": "吃的人挺多的，上菜也算快"
    },
    {
        "username": "翠儿",
        "avatar": "/image/avatar/15.png",
        "comment": "店铺不大，生意出奇的好。"
    },
    {
        "username": "如梦",
        "avatar": "/image/avatar/16.png",
        "comment": "看起来评分不错，进去能点的都点了一遍，味道还算不错"
    },
    {
        "username": "梦幻",
        "avatar": "/image/avatar/17.png",
        "comment": "这家店，必须大力推荐，毕竟因为他家好吃，"
    },
    {
        "username": "明珠",
        "avatar": "/image/avatar/18.png",
        "comment": "慕名而来"
    },
    {
        "username": "静思",
        "avatar": "/image/avatar/19.png",
        "comment": "店内环境非常不错，干净宽敞"
    },
    {
        "username": "小川",
        "avatar": "/image/avatar/20.png",
        "comment": "服务员服务非常细致，态度温和。"
    },
    {
      "username": "小鹤",
      "avatar": "/image/avatar/21.png",
      "comment": "本次用餐稍稍有点不太顺利哈，也许是时间不对的问题"
  },
  {
      "username": "阳光",
      "avatar": "/image/avatar/22.png",
      "comment": "非常非常好吃，怎么能这么好吃！"
  },
  {
      "username": "小雪",
      "avatar": "/image/avatar/23.png",
      "comment": "份量是挺足的,但味道只能说是中规中矩吧。"
  },
  {
      "username": "小燕",
      "avatar": "/image/avatar/24.png",
      "comment": "环境还行，就是位置太紧迫了，多个人坐着都走不动道。"
  },
  {
      "username": "飞鸟",
      "avatar": "/image/avatar/25.png",
      "comment": "收藏了很久的店铺，终于有机会晚上到这个店铺。"
  },
  {
        "username": "小食神",
        "avatar": "/image/avatar/26.png",
        "comment": "菜品口味不错，让人回味无穷。"
    },
    {
        "username": "吃货小王子",
        "avatar": "/image/avatar/27.png",
        "comment": "终于品尝到了美味，回味无穷。"
    },
    {
        "username": "味蕾之旅",
        "avatar": "/image/avatar/28.png",
        "comment": "高分店铺名不虚传，值得打卡。"
    },
    {
        "username": "美食小懒猫",
        "avatar": "/image/avatar/29.png",
        "comment": "口味独特，让人大饱口福。"
    },
    {
        "username": "食客小哥哥",
        "avatar": "/image/avatar/30.png",
        "comment": "服务热情周到，让人感到宾至如归。"
    },
    {
        "username": "小吃骑士",
        "avatar": "/image/avatar/31.png",
        "comment": "环境优美，是一家具有特色的网红店。"
    },
    {
        "username": "吃货小公主",
        "avatar": "/image/avatar/32.png",
        "comment": "味道可口，是一处不可多得的美食天堂。"
    },
    {
        "username": "美食小懒虫",
        "avatar": "/image/avatar/33.png",
        "comment": "性价比很高，物超所值，值得推荐。"
    },
    {
        "username": "美食小王子",
        "avatar": "/image/avatar/34.png",
        "comment": "菜品新鲜，环境舒适，是一家不容错过的美食店。"
    },
    {
        "username": "味蕾小公举",
        "avatar": "/image/avatar/35.png",
        "comment": "菜品丰富，服务周到，是一处美食的天堂。"
    },
  ]
})
