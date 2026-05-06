const weeklyReports = [
  {
    id: "2026-W18",
    label: "2026 第 18 周 · 4/27-5/3",
    updated: "2026-05-06",
    theme: "AI 硅光上市与融资同周升温，TFLN 开始补齐 WDM 平台器件",
    materials: ["硅光", "光 I/O", "TFLN", "WDM", "PASIC"],
    summary:
      "本周的行业主线从“技术验证”进一步走向“资本市场定价”。曦智科技 4 月 28 日在港交所上市，成为 AI 硅光芯片公司进入二级市场的标志性事件；灵动芯光完成数千万元天使++轮融资，资金聚焦芯片间光互联、SmartComb 多波长密波光源和 SmartPHY 光 I/O 小芯粒；海外 OpenLight 追加 5000 万美元 Series A-1 融资，把异质集成硅光 PDK、400G 调制器和片上 InP 激光器推到商业化扩张阶段。科研侧，中山大学团队在 ACS Photonics 发表 DUV 光刻兼容的 TFLN 偏振不敏感波长解复用器，说明 TFLN 平台正在从调制器单点突破，补齐 WDM、偏振处理和规模制造所需的无源器件库。",
    watch: [
      "曦智科技上市后的收入确认、客户集中度、毛利率和光互连产品复购情况",
      "灵动芯光 SmartComb 与 SmartPHY 是否形成可验证的芯片间光互连样机",
      "TFLN DUV 工艺能否把调制器、复用/解复用、偏振处理集成到同一平台 PDK",
    ],
    items: [
      {
        category: "公司动态",
        date: "2026-04-28",
        title: "曦智科技在港交所上市，AI 硅光芯片进入二级市场定价窗口",
        summary:
          "4 月 28 日，曦智科技在港交所主板挂牌上市，报道称其成为全球首家登陆资本市场的 AI 硅光芯片企业。上市首日开盘价 880 港元/股，较发行价 183.2 港元/股上涨 380.3%，收盘 886 港元/股，上涨 383.62%，总市值约 815 亿港元。招股书口径显示，公司围绕光子矩阵计算、片上光网络、片间光网络三条技术线，主营光互连与光计算，应用于 AI 数据中心、云计算和自动驾驶。本周观点是：资本市场已经愿意给“以光代电”的 AI 算力基础设施较高溢价，但后续需要用真实交付、收入质量和客户复购来证明估值。",
        facts: [
          ["资本事件", "2026-04-28 港交所上市"],
          ["首日表现", "收盘 886 港元/股，较发行价 +383.62%"],
          ["业务主线", "光互连、光计算、片上/片间光网络"],
        ],
        tags: ["曦智科技", "硅光", "AI 光互连", "IPO", "港股"],
        source: "https://jg-static.eeo.com.cn/article/info?channelUuid=9905934f8ec548ddae87652dbb9eebc6&id=c4810d0b5f9a4aaea9a13f8d9e4ba550",
      },
      {
        category: "公司动态",
        date: "2026-04-30",
        title: "灵动芯光完成数千万元天使++轮融资，押注芯片间光互联",
        summary:
          "36 氪消息显示，硅基光子企业灵动芯光完成数千万元天使++轮融资，由磐霖资本领投，同方投资与深天使合作的子基金汇泽天诚跟投。募集资金将用于芯片间光互联核心技术研发与产品落地，重点推进 SmartComb 多波长密波光源产品化及 SmartPHY 光 I/O 小芯粒研发。这个融资样本和光联芯科形成呼应：一级市场正从传统光模块环节向芯片级光 I/O、片间互联、光源阵列和小芯粒封装迁移。后续要看其光源梳线稳定性、通道间串扰、封装耦合效率和与 GPU/交换 ASIC 生态的接口方案。",
        facts: [
          ["融资轮次", "天使++轮，数千万元"],
          ["投资方", "磐霖资本领投；同方投资、汇泽天诚跟投"],
          ["资金用途", "SmartComb 多波长密波光源；SmartPHY 光 I/O 小芯粒"],
        ],
        tags: ["灵动芯光", "一级市场", "融资", "硅基光子", "光 I/O"],
        source: "https://www.36kr.com/newsflashes/3788621546282246",
      },
      {
        category: "公司动态",
        date: "2026-04-28",
        title: "OpenLight 追加 5000 万美元融资，异质集成硅光 PDK 商业化提速",
        summary:
          "OpenLight 宣布完成追加 5000 万美元 Series A-1 融资，使总融资额达到 8400 万美元。本轮由 Matter Venture Partners 领投，Acclimate Ventures、Catapult Ventures 以及 Xora Innovation、Capricorn Investment Group、Mayfield、New Legacy 等新老投资方参与。公司定位是定制化 Photonic ASIC/PASIC 设计，融资将支持扩展主动与无源光子器件 PDK，包括 400G 调制器和异质集成片上 InP 激光器。行业含义是：硅光竞争正在从“单颗器件性能”转向“PDK、异质集成、客户可复用设计库和制造生态”。",
        facts: [
          ["融资", "Series A-1 追加 5000 万美元；总融资 8400 万美元"],
          ["技术重点", "400G modulator；InP heterogeneously integrated on-chip laser"],
          ["商业模式", "Custom PASIC / silicon photonics PDK"],
        ],
        tags: ["OpenLight", "硅光", "PASIC", "InP 激光器", "400G"],
        source: "https://www.datacenterdynamics.com/en/news/silicon-photonics-startup-openlight-raises-additional-50m-in-extended-series-a-funding-round/",
      },
      {
        category: "科研论文",
        date: "2026-04-30",
        title: "中山大学团队展示 DUV 光刻兼容的 TFLN 偏振不敏感波长解复用器",
        summary:
          "ACS Photonics 论文报道一种面向 TFLN 光子平台的 polarization-insensitive wavelength demultiplexer，器件采用偏振分集方案，由五个 multimode waveguide gratings 和六个 polarization splitter-rotators 构成，可实现五个波长通道。论文重点不是调制器本身，而是补齐通信 PIC 所需的 WDM 与偏振处理模块，并强调 deep-ultraviolet lithography 兼容性。主要观点是：TFLN 如果要进入高容量光通信芯片，必须从高速低压调制扩展到可量产的无源器件库；DUV 工艺兼容、偏振不敏感和多通道 WDM 是平台化的关键里程碑。",
        paperMeta: {
          authors: "Xuejie Mu、Binneng Li、Jiande Cao、Zhongjin Lin、Xinlun Cai 等",
          affiliations: "中山大学电子与信息技术学院，光电材料与技术国家重点实验室；合肥国家实验室",
          journal: "ACS Photonics",
          published: "2026-04-30",
        },
        facts: [
          ["器件", "TFLN polarization-insensitive wavelength DEMUX"],
          ["结构", "5 个 MWG + 6 个 PSR，五波长通道"],
          ["工艺", "Deep-ultraviolet lithography compatible"],
        ],
        tags: ["TFLN", "WDM", "DEMUX", "DUV", "中山大学"],
        source: "https://pubs.acs.org/doi/full/10.1021/acsphotonics.6c00573",
      },
      {
        category: "产业进展",
        date: "2026-04-29",
        title: "美股光通信板块延续强势，AI 数据中心光器件景气仍在交易中",
        summary:
          "经济观察网 4 月 29 日消息称，美股光通信板块多数上涨，其中 Lumentum 涨超 7%，AAOI 涨超 5%，Credo 涨超 4%。这类市场表现本身不是技术突破，但它反映投资者仍在交易 AI 数据中心带来的光模块、激光器、线性驱动、SerDes 和光互连升级周期。与上一周的 Lumentum 关注度相连，本周观点是：资本市场继续给光通信上游景气定价，但需要把短期股价和长期产业趋势分开，尤其关注订单能见度、产能瓶颈、价格压力和客户集中风险。",
        facts: [
          ["市场表现", "Lumentum +7% 以上；AAOI +5% 以上；Credo +4% 以上"],
          ["驱动逻辑", "AI 数据中心光互连和高速光器件需求"],
          ["跟踪变量", "订单、产能、价格、客户集中度"],
        ],
        tags: ["Lumentum", "AAOI", "Credo", "光通信板块", "AI 数据中心"],
        source: "https://www.eeo.com.cn/2026/0429/857799.shtml",
      },
    ],
  },
  {
    id: "2026-W17",
    label: "2026 第 17 周 · 4/20-4/26",
    updated: "2026-04-27",
    theme: "国内高速光通信芯片进入验证与业绩兑现窗口，海外光器件热度继续上行",
    materials: ["硅光", "EML", "TIA/Driver", "TFLN", "BTO"],
    summary:
      "本周的产业信号从“展会发布”转向“客户验证、收入和订单兑现”。优迅股份披露单波 100Gbps 电芯片量产窗口、200Gbps 产品样品测试和 128G Baud 相干芯片送样；长光华芯一季报显示 VCSEL 及光通信芯片系列收入同比大幅增长。海外侧，Lumentum 和 POET 继续受 AI 数据中心光互连需求定价，但估值、客户集中和订单真实性仍是核心核验点。",
    watch: [
      "优迅单波 100Gbps 电芯片三季度量产节奏，以及 200Gbps/128G Baud 相干芯片客户验证反馈",
      "国内 EML、VCSEL、TIA/Driver 与光模块厂商之间的认证周期是否缩短",
      "海外光器件公司订单增速是否能覆盖高估值和产能扩张风险",
    ],
    items: [
      {
        category: "公司动态",
        date: "2026-04-24",
        title: "优迅股份高速光通信芯片研发进入关键客户验证期",
        summary:
          "优迅股份 4 月 21 日机构调研信息显示，单波 100Gbps 电芯片预计 2026 年三季度实现量产，单波 200Gbps 产品已经进入样品测试阶段，128G Baud 相干芯片已完成头部客户送样验证。这个进展的价值不只是单个产品节点，而是说明国产高速电芯片正在从“可做样品”进入“客户验证+量产排程”阶段。后续要看量产良率、误码率、功耗、温漂和与主流 800G/1.6T 光模块平台的适配情况。",
        facts: [
          ["产品节点", "100Gbps 电芯片 Q3 量产预期"],
          ["下一代产品", "200Gbps 样品测试；128G Baud 相干芯片送样"],
          ["观察重点", "客户验证通过率、良率、功耗、可靠性"],
        ],
        tags: ["优迅股份", "电芯片", "相干芯片", "国产替代"],
        source: "https://www.eeo.com.cn/2026/0424/850106.shtml",
      },
      {
        category: "公司动态",
        date: "2026-04-22",
        title: "长光华芯一季度光通信芯片业务高增长，但估值和盈利质量需同步跟踪",
        summary:
          "长光华芯 2026 年一季报显示营业收入 1.30 亿元，同比增长 37.81%；归母净利润 447.96 万元，同比增长 159.73%。更值得关注的是，VCSEL 及光通信芯片系列收入同比增长 1036.79%，体现 AI 光模块需求正在向上游激光和光芯片环节传导。但扣非净利润仍亏损，市场报道也提示 TTM 市盈率处于极高水平，意味着后续判断不能只看收入弹性，还要看产品结构、毛利率持续性、客户放量和费用率改善。",
        facts: [
          ["一季报收入", "1.30 亿元，同比 +37.81%"],
          ["归母净利润", "447.96 万元，同比 +159.73%"],
          ["光通信芯片收入", "VCSEL 及光通信芯片系列同比 +1036.79%"],
        ],
        tags: ["长光华芯", "VCSEL", "EML", "AI 光模块"],
        source: "https://www.eeo.com.cn/2026/0422/847232.shtml",
      },
      {
        category: "公司动态",
        date: "2026-04-25",
        title: "Lumentum 继续受益 AI 数据中心光器件景气",
        summary:
          "Lumentum 近期被市场持续关注，核心逻辑是 AI 数据中心对高速光器件、激光器和光通信组件需求快速增长。报道提到公司 2025 年已大幅上涨，2026 年以来仍保持强势，并与 Nvidia 相关战略投资、北卡产能扩张和头部云厂商需求挂钩。对周报而言，Lumentum 是海外光器件景气度的风向标；但分析上要把股价表现与真实订单、产能爬坡、客户集中度和毛利率拆开看。",
        facts: [
          ["相关方向", "高速光器件 / 数据中心互连"],
          ["需求来源", "AI 集群、云厂商、光模块升级"],
          ["风险点", "估值、客户集中、产能兑现"],
        ],
        tags: ["Lumentum", "LITE", "激光器", "AI 数据中心"],
        source: "https://www.investors.com/stock-lists/ibd-50/lumentum-stock-lite-fiber-optics-data-center-ai-networking/",
      },
      {
        category: "公司动态",
        date: "2026-04-23",
        title: "POET Technologies 因 optical interposer 与 AI 芯片互连预期升温",
        summary:
          "POET 的 chip-scale photonic solutions 和 optical interposer 概念受到市场追捧，报道将其与 AI 芯片间高速互连需求联系起来，也提到可能与大型半导体生态发生订单关系。不过公司 2025 年收入基数很小、亏损较高，并受到做空报告质疑。这个案例适合作为光 I/O 和共封装光学热度的观察样本，但不能直接等同于确定性商业化落地。",
        facts: [
          ["相关方向", "光子中介层 / 光 I/O / 共封装"],
          ["市场信号", "AI 投资热潮推动估值重定价"],
          ["核验点", "真实客户、订单金额、收入确认"],
        ],
        tags: ["POET", "Optical Interposer", "CPO", "AI 芯片"],
        source: "https://www.marketwatch.com/story/poet-technologies-stock-is-rocketing-whats-behind-the-companys-controversial-ai-powered-rise-154613a9",
      },
    ],
  },
  {
    id: "2026-W16",
    label: "2026 第 16 周 · 4/13-4/19",
    updated: "2026-04-19",
    theme: "TFLN 异质集成路线与国产 TIA/Driver 验证同时推进",
    materials: ["TFLN", "SiN", "LiTaO3", "SiGe", "TIA/Driver"],
    summary:
      "本周的技术焦点是“把高性能材料放进成熟平台”。LIGENTEC 在 SPIE Photonics Europe 介绍 TFLN/LiTaO3 与 SiN 的异质集成，强调晶圆键合、高速低插损调制和规模化制造路径。公司侧，卓胜微的 800G/1.6T 光模块用 SiGe TIA/Driver 处于客户送样验证阶段，提示国内射频/模拟芯片公司也在切入光模块电芯片链条。",
    watch: [
      "TFLN on SiN 的插损、VπL、带宽和晶圆级一致性数据",
      "SiGe TIA/Driver 客户验证周期通常较长，关注 2026 下半年是否进入小批量",
      "LPO/CPO 对驱动器线性度、噪声和功耗提出的新要求",
    ],
    items: [
      {
        category: "科研论文",
        date: "2026-04-14",
        title: "TFLN 调制器异质集成到 SiN 平台，指向低损耗可制造光子平台",
        summary:
          "SPIE Photonics Europe 邀请报告提出，通过 wafer bonding 把 lithium niobate 和 lithium tantalate 高速、低插损调制器集成到成熟低损耗 SiN 平台。主要观点是：SiN 负责低损耗无源网络和可扩展制造，TFLN/LiTaO3 提供强电光调制能力，异质集成可以同时满足高带宽、低驱动电压和体量制造。对光通信芯片设计来说，这类平台化路线比单点器件性能更重要，因为它决定了调制器能否进入复杂 PIC、光引擎和可封装系统。",
        paperMeta: {
          authors: "Forrest Valdez、Arif Rahman、Camiel Op de Beeck、Viphretuo Mere、Boris Zabelich、Radha Krishnan、Pragati Aashna、Shayan Mookherjea、Pieter Wuytens",
          affiliations: "LIGENTEC SA；University of California, San Diego",
          journal: "SPIE Photonics Europe 2026, Paper 14100-13",
          published: "2026-04-14",
        },
        facts: [
          ["材料平台", "TFLN / LiTaO3 on SiN"],
          ["器件重点", "高速低插损调制器"],
          ["工艺路线", "异质集成 / 晶圆键合"],
        ],
        tags: ["TFLN", "SiN", "LIGENTEC", "调制器"],
        source: "https://www.spiecareercenter.org/photonics-europe/presentation/Integration-of-thin-film-lithium-niobate-modulators-on-a-SiN/14100-13",
      },
      {
        category: "公司动态",
        date: "2026-04-13",
        title: "卓胜微 800G/1.6T 光模块 TIA/Driver 送样验证，预计量产窗口在 2026 下半年至 2027 年",
        summary:
          "公开信息显示，卓胜微面向 800G/1.6T 光模块的 SiGe TIA/Driver 芯片已完成流片与内部测试，并向中际旭创、新易盛、天孚通信等国内头部光模块厂商送样。当前尚未进入小批量试产，也没有量产订单，验证周期可能需要 12 至 18 个月。这个进展说明国内光模块上游电芯片供给正在扩容，但从送样到量产仍受客户认证、产线优先级、性能对标国际成熟工艺等因素约束。",
        facts: [
          ["产品", "800G/1.6T 光模块用 SiGe TIA/Driver"],
          ["阶段", "流片和内测完成，客户送样验证"],
          ["量产窗口", "2026 下半年至 2027 年"],
        ],
        tags: ["卓胜微", "TIA", "Driver", "SiGe", "1.6T"],
        source: "https://www.eeo.com.cn/2026/0413/836888.shtml",
      },
      {
        category: "产业进展",
        date: "2026-04-13",
        title: "高速光模块一季度出货提升，CPO/硅光概念继续扩散",
        summary:
          "一季度 800G、1.6T 等高速光模块出货提升的报道，反映 AI 集群建设对光模块的拉动仍处于高景气阶段。产业链讨论重点从单纯速率升级扩展到 CPO、硅光、LPO、OCS 等系统方案。对后续周报的跟踪方法应从“谁发布了新品”升级到“谁进入客户验证、谁拿到订单、谁解决了功耗和封装瓶颈”。",
        facts: [
          ["速率主线", "800G 放量，1.6T 加速"],
          ["技术方向", "CPO / 硅光 / LPO / OCS"],
          ["判断标准", "出货量、认证、功耗、良率"],
        ],
        tags: ["CPO", "硅光", "800G", "1.6T"],
        source: "https://finance.sina.com.cn/wm/2026-04-13/doc-inhukkny4729062.shtml?froms=ggmp",
      },
    ],
  },
  {
    id: "2026-W15",
    label: "2026 第 15 周 · 4/6-4/12",
    updated: "2026-04-12",
    theme: "光通信芯片后道设备融资加速，硅光规模化被产业联盟定为年度关键",
    materials: ["硅光", "光芯片测试", "后道设备", "TFLN"],
    summary:
      "本周中国一级市场的重点是圣昊光电完成 C 轮融资，其定位不是光模块成品，而是光通信芯片加工、测试设备与后道整体解决方案，说明资本开始关注高速光芯片扩产背后的装备短板。产业侧，SEMI 硅光产业联盟将 2026 年定义为硅光规模化部署关键年，核心瓶颈集中在量产、封装、测试、良率和标准化。",
    watch: [
      "圣昊光电融资后是否扩充测试设备产能和代工服务能力",
      "国内光芯片测试、耦合、封装设备是否出现更多融资或订单",
      "硅光量产瓶颈从设计转向封装测试和可靠性验证",
    ],
    items: [
      {
        category: "公司动态",
        date: "2026-04-10",
        title: "圣昊光电完成 C 轮融资，加码光通信芯片加工与测试设备",
        summary:
          "圣昊光电 4 月 7 日完成 C 轮融资，投资方包括创钰投资、山证投资、毅达资本、远致瑞信、河北沿海产业投资基金及观新生元创投。公司面向光通信产业链提供芯片加工、测试设备和后道产线关键装备，核心技术、关键零部件、软件、算法和特殊材料加工工艺强调自主研发。这个融资的行业意义在于：高速光芯片放量不只缺芯片设计，也缺高吞吐、高一致性、高可靠性的国产测试和后道装备。",
        facts: [
          ["融资轮次", "C 轮"],
          ["投资方", "创钰投资、山证投资、毅达资本等"],
          ["业务定位", "光通信芯片加工与测试设备、后道解决方案"],
        ],
        tags: ["圣昊光电", "一级市场", "融资", "测试设备", "后道装备"],
        source: "https://www.ledinside.cn/news/20260410-61445.html",
      },
      {
        category: "产业进展",
        date: "2026-04-10",
        title: "SEMI 论坛称 2026 年为硅光规模化部署关键年",
        summary:
          "SEMI 硅光产业联盟论坛围绕 AI 数据中心光互连量产瓶颈展开，参与方包括 TSMC、ITRI、Coherent、住友电工、Advantest 等产业链环节。报道的重点不是单项器件指标，而是产业化共识：硅光从样品和示范走向规模部署时，测试、封装、良率、供应链协同和标准化会成为真正约束。对中国公司来说，设备、封装、耦合和可靠性验证环节可能成为新的国产替代入口。",
        facts: [
          ["会议主题", "硅光量产与 AI 数据中心光互连"],
          ["参与环节", "代工、设备、光器件、测试"],
          ["关键瓶颈", "封装、测试、良率、标准化"],
        ],
        tags: ["SEMI", "Silicon Photonics", "量产", "光互连"],
        source: "https://www.creating-nanotech.com/en-US/newsc302-semi-2026-marks-the-inaugural-year-for-scaled-silicon-photonics-deployment-optical-interconnects-key-to-mass-production",
      },
      {
        category: "科研论文",
        date: "2026-03-31",
        title: "TFLN on sapphire 中红外调制器完成版本记录更新",
        summary:
          "Nature Communications 论文的版本记录显示，该工作于 2026 年 2 月 21 日发表，并在 3 月 31 日形成 version of record。论文把 TFLN 的强电光响应带到 sapphire 衬底和中红外场景，为中红外片上调制、气体传感、红外光谱与量子级联激光器集成提供路线。产业上更应关注其插损、驱动电压、热稳定性和封装难度，而不是只把它视为通信近红外 TFLN 的简单延伸。",
        paperMeta: {
          authors: "Pierre Didier、Prateek Jain、Mathieu Bertrand 等",
          affiliations: "ETH Zurich；ShanghaiTech University 等",
          journal: "Nature Communications",
          published: "2026-02-21；version of record 2026-03-31",
        },
        facts: [
          ["材料平台", "TFLN on sapphire"],
          ["应用波段", "中红外"],
          ["潜在应用", "片上中红外调制、传感、光谱"],
        ],
        tags: ["TFLN", "Sapphire", "Mid-IR", "Nature Communications"],
        source: "https://www.nature.com/articles/s41467-026-69880-5",
      },
    ],
  },
  {
    id: "2026-W14",
    label: "2026 第 14 周 · 3/30-4/5",
    updated: "2026-04-05",
    theme: "光计算与光互连公司进入资本市场窗口，TFLN 专题征稿显示研究热度延续",
    materials: ["光计算", "Scale-up 光互连", "TFLN", "LNOI"],
    summary:
      "本周曦智科技递表港交所成为资本市场焦点。其招股材料相关报道强调，产品已走出试点并在大规模计算集群部署，客户数量和 MFU 提升数据成为光互连商业化的重要叙事。科研生态侧，AIP 对 TFLN integrated photonics 的专题征稿覆盖调制器、量子、微腔、光梳、PPLN、异质集成、中红外等方向，说明 TFLN 仍处在高密度创新期。",
    watch: [
      "曦智科技 IPO 后披露的收入结构、客户集中度、毛利率和研发投入",
      "Scale-up 光互连在 GPU 集群中的真实部署规模与性能收益",
      "TFLN 论文从单器件指标走向平台工艺、封装和系统应用",
    ],
    items: [
      {
        category: "公司动态",
        date: "2026-03-31",
        title: "曦智科技递表港交所，光互连与光计算商业化进入 IPO 叙事",
        summary:
          "报道显示，曦智科技于 3 月 30 日正式递表港交所，业务覆盖 AI 光互连及光计算。公开报道援引资料称，截至 2025 年 12 月 31 日，公司已实现 44 家客户的商业化部署，为数个千卡 GPU 集群提供支持，平均提升模型浮点运算利用率 MFU 超过 50%；按 2025 年收入计，其在中国 Scale-up 光互连市场排名第二，光计算芯片累计出货量排名世界第一。需要重点核验的是收入可持续性、客户复购、产品毛利和部署收益是否能在更多集群复现。",
        facts: [
          ["资本事件", "递表港交所"],
          ["商业化数据", "44 家客户；数个千卡 GPU 集群"],
          ["性能表述", "平均 MFU 提升超过 50%"],
        ],
        tags: ["曦智科技", "IPO", "光计算", "光互连", "一级市场"],
        source: "https://eu.36kr.com/zh/p/3746188060738305",
      },
      {
        category: "科研论文",
        date: "2026-03-31",
        title: "AIP 启动 TFLN 集成光子专题，方向覆盖调制、量子、光梳和异质集成",
        summary:
          "AIP Publishing 的 Applied Physics Letters 专题面向 Thin-film lithium niobate for integrated photonics 征稿，截止日期为 2026 年 5 月 31 日。专题覆盖 LN 电光调制器、量子光学、高 Q LNOI 微腔、频率梳、周期极化 PPLN 纳米结构、混合集成、LN on sapphire、中红外 LNOI、低损耗波导和声光器件。这个征稿本身不是单篇实验结果，但很好地标示了 2026 年 TFLN 研究的热点地图：从“能做高性能器件”转向“能否形成可复用平台”。",
        paperMeta: {
          authors: "Guest editors: Mengjie Yu、Andy Boes",
          affiliations: "University of California, Berkeley；The University of Adelaide",
          journal: "Applied Physics Letters Special Topic",
          published: "征稿截止 2026-05-31",
        },
        facts: [
          ["专题方向", "TFLN integrated photonics"],
          ["覆盖主题", "EO 调制、量子、微腔、光梳、PPLN、异质集成"],
          ["产业含义", "平台化、低损耗和可制造成为关键词"],
        ],
        tags: ["TFLN", "LNOI", "AIP", "Special Topic"],
        source: "https://publishing.aip.org/publications/journals/special-topics/app/thin-film-lithium-niobate-for-integrated-photonics/",
      },
    ],
  },
  {
    id: "2026-W13",
    label: "2026 第 13 周 · 3/23-3/29",
    updated: "2026-03-29",
    theme: "OFC 后产业路线收敛：1.6T 规模启幕，XPO/NPO/CPO/OCS 多线并行",
    materials: ["硅光", "NPO", "XPO", "CPO", "OCS"],
    summary:
      "OFC 2026 后的行业复盘显示，1.6T 进入规模应用窗口，3.2T 工程样品和 NPO 系统验证成为前沿信号。资本侧，光联芯科获得红杉、高瓴、君联等持续押注，把片间光互连和芯片级光 I/O 推到一级市场中心。上市公司侧，东山精密/索尔思的产能、订单和整合进度成为国内光芯片供应链关键观察点。",
    watch: [
      "1.6T 从发布走向规模出货，关注 200G/lambda 与 400G/lambda 路线分化",
      "NPO/XPO/CPO 是否在头部 CSP 形成系统级验证闭环",
      "片间光 I/O 初创公司的融资是否转化为工程样机和客户试点",
    ],
    items: [
      {
        category: "公司动态",
        date: "2026-03-23",
        title: "光联芯科累计完成数亿元融资，片间光互连成为中国一级市场热点",
        summary:
          "光联芯科近期新一轮融资由君联资本领投，红杉中国、高瓴创投等老股东持续超额追投，成立两年已完成四轮融资。公司定位是 AI 大算力时代的光互连架构建造者，强调芯片级光 I/O 直接面向芯片内部或芯片间互连，将光引擎与芯片共封装，实现“电负责计算、光专注传输”。这类融资说明资本已从传统光模块延伸到更靠近计算芯片的互连层，但后续需要看到带宽密度、能效、封装良率和生态兼容性数据。",
        facts: [
          ["融资规模", "累计数亿元"],
          ["投资方", "君联资本、红杉中国、高瓴创投等"],
          ["技术定位", "芯片级光 I/O / 光互连架构"],
        ],
        tags: ["光联芯科", "一级市场", "融资", "光 I/O", "共封装"],
        source: "https://36kr.com/p/3735125987180801",
      },
      {
        category: "产业进展",
        date: "2026-03-25",
        title: "OFC 2026 观察：1.6T 规模启幕，XPO/NPO/CPO 路线多元并行",
        summary:
          "OFC 2026 展后观察认为，光模块厂商集中展示从 1.6T 到 XPO、NPO、CPO 的前沿方案，OCS 全光交换也成为亮点。TeraHop、新易盛、Coherent、华工正源、光迅科技、剑桥科技、Amphenol 等均展示相关方案。行业判断从“速率升级”变成“系统架构选择”：LPO 降功耗和成本，NPO 缩短电互连距离，CPO 指向更高集成度，OCS 则服务大规模算力调度。",
        facts: [
          ["速率阶段", "1.6T 规模化；3.2T 工程化"],
          ["路线", "XPO / NPO / CPO / OCS"],
          ["核心变量", "功耗、封装、系统验证、CSP 导入"],
        ],
        tags: ["OFC 2026", "1.6T", "3.2T", "NPO", "CPO", "OCS"],
        source: "https://www.c-fol.net/news/7_202603/20260325154930.html",
      },
      {
        category: "公司动态",
        date: "2026-03-26",
        title: "东山精密/索尔思光电产能规划清晰，2027 年目标年产能达 3 亿颗",
        summary:
          "公开报道显示，东山精密收购索尔思光电的核心交易已实质完成，2026 年 3 月关键法律与人事变更落地，战略整合风险降低。索尔思被描述为具备光芯片与光模块一站式能力，100G PAM4 EML 芯片发货量已达千万级，200G PAM4 EML 进入量产阶段，目标支撑 1.6T 光模块快速量产。报道还提到 2027 年目标年产能 3 亿颗。需要持续核对的是客户订单兑现、产能爬坡、良率和并购整合后的协同效率。",
        facts: [
          ["产能目标", "2027 年目标年产能 3 亿颗"],
          ["产品进展", "100G PAM4 EML 千万级发货；200G PAM4 EML 量产"],
          ["战略意义", "从制造向光通信核心方案商转型"],
        ],
        tags: ["东山精密", "索尔思光电", "EML", "1.6T", "并购整合"],
        source: "https://www.eeo.com.cn/2026/0326/818284.shtml",
      },
    ],
  },
  {
    id: "2026-W12",
    label: "2026 第 12 周 · 3/16-3/22",
    updated: "2026-03-22",
    theme: "OFC 周：3.2T 硅光 NPO 首发，LN 超表面展示动态偏振控制",
    materials: ["硅光", "NPO", "LN", "Metasurface", "BTO"],
    summary:
      "本周是 OFC 2026 产业发布密集周。光迅科技发布全球首款 3.2T 硅光单模 NPO 模块，并称已完成送样和头部 CSP 全系统验证；新易盛、纳真科技等也围绕 1.6T/800G、LPO、NPO、XPO 展示产品矩阵。科研侧，南开大学团队在 ACS Photonics 发表电光 LN metasurface，用 ±50V 驱动实现偏振方位角和椭圆率调制，显示 LN 从传统波导器件向超紧凑可调光学元件延展。",
    watch: [
      "光迅 3.2T NPO 的 BER、眼图、系统验证和量产时间表",
      "1.6T LPO 与 3.2T NPO 在功耗、散热和交换芯片接口上的路线差异",
      "LN metasurface 是否能降低驱动电压并进入阵列化、低损耗应用",
    ],
    items: [
      {
        category: "公司动态",
        date: "2026-03-17",
        title: "光迅科技发布全球首款 3.2T 硅光单模 NPO 模块并完成头部 CSP 验证",
        summary:
          "OFC 2026 上，光迅科技重点展示 3.2T 硅光单模 NPO 模块，方案包括光引擎 OE、外置光源模块 ELSFP 和光纤管理模组 FMU-Shuffle。报道称该产品已完成送样测试，并在国内头部 CSP 完成 3.2T NPO 全系统验证。这个进展的关键在于 NPO 把光引擎靠近交换芯片，试图在不完全进入 CPO 的情况下减少高速电互连损耗和功耗，是 3.2T 时代的工程折中路线。",
        facts: [
          ["产品", "3.2T 硅光单模 NPO 模块"],
          ["系统组成", "OE + ELSFP + FMU-Shuffle"],
          ["验证状态", "送样测试；头部 CSP 全系统验证"],
        ],
        tags: ["光迅科技", "3.2T", "硅光", "NPO", "OFC 2026"],
        source: "https://www.iccsz.com/site/cn/News/2026/03/17/20260317060335540830.htm",
      },
      {
        category: "公司动态",
        date: "2026-03-17",
        title: "纳真科技发布 1.6T/800G、1.6T LPO、3.2T NPO 产品矩阵",
        summary:
          "纳真科技在 OFC 2026 宣布发布新一代高速光互连产品矩阵，覆盖 1.6T/800G 光互联、长距 1.6T 互连、1.6T LPO、3.2T NPO 以及 400G/L 系列。其产品叙事围绕 AI 数据中心的带宽密度、功耗效率和系统架构升级展开。对行业的启示是，中国光模块公司正在从单个速率产品竞争，转向“可插拔 + LPO + NPO + 长距互连”的组合式解决方案竞争。",
        facts: [
          ["产品矩阵", "1.6T/800G、1.6T LPO、3.2T NPO"],
          ["应用场景", "AI 数据中心高密度互连"],
          ["核心诉求", "带宽密度、功耗效率、链路预算"],
        ],
        tags: ["纳真科技", "1.6T", "LPO", "NPO", "AI 光互连"],
        source: "https://www.ligent.com.cn/about/news/153.html",
      },
      {
        category: "科研论文",
        date: "2026-03-16",
        title: "南开大学团队实现电光铌酸锂超表面的动态偏振控制",
        summary:
          "ACS Photonics 论文展示 EO lithium niobate metasurface，在透射结构中通过沿光轴方向的面内电场调制共振增强双折射，实现电压控制的偏振方位角和椭圆率调制。实验在 ±50V 驱动下观察到偏振取向和椭圆率的清晰调制，最大响应分别为 0.016°/V 和 0.017°/V。观点上，这说明 LN 不只适合波导调制器，也能做可重构超表面和超紧凑偏振控制，但当前驱动电压和器件损耗仍是走向系统应用前必须优化的指标。",
        paperMeta: {
          authors: "Weiye Liu、Jikun Liu、Wei Wu、Lun Qu 等",
          affiliations: "南开大学弱光非线性光子学教育部重点实验室；School of Physics and TEDA Applied Physics Institute",
          journal: "ACS Photonics",
          published: "2026-03-16",
        },
        facts: [
          ["器件", "EO lithium niobate metasurface"],
          ["驱动", "±50 V"],
          ["响应", "0.016°/V 方位角；0.017°/V 椭圆率"],
        ],
        tags: ["Lithium Niobate", "Metasurface", "Polarization", "ACS Photonics"],
        source: "https://pubs.acs.org/doi/10.1021/acsphotonics.5c02030",
      },
      {
        category: "科研论文",
        date: "2026-01-02",
        title: "BTO on LSAT 高性能电光调制器为低压高速路线提供参数锚点",
        summary:
          "Light: Science & Applications 论文提出自缓冲外延 BTO 薄膜路线，在 LSAT 绝缘氧化物衬底上获得高电光性能，并展示 MZM。关键数据包括 Pockels 系数超过 358 pm/V、Curie 温度提升至 200 °C、1550 nm 下 VπL 约 0.7 V·cm，以及 6 dB 电光带宽 28 GHz。该结果的行业意义在于，BTO 的超高电光系数有机会显著降低调制器电压和长度；但要进入光通信主链条，还需证明大面积外延、CMOS/硅光兼容封装和长期可靠性。",
        paperMeta: {
          authors: "Chenguang Deng、Yutong He、Wenfeng Yang、Han Yu、Zijian Hong、Hao Liu、Haojie Han、Wei Li 等",
          affiliations: "清华大学/北京信息光子学相关团队等，来源页未完整列出全部单位",
          journal: "Light: Science & Applications",
          published: "2026-01-02",
        },
        facts: [
          ["Pockels 系数", ">358 pm/V"],
          ["VπL", "0.7 V·cm @ 1550 nm"],
          ["带宽", "28 GHz 6 dB EO bandwidth"],
        ],
        tags: ["BTO", "BaTiO3", "LSAT", "MZM", "低压调制"],
        source: "https://www.lifescience.net/publications/1830533/self-buffered-epitaxy-of-barium-titanate-on-oxide-/",
      },
    ],
  },
  {
    id: "2026-W11",
    label: "2026 第 11 周 · 3/9-3/15",
    updated: "2026-03-15",
    theme: "OFC 前夕 1.6T 展示密集，国内 EML 与 400G/800G 光芯片进入放量叙事",
    materials: ["EML", "400G/lambda", "800G", "1.6T", "SOI"],
    summary:
      "OFC 前一周，新易盛宣布展示基于 400G/lambda 的 1.6T DR4 OSFP 方案，指向下一代 IMDD 高速互联；索尔思/东山和三安光电相关公开信息显示，国内 EML 与 400G 光通信芯片已经进入量产或批量出货阶段。科研侧，SOI 片上温度传感器论文提供了 photonic integrated systems 中稳定性监测的一个基础器件样本。",
    watch: [
      "400G/lambda 的 DSP、线性度、光源和封装要求是否推高系统成本",
      "100G/200G PAM4 EML 国产供应能否支撑 800G/1.6T 放量",
      "片上温度、功耗和漂移监测会成为大规模 PIC 的基础能力",
    ],
    items: [
      {
        category: "公司动态",
        date: "2026-03-12",
        title: "新易盛在 OFC 2026 展示 400G/lambda 的 1.6T DR4 光模块方案",
        summary:
          "新易盛宣布将在 OFC 2026 展示 12.8T XPO、400G/lambda-1.6T DR4 以及 200G/lambda-1.6T FRO/LRO/LPO 系列光收发器方案。行业从 100G/lambda 的 800G 大规模部署，进入 200G/lambda 的 1.6T 放量，再向 400G/lambda 的下一代方案探索。400G/lambda 的意义是减少通道数、提升带宽密度，但对调制器、驱动器、接收端、DSP 和封装一致性提出更高要求。",
        facts: [
          ["展示产品", "400G/lambda 1.6T DR4 OSFP"],
          ["产品组合", "12.8T XPO；200G/lambda 1.6T FRO/LRO/LPO"],
          ["技术含义", "更高单通道速率和带宽密度"],
        ],
        tags: ["新易盛", "400G/lambda", "1.6T", "OFC 2026"],
        source: "https://www.c-fol.net/news/3_202603/20260312193816.html",
      },
      {
        category: "公司动态",
        date: "2026-03-10",
        title: "三安光电 400G 光通信芯片批量出货，800G 小批量、1.6T 研发中",
        summary:
          "公开信息显示，三安光电光通信芯片 400G 产品实现批量出货，800G 处于小批量阶段，1.6T 技术正在研发中。这个节奏体现国内化合物半导体和光芯片厂商正沿 400G、800G、1.6T 逐级推进。与市场热度相比，真正需要跟踪的是产品结构、客户认证、规模出货后的毛利率，以及 1.6T 节点对材料、外延、芯片设计和封装的综合要求。",
        facts: [
          ["400G", "批量出货"],
          ["800G", "小批量阶段"],
          ["1.6T", "技术研发中"],
        ],
        tags: ["三安光电", "光通信芯片", "400G", "800G", "1.6T"],
        source: "https://www.eeo.com.cn/2026/0310/808424.shtml",
      },
      {
        category: "科研论文",
        date: "2026-03-20",
        title: "SOI 平台 RAMZI 片上温度传感器提升灵敏度与稳定性",
        summary:
          "Photonics 论文提出基于 SOI 平台的 ring-assisted asymmetric Mach-Zehnder interferometer 片上温度传感器。器件通过 RAMZI 结构提升温度灵敏度和测量稳定性，使用宽带、波长不敏感组件减少激光波长波动和环境扰动影响。报道数据为温度灵敏度 108.74 pm/K，相比同尺寸传统 AMZI 提升约 40%，45 分钟内波长漂移仅 18 pm。对光芯片系统而言，这类传感器可作为热管理、校准和长期稳定性监控的基础模块。",
        paperMeta: {
          authors: "Huan Guan、Zhuoting Wang、Shuhui Bo、Zhiyong Li",
          affiliations: "来源页未完整列出单位；论文主题为 SOI 片上温度传感器",
          journal: "Photonics",
          published: "2026-03-20",
        },
        facts: [
          ["平台", "SOI"],
          ["灵敏度", "108.74 pm/K，较 AMZI 提升约 40%"],
          ["稳定性", "45 分钟漂移 18 pm"],
        ],
        tags: ["SOI", "RAMZI", "片上温度传感", "Photonics"],
        source: "https://www.mdpi.com/2304-6732/13/3",
      },
    ],
  },
  {
    id: "2026-W10",
    label: "2026 第 10 周 · 3/2-3/8",
    updated: "2026-03-08",
    theme: "TFLN 从通信调制扩展到惯导稳定性，海外光 I/O 融资抬高行业预期",
    materials: ["TFLN", "双偏振调制器", "光 I/O", "硅光"],
    summary:
      "3 月第一周的科研看点是燕山大学团队在 ACS Photonics 发表 TFLN 双偏振调制器芯片用于集成光纤陀螺稳定性提升，说明 TFLN 的高带宽电光能力不只面向数据通信，也可进入高精度传感。产业和资本侧，Ayar Labs 获得大额融资并得到多家芯片巨头投资的报道，继续强化“计算瓶颈从算力转向互连”的市场叙事。",
    watch: [
      "TFLN 调制器在传感系统中的偏振稳定、噪声和封装可靠性",
      "Ayar Labs 等海外光 I/O 公司的融资是否推动国内同赛道估值上行",
      "OFC 前各家公司是否提前释放 1.6T/3.2T 和 CPO/NPO 信息",
    ],
    items: [
      {
        category: "科研论文",
        date: "2026-03-05",
        title: "双偏振 TFLN 调制器芯片用于提升集成光纤陀螺稳定性",
        summary:
          "ACS Photonics 论文关注集成光纤陀螺中的片上波导器件和噪声抑制问题，使用 dual-polarization thin film lithium niobate modulator chip 提升系统稳定性。这个方向和数据中心调制器不同，重点不是最高速率，而是偏振一致性、长期漂移、噪声和系统级测量精度。它提示 TFLN 平台正在进入通信、微波光子、量子和高精度传感之间的交叉应用，材料平台价值来自“强电光 + 可集成 + 可系统化”。",
        paperMeta: {
          authors: "Weibin Feng、Xiaoya Fan、Yulin Wang、Tianxiao Zhang、Haosong Yang、Yuefeng Qi",
          affiliations: "燕山大学信息科学与工程学院；河北省特种光纤与光纤传感重点实验室",
          journal: "ACS Photonics",
          published: "2026-03-05",
        },
        facts: [
          ["平台", "Thin-film lithium niobate"],
          ["器件", "双偏振调制器芯片"],
          ["应用", "集成光纤陀螺稳定性提升"],
        ],
        tags: ["TFLN", "Fiber Optic Gyroscope", "Dual-polarization", "ACS Photonics"],
        source: "https://pubs.acs.org/doi/abs/10.1021/acsphotonics.5c02620",
      },
      {
        category: "公司动态",
        date: "2026-03-04",
        title: "Ayar Labs 大额融资强化芯片级光互连赛道热度",
        summary:
          "报道回顾 Ayar Labs 在 2024 年 12 月完成 1.55 亿美元 D 轮融资，并提到近期又获得约 5 亿美元融资，投资方包括 Neuberger Berman、联发科、卡塔尔投资局等，估值达到 38 亿美元。更重要的是，英伟达、AMD、英特尔、格芯、台积电合作伙伴 VentureTech Alliance 等产业方早已参与其融资。Ayar Labs 的意义在于把光互连从光模块外设推向芯片封装和 I/O 层，成为中国光联芯科等公司融资叙事的海外参照。",
        facts: [
          ["融资", "近期约 5 亿美元；估值约 38 亿美元"],
          ["早期产业投资方", "Nvidia、AMD、Intel、GlobalFoundries 等"],
          ["技术方向", "芯片级光 I/O / 光互连"],
        ],
        tags: ["Ayar Labs", "光 I/O", "一级市场", "硅光"],
        source: "https://www.36kr.com/p/3707981239595401",
      },
    ],
  },
  {
    id: "2026-W08",
    label: "2026 第 8 周 · 2/16-2/22",
    updated: "2026-02-22",
    theme: "TFLN 向中红外、量子与非线性光子延展",
    materials: ["TFLN", "Sapphire", "Rare-earth ions"],
    summary:
      "这一周的论文线索显示 TFLN 仍在扩应用边界：一条路线面向中红外集成调制，另一条利用稀土离子增强非线性响应。对产业而言，值得看的是这些结果能否与低损耗波导、封装和可重复制程合流。",
    watch: ["中红外调制器的插损与驱动电压", "稀土掺杂工艺的均匀性", "高 Q 环形谐振器的温漂控制"],
    items: [
      {
        category: "科研论文",
        date: "2026-02-21",
        title: "薄膜铌酸锂蓝宝石平台实现中红外集成调制器",
        summary:
          "该论文把 TFLN 的电光优势带到中红外波段，为片上中红外调制、传感和光谱系统提供材料平台选项。主要观点是 TFLN 的强电光效应并不局限于 1550 nm 通信窗口，换用 sapphire 衬底后可以服务更宽波段应用；但中红外系统还需要解决低损耗耦合、热管理、光源集成和探测器匹配。",
        paperMeta: {
          authors: "Pierre Didier、Prateek Jain、Mathieu Bertrand 等",
          affiliations: "ETH Zurich；ShanghaiTech University 等",
          journal: "Nature Communications",
          published: "2026-02-21",
        },
        facts: [
          ["平台", "TFLN on sapphire"],
          ["应用", "中红外调制 / 传感"],
          ["发表", "Nature Communications"],
        ],
        tags: ["TFLN", "Mid-IR", "Sapphire"],
        source: "https://www.nature.com/articles/s41467-026-69880-5",
      },
      {
        category: "科研论文",
        date: "2026-02-13",
        title: "TFLN 集成量子光子综述进入在线预印",
        summary:
          "Progress in Quantum Electronics 综述强调 TFLN 的二阶非线性、电光效应和宽透明窗口，使其适用于可重构量子光路、片上频率转换和稳定集成系统。文章梳理 SPDC 纠缠光源、压缩光、QKD、Hong-Ou-Mandel 干涉、异质集成激光源和超导探测器等方向。产业判断上，TFLN 量子光子离规模化仍需低损耗、封装和低温兼容，但其可调性和非线性优势很难被单一硅光平台替代。",
        paperMeta: {
          authors: "来源页未完整列出作者；ScienceDirect 页面显示为 TFLN quantum photonics 综述",
          affiliations: "来源页未完整列出单位",
          journal: "Progress in Quantum Electronics",
          published: "2026-02-13",
        },
        facts: [
          ["平台优势", "χ2 非线性 / EO / 宽透明窗口"],
          ["应用", "量子光子 / 安全通信 / 传感"],
          ["类型", "综述"],
        ],
        tags: ["TFLN", "Quantum Photonics", "Review"],
        source: "https://www.sciencedirect.com/science/article/pii/S0079672726000029",
      },
      {
        category: "科研论文",
        date: "2026-01-21",
        title: "稀土离子增强 TFLN 环形谐振器的低功率非线性响应",
        summary:
          "ACS Photonics 论文通过高 Q TFLN 环形谐振器和稀土离子共振吸收，实现皮瓦级输入下的非线性行为，包括 optical limiting 与负微分透射。它的核心价值在于把传统需要较高光功率的非线性响应推向极低功耗区域，为片上光开关、光限制器和非线性信息处理提供思路；主要挑战是稀土掺杂均匀性、谐振器温漂和器件间一致性。",
        paperMeta: {
          authors: "Yuqi Zhao、Dylan Renaud、Mohammad Habibur Rahaman 等",
          affiliations: "University of Maryland；Harvard University 等",
          journal: "ACS Photonics",
          published: "2026-01-21",
        },
        facts: [
          ["关键能力", "皮瓦级非线性响应"],
          ["器件", "高 Q TFLN ring resonator"],
          ["现象", "Optical limiting / 负微分透射"],
        ],
        tags: ["TFLN", "Ring Resonator", "Nonlinear Photonics"],
        source: "https://pubs.acs.org/doi/10.1021/acsphotonics.5c01586",
      },
    ],
  },
  {
    id: "2026-W01",
    label: "2026 第 1 周 · 12/29-1/4",
    updated: "2026-01-04",
    theme: "BTO 电光材料参数出现强信号",
    materials: ["BTO", "LSAT", "Silicon Photonics"],
    summary:
      "BTO 的看点从高电光系数走向器件验证。LSAT 绝缘衬底路线给出了高 Pockels 系数、低 VπL 与几十 GHz 带宽的组合，但后续仍需观察晶圆级可扩展性和与硅光生态的耦合方式。",
    watch: ["BTO 薄膜面积、良率与片间一致性", "MZM 插损、热稳定性和寿命测试", "与硅光、SiN 或封装平台的集成路线"],
    items: [
      {
        category: "科研论文",
        date: "2026-01-02",
        title: "自缓冲 BTO 外延薄膜支撑低压高速 MZM",
        summary:
          "研究通过应变工程与自缓冲层实现 BTO on LSAT，报道 Pockels 系数超过 358 pm/V，Curie 温度提升至 200 °C，并展示 MZM 器件。关键器件数据包括 VπL 0.7 V·cm @1550 nm 和 28 GHz 6 dB 电光带宽。主要观点是 BTO 具备显著降低调制器尺寸和驱动电压的潜力，但真正进入光通信芯片产业链仍要补齐大面积外延、硅光兼容、温度稳定和长期可靠性证据。",
        paperMeta: {
          authors: "Chenguang Deng、Yutong He、Wenfeng Yang、Han Yu、Zijian Hong、Hao Liu、Haojie Han、Wei Li 等",
          affiliations: "来源页未完整列出全部单位",
          journal: "Light: Science & Applications",
          published: "2026-01-02",
        },
        facts: [
          ["Pockels 系数", ">358 pm/V"],
          ["VπL", "0.7 V·cm @1550 nm"],
          ["带宽", "28 GHz 6 dB"],
        ],
        tags: ["BTO", "LSAT", "Electro-optic Modulator", "MZM"],
        source: "https://www.lifescience.net/publications/1830533/self-buffered-epitaxy-of-barium-titanate-on-oxide-/",
      },
    ],
  },
];

