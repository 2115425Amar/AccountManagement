import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
const Spinner = ({path="login"}) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 750);
    count===0 &&  
    navigate(`/${path}`, { 
      state: location.pathname, 
    });
    return () => clearInterval(interval);
  }, [count, navigate, location,path]);

  return (
    <>
      <style>
        {`
          body {
            --black: #000000;
            --ash-black: #222;
            --white: #fafafa;
            --sky: #00ccff;
            --green: #22dddd;
            --blue: #1300ff;
            --dusk: #6600ff;
            --purple: #9900ff;
            --pink: #ff0066;
            --red: #fe0222;
            --orange: #fd7702;
            --yellow: #ffbb00;
            --background: var(--purple);
            --accent: var(--white);
            margin: 0;
            padding: 0;
            background-color: var(--background);
            color: var(--accent);
            padding-bottom: 100px;
            overflow: hidden;
          }

          #root {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          * {
            font-family: sofia-pro, sans-serif;
            font-weight: 400;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
          }

          h1,
          h2,
          h3 {
            font-family: sofia-pro, sans-serif;
            font-weight: 600;
            font-style: normal;
          }

          h1 {
            font-size: 36px;
            font-weight: 700;
            letter-spacing: -1px;
            line-height: 1.2;
            text-align: center;
            margin: 100px 0 40px;
          }

          h2 {
            font-weight: 400;
            margin: 50px 0 10px;
          }

          p {
            margin: 0 0 30px 0;
            font-size: 18px;
          }

          .box {
            width: 150px;
            height: 150px;
            background: var(--accent);
          }
        `}
      </style>

      <motion.div
        className="box"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    </>
  );
}

export default Spinner;
