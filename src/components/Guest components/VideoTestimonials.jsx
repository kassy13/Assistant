// import React, {useState} from "react";
// import {Swiper, SwiperSlide} from "swiper/react";
// import {EffectCoverflow, Navigation} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import {RiPauseFill, RiPlayFill} from "react-icons/ri";

// import num1 from "../../assets/TestimonialVideos/num1.mp4";
// import num2 from "../../assets/TestimonialVideos/num 2.mp4";
// import num3 from "../../assets/TestimonialVideos/num3.mp4";
// import num4 from "../../assets/TestimonialVideos/num4.mp4";
// import num5 from "../../assets/TestimonialVideos/num5.mp4";
// import num6 from "../../assets/TestimonialVideos/num6.mp4";
// import num7 from "../../assets/TestimonialVideos/num7.mp4";
// import num8 from "../../assets/TestimonialVideos/num8.mp4";

// const testimonials = [
//   {name: "Michael Doyle", video: num1, occupation: "X Influencer"},
//   {name: "Calvin Alvarez", video: num2, occupation: "Entrepreneur"},
//   {name: "Manuel Cortes", video: num3, occupation: "Dropshipping Store Owner"},
//   {name: "Agus Sitompul", video: num4, occupation: "Social Media Agency Owner"},
//   {name: "Amanda Barrett", video: num5, occupation: "X User"},
//   {name: "Luis Flores", video: num6, occupation: "Dropshipping Store Owner"},
//   {name: "Vicente Medina", video: num7, occupation: "X User"},
//   {name: "Gabriel Romero", video: num8, occupation: "Web 3 Discord Owner"},
// ];

// const VideoTestimonials = () => {
//   const [playing, setPlaying] = useState(null);

//   const togglePlay = (index) => {
//     const videoElement = document.getElementById(`video-${index}`);
//     if (videoElement.paused) {
//       videoElement.play();
//       setPlaying(index);
//     } else {
//       videoElement.pause();
//       setPlaying(null);
//     }
//   };

//   return (
//     <div className="video-testimonials">
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={5}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           // slideShadows: true,
//           loop: true,
//         }}
//         navigation={true}
//         modules={[EffectCoverflow, Navigation]}
//         className="mySwiper"
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide key={index} className="testimonial-slide">
//             <div className="w-60 h-full">
//               <video
//                 id={`video-${index}`}
//                 src={testimonial.video}
//                 loop
//                 className="w-full h-full"
//               />
//               <button
//                 className="play-pause-btn"
//                 onClick={() => togglePlay(index)}
//               >
//                 {playing === index ? <RiPauseFill /> : <RiPlayFill />}
//               </button>
//             </div>
//             <div className="testimonial-details">
//               <h3>{testimonial.name}</h3>
//               <p>{testimonial.occupation}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default VideoTestimonials;

// import React, {useState} from "react";
// import {Swiper, SwiperSlide} from "swiper/react";
// import {EffectCoverflow, Navigation} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import {RiPauseFill, RiPlayFill} from "react-icons/ri";

// import num1 from "../../assets/TestimonialVideos/num1.mp4";
// import num2 from "../../assets/TestimonialVideos/num2.mp4";
// import num3 from "../../assets/TestimonialVideos/num3.mp4";
// import num4 from "../../assets/TestimonialVideos/num4.mp4";
// import num5 from "../../assets/TestimonialVideos/num5.mp4";
// import num6 from "../../assets/TestimonialVideos/num6.mp4";
// import num7 from "../../assets/TestimonialVideos/num7.mp4";
// import num8 from "../../assets/TestimonialVideos/num8.mp4";

// const testimonials = [
//   {name: "Michael Doyle", video: num1, occupation: "X Influencer"},
//   {name: "Calvin Alvarez", video: num2, occupation: "Entrepreneur"},
//   {name: "Manuel Cortes", video: num3, occupation: "Dropshipping Store Owner"},
//   {name: "Agus Sitompul", video: num4, occupation: "Social Media Agency Owner"},
//   {name: "Amanda Barrett", video: num5, occupation: "X User"},
//   {name: "Luis Flores", video: num6, occupation: "Dropshipping Store Owner"},
//   {name: "Vicente Medina", video: num7, occupation: "X User"},
//   {name: "Gabriel Romero", video: num8, occupation: "Web 3 Discord Owner"},
// ];