let activeWeek = weeklyReports[0].id;
let activeFilter = "全部";

const weekSelect = document.querySelector("#weekSelect");
const searchInput = document.querySelector("#searchInput");
const cards = document.querySelector("#cards");
const emptyState = document.querySelector("#emptyState");
const template = document.querySelector("#cardTemplate");

function init() {
  weeklyReports.forEach((week) => {
    const option = document.createElement("option");
    option.value = week.id;
    option.textContent = week.label;
    weekSelect.appendChild(option);
  });

  weekSelect.addEventListener("change", (event) => {
    activeWeek = event.target.value;
    render();
  });

  searchInput.addEventListener("input", render);

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".segment.active").classList.remove("active");
      button.classList.add("active");
      activeFilter = button.dataset.filter;
      render();
    });
  });

  document.querySelector("#copySummary").addEventListener("click", copySummary);
  document.querySelector("#downloadJson").addEventListener("click", downloadJson);
  render();
}

function getActiveReport() {
  return weeklyReports.find((week) => week.id === activeWeek) || weeklyReports[0];
}

function render() {
  const report = getActiveReport();
  const query = searchInput.value.trim().toLowerCase();
  const searchMode = query.length > 0;
  const sourceItems = searchMode
    ? weeklyReports.flatMap((week) => week.items.map((item) => ({ ...item, weekLabel: week.label })))
    : report.items.map((item) => ({ ...item, weekLabel: report.label }));
  const filteredItems = sourceItems.filter((item) => {
    const paperMeta = item.paperMeta ? Object.values(item.paperMeta) : [];
    const matchesCategory = activeFilter === "全部" || item.category === activeFilter;
    const haystack = [item.title, item.summary, item.category, ...item.tags, ...item.facts.flat(), ...paperMeta]
      .join(" ")
      .toLowerCase();
    return matchesCategory && (!query || haystack.includes(query));
  }).sort((a, b) => (searchMode ? compareItemsByDateDesc(a, b) : 0));

  document.querySelector("#weekTitle").textContent = searchMode ? "全时间段搜索" : report.label;
  document.querySelector("#weekSummary").textContent = searchMode
    ? `正在跨 ${weeklyReports.length} 个周报搜索“${searchInput.value.trim()}”，结果按进展日期倒序排列。`
    : report.summary;
  document.querySelector("#metricCount").textContent = searchMode ? filteredItems.length : report.items.length;
  document.querySelector("#metricMaterials").textContent = searchMode ? "全材料 / 全公司 / 全论文" : report.materials.join(" / ");
  document.querySelector("#metricTheme").textContent = searchMode ? "跨周检索结果" : report.theme;
  document.querySelector("#metricStatus").textContent = searchMode ? "按日期倒序" : `更新至 ${report.updated}`;
  document.querySelector("#resultCount").textContent = searchMode
    ? `${filteredItems.length} 条跨周匹配`
    : `${filteredItems.length} 条匹配`;

  const watchList = document.querySelector("#watchList");
  const watchItems = searchMode
    ? ["清空搜索框可回到当前选中周报", "继续使用类别按钮可在全时间段结果内筛选", "结果按进展日期从新到旧排列"]
    : report.watch;
  watchList.replaceChildren(...watchItems.map((text) => createElement("li", text)));

  cards.replaceChildren(...filteredItems.map(renderCard));
  emptyState.hidden = filteredItems.length > 0;
}

