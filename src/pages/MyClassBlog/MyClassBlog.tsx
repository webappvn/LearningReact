import { Tabs, TabsProps } from 'antd';
import React from 'react';
import Footer from '../../components/footer/Footers';
import Header from '../../components/header/Header';
import ContentPage from '../Blog/ContentPage/ContentPage';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { withRouter } from '../../HOC/withRouter';
import PostBlog from '../Blog/PostBlog/PostBlog';

interface MyClassBlogProps {
  params: any;
}

interface MyClassBlogState {
  data: any;
}

const dataTab = [
  {
    code: 'home',
    title: 'Blog Momo',
    tabTitle: 'Mới nhất',
    decription: '',
    component: ContentPage,
  },
  {
    code: 'du-lich',
    title: 'Du lịch',
    tabTitle: 'Du lịch',
    decription:
      'Trải nghiệm du lịch, kinh nghiệm đặt phòng khách sạn, vé máy bay, tàu xe.',
    component: ContentPage,
  },
  {
    code: 'tai-chinh-bao-hiem',
    title: 'Tài Chính - Bảo Hiểm',
    tabTitle: 'Tài Chính - Bảo Hiểm',
    decription:
      'Giúp bạn hiểu thêm về các sản phẩm, dịch vụ Tài chính - Bảo hiểm hiện nay, nâng cao sự chủ' +
      'động về tài chính, đảm bảo an toàn cho cuộc sống ngày một hiện đại hơn',
    component: ContentPage,
  },
];

class MyClassBlog extends React.Component<MyClassBlogProps, MyClassBlogState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {},
    } as any;
  }
  onChange = () => {
    console.log('this.props: ', this.props);
  };
  items: TabsProps['items'] = dataTab.map((item) => {
    const { code, tabTitle, component } = item;
    const Component: any = component;
    let url = `/classComponent/${code || ''}`;
    if (!code) url = '/classComponent';

    return {
      key: code || 'home',
      label: <Link to={url}>{tabTitle}</Link>,
      children: Component ? <Component /> : '',
    };
  });
  getParam = () => {
    const urlParam = this.props.params.code;
    console.log('studentId: ', urlParam);
    this.onChange();
    if (!urlParam) {
      this.setState({
        data: dataTab[0],
      });
      return;
    }
    const tab = dataTab.find((item) => {
      if (item.code === urlParam) return true;
      return false;
    });
    if (this.state.data !== tab) {
      this.setState({
        data: tab,
      });
    }
  };
  componentDidMount = () => {
    this.getParam();
  };

  getSnapshotBeforeUpdate(prevProps: any) {
    this.getParam();
  }
  render() {
    const { data } = this.state;
    console.log('this.state: ', this.props);
    return (
      <>
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
          <Header></Header>
          <div
            className='Blog'
            style={{ minHeight: '100vh' }}
          >
            {data?.title && (
              <div className='content-blog'>
                <h1>{data?.title}</h1>
                <p>{data?.decription}</p>
                <Tabs
                  activeKey={this.props.params.code}
                  items={this.items}
                  onChange={this.onChange}
                />
              </div>
            )}
            {!data?.title && <PostBlog />}
          </div>
          <Footer></Footer>
        </div>
      </>
    );
  }
}

export default withRouter(MyClassBlog);
