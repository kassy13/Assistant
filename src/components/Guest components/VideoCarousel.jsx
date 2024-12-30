import React, {useRef, useEffect, useState, useContext} from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import micheal from "../../assets/TestimonialVideos/1 (Edited).mp4";
import calvin from "../../assets/TestimonialVideos/2 (Edited).mp4";
import manuel from "../../assets/TestimonialVideos/3 (Edited).mp4";
import agus from "../../assets/TestimonialVideos/4 (Edited).mp4";
import amanda from "../../assets/TestimonialVideos/5 (Edited).mp4";
import vincente from "../../assets/TestimonialVideos/6 (Edited).mp4";
import luis from "../../assets/TestimonialVideos/7 (Edited).mp4";
import gabriel from "../../assets/TestimonialVideos/8 (Edited).mp4";
import {RiPauseFill, RiPlayFill} from "react-icons/ri";
import {ScrollContexts} from "../../store/ScrollContext";

const testimonials = [
  {name: "Manuel Cortes", video: manuel, occupation: "Store Owner"},
  {name: "Luis Flores", video: luis, occupation: "Dropshipping Store Owner"},
  {name: "Amanda McKoy", video: amanda, occupation: "X User"},
  {name: "Michael Snider", video: micheal, occupation: "Ecommerce Owner"},
  {name: "Calvin Alvarez", video: calvin, occupation: "X User"},
  {name: "Agus Sitompul", video: agus, occupation: "Agency Owner"},
  {name: "Vicente Medina", video: vincente, occupation: "X User"},
  {name: "Gabriel Romero", video: gabriel, occupation: "Discord Owner"},
];

const VideoCarousel = () => {
  const {testimonialsRef} = useContext(ScrollContexts);
  const splideRef = useRef();
  const videoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide

  const handleVideoClick = (index) => {
    // Move carousel to focus the clicked video
    splideRef.current.go(index);

    // Reset all videos
    videoRefs.current.forEach((video, i) => {
      if (video) {
        video.pause();
        video.currentTime = 0; // Reset video to start
      }
    });

    // Play the clicked video
    if (videoRefs.current[index]) {
      videoRefs.current[index].play();
    }
  };

  useEffect(() => {
    const splide = splideRef.current.splide;

    splide.on("move", (newIndex) => {
      setActiveIndex(newIndex);

      // Pause all videos and reset icons
      videoRefs.current.forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    });
    console.log("tesroRef (from ScrollContexts):", testimonialsRef?.current);
    console.log("splideRef:", splideRef?.current);
    console.log("videoRefs array:", videoRefs.current);

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className="bg-bg-pr text-white p-6  overflow-hidden z-10 relative lg:px-24 lg:mt-22">
      <div className="text-center lg:pt-3 ">
        <p className="text-base lg:text-[18px] rounded-full text-text mb-2 px-3 py-1 ">
          Don't just take our word for it
        </p>
        <h1 className="text-center font-semibold text-xl lg:text-3xl text-text">
          Hear What Real People Have to Say
        </h1>
      </div>

      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          perPage: 5,
          focus: "center",
          gap: "10px",
          pagination: false,
          arrows: false, // Remove next/prev controls
          autoplay: false,
          speed: 600,
          breakpoints: {
            768: {
              perPage: 1,
            },
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SplideSlide key={index} className="relative " ref={testimonialsRef}>
            <div
              className={`relative transition-transform duration-500 mt-36 ${
                activeIndex === index
                  ? "scale-125 z-50 h-[400px] "
                  : "scale-90 opacity-80"
              }`}
              onClick={() => handleVideoClick(index)}
            >
              {/* Video Card */}
              <div className="relative group ">
                <video
                  ref={(el) => (videoRefs.current[index] = el)} // Attach video refs dynamically
                  className="w-full h-[300px] object-cover border rounded-lg shadow-lg"
                  loop
                  controls={false} // Remove native controls
                >
                  <source src={testimonial.video} />
                </video>

                {/* Overlay */}
                {activeIndex !== index && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
                )}

                {/* Play/Pause Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const video = videoRefs.current[index];
                      if (video.paused) {
                        handleVideoClick(index); // Focus on video
                        video.play();
                      } else {
                        video.pause();
                      }
                    }}
                    className="bg-black bg-opacity-50 text-white rounded-full p-3"
                  >
                    {videoRefs.current[index]?.paused ? (
                      <RiPlayFill className="h-6 w-6 text-white" />
                    ) : (
                      <RiPauseFill className="h-6 w-6 text-white" />
                    )}
                  </button>
                </div>
              </div>

              {/* Card Details */}
              <div className="text-center mt-4">
                <h2 className="text-lg font-bold">{testimonial.name}</h2>
                <p className="text-sm text-gray-400">
                  {testimonial.occupation}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default VideoCarousel;
