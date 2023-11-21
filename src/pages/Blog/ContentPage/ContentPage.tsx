import { FunctionComponent } from "react";
import { Button, Card, Col, List, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./ContentPage.scss";

interface ContentPageProps {}

const listNews1 = [
  {
    image: "/content1.png",
    title: (
      <div className="item-news">
        <Link to="/blog/tai-chinh-bao-hiem">Tài Chính - Bảo Hiểm</Link>
        <div className="title-news">
          <Link to="/blog/bai-viet/cach-tinh-lai-suat-tra-gop-dien-thoai">
            Học lỏm mẹo chi tiêu tiết kiệm trong gia đình của người Do Thái
          </Link>
        </div>
      </div>
    ),
    description:
      "Bỏ túi cách chi tiêu tiết kiệm trong gia đình sẽ giúp bạn có kế hoạch",
  },
];
const listNews = [
  {
    image: "/content1.png",
    title: (
      <div className="item-news">
        <Link to="/blog/tai-chinh-bao-hiem">Tài Chính - Bảo Hiểm</Link>
        <div className="title-news">
          <Link to="/blog/bai-viet/cach-tinh-lai-suat-tra-gop-dien-thoai">
            Học lỏm mẹo chi tiêu tiết kiệm trong gia đình của người Do Thái
          </Link>
        </div>
      </div>
    ),
    description:
      "Bỏ túi cách chi tiêu tiết kiệm trong gia đình sẽ giúp bạn có kế hoạch",
  },
  {
    image: "/content1.png",
    title: (
      <div className="item-news">
        <Link to="/blog/tai-chinh-bao-hiem">Tài Chính - Bảo Hiểm</Link>
        <div className="title-news">
          <Link to="/blog/bai-viet/cach-tinh-lai-suat-tra-gop-dien-thoai">
            Học lỏm mẹo chi tiêu tiết kiệm trong gia đình của người Do Thái
          </Link>
        </div>
      </div>
    ),
    description:
      "Bỏ túi cách chi tiêu tiết kiệm trong gia đình sẽ giúp bạn có kế hoạch",
  },
  {
    image: "/content1.png",
    title: (
      <div className="item-news">
        <Link to="/blog/tai-chinh-bao-hiem">Tài Chính - Bảo Hiểm</Link>
        <div className="title-news">
          <Link to="/blog/bai-viet/cach-tinh-lai-suat-tra-gop-dien-thoai">
            Học lỏm mẹo chi tiêu tiết kiệm trong gia đình của người Do Thái
          </Link>
        </div>
      </div>
    ),
    description:
      "Bỏ túi cách chi tiêu tiết kiệm trong gia đình sẽ giúp bạn có kế hoạch",
  },
];

function NumberList() {
  const listItems = listNews.map((item) => (
    <Col span={8}>
      <Card
        hoverable
        cover={
          <img
            alt="example"
            src="/content1.png"
          />
        }
      >
        <Meta
          title={item.title}
          description={item.description}
        />
      </Card>
    </Col>
  ));
  return <>{listItems}</>;
}
function NumberListDoc() {
  return (
    <div style={{ width: "100%" }}>
      {listNews.map((item) => (
        <List
          itemLayout="horizontal"
          dataSource={listNews}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img
                    style={{
                      width: 250,
                    }}
                    src="/content3.jpg"
                    alt=""
                  />
                }
                title={
                  <>
                    <div>{item.title}</div>
                    asdasda
                  </>
                }
                description={item.description}
              />
              dsfsdf sdf sd
            </List.Item>
          )}
        />
      ))}
      <div
        style={{
          textAlign: "center",
        }}
        // dangerouslySetInnerHTML={{ __html: '' }}
      >
        <Button danger>
          <ArrowDownOutlined />
          Xem thêm
        </Button>
      </div>
    </div>
  );
}

function RightNews() {
  return (
    <div>
      <h4>Xem nhiều nhất</h4>
      <List
        itemLayout="horizontal"
        dataSource={listNews}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <img
                  style={{
                    width: 150,
                  }}
                  src="/content3.jpg"
                  alt=""
                />
              }
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

const ContentPage: FunctionComponent<ContentPageProps> = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <List
          itemLayout="horizontal"
          dataSource={listNews1}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <img
                    style={{
                      width: 450,
                    }}
                    src="/content2.jpg"
                    alt=""
                  />
                }
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
      <Row gutter={16}>
        <NumberList />
      </Row>
      <Row>
        <Col
          xs={24}
          xl={16}
        >
          <NumberListDoc />
        </Col>
        <Col
          xs={24}
          xl={8}
        >
          <RightNews />
        </Col>
      </Row>
    </>
  );
};

export default ContentPage;
