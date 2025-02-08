// 模拟存储的网页链接数据
const linkData = [
    {
        title: "智能算法",
        links: [
            { name: "DeepSeek", url: "https://www.deepseek.com/" },
            { name: "Kimi", url: "https://kimi.moonshot.cn/" },
            { name: "豆包", url: "https://www.doubao.com/chat/" },
            { name: "文心一言", url: "https://yiyan.baidu.com/" },
            { name: "通义千问", url: "https://tongyi.aliyun.com/qianwen/" },
            { name: "昇思 MindSpore", url: "https://www.mindspore.cn/" },
        ]
    },
    {
        title: "搜索引擎",
        links: [
            { name: "百度搜索", url: "https://www.baidu.com" },
            { name: "360 搜索", url: "https://www.so.com/" },
            { name: "搜狗搜索", url: "https://www.sogou.com/" },
            { name: "Microsoft Bing", url: "http://cn.bing.com/" },
            { name: "Yandex", url: "https://yandex.com" },
            { name: "谷歌搜索", url: "http://www.google.com" },
            { name: "维基百科", url: "https://www.wikipedia.org/" },
        ]
    },    
    {
        title: "在线学习",
        links: [
            { name: "哔哩哔哩", url: "https://www.bilibili.com/" },
            { name: "中国大学MOOC", url: "https://www.icourse163.org/" },
            { name: "慕课网", url: "https://www.imooc.com/" },
            { name: "网易云课堂", url: "https://study.163.com/" },
            { name: "终身教育平台", url: "https://le.ouchn.cn/home" },
            { name: "学堂在线", url: "https://next.xuetangx.com/" },
            { name: "尚硅谷", url: "https://www.atguigu.com/" },
            { name: "Coursera", url: "https://www.coursera.org/" },
            { name: "edX", url: "https://www.edx.org/" },
            { name: "【北京大学】Tensorflow2.0", url: "https://www.bilibili.com/video/BV1B7411L7Qt/?spm_id_from=333.999.0.0&vd_source=52cc7417d4906672d31225b5e49b2086" },

        ]
    },
    {
        title: "编程开发‌",
        links: [
            { name: "Github-hdonexxx", url: "https://github.com/hdonexxx" },
            { name: "GitHub", url: "https://github.com" },
            { name: "CSDN", url: "https://www.csdn.net/" },
            { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
            { name: "Stack Overflow", url: "https://stackoverflow.com" },
            { name: "W3Schools", url: "https://www.w3schools.com" },
            { name: "Dev.to", url: "https://dev.to" },
            { name: "Python", url: "https://www.python.org/" },
        ]
    },
    {
        title: "图表绘制",
        links: [
            { name: "Pyecharts 简介", url: "https://pyecharts.org/#/zh-cn/intro" },
            { name: "Pyecharts 样例", url: "https://gallery.pyecharts.org/#/README" },
            { name: "Echarts", url: "https://echarts.apache.org/zh/index.html" },
            { name: "Tableau", url: "https://www.tableau.com/" },
            { name: "ChartCube 图表魔方", url: "https://chartcube.alipay.com/" },
            { name: "PDDON 画图", url: "https://pddon.com/" },
            { name: "Canva 可画", url: "https://www.canva.cn/" },
        ]
    },   
    {
        title: "地图相关",
        links: [
            { name: "谷歌地图", url: "http://www.gditu.net/" },
            { name: "百度地图", url: "https://map.baidu.com/" },
            { name: "高德地图", url: "https://www.amap.com/" },
            { name: "高德地图|坐标拾取", url: "https://lbs.amap.com/tools/picker" },
            { name: "百度地图|坐标拾取", url: "https://api.map.baidu.com/lbsapi/getpoint/index.html" },
            { name: "地图资源下载", url: "https://datav.aliyun.com/portal/school/atlas/area_selector#&lat=31.840232667909365&lng=104.2822265625&zoom=4" },
            { name: "中国地图对开横版", url: "http://bzdt.ch.mnr.gov.cn/browse.html?picId=%224o28b0625501ad13015501ad2bfc0667%22" },
            { name: "百度地图|控制台", url: "https://lbsyun.baidu.com/apiconsole/key#/home" },
            { name: "高德地图|地铁图", url: "https://map.amap.com/subway/index.html?&1100" },
        ]
    },   
    {
        title: "辅助文档",
        links: [
            { name: "QGIS 教程", url: "https://www.osgeo.cn/qgis-tutorial/overview.html#google_vignette" },
            { name: "QGIS Documentation", url: "https://docs.qgis.org/3.34/en/docs/user_manual/preamble/preamble.html" },
            { name: "PyQGIS Developer Cookbook", url: "https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/index.html" },
            { name: "Graphical User Interfaces with Tk", url: "https://docs.python.org/3/library/tk.html" },
            { name: "Python与开源GIS", url: "https://www.osgeo.cn/pygis/gdal-begin.html#google_vignette" },
            { name: "Data model", url: "https://docs.python.org/3/reference/datamodel.html" },
            
        ]
    },
    {
        title: "数据资源",
        links: [
            { name: "世界银行公开数据", url: "https://data.worldbank.org.cn/" },
            { name: "国家数据|国家统计局", url: "https://data.stats.gov.cn/" },
            { name: "全国一体化平台数据共享系统", url: "http://59.255.22.70:8443/portal/index.htm?code=90000&flag=false" },
            { name: "北京公共数据开放平台", url: "https://data.beijing.gov.cn/" },
            { name: "UC Irvine", url: "https://archive.ics.uci.edu/" },
            { name: "Carbon Monitor", url: "https://carbonmonitor.org.cn/" },
        ]
    },
    {
        title: "Work",
        links: [

            { name: "BOSS直聘", url: "https://www.zhipin.com/wuhan/?ka=header-home-logo&seoRefer=index" },

            
        ]
    },
    {
        title: "办公辅助‌",
        links: [
            { name: "百度翻译", url: "https://fanyi.baidu.com/mtpe-individual/multimodal?fr=pcPinzhuan#/" },
            { name: "迅捷画图", url: "https://www.liuchengtu.com/" },
            { name: "Pexels", url: "https://www.pexels.com/zh-cn/" },
            { name: "蛙蛙工具", url: "https://www.iamwawa.cn/" },
            { name: "Convertio", url: "https://convertio.co/" },
            { name: "SmallPDF", url: "https://smallpdf.com/" },
            { name: "PDF24 Tools", url: "https://tools.pdf24.org/" },
            { name: "iLovePDF", url: "https://www.ilovepdf.com/" },
            { name: "白描网页版", url: "https://web.baimiaoapp.com/" },
            { name: "金鸣表格文字识别大师", url: "https://www.51jinming.com/" },
            { name: "Worktile", url: "https://sc.pingcode.com/746jy" },
            { name: "Trello", url: "https://trello.com/" },
            { name: "办公人导航", url: "https://www.bgrdh.com/" },
            { name: "草料二维码", url: "https://cli.im/" },
            { name: "FREEPIK 图标素材", url: "https://www.freepik.com/" },
            { name: "iconFont 图标素材", url: "https://www.iconfont.cn/" },
            { name: "问卷星", url: "https://www.wjx.cn/" },
        ]
    },

    {
        title: "‌知识社区",
        links: [
            { name: "中国知网", url: "https://www.cnki.net/" },
            { name: "知乎", url: "https://www.zhihu.com/" },
            { name: "微博", url: "https://weibo.com/" },
            { name: "豆瓣", url: "https://www.douban.com/" },
            { name: "百度热搜", url: "https://top.baidu.com/board?platform=pc&sa=pcindex_a_right" },
            { name: "百度指数", url: "https://index.baidu.com/v2/index.html#/" },
        ]
    },


    {
        title: "网盘存储",
        links: [
            { name: "百度网盘", url: "https://pan.baidu.com/" },
            { name: "夸克网盘", url: "https://pan.quark.cn/" },
            { name: "阿里云盘", url: "https://www.aliyundrive.com/" },
            { name: "腾讯微云", url: "https://www.weiyun.com/" },
        ]
    },

    {
        title: "邮箱服务",
        links: [
            { name: "263云通信", url: "https://mail.263.net/" },
            { name: "QQ邮箱", url: "https://mail.qq.com/" },
            { name: "阿里云邮箱", url: "https://mail.aliyun.com/" },
            { name: "网易邮箱", url: "https://email.163.com/" },
        ]
    },
    {
        title: "在线阅读",
        links: [
            { name: "起点中文网", url: "https://www.qidian.com/" },
            { name: "纵横中文网", url: "https://www.zongheng.com/" },
            { name: "番茄小说", url: "https://fanqieapp.com/" },
            { name: "七猫小说", url: "https://www.7mts.com/" },
            { name: "17K小说网", url: "https://www.17k.com/" },
        ]
    },


    {
        title: "影视娱乐",
        links: [
            { name: "哔哩哔哩", url: "https://www.bilibili.com/" },
            { name: "腾讯TV", url: "https://v.qq.com/" },
            { name: "芒果TV", url: "https://www.mgtv.com/" },
            { name: "优酷视频", url: "https://www.youku.com/" },
            { name: "爱奇艺", url: "https://www.iqiyi.com/" },
            { name: "央视网", url: "http://video.cctv.com/" },
            { name: "抖音", url: "https://www.douyin.com/" },
            { name: "快手", url: "https://www.kuaishou.com/new-reco" },
            { name: "AcFun", url: "https://www.acfun.cn/" },
            { name: "YouTube", url: "https://www.youtube.com" },
            { name: "Netflix", url: "https://www.netflix.com" },
            { name: "电影天堂", url: "https://www.dytt8.com/" },
            { name: "AfreecaTV", url: "https://www.sooplive.co.kr/?hash=bora" },
            { name: "4K HDR世界", url: "https://4khdr.cn/" },
            { name: "爱恋动漫", url: "https://www.kisssub.org/2.html" },
            { name: "樱花动漫", url: "http://www.iyinghua.com/?ivk_sa=1026860c" },
            { name: "VIP在线视频解析", url: "https://tool.liumingye.cn/video/" },

        ]
    },
    {
        title: "音乐平台",
        links: [
            { name: "网易云音乐", url: "https://music.163.com/" },
            { name: "QQ音乐", url: "https://y.qq.com/" },
            { name: "酷狗音乐", url: "https://www.kugou.com/" },
            { name: "千千音乐", url: "https://music.91q.com/" },
            { name: "咪咕音乐", url: "https://music.migu.cn/" },
            { name: "‌5sing音乐", url: "https://5sing.kugou.com/" },
            { name: "汽水音乐", url: "https://music.douyin.com/qishui" },
            { name: "听蛙纯音乐", url: "https://www.itingwa.com/" },
        ]
    },

    {
        title: "游戏娱乐",
        links: [
            { name: "Steam", url: "https://store.steampowered.com" },
            { name: "育碧", url: "https://zh-cn.ubisoft.com/" },
            { name: "Epic", url: "https://www.epicgames.com/store/" },
            { name: "Origin", url: "https://www.origin.com/" },
            { name: "Xbox Live", url: "https://www.xbox.com/" },
            { name: "PSN", url: "https://store.playstation.com/" },
            { name: "Nintendo eShop", url: "https://www.nintendo.com/" },
            { name: "云顶之弈主题站", url: "https://lol.qq.com/tft/#/inde" },

        ]
    },
    {
        title: "购物平台",
        links: [
            { name: "京东", url: "https://www.jd.com/" },
            { name: "淘宝", url: "https://www.taobao.com/" },
            { name: "天猫", url: "https://www.tmall.com/" },
            { name: "苏宁易购", url: "https://www.suning.com/" },
            { name: "唯品会", url: "https://www.vip.com/" },
            { name: "网易严选", url: "https://you.163.com/" },
            { name: "亚马逊中国", url: "https://www.amazon.cn/" },
            { name: "国美在线", url: "https://mgold.gome.com.cn/" },
            { name: "拼多多", url: "https://www.pinduoduo.com/" },
        ]
    },
    {
        title: "旅游出行",
        links: [
            { name: "12306", url: "https://www.12306.cn/" },
            { name: "携程旅行", url: "https://www.ctrip.com/" },
            { name: "去哪儿网", url: "https://www.qunar.com/" },
            { name: "飞猪", url: "https://www.fliggy.com/" },
            { name: "同程旅行", url: "https://www.ly.com/" },
        ]
    },

    {
        title: "Other",
        links: [
            { name: "Rainmeter皮肤区", url: "https://bbs.rainmeter.cn/forum-210-1.html" },
            { name: "ORACLE", url: "https://www.oracle.com/cn/" },
            { name: "ASCII Animator", url: "https://www.qqpr.com/download.html" },
            { name: "Microsoft", url: "https://www.microsoft.com/zh-cn/" },
            { name: "QGIS User Guide", url: "https://docs.qgis.org/3.16/en/docs/user_manual/index.html" },
            { name: "Anaconda3 安装包", url: "https://repo.anaconda.com/archive/" },   
            { name: "Qgis Download", url: "https://www.qgis.org/download/" },
            { name: "查询本地ip", url: "https://myip.ipip.net/" },
            { name: "BT导航", url: "https://btmayi.cc/" },
            { name: "docsmall GIF 动图压缩工具", url: "https://docsmall.com/gif-compress" },
            { name: "backgrounds", url: "https://backgrounds.gallery/animated" },
            { name: "AI换脸离线版更新日志及下载", url: "https://docs.qq.com/doc/DTGxVWExSSk9YSGJm" },
            { name: "ProcessOn思维导图流程图", url: "https://www.processon.com/" },
            { name: "全球高清实况摄像头", url: "https://www.skylinewebcams.com/" },
            { name: "B站封面提取", url: "https://bilicover.magecorn.com/" },
            { name: "MYFreeMP3", url: "https://tool.liumingye.cn/music/#/" },
            { name: "Magic Studio", url: "https://magicstudio.com/zh/" },
        ]
    },   

];

// 生成索引
const indexList = document.getElementById('index-list');
linkData.forEach((group, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#group-${index}`;
    link.textContent = group.title;
    listItem.appendChild(link);
    indexList.appendChild(listItem);
});

// 生成链接组
const linkGroups = document.getElementById('link-groups');
linkData.forEach((group, index) => {
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('link-group');
    groupDiv.id = `group-${index}`;

    const title = document.createElement('h2');
    title.textContent = group.title;
    groupDiv.appendChild(title);

    group.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.target = "_blank";
        groupDiv.appendChild(a);
    });

    linkGroups.appendChild(groupDiv);
});

// 搜索功能
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const allLinks = document.querySelectorAll('.link-group a');
    allLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        if (linkText.includes(searchTerm)) {
            link.style.display = 'inline-block';
        } else {
            link.style.display = 'none';
        }
    });
});

