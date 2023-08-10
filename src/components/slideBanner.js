import React, { useState, useEffect } from 'react';

const SlideDownBanner = ({ message, duration }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setVisible(true);
    }, 2000); // 2 seconds

    const timer = setTimeout(() => {
      setVisible(false);
    }, duration + 2000);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div className={`slide-down-banner ${visible ? 'visible' : ''}`}>
      {message}
    </div>
  );
};

SlideDownBanner.defaultProps = {
  message: "Disclaimer: This website is for demonstration purposes and may include some bugs. If your console needs repair, please feel free to call or email.",
  duration: 10000, // 10 seconds
};

export default SlideDownBanner;