// const VideoTestimonials = () => {
//   const [playing, setPlaying] = useState(null);

//   const togglePlay = (index) => {
//     const videoElement = document.getElementById(`video-${index}`);
//     if (playing !== null && playing !== index) {
//       // Pause the currently playing video
//       const currentlyPlaying = document.getElementById(`video-${playing}`);
//       currentlyPlaying.pause();
//     }
//     if (videoElement.paused) {
//       videoElement.play();
//       setPlaying(index);
//     } else {
//       videoElement.pause();
//       setPlaying(null);
//     }
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto py-8 px-4">
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={3}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 100,
//           depth: 200,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         loop={true}
//         slideToClickedSlide={true}
//         navigation={true}
//         modules={[EffectCoverflow, Navigation]}
//         className="mySwiper"
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide
//             key={index}
//             className="flex flex-col items-center transform transition-transform duration-300"
//           >
//             <div
//               className={`relative w-80 h-60 rounded-lg overflow-hidden shadow-lg ${
//                 playing === index ? "scale-110" : "scale-100"
//               }`}
//             >
//               <video
//                 id={`video-${index}`}
//                 src={testimonial.video}
//                 loop
//                 className="w-full h-full object-cover"
//               />
//               <button
//                 className="absolute inset-0 flex items-center justify-center text-white text-3xl rounded-full transition-opacity duration-300 hover:opacity-90"
//                 onClick={() => togglePlay(index)}
//               >
//                 {playing === index ? <RiPauseFill /> : <RiPlayFill />}
//               </button>
//             </div>
//             <div className="mt-4 text-center">
//               <h3 className="text-lg font-semibold text-gray-800">
//                 {testimonial.name}
//               </h3>
//               <p className="text-sm text-gray-600">{testimonial.occupation}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default VideoTestimonials;

// import React, {useState} from "react";
// import {Swiper, SwiperSlide} from "swiper/react";
// import {EffectCoverflow, Navigation} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import {RiPauseFill, RiPlayFill} from "react-icons/ri";

// import num1 from "../../assets/TestimonialVideos/num1.mp4";
// import num2 from "../../assets/TestimonialVideos/num2.mp4";
// import num3 from "../../assets/TestimonialVideos/num3.mp4";
// import num4 from "../../assets/TestimonialVideos/num4.mp4";
// import num5 from "../../assets/TestimonialVideos/num5.mp4";
// import num6 from "../../assets/TestimonialVideos/num6.mp4";
// import num7 from "../../assets/TestimonialVideos/num7.mp4";
// import num8 from "../../assets/TestimonialVideos/num8.mp4";

// const testimonials = [
//   {name: "Michael Doyle", video: num1, occupation: "X Influencer"},
//   {name: "Calvin Alvarez", video: num2, occupation: "Entrepreneur"},
//   {name: "Manuel Cortes", video: num3, occupation: "Dropshipping Store Owner"},
//   {name: "Agus Sitompul", video: num4, occupation: "Social Media Agency Owner"},
//   {name: "Amanda Barrett", video: num5, occupation: "X User"},
//   {name: "Luis Flores", video: num6, occupation: "Dropshipping Store Owner"},
//   {name: "Vicente Medina", video: num7, occupation: "X User"},
//   {name: "Gabriel Romero", video: num8, occupation: "Web 3 Discord Owner"},
// ];

// const VideoTestimonials = () => {
//   const [playing, setPlaying] = useState(null);

// const togglePlay = (index) => {
//   const videoElement = document.getElementById(`video-${index}`);
//   if (playing !== null && playing !== index) {
//     // Pause the currently playing video when switching slides
//     const currentlyPlaying = document.getElementById(`video-${playing}`);
//     currentlyPlaying.pause();
//   }
//   if (videoElement.paused) {
//     videoElement.play();
//     setPlaying(index);
//   } else {
//     videoElement.pause();
//     setPlaying(null);
//   }
// };

