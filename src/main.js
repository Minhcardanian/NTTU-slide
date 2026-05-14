import './styles.css';

const deck = [
  {
    eyebrow: 'Meetup #3 · Vietnam 2026',
    title: 'Catalyst & Cấp Vốn Khởi Nghiệp',
    subtitle: 'Từ mô hình gọi vốn truyền thống đến kho bạc cộng đồng trên blockchain.',
    type: 'cover',
    meta: ['17:20 - 19:00', '18/05/2026', 'ĐH Nguyễn Tất Thành'],
    chips: ['Cardano Việt Nam', 'BBO Tech', 'Project Catalyst'],
    notes:
      'Mở đầu bằng câu hỏi: nếu một nhóm sinh viên có ý tưởng tốt nhưng chưa có quan hệ đầu tư, họ có thể bắt đầu từ đâu?'
  },
  {
    eyebrow: 'Bối cảnh',
    title: 'Vấn đề của startup giai đoạn sớm',
    subtitle:
      'Ý tưởng thường không thiếu. Điều khó là biến ý tưởng thành bằng chứng, đội ngũ, sản phẩm thử nghiệm và niềm tin từ người tài trợ.',
    type: 'problem',
    cards: [
      ['Thiếu dữ liệu', 'Chưa có doanh thu, khó chứng minh năng lực trả nợ hoặc tốc độ tăng trưởng.'],
      ['Thiếu mạng lưới', 'Cơ hội gặp nhà đầu tư thường phụ thuộc quan hệ, vị trí địa lý và kinh nghiệm.'],
      ['Thiếu thời gian', 'Quy trình hồ sơ dài làm đội ngũ mất nhịp thử nghiệm sản phẩm.'],
      ['Thiếu minh bạch', 'Người góp vốn khó theo dõi tiến độ, đội ngũ khó chứng minh kết quả theo thời gian thực.']
    ],
    notes:
      'Nhấn mạnh đây là bài toán chung của startup, không riêng blockchain. Blockchain chỉ là một hướng giải quyết bổ sung.'
  },
  {
    eyebrow: 'Khung tư duy',
    title: 'Startup cần loại vốn nào?',
    subtitle:
      'Mỗi nguồn vốn phù hợp với một giai đoạn khác nhau. Chọn sai nguồn vốn có thể làm đội ngũ mất quyền kiểm soát hoặc tăng áp lực quá sớm.',
    type: 'funding-grid',
    cards: [
      ['Bootstrapping', 'Tự dùng nguồn lực cá nhân', 'Kiểm soát cao, tốc độ phụ thuộc năng lực nội bộ.'],
      ['Angel Investor', 'Nhà đầu tư thiên thần', 'Phù hợp giai đoạn ý tưởng đã có đội ngũ và thị trường ban đầu.'],
      ['Venture Capital', 'Quỹ đầu tư mạo hiểm', 'Vốn lớn, kỳ vọng tăng trưởng nhanh, yêu cầu kế hoạch thoái vốn.'],
      ['Crowdfunding', 'Cộng đồng góp vốn', 'Kiểm chứng nhu cầu thị trường, cần truyền thông và cam kết giao hàng rõ.'],
      ['Grant', 'Tài trợ không đổi cổ phần', 'Phù hợp nghiên cứu, sản phẩm nguồn mở, hạ tầng hoặc tác động cộng đồng.'],
      ['Revenue-based', 'Chia sẻ doanh thu', 'Ít pha loãng cổ phần, phù hợp sản phẩm đã có doanh thu lặp lại.']
    ],
    notes:
      'Giải thích từ khóa grant vì nó liên quan trực tiếp tới Catalyst: cấp vốn theo đề xuất, không phải mua cổ phần.'
  },
  {
    eyebrow: 'So sánh',
    title: 'Truyền thống vs Blockchain',
    subtitle:
      'Sự khác biệt lớn nhất không nằm ở công nghệ, mà ở cách ra quyết định, cách phân bổ vốn và cách cộng đồng theo dõi tiến độ.',
    type: 'compare',
    columns: [
      {
        name: 'Truyền thống',
        accent: 'blue',
        points: [
          'Ngân hàng, quỹ đầu tư, nhà đầu tư cá nhân',
          'Thẩm định dựa trên hồ sơ, tài sản, doanh thu hoặc quan hệ',
          'Quyết định tập trung ở một nhóm nhỏ',
          'Thông tin tiến độ thường đóng hoặc chỉ báo cáo định kỳ',
          'Rào cản địa lý, pháp lý và mạng lưới tương đối cao'
        ]
      },
      {
        name: 'Blockchain',
        accent: 'orange',
        points: [
          'Kho bạc cộng đồng và người nắm giữ token',
          'Đề xuất được công khai, thảo luận và phản biện',
          'Biểu quyết mở theo cơ chế của từng hệ sinh thái',
          'Dòng tiền, mốc giao hàng và kết quả có thể theo dõi công khai',
          'Cơ hội tiếp cận toàn cầu, nhưng cần uy tín và năng lực thực thi'
        ]
      }
    ],
    notes:
      'Tránh nói blockchain thay thế hoàn toàn mô hình cũ. Điểm đúng là nó bổ sung một lớp tài trợ minh bạch hơn.'
  },
  {
    eyebrow: 'Case study',
    title: 'Cardano, Treasury và Project Catalyst',
    subtitle:
      'Cardano dùng mô hình kho bạc để tài trợ cho các ý tưởng có ích cho hệ sinh thái. Catalyst là nơi cộng đồng đề xuất, đánh giá và bình chọn.',
    type: 'flow',
    steps: [
      ['Ý tưởng', 'Nhóm dự án mô tả vấn đề, giải pháp, ngân sách và năng lực thực thi.'],
      ['Cộng đồng', 'Người tham gia đọc, phản biện, đánh giá rủi ro và giá trị mang lại.'],
      ['Voting', 'Người có quyền biểu quyết chọn proposal theo quy tắc của vòng tài trợ.'],
      ['Cấp vốn', 'Dự án nhận ngân sách theo mốc và cần báo cáo tiến độ.'],
      ['Tác động', 'Sản phẩm, tài liệu, công cụ hoặc cộng đồng mới quay lại phục vụ hệ sinh thái.']
    ],
    source: {
      label: 'Nguồn: Cardano Docs, Project Catalyst',
      url: 'https://docs.cardano.org/about-cardano/introduction/'
    },
    notes:
      'Liên hệ với sinh viên: proposal tốt giống một bản kế hoạch sản phẩm ngắn, có vấn đề rõ, người dùng rõ và kết quả đo được.'
  },
  {
    eyebrow: 'Governance',
    title: 'Cardano governance: ai quyết định?',
    subtitle:
      'Sau Conway / Voltaire, Cardano chuyển sâu hơn sang quản trị on-chain: quyết định được đưa thành governance actions và được cộng đồng theo dõi công khai.',
    type: 'governance-grid',
    cards: [
      ['CIP-1694', 'Khung quản trị on-chain đầu tiên của Cardano: định nghĩa governance actions, DReps, SPO voting roles và Constitutional Committee.'],
      ['DReps', 'Ada holders có thể tự tham gia hoặc ủy quyền voting power cho Delegated Representatives để bỏ phiếu thay mình.'],
      ['SPOs', 'Stake Pool Operators tham gia một số quyết định quan trọng, đặc biệt liên quan đến bảo mật giao thức và hard forks.'],
      ['Constitutional Committee', 'Kiểm tra governance actions có phù hợp với hiến pháp Cardano hay không. Không một nhóm nào tự quyết định một mình.'],
      ['Governance actions', 'Đề xuất on-chain cho protocol changes, treasury withdrawals, hard forks, committee changes, constitution updates và info actions.'],
      ['Treasury withdrawals', 'Yêu cầu rút vốn từ treasury là một loại governance action chính thức, cần được phê duyệt theo quy tắc quản trị.']
    ],
    source: {
      label: 'Nguồn: CIP-1694; Cardano Governance; Cardano developer docs',
      urls: [
        'https://cips.cardano.org/cip/CIP-1694',
        'https://cardano.org/governance/',
        'https://developers.cardano.org/docs/governance/cardano-governance/governance-actions/'
      ]
    },
    notes:
      'Giữ cách giải thích đơn giản: governance không phải khái niệm trừu tượng, mà là quy trình ai được quyền bỏ phiếu và quyết định nào được đưa lên chain.'
  },
  {
    eyebrow: 'Dữ liệu on-chain',
    title: 'Cardano snapshot: nguồn vốn nằm trên chain',
    subtitle:
      'Tại epoch 630, Cardano có hơn 1,63 tỷ ada trong treasury. Đây là lớp ngân sách công khai dùng để tài trợ phát triển hệ sinh thái thông qua quản trị.',
    type: 'snapshot',
    kpis: [
      ['1.63B ada', 'Treasury', 'Quỹ kho bạc hiện tại'],
      ['36.20B ada', 'Circulation', 'Ada đang lưu hành trong UTxO'],
      ['6.38B ada', 'Reserves', 'Phần còn lại chưa phân phối'],
      ['45B ada', 'Max supply', 'Nguồn cung tối đa theo genesis']
    ],
    donut: {
      label: 'Phân bổ supply',
      values: [
        ['Circulation', 80.45, '#4a9eff'],
        ['Treasury', 3.63, '#ff8c38'],
        ['Rewards', 1.73, '#2bd18f'],
        ['Reserves', 14.18, '#e56bcc']
      ]
    },
    source: {
      label: 'Nguồn: Cardano Supply Overview, epoch 630, cập nhật 09/05/2026',
      url: 'https://cardano.org/vi/insights/supply/'
    },
    notes:
      'Điểm cần nhấn mạnh: treasury không phải ví cá nhân hay quỹ kín. Nó là một phần của cơ chế kinh tế và quản trị on-chain.'
  },
  {
    eyebrow: 'Treasury',
    title: 'Treasury: số liệu snapshot và dashboard live',
    subtitle:
      'Cardano Insights cung cấp snapshot số liệu theo epoch; CGov giúp theo dõi live các treasury proposals, requested funds, treasury spending và funded entities.',
    type: 'treasury-chart',
    kpis: [
      ['374.5M ada', 'Additions', 'Ada thêm vào treasury'],
      ['414.9M ada', 'Withdrawals', 'Ada đã rút qua governance'],
      ['44', 'Withdrawals enacted', 'Số treasury withdrawal đã enact'],
      ['-0.28%', 'Treasury change', 'Biến động treasury trong giai đoạn']
    ],
    bars: [
      ['Additions', 374.5, '#2bd18f'],
      ['Withdrawals', 414.9, '#ff8c38']
    ],
    trend: [
      ['Epoch 531', '7.51B reserves', '1.64B treasury'],
      ['Epoch 606', '50% reserves distributed', 'Mốc kinh tế quan trọng'],
      ['Epoch 630', '6.38B reserves', '1.63B treasury']
    ],
    callout: {
      title: 'CGov Treasury Flow',
      text: 'Dùng CGov để xem proposal/spending live; dùng Cardano Insights cho snapshot số liệu epoch có thể kiểm chứng.'
    },
    source: {
      label: 'Nguồn: CGov Treasury Flow; Cardano Supply Summary, epoch 531-630',
      urls: ['https://app.cgov.io/treasury', 'https://cardano.org/vi/insights/supply/summary/']
    },
    notes:
      'Giải thích đơn giản: treasury tăng nhờ reward mechanism, giảm khi cộng đồng/governance phê duyệt rút vốn cho các sáng kiến.'
  },
  {
    eyebrow: 'Network activity',
    title: 'Mạng lưới đang xử lý hoạt động thật',
    subtitle:
      'Giai đoạn epoch 528-627 ghi nhận gần 18 triệu giao dịch, hơn 6 triệu ada phí giao dịch và hơn 2,13 triệu block được sản xuất.',
    type: 'activity-chart',
    kpis: [
      ['17.99M', 'Transactions', 'Tổng giao dịch trong giai đoạn'],
      ['179.9K', 'Avg / epoch', 'Giao dịch trung bình mỗi epoch'],
      ['6.04M ada', 'Fees', 'Tổng phí giao dịch đã thu'],
      ['0.336 ada', 'Avg fee', 'Phí trung bình mỗi giao dịch']
    ],
    bars: [
      ['Average epoch', 179864, '#4a9eff'],
      ['Peak epoch 529', 408033, '#ff8c38'],
      ['Lowest epoch 617', 100464, '#7780a3']
    ],
    detail: '2,130,995 blocks produced · Average 21,310 blocks per epoch',
    source: {
      label: 'Nguồn: Cardano Transaction Trends, epoch 528-627',
      url: 'https://cardano.org/vi/insights/transactions/'
    },
    notes:
      'Chỉ dùng số đã hoàn tất theo range của Cardano Insights. Tránh diễn giải quá mức về tăng trưởng vì đây là ảnh chụp một giai đoạn.'
  },
  {
    eyebrow: 'Catalyst data',
    title: 'Catalyst by the numbers',
    subtitle:
      'Catalyst biến ngân sách cộng đồng thành các vòng tài trợ có proposal, review, voting và milestone. Fund15 cần được trình bày là paused / not final, không phải đã có kết quả.',
    type: 'catalyst-chart',
    global: [
      ['150M+ USD', 'Total funding'],
      ['2,221', 'Proposals funded'],
      ['84,902+', 'Members']
    ],
    funds: [
      ['Fund13', '46.48M ada', '199 / 1,639', '310,597 votes', 46.48],
      ['Fund14', '18.59M ada', '131 / 1,283', '174,737 votes', 18.59],
      ['Fund15', '18.50M ada + 250K USDM', 'Voting paused', 'No final official results as of 14/05/2026', 18.5]
    ],
    source: {
      label: 'Nguồn: Project Catalyst Fund13-Fund15; Fund15 pause/team updates',
      urls: [
        'https://projectcatalyst.io/funds/15',
        'https://projectcatalyst.io/blog/update-on-fund15-voting',
        'https://projectcatalyst.io/blog/update-from-the-catalyst-team'
      ]
    },
    notes:
      'Fund15 không được mô tả là đã funded. Dùng đúng trạng thái paused / not final trừ khi Catalyst công bố bản cập nhật chính thức mới hơn.'
  },
  {
    eyebrow: 'Ecosystem',
    title: 'Cardano không chỉ là transaction network',
    subtitle:
      'Một hệ sinh thái blockchain cần nhiều lớp hoạt động cùng lúc: tài sản native, DApps, staking, governance, treasury funding và public analytics.',
    type: 'ecosystem-grid',
    cards: [
      ['Native assets', 'Cardano hỗ trợ multi-assets ở cấp ledger; token thông thường không cần smart contract để chuyển.'],
      ['DApps & projects', 'CardanoCube và các dashboard hệ sinh thái cho thấy nhiều mảng: DeFi, wallets, NFTs, gaming, infrastructure, governance, education.'],
      ['Stake pools', 'SPOs vận hành hạ tầng sản xuất block và tham gia một số quyết định governance.'],
      ['Delegation', 'Ada holders có thể delegate stake để tham gia network và delegate voting power riêng cho DReps.'],
      ['Governance dashboards', 'GovTool, CGov, CExplorer và Dune giúp theo dõi proposals, DReps, treasury requests và voting activity.'],
      ['Treasury proposals', 'Treasury funding có thể được theo dõi công khai qua governance actions và dashboard phân tích.']
    ],
    source: {
      label: 'Nguồn: Cardano native tokens docs; CardanoCube; CExplorer; CGov',
      urls: [
        'https://docs.cardano.org/developer-resources/native-tokens',
        'https://www.cardanocube.com/cardano-ecosystem-interactive-map',
        'https://cexplorer.io/governance',
        'https://app.cgov.io/'
      ]
    },
    notes:
      'Không dùng số lượng DApps, DReps hay stake pools cụ thể nếu chưa kiểm tra live dashboard ngay trước buổi trình bày.'
  },
  {
    eyebrow: 'Nội dung chính',
    title: 'Một proposal Catalyst nên có gì?',
    subtitle:
      'Một đề xuất mạnh không chỉ có ý tưởng hay. Nó cần chứng minh vấn đề đáng giải quyết, kế hoạch đủ thực tế và tác động có thể kiểm chứng.',
    type: 'checklist',
    cards: [
      ['Vấn đề', 'Ai đang gặp vấn đề? Vì sao vấn đề này quan trọng với hệ sinh thái Cardano?'],
      ['Giải pháp', 'Sản phẩm, workshop, tài liệu, công cụ hay nghiên cứu sẽ được tạo ra là gì?'],
      ['Đội ngũ', 'Ai làm? Đã có kinh nghiệm, sản phẩm mẫu hoặc bằng chứng năng lực nào?'],
      ['Ngân sách', 'Chi phí chia theo hạng mục, theo mốc, có giải thích hợp lý.'],
      ['Milestone', 'Mốc giao hàng cụ thể theo tuần hoặc tháng, có đầu ra rõ.'],
      ['Metric', 'Số người dùng, số tài liệu, số giao dịch, số contributor hoặc mức độ áp dụng.']
    ],
    notes:
      'Có thể cho ví dụ: một nhóm sinh viên làm bộ tài liệu Plutus/Aiken tiếng Việt, kèm workshop và repo mẫu.'
  },
  {
    eyebrow: 'Proposal case study',
    title: 'Case: Cardano Vietnam Monthly Meetups 2026',
    subtitle:
      'Một proposal tốt có thể không phải là code. Điểm quan trọng là vấn đề rõ, ngân sách rõ, milestone rõ và có bằng chứng hoàn thành.',
    type: 'case-study',
    summary: [
      ['Fund', 'Fund14'],
      ['Status', 'In progress · 1/4 milestones completed at review time'],
      ['Budget', '58,650 ada'],
      ['Distributed', '22,482 ada'],
      ['Remaining', '36,168 ada']
    ],
    cards: [
      ['Problem', 'Cộng đồng Cardano Việt Nam hoạt động online nhưng thiếu meetup offline đều đặn để onboarding, chia sẻ kiến thức và kết nối builder.'],
      ['Solution', 'Tổ chức 12 monthly meetups trong năm 2026 cho ADA holders, SPOs, DReps, builders và community members.'],
      ['Milestones', 'M1: meetups 1-3; M2: 4-6; M3: 7-9; M4: 10-12 và closeout.'],
      ['Deliverables', 'Event plans, registration links, promo materials, recaps, photos/videos, surveys, feedback reports, final report và close-out video.'],
      ['Metrics', '12 meetups, 360+ attendees, 120+ unique participants, 40%+ new to Cardano, voter registrations và new Catalyst proposals from Vietnam.'],
      ['Why it works', 'Dễ đánh giá vì có problem-solution rõ, ngân sách cụ thể, đầu ra đo được và tác động cộng đồng thực tế.']
    ],
    source: {
      label: 'Nguồn: Project Catalyst proposal - Cardano Vietnam Monthly Meetups 2026',
      url: 'https://projectcatalyst.io/funds/14/cardano-open-ecosystem/cardano-vietnam-monthly-meetups-2026'
    },
    notes:
      'Dùng slide này cho phần workshop: yêu cầu sinh viên đọc problem, budget, milestone, deliverable rồi đánh giá proposal có đáng tài trợ không.'
  },
  {
    eyebrow: 'Agenda',
    title: 'Lịch trình chương trình',
    subtitle: 'Thiết kế theo nhịp ngắn: hiểu bối cảnh, học mô hình, xem case study, rồi tương tác bằng mini game và Q&A.',
    type: 'agenda',
    agenda: [
      ['17:20', 'Check-in & mở đầu', 'Ban tổ chức', 'Ổn định lớp, giới thiệu cộng đồng Cardano VN.'],
      ['17:30', 'Các mô hình cấp vốn khởi nghiệp', 'Hưng', 'Hiểu bootstrapping, angel, VC, grant và crowdfunding.'],
      ['17:45', 'Cardano và Project Catalyst', 'Minh Bùi', 'Hiểu treasury, voting, proposal và governance.'],
      ['18:15', 'Workshop mini: đọc một proposal', 'Mentor', 'Nhận diện vấn đề, ngân sách, milestone và metric.'],
      ['18:35', 'Mini game', 'Ban tổ chức', 'Củng cố kiến thức qua câu hỏi nhanh.'],
      ['18:50', 'Q&A và kết nối cộng đồng', 'Tất cả', 'Gợi mở hướng tham gia sau meetup.']
    ],
    notes:
      'Phần workshop mini giúp buổi nói chuyện bớt một chiều. Chỉ cần một proposal mẫu ngắn là đủ.'
  },
  {
    eyebrow: 'Truyền thông',
    title: 'Kế hoạch trước, trong và sau sự kiện',
    subtitle:
      'Nội dung truyền thông cần làm rõ giá trị học được, không chỉ thông báo thời gian và địa điểm.',
    type: 'timeline',
    steps: [
      ['13/05 - 17/05', 'Trước sự kiện', 'Poster, form đăng ký, bài giới thiệu Catalyst, short post về quà tặng.'],
      ['18/05', 'Trong sự kiện', 'Check-in, ảnh lớp học, quote trực tiếp, story mini game, lời mời vào cộng đồng.'],
      ['19/05 - 23/05', 'Sau sự kiện', 'Recap, album ảnh, tài liệu tóm tắt, link cộng đồng, kêu gọi proposal thử nghiệm.']
    ],
    cards: [
      ['Thông điệp', 'Sinh viên có thể học cách biến ý tưởng thành proposal có cấu trúc.'],
      ['Kênh', 'Facebook, Telegram, cộng đồng trường, nhóm blockchain và startup địa phương.'],
      ['Kết quả mong muốn', 'Người tham dự hiểu Catalyst và biết bước đầu để tham gia cộng đồng.']
    ],
    notes:
      'Nên chuẩn bị sẵn QR vào Telegram, form feedback và link tài liệu sau buổi.'
  },
  {
    eyebrow: 'Tương tác',
    title: 'Mini game và câu hỏi gợi mở',
    subtitle:
      'Mục tiêu là kiểm tra hiểu biết nền tảng, tạo không khí và kéo người tham dự vào thảo luận thực tế.',
    type: 'quiz',
    cards: [
      ['Câu 1', 'Grant khác VC ở điểm nào quan trọng nhất?'],
      ['Câu 2', 'Một proposal thiếu metric sẽ gặp rủi ro gì khi cộng đồng đánh giá?'],
      ['Câu 3', 'Vì sao milestone nên nhỏ, rõ và có bằng chứng hoàn thành?'],
      ['Câu 4', 'Blockchain giúp minh bạch tài trợ bằng cách nào?']
    ],
    prizes: ['Lót chuột Cardano', 'Túi canvas', 'Ly nước', 'Sticker cộng đồng'],
    notes:
      'Dùng câu hỏi ngắn, tránh kiểm tra thuật ngữ quá sâu. Người trả lời tốt nên giải thích được bằng ngôn ngữ đơn giản.'
  },
  {
    eyebrow: 'Kết thúc',
    title: 'Cảm ơn và hẹn gặp trong cộng đồng',
    subtitle:
      'Bước tiếp theo: đọc một proposal mẫu, tham gia nhóm Cardano Việt Nam và thử phác thảo ý tưởng của riêng bạn.',
    type: 'closing',
    meta: ['cardano.org', 'projectcatalyst.io', 't.me/CardanoVietnam'],
    chips: ['Cardano Việt Nam', 'BBO Tech', 'ĐH Nguyễn Tất Thành'],
    notes:
      'Kết lại bằng lời mời cụ thể: ai có ý tưởng về giáo dục, công cụ, cộng đồng hoặc nghiên cứu có thể trao đổi sau buổi.'
  }
];

