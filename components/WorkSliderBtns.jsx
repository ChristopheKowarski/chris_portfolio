"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ contaionerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={contaionerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles}/>
      </button>
    </div>
  );
};

export default WorkSliderBtns;
