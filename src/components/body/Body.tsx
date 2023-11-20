import React, { useEffect, useMemo, useState } from 'react';
import './Body.scss';
import LeftMenu from './LeftMenu/LeftMenu';
import Content from './Content/Content';

function Body() {
  // const [time, setTime] = useState(new Date().toString());
  const [time, setTime] = useState(0);

  useEffect(() => {
    const value = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(value); // xoa gia tri truoc khi setInterval
    };
  }, [time]); // bien time thay doi se chay lai 1 lan
  // }, []); // ham useEffect chi chay 1 lan do mang phu thuoc rong

  return (
    <div className='body'>
      <LeftMenu> left menu</LeftMenu>
      <Content time={time}>Conent</Content>
    </div>
  );
}

export default Body;