//   const togglePlay = (index) => {
//     const videoElement = document.getElementById(`video-${index}`);
//     if (playing !== null && playing !== index) {
//       // Pause the currently playing video when switching slides
//       const currentlyPlaying = document.getElementById(`video-${playing}`);
//       currentlyPlaying.pause();
//     }

//     if (videoElement.paused) {
//       videoElement.play();
//       setPlaying(index);
//     } else {
//       videoElement.pause();
//       setPlaying(null);
//     }
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto py-8 px-4 bg-purple-800 relative">
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={2}
//         spaceBetween={70}
//         loop={true}
//         loopAdditionalSlides={3} // Ensuring enough slides for smooth loop
//         slideToClickedSlide={true}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 100,
//           depth: 550,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         modules={[EffectCoverflow, Navigation]}
//         onSlideChange={() => {
//           if (playing !== null) {
//             // Pause the video when navigating to a different slide
//             const currentlyPlaying = document.getElementById(
//               `video-${playing}`
//             );
//             currentlyPlaying.pause();
//             setPlaying(null);
//           }
//         }}
//         className="mySwiper"
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide
//             key={index}
//             className="flex flex-col items-center transform transition-transform duration-300 "
//           >
//             <div
//               className={`relative w-full h-96 rounded-lg overflow-hidden  bg-yellow-300`}
//             >
//               <video
//                 id={`video-${index}`}
//                 src={testimonial.video}
//                 loop
//                 className="w-full h-full object-cover absolute  "
//               />
//             </div>
//             <button
//               className="absolute bottom-0 inset-0 flex items-center justify-center text-white text-3xl rounded-full transition-opacity duration-300 hover:opacity-90"
//               onClick={() => togglePlay(index)}
//             >
//               {playing === index ? <RiPauseFill /> : <RiPlayFill />}
//             </button>
//             <div className=" text-center mt-3">
//               <h3 className="text-lg font-semibold text-text">
//                 {testimonial.name}
//               </h3>
//               <p className="text-sm text-text">{testimonial.occupation}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//         <div className="w-36 h-full bg-red-500 absolute top-0  "></div>
//       </Swiper>
//       {/* Custom Navigation Buttons Positioned at the Bottom */}
//       <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
//         {/* Custom Previous Button */}
//         <div
//           className="swiper-button-prev bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 cursor-pointer"
//           style={{
//             zIndex: 10,
//           }}
//         ></div>
//         {/* Custom Next Button */}
//         <div
//           className="swiper-button-next bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-800 cursor-pointer"
//           style={{
//             zIndex: 10,
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default VideoTestimonials;

// import React, {useRef, useState} from "react";
// import {Swiper, SwiperSlide} from "swiper/react";
// import {EffectCoverflow, Navigation} from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/navigation";
// import {RiPauseFill, RiPlayFill} from "react-icons/ri";

// import num1 from "../../assets/TestimonialVideos/num1.mp4";
// import num2 from "../../assets/TestimonialVideos/num2.mp4";
// import num3 from "../../assets/TestimonialVideos/num3.mp4";
// import num4 from "../../assets/TestimonialVideos/num4.mp4";
// import num5 from "../../assets/TestimonialVideos/num5.mp4";
// import num6 from "../../assets/TestimonialVideos/num6.mp4";
// import num7 from "../../assets/TestimonialVideos/num7.mp4";
// import num8 from "../../assets/TestimonialVideos/num8.mp4";

// const testimonials = [
//   {name: "Michael Doyle", video: num1, occupation: "X Influencer"},
//   {name: "Calvin Alvarez", video: num2, occupation: "Entrepreneur"},
//   {name: "Manuel Cortes", video: num3, occupation: "Dropshipping Store Owner"},
//   {name: "Agus Sitompul", video: num4, occupation: "Social Media Agency Owner"},
//   {name: "Amanda Barrett", video: num5, occupation: "X User"},
//   {name: "Luis Flores", video: num6, occupation: "Dropshipping Store Owner"},
//   {name: "Vicente Medina", video: num7, occupation: "X User"},
//   {name: "Gabriel Romero", video: num8, occupation: "Web 3 Discord Owner"},
// ];