function renderCard(item) {
  const node = template.content.firstElementChild.cloneNode(true);
  const badge = node.querySelector(".badge");
  badge.textContent = item.category;
  badge.classList.add(getCategoryClass(item.category));
  node.querySelector(".date").textContent = item.date;
  node.querySelector("h3").textContent = item.title;
  node.querySelector(".card-summary").textContent = item.summary;

  if (item.weekLabel) {
    const week = createElement("p", item.weekLabel, "week-marker");
    node.querySelector(".card-summary").before(week);
  }

  if (item.paperMeta) {
    node.querySelector(".card-summary").after(renderPaperMeta(item.paperMeta));
  }

  const facts = node.querySelector(".facts");
  item.facts.forEach(([label, value]) => {
    const group = document.createElement("div");
    group.append(createElement("dt", label), createElement("dd", value));
    facts.appendChild(group);
  });

  const tags = node.querySelector(".tags");
  item.tags.forEach((tag) => tags.appendChild(createElement("span", tag, "tag")));

  const source = node.querySelector(".source");
  source.href = item.source;
  source.textContent = "查看来源";
  return node;
}

function compareItemsByDateDesc(a, b) {
  const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
  if (dateDiff !== 0) return dateDiff;
  return b.weekLabel.localeCompare(a.weekLabel, "zh-Hans-CN");
}

