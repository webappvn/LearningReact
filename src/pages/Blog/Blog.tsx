import { FunctionComponent, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footers";
import { Link, useParams } from "react-router-dom";
import "./Blog.scss";
import { Tabs, TabsProps } from "antd";
import ContentPage from "./ContentPage/ContentPage";
import PostBlog from "./PostBlog/PostBlog";

interface BlogProps {}

const dataTab = [
  {
    code: "home",
    title: "Blog Momo",
    tabTitle: "Mới nhất",
    decription: "",
    component: ContentPage,
  },
  {
    code: "du-lich",
    title: "Du lịch",
    tabTitle: "Du lịch",
    decription:
      "Trải nghiệm du lịch, kinh nghiệm đặt phòng khách sạn, vé máy bay, tàu xe.",
    component: ContentPage,
  },
  {
    code: "tai-chinh-bao-hiem",
    title: "Tài Chính - Bảo Hiểm",
    tabTitle: "Tài Chính - Bảo Hiểm",
    decription:
      "Giúp bạn hiểu thêm về các sản phẩm, dịch vụ Tài chính - Bảo hiểm hiện nay, nâng cao sự chủ" +
      "động về tài chính, đảm bảo an toàn cho cuộc sống ngày một hiện đại hơn",
    component: ContentPage,
  },
];

const Blog: FunctionComponent<BlogProps> = (props) => {
  let params = useParams(); // lấy ủl quẻy
  const onChange = (key: string) => {
    console.log(key);
    console.log("params.code: ", params.code);
  };
  const items: TabsProps["items"] = dataTab.map((item) => {
    const { code, tabTitle, component } = item;
    const Component: any = component;
    let url = `/blog/${code || ""}`;
    if (!code) url = "/blog";

    return {
      key: code || "home",
      label: <Link to={url}>{tabTitle}</Link>,
      children: Component ? <Component /> : "",
    };
  });
  const [data, setData] = useState<any>({});
  useEffect(() => {
    if (!params.code) {
      setData(dataTab[0]);
      return;
    }
    const data1 = dataTab.find((item) => {
      if (params.code === item.code) {
        return true;
      }
      return false;
    });
    setData(data1);

    return () => {};
  }, [params.code]);
  console.log("params.code", params.code);

  return (
    <>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <Header></Header>
        <div
          className="Blog"
          style={{ minHeight: "100vh" }}
        >
          {data?.title && (
            <div className="content-blog">
              <h1>{data?.title}</h1>
              <p>{data?.decription}</p>
              <Tabs
                activeKey={params.code}
                items={items}
                onChange={onChange}
              />
            </div>
          )}
          {/* {!data?.title && <PostBlog />} */}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Blog;