// const VideoTestimonials = () => {
//   const [playing, setPlaying] = useState(null);
//   const swiperRef = useRef(null);

//   const togglePlay = (index) => {
//     const videoElement = document.getElementById(`video-${index}`);
//     if (playing !== null && playing !== index) {
//       // Pause the currently playing video when switching slides
//       const currentlyPlaying = document.getElementById(`video-${playing}`);
//       currentlyPlaying.pause();
//     }

//     if (videoElement.paused) {
//       videoElement.play();
//       setPlaying(index);
//     } else {
//       videoElement.pause();
//       setPlaying(null);
//     }
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto py-8   relative z-10">
//       <Swiper
//         ref={swiperRef} //
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={2}
//         spaceBetween={70}
//         loop={true}
//         loopAdditionalSlides={3} // Ensuring enough slides for smooth loop
//         slideToClickedSlide={true}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 100,
//           depth: 550,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         modules={[EffectCoverflow, Navigation]}
//         onSlideChange={() => {
//           if (playing !== null) {
//             // Pause the video when navigating to a different slide
//             const currentlyPlaying = document.getElementById(
//               `video-${playing}`
//             );
//             currentlyPlaying.pause();
//             setPlaying(null);
//           }
//         }}
//         onReachEnd={() => {
//           if (swiperRef.current && swiperRef.current.swiper) {
//             // Ensures Swiper resets to the first slide properly, allowing loop functionality
//             swiperRef.current.swiper.slideTo(3); // You can adjust this if you want to navigate to a specific slide
//             swiperRef.current.swiper.update();
//           }
//         }}
//         className="mySwiper"
//       >
//         {testimonials.map((testimonial, index) => (
//           <SwiperSlide
//             key={index}
//             className="flex flex-col items-center transform transition-transform duration-300"
//           >
//             <div className={`relative w-full h-96 rounded-lg overflow-hidden `}>
//               <video
//                 id={`video-${index}`}
//                 src={testimonial.video}
//                 loop
//                 className="w-full h-full object-cover absolute"
//               />
//             </div>
//             <button
//               className="absolute bottom-0 inset-0 flex items-center justify-center text-white text-3xl rounded-full transition-opacity duration-300 hover:opacity-90"
//               onClick={() => togglePlay(index)}
//             >
//               {playing === index ? <RiPauseFill /> : <RiPlayFill />}
//             </button>
//             <div className="text-center mt-3 relative z-10">
//               <h3 className="text-lg font-semibold text-text">
//                 {testimonial.name}
//               </h3>
//               <p className="text-sm text-text">{testimonial.occupation}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons Positioned at the Bottom */}
//       <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
//         {/* Custom Previous Button */}
//         <div
//           className="swiper-button-prev  text-white p-2 rounded-full shadow-lg hover:scale-105 cursor-pointer"
//           style={{
//             zIndex: 10,
//           }}
//         ></div>
//         {/* Custom Next Button */}
//         <div
//           className="swiper-button-next  text-white p-2 rounded-full shadow-lg hover:scale-105  cursor-pointer"
//           style={{
//             zIndex: 10,
//           }}
//         ></div>
//       </div>

//       {/* Gradient Fade on Left and Right to Prevent Clicks */}
//       {/* <div className="absolute top-0 left-0  bottom-0 bg-video-price-gradient z-50 w-28 h-full pointer-events-none"></div> */}
//     </div>
//   );
// };

// export default VideoTestimonials;

