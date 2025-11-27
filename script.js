// 模拟存储的网页链接数据（修复云顶之弈URL拼写错误）
const linkData = [
    {
        title: "AI算法",
        subGroups: [
            {
                subTitle: "对话模型",
                subLinks: [
                    { 
                        name: "Kimi", 
                        url: "https://kimi.moonshot.cn/",
                        image: "img/kimi.png",
                        description: "moonshot旗下AI对话工具，擅长长文本理解与多轮逻辑对话，支持文档解析、代码辅助、创意写作等全场景智能交互"
                    },
                    { 
                        name: "豆包", 
                        url: "https://www.doubao.com/chat/",
                        image: "img/doubao.jpeg",
                        description: "字节跳动旗下多功能AI助手，支持智能对话、内容创作（文案、代码、图片）、知识问答、生活服务咨询，适配个人与轻办公场景"
                    },
                    { 
                        name: "文心一言", 
                        url: "https://yiyan.baidu.com/",
                        image: "img/wyyx.png",
                        description: "百度基于文心大模型开发的生成式AI，具备文本生成、多模态创作（图片、音频）、数据分析、企业级解决方案定制能力，深度融合百度生态"
                    },
                    { 
                        name: "通义千问", 
                        url: "https://tongyi.aliyun.com/qianwen/",
                        image: "img/tyqw.png",
                        description: "阿里巴巴达摩院研发的大语言模型，支持中英文多轮对话、代码编写、文档生成、行业场景适配（电商、金融、企业服务），提供API接口供二次开发"
                    },
                    { 
                        name: "Claude", 
                        url: "https://claude.ai/",
                        image: "img/claude.png",
                        description: "Anthropic旗下AI对话模型，以“长文本处理（百万级token）”“安全合规性”为核心优势，支持企业级文档分析、法律文本解读、多轮逻辑推理"
                    }
                ]
            },
            {
                subTitle: "开发框架",
                subLinks: [
                    { 
                        name: "昇思 MindSpore", 
                        url: "https://www.mindspore.cn/",
                        image: "img/ms.png",
                        description: "华为开源的深度学习框架，具备高效训练、轻量化推理、多硬件适配（GPU/CPU/NPU）特性，适用于AI模型研发、边缘计算与行业级AI系统构建"
                    },
                    { 
                        name: "硅基流动", 
                        url: "https://www.siliconflow.cn/zh-cn/models",
                        image: "img/gjld.jpeg",
                        description: "AI模型服务平台，提供主流开源/闭源大模型的部署、管理与调用服务，支持模型微调、算力调度，降低企业与开发者AI应用落地门槛"
                    },
                    { 
                        name: "LlamaIndex", 
                        url: "https://www.llamaindex.ai/",
                        image: "img/llamaindex.png",
                        description: "开源AI数据框架，专注于“连接大模型与私有数据”，支持数据索引构建、检索增强生成（RAG）、多数据源整合，助力企业构建专属知识AI"
                    },
                    { 
                        name: "ollama", 
                        url: "https://ollama.com/",
                        image: "img/ollama.jpeg",
                        description: "本地AI模型运行工具，支持在个人设备（电脑/服务器）部署开源大模型（如Llama 3、Mistral），无需联网即可实现离线AI交互，注重隐私保护"
                    }
                ]
            },
            {
                subTitle: "垂直工具",
                subLinks: [
                    { 
                        name: "DeepSeek", 
                        url: "https://www.deepseek.com/",
                        image: "img/deepseek.jpg",
                        description: "专注于深度学习的搜索引擎，提供精准AI模型服务，支持多场景模型调用与定制，适配科研、企业级AI应用开发需求"
                    },
                    { 
                        name: "秘塔搜索", 
                        url: "https://mt.cn/",
                        image: "img/mt.jpeg",
                        description: "AI驱动的垂直搜索引擎，主打“精准信息筛选”，支持学术文献、专业文档、行业数据的深度检索，优化科研与专业领域信息获取效率"
                    },
                    { 
                        name: "ChatExcel", 
                        url: "https://www.chatexcel.com/#/",
                        image: "img/chatexcel.jpeg",
                        description: "AI表格效率工具，支持自然语言指令转Excel操作（数据计算、格式调整、图表生成），无需专业表格技能即可快速处理数据，适配办公场景"
                    },
                    { 
                        name: "cherry studio", 
                        url: "https://cherry-ai.com/",
                        image: "img/cherry.jpeg",
                        description: "轻量化AI创意工具集，涵盖AI绘画、文案生成、设计素材优化等功能，操作简洁易上手，适配个人创意设计、自媒体内容制作场景"
                    }
                ]
            },
            {
                subTitle: "企业服务",
                subLinks: [
                    { 
                        name: "CT AI", 
                        url: "http://10.87.10.114:3000/chat/share?shareId=dcq0rfxkf22rbbyvxwxyxswn&chatId=",
                        image: "img/ctc.webp",
                        description: "局域网专属AI聊天工具，支持团队内部协作式智能对话，可共享对话内容、协同处理任务，适配企业/组织内部封闭场景的AI需求"
                    },
                    { 
                        name: "ACEE AI", 
                        url: "http://10.87.10.202/login",
                        image: "img/acee.png",
                        description: "企业内部AI服务登录平台，提供权限管控的专属AI功能（如数据建模、业务分析、智能报告生成），仅对授权用户开放使用"
                    }
                ]
            }
        ]
    },
    {
        title: "AI 工具",
        subGroups: [
            {
                subTitle: "视觉创作",
                subLinks: [
                    { 
                        name: "蝉镜-生成视频", 
                        url: "https://www.chanjing.cc/",
                        image: "img/chanjing.png",
                        description: "AI 视频生成平台，文本 / 图片可转视频，自动匹配特效，无需专业剪辑"
                    },
                    { 
                        name: "ideofram-生成图片", 
                        url: "https://ideogram.ai/",
                        image: "img/ideofram.jpeg",
                        description: "AI 绘图工具，文字描述生成高清图片，支持自定义画风"
                    },
                    { 
                        name: "tripo-3D建模", 
                        url: "https://www.tripo3d.ai/",
                        image: "img/tripo.png",
                        description: "AI 3D 建模工具，文本描述生成模型，支持导出适配专业软件"
                    },
                    { 
                        name: "comic-漫画创作", 
                        url: "https://comic.ai/",
                        image: "img/comic.jpeg",
                        description: "AI 漫画生成工具，文本转漫画分镜，支持自定义角色与风格"
                    }
                ]
            },
            {
                subTitle: "应用开发",
                subLinks: [
                    { 
                        name: "durable-网站生成", 
                        url: "https://durable.co/",
                        image: "img/durable.png",
                        description: "无代码 AI 无代码 AI 建站工具，输入需求自动生成网站，支持编辑与一键部署"
                    },
                    { 
                        name: "Imagica-APP生成", 
                        url: "https://get.imagica.ai/",
                        image: "img/Imagica.png",
                        description: "无代码 AI APP 生成平台，文本描述生成 APP，支持安卓 /ios 适配"
                    },
                    { 
                        name: "dora-动画生成", 
                        url: "https://www.dora.run/ai",
                        image: "img/dora.jpg",
                        description: "AI 动画生成平台，文本 / 素材转动画，提供模板，无需专业软件"
                    }
                ]
            },
            {
                subTitle: "数据可视化",
                subLinks: [
                    { 
                        name: "napkin-图表生成", 
                        url: "https://www.napkin.ai/",
                        image: "img/napkin.png",
                        description: "AI 图表生成工具，上传数据自动生成柱状图等，支持样式自定义"
                    },
                    { 
                        name: "infography-信息图制作", 
                        url: "https://infography.in/",
                        image: "img/infography.png",
                        description: "AI 信息表生成工具，文本内容转结构化信息表，优化信息展示"
                    },
                    { 
                        name: "轻云图-词云图生成", 
                        url: "https://cloud.yoo-ai.com/",
                        image: "img/qingyuntu.jpeg",
                        description: "AI 词云图工具，上传文本生成词云，支持自定义颜色与形状"
                    }
                ]
            }
        ]
    },
    {
        title: "搜索引擎",
        subGroups: [
            {
                subTitle: "国内搜索",
                subLinks: [
                    { 
                        name: "百度搜索",
                        url: "https://www.baidu.com",
                        image: "img/baidu.jpeg",
                        description: "国内主流搜索引擎，中文信息覆盖广，支持网页、图片、地图等多类型检索"
                    },
                    { 
                        name: "360 搜索", 
                        url: "https://www.so.com/",
                        image: "img/360.jpeg",
                        description: "侧重安全与综合信息检索，整合新闻、视频、问答等内容，适配大众搜索需求"
                    },
                    { 
                        name: "搜狗搜索", 
                        url: "https://www.sogou.com/",
                        image: "img/sougou.png",
                        description: "擅长整合微信公众号、知乎等平台内容，支持输入法联动，提升搜索效率"
                    }
                ]
            },
            {
                subTitle: "国际搜索",
                subLinks: [
                    { 
                        name: "Microsoft Bing", 
                        url: "http://cn.bing.com/",
                        image: "img/microsoft.jpeg",
                        description: "微软旗下搜索引擎，国际信息覆盖全，图片 / 学术搜索功能强，支持多语言检索"
                    },
                    { 
                        name: "Yandex", 
                        url: "https://yandex.com",
                        image: "img/yandex.png",
                        description: "俄罗斯主流搜索引擎，多语言支持，对俄语信息及东欧地区内容检索更精准"
                    },
                    { 
                        name: "谷歌搜索", 
                        url: "http://www.google.com",
                        image: "img/google.jpeg",
                        description: "全球覆盖最广的搜索引擎，技术成熟，支持多维度筛选，国际信息检索首选"
                    }
                ]
            },
            {
                subTitle: "知识百科",
                subLinks: [
                    { 
                        name: "维基百科", 
                        url: "https://www.wikipedia.org/",
                        image: "img/wikipedia.jpeg",
                        description: "免费多语言百科全书，条目由全球用户协作编辑，侧重权威、中立的知识查询"
                    }
                ]
            }
        ]
    },    
    {
        title: "在线学习",
        subGroups: [
            {
                subTitle: "国内平台",
                subLinks: [
                    { 
                        name: "哔哩哔哩", 
                        url: "https://www.bilibili.com/",
                        image: "img/bilibili.jpeg",
                        description: "泛知识学习平台，涵盖考研、技能、兴趣类内容，依托 UP 主生态提供海量免费 / 付费学习视频。"
                    },
                    { 
                        name: "中国大学MOOC", 
                        url: "https://www.icourse163.org/",
                        image: "img/mooc.png",
                        description: "聚合国内顶尖高校课程，主打正规大学通识课与专业课，支持完成学习后获取认证证书。"
                    },
                    { 
                        name: "网易云课堂", 
                        url: "https://study.163.com/",
                        image: "img/wyykt.png",
                        description: "覆盖职场、兴趣、升学等全领域，提供视频课、直播课及实战项目，兼顾学习深度与广度。"
                    },
                    { 
                        name: "终身教育平台", 
                        url: "https://le.ouchn.cn/home",
                        image: "img/zsjy.jpeg",
                        description: "国家主办的公益学习平台，整合优质教育资源，面向全民提供终身学习课程，免费开放为主。"
                    },
                    { 
                        name: "学堂在线", 
                        url: "https://next.xuetangx.com/",
                        image: "img/xtzx.jpg",
                        description: "依托清华大学，汇聚国内外高校优质课程，侧重高等教育与职业教育，课程体系严谨。"
                    },
                    { 
                        name: "慕课网", 
                        url: "https://www.imooc.com/",
                        image: "img/imooc.jpeg",
                        description: "聚焦 IT 编程与职业技能培训，课程偏向实战操作，适合零基础入门到职场进阶的学习者。"
                    }
                ]
            },
            {
                subTitle: "国际平台",
                subLinks: [
                    { 
                        name: "Coursera（证书课程）", 
                        url: "https://www.coursera.org/",
                        image: "img/coursera.jpeg",
                        description: "国际知名慕课平台，合作哈佛、斯坦福等名校，提供多语言课程，支持获取大学学分或职业证书。"
                    },
                    { 
                        name: "edX（名校公开课）", 
                        url: "https://www.edx.org/",
                        image: "img/edx.jpg",
                        description: "由哈佛与 MIT 联合创办的国际平台，主打高质量 STEM 领域课程，免费旁听与付费认证模式结合。"
                    }
                ]
            },
            {
                subTitle: "职业技能",
                subLinks: [
                    { 
                        name: "尚硅谷", 
                        url: "https://www.atguigu.com/",
                        image: "img/shangguigu.jpeg",
                        description: "专注 IT 领域培训，以 Java、Python、大数据等课程为核心，注重理论与项目实战结合。"
                    }
                ]
            }
        ]
    },
   {
        title: "代码编程",
        subGroups: [
            {
                subTitle: "代码托管",
                subLinks: [
                    { 
                        name: "Github-hdonexxx", 
                        url: "https://github.com/hdonexxx",
                        image: "img/github.jpg",
                        description: "个人专属 GitHub 代码仓库地址，用于托管、展示个人代码项目，支持版本控制与协作。"
                    },
                    { 
                        name: "GitHub", 
                        url: "https://github.com",
                        image: "img/github.jpg",
                        description: "全球最大的开源代码托管平台，核心功能包括代码存储、版本控制，以及开发者协作与开源项目分享。"
                    },
                    { 
                        name: "GitLab", 
                        url: "https://about.gitlab.com/",
                        image: "img/gitlab.jpeg",
                        description: "类似 GitHub 的代码托管平台，侧重企业级协作，内置 CI/CD 工具，方便自动化开发流程。"
                    }
                ]
            },
            {
                subTitle: "开发社区",
                subLinks: [
                    { 
                        name: "CSDN", 
                        url: "https://www.csdn.net/",
                        image: "img/csdn.jpeg",
                        description: "国内主流开发者社区，提供技术博客、编程资源下载、问题解答，覆盖全阶段开发学习需求。"
                    },
                    { 
                        name: "Stack Overflow", 
                        url: "https://stackoverflow.com",
                        image: "img/stackoverflow.jpeg",
                        description: "全球最大编程问答社区，开发者可提问或解答技术难题，覆盖全领域编程问题。"
                    },
                    { 
                        name: "Dev.to", 
                        url: "https://dev.to",
                        image: "img/dev.png",
                        description: "面向开发者的社交与内容平台，以技术文章分享、行业交流为核心，社区氛围开放。"
                    }
                ]
            },
            {
                subTitle: "技术文档",
                subLinks: [
                    { 
                        name: "MDN Web Docs", 
                        url: "https://developer.mozilla.org",
                        image: "img/mdn.jpg",
                        description: "Mozilla 官方维护的 Web 技术权威文档，专注 HTML、CSS、JavaScript 等前端技术，内容准确且更新及时。"
                    },
                    { 
                        name: "W3Schools", 
                        url: "https://www.w3schools.com",
                        image: "img/w3.png",
                        description: "入门友好的编程学习平台，提供 HTML、CSS、Python 等多语言互动教程，支持在线实操练习。"
                    },
                    { 
                        name: "Python", 
                        url: "https://www.python.org/",
                        image: "img/python.jpeg",
                        description: "Python 编程语言官方网站，提供官方解释器下载、权威文档及丰富的生态资源，是学习 Python 的核心入口。"
                    }
                ]
            },
            {
                subTitle: "在线开发",
                subLinks: [
                    { 
                        name: "Replit", 
                        url: "https://replit.com/",
                        image: "img/rep.jpg",
                        description: "在线集成开发环境（IDE），支持多编程语言，无需本地配置，可即时编写、运行代码并分享。"
                    },
                    { 
                        name: "CodePen", 
                        url: "https://codepen.io/",
                        image: "img/codepen.jpeg",
                        description: "专注前端开发的在线编辑平台，支持 HTML、CSS、JavaScript 实时编写与预览，适合展示前端效果。"
                    },
                    { 
                        name: "Jupyter Lab", 
                        url: "https://jupyter.org/",
                        image: "img/jupyter.png",
                        description: "交互式开发环境，主打数据科学领域，支持代码、文档、数据可视化混排，适合 Python 等语言的数据分析工作。"
                    },
                    { 
                        name: "Vercel", 
                        url: "https://vercel.com/",
                        image: "img/vercel.jpeg",
                        description: "前端项目部署平台，主打快速部署静态网站或全栈项目，支持与 Git 仓库（如 GitHub）集成，提交代码后可自动构建并生成预览环境。"
                    },
                    { 
                        name: "Postman", 
                        url: "https://www.postman.com/",
                        image: "img/postman.png",
                        description: "API 开发与测试工具，支持发送各类 HTTP 请求、调试接口、创建自动化测试用例，同时具备团队协作管理 API 的功能。"
                    }
                ]
            },
            {
                subTitle: "开发辅助",
                subLinks: [
                    { 
                        name: "JSON格式解析", 
                        url: "https://www.json.cn/",
                        image: "",
                        description: ""
                    },
                    { 
                        name: "篡改猴", 
                        url: "https://www.tampermonkey.net/",
                        image: "",
                        description: ""
                    },
                    { 
                        name: "JSON Server", 
                        url: "https://www.npmjs.com/package/json-server",
                        image: "img/jsonsever.jpeg",
                        description: "轻量级 npm 工具，可基于 JSON 文件快速生成模拟 REST API，无需编写后端代码，适合前端开发时调试接口。"
                    }
                ]
            }
        ]
    },
    {
        "title": "图表绘制",
        "subGroups": [
            {
                "subTitle": "代码型图表库",
                "subLinks": [
                    {
                        "name": "Pyecharts 简介",
                        "url": "https://pyecharts.org/#/zh-cn/intro",
                        "image": "img/pycharts.jpeg",
                        "description": "基于 Python 的图表库，封装了 Echarts 功能，支持用 Python 代码快速生成交互式图表，无需前端开发基础。"
                    },
                    {
                        "name": "Pyecharts 样例",
                        "url": "https://gallery.pyecharts.org/#/README",
                        "image": "img/pycharts.jpeg",
                        "description": "Pyecharts 官方图表样例库，包含各类图表（如折线图、地图）的完整代码示例，可直接参考或复用。"
                    },
                    {
                        "name": "Echarts",
                        "url": "https://echarts.apache.org/zh/index.html",
                        "image": "img/echarts.jpeg",
                        "description": "Apache 开源的前端图表库，支持折线图、柱状图、地图等数十种图表类型，具备强交互性，广泛用于 Web 可视化场景。"
                    }
                ]
            },
            {
                "subTitle": "无代码可视化工具",
                "subLinks": [
                    {
                        "name": "Tableau",
                        "url": "https://www.tableau.com/",
                        "image": "img/tableau.jpeg",
                        "description": "商业级数据分析与可视化工具，采用拖拽式操作，无需代码即可连接数据并生成专业图表、仪表盘，适合业务分析场景。"
                    },
                    {
                        "name": "ChartCube 图表魔方",
                        "url": "https://chartcube.alipay.com/",
                        "image": "img/chartcube.jpeg",
                        "description": "支付宝推出的在线图表工具，上传数据即可快速生成图表，支持自定义样式，操作简单且无需安装。"
                    }
                ]
            },
            {
                "subTitle": "综合绘图工具",
                "subLinks": [
                    {
                        "name": "PDDON 画图",
                        "url": "https://pddon.com/",
                        "image": "img/pddon.png",
                        "description": "综合型在线绘图工具，支持流程图、思维导图、图表等多种图形绘制，适合日常办公与设计需求。"
                    },
                    {
                        "name": "Canva 可画",
                        "url": "https://www.canva.cn/",
                        "image": "img/conva.jpeg",
                        "description": "全能设计平台，内置丰富图表模板（如数据图表、信息图），支持可视化编辑，兼顾美观性与易用性，适合非专业设计用户。"
                    }
                ]
            }
        ]
    },   
    {
        "title": "地图相关",
        "subGroups": [
            {
                "subTitle": "官方权威平台",
                "subLinks": [
                    {
                        "name": "中国地图",
                        "url": "http://bzdt.ch.mnr.gov.cn/browse.html?picId=%224o28b0625501ad13015501ad2bfc0667%22",
                        "image": "img/zgdt.png",
                        "description": "自然资源部官方地图浏览平台，提供权威的中国各级行政区地图查看服务，数据合规且更新及时。"
                    },
                    {
                        "name": "自然资源部地图技术审查中心",
                        "url": "https://www.zrzyst.cn/",
                        "image": "img/zrzyb.png",
                        "description": "官方地图审查机构平台，提供地图合规审查服务，指导地图制作、使用过程中的合规要求。"
                    }
                ]
            },
            {
                "subTitle": "主流地图服务",
                "subLinks": [
                    {
                        "name": "谷歌地图",
                        "url": "http://www.gditu.net/",
                        "image": "img/gugeditu.png",
                        "description": "提供全球地理信息查询服务，支持地图浏览、地点搜索、路线规划，覆盖国内外多地区地理数据。"
                    },
                    {
                        "name": "百度地图",
                        "url": "https://map.baidu.com/",
                        "image": "img/baiduditu.jpeg",
                        "description": "国内主流地图服务平台，核心功能包括导航、地点查询、周边服务搜索，同时提供地图 API 供开发使用。"
                    },
                    {
                        "name": "高德地图",
                        "url": "https://www.amap.com/",
                        "image": "img/gaodeditu.jpeg",
                        "description": "国内常用地图服务平台，主打精准导航、实时路况查询，以及公交、地铁等公共交通规划功能。"
                    },
                    {
                        "name": "高德地图|地铁图",
                        "url": "https://map.amap.com/subway/index.html?&1100",
                        "image": "img/gaodeditu.jpeg",
                        "description": "高德地图专项服务，提供全国多城市地铁线路图查询，支持站点搜索、换乘路线规划，聚焦公共交通需求。"
                    }
                ]
            },
            {
                "subTitle": "地图开发工具",
                "subLinks": [
                    {
                        "name": "高德地图|坐标拾取",
                        "url": "https://lbs.amap.com/tools/picker",
                        "image": "img/gaodeditu.jpeg",
                        "description": "高德地图专项工具，可通过地图点选获取地点的经纬度坐标，方便开发或数据标注使用。"
                    },
                    {
                        "name": "百度地图|坐标拾取",
                        "url": "https://api.map.baidu.com/lbsapi/getpoint/index.html",
                        "image": "img/baiduditu.jpeg",
                        "description": "百度地图专项工具，支持可视化点选或地址搜索获取坐标，提供百度坐标系（BD09）数据，适配百度地图开发。"
                    },
                    {
                        "name": "百度地图|控制台",
                        "url": "https://lbsyun.baidu.com/apiconsole/key#/home",
                        "image": "img/baiduditu.jpeg",
                        "description": "百度地图开放平台管理后台，用于创建、管理 API 密钥，配置地图服务权限，是开发者对接百度地图 API 的核心入口。"
                    }
                ]
            },
            {
                "subTitle": "地图数据资源",
                "subLinks": [
                    {
                        "name": "资源下载（地图资源下载）",
                        "url": "https://datav.aliyun.com/portal/school/atlas/area_selector#&lat=31.840232667909365&lng=104.2822265625&zoom=4",
                        "image": "img/datav.png",
                        "description": "阿里云 DataV 旗下的地图资源平台，可下载各地区地理数据、矢量地图等素材，适用于数据可视化与地图开发。"
                    },
                    {
                        "name": "开放数据（OpenStreetMap）",
                        "url": "https://download.geofabrik.de/",
                        "image": "img/openstreetmap.jpeg",
                        "description": "开源地图数据下载平台，提供全球各地的开源地理数据，支持自由下载与二次开发，适合开发者获取基础地图资源。"
                    }
                ]
            }
        ]
    },   
    {
        "title": "辅助文档",
        "subGroups": [
            {
                "subTitle": "QGIS 相关文档",
                "subLinks": [
                    {
                        "name": "QGIS 教程",
                        "url": "https://www.osgeo.cn/qgis-tutorial/overview.html#google_vignette",
                        "image": "img/qgis.jpg",
                        "description": "面向 QGIS 入门者的中文教程，涵盖基础操作流程与功能讲解，帮助快速掌握这款开源 GIS 软件的使用方法。"
                    },
                    {
                        "name": "QGIS 文档",
                        "url": "https://docs.qgis.org/3.34/en/docs/user_manual/preamble/preamble.html",
                        "image": "img/qgis.jpg",
                        "description": "QGIS 官方（3.34 版本）全功能参考文档，系统介绍软件功能、操作规范与进阶技巧，是日常使用的权威指南。"
                    },
                    {
                        "name": "QGIS 用户指南",
                        "url": "https://docs.qgis.org/3.16/en/docs/user_manual/index.html",
                        "image": "img/qgis.jpg",
                        "description": "针对 QGIS 3.16 版本的专项用户手册，侧重实际操作场景，适合依赖该版本进行 GIS 工作的用户查询参考。"
                    },
                    {
                        "name": "PyQGIS 开发者指南",
                        "url": "https://docs.qgis.org/testing/en/docs/pyqgis_developer_cookbook/index.html",
                        "image": "img/qgis.jpg",
                        "description": "QGIS 官方 Python 开发手册，讲解如何通过 PyQGIS 库二次开发，适合需要自定义 GIS 功能的开发者。"
                    }
                ]
            },
            {
                "subTitle": "Python 相关文档",
                "subLinks": [
                    {
                        "name": "Tk 图形用户界面",
                        "url": "https://docs.python.org/3/library/tk.html",
                        "image": "img/python.jpeg",
                        "description": "Python 官方内置 Tkinter 库文档，详细说明如何用 Tk 创建图形界面（GUI），是 Python GUI 开发的基础参考。"
                    },
                    {
                        "name": "Python与开源GIS",
                        "url": "https://www.osgeo.cn/pygis/gdal-begin.html#google_vignette",
                        "image": "img/python.jpeg",
                        "description": "中文技术指南，聚焦 Python 与 GDAL、QGIS 等开源 GIS 工具的结合使用，适合开发 GIS 相关 Python 项目的学习者。"
                    },
                    {
                        "name": "Data model",
                        "url": "https://docs.python.org/3/reference/datamodel.html",
                        "image": "img/python.jpeg",
                        "description": "Python 官方数据模型参考文档，解释 Python 对象、数据类型、属性等底层机制，是深入理解 Python 语法的核心资料。"
                    }
                ]
            }
        ]
    },
    {
        "title": "数据资源",
        "subGroups": [
            {
                "subTitle": "官方数据平台",
                "subLinks": [
                    {
                        "name": "世界银行公开数据",
                        "url": "https://data.worldbank.org.cn/",
                        "image": "img/worldbank.jpeg",
                        "description": "国际权威数据平台，提供全球各国经济、人口、环境等多领域宏观数据，支持跨国对比与发展研究。"
                    },
                    {
                        "name": "国家数据-国家统计局",
                        "url": "https://data.stats.gov.cn/",
                        "image": "img/gjtjj.jpg",
                        "description": "中国官方宏观数据平台，发布全国及各省市经济、社会、民生等统计数据，数据权威且具有时效性。"
                    },
                    {
                        "name": "全国一体化数据共享",
                        "url": "http://59.255.22.70:8443/portal/index.htm?code=90000&flag=false",
                        "image": "img/",
                        "description": "国家层面跨部门数据共享平台，整合多领域公共数据资源，面向特定需求提供合规数据获取服务。"
                    },
                    {
                        "name": "北京公共数据开放平台",
                        "url": "https://data.beijing.gov.cn/",
                        "image": "img/beijing.jpg",
                        "description": "北京市官方数据开放平台，发布北京本地交通、医疗、环境等公共数据，支持企业与个人按需使用。"
                    },
                    {
                        "name": "国家信息中心",
                        "url": "http://www.sic.gov.cn/sic/index_pc.html",
                        "image": "img/gjxx.jpeg",
                        "description": "国家权威信息服务机构平台，提供宏观经济分析、政策解读及相关统计数据，服务于决策参考与学术研究。"
                    }
                ]
            },
            {
                "subTitle": "空气质量专项",
                "subLinks": [
                    {
                        "name": "真气网",
                        "url": "https://www.zq12369.com/?city=%E5%8C%97%E4%BA%AC&tab=city",
                        "image": "img/zhenqi.jpeg",
                        "description": "聚焦空气质量数据的平台，支持查询特定城市（如北京）实时空气质量指数（AQI）及相关污染物浓度。"
                    },
                    {
                        "name": "真气网 全国实时分布图",
                        "url": "https://www.zq12369.com/environment.php?tab=china&city=%E6%9D%AD%E5%B7%9E&order=desc#envtab&catid=9",
                        "image": "img/zhenqi.jpeg",
                        "description": "真气网专项功能页面，以可视化地图呈现全国各城市实时空气质量分布，直观展示区域污染情况。"
                    },
                    {
                        "name": "MSN空气质量",
                        "url": "https://www.msn.cn/zh-cn/weather/forecast/in-%E5%8C%97%E4%BA%AC%E5%B8%82,%E7%9F%B3%E6%99%AF%E5%B1%B1%E5%8C%BA?loc=eyJsIjoi55%2Bz5pmv5bGx5Yy6IiwiciI6IuWMl%2BS6rOW4giIsInIyIjoi5YyX5Lqs5biCIiwiYyI6IuS4reWNjuS6uuawkeWFseWSjOWbvSIsImkiOiJjbiIsInQiOjEwMiwiZyI6InpoLWNuIiwieCI6IjExNi4yMjI5OSIsInkiOiIzOS45MDU2OSJ9&weadegreetype=C&ocid=msedgntp&cvid=38d19bb8b1b74e23af327f6338cdf435",
                        "image": "img/msn.jpeg",
                        "description": "结合天气预报的空气质量查询工具，提供特定地区（如北京）空气质量预报、实时指数及污染物详情。"
                    },
                    {
                        "name": "空气质量历史数据",
                        "url": "https://www.aqistudy.cn/historydata/index.php",
                        "image": "img/zhenqi.jpeg",
                        "description": "专注空气质量历史数据查询的平台，支持按城市、日期回溯历史 AQI 及污染物数据，适用于趋势分析。"
                    },
                    {
                        "name": "北京空气质量",
                        "url": "https://zx.bjmemc.com.cn/getAqiList.shtml?timestamp=1735503115320",
                        "image": "img/beijingkq.jpeg",
                        "description": "北京专属空气质量数据接口页面，提供北京各区域实时及历史空气质量数据，数据更新频率高。"
                    }
                ]
            },
            {
                "subTitle": "企业信息查询",
                "subLinks": [
                    {
                        "name": "企查查",
                        "url": "https://www.qcc.com/",
                        "image": "img/qcc.jpeg",
                        "description": "商业级企业信息查询平台，支持查询企业工商注册、信用信息、股权结构等数据，服务于商业调研与合作风控。"
                    },
                    {
                        "name": "天眼查",
                        "url": "https://www.tianyancha.com/",
                        "image": "img/tyc.jpeg",
                        "description": "与企查查功能类似的商业查询平台，提供企业工商信息、法律诉讼、经营状况等数据，满足企业背景调查需求。"
                    },
                    {
                        "name": "国家企业信用信息",
                        "url": "https://www.gsxt.gov.cn/index.html",
                        "image": "img/guojia.png",
                        "description": "中国官方企业信用公示平台，发布企业注册登记、行政处罚、经营异常等信用信息，数据具有法律效力。"
                    }
                ]
            },
            {
                "subTitle": "气象气候数据",
                "subLinks": [
                    {
                        "name": "国家气象科学数据中心",
                        "url": "https://data.cma.cn/",
                        "image": "img/gjqx.jpeg",
                        "description": "中国气象数据官方权威来源，提供历史气象观测、气候诊断、数值预报等数据，适用于气象科研与应用场景。"
                    },
                    {
                        "name": "Carbon Monitor",
                        "url": "https://carbonmonitor.org.cn/",
                        "image": "img/carbonmonitor.png",
                        "description": "聚焦全球碳排放数据的平台，实时或定期发布国家、区域层面碳排放统计数据，支持气候政策研究。"
                    },
                    {
                        "name": "Climate Data Store气候数据存储",
                        "url": "https://cds.climate.copernicus.eu/",
                        "image": "img/cds.png",
                        "description": "欧盟哥白尼计划旗下气候数据平台，提供全球长期气候观测、模拟及预测数据，覆盖气温、降水等多维度。"
                    },
                    {
                        "name": "NOAA 风场轨迹预测",
                        "url": "https://www.ready.noaa.gov/HYSPLIT_traj.php",
                        "image": "img/noaa.png",
                        "description": "美国国家海洋和大气管理局（NOAA）的专项工具，可模拟并预测风场移动轨迹，适用于气象预警、环境扩散分析等场景。"
                    }
                ]
            },
            {
                "subTitle": "学术数据仓库",
                "subLinks": [
                    {
                        "name": "UC Irvine",
                        "url": "https://archive.ics.uci.edu/",
                        "image": "img/uclrvine.jpg",
                        "description": "美国加州大学欧文分校数据仓库，提供海量学术研究用数据集，覆盖机器学习、生物、社会科学等领域，是科研常用数据源。"
                    }
                ]
            }
        ]
    },
    {
        "title": "素材资源",
        "subGroups": [
            {
                "subTitle": "影视相关素材",
                "subLinks": [
                    {
                        "name": "The Digital Theater",
                        "url": "https://thedigitaltheater.com/",
                        "image": "img/theater.png",
                        "description": "提供影视预告片、幕后花絮等视频资源，涵盖各类题材，适合影视爱好者或内容创作参考。"
                    },
                    {
                        "name": "预告片世界",
                        "url": "https://www.6huo.com/",
                        "image": "img/ygpsj.png",
                        "description": "专注影视预告片的聚合平台，更新及时，可浏览、观看国内外最新电影、剧集预告片。"
                    },
                    {
                        "name": "好莱坞电影手册",
                        "url": "https://www.moviesoon.com/",
                        "image": "img/hlw.png",
                        "description": "以影视预告片为核心，同步推送影视资讯，支持按类型、地区筛选预告片内容。"
                    },
                    {
                        "name": "33台词",
                        "url": "https://33.agilestudio.cn/",
                        "image": "img/33.jpeg",
                        "description": "影视台词检索工具，输入关键词即可查找对应影视片段及台词，方便内容引用或学习。"
                    },
                    {
                        "name": "SubHD 字幕",
                        "url": "https://subhdtw.com/",
                        "image": "img/sub.jpg",
                        "description": "提供多语言影视字幕下载服务，覆盖电影、剧集，支持按片名、语种精准检索。"
                    }
                ]
            },
            {
                "subTitle": "图片视频素材",
                "subLinks": [
                    {
                        "name": "Pexels-视频图片",
                        "url": "https://www.pexels.com/zh-cn/",
                        "image": "img/pexels.png",
                        "description": "免费可商用的图像资源平台，提供海量高清图片与短视频，无需版权授权即可用于创作。"
                    },
                    {
                        "name": "Pixabay-图片",
                        "url": "https://www.pixabay.com/zh/",
                        "image": "img/pixabay.jpg",
                        "description": "全球知名免费图库，涵盖图片、插画、矢量图等，支持商用，且无版权使用限制。"
                    },
                    {
                        "name": "Unsplash-图片",
                        "url": "https://www.unsplash.com/",
                        "image": "img/unsplash.jpeg",
                        "description": "高质量免费图片社区，图片风格偏文艺、生活化，适合设计、自媒体等场景商用。"
                    },
                    {
                        "name": "光厂-付费资源",
                        "url": "https://www.vjshi.com/",
                        "image": "img/guangc.jpeg",
                        "description": "付费视觉素材平台，提供高清视频、图片、设计模板等，资源质量高，适合专业创作需求。"
                    }
                ]
            },
            {
                "subTitle": "音频相关工具",
                "subLinks": [
                    {
                        "name": "爱给网-音效",
                        "url": "https://www.aigei.com/",
                        "image": "img/aigei.gif",
                        "description": "综合音频资源平台，提供音效、配乐、配音等素材，部分免费，适合视频、游戏等场景音效补充。"
                    },
                    {
                        "name": "小森平-音效",
                        "url": "https://taira-komori.jpn.org/freesoundtw.html",
                        "image": "img/xiaosenp.png",
                        "description": "日本免费音效资源站，提供自然声、生活声等各类音效，支持免费下载商用，资源风格细腻。"
                    },
                    {
                        "name": "魔音工坊-AI配音",
                        "url": "https://moyin.com/",
                        "image": "img/moyin.jpeg",
                        "description": "AI 智能配音工具，提供多风格语音合成，支持调整语速、语调，适用于视频旁白、广告配音等。"
                    },
                    {
                        "name": "ezstems-人声分离",
                        "url": "https://ezstems.com/",
                        "image": "img/ezstems.png",
                        "description": "音频处理工具，可快速分离歌曲中的人声与伴奏，生成独立音频文件，适合音乐二次创作。"
                    }
                ]
            },
            {
                "subTitle": "设计辅助工具",
                "subLinks": [
                    {
                        "name": "佐糖-抠图",
                        "url": "https://picwish.cn/",
                        "image": "img/zuot.jpeg",
                        "description": "AI 智能抠图工具，支持图片主体快速抠取，操作简单，无需专业设计技能，免费与付费功能结合。"
                    },
                    {
                        "name": "Emoji大全",
                        "url": "https://www.emojidaquan.com/",
                        "image": "img/emoji.jpeg",
                        "description": "Emoji 表情符号聚合查询工具，收录全品类 Emoji，支持复制使用，满足文案、设计中的表情需求。"
                    },
                    {
                        "name": "字由-字体",
                        "url": "https://www.hellofont.cn/",
                        "image": "img/ziyou.jpeg",
                        "description": "字体管理与下载平台，收录海量中文字体，支持预览、一键安装，满足设计中的字体搭配需求。"
                    }
                ]
            },
            {
                "subTitle": "视频制作模板",
                "subLinks": [
                    {
                        "name": "newcger-AE模板",
                        "url": "https://www.newcger.com/",
                        "image": "img/newcger.jpeg",
                        "description": "免费 AE（After Effects）模板平台，涵盖片头、字幕、特效等模板，适合视频后期快速制作。"
                    },
                    {
                        "name": "书生影视-视频模板",
                        "url": "https://c4dsky.com/",
                        "image": "img/shus.jpeg",
                        "description": "提供 C4D、AE、PR 等视频制作模板，资源偏向影视后期、创意视频，部分需付费获取。"
                    },
                    {
                        "name": "LOOKAE-影视后期",
                        "url": "https://www.lookae.com/",
                        "image": "img/lookae.jpeg",
                        "description": "影视后期资源站，提供 AE 模板、插件、教程等，聚焦专业影视后期制作需求，资源更新及时。"
                    }
                ]
            },
            {
                "subTitle": "创作网址导航",
                "subLinks": [
                    {
                        "name": "混剪侠-网址导航-自媒体",
                        "url": "https://www.yugaopian.cn/",
                        "image": "img/huanj.png",
                        "description": "自媒体创作专属导航，整合素材、工具、学习等链接，方便自媒体人高效查找资源。"
                    },
                    {
                        "name": "简视频-网址导航",
                        "url": "https://www.aewz.com/",
                        "image": "img/jianshp.png",
                        "description": "聚焦视频创作的导航平台，分类整理视频剪辑、素材、发布等相关工具与资源链接。"
                    },
                    {
                        "name": "doyoudo-网址导航",
                        "url": "http://www.doyoudo.com/resources",
                        "image": "img/doyoudo.jpeg",
                        "description": "设计与视频学习导航，聚合教程、工具、素材网站，适合设计、剪辑初学者使用。"
                    },
                    {
                        "name": "优设-设计师导航",
                        "url": "https://hao.uisdc.com/",
                        "image": "img/uisdc.png",
                        "description": "设计师专属导航平台，按设计领域（UI / 平面 / 动效）分类链接，覆盖学习、素材、工具全场景。"
                    },
                    {
                        "name": "GOTOVLOG-网址导航",
                        "url": "https://www.gotovlog.com/",
                        "image": "img/goyovlog.png",
                        "description": "Vlog 创作导航，整合拍摄、剪辑、素材、运营相关资源，适配 Vlogger 创作流程。"
                    }
                ]
            },
            {
                "subTitle": "创意资源平台",
                "subLinks": [
                    {
                        "name": "奇迹秀-丰富资源",
                        "url": "https://www.qijishow.com/",
                        "image": "img/qijis.png",
                        "description": "综合创意资源平台，涵盖视频模板、设计素材、音效等，资源类型多样，满足多场景创作。"
                    }
                ]
            }
        ]
    },
    {
        "title": "Work",
        "subGroups": [
            {
                "subTitle": "企业办公平台",
                "subLinks": [
                    {
                        "name": "泰镁会办公",
                        "url": "https://hbg.taimeiyun.cn/login",
                        "image": "img/tai.png",
                        "description": "企业 / 机构内部办公平台，支持登录后进行日常办公协作、流程审批及相关业务管理"
                    },
                    {
                        "name": "华志信自动办公平台",
                        "url": "https://www.huazx.cn/hzxoa/a/login;JSESSIONID=98a5a7b7a61f4625b880824da62596e8",
                        "image": "img/hzx.png",
                        "description": "华志信专属自动化办公系统，提供 OA 办公、数据管理及业务流程自动化服务"
                    }
                ]
            },
            {
                "subTitle": "生态环境监管",
                "subLinks": [
                    {
                        "name": "生态环境部污染源监控中心",
                        "url": "https://www.envsc.cn/",
                        "image": "img/mee.jpeg",
                        "description": "生态环境部官方平台，负责全国污染源监控数据汇总、分析及监管工作"
                    },
                    {
                        "name": "重点排污单位自动监控数据",
                        "url": "https://jkzx.envsc.cn/jointframe/login",
                        "image": "img/cems.png",
                        "description": "重点排污单位监控数据登录端，支持查询、查看重点企业自动监控数据"
                    },
                    {
                        "name": "全国排污许可证管理信息-管理端",
                        "url": "http://10.100.248.253/permit/pollutant/pollutant!goPollutant.action",
                        "image": "img/mee.jpeg",
                        "description": "排污许可证内部管理端，供工作人员进行许可证审批、监管及数据维护"
                    },
                    {
                        "name": "环境行政处罚案件办理信息系统",
                        "url": "http://210.12.80.51:8088/Penalize2013/index.jsp",
                        "image": "img/zhifa.jpeg",
                        "description": "环境行政处罚案件办理平台，支持案件录入、审批、办理及流程跟踪"
                    },
                    {
                        "name": "国家生态环境保护综合行政执法监管",
                        "url": "http://10.251.105.81:8086/zfdp/dist/index.html#/index/general",
                        "image": "img/zhifa.jpeg",
                        "description": "全国生态环境执法监管系统，用于综合行政执法任务分配、监管及结果统计"
                    },
                    {
                        "name": "全国非现场监管执法服务平台",
                        "url": "http://10.251.104.78:12315/zhzs-platform/wry-online",
                        "image": "img/zhifa.jpeg",
                        "description": "生态环境非现场执法平台，通过数据监控实现企业线上监管与执法服务"
                    }
                ]
            },
            {
                "subTitle": "区域生态环境管理",
                "subLinks": [
                    {
                        "name": "石景山生态环境管理平台",
                        "url": "https://219.142.189.254:9020/home",
                        "image": "img/sjs.png",
                        "description": "北京石景山区专属生态环境管理平台，负责区域内生态环境数据监控与管理"
                    },
                    {
                        "name": "石景山移动源精细化管控",
                        "url": "http://124.126.107.133:8090/ydygk",
                        "image": "img/sjs.png",
                        "description": "八宝山区域移动源（车辆、机械等）管控平台，用于移动源排放监控与管理"
                    },
                    {
                        "name": "湖北省大气环境一张图",
                        "url": "http://10.174.182.78:10010/saas/login",
                        "image": "img/hubei.jpeg",
                        "description": "湖北省大气环境综合管理平台，以 “一张图” 形式展示区域大气环境数据"
                    },
                    {
                        "name": "湖北省环保信用评价管理系统",
                        "url": "http://113.57.151.5:8030/HBHB/index.action",
                        "image": "img/xinyong.png",
                        "description": "湖北省企业环保信用评价管理平台，用于企业环保信用评级、查询与管理"
                    },
                    {
                        "name": "湖北省生态环境科学研究院",
                        "url": "http://www.hbaes.ac.cn/",
                        "image": "img/haees.png",
                        "description": "湖北省生态环境科研机构官网，提供科研成果、技术服务及生态环境研究信息"
                    }
                ]
            },
            {
                "subTitle": "空气质量与污染源数据",
                "subLinks": [
                    {
                        "name": "重点区域空气质量改善监督帮扶平台",
                        "url": "http://10.100.245.220:8088/view/view/show/index.vm;jsessionid=DDBBA393A9DB3A57643167DE82A83CAA;jsessionid=601B74070685EC2EBC187C2983E50026?screenId=17025d2030e2041bd256e305f7c98921",
                        "image": "img/",
                        "description": "重点区域空气质量监督帮扶平台，支持查看区域空气质量数据及帮扶任务进展"
                    },
                    {
                        "name": "全国污染源监测数据管理与共享系统",
                        "url": "https://wryjc.cnemc.cn/",
                        "image": "img/cnemc.jpeg",
                        "description": "全国污染源监测数据管理平台，实现污染源监测数据汇总、共享与分析"
                    },
                    {
                        "name": "空气质量统计-英视睿达",
                        "url": "https://mee-h5.airqualitychina.cn:9998/",
                        "image": "img/ysrd.jpeg",
                        "description": "空气质量统计平台，支持空气质量数据统计、分析及可视化查看"
                    },
                    {
                        "name": "全国空气质量（总站）",
                        "url": "https://air.cnemc.cn:18007/",
                        "image": "img/cnemc.jpeg",
                        "description": "中国环境监测总站空气质量实时发布平台，提供全国城市空气质量实时数据"
                    }
                ]
            },
            {
                "subTitle": "碳排放与环境权益",
                "subLinks": [
                    {
                        "name": "上海环境能源交易所",
                        "url": "https://www.cneeex.com/qgtpfqjy/mrgk/2025n/",
                        "image": "img/shangh.jpeg",
                        "description": "上海环境能源交易平台，提供碳排放权、节能权等环境权益交易服务"
                    },
                    {
                        "name": "产品全生命周期温室气体排放系数",
                        "url": "https://lca.cityghg.com/",
                        "image": "img/cpzq.png",
                        "description": "产品全生命周期温室气体排放系数查询平台，提供排放系数数据参考"
                    }
                ]
            },
            {
                "subTitle": "信访与监督帮扶",
                "subLinks": [
                    {
                        "name": "大气监督帮扶",
                        "url": "http://114.251.10.199:8080/zfpt_zf/redirect.jsp",
                        "image": "img/jdbf.png",
                        "description": "大气污染防治监督帮扶平台，用于开展大气环境监督、帮扶任务管理与数据上报"
                    },
                    {
                        "name": "全国生态环境信访投诉举报管理平台",
                        "url": "http://114.251.10.94/weixinmanager/#/login",
                        "image": "img/xinfang.png",
                        "description": "生态环境信访投诉管理平台，用于接收、处理及跟踪生态环境相关投诉举报"
                    }
                ]
            },
            {
                "subTitle": "标准化与综合管理",
                "subLinks": [
                    {
                        "name": "微信公众平台",
                        "url": "https://mp.weixin.qq.com/",
                        "image": "img/vx.png",
                        "description": "微信公众号运营管理工具，支持内容发布、粉丝管理、数据统计及功能配置"
                    },
                    {
                        "name": "环评智慧监管平台",
                        "url": "http://10.102.33.164:8080/EIAITM/a",
                        "image": "img/",
                        "description": "环境影响评价智慧监管系统，支持环评项目审批、监管及数据智能化分析"
                    },
                    {
                        "name": "环评云助手",
                        "url": "https://www.eiacloud.com/hpyzs/",
                        "image": "img/hpy.jpeg",
                        "description": "环评工作辅助工具，提供环评资料查询、标准参考及业务办理指引"
                    },
                    {
                        "name": "国家电网",
                        "url": "http://210.77.177.58/",
                        "image": "img/gjdw.jpeg",
                        "description": "国家电网相关业务平台，支持电力业务办理、数据查询及电力服务对接"
                    },
                    {
                        "name": "国家标准化管理委员会",
                        "url": "https://www.sac.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "国家官方标准化管理机构，负责国家标准制定、发布及标准化工作统筹"
                    },
                    {
                        "name": "全国排污许可证管理信息-公开端",
                        "url": "https://permit.mee.gov.cn/permitExt/defaults/default-index!getInformation.action",
                        "image": "img/mee.jpeg",
                        "description": "排污许可证公开查询平台，面向公众提供企业排污许可证信息查询服务"
                    }
                ]
            }
        ]
    },
    {
        "title": "生态环境",
        "subGroups": [
            {
                "subTitle": "核心主管部门",
                "subLinks": [
                    {
                        "name": "生态环境部",
                        "url": "https://www.mee.gov.cn",
                        "image": "img/guojia.png",
                        "description": "国家级生态环境主管部门，负责制定环保政策法规、统筹生态保护与污染防治、发布全国环境数据，统筹协调全国生态环境工作。"
                    }
                ]
            },
            {
                "subTitle": "部机关直属单位",
                "subLinks": [
                    {
                        "name": "生态环境部环境工程评估中心",
                        "url": "http://www.china-eia.com/",
                        "image": "img/acee.png",
                        "description": "专注环境影响评价技术支持，承担建设项目环评文件技术评估、环评政策研究，为环保审批提供科学依据。"
                    },
                    {
                        "name": "生态环境部卫星环境应用中心",
                        "url": "http://www.secmep.cn/",
                        "image": "img/sacee.png",
                        "description": "利用卫星遥感技术监测全国生态环境，提供大气、水、土壤等环境要素的遥感数据与分析报告，支撑环境监管。"
                    },
                    {
                        "name": "生态环境部中国环境科学研究院",
                        "url": "http://www.craes.cn/",
                        "image": "img/craes.jpeg",
                        "description": "国内顶尖环保科研机构，开展生态保护、污染治理、环境政策等领域研究，为国家环保决策提供技术支撑。"
                    },
                    {
                        "name": "中国环境监测总站",
                        "url": "https://www.cnemc.cn/",
                        "image": "img/cnemc.jpeg",
                        "description": "负责全国环境监测网络建设与管理，统一发布空气质量、水质、土壤等环境质量数据，组织开展全国性环境监测工作。"
                    },
                    {
                        "name": "生态环境部信息中心",
                        "url": "http://www.chinaeic.net/",
                        "image": "img/eic.jpg",
                        "description": "承担生态环境领域信息化建设，负责环境数据管理、信息系统开发与运维，为环保工作提供信息技术支持。"
                    },
                    {
                        "name": "生态环境部环境规划院",
                        "url": "http://www.caep.org.cn/",
                        "image": "img/guihuayuan.jpeg",
                        "description": "编制全国及区域生态环境规划，开展环境政策与规划研究，为生态环境宏观决策与区域治理提供规划支撑。"
                    },
                    {
                        "name": "生态环境部宣传教育中心",
                        "url": "https://www.chinaeol.net/",
                        "image": "img/xjzx.jpeg",
                        "description": "负责生态环境宣传与公众教育，组织环保科普活动、培训环保工作者，提升社会环保意识。"
                    },
                    {
                        "name": "中国环境出版集团有限公司",
                        "url": "https://www.cesp.com.cn/",
                        "image": "img/cepg.jpeg",
                        "description": "专注生态环境领域出版物，出版环保政策、科研、科普类书籍与期刊，传播环保知识与技术。"
                    },
                    {
                        "name": "中国环境新闻工作者协会",
                        "url": "http://www.cfej.net/",
                        "image": "img/cfej.jpeg",
                        "description": "协调环境新闻媒体资源，组织环保新闻报道、培训环境新闻工作者，推动生态环境信息传播。"
                    }
                ]
            },
            {
                "subTitle": "区域与流域派出机构",
                "subLinks": [
                    {
                        "name": "生态环境部华北督察局",
                        "url": "https://hbdc.mee.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "负责华北地区（京津冀晋蒙）生态环境督察，监督地方环保政策落实、查处环境违法行为，推动区域污染防治。"
                    },
                    {
                        "name": "生态环境部华东督察局",
                        "url": "https://hddc.mee.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "负责华东地区（沪苏浙皖闽赣鲁）生态环境督察，督导地方生态保护与污染治理，核查环境问题整改情况。"
                    },
                    {
                        "name": "生态环境部西南督察局",
                        "url": "https://xndc.mee.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "负责西南地区（渝川黔滇藏）生态环境督察，监督区域生态保护（如三江源、长江上游），查处突出环境问题。"
                    },
                    {
                        "name": "生态环境部东北督察局",
                        "url": "https://dbdc.mee.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "负责东北地区（辽吉黑蒙东）生态环境督察，督导老工业基地污染治理、东北林区生态保护，推动区域环境改善。"
                    },
                    {
                        "name": "生态环境部西北督察局",
                        "url": "https://xbdc.mee.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "负责西北地区（陕甘青宁新蒙西）生态环境督察，监督西北生态脆弱区保护、大气与水污染治理，落实环保责任。"
                    },
                    {
                        "name": "生态环境部华南环境科学研究所",
                        "url": "https://www.scies.org/",
                        "image": "img/scies.jpeg",
                        "description": "聚焦华南地区（粤港澳琼桂）生态环境科研，开展区域污染治理、海洋生态保护研究，提供技术支持。"
                    },
                    {
                        "name": "生态环境部南京环境科学研究所",
                        "url": "https://www.nies.org/",
                        "image": "img/hbnies.jpeg",
                        "description": "侧重华东及长江流域生态环境研究，开展生物多样性保护、农业面源污染治理等，支撑区域环保工作。"
                    },
                    {
                        "name": "长江流域生态环境监督管理局",
                        "url": "http://cjjg.mee.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "负责长江全流域生态环境监管，统筹流域污染防治、水资源保护、生态修复，保障长江生态安全。"
                    },
                    {
                        "name": "黄河流域生态环境监督管理局",
                        "url": "http://huanghejg.mee.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "负责黄河全流域生态环境监管，督导流域水土保持、污染治理、生态保护，推动黄河流域生态保护与高质量发展。"
                    },
                    {
                        "name": "淮河流域生态环境监督管理局",
                        "url": "https://huaihejg.mee.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "负责淮河流域生态环境监管，统筹流域水污染防治、水资源调度，改善淮河水质与生态环境。"
                    },
                    {
                        "name": "海河流域北海海域生态环境监管局",
                        "url": "https://hhbhjg.mee.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "负责海河流域及北海海域生态环境监管，统筹流域污染治理与海洋生态保护，保障陆海生态协调。"
                    }
                ]
            },
            {
                "subTitle": "专项科研与技术机构",
                "subLinks": [
                    {
                        "name": "生态环境部核与辐射安全中心",
                        "url": "https://www.chinansc.cn/",
                        "image": "img/hefs.png",
                        "description": "负责核与辐射安全监管技术支持，开展核设施、辐射项目安全评估，保障核与辐射环境安全。"
                    },
                    {
                        "name": "生态环境部环境与经济政策研究中心",
                        "url": "http://www.prcee.org/",
                        "image": "img/jjzx.png",
                        "description": "研究生态环境与经济发展的关系，制定环境经济政策（如碳交易、环保税），为绿色发展提供政策支撑。"
                    },
                    {
                        "name": "生态环境部对外合作与交流中心",
                        "url": "http://www.fecomee.org.cn/",
                        "image": "img/dwzx.png",
                        "description": "组织生态环境领域国际合作，参与全球环境治理、引进国际环保技术与资金，推动国际环保合作项目。"
                    },
                    {
                        "name": "国家海洋环境监测中心",
                        "url": "http://www.nmemc.org.cn/",
                        "image": "img/hyzx.png",
                        "description": "负责全国海洋环境监测与研究，开展海洋污染防治、海洋生态保护、海洋灾害预警，保障海洋生态环境安全。"
                    },
                    {
                        "name": "国家应对气候变化战略研究中心",
                        "url": "http://www.ncsc.org.cn/",
                        "image": "img/ncsc.png",
                        "description": "研究应对气候变化战略与政策，参与国际气候谈判、推动碳达峰碳中和工作，提供气候政策技术支撑。"
                    }
                ]
            }
        ]
    },
    {
        "title": "省市环境",
        "subGroups": [
            {
                "subTitle": "华北地区",
                "subLinks": [
                    {
                        "name": "北京市生态环境局",
                        "url": "http://sthjj.beijing.gov.cn/",
                        "image": "img/",
                        "description": "北京生态环境领域官方平台，发布本地环保政策、公开空气质量 / 水质等环境数据，提供污染防治监管、企业环保审批及公众投诉渠道。"
                    },
                    {
                        "name": "天津市生态环境局",
                        "url": "http://sthj.tj.gov.cn/",
                        "image": "img/",
                        "description": "天津环保领域官方平台，涵盖本地环保政策文件、环境质量实时数据，支持环保执法信息查询、企业环保服务及市民反馈互动。"
                    },
                    {
                        "name": "河北省生态环境厅",
                        "url": "http://hbepb.hebei.gov.cn/",
                        "image": "img/",
                        "description": "河北生态环境领域官方平台，发布本地环保法规、公开环境监测数据，推进污染防治（如大气、水治理），提供环保审批与公众投诉服务。"
                    },
                    {
                        "name": "山西省生态环境厅",
                        "url": "https://sthjt.shanxi.gov.cn/",
                        "image": "img/",
                        "description": "山西环保官方平台，涵盖本地环保政策、环境质量数据，开展污染防治监管，支持企业环保业务办理及公众环境问题反馈。"
                    },
                    {
                        "name": "内蒙古自治区生态环境厅",
                        "url": "https://sthjt.nmg.gov.cn/",
                        "image": "img/",
                        "description": "内蒙古生态环境官方平台，发布环保政策、公开草原 / 大气 / 水质等环境数据，负责污染防治与生态保护监管，提供政务服务与投诉渠道。"
                    }
                ]
            },
            {
                "subTitle": "东北地区",
                "subLinks": [
                    {
                        "name": "辽宁省生态环境厅",
                        "url": "https://sthj.ln.gov.cn/",
                        "image": "img/",
                        "description": "辽宁环保领域官方平台，发布本地环保政策、环境监测数据，开展污染治理监管，支持企业环保审批及市民环境投诉互动。"
                    },
                    {
                        "name": "吉林省生态环境厅",
                        "url": "http://sthjt.jl.gov.cn/",
                        "image": "img/",
                        "description": "吉林生态环境官方平台，涵盖环保政策解读、环境质量（空气、水质）公开，推进污染防治与生态保护，提供环保服务与公众反馈入口。"
                    },
                    {
                        "name": "黑龙江省生态环境厅",
                        "url": "http://sthj.hlj.gov.cn/",
                        "image": "img/",
                        "description": "黑龙江环保官方平台，发布本地环保法规、环境监测数据，负责大气、水、土壤污染防治监管，提供企业环保服务与市民投诉渠道。"
                    }
                ]
            },
            {
                "subTitle": "华东地区",
                "subLinks": [
                    {
                        "name": "上海市生态环境局",
                        "url": "https://sthj.sh.gov.cn/",
                        "image": "img/",
                        "description": "上海生态环境官方服务平台，发布环保政策、公开环境监测数据，提供污染治理监管、环保政务办理及公众环境投诉入口。"
                    },
                    {
                        "name": "江苏省生态环境厅",
                        "url": "http://sthjt.jiangsu.gov.cn/",
                        "image": "img/",
                        "description": "江苏生态环境领域官方平台，发布环保政策、公开环境质量实时数据，开展污染防治监管，支持环保政务办理及公众环境问题反馈。"
                    },
                    {
                        "name": "浙江省生态环境厅",
                        "url": "https://sthjt.zj.gov.cn/",
                        "image": "img/",
                        "description": "浙江环保官方平台，涵盖本地环保政策、环境监测数据，推进污染治理与生态保护，提供企业环保审批及市民反馈互动服务。"
                    },
                    {
                        "name": "安徽省生态环境厅",
                        "url": "https://sthjt.ah.gov.cn/",
                        "image": "img/",
                        "description": "安徽生态环境官方平台，发布环保政策解读、环境质量数据，负责污染防治监管，支持企业环保业务办理及公众环境投诉。"
                    },
                    {
                        "name": "福建省生态环境厅",
                        "url": "http://sthjt.fujian.gov.cn/",
                        "image": "img/",
                        "description": "福建环保领域官方平台，发布本地环保法规、环境监测（含海洋环境）数据，开展污染防治，提供环保政务服务与市民反馈渠道。"
                    },
                    {
                        "name": "江西省生态环境厅",
                        "url": "http://sthjt.jiangxi.gov.cn/",
                        "image": "img/",
                        "description": "江西生态环境官方平台，涵盖环保政策、环境质量公开，推进大气、水、土壤污染治理，支持企业环保服务与公众环境问题反馈。"
                    },
                    {
                        "name": "山东省生态环境厅",
                        "url": "http://sthj.shandong.gov.cn/",
                        "image": "img/",
                        "description": "山东环保官方平台，发布本地环保政策、环境监测数据，开展污染防治监管，提供环保审批与市民环境投诉互动入口。"
                    }
                ]
            },
            {
                "subTitle": "华中地区",
                "subLinks": [
                    {
                        "name": "河南省生态环境厅",
                        "url": "https://sthjt.henan.gov.cn/",
                        "image": "img/",
                        "description": "河南生态环境领域官方平台，发布环保法规、公开环境质量数据，负责污染治理与生态保护，提供企业环保服务与公众反馈渠道。"
                    },
                    {
                        "name": "湖北省生态环境厅",
                        "url": "https://sthjt.hubei.gov.cn/",
                        "image": "img/",
                        "description": "湖北环保官方平台，涵盖本地环保政策、环境监测（含长江流域水质）数据，推进污染防治，支持环保政务办理及市民投诉。"
                    },
                    {
                        "name": "湖南省生态环境厅",
                        "url": "https://sthjt.hunan.gov.cn/",
                        "image": "img/",
                        "description": "湖南生态环境官方平台，发布环保政策解读、环境质量数据，开展大气、水、土壤污染治理，提供企业环保服务与公众反馈入口。"
                    }
                ]
            },
            {
                "subTitle": "华南地区",
                "subLinks": [
                    {
                        "name": "广东省生态环境厅",
                        "url": "http://gdee.gd.gov.cn/",
                        "image": "img/",
                        "description": "广东环保领域官方平台，发布本地环保法规、环境监测数据，负责污染防治与生态保护监管，支持环保审批及市民环境投诉互动。"
                    },
                    {
                        "name": "广西壮族自治区生态环境厅",
                        "url": "http://sthjt.gxzf.gov.cn/",
                        "image": "img/",
                        "description": "广西生态环境官方平台，发布环保政策、公开大气 / 水质 / 海洋环境数据，开展污染治理，提供企业环保服务与公众反馈渠道。"
                    },
                    {
                        "name": "海南省生态环境厅",
                        "url": "https://hnsthb.hainan.gov.cn/",
                        "image": "img/",
                        "description": "海南环保官方平台，涵盖本地环保政策、环境监测（含海洋、热带雨林生态）数据，推进生态保护与污染防治，提供政务服务与投诉入口。"
                    }
                ]
            },
            {
                "subTitle": "西南地区",
                "subLinks": [
                    {
                        "name": "重庆市生态环境局",
                        "url": "http://sthjj.cq.gov.cn/",
                        "image": "img/",
                        "description": "重庆本地生态环境官方平台，负责环保政策解读、环境质量（空气、水质）公开，开展污染防治监管，提供企业环保服务与市民反馈渠道。"
                    },
                    {
                        "name": "四川省生态环境厅",
                        "url": "https://sthjt.sc.gov.cn/",
                        "image": "img/",
                        "description": "四川生态环境领域官方平台，发布环保法规、环境质量数据，负责大气、水、土壤污染治理，支持企业环保服务与公众环境问题反馈。"
                    },
                    {
                        "name": "贵州省生态环境厅",
                        "url": "http://sthj.guizhou.gov.cn/",
                        "image": "img/",
                        "description": "贵州环保官方平台，发布环保政策解读、环境监测数据，推进喀斯特地貌生态保护与污染防治，提供环保政务办理及市民投诉渠道。"
                    },
                    {
                        "name": "云南省生态环境厅",
                        "url": "https://sthjt.yn.gov.cn/",
                        "image": "img/",
                        "description": "云南生态环境官方平台，涵盖环保政策、环境质量（含高原湖泊、森林生态）数据，开展污染防治与生态保护，提供企业环保服务与反馈入口。"
                    },
                    {
                        "name": "西藏自治区生态环境厅",
                        "url": "http://sthjt.xizang.gov.cn/",
                        "image": "img/",
                        "description": "西藏环保领域官方平台，发布本地环保法规、环境监测数据，负责高原生态保护与污染治理，提供环保政务服务与公众反馈渠道。"
                    }
                ]
            },
            {
                "subTitle": "西北地区",
                "subLinks": [
                    {
                        "name": "陕西省生态环境厅",
                        "url": "https://sthjt.shaanxi.gov.cn/",
                        "image": "img/",
                        "description": "陕西生态环境官方平台，发布环保政策、环境质量数据，开展大气（如陕北扬尘）、水治理，支持企业环保审批及市民环境投诉互动。"
                    },
                    {
                        "name": "甘肃省生态环境厅",
                        "url": "https://sthj.gansu.gov.cn/",
                        "image": "img/",
                        "description": "甘肃环保官方平台，涵盖环保政策解读、环境监测数据，推进河西走廊生态保护与污染防治，提供环保服务与公众环境问题反馈。"
                    },
                    {
                        "name": "青海省生态环境厅",
                        "url": "http://sthjt.qinghai.gov.cn/",
                        "image": "img/",
                        "description": "青海生态环境官方平台，发布环保法规、环境监测（含三江源生态、湖泊）数据，负责生态保护与污染治理，提供政务服务与投诉渠道。"
                    },
                    {
                        "name": "宁夏回族自治区生态环境厅",
                        "url": "https://sthjt.nx.gov.cn/",
                        "image": "img/",
                        "description": "宁夏环保领域官方平台，发布本地环保政策、环境质量数据，开展大气、水（如黄河流域）污染防治，提供企业环保服务与反馈入口。"
                    },
                    {
                        "name": "新疆维吾尔自治区生态环境厅",
                        "url": "http://sthjt.xinjiang.gov.cn/",
                        "image": "img/",
                        "description": "新疆生态环境官方平台，涵盖环保政策、环境监测数据，推进绿洲生态保护与污染治理，支持环保政务办理及市民环境投诉互动。"
                    }
                ]
            }
        ]
    },
    {
        "title": "政务平台",
        "subGroups": [
            {
                "subTitle": "法规政策",
                "subLinks": [
                    {
                        "name": "中华人民共和国生态环境部法规标准",
                        "url": "https://www.mee.gov.cn/ywgz/fgbz/",
                        "image": "img/guojia.png",
                        "description": "生态环境部官方法规标准发布平台，提供环保领域法律法规、标准规范的查询与下载，是了解国家环保政策的权威渠道。"
                    },
                    {
                        "name": "中国政府网-政策文件库",
                        "url": "https://www.gov.cn/zhengce/",
                        "image": "img/guojia.png",
                        "description": "国务院官方政策发布平台，整合国务院及各部门发布的行政法规、政策解读、文件通知等，支持全文检索与分类浏览。"
                    },
                    {
                        "name": "全国人大常委会-法律法规数据库",
                        "url": "https://www.npc.gov.cn/wxzl/wxzl/2023-03/01/content_3226000.htm",
                        "image": "img/guojia.png",
                        "description": "全国人大官方法律法规数据库，收录宪法、法律、司法解释及地方性法规，提供权威法律条文查询与更新服务。"
                    }
                ]
            },
            {
                "subTitle": "政务服务",
                "subLinks": [
                    {
                        "name": "国家政务服务平台",
                        "url": "https://gjzwfw.www.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "国务院主办的全国一体化政务服务总枢纽，支持社保、医保、公积金等高频事项‘一网通办’，提供跨省通办、电子证照互认等服务{insert\_element\_0\_}。"
                    },
                    {
                        "name": "全国人力资源和社会保障政务服务",
                        "url": "https://zwfw.mohrss.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "国家级人社政务服务平台，覆盖社保查询、就业服务、人才认定、补贴申请等核心人社业务，支持全国范围内的政务服务办理与信息查询。"
                    },
                    {
                        "name": "国家政务服务平台-部门服务窗口",
                        "url": "https://gjzwfw.www.gov.cn/col/col610/index.html",
                        "image": "img/guojia.png",
                        "description": "整合外交部、发改委、财政部等43个国务院部门的政务服务入口，提供部门专属高频应用、事项分类查询及在线办理功能{insert\_element\_1\_}。"
                    }
                ]
            },
            {
                "subTitle": "省级政府",
                "subLinks": [
                    {
                        "name": "北京市人民政府",
                        "url": "https://www.beijing.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "北京市政府官方门户网站，发布本地政务动态、政策文件，提供市民服务、企业服务入口，同时设有民意反馈渠道，是获取北京政务信息与服务的核心平台。"
                    },
                    {
                        "name": "上海市人民政府",
                        "url": "https://www.shanghai.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "上海市政府官方门户网站，整合‘一网通办’服务入口，提供企业开办、居住证办理、医保报销等高频事项在线办理，支持政策解读与民生热点查询。"
                    },
                    {
                        "name": "四川省人民政府",
                        "url": "https://www.sc.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "四川省政府官方门户网站，发布成渝双城经济圈政策、本地民生服务指南，提供‘天府通办’移动端入口，支持跨区域政务服务协同{insert\_element\_2\_}。"
                    },
                    {
                        "name": "辽宁省人民政府",
                        "url": "https://www.ln.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "辽宁省政府官方门户网站，聚焦东北振兴政策发布、营商环境优化，提供企业信用查询、项目申报等服务，支持全省政务服务事项统一导航。"
                    }
                ]
            },
            {
                "subTitle": "国务院政务",
                "subLinks": [
                    {
                        "name": "自然资源部官网",
                        "url": "https://www.mnr.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "自然资源部官方网站，提供土地、矿产、海洋等资源管理政策发布、全国征地信息查询、永久基本农田保护数据公示等服务{insert\_element\_3\_}。"
                    },
                    {
                        "name": "水利部官网",
                        "url": "https://www.mwr.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "水利部官方网站，发布水资源管理、防汛抗旱、河湖长制等政策文件，提供全国水情信息查询、水利工程建设公示及水土保持监测数据。"
                    },
                    {
                        "name": "国家税务总局-电子税务局",
                        "url": "https://etax.chinatax.gov.cn/",
                        "image": "img/guojia.png",
                        "description": "国家级税务服务平台，支持企业与个人纳税申报、发票查验、税收政策咨询等全流程线上办理，覆盖增值税、所得税等主要税种。"
                    }
                ]
            }
        ]
    },
    {
        "title": "办公辅助",
        "subGroups": [
            {
                "subTitle": "PDF处理",
                "subLinks": [
                    {
                        "name": "doc small",
                        "url": "https://docsmall.com/",
                        "image": "img/docs.jpg",
                        "description": "轻量办公工具集，核心提供 PDF 压缩、格式转换、图片处理功能，操作简洁。"
                    },
                    {
                        "name": "SmallPDF",
                        "url": "https://smallpdf.com/",
                        "image": "img/smallpdf.png",
                        "description": "全功能 PDF 工具，可编辑、压缩、合并、拆分 PDF，支持多平台同步。"
                    },
                    {
                        "name": "PDF24 Tools",
                        "url": "https://tools.pdf24.org/",
                        "image": "img/pdf4.jpeg",
                        "description": "免费 PDF 工具集，含转换、编辑、签名、拆分等功能，无需注册即可使用。"
                    },
                    {
                        "name": "iLovePDF",
                        "url": "https://www.ilovepdf.com/",
                        "image": "img/lovepdf.jpeg",
                        "description": "直观的 PDF 处理工具，支持合并、拆分、压缩、转换等操作，界面简洁易操作。"
                    }
                ]
            },
            {
                "subTitle": "思维梳理",
                "subLinks": [
                    {
                        "name": "ProcessOn思维导图",
                        "url": "https://www.processon.com/",
                        "image": "img/processon.jpeg",
                        "description": "在线协作思维导图工具，可绘制脑图、流程图、甘特图，适合团队梳理思路。"
                    },
                    {
                        "name": "迅捷画图",
                        "url": "https://www.liuchengtu.com/",
                        "image": "img/xuj.jpeg",
                        "description": "在线图表工具，支持思维导图、流程图、组织结构图绘制，新手易上手。"
                    },
                    {
                        "name": "Worktile",
                        "url": "https://sc.pingcode.com/746jy",
                        "image": "img/worktile.png",
                        "description": "团队协作与项目管理工具，可进行任务跟踪、日程安排、文件共享，提升团队效率。"
                    },
                    {
                        "name": "Trello",
                        "url": "https://trello.com/",
                        "image": "img/trello.jpeg",
                        "description": "看板式项目管理工具，通过卡片、列表梳理任务，适合个人或小团队跟踪工作进度。"
                    }
                ]
            },
            {
                "subTitle": "格式转换",
                "subLinks": [
                    {
                        "name": "Convertio",
                        "url": "https://convertio.co/",
                        "image": "img/convertio.jpg",
                        "description": "多格式在线转换工具，支持文档、图片、音频、视频等跨类型格式转换。"
                    },
                    {
                        "name": "aconvert-格式转换",
                        "url": "https://www.aconvert.com/",
                        "image": "img/aconvert.png",
                        "description": "多格式转换工具，支持文档、图片、音频、电子书等格式互转，支持批量处理。"
                    }
                ]
            },
            {
                "subTitle": "OCR文字识别",
                "subLinks": [
                    {
                        "name": "白描网页版",
                        "url": "https://web.baimiaoapp.com/",
                        "image": "img/baimiao.jpg",
                        "description": "在线 OCR 工具，可识别图片中的文字，支持多语言，结果可编辑导出。"
                    },
                    {
                        "name": "金鸣表格文字识别大师",
                        "url": "https://www.51jinming.com/",
                        "image": "img/jinming.jpeg",
                        "description": "专项 OCR 工具，主打表格、票据文字识别，能还原表格格式导出。"
                    }
                ]
            },
            {
                "subTitle": "语言翻译",
                "subLinks": [
                    {
                        "name": "百度翻译",
                        "url": "https://fanyi.baidu.com/mtpe-individual/multimodal#/",
                        "image": "img/bdfy.jpeg",
                        "description": "多语言在线翻译工具，支持文本、文档、图片翻译，满足跨语言沟通需求。"
                    }
                ]
            },
            {
                "subTitle": "设计素材",
                "subLinks": [
                    {
                        "name": "Pexels",
                        "url": "https://www.pexels.com/zh-cn/",
                        "image": "img/pexels.png",
                        "description": "免费无版权图片库，提供海量高清摄影图、视频素材，可用于 PPT、文案配图。"
                    },
                    {
                        "name": "FREEPIK 图标素材",
                        "url": "https://www.freepik.com/",
                        "image": "img/freepik.jpg",
                        "description": "设计素材平台，提供免费 / 付费图标、插图、模板，适合美化 PPT、文档。"
                    },
                    {
                        "name": "iconFont 图标素材",
                        "url": "https://www.iconfont.cn/",
                        "image": "img/iconfont.jpeg",
                        "description": "国内图标资源平台，含海量矢量图标，支持下载多种格式，可商用（需看版权）。"
                    }
                ]
            },
            {
                "subTitle": "AI辅助创作",
                "subLinks": [
                    {
                        "name": "Magic Studio",
                        "url": "https://magicstudio.com/zh/",
                        "image": "img/magic.jpg",
                        "description": "AI 驱动的创意工具集，含图片生成、文本改写、背景去除等功能，辅助内容创作。"
                    }
                ]
            },
            {
                "subTitle": "综合办公",
                "subLinks": [
                    {
                        "name": "蛙蛙工具",
                        "url": "https://www.iamwawa.cn/",
                        "image": "img/wawa.png",
                        "description": "办公工具整合平台，涵盖文本处理、格式转换、OCR 识别等功能，一站式解决小需求。"
                    },
                    {
                        "name": "办公人导航",
                        "url": "https://www.bgrdh.com/",
                        "image": "img/bangongren.jpg",
                        "description": "办公工具导航平台，整合各类办公资源、工具链接，方便快速查找所需工具。"
                    },
                    {
                        "name": "问卷星",
                        "url": "https://www.wjx.cn/",
                        "image": "img/wenjx.jpg",
                        "description": "在线问卷调研工具，支持设计问卷、发放收集、数据统计分析，适合调研反馈收集。"
                    }
                ]
            }
        ]
    },
    {
        "title": "效率工具",
        "subGroups": [
            {
                "subTitle": "协作文档",
                "subLinks": [
                    {
                        "name": "Notion",
                        "url": "https://www.notion.so/",
                        "image": "img/notion.jpeg",
                        "description": "全能型工作空间，可自定义搭建笔记、项目管理、数据库等场景，支持个人信息整合与团队协作。"
                    },
                    {
                        "name": "语雀",
                        "url": "https://www.yuque.com/",
                        "image": "img/yuque.png",
                        "description": "阿里旗下知识管理工具，主打结构化文档创作与团队知识库搭建，适合沉淀专业内容与协作编辑。"
                    },
                    {
                        "name": "飞书文档",
                        "url": "https://www.feishu.cn/",
                        "image": "img/feishu.jpeg",
                        "description": "飞书生态下的实时协作文档工具，支持多人同步编辑，可与日历、会议、云盘等功能联动。"
                    },
                    {
                        "name": "印象笔记",
                        "url": "https://www.yinxiang.com/",
                        "image": "img/yinxiang.jpeg",
                        "description": "全平台笔记工具，支持文字、图片、音频等多形式内容收集，主打碎片化信息整理与跨设备同步。"
                    },
                    {
                        "name": "腾讯文档",
                        "url": "https://docs.qq.com/",
                        "image": "img/tengxunwenjian.png",
                        "description": "腾讯生态协作文档，支持在线表格、PPT、思维导图，可直接分享至微信/QQ，适合轻量团队协作。"
                    }
                ]
            },
            {
                "subTitle": "任务管理",
                "subLinks": [
                    {
                        "name": "Todoist",
                        "url": "https://todoist.com/",
                        "image": "img/todoist.png",
                        "description": "跨平台任务管理工具，支持任务分级、优先级标注、截止日期提醒，适合个人与团队拆解工作目标。"
                    },
                    {
                        "name": "滴答清单",
                        "url": "https://dida365.com/",
                        "image": "img/did滴答清单a.png",
                        "description": "国产轻量化任务工具，整合待办清单、日历、番茄钟功能，支持微信同步，操作简洁易上手。"
                    },
                    {
                        "name": "Teambition",
                        "url": "https://www.teambition.com/",
                        "image": "img/teambition.png",
                        "description": "阿里旗下团队任务平台，支持看板、列表、甘特图视图，可关联项目成员与进度，适合中小团队项目管理。"
                    }
                ]
            },
            {
                "subTitle": "时间规划",
                "subLinks": [
                    {
                        "name": "番茄Todo",
                        "url": "https://www.fanqietodo.com/",
                        "image": "img/fanqie.png",
                        "description": "基于番茄工作法的专注工具，支持专注计时、任务关联、分心拦截，帮助提升工作专注度。"
                    },
                    {
                        "name": "Toggl Track",
                        "url": "https://toggl.com/track/",
                        "image": "img/toggl.png",
                        "description": "时间追踪工具，可记录不同任务的耗时，生成时间统计报表，帮助分析时间分配效率。"
                    },
                    {
                        "name": "Timeanddate",
                        "url": "https://www.timeanddate.com/",
                        "image": "img/timeanddate.png",
                        "description": "多功能时间工具，支持时区转换、倒计时、日程规划，适合跨时区协作或重要节点提醒。"
                    }
                ]
            },
            {
                "subTitle": "同步工具",
                "subLinks": [
                    {
                        "name": "坚果云",
                        "url": "https://www.jianguoyun.com/",
                        "image": "img/jianguoyun.png",
                        "description": "轻量云存储工具，主打文件增量同步与历史版本回溯，支持多设备实时同步，适合文档备份与共享。"
                    },
                    {
                        "name": "OneDrive",
                        "url": "https://onedrive.live.com/",
                        "image": "img/onedrive.png",
                        "description": "微软生态云存储，可与Office文档无缝联动，支持跨设备同步与协作，适合依赖微软办公套件的用户。"
                    },
                    {
                        "name": "Dropbox",
                        "url": "https://www.dropbox.com/",
                        "image": "img/dropbox.png",
                        "description": "国际主流云存储工具，支持文件同步、共享链接与团队协作空间，适合跨国团队或多平台用户。"
                    }
                ]
            },
            {
                "subTitle": "碎片记录",
                "subLinks": [
                    {
                        "name": "Flomo 浮墨",
                        "url": "https://flomoapp.com/",
                        "image": "img/flomo.png",
                        "description": "极简碎片化记录工具，支持快速输入文字、标签分类，无复杂格式，适合捕捉临时想法与知识点。"
                    },
                    {
                        "name": "幕布",
                        "url": "https://mubu.com/",
                        "image": "img/mubu.png",
                        "description": "以大纲笔记为核心的工具，支持文字快速梳理与思维导图转换，适合会议记录或思路整理。"
                    },
                    {
                        "name": "Pinbox",
                        "url": "https://pinbox.app/",
                        "image": "img/pinbox.png",
                        "description": "网页与灵感收藏工具，支持一键保存网页、图片、文字，可分类标签管理，适合积累素材与参考资料。"
                    }
                ]
            }
        ]
    },
    
    {
        "title": "知识社区",
        "subGroups": [
            {
                "subTitle": "学术研究",
                "subLinks": [
                    {
                        "name": "中国知网",
                        "url": "https://www.cnki.net/",
                        "image": "img/cnki.jpeg",
                        "description": "国内核心学术文献数据库，涵盖期刊、学位论文、专利等资源，是学术研究的主要信息来源。"
                    },
                    {
                        "name": "万方数据",
                        "url": "https://www.wanfangdata.com.cn/",
                        "image": "img/wanfang.png",
                        "description": "国内权威学术数据库，补充知网覆盖范围，含期刊、会议论文、标准等资源，支持学术成果检索与分析。"
                    },
                    {
                        "name": "Google Scholar",
                        "url": "https://scholar.google.com/",
                        "image": "img/googlescholar.png",
                        "description": "国际学术检索工具，聚合全球学术文献（论文、专利、书籍），支持引用追踪与作者关联，适合跨国界学术研究。"
                    }
                ]
            },
            {
                "subTitle": "知识问答",
                "subLinks": [
                    {
                        "name": "知乎",
                        "url": "https://www.zhihu.com/",
                        "image": "img/zhihu.jpeg",
                        "description": "综合型问答社区，聚集各领域专业用户，提供深度问答、专栏文章，兼具知识科普与话题讨论功能。"
                    },
                    {
                        "name": "Quora",
                        "url": "https://www.quora.com/",
                        "image": "img/quora.png",
                        "description": "国际版综合问答社区，覆盖全球用户，话题涵盖科学、生活、职场等，适合获取多视角观点与英文知识内容。"
                    }
                ]
            },
            {
                "subTitle": "技术社区",
                "subLinks": [
                    {
                        "name": "掘金",
                        "url": "https://juejin.cn/",
                        "image": "img/juejin.png",
                        "description": "中文技术社区，聚焦程序员群体，提供技术文章、教程、工具分享，覆盖前端、后端、移动端等领域。"
                    },
                    {
                        "name": "Medium",
                        "url": "https://medium.com/",
                        "image": "img/medium.png",
                        "description": "英文优质内容创作平台，聚集全球创作者，以深度文章、观点分享为主，涵盖科技、文化等多领域。"
                    },
                    {
                        "name": "Reddit 技术板块",
                        "url": "https://www.reddit.com/r/programming/",
                        "image": "img/reddit.jpeg",
                        "description": "全球知名社区的技术讨论分区，汇聚全球开发者，分享前沿技术动态、编程经验与行业资讯。"
                    },
                    {
                        "name": "Stack Overflow",
                        "url": "https://stackoverflow.com/",
                        "image": "img/stackoverflow.jpeg",
                        "description": "全球最大编程问答社区，开发者可提问或解答技术难题，覆盖全领域编程问题，是程序员必备工具。"
                    }
                ]
            },
            {
                "subTitle": "热点资讯",
                "subLinks": [
                    {
                        "name": "微博",
                        "url": "https://weibo.com/",
                        "image": "img/vb.jpeg",
                        "description": "实时信息社交平台，可获取热点资讯、行业动态，支持话题讨论与内容传播，兼具社交与信息获取属性。"
                    },
                    {
                        "name": "百度热搜",
                        "url": "https://top.baidu.com/board?platform=pc&sa=pcindex_a_right",
                        "image": "img/bdrs.jpeg",
                        "description": "百度旗下热点聚合平台，实时呈现全网热点话题排行，可快速了解当下热门事件与趋势。"
                    },
                    {
                        "name": "百度指数",
                        "url": "https://index.baidu.com/v2/index.html#/",
                        "image": "img/baidu.jpeg",
                        "description": "关键词数据分析工具，通过数据反映关键词的搜索热度、人群画像，辅助判断话题趋势。"
                    },
                    {
                        "name": "36氪",
                        "url": "https://36kr.com/",
                        "image": "img/36kr.png",
                        "description": "聚焦科技与商业的资讯平台，发布行业深度报道、创业动态与趋势分析，适合关注科技领域发展的用户。"
                    }
                ]
            },
            {
                "subTitle": "兴趣社交",
                "subLinks": [
                    {
                        "name": "豆瓣",
                        "url": "https://www.douban.com/",
                        "image": "img/db.png",
                        "description": "兴趣导向社区，核心是书影音评分与评论，同时涵盖小组讨论、同城活动，适合小众兴趣交流。"
                    },
                    {
                        "name": "B站知识区",
                        "url": "https://www.bilibili.com/v/knowledge/",
                        "image": "img/bilibili.png",
                        "description": "B站旗下知识内容聚合板块，涵盖科普、人文、职场等领域视频，以趣味化、可视化形式传递知识，适合碎片化学习。"
                    }
                ]
            }
        ]
    },

    {
        "title": "网盘存储",
        "subGroups": [
            {
                "subTitle": "国内综合",
                "subLinks": [
                    {
                        "name": "百度网盘",
                        "url": "https://pan.baidu.com/",
                        "image": "img/bdwp.jpg",
                        "description": "国内用户基数大的云存储工具，提供大容量存储、文件同步与分享功能，支持会员解锁高速下载与更多权益。"
                    },
                    {
                        "name": "夸克网盘",
                        "url": "https://pan.quark.cn/",
                        "image": "img/kkwp.png",
                        "description": "主打简洁体验的云存储工具，免费用户可享较高下载速度，支持文件分类管理与跨设备同步。"
                    },
                    {
                        "name": "阿里云盘",
                        "url": "https://www.aliyundrive.com/",
                        "image": "img/aliyp.jpeg",
                        "description": "阿里旗下云存储工具，注重数据安全性与稳定性，支持大文件传输，可与阿里系产品（如钉钉、淘宝）协同使用。"
                    },
                    {
                        "name": "腾讯微云",
                        "url": "https://www.weiyun.com/",
                        "image": "img/txwy.jpeg",
                        "description": "腾讯旗下云存储工具，与微信、QQ 联动紧密，可直接接收社交平台文件，支持多设备同步与手机相册自动备份。"
                    }
                ]
            },
            {
                "subTitle": "国外主流",
                "subLinks": [
                    {
                        "name": "Microsoft OneDrive",
                        "url": "https://onedrive.live.com/",
                        "image": "img/onedrive.png",
                        "description": "微软生态云存储工具，免费提供5GB基础空间，可与Office 365（Word/Excel/PPT）无缝联动，支持跨系统（Windows/macOS）同步。"
                    },
                    {
                        "name": "Google Drive",
                        "url": "https://drive.google.com/",
                        "image": "img/googledrive.png",
                        "description": "谷歌旗下云存储工具，免费提供15GB基础空间，可与谷歌生态（Gmail、Google Docs、Google Photos）协同，适合海外用户或依赖谷歌服务的人群。"
                    },
                    {
                        "name": "Dropbox",
                        "url": "https://www.dropbox.com/",
                        "image": "img/dropbox.png",
                        "description": "国际知名云存储工具，主打文件实时同步与团队协作，支持历史版本回溯，适合跨国团队文件共享或专业创作者备份素材。"
                    }
                ]
            },
            {
                "subTitle": "轻量同步",
                "subLinks": [
                    {
                        "name": "坚果云",
                        "url": "https://www.jianguoyun.com/",
                        "image": "img/jianguoyun.png",
                        "description": "主打“增量同步”的轻量网盘，仅同步文件修改部分，节省流量与时间，支持历史版本管理，适合频繁修改文档的办公人群。"
                    },
                    {
                        "name": "pCloud",
                        "url": "https://www.pcloud.com/",
                        "image": "img/pcloud.png",
                        "description": "欧洲轻量云存储工具，支持“文件按需下载”（不占用本地空间），提供端到端加密功能，注重用户数据隐私保护。"
                    }
                ]
            }
        ]
    },

    {
        "title": "邮箱服务",
        "subGroups": [
            {
                "subTitle": "个人邮箱",
                "subLinks": [
                    {
                        "name": "QQ邮箱",
                        "url": "https://mail.qq.com/",
                        "image": "img/qqyoux.jpeg",
                        "description": "国内常用个人邮箱，与微信、QQ 深度联动，支持邮件实时提醒、2GB大文件传输，附带漂流瓶、记事本等特色功能，新手易上手。"
                    },
                    {
                        "name": "网易邮箱（163邮箱）",
                        "url": "https://email.163.com/",
                        "image": "img/wyem.jpeg",
                        "description": "老牌个人邮箱，免费版提供3GB基础存储，支持多账号管理、邮件加密与日程提醒，界面简洁，适合长期稳定使用。"
                    },
                    {
                        "name": "阿里云邮箱（个人版）",
                        "url": "https://mail.aliyun.com/",
                        "image": "img/aliyoux.jpeg",
                        "description": "阿里旗下个人邮箱，免费提供5GB存储，支持与阿里云盘联动传输大文件，注重账号安全性，适合依赖阿里生态的用户。"
                    }
                ]
            },
            {
                "subTitle": "企业邮箱",
                "subLinks": [
                    {
                        "name": "263云通信",
                        "url": "https://mail.263.net/",
                        "image": "img/263.jpeg",
                        "description": "主打企业级邮箱服务，提供反垃圾邮件、无限容量存储与团队邮件群组功能，支持自定义企业域名，适合中大型企业办公协同。"
                    },
                    {
                        "name": "阿里云邮箱（企业版）",
                        "url": "https://qiye.aliyun.com/product/mail/",
                        "image": "img/aliyoux.jpeg",
                        "description": "阿里旗下企业邮箱，支持自定义域名（如xxx@company.com），提供邮件归档、数据备份与钉钉联动，适合中小微企业降低沟通成本。"
                    },
                    {
                        "name": "腾讯企业邮",
                        "url": "https://exmail.qq.com/",
                        "image": "img/qqyoux.jpeg",
                        "description": "腾讯旗下企业邮箱，基础版免费（限200账号），支持与企业微信、腾讯文档协同，反垃圾邮件技术成熟，适合初创企业或团队。"
                    }
                ]
            },
            {
                "subTitle": "国际邮箱",
                "subLinks": [
                    {
                        "name": "Gmail",
                        "url": "https://mail.google.com/",
                        "image": "img/gmail.png",
                        "description": "谷歌旗下国际通用邮箱，与谷歌生态（Google Drive、Calendar、Docs）无缝联动，支持多语言与跨国邮件快速投递，适合海外沟通或学术交流。"
                    },
                    {
                        "name": "Microsoft Outlook",
                        "url": "https://outlook.live.com/",
                        "image": "img/outlook.png",
                        "description": "微软旗下邮箱服务，免费提供15GB存储，可与Office 365、OneDrive协同，界面简洁且反垃圾邮件能力强，适合跨国办公或依赖微软生态的用户。"
                    }
                ]
            }
        ]
    },
    {
        "title": "在线阅读",
        "subGroups": [
            {
                "subTitle": "原创网文",
                "subLinks": [
                    {
                        "name": "起点中文网",
                        "url": "https://www.qidian.com/",
                        "image": "img/qidian.png",
                        "description": "国内网文行业龙头平台，以原创网络小说为核心，涵盖玄幻、都市等多品类，是众多知名网文IP（如《庆余年》）的发源地，主打章节付费模式。"
                    },
                    {
                        "name": "纵横中文网",
                        "url": "https://www.zongheng.com/",
                        "image": "img/zongheng.jpeg",
                        "description": "专注原创网文的阅读平台，主打玄幻、历史、都市题材，签约大量知名作者（如梦入神机），采用“付费阅读+月票打赏”模式，读者互动性强。"
                    },
                    {
                        "name": "17K小说网",
                        "url": "https://www.17k.com/",
                        "image": "img/17.jpeg",
                        "description": "综合型网文平台，兼顾原创网文与经典出版书，支持作者签约创作，提供“付费阅读+免费试读”双模式，适合偏好多元化网文内容的读者。"
                    }
                ]
            },
            {
                "subTitle": "免费网文",
                "subLinks": [
                    {
                        "name": "番茄小说",
                        "url": "https://fanqieapp.com/",
                        "image": "img/fanqie.png",
                        "description": "字节旗下免费网文平台，以“免费+广告”为核心模式，提供海量网文与出版书籍，支持AI听书、离线缓存，用户基数庞大，适合偏好免费阅读的群体。"
                    },
                    {
                        "name": "七猫小说",
                        "url": "https://www.7mts.com/",
                        "image": "img/7mao.jpeg",
                        "description": "免费网文阅读平台，内容覆盖玄幻、言情、悬疑等品类，主打“无广告畅读”（部分章节需看广告解锁），附带听书功能，界面简洁无冗余。"
                    },
                    {
                        "name": "米读小说",
                        "url": "https://www.miduxs.com/",
                        "image": "img/midu.png",
                        "description": "腾讯旗下免费网文平台，采用“免费+广告”模式，聚焦短平快的网文内容，支持智能推荐与听书，适合碎片化时间阅读。"
                    }
                ]
            },
            {
                "subTitle": "综合阅读",
                "subLinks": [
                    {
                        "name": "微信读书",
                        "url": "https://weread.qq.com/",
                        "image": "img/wereread.png",
                        "description": "腾讯旗下综合阅读平台，以出版书籍（文学、社科、经管等）为主，支持“免费阅读（限部分书）+付费会员”模式，可与微信好友分享笔记，适合深度阅读爱好者。"
                    },
                    {
                        "name": "Kindle Unlimited（亚马逊）",
                        "url": "https://www.amazon.cn/kindle-dbs/fd/kcu",
                        "image": "img/kindle.png",
                        "description": "亚马逊旗下电子书订阅平台，付费会员可免费阅读数十万本出版书（含外文原版），支持Kindle设备与手机APP同步，适合偏好经典出版书的读者。"
                    },
                    {
                        "name": "豆瓣阅读",
                        "url": "https://read.douban.com/",
                        "image": "img/doubanread.png",
                        "description": "豆瓣旗下阅读平台，涵盖出版书籍、原创中篇小说与散文，风格偏文艺、小众，支持单本购买或会员订阅，适合喜欢人文类内容的读者。"
                    }
                ]
            },
            {
                "subTitle": "专业阅读",
                "subLinks": [
                    {
                        "name": "得到",
                        "url": "https://www.dedao.cn/",
                        "image": "img/dedao.png",
                        "description": "知识付费型阅读平台，主打社科、经管、职场类专业书籍与专栏，提供电子书阅读+音频解读，适合追求实用知识与高效学习的用户。"
                    },
                    {
                        "name": "知乎书店",
                        "url": "https://www.zhihu.com/book",
                        "image": "img/zhihu.jpeg",
                        "description": "知乎旗下阅读平台，聚焦社科、科普、职场类书籍，结合知乎问答内容延伸阅读，支持单本购买或盐选会员免费读，适合偏好知识性内容的读者。"
                    }
                ]
            }
        ]
    },
    {
        "title": "影视娱乐",
        "subGroups": [
            {
                "subTitle": "主流平台",
                "subLinks": [
                    {
                        "name": "腾讯视频（原腾讯TV）",
                        "url": "https://v.qq.com/",
                        "image": "img/txtv.jpeg",
                        "description": "主流长视频平台，版权资源丰富，涵盖热门影视剧、综艺、动漫，支持多设备同步，会员可解锁高清与超前点播。"
                    },
                    {
                        "name": "芒果TV",
                        "url": "https://www.mgtv.com/",
                        "image": "img/mgtv.png",
                        "description": "湖南广电旗下长视频平台，综艺制作能力突出，独播综艺（如《乘风破浪》）与自制剧是核心优势，兼顾影视剧与动漫内容。"
                    },
                    {
                        "name": "优酷视频",
                        "url": "https://www.youku.com/",
                        "image": "img/youkou.jpeg",
                        "description": "阿里旗下长视频平台，拥有经典剧集、热门综艺、动漫版权，尤其在港剧、韩剧引进上有优势，支持会员高清观看。"
                    },
                    {
                        "name": "爱奇艺",
                        "url": "https://www.iqiyi.com/",
                        "image": "img/iqqiyi.jpeg",
                        "description": "头部长视频平台，覆盖影视剧、综艺、动漫、纪录片，自制悬疑剧（如《隐秘的角落》）口碑较好，会员可享无广告与超前点播。"
                    },
                    {
                        "name": "央视网",
                        "url": "http://video.cctv.com/",
                        "image": "img/cctv.jpeg",
                        "description": "中央广播电视总台旗下视频平台，提供央视各频道直播与点播，主打新闻、纪录片、主旋律影视剧，内容权威且无版权风险。"
                    }
                ]
            },
            {
                "subTitle": "短视频平台",
                "subLinks": [
                    {
                        "name": "抖音",
                        "url": "https://www.douyin.com/",
                        "image": "img/douyin.jpg",
                        "description": "字节旗下短视频社交平台，以15-60秒短视频为主，内容涵盖生活、娱乐、知识，支持直播与电商带货，用户活跃度高。"
                    },
                    {
                        "name": "快手",
                        "url": "https://www.kuaishou.com/new-reco",
                        "image": "img/kuaishou.jpeg",
                        "description": "主打“接地气”的短视频平台，内容侧重生活记录、才艺展示，下沉市场用户基数大，支持直播与同城互动。"
                    }
                ]
            },
            {
                "subTitle": "二次元平台",
                "subLinks": [
                    {
                        "name": "哔哩哔哩",
                        "url": "https://www.bilibili.com/",
                        "image": "img/bilibili.jpeg",
                        "description": "以二次元文化为核心的视频平台，涵盖动画、番剧、UP主原创视频，同时拥有大量影视、纪录片版权，弹幕互动氛围浓厚。"
                    },
                    {
                        "name": "AcFun",
                        "url": "https://www.acfun.cn/",
                        "image": "img/acfun.jpg",
                        "description": "国内早期二次元视频平台，以动画、番剧、游戏内容为核心，社区氛围小众且活跃，包含弹幕互动与UGC内容创作功能。"
                    }
                ]
            },
            {
                "subTitle": "国际平台",
                "subLinks": [
                    {
                        "name": "YouTube",
                        "url": "https://www.youtube.com",
                        "image": "img/youtube.jpeg",
                        "description": "全球最大视频平台，内容涵盖影视、音乐、教程、Vlog等，支持用户上传原创视频，部分地区需科学上网访问，免费内容多但含广告。"
                    },
                    {
                        "name": "Netflix",
                        "url": "https://www.netflix.com",
                        "image": "img/netflix.jpeg",
                        "description": "全球流媒体巨头，以原创剧集（如《鱿鱼游戏》）、电影、纪录片为核心优势，内容覆盖多国语言，需付费订阅且部分地区需科学上网。"
                    }
                ]
            },
            {
                "subTitle": "影视下载",
                "subLinks": [
                    {
                        "name": "电影天堂",
                        "url": "https://www.dytt8.com/",
                        "image": "img/dytt.png",
                        "description": "提供影视资源下载的平台，涵盖最新电影、电视剧、动漫，资源多为高清版本，但部分内容可能涉及版权问题，使用需谨慎。"
                    },
                    {
                        "name": "4K HDR世界",
                        "url": "https://4khdr.cn/",
                        "image": "img/4k.jpeg",
                        "description": "专注高清影视资源的平台，主打4K、HDR格式的电影、电视剧，适合追求画质的用户，资源多以下载链接形式呈现，需注意版权风险。"
                    }
                ]
            },
            {
                "subTitle": "视频解析",
                "subLinks": [
                    {
                        "name": "VIP在线视频解析",
                        "url": "https://tool.liumingye.cn/video/",
                        "image": "img/vip.jpg",
                        "description": "在线视频解析工具，支持输入主流视频平台的VIP视频链接，免费解析观看，无需开通平台会员，但解析稳定性可能受平台政策影响，部分功能可能失效。"
                    }
                ]
            }
        ]
    },
    {
        "title": "音乐平台",
        "subGroups": [
            {
                "subTitle": "国内综合",
                "subLinks": [
                    {
                        "name": "网易云音乐",
                        "url": "https://music.163.com/",
                        "image": "img/wyy.jpeg",
                        "description": "以“社区 + 音乐”为核心，推荐算法精准，乐评文化浓厚，涵盖正版曲库、独立音乐人作品，支持歌单分享与播客功能。"
                    },
                    {
                        "name": "QQ音乐",
                        "url": "https://y.qq.com/",
                        "image": "img/qqyy.png",
                        "description": "腾讯旗下音乐平台，版权资源丰富（含周杰伦等头部艺人作品），支持高清音质、MV观看，可与微信/QQ账号联动同步歌单。"
                    },
                    {
                        "name": "酷狗音乐",
                        "url": "https://www.kugou.com/",
                        "image": "img/kougou.jpeg",
                        "description": "老牌音乐平台，曲库全面，主打“蝰蛇音效”提升听觉体验，附带K歌、直播功能，用户基数庞大，适合音效爱好者。"
                    },
                    {
                        "name": "千千音乐",
                        "url": "https://music.91q.com/",
                        "image": "img/qianqian.jpeg",
                        "description": "原百度音乐，主打“无版权困扰”的正版曲库，界面简洁无冗余，支持无损音质下载，侧重纯粹的听歌体验。"
                    },
                    {
                        "name": "咪咕音乐",
                        "url": "https://music.migu.cn/",
                        "image": "img/music.jpg",
                        "description": "中国移动旗下平台，拥有大量免费正版曲库，支持“移动用户免流量听歌”，体育赛事主题曲、直播音乐是核心特色。"
                    }
                ]
            },
            {
                "subTitle": "原创独立",
                "subLinks": [
                    {
                        "name": "5sing音乐",
                        "url": "https://5sing.kugou.com/",
                        "image": "img/5sing.jpeg",
                        "description": "专注原创音乐的平台，聚集大量独立音乐人，主打翻唱、原创歌曲分享，支持音乐人签约与作品推广，是创作展示的核心渠道。"
                    },
                    {
                        "name": "街声",
                        "url": "https://www.streetvoice.com/",
                        "image": "img/jiesheng.png",
                        "description": "聚焦独立音乐人的平台，涵盖摇滚、民谣、电子等小众曲风，支持音乐人发布Demo、举办线上演出，适合挖掘小众原创音乐。"
                    }
                ]
            },
            {
                "subTitle": "短视频联动",
                "subLinks": [
                    {
                        "name": "汽水音乐",
                        "url": "https://music.douyin.com/qishui",
                        "image": "img/qishui.png",
                        "description": "字节旗下短视频音乐平台，曲库偏向流行、网络热歌，支持“听歌识曲”（识别抖音BGM），可同步抖音收藏的音乐，适合短视频用户。"
                    },
                    {
                        "name": "快手音乐",
                        "url": "https://music.kuaishou.com/",
                        "image": "img/kuaishou.jpeg",
                        "description": "快手旗下音乐平台，曲库侧重下沉市场流行曲、民谣，支持“一键用歌拍视频”，可同步快手账号的音乐收藏，适合快手创作者。"
                    }
                ]
            },
            {
                "subTitle": "垂直类音乐",
                "subLinks": [
                    {
                        "name": "听蛙纯音乐",
                        "url": "https://www.itingwa.com/",
                        "image": "img/tingwa.jpeg",
                        "description": "专注纯音乐的垂直平台，分类细致（含钢琴、古风、自然音效、白噪音），无广告干扰，适合工作、学习时作为背景音聆听。"
                    },
                    {
                        "name": "潮汐",
                        "url": "https://tidal.com/",
                        "image": "img/chaoxi.png",
                        "description": "主打“助眠与专注”的纯音乐平台，包含白噪音、自然声、轻音乐，支持定时关闭，适合失眠或需要专注时使用（部分功能需会员）。"
                    }
                ]
            },
            {
                "subTitle": "国际主流",
                "subLinks": [
                    {
                        "name": "Spotify",
                        "url": "https://www.spotify.com/",
                        "image": "img/spotify.png",
                        "description": "全球最大流媒体音乐平台，曲库覆盖全球（含外文歌曲、小众曲风），推荐算法精准，支持播客与有声书，需付费订阅且部分地区需科学上网。"
                    },
                    {
                        "name": "Apple Music",
                        "url": "https://music.apple.com/",
                        "image": "img/applemusic.png",
                        "description": "苹果旗下音乐平台，与苹果设备（iPhone、Mac）无缝联动，支持无损音质与空间音频，曲库国际化，需付费订阅，适合苹果生态用户。"
                    }
                ]
            },
            {
                "subTitle": "搜索下载",
                "subLinks": [
                    {
                        "name": "MYFreeMP3",
                        "url": "https://tool.liumingye.cn/music/#/",
                        "image": "img/myfree.jpg",
                        "description": "音乐搜索与下载工具，支持搜索多平台音乐资源，可免费下载不同音质的音频文件，操作简单直接，但部分资源可能涉及版权问题，使用需谨慎。"
                    }
                ]
            }
        ]
    },
    {
        "title": "购物平台",
        "subGroups": [
            {
                "subTitle": "综合全品",
                "subLinks": [
                    {
                        "name": "京东",
                        "url": "https://www.jd.com/",
                        "image": "img/jingdong.jpg",
                        "description": "以“自营 + 物流”为核心优势，家电、3C产品品类丰富，正品保障且配送速度快（次日达/当日达），售后体系完善，适合购买高价值耐用消费品。"
                    },
                    {
                        "name": "淘宝",
                        "url": "https://www.taobao.com/",
                        "image": "img/taobao.png",
                        "description": "国内最大C2C购物平台，商品品类全覆盖（从日常用品到小众商品），支持个性化搜索，中小商家聚集，性价比选择多，适合淘小众或平价商品。"
                    },
                    {
                        "name": "天猫",
                        "url": "https://www.tmall.com/",
                        "image": "img/tianmao.jpeg",
                        "description": "阿里旗下B2C平台，主打“品牌官方店”，商品品质有保障，常联合品牌推出大型促销活动（如双11），适合购买品牌正品或标准化商品。"
                    },
                    {
                        "name": "拼多多",
                        "url": "https://www.pinduoduo.com/",
                        "image": "img/pinduoduo.png",
                        "description": "以“社交拼团”为核心模式，主打低价与农产品直供，覆盖日用、食品、家电等品类，支持“砍价免费拿”，适合追求高性价比或拼团采购的用户。"
                    }
                ]
            },
            {
                "subTitle": "特色电商",
                "subLinks": [
                    {
                        "name": "苏宁易购",
                        "url": "https://www.suning.com/",
                        "image": "img/suning.jpeg",
                        "description": "老牌电商，家电品类是核心优势，线下门店与线上联动，支持“线上下单、线下体验/自提”，兼顾零售与服务，适合购买家电并需线下售后的用户。"
                    },
                    {
                        "name": "网易严选",
                        "url": "https://you.163.com/",
                        "image": "img/wyyx.jpeg",
                        "description": "主打“自营精选”模式，商品聚焦家居、日用、服饰，强调“工厂直供”与高性价比，风格简约实用，适合追求品质生活且偏好极简设计的用户。"
                    },
                    {
                        "name": "唯品会",
                        "url": "https://www.vip.com/",
                        "image": "img/weipinhui.png",
                        "description": "专注“品牌折扣特卖”，涵盖服饰、美妆、箱包等品类，采用“限时折扣”模式，适合购买过季品牌商品或追求高折扣的用户。"
                    }
                ]
            },
            {
                "subTitle": "海外进口",
                "subLinks": [
                    {
                        "name": "亚马逊中国",
                        "url": "https://www.amazon.cn/",
                        "image": "img/amazon.jpeg",
                        "description": "专注进口商品的购物平台，涵盖海外美妆、母婴、食品等品类，依托全球供应链，主打正品海外购，适合购买国外小众或专柜品牌商品。"
                    },
                    {
                        "name": "天猫国际",
                        "url": "https://www.tmall.hk/",
                        "image": "img/tianmao.jpeg",
                        "description": "阿里旗下海外购平台，聚集全球品牌旗舰店，支持“保税仓发货”（快速到货）与“直邮”，商品品类覆盖美妆、母婴、保健品，适合放心购买进口商品。"
                    },
                    {
                        "name": "考拉海购",
                        "url": "https://www.kaola.com/",
                        "image": "img/kaola.png",
                        "description": "主打“自营保税”海外购，以美妆、母婴、保健品为核心，强调“正品溯源”，适合追求进口商品性价比且注重正品保障的用户。"
                    }
                ]
            },
            {
                "subTitle": "即时零售",
                "subLinks": [
                    {
                        "name": "美团优选",
                        "url": "https://youxuan.meituan.com/",
                        "image": "img/meituan.png",
                        "description": "社区团购平台，主打生鲜、日用、食品等高频商品，采用“提前下单、次日自提”模式，价格实惠，适合家庭日常采购。"
                    },
                    {
                        "name": "京东到家",
                        "url": "https://www.jddj.com/",
                        "image": "img/jingdong.jpg",
                        "description": "即时零售平台，联动线下超市（如沃尔玛、永辉），支持“1小时达”，覆盖生鲜、日用、药品等品类，适合应急或追求快速配送的需求。"
                    },
                    {
                        "name": "盒马鲜生",
                        "url": "https://www.hema.cn/",
                        "image": "img/hemaxiansheng.png",
                        "description": "“线上+线下”生鲜电商，主打新鲜食材（海鲜、蔬果），支持“30分钟达”（限门店周边），线下门店可体验加工，适合追求生鲜品质与即时性的用户。"
                    }
                ]
            },
            {
                "subTitle": "兴趣电商",
                "subLinks": [
                    {
                        "name": "抖音电商",
                        "url": "https://haohuo.jinritemai.com/",
                        "image": "img/douyin.jpg",
                        "description": "兴趣电商平台，依托短视频“种草”，涵盖服饰、美妆、家居等品类，支持“直播带货”，适合通过内容发现心仪商品并即时购买。"
                    },
                    {
                        "name": "小红书商城",
                        "url": "https://www.xiaohongshu.com/",
                        "image": "img/xiaohongshu.png",
                        "description": "内容+电商平台，先通过笔记“种草”（美妆、穿搭、生活方式），再跳转商城购买，商品侧重小众品牌与生活好物，适合追求潮流与个性化的用户。"
                    }
                ]
            }
        ]
    },
    {
        "title": "旅游出行",
        "subGroups": [
            {
                "subTitle": "官方票务",
                "subLinks": [
                    {
                        "name": "12306",
                        "url": "https://www.12306.cn/",
                        "image": "img/12306.jpeg",
                        "description": "中国铁路官方唯一购票平台，支持火车票（含高铁/动车）查询、购票、改签、退票，信息权威且无额外手续费，可绑定学生票、军人票等优惠资质。"
                    },
                    {
                        "name": "12308汽车票",
                        "url": "https://www.12308.com/",
                        "image": "img/12308.png",
                        "description": "全国公路客运官方票务平台，支持长途汽车票查询、购票，覆盖多省市汽车站，部分线路可在线退票，适合短途跨城汽车出行。"
                    },
                    {
                        "name": "民航局官方订票平台（航旅纵横）",
                        "url": "https://www.umetrip.com/",
                        "image": "img/hanglvzongheng.png",
                        "description": "民航局授权的官方出行工具，可查询真实航班动态（无延迟）、在线值机选座，支持电子登机牌，无第三方加价，适合关注航班真实性的用户。"
                    }
                ]
            },
            {
                "subTitle": "旅游预订",
                "subLinks": [
                    {
                        "name": "携程旅行",
                        "url": "https://www.ctrip.com/",
                        "image": "img/xiec.jpeg",
                        "description": "综合型旅游平台，覆盖机票、酒店、景点门票、跟团游、自由行等全链条服务，支持“一站式预订”，用户评价与比价功能完善，适合复杂行程规划。"
                    },
                    {
                        "name": "飞猪",
                        "url": "https://www.fliggy.com/",
                        "image": "img/feizhu.jpeg",
                        "description": "阿里旗下旅游平台，与支付宝账号联动（免注册登录），支付便捷，海外酒店、国际机票资源丰富，常推出“会员积分抵现”“花呗分期”优惠，适合出境游用户。"
                    },
                    {
                        "name": "同程旅行",
                        "url": "https://www.ly.com/",
                        "image": "img/tongcheng.png",
                        "description": "侧重“高性价比”出行服务，短途游、周边游产品（如周末民宿+门票套餐）丰富，火车票/机票预订流程简洁，支持“高铁票抢票”功能，适合高频次短途出行用户。"
                    },
                    {
                        "name": "马蜂窝",
                        "url": "https://www.mafengwo.cn/",
                        "image": "img/mafengwo.png",
                        "description": "“攻略+预订”一体化平台，用户原创游记（含小众景点推荐）丰富，可根据攻略直接预订配套酒店/门票，适合喜欢深度游、自主规划行程的用户。"
                    }
                ]
            },
            {
                "subTitle": "比价平台",
                "subLinks": [
                    {
                        "name": "去哪儿网",
                        "url": "https://www.qunar.com/",
                        "image": "img/quna.jpeg",
                        "description": "以“低价搜索”为核心特色，主打机票、酒店比价（可筛选“低价日历”），支持“低价提醒”功能，能快速定位高性价比出行方案，适合预算敏感型用户。"
                    },
                    {
                        "name": "途牛旅游",
                        "url": "https://www.tuniu.com/",
                        "image": "img/tuniu.png",
                        "description": "跟团游比价优势突出，可筛选“高性价比跟团套餐”（含机票+酒店+导游），国内长线游、夕阳红专列产品丰富，适合偏好省心跟团的用户。"
                    }
                ]
            },
            {
                "subTitle": "本地出行",
                "subLinks": [
                    {
                        "name": "美团旅行",
                        "url": "https://travel.meituan.com/",
                        "image": "img/meituan.png",
                        "description": "依托美团本地生活生态，周边游、景点门票、本地民宿预订便捷，可直接用美团余额支付，常搭配“餐饮+门票”套餐，适合本地休闲或短途一日游。"
                    },
                    {
                        "name": "大众点评旅行",
                        "url": "https://www.dianping.com/travel",
                        "image": "img/dianping.png",
                        "description": "侧重“用户真实评价”，可查询景点、酒店的真实体验反馈，周边游产品与本地美食推荐联动，适合注重出行体验口碑的用户。"
                    }
                ]
            },
            {
                "subTitle": "民宿特色",
                "subLinks": [
                    {
                        "name": "Airbnb（爱彼迎）",
                        "url": "https://www.airbnb.cn/",
                        "image": "img/airbnb.png",
                        "description": "全球民宿预订平台，特色住宿（如民宿、树屋、海景房）资源丰富，支持“房东直连”，适合追求个性化住宿体验或家庭出游（需整套房源）的用户。"
                    },
                    {
                        "name": "途家民宿",
                        "url": "https://www.tujia.com/",
                        "image": "img/tujia.png",
                        "description": "国内民宿平台，覆盖“民宿+公寓+别墅”，主打“高性价比整套房源”，支持“即时确认”，部分房源提供“接送机”附加服务，适合国内家庭或多人出行。"
                    }
                ]
            },
            {
                "subTitle": "自驾服务",
                "subLinks": [
                    {
                        "name": "一嗨租车",
                        "url": "https://www.1hai.cn/",
                        "image": "img/yihai.png",
                        "description": "全国连锁租车平台，车型覆盖经济型轿车到SUV，支持“异地取还车”“芝麻信用免押金”，适合自驾出游或异地临时用车。"
                    },
                    {
                        "name": "神州租车",
                        "url": "https://www.zuche.com/",
                        "image": "img/shenzhou.png",
                        "description": "老牌租车平台，网点覆盖广（含机场、高铁站），主打“快速取还”，可选择“尊享服务”（送车上门），适合对取还车效率要求高的用户。"
                    }
                ]
            }
        ]
    },
    {
        "title": "游戏娱乐",
        "subGroups": [
            {
                "subTitle": "综合发行",
                "subLinks": [
                    {
                        "name": "Steam",
                        "url": "https://store.steampowered.com",
                        "image": "img/steam.png",
                        "description": "全球知名游戏数字发行平台，提供海量多厂商游戏（独立游戏、3A大作）、软件，支持社区互动、游戏直播、创意工坊（玩家mod），是PC玩家核心平台。"
                    },
                    {
                        "name": "腾讯WeGame",
                        "url": "https://www.wegame.com.cn/",
                        "image": "img/wegame.png",
                        "description": "国内综合游戏平台，覆盖国产游戏（如《原神》《永劫无间》）与海外引进作品，支持简体中文、本地化支付，部分游戏提供“云存档”，适合国内PC玩家。"
                    }
                ]
            },
            {
                "subTitle": "厂商平台",
                "subLinks": [
                    {
                        "name": "育碧",
                        "url": "https://zh-cn.ubisoft.com/",
                        "image": "img/ub.jpeg",
                        "description": "育碧官方游戏平台，独家提供《刺客信条》《彩虹六号：围攻》《孤岛惊魂》等自研IP游戏，支持游戏更新、联机服务及Uplay会员权益。"
                    },
                    {
                        "name": "Origin（现整合为EA App）",
                        "url": "https://www.origin.com/",
                        "image": "img/origin.jpeg",
                        "description": "EA旗下游戏平台（现逐步迁移至EA App），主打《FIFA》《战地》《模拟人生》等EA专属游戏的下载、更新与联机，支持EA Play会员免费玩库。"
                    },
                    {
                        "name": "Epic",
                        "url": "https://www.epicgames.com/store/",
                        "image": "img/epic.png",
                        "description": "Epic Games官方平台，以“每周免费送游戏”“3A大作独占”（如《堡垒之夜》《赛博朋克2077》限时独占）为特色，支持游戏购买与云存档，性价比高。"
                    },
                    {
                        "name": "暴雪战网",
                        "url": "https://www.blizzard.com/",
                        "image": "img/blizzard.png",
                        "description": "暴雪娱乐专属平台，独家提供《魔兽世界》《守望先锋》《暗黑破坏神》等暴雪IP游戏，支持跨服联机与账号统一管理，适合暴雪粉丝。"
                    }
                ]
            },
            {
                "subTitle": "主机服务",
                "subLinks": [
                    {
                        "name": "Xbox Live",
                        "url": "https://www.xbox.com/",
                        "image": "img/xbox.jpeg",
                        "description": "微软Xbox主机官方网络服务，支持Xbox Series X/S/One主机游戏联机、数字游戏购买，Xbox Game Pass会员可免费玩数百款游戏，兼顾主机与PC跨平台。"
                    },
                    {
                        "name": "PSN（PlayStation Network）",
                        "url": "https://store.playstation.com/",
                        "image": "img/psn.jpeg",
                        "description": "索尼PlayStation官方网络服务，为PS5/PS4主机提供数字游戏购买、联机对战、PS Plus会员（免费游戏+云存档）服务，独占游戏资源丰富（如《战神》系列）。"
                    },
                    {
                        "name": "Nintendo eShop",
                        "url": "https://www.nintendo.com/",
                        "image": "img/nintendo.png",
                        "description": "任天堂官方数字商店，为Switch主机提供游戏、DLC（追加内容）、主题购买下载，主打第一方独占游戏（如《马里奥》《塞尔达传说》系列），适合家庭娱乐。"
                    }
                ]
            },
            {
                "subTitle": "游戏主题",
                "subLinks": [
                    {
                        "name": "云顶之弈主题站",
                        "url": "https://lol.qq.com/tft/#/index",
                        "image": "img/yunding.png",
                        "description": "《英雄联盟》云顶之弈官方主题站，提供实时游戏资讯、版本更新说明、热门阵容推荐、羁绊解读等攻略内容，同步官方赛事信息，适合该游戏玩家提升玩法。"
                    },
                    {
                        "name": "原神官方网站",
                        "url": "https://ys.mihoyo.com/",
                        "image": "img/yuanshen.png",
                        "description": "《原神》官方主题站，发布版本更新内容、角色介绍、活动公告，提供游戏下载入口与玩家社区，适合追踪游戏最新动态与获取官方攻略。"
                    }
                ]
            }
        ]
    },
    
    {
        "title": "Other",
        "subGroups": [
            {
                "subTitle": "桌面美化",
                "subLinks": [
                    {
                        "name": "Rainmeter皮肤区",
                        "url": "https://bbs.rainmeter.cn/forum-210-1.html",
                        "image": "img/rainmeter.png",
                        "description": "专注于Rainmeter桌面美化工具的皮肤资源社区，提供简约、科技、动漫等多风格桌面皮肤下载与交流，适配Windows系统，满足桌面个性化定制需求。"
                    }
                ]
            },
            {
                "subTitle": "网络查询与素材提取工具",
                "subLinks": [
                    {
                        "name": "查询本地ip",
                        "url": "https://myip.ipip.net/",
                        "image": "img/ip.jpeg",
                        "description": "便捷IP查询工具，快速显示本地公网IP地址，同步提供IP归属地、运营商、网络类型（IPv4/IPv6）信息，适用于网络配置、地址验证场景。"
                    },
                    {
                        "name": "B站封面提取",
                        "url": "https://bilicover.magecorn.com/",
                        "image": "img/bzhan.jpg",
                        "description": "B站视频封面专属提取工具，输入视频链接即可获取高清原图，支持批量提取，适配视频创作者、素材收集者保存封面的需求。"
                    }
                ]
            },
            {
                "subTitle": "资源导航",
                "subLinks": [
                    {
                        "name": "BT导航",
                        "url": "https://btmayi.cc/",
                        "image": "img/bt.png",
                        "description": "聚合式合规BT资源导航平台，按影视、软件、文档、音乐分类整合资源站点，支持按更新时间、热度筛选，方便快速查找目标资源（使用时需遵守版权法规）。"
                    }
                ]
            },
            {
                "subTitle": "全球实时观察",
                "subLinks": [
                    {
                        "name": "全球高清实况摄像头",
                        "url": "https://www.skylinewebcams.com/",
                        "image": "img/qqgqsksxt.jpg",
                        "description": "提供全球多地实时画面的在线平台，覆盖城市景观、自然景点、交通枢纽、海滩等场景，支持切换视角、调整清晰度，可直观查看各地实时环境。"
                    }
                ]
            },
            {
                "subTitle": "求职招聘",
                "subLinks": [
                    {
                        "name": "BOSS直聘",
                        "url": "https://www.zhipin.com/wuhan/?ka=header-home-logo&seoRefer=index",
                        "image": "img/boss.jpeg",
                        "description": "聚焦武汉地区的求职招聘平台（支持切换城市），主打“求职者与企业HR直聊”模式，覆盖全职、实习、校招岗位，涉及多行业，助力快速对接招聘需求。"
                    }
                ]
            },
            {
                "subTitle": "设备维修",
                "subLinks": [
                    {
                        "name": "IFIXIT 探索维修世界",
                        "url": "https://zh.ifixit.com/",
                        "image": "img/ifixit.jpeg",
                        "description": "以电子设备维修为核心的学习平台，提供手机、电脑、家电等设备的详细维修教程、拆解步骤，推荐适配维修工具，支持用户自主学习设备维修技能。"
                    }
                ]
            }
        ]
    },   
];

