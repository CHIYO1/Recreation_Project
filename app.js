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
        name:"蒸武门(桥南旗舰店)",
        taste_score:9.0,
        environment_score:9.0,
        serve_score:9.0,
        phone:"数字字符串",
        address:"地址",
        image:"/image/Morning_Tea/1.png"
      },
      {
        
      }
    ],
    siroin:[

    ],
    wax:[

    ]
  },

  //评论列表
  Comments:[
    "",
    ""
  ]
})
