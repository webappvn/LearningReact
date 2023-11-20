import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import './LeftMenu.scss';

interface LeftMenuProps {
  data?: any;
  children?: any;
}

const LeftMenu: FunctionComponent<LeftMenuProps> = (props) => {
  const [renderNow, setRenderNow] = useState(Date.now());
  const currentTime = useRef(new Date().getMilliseconds());
  useEffect(() => {
    console.log('left menu initial');
    setInterval(() => {
      currentTime.current++;
      console.log('currentTime.current', currentTime.current);
    }, 1000);
    return () => {};
  }, []);
  console.log('render');

  return (
    <>
      <div className='left-menu'>current Time: {currentTime.current}</div>
      <button
        onClick={() => {
          setRenderNow(Date.now());
        }}
      >
        kiểm tra giá trị ngay
      </button>
    </>
  );
};

export default React.memo(LeftMenu);
