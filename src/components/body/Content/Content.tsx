import { FunctionComponent, useEffect, useMemo, useRef, useState } from 'react';
import './Content.scss';

interface ContentProps {
  data?: any;
  children?: any;
  time: any;
}

const Content: FunctionComponent<ContentProps> = ({ data, time }) => {
  const [house, setHouse] = useState(1);
  const currentTime = useRef(new Date().toTimeString());

  useEffect(() => {
    setHouse(time * 3);
    // count.current = time * 7;
    if (time % 3 === 0) {
      currentTime.current = new Date().toTimeString();
    }
    return () => {
      console.log('time: ', time);
    };
  }, [time]);
  const first = useRef(0);

  // const todo = time * 5;
  const todo = useMemo(() => {
    return time * 5;
  }, [time]);

  return (
    <>
      <div className='content'>Time : {time} </div>
      <div className='content'>time x 3 : {house} </div>
      <div className='content'>time x 5 : {todo} </div>
      <div className='content'>time x 7 : {currentTime.current} </div>
    </>
  );
};

export default Content;
