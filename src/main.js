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
      'Catalyst biến ngân sách cộng đồng thành các vòng tài trợ có proposal, review, voting và milestone. Các fund gần đây cho thấy quy mô proposal và voting rất lớn.',
    type: 'catalyst-chart',
    global: [
      ['150M+ USD', 'Total funding'],
      ['2,221', 'Proposals funded'],
      ['84,902+', 'Members']
    ],
    funds: [
      ['Fund13', '46.48M ada', '199 / 1,639', '310,597 votes', 46.48],
      ['Fund14', '18.59M ada', '131 / 1,283', '174,737 votes', 18.59],
      ['Fund15', '18.50M ada + 250K USDM', 'Pending', 'Voting/results pending', 18.5]
    ],
    source: {
      label: 'Nguồn: Project Catalyst, Fund13-Fund15 pages',
      url: 'https://projectcatalyst.io/'
    },
    notes:
      'Fund15 chưa có kết quả funding tại snapshot này, nên trình bày là budget và trạng thái pending, không nói đã funded.'
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
          <span class="pill">${slide.eyebrow}</span>
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

  if (slide.type === 'compare') {
    return `
      ${slideHeader(slide)}
      <div class="compare-grid">
        ${slide.columns
          .map(
            (column) => `
          <article class="compare-card ${column.accent}">
            <h3>${column.name}</h3>
            <ul>${column.points.map((point) => `<li>${point}</li>`).join('')}</ul>
          </article>
        `
          )
          .join('')}
      </div>
    `;
  }

  if (slide.type === 'flow') {
    return `
      ${slideHeader(slide)}
      <div class="flow-line">
        ${slide.steps
          .map(
            ([title, text], index) => `
          <article>
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
              <p>${funded} proposals · ${votes}</p>
            </article>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }

  if (slide.type === 'agenda') {
    return `
      ${slideHeader(slide)}
      <div class="agenda-list">
        ${slide.agenda
          .map(
            ([time, title, owner, goal]) => `
          <article>
            <time>${time}</time>
            <h3>${title}</h3>
            <strong>${owner}</strong>
            <p>${goal}</p>
          </article>
        `
          )
          .join('')}
      </div>
    `;
  }

  if (slide.type === 'timeline') {
    return `
      ${slideHeader(slide)}
      <div class="timeline">
        ${slide.steps
          .map(
            ([date, title, text]) => `
          <article>
            <time>${date}</time>
            <h3>${title}</h3>
            <p>${text}</p>
          </article>
        `
          )
          .join('')}
      </div>
      <div class="mini-card-row">${slide.cards.map(([title, text]) => infoCard(title, text)).join('')}</div>
    `;
  }

  if (slide.type === 'quiz') {
    return `
      ${slideHeader(slide)}
      <div class="quiz-layout">
        <div class="card-grid compact">${slide.cards.map(([title, text]) => infoCard(title, text)).join('')}</div>
        <aside class="prize-panel">
          <span class="section-label">Quà tặng</span>
          ${slide.prizes.map((prize) => `<div>${prize}</div>`).join('')}
        </aside>
      </div>
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

function slideHeader(slide) {
  return `
    <header class="slide-header">
      <span class="section-label">${slide.eyebrow}</span>
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

function render() {
  const slide = deck[state.current];
  const progress = ((state.current + 1) / deck.length) * 100;

  app.innerHTML = `
    <main class="app-shell">
      <div class="ambient ambient-one"></div>
      <div class="ambient ambient-two"></div>

      <section class="stage" aria-label="Bộ slide Cardano Meetup">
        <article class="slide-frame" data-slide="${state.current}">
          ${slideInner(slide)}
          ${sourceFootnote(slide)}
          <div class="slide-count">${String(state.current + 1).padStart(2, '0')} / ${String(deck.length).padStart(2, '0')}</div>
        </article>

        <div class="progress-track"><span style="width:${progress}%"></span></div>

        <nav class="controls" aria-label="Điều hướng slide">
          <button type="button" data-action="prev" aria-label="Slide trước">${icon('prev')}</button>
          <button type="button" data-action="overview" aria-label="Mở mục lục">${icon('grid')}</button>
          <button type="button" data-action="fullscreen" aria-label="Bật tắt toàn màn hình">${icon('fullscreen')}</button>
          <button type="button" data-action="next" aria-label="Slide sau">${icon('next')}</button>
        </nav>

        <div class="dot-nav" aria-label="Chọn slide">
          ${deck
            .map(
              (_, index) => `
            <button type="button" class="${index === state.current ? 'active' : ''}" data-slide-target="${index}" aria-label="Tới slide ${index + 1}"></button>
          `
            )
            .join('')}
        </div>
      </section>

      <section class="overview ${state.overviewOpen ? 'open' : ''}" aria-label="Mục lục slide">
        <div class="overview-header">
          <span class="section-label">Mục lục</span>
          <button type="button" data-action="close-overview" aria-label="Đóng mục lục">Close</button>
        </div>
        <div class="overview-grid">
          ${deck
            .map(
              (item, index) => `
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
  const target = document.querySelector('.app-shell') || document.documentElement;

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
