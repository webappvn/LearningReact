import React, { useMemo } from "react";
import "./Header.scss";
import { Avatar, Button, Col, List, Popover, Row, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { LANGUAGES } from "../../constants";
import { useTranslation } from "react-i18next";

const menu1 = [
  {
    title: "Thanh toán hóa đơn",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Thanh toán hóa đơn",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Thanh toán hóa đơn",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Thanh toán hóa đơn",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Thanh toán hóa đơn",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Thanh toán hóa đơn",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Thanh toán hóa đơn",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Thanh toán hóa đơn",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Thanh toán hóa đơn",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
].map((i) => ({ ...i, key: Math.random() }));
let convertData: any = [];
for (let i = 0; i < menu1.length; i += 3) {
  convertData.push([menu1[i], menu1[i + 1], menu1[i + 2]]);
}
const menuMomo = [
  {
    title: "Giới thiệu",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "An toàn",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Bảo mật",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Liên hệ",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
];
const dataNews = [
  {
    title: "Sự kiện",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Thông cáo",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Thư viện",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Cộng đồng",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
  {
    title: "Thông báo",
    description: "Miễn phí, bảo mật, chuyển trong 1s",
  },
];
const Header = () => {
  const contentDV = (
    <div className="content-menu">
      <List itemLayout="horizontal">
        {convertData.map((row: any) => {
          const key = row?.map((i: any) => i.key)?.join("-");
          return (
            <Row
              gutter={10}
              style={{ width: 1000 }}
              key={key}
            >
              {row.map((item: any) => {
                if (item) {
                  const { title, description, key } = item;
                  return (
                    <Col
                      span={8}
                      className="item"
                      key={key}
                    >
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src={"/logo.png"} />}
                          title={<span>{title}</span>}
                          description={description}
                        />
                      </List.Item>
                    </Col>
                  );
                }
                return <></>;
              })}
            </Row>
          );
        })}
      </List>
    </div>
  );

  const contentMomo = (
    <div
      className="content-menu"
      style={{
        width: 300,
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={menuMomo}
        renderItem={(item, index) => (
          <List.Item className="item">
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
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
  const contentNews = (
    <div
      style={{
        width: 300,
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={dataNews}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
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
  const contentHelp = (
    <div
      style={{
        width: 300,
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={dataNews}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
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
  const { i18n, t } = useTranslation();
  const onChangeLang = (value?: string) => {
    const lang_code = value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <div className="header">
      <div className="logo">
        <img
          src="/logo.png"
          alt=""
        />
      </div>
      <div className="menu">
        <div className="item-menu">
          <Popover
            placement="bottom"
            content={contentDV}
            destroyTooltipOnHide
          >
            Dịch vụ <DownOutlined />
          </Popover>
        </div>
        <div className="item-menu">
          <Popover
            placement="bottom"
            content={contentMomo}
            destroyTooltipOnHide
          >
            Về MoMo <DownOutlined />
          </Popover>
        </div>
        <div className="item-menu">
          <Popover
            placement="bottom"
            content={contentNews}
          >
            Tin tức <DownOutlined />
          </Popover>
        </div>
        <div className="item-menu">
          <Popover
            placement="bottom"
            content={contentHelp}
          >
            Trợ Giúp <DownOutlined />
          </Popover>
        </div>
        <div className="item-menu">
          <Popover
            placement="bottom"
            content={contentDV}
          >
            Đối tác <DownOutlined />
          </Popover>
        </div>
        <div className="item-menu">
          <Popover
            placement="bottom"
            content={contentDV}
          >
            Blog Momo <DownOutlined />
          </Popover>
        </div>
      </div>
      <Select
        style={{ width: 120 }}
        onChange={onChangeLang}
        defaultValue={"vi"}
      >
        {LANGUAGES.map(({ code, label }) => (
          <Select.Option
            key={code}
            value={code}
          >
            {label}
          </Select.Option>
        ))}
      </Select>
      {t("title")}
    </div>
  );
};

export default Header;