function renderPaperMeta(meta) {
  const block = document.createElement("dl");
  block.className = "paper-meta";
  [
    ["作者", meta.authors],
    ["单位", meta.affiliations],
    ["期刊/会议", meta.journal],
    ["发表时间", meta.published],
  ].forEach(([label, value]) => {
    const row = document.createElement("div");
    row.append(createElement("dt", label), createElement("dd", value));
    block.appendChild(row);
  });
  return block;
}

function getCategoryClass(category) {
  return {
    科研论文: "paper",
    产业进展: "industry",
    公司动态: "company",
  }[category];
}

function createElement(tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}

async function copySummary() {
  const report = getActiveReport();
  const text = [
    `${report.label}`,
    `主题：${report.theme}`,
    `摘要：${report.summary}`,
    "",
    ...report.items.map((item, index) => {
      const meta = item.paperMeta
        ? `\n作者：${item.paperMeta.authors}\n单位：${item.paperMeta.affiliations}\n期刊/会议：${item.paperMeta.journal}\n发表时间：${item.paperMeta.published}`
        : "";
      return `${index + 1}. [${item.category}] ${item.title}${meta}\n${item.summary}`;
    }),
  ].join("\n\n");

  await navigator.clipboard.writeText(text);
  flashButton("#copySummary", "✓");
}

function downloadJson() {
  const report = getActiveReport();
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${report.id}-photonics-weekly.json`;
  link.click();
  URL.revokeObjectURL(url);
  flashButton("#downloadJson", "✓");
}

function flashButton(selector, label) {
  const button = document.querySelector(selector);
  const original = button.textContent;
  button.textContent = label;
  window.setTimeout(() => {
    button.textContent = original;
  }, 900);
}

init();