import React, {useContext, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import {RiPauseFill, RiPlayFill} from "react-icons/ri";
import num1 from "../../assets/TestimonialVideos/num1.mp4";
import num2 from "../../assets/TestimonialVideos/num2.mp4";
import num4 from "../../assets/TestimonialVideos/num4.mp4";
import num3 from "../../assets/TestimonialVideos/num3.mp4";
import num5 from "../../assets/TestimonialVideos/num5.mp4";
import num6 from "../../assets/TestimonialVideos/num6.mp4";
import num7 from "../../assets/TestimonialVideos/num7.mp4";
import num8 from "../../assets/TestimonialVideos/num8.mp4";
import {ScrollContexts} from "../../store/ScrollContext";

const testimonials = [
  {name: "Michael Doyle", video: num1, occupation: "X Influencer"},
  {name: "Calvin Alvarez", video: num2, occupation: "Entrepreneur"},
  {name: "Agus Sitompul", video: num4, occupation: "Social Media Agency Owner"},
  {name: "Luis Flores", video: num6, occupation: "Dropshipping Store Owner"},
  {name: "Gabriel Romero", video: num8, occupation: "Web 3 Discord Owner"},
  {name: "Vicente Medina", video: num7, occupation: "X User"},
  {name: "Amanda Barrett", video: num5, occupation: "X User"},
  {name: "Manuel Cortes", video: num3, occupation: "Dropshipping Store Owner"},
];

const VideoTestimonials = () => {
  const [playing, setPlaying] = useState(null);
  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);
  const {testimonialsRef} = useContext(ScrollContexts);

  // const togglePlay = (index) => {
  //   const videoElement = document.getElementById(`video-${index}`);
  //   if (playing !== null && playing !== index) {
  //     // Pause the currently playing video when switching slides
  //     const currentlyPlaying = document.getElementById(`video-${playing}`);
  //     currentlyPlaying.pause();
  //   }

  //   if (videoElement.paused) {
  //     videoElement.play();
  //     setPlaying(index);
  //   } else {
  //     videoElement.pause();
  //     setPlaying(null);
  //   }
  // };

  const togglePlay = (index, swiperType) => {
    const videoId =
      swiperType === "swiper1" ? `video-${index}` : `swiper2-video-${index}`;
    const videoElement = document.getElementById(videoId);

    if (playing !== null && playing !== index) {
      // Pause the currently playing video
      const currentlyPlayingId =
        swiperType === "swiper1"
          ? `video-${playing}`
          : `swiper2-video-${playing}`;
      const currentlyPlaying = document.getElementById(currentlyPlayingId);
      currentlyPlaying.pause();
    }

    if (videoElement.paused) {
      videoElement.play();
      setPlaying(index);
    } else {
      videoElement.pause();
      setPlaying(null);
    }
  };
  const handleReachEnd = () => {
    const swiper2 = swiperRef.current.swiper;
    if (swiper2) {
      // Dynamically generate more content when the Swiper reaches the end
      swiper2.slides.push(
        ...testimonials.map(
          (testimonial, index) => `
            <div class="swiper-slide">
              <div class="relative w-full h-96 rounded-lg overflow-hidden">
                <video id="video-${index}" src="${
            testimonial.video
          }" loop class="w-full h-full object-cover absolute" />
              </div>
              <button class="absolute bottom-0 inset-0 flex items-center justify-center text-white text-3xl rounded-full transition-opacity duration-300 hover:opacity-90">
                ${playing === index ? "<RiPauseFill />" : "<RiPlayFill />"}
              </button>
              <div class="text-center mt-3 relative z-10">
                <h3 class="text-lg font-semibold text-text">${
                  testimonial.name
                }</h3>
                <p class="text-sm text-text">${testimonial.occupation}</p>
              </div>
            </div>
          `
        )
      );
      swiper2.update(); // Update Swiper to reflect the changes
    }
  };

  return (
    <div
      className="bg-bg-pr text-white p-6 lg:pb-4 overflow-hidden z-10 relative lg:px-24 mt-8 md:mt-12 lg:mt-22 lg:mb-10 lg:mt-16"
      id="Testimonials"
      ref={testimonialsRef}
    >
      <div className="text-center lg:pt-3 ">
        <p className="text-base md:text-2xl lg:text-[18px] xxxl:text-[24px] rounded-full text-text mb-2 px-3 py-1 ">
          Don't just take our word for it
        </p>
        <h1 className="text-center font-semibold text-xl md:text-[32px] lg:text-3xl xxxl:text-4xl text-text mb-6 lg:mb-0">
          Hear What Real People Have to Say
        </h1>
      </div>
      <Swiper
        ref={swiperRef} // Referencing Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={70}
        loop={true}
        loopAdditionalSlides={3} // Ensure enough slides for smooth loop
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 550,
          modifier: 1,
          slideShadows: true,
          // scale: 0.9, // Scale down the center slide
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
        onSlideChange={() => {
          if (playing !== null) {
            // Pause the video when navigating to a different slide
            const currentlyPlaying = document.getElementById(
              `video-${playing}`
            );
            currentlyPlaying.pause();
            setPlaying(null);
          }
        }}
        onReachEnd={handleReachEnd} // Handling dynamic content generation on reach end
        className="mySwiper  w-full hidden md:block  py-16 -translate-y-6"
      >
        {testimonials.map((testimonial, index) => (
          <>
            <SwiperSlide
              key={index}
              className="md:flex flex-col items-center transform transition-transform duration-300 w-full hidden "
            >
              <div
                className={`relative w-full h-[70vh] -mb-[108px] !rounded-xl overflow-hidden`}
              >
                <video
                  id={`video-${index}`}
                  src={testimonial.video}
                  loop
                  className="w-full h-full object-cover  absolute border-2 !rounded-xl rounded-b-xl"
                />
              </div>
              <div
                className={`absolute inset-x-0 top-0 h-full bg-hero_bg bg-opacity-20 flex items-center justify-center transition-opacity duration-300 !rounded-xl rounded-b-xl ${
                  playing === index ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <button
                className="absolute bottom-0  lg:pb-10 inset-0 flex items-center justify-center text-white text-3xl rounded-full transition-opacity duration-300 hover:opacity-90"
                onClick={() => togglePlay(index, "swiper1")}
              >
                {playing === index ? <RiPauseFill /> : <RiPlayFill />}
              </button>
              <div className="text-center mt-6 pb-10 xxl:pb-8 translate-y-24  relative z-10 ">
                <h3 className="text-xl xxxl:text-2xl font-bold text-text">
                  {testimonial.name}
                </h3>
                <p className="text-sm xxl:text-base text-text">
                  {testimonial.occupation}
                </p>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      <Swiper
        ref={swiperRef2}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={70}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        onSlideChange={() => {
          if (playing !== null) {
            // Pause the video when navigating to a different slide
            const currentlyPlaying = document.getElementById(
              `swiper2-video-${playing}`
            );
            currentlyPlaying.pause();
            setPlaying(null);
          }
        }}
        className="mySwiper2  w-full md:hidden block pb-7"
      >
        {testimonials.map((testimonial, index) => (
          <>
            <SwiperSlide
              key={index}
              className="flex flex-col items-center transform transition-transform duration-300 w-full md:hidden"
            >
              <div
                className={`relative w-full h-96 rounded-xl overflow-hidden`}
              >
                <video
                  id={`swiper2-video-${index}`}
                  src={testimonial.video}
                  loop
                  playsInline
                  // controls
                  className="w-full h-full object-cover absolute border-2 rounded-xl"
                />
              </div>

              <button
                className="absolute bottom-0 pb-16  lg:pb-20 inset-0 flex items-center justify-center text-white text-3xl rounded-full transition-opacity duration-300 hover:opacity-90"
                onClick={() => togglePlay(index)}
              >
                {playing === index ? <RiPauseFill /> : <RiPlayFill />}
              </button>
              <div className="text-center mt-3 relative z-10">
                <h3 className="text-xl font-bold text-text">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-text">{testimonial.occupation}</p>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons Positioned at the Bottom */}
      <div className="absolute lg:bottom-28 bottom-10 left-3 right-3 lg:left-20 lg:right-20  flex justify-between px-4">
        {/* Custom Previous Button */}
        <div
          className="swiper-button-prev text-white p-2 rounded-full shadow-lg hover:scale-105 cursor-pointer"
          style={{
            zIndex: 10,
          }}
        ></div>
        {/* Custom Next Button */}
        <div
          className="swiper-button-next text-white p-2 rounded-full shadow-lg hover:scale-105 cursor-pointer"
          style={{
            zIndex: 10,
          }}
        ></div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
