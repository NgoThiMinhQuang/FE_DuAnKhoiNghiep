export type NewsArticle = {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  lead: string
  body: Array<{
    heading?: string
    paragraphs: string[]
  }>
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: '5 lợi ích của đậu đỏ đối với làn da bạn nên biết',
    excerpt:
      'Đậu đỏ chứa nhiều vitamin và chất chống oxy hóa, giúp làm sạch nhẹ nhàng, hỗ trợ da sáng khỏe và mịn màng hơn.',
    image: '/images/products/combo-3mon.jpg',
    date: '15/06/2026',
    lead:
      'Không chỉ là một loại thực phẩm quen thuộc, đậu đỏ còn được ứng dụng trong chăm sóc da nhờ nguồn dưỡng chất tự nhiên và khả năng làm sạch dịu nhẹ.',
    body: [
      {
        heading: '1. Hỗ trợ làm sạch da nhẹ nhàng',
        paragraphs: [
          'Bột đậu đỏ có kết cấu mịn, giúp lấy đi bụi bẩn và lớp tế bào cũ trên bề mặt da. Khi được sử dụng đúng cách, nguyên liệu này mang lại cảm giác sạch thoáng mà không làm da bị khô căng.',
        ],
      },
      {
        heading: '2. Giúp làn da trông sáng và đều màu hơn',
        paragraphs: [
          'Đậu đỏ chứa vitamin nhóm B cùng các hợp chất chống oxy hóa. Việc làm sạch đều đặn kết hợp dưỡng ẩm và chống nắng giúp bề mặt da tươi sáng, mịn màng hơn theo thời gian.',
        ],
      },
      {
        heading: '3. Hỗ trợ duy trì độ ẩm tự nhiên',
        paragraphs: [
          'Các sản phẩm chăm sóc da từ đậu đỏ của Red Bean Beauty được phát triển theo hướng dịu nhẹ, kết hợp thành phần cấp ẩm để hạn chế cảm giác khô ráp sau khi làm sạch.',
        ],
      },
      {
        heading: '4. Góp phần bảo vệ da trước tác động môi trường',
        paragraphs: [
          'Chất chống oxy hóa giúp hỗ trợ làn da trước những tác động thường gặp như khói bụi và ánh nắng. Tuy nhiên, bạn vẫn cần sử dụng kem chống nắng mỗi ngày và che chắn da khi ra ngoài.',
        ],
      },
      {
        heading: '5. Phù hợp với chu trình chăm sóc da tối giản',
        paragraphs: [
          'Một chu trình cơ bản gồm sữa rửa mặt, sản phẩm tẩy tế bào chết dùng với tần suất phù hợp và toner cấp ẩm đã có thể đáp ứng nhu cầu chăm sóc hằng ngày. Hãy thử sản phẩm trên vùng da nhỏ trước khi sử dụng toàn mặt.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Chu trình chăm sóc da 3 bước đơn giản mỗi ngày',
    excerpt:
      'Làm sạch, loại bỏ tế bào chết và cân bằng độ ẩm là ba bước cơ bản giúp làn da duy trì vẻ tươi sáng tự nhiên.',
    image: '/images/products/combo-3mon7.jpg',
    date: '10/06/2026',
    lead: 'Một chu trình chăm sóc da không cần quá nhiều bước. Điều quan trọng là chọn đúng sản phẩm và duy trì thói quen đều đặn.',
    body: [
      { heading: 'Bước 1: Làm sạch', paragraphs: ['Rửa mặt vào buổi sáng và buổi tối để loại bỏ dầu thừa, bụi bẩn và cặn sản phẩm trên da. Massage nhẹ nhàng, tránh chà xát mạnh.'] },
      { heading: 'Bước 2: Làm sạch lớp tế bào cũ', paragraphs: ['Sử dụng sản phẩm tẩy tế bào chết từ một đến hai lần mỗi tuần tùy tình trạng da. Không nên dùng khi da đang kích ứng hoặc có tổn thương hở.'] },
      { heading: 'Bước 3: Cân bằng và cấp ẩm', paragraphs: ['Toner giúp làm dịu và bổ sung độ ẩm sau bước làm sạch. Ban ngày, hãy hoàn thiện chu trình bằng kem chống nắng phù hợp.'] },
    ],
  },
  {
    id: 3,
    title: 'Cách chọn sữa rửa mặt dịu nhẹ cho từng loại da',
    excerpt:
      'Một sản phẩm làm sạch phù hợp sẽ giúp loại bỏ bụi bẩn mà không khiến da khô căng hay mất đi độ ẩm cần thiết.',
    image: '/images/products/sua-rua-mat-tao-bot3.jpg',
    date: '05/06/2026',
    lead: 'Làm sạch là bước đầu tiên và cũng là nền tảng của mọi chu trình dưỡng da. Mỗi loại da sẽ cần một cách lựa chọn khác nhau.',
    body: [
      { heading: 'Da dầu và da hỗn hợp', paragraphs: ['Ưu tiên sản phẩm tạo bọt mịn, làm sạch tốt nhưng không khiến bề mặt da khô rít. Sau khi rửa, da nên giữ được cảm giác mềm và dễ chịu.'] },
      { heading: 'Da khô và da nhạy cảm', paragraphs: ['Nên chọn công thức dịu nhẹ, hạn chế hương liệu mạnh và chú trọng thành phần giữ ẩm. Luôn thử sản phẩm trên vùng da nhỏ trước khi dùng thường xuyên.'] },
      { heading: 'Dấu hiệu sản phẩm phù hợp', paragraphs: ['Da không bị căng, ngứa hoặc đỏ sau khi rửa. Nếu xuất hiện khó chịu kéo dài, hãy ngừng sử dụng và tham khảo ý kiến chuyên gia da liễu.'] },
    ],
  },
  {
    id: 4,
    title: 'Tẩy tế bào chết đúng cách để da luôn mịn màng',
    excerpt:
      'Tần suất và cách sử dụng phù hợp giúp làm sạch lớp da cũ hiệu quả, đồng thời hạn chế cảm giác kích ứng trên da.',
    image: '/images/products/mat-na-tay-te-bao-chet6.jpg',
    date: '28/05/2026',
    lead: 'Tẩy tế bào chết đúng cách hỗ trợ bề mặt da thông thoáng và mịn hơn, nhưng sử dụng quá thường xuyên có thể khiến da nhạy cảm.',
    body: [
      { heading: 'Chọn tần suất phù hợp', paragraphs: ['Phần lớn làn da chỉ cần tẩy tế bào chết từ một đến hai lần mỗi tuần. Với da nhạy cảm, nên bắt đầu ở tần suất thấp hơn.'] },
      { heading: 'Thao tác nhẹ nhàng', paragraphs: ['Thoa sản phẩm trên da ẩm và massage nhẹ theo hướng vòng tròn. Không chà xát vào vùng da đang viêm, trầy xước hoặc kích ứng.'] },
      { heading: 'Dưỡng da sau khi sử dụng', paragraphs: ['Cấp ẩm và chống nắng đầy đủ giúp da được bảo vệ tốt hơn sau bước làm sạch lớp tế bào cũ.'] },
    ],
  },
  {
    id: 5,
    title: 'Toner đậu đỏ có vai trò gì trong chu trình dưỡng da?',
    excerpt:
      'Toner giúp cân bằng da sau bước làm sạch, cấp ẩm nhẹ và chuẩn bị cho da hấp thu các sản phẩm dưỡng tiếp theo.',
    image: '/images/products/toner-duong-da4.jpg',
    date: '22/05/2026',
    lead: 'Toner là bước chuyển tiếp giữa làm sạch và dưỡng ẩm, đặc biệt hữu ích khi làn da cần được làm dịu và bổ sung nước.',
    body: [
      { heading: 'Cân bằng cảm giác trên da', paragraphs: ['Sau khi rửa mặt, toner hỗ trợ làm dịu cảm giác căng và giúp bề mặt da mềm hơn trước các bước dưỡng tiếp theo.'] },
      { heading: 'Cách sử dụng', paragraphs: ['Cho một lượng vừa đủ ra lòng bàn tay hoặc bông mềm, sau đó vỗ nhẹ lên da. Không cần chà xát hay sử dụng quá nhiều sản phẩm.'] },
      { heading: 'Lưu ý khi lựa chọn', paragraphs: ['Ưu tiên công thức phù hợp với loại da và tránh thành phần từng gây kích ứng cho bạn. Toner không thay thế kem dưỡng hoặc kem chống nắng.'] },
    ],
  },
  {
    id: 6,
    title: 'Bí quyết chăm sóc da sáng khỏe từ nguyên liệu Việt',
    excerpt:
      'Những nguyên liệu gần gũi như đậu đỏ đang trở thành lựa chọn được yêu thích trong xu hướng làm đẹp lành tính.',
    image: '/images/products/combo-duong-da-mini2.jpg',
    date: '16/05/2026',
    lead: 'Nguyên liệu Việt có tiềm năng lớn trong ngành mỹ phẩm khi được nghiên cứu, xử lý và kết hợp trong công thức phù hợp.',
    body: [
      { heading: 'Lựa chọn sản phẩm có thông tin rõ ràng', paragraphs: ['Nguồn gốc nguyên liệu, thành phần, hướng dẫn sử dụng và hạn dùng là những thông tin cần kiểm tra trước khi mua mỹ phẩm.'] },
      { heading: 'Duy trì thói quen đều đặn', paragraphs: ['Hiệu quả chăm sóc da đến từ sự kiên trì. Làm sạch, dưỡng ẩm, chống nắng và sinh hoạt lành mạnh nên được duy trì mỗi ngày.'] },
      { heading: 'Lắng nghe làn da', paragraphs: ['Không phải nguyên liệu thiên nhiên nào cũng phù hợp với tất cả mọi người. Hãy ngừng dùng sản phẩm nếu da xuất hiện dấu hiệu khó chịu bất thường.'] },
    ],
  },
]

export const getNewsArticle = (id: number) => newsArticles.find((article) => article.id === id)
