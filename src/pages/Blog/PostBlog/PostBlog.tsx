import { FunctionComponent } from 'react';
import { Breadcrumb, Button, Col, Divider, Row } from 'antd';
import { HomeOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface PostBlogProps {}

const PostBlog: FunctionComponent<PostBlogProps> = () => {
  const textPost = () => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<p class="jsx-87e0eace442d4237 italic leading-normal text-gray-600  lg:text-lg ">Trả góp điện thoại có lãi suất bao nhiêu? Cách tính lãi suất trả góp điện thoại, máy tính đúng nhất? Đọc ngay để được giải đáp thắc mắc bạn nhé.</p><div class="jsx-87e0eace442d4237 soju__prose mx-auto mb-4 leading-normal md:text-lg md:leading-relaxed lg:mx-0 lg:w-full lg:max-w-full"></div><div class="soju__prose mx-auto leading-normal md:text-lg md:leading-relaxed lg:mx-0 lg:w-full lg:max-w-full"><p>
      <br>
      Lãi suất trả góp là yếu tố quan trọng bạn cần xem xét trước khi tiến hành mua điện thoại, máy tính. Lãi suất trả góp máy tính, điện thoại sẽ ảnh hưởng đến tổng số tiền và số tiền hàng tháng mà bạn phải trả. Bài viết sau sẽ giải đáp cụ thể cho vấn đề này.
    </p>
    
    <h2 class="ckemm_title_spy" id="mua-sắm-qua-phương-thức-trả-góp-là-gì?"><span style="color: rgb(165, 0, 100);"><strong>Mua sắm qua phương thức trả góp là gì?</strong></span></h2>
    
    <p>
      Mua sắm trả góp là hình thức mua hàng trong đó bạn không phải trả toàn bộ số tiền trong 1 lần để sở hữu sản phẩm, mà chỉ cần chia nhỏ thanh toán một số tiền nhất định trong khoảng thời gian cụ thể như 3 tháng, 6 tháng, 12 tháng.&nbsp;&nbsp;
    </p>
    
    <p>
      Đây là phương thức khá phổ biến hiện nay bởi trả góp giúp người mua linh hoạt tài chính, dễ dàng sở hữu các sản phẩm giá trị cao như điện thoại, máy tính mà không phải tiêu hết một khoản tiền lớn ngay tại thời điểm mua sắm. Hơn nữa, hiện nay việc mua điện thoại hay máy tính trả góp thường rất dễ dàng và tiện lợi nên người mua có thể hoàn tất thủ tục mua sắm và trả góp trong thời gian ngắn, tiết kiệm thời gian hơn so với việc vay vốn dài hạn.&nbsp;
    </p>
    
    <p>
      <span style="color: rgb(165, 0, 100);"><strong>Nếu bạn vẫn chưa rõ về cách tính lãi suất trả góp điện thoại hay lãi suất trả góp máy tính thì có thể xem công thức dưới đây:&nbsp;</strong></span>
    </p>
    <p>
      Mua sắm trả góp là hình thức mua hàng trong đó bạn không phải trả toàn bộ số tiền trong 1 lần để sở hữu sản phẩm, mà chỉ cần chia nhỏ thanh toán một số tiền nhất định trong khoảng thời gian cụ thể như 3 tháng, 6 tháng, 12 tháng.&nbsp;&nbsp;
    </p>
    <div>`,
        }}
      />
    );
  };

  return (
    <>
      <div className='detai-post'>
        <div style={{ padding: '50px 0' }}>
          <Breadcrumb
            separator='>'
            items={[
              {
                title: <HomeOutlined />,
              },
              {
                title: <Link to='/blog'>Blog</Link>,
              },
              {
                title: (
                  <Link to='/tai-chinh-bao-hiem'>Tài Chính - Bảo Hiểm</Link>
                ),
              },
              {
                title: 'Cách tính lãi suất trả góp điện thoại',
              },
            ]}
          />
        </div>
        <div>
          <img
            src='/content2.jpg'
            alt=''
          />
          <Row
            gutter={50}
            style={{ padding: '50px 0' }}
          >
            <Col
              xs={24}
              lg={16}
              xl={18}
            >
              <div className='flex'>
                <div className='flex-auto'>
                  <Link to='/blog'>Tài Chính - Bảo Hiểm</Link>
                  <p>5 phút đọc</p>
                </div>
                <div>
                  <Button danger>
                    Chia sẻ <ShareAltOutlined />
                  </Button>
                </div>
              </div>
              <h1>Cách tính lãi suất trả góp điện thoại, laptop 2023</h1>
              <div>{textPost()}</div>
            </Col>
            <Col
              xs={24}
              lg={8}
              xl={6}
            >
              MỤC LỤC
              <Divider type='horizontal' />
              <a href='a'>Mua sắm qua phương thức trả góp là gì?</a>
              <Divider type='horizontal' />
              <a href='a'>Mua sắm qua phương thức trả góp là gì?</a>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default PostBlog;