// 1. 生成左侧索引
const indexList = document.getElementById('index-list');
linkData.forEach((group, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#group-${index}`;
    link.textContent = group.title;
    listItem.appendChild(link);
    indexList.appendChild(listItem);
});

// 2. 生成右侧链接卡片（核心修复：创建card元素 + 处理无图片场景）
const linkGroups = document.getElementById('link-groups');
linkData.forEach((group, groupIndex) => {
    // 1. 创建大组容器
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('link-group');
    groupDiv.id = `group-${groupIndex}`;

    // 2. 创建标题栏（大组标题 + 小组标题）
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('group-header');

    // 2.1 大组标题
    const groupTitle = document.createElement('h2');
    groupTitle.textContent = group.title;
    // 点击大组标题显示所有小组的卡片
    groupTitle.addEventListener('click', () => {
        subTabs.forEach(tab => tab.classList.remove('active'));
        allCards.forEach(card => card.style.display = 'flex'); // 显示所有卡片
    });
    headerDiv.appendChild(groupTitle);

    // 2.2 小组标题容器
    const subTabsDiv = document.createElement('div');
    subTabsDiv.classList.add('sub-tabs');
    headerDiv.appendChild(subTabsDiv);

    groupDiv.appendChild(headerDiv);

    // 3. 创建【大组唯一的链接容器】（核心：所有小组的卡片都放这里）
    const bigGroupLinksContainer = document.createElement('div');
    bigGroupLinksContainer.classList.add('big-group-links-container'); // 统一容器类名
    groupDiv.appendChild(bigGroupLinksContainer);

    // 存储当前大组的所有卡片（用于筛选）
    const allCards = [];

    // 4. 循环生成小组标题和链接卡片
    group.subGroups.forEach((subGroup, subIndex) => {
        // 4.1 生成小组标题（筛选按钮）
        const subTab = document.createElement('div');
        subTab.classList.add('sub-tab');
        subTab.textContent = subGroup.subTitle;
        subTab.dataset.subIndex = subIndex;
        subTabsDiv.appendChild(subTab);

        // 4.2 生成该小组的链接卡片（直接放入大组容器，而非小组独立容器）
        subGroup.subLinks.forEach(link => {
            const card = document.createElement('div');
            card.classList.add('link-card');
            card.dataset.subGroup = subIndex; // 标记卡片所属小组
            allCards.push(card); // 加入大组卡片列表

            // 卡片内容（图片+文字，同之前）
            const img = document.createElement('img');
            img.src = link.image || "https://picsum.photos/100/100";
            img.alt = link.name;
            img.classList.add('card-img');
            card.appendChild(img);

            const textContainer = document.createElement('div');
            textContainer.classList.add('card-text');

            const name = document.createElement('a');
            name.href = link.url;
            name.textContent = link.name;
            name.target = "_blank";
            name.classList.add('card-name');
            textContainer.appendChild(name);

            if (link.description) {
                const desc = document.createElement('p');
                desc.textContent = link.description;
                desc.classList.add('card-desc');
                textContainer.appendChild(desc);
            }

            card.appendChild(textContainer);
            bigGroupLinksContainer.appendChild(card); // 直接放入大组容器
        });
    });

    linkGroups.appendChild(groupDiv);

    // 5. 绑定小组标题点击事件（通过data-subGroup筛选卡片）
    const subTabs = subTabsDiv.querySelectorAll('.sub-tab');
    subTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            subTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetSubIndex = tab.dataset.subIndex;
            // 显示目标小组的卡片，隐藏其他
            allCards.forEach(card => {
                if (card.dataset.subGroup === targetSubIndex) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});


// 3. 搜索功能（修复选择器：匹配.card-name而非.link-group a）
const searchInput = document.getElementById('search-input');
const searchBtn = document.querySelector('#search button');

// 搜索逻辑（支持输入框实时搜索 + 按钮触发）
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const allCardNames = document.querySelectorAll('.card-name'); // 匹配所有链接名称
    const allGroups = document.querySelectorAll('.link-group');

    // 1. 控制单个链接卡片显示/隐藏
    allCardNames.forEach(name => {
        const card = name.closest('.link-card'); // 找到父卡片
        const linkText = name.textContent.toLowerCase();
        
        if (linkText.includes(searchTerm)) {
            card.style.display = 'flex'; // 显示卡片（flex布局）
        } else {
            card.style.display = 'none'; // 隐藏卡片
        }
    });

    // 2. 控制分组显示/隐藏（无匹配卡片则隐藏分组）
    allGroups.forEach(group => {
        const visibleCards = group.querySelectorAll('.link-card[style="display: flex;"]');
        if (visibleCards.length > 0) {
            group.style.display = 'flex'; // 显示分组（flex换行）
            group.style.flexWrap = 'wrap';
            group.style.width = '100%';
        } else {
            group.style.display = 'none'; // 隐藏无匹配的分组
        }
    });
}

// 输入框实时搜索
searchInput.addEventListener('input', handleSearch);
// 按钮触发搜索
searchBtn.addEventListener('click', handleSearch);

// 4. 返回顶部功能
function scrollToTop() {
    document.getElementById('content').scrollTop = 0;
}

// 5. 初始化：默认显示所有分组和卡片
window.addEventListener('load', () => {
    document.querySelectorAll('.link-group').forEach(group => {
        group.style.display = 'flex';
        group.style.flexWrap = 'wrap';
    });
    document.querySelectorAll('.link-card').forEach(card => {
        card.style.display = 'flex';
    });
});