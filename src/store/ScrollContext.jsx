import React, {createContext, useRef} from "react";

export const ScrollContexts = createContext(null);

const ScrollContext = ({children}) => {
  const heroRef = useRef(null);
  const feauturesRef = useRef(null);
  const benefitRef = useRef(null);
  const pricingRef = useRef(null);
  const faqsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const videoRef = useRef(null);
  const contactRef = useRef(null);
  const swiperRef = useRef(null);

  const scrollFnc = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollContexts.Provider
      value={{
        scrollFnc,
        feauturesRef,
        benefitRef,
        faqsRef,
        pricingRef,
        testimonialsRef,
        heroRef,
        contactRef,
        videoRef,
        swiperRef,
      }}
    >
      {children}
    </ScrollContexts.Provider>
  );
};

export default ScrollContext;