const state = {
  current: 0,
  overviewOpen: false
};

const app = document.querySelector('#app');
const categoryRules = [
  { types: ['cover', 'problem', 'funding-grid', 'compare'], name: 'Foundation' },
  { types: ['flow', 'governance-grid'], name: 'Governance' },
  { types: ['snapshot', 'treasury-chart', 'activity-chart', 'catalyst-chart', 'ecosystem-grid'], name: 'Data' },
  { types: ['checklist', 'case-study'], name: 'Workshop' },
  { types: ['agenda', 'timeline', 'quiz', 'closing'], name: 'Event' }
];

function logo() {
  return `
    <div class="brand-mark" aria-hidden="true">
      ${Array.from({ length: 16 }, (_, index) => `<span class="${index % 3 === 0 ? 'pink' : ''}"></span>`).join('')}
    </div>
    <span>Cardano</span>
  `;
}

function icon(name) {
  const icons = {
    prev: '<path d="M15 18l-6-6 6-6"/>',
    next: '<path d="M9 18l6-6-6-6"/>',
    fullscreen: '<path d="M8 3H3v5M16 3h5v5M21 16v5h-5M8 21H3v-5"/>',
    grid: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>'
  };

  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name]}</svg>`;
}

function slideInner(slide) {
  if (slide.type === 'cover') {
    return `
      <section class="hero-layout">
        <div>
          <div class="slide-kicker">${categoryTag(slide)}<span class="pill">${slide.eyebrow}</span></div>
          <h1>${slide.title}</h1>
          <p>${slide.subtitle}</p>
          <div class="chip-row">${slide.chips.map((chip) => `<span>${chip}</span>`).join('')}</div>
        </div>
        <div class="event-panel">
          ${slide.meta.map((item) => `<div><strong>${item}</strong><span>Thông tin chương trình</span></div>`).join('')}
        </div>
      </section>
    `;
  }

  if (slide.type === 'problem') {
    return `
      ${slideHeader(slide)}
      ${painMatrix(slide.cards)}
    `;
  }

  if (slide.type === 'funding-grid') {
    return `
      ${slideHeader(slide)}
      ${fundingLadder(slide.cards)}
    `;
  }

  if (slide.type === 'compare') {
    return `
      ${slideHeader(slide)}
      ${compareRadar(slide.columns)}
    `;
  }

  if (slide.type === 'flow') {
    return `
      ${slideHeader(slide)}
      ${loopDiagram(slide.steps)}
    `;
  }

  if (slide.type === 'governance-grid') {
    return `
      ${slideHeader(slide)}
      ${governanceArchitecture(slide.cards)}
    `;
  }

  if (slide.type === 'snapshot') {
    return `
      ${slideHeader(slide)}
      <div class="data-layout">
        <div class="kpi-grid">${slide.kpis.map(([value, label, text]) => kpiCard(value, label, text)).join('')}</div>
        ${donutChart(slide.donut)}
      </div>
    `;
  }

  if (slide.type === 'treasury-chart') {
    return `
      ${slideHeader(slide)}
      <div class="chart-layout">
        <div>
          <div class="kpi-grid compact">${slide.kpis.map(([value, label, text]) => kpiCard(value, label, text)).join('')}</div>
          ${barChart(slide.bars, 'M ada')}
        </div>
        <aside class="trend-panel">
          <span class="section-label">Treasury timeline</span>
          ${slide.trend
            .map(
              ([date, title, text]) => `
            <article>
              <time>${date}</time>
              <strong>${title}</strong>
              <p>${text}</p>
            </article>
          `
            )
            .join('')}
          ${slide.callout ? `<div class="dashboard-callout"><strong>${slide.callout.title}</strong><p>${slide.callout.text}</p></div>` : ''}
        </aside>
      </div>
    `;
  }

  if (slide.type === 'activity-chart') {
    return `
      ${slideHeader(slide)}
      <div class="chart-layout">
        <div>
          <div class="kpi-grid compact">${slide.kpis.map(([value, label, text]) => kpiCard(value, label, text)).join('')}</div>
          ${barChart(slide.bars, 'tx')}
        </div>
        <aside class="stat-callout">
          <span class="section-label">Block production</span>
          <strong>${slide.detail}</strong>
          <p>Cardano dùng epoch 5 ngày; số liệu giai đoạn này chỉ dùng các epoch đã có trong Cardano Insights.</p>
        </aside>
      </div>
    `;
  }

  if (slide.type === 'catalyst-chart') {
    return `
      ${slideHeader(slide)}
      <div class="catalyst-layout">
        <div class="global-kpis">${slide.global.map(([value, label]) => kpiCard(value, label, 'Project Catalyst')).join('')}</div>
        <div class="fund-bars">
          ${slide.funds
            .map(
              ([name, budget, funded, votes, width]) => `
            <article>
              <div>
                <strong>${name}</strong>
                <span>${budget}</span>
              </div>
              <div class="fund-track"><span style="width:${Math.max(18, (width / 46.48) * 100)}%"></span></div>
              <p>${funded} · ${votes}</p>
            </article>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  if (slide.type === 'ecosystem-grid') {
    return `
      ${slideHeader(slide)}
      ${ecosystemMap(slide.cards)}
    `;
  }

  if (slide.type === 'checklist') {
    return `
      ${slideHeader(slide)}
      ${scorecard(slide.cards)}
    `;
  }

  if (slide.type === 'case-study') {
    return `
      ${slideHeader(slide)}
      ${caseDashboard(slide)}
    `;
  }

  if (slide.type === 'agenda') {
    return `
      ${slideHeader(slide)}
      ${runOfShow(slide.agenda)}
    `;
  }

  if (slide.type === 'timeline') {
    return `
      ${slideHeader(slide)}
      ${campaignTimeline(slide)}
    `;
  }

  if (slide.type === 'quiz') {
    return `
      ${slideHeader(slide)}
      ${quizBoard(slide)}
    `;
  }

  if (slide.type === 'closing') {
    return `
      <section class="closing-layout">
        <span class="pill">${slide.eyebrow}</span>
        <h2>${slide.title}</h2>
        <p>${slide.subtitle}</p>
        <div class="link-list">${slide.meta.map((item) => `<span>${item}</span>`).join('')}</div>
        <div class="chip-row">${slide.chips.map((chip) => `<span>${chip}</span>`).join('')}</div>
      </section>
    `;
  }

  return `
    ${slideHeader(slide)}
    <div class="card-grid">${slide.cards.map(([title, text, extra]) => infoCard(title, text, extra)).join('')}</div>
  `;
}

function painMatrix(cards) {
  const severity = [86, 78, 72, 90];
  return `
    <div class="pain-matrix">
      ${cards
        .map(
          ([title, text], index) => `
        <article>
          <div class="visual-index">${String(index + 1).padStart(2, '0')}</div>
          <h3>${title}</h3>
          <p>${text}</p>
          <div class="severity"><span style="width:${severity[index]}%"></span></div>
          <small>Impact ${severity[index]}%</small>
        </article>
      `
        )
        .join('')}
    </div>
  `;
}

function fundingLadder(cards) {
  const axis = ['Tự chủ', 'Mentor', 'Cộng đồng', 'Scale', 'Doanh thu'];
  return `
    <div class="funding-ladder">
      <div class="ladder-axis">${axis.map((item) => `<span>${item}</span>`).join('')}</div>
      <div class="ladder-track">
        ${cards
          .map(
            ([title, text], index) => `
          <article style="--step:${index + 1}">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

function compareRadar(columns) {
  const rows = [
    ['Decision maker', 'Tập trung', 'Cộng đồng'],
    ['Transparency', 'Báo cáo định kỳ', 'Theo dõi công khai'],
    ['Access', 'Quan hệ / địa lý', 'Toàn cầu'],
    ['Accountability', 'Hợp đồng / investor', 'Milestone + on-chain trace'],
    ['Funding source', 'Ngân hàng / quỹ', 'Treasury / token holders']
  ];
  return `
    <div class="compare-radar">
      <div class="radar-head"><strong>${columns[0].name}</strong><strong>${columns[1].name}</strong></div>
      ${rows
        .map(
          ([label, left, right], index) => `
        <div class="radar-row">
          <div><span>${label}</span><p>${left}</p></div>
          <div class="radar-meter"><span style="left:${18 + index * 11}%"></span></div>
          <div><span>${label}</span><p>${right}</p></div>
        </div>
      `
        )
        .join('')}
    </div>
  `;
}

function loopDiagram(steps) {
  return `
    <div class="loop-diagram">
      <div class="loop-core">
        <strong>Treasury</strong>
        <span>funding loop</span>
      </div>
      ${steps
        .map(
          ([title, text], index) => `
        <article class="loop-node node-${index + 1}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `
        )
        .join('')}
    </div>
  `;
}

function governanceArchitecture(cards) {
  return `
    <div class="governance-arch">
      <div class="arch-top">
        ${cards
          .slice(4, 6)
          .map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`)
          .join('')}
      </div>
      <div class="arch-middle">
        ${cards
          .slice(1, 4)
          .map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`)
          .join('')}
      </div>
      <div class="arch-base">
        <article><h3>${cards[0][0]}</h3><p>${cards[0][1]}</p></article>
        <strong>Ada holders delegate / vote</strong>
      </div>
    </div>
  `;
}

function ecosystemMap(cards) {
  return `
    <div class="ecosystem-map">
      <div class="map-core"><strong>Cardano</strong><span>ecosystem layers</span></div>
      ${cards
        .map(
          ([title, text], index) => `
        <article class="map-node map-${index + 1}">
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `
        )
        .join('')}
    </div>
  `;
}

function scorecard(cards) {
  const weights = [20, 18, 15, 17, 15, 15];
  return `
    <div class="scorecard">
      ${cards
        .map(
          ([title, text], index) => `
        <article>
          <div class="score-ring">${weights[index]}%</div>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>
      `
        )
        .join('')}
    </div>
  `;
}

function caseDashboard(slide) {
  const metricCards = slide.cards.slice(0, 3);
  const checklist = slide.cards.slice(3);
  return `
    <div class="case-dashboard">
      <aside class="case-summary">
        ${slide.summary
          .map(
            ([label, value]) => `
          <div>
            <span>${label}</span>
            <strong>${value}</strong>
          </div>
        `
          )
          .join('')}
        <div class="milestone-progress"><span style="width:25%"></span></div>
        <small>Milestone progress 1/4</small>
      </aside>
      <div class="case-main">
        <div class="mini-card-row">${metricCards.map(([title, text]) => infoCard(title, text)).join('')}</div>
        <div class="deliverable-list">
          ${checklist.map(([title, text]) => `<article><span>✓</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function runOfShow(agenda) {
  return `
    <div class="runofshow">
      ${agenda
        .map(
          ([time, title, owner, goal]) => `
        <article>
          <time>${time}</time>
          <div>
            <h3>${title}</h3>
            <span>${owner}</span>
            <p>${goal}</p>
          </div>
        </article>
      `
        )
        .join('')}
    </div>
  `;
}

function campaignTimeline(slide) {
  return `
    <div class="campaign-board">
      <div class="campaign-phases">
        ${slide.steps
          .map(
            ([date, title, text], index) => `
          <article>
            <span>${String(index + 1).padStart(2, '0')}</span>
            <time>${date}</time>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `
          )
          .join('')}
      </div>
      <div class="campaign-outputs">${slide.cards.map(([title, text]) => infoCard(title, text)).join('')}</div>
    </div>
  `;
}

function quizBoard(slide) {
  return `
    <div class="quiz-board">
      <div class="quiz-tiles">
        ${slide.cards
          .map(
            ([title, text], index) => `
          <article>
            <span>${title}</span>
            <strong>${index + 1}</strong>
            <p>${text}</p>
          </article>
        `
          )
          .join('')}
      </div>
      <aside class="prize-panel">
        <span class="section-label">Quà tặng</span>
        ${slide.prizes.map((prize) => `<div>${prize}</div>`).join('')}
      </aside>
    </div>
  `;
}

function slideHeader(slide) {
  return `
    <header class="slide-header">
      <div class="slide-kicker">${categoryTag(slide)}<span class="section-label">${slide.eyebrow}</span></div>
      <h2>${slide.title}</h2>
      <p>${slide.subtitle}</p>
    </header>
  `;
}

function infoCard(title, text, extra = '') {
  return `
    <article class="info-card">
      <h3>${title}</h3>
      <p>${text}</p>
      ${extra ? `<small>${extra}</small>` : ''}
    </article>
  `;
}

function kpiCard(value, label, text) {
  return `
    <article class="kpi-card">
      <strong>${value}</strong>
      <span>${label}</span>
      <p>${text}</p>
    </article>
  `;
}

function donutChart(chart) {
  let offset = 0;
  const gradient = chart.values
    .map(([, value, color]) => {
      const start = offset;
      offset += value;
      return `${color} ${start}% ${offset}%`;
    })
    .join(', ');

  return `
    <aside class="donut-card">
      <span class="section-label">${chart.label}</span>
      <div class="donut" style="background:conic-gradient(${gradient})">
        <div>45B<span>max ada</span></div>
      </div>
      <div class="legend">
        ${chart.values
          .map(
            ([label, value, color]) => `
          <div><span style="background:${color}"></span><strong>${value}%</strong><p>${label}</p></div>
        `
          )
          .join('')}
      </div>
    </aside>
  `;
}

function barChart(bars, unit) {
  const max = Math.max(...bars.map(([, value]) => value));

  return `
    <div class="bar-chart">
      ${bars
        .map(
          ([label, value, color]) => `
        <div class="bar-row">
          <div class="bar-meta">
            <span>${label}</span>
            <strong>${formatNumber(value)} ${unit}</strong>
          </div>
          <div class="bar-track"><span style="width:${(value / max) * 100}%;background:${color}"></span></div>
        </div>
      `
        )
        .join('')}
    </div>
  `;
}

function formatNumber(value) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: value > 1000 ? 0 : 1
  }).format(value);
}

function sourceFootnote(slide) {
  if (!slide.source) return '';
  const urls = slide.source.urls || [slide.source.url];
  const hrefs = urls
    .map((url, index) => `<a href="${url}" target="_blank" rel="noreferrer">${index + 1}</a>`)
    .join(' · ');

  return `
    <div class="source-footnote">
      ${slide.source.label} (${hrefs})
    </div>
  `;
}

function getCategory(slide) {
  return categoryRules.find((rule) => rule.types.includes(slide.type))?.name || 'Deck';
}

function categoryTag(slide) {
  return `<span class="category-tag">${getCategory(slide)}</span>`;
}

function overviewSections() {
  return categoryRules
    .map((rule) => {
      const items = deck
        .map((item, index) => ({ item, index }))
        .filter(({ item }) => rule.types.includes(item.type));
      return { name: rule.name, items };
    })
    .filter((section) => section.items.length);
}

function render() {
  const slide = deck[state.current];
  const progress = ((state.current + 1) / deck.length) * 100;

  app.innerHTML = `
    <main class="app-shell">
      <div class="ambient ambient-one"></div>
      <div class="ambient ambient-two"></div>

      <section class="stage" aria-label="Bộ slide Cardano Meetup">
        <button class="nav-zone nav-zone-prev" type="button" data-action="prev" aria-label="Slide trước"></button>
        <button class="nav-zone nav-zone-next" type="button" data-action="next" aria-label="Slide sau"></button>

        <article class="slide-frame" data-slide="${state.current}">
          ${slideInner(slide)}
          ${sourceFootnote(slide)}
          <div class="slide-count">${String(state.current + 1).padStart(2, '0')} / ${String(deck.length).padStart(2, '0')}</div>
        </article>

        <div class="progress-track"><span style="width:${progress}%"></span></div>

        <nav class="controls" aria-label="Điều hướng slide">
          <button type="button" data-action="overview" aria-label="Mở mục lục">${icon('grid')}</button>
          <button type="button" data-action="fullscreen" aria-label="Bật tắt toàn màn hình">${icon('fullscreen')}</button>
        </nav>
      </section>

      <section class="overview ${state.overviewOpen ? 'open' : ''}" aria-label="Mục lục slide">
        <div class="overview-header">
          <span class="section-label">Mục lục</span>
          <button type="button" data-action="close-overview" aria-label="Đóng mục lục">Close</button>
        </div>
        <div class="overview-sections">
          ${overviewSections()
            .map(
              (section) => `
            <section class="overview-section">
              <h3>${section.name}</h3>
              <div class="overview-grid">
                ${section.items
                  .map(
                    ({ item, index }) => `
                <button type="button" class="${index === state.current ? 'active' : ''}" data-slide-target="${index}">
                  <span>${String(index + 1).padStart(2, '0')}</span>
                  <strong>${item.title}</strong>
                  <small>${item.eyebrow}</small>
                </button>
              `
                  )
                  .join('')}
              </div>
            </section>
          `
            )
            .join('')}
        </div>
      </section>
    </main>
  `;
}

function goTo(index) {
  state.current = (index + deck.length) % deck.length;
  render();
}

document.addEventListener('click', (event) => {
  const actionButton = event.target.closest('[data-action]');
  const slideButton = event.target.closest('[data-slide-target]');

  if (slideButton) {
    state.overviewOpen = false;
    goTo(Number(slideButton.dataset.slideTarget));
    return;
  }

  if (!actionButton) return;

  const action = actionButton.dataset.action;
  if (action === 'next') goTo(state.current + 1);
  if (action === 'prev') goTo(state.current - 1);
  if (action === 'overview') {
    state.overviewOpen = true;
    render();
  }
  if (action === 'close-overview') {
    state.overviewOpen = false;
    render();
  }
  if (action === 'fullscreen') toggleFullscreen();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === ' ') goTo(state.current + 1);
  if (event.key === 'ArrowLeft') goTo(state.current - 1);
  if (event.key.toLowerCase() === 'f') toggleFullscreen();
  if (event.key === 'Escape') {
    state.overviewOpen = false;
    render();
  }
});

function toggleFullscreen() {
  const target = document.documentElement;

  if (!document.fullscreenElement) {
    if (target.requestFullscreen) {
      target.requestFullscreen();
      return;
    }
    if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
      return;
    }
    if (target.msRequestFullscreen) {
      target.msRequestFullscreen();
    }
    return;
  }

  if (document.exitFullscreen) {
    document.exitFullscreen();
    return;
  }
  if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
    return;
  }
  if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

render();
