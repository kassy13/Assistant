import React, { useEffect, useRef, useState } from "react";
import micheal from "../assets/TestimonialVideos/1 (Edited).mp4";
import calvin from "../assets/TestimonialVideos/2 (Edited).mp4";
import manuel from "../assets/TestimonialVideos/3 (Edited).mp4";
import agus from "../assets/TestimonialVideos/4 (Edited).mp4";
import amanda from "../assets/TestimonialVideos/5 (Edited).mp4";
import vincente from "../assets/TestimonialVideos/6 (Edited).mp4";
import luis from "../assets/TestimonialVideos/7 (Edited).mp4";
import gabriel from "../assets/TestimonialVideos/8 (Edited).mp4";
import { FaPause, FaPlay } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const initialItems = [
  {
    name: "Luis Flores",
    video: luis,
    occupation: "Dropshipping Store Owner",
  },
  {
    name: "Amanda McKoy",
    video: amanda,
    occupation: "X User",
  },
  {
    name: "Manuel Cortes",
    video: manuel,
    occupation: "Dropshipping Store Owner",
  },
  {
    name: "Michael Snider",
    video: micheal,
    occupation: "Fitness Ecommerce Store Owner",
  },
  {
    name: "Calvin Alvarez",
    video: calvin,
    occupation: "X User",
  },
  {
    name: "Agus Sitompul",
    video: agus,
    occupation: "Social Media Agency Owner",
  },
  {
    name: "Vicente Medina",
    video: vincente,
    occupation: "X User",
  },
  
  {
    name: "Gabriel Romero",
    video: gabriel,
    occupation: "Web 3 Discord Owner",
  },
  {
    name: "Michael Snider",
    video: micheal,
    occupation: "Fitness Ecommerce Store Owner",
  }
];

const Testimonials = () => {
  const [items, setItems] = useState(initialItems);
  const [playing, setPlaying] = useState(null);
  const [showCont, setShowCont] = useState(null);
  const carouselRef = useRef(null);

  const handleItemClick = (index) => {
      const display = showCont === null ? index : null
      setShowCont(display)
  };

  const [itemWidth, setItemWidth] = useState(0);

  const handleItemMove = (direction) => {
    if (itemWidth === 0) return;

    const container = carouselRef.current;
    const items = Array.from(container.children);

    items.forEach((item) => {
      item.style.transition = "transform 0.1s ease";
      if (direction === "left") {
        item.style.transform = `translateX(-${itemWidth}px)`;
      } else if (direction === "right") {
        item.style.transform = `translateX(${itemWidth}px)`;
      }
    });

    const handleTransitionEnd = () => {
      if (direction === "left") {
        const firstItem = container.children[0];
        container.appendChild(firstItem);
      } else if (direction === "right") {
        const lastItem = container.children[container.children.length - 1];
        container.insertBefore(lastItem, container.firstChild);
      }

      items.forEach((item) => {
        item.style.transition = "none";
        item.style.transform = "translateX(0)";
      });

      container.offsetHeight;

      items.forEach((item) => {
        item.style.transition = "transform 0.3s ease";
      });

      container.removeEventListener("transitionend", handleTransitionEnd);
    };
    container.addEventListener("transitionend", handleTransitionEnd);
  };

  const videoRefs = useRef([]);

  const handleVideoClick = (index) => {
    if (playing === index) {
      videoRefs.current[index]?.pause();
      setPlaying(null);
    } else {
      setPlaying(index);
    }
  };

  useEffect(() => {
    const container = carouselRef.current;
    if (container && container.children.length > 0) {
      const width = container.children[0].offsetWidth;
      setItemWidth(width);
    }
  }, [items]);

  useEffect(() => {
    if (videoRefs.current) {
      videoRefs.current.forEach((video, index) => {
        if (video) {
          if (playing === index) {
            video.play();
          } else {
            video.pause();
          }
        }
      });
    }
  }, [playing]);

  const card =
    "border-[2px] relative rounded-3xl min-w-[250px] h-[330px] stop-select overflow-hidden m-2 my-4 bg-[#00000036] flex flex-col justify-center items-center";

  return (
    <div className="container text-text flex flex-col overflow-hidden items-center rounded-[20px] p-8 section-border">
      <div className="text-xs rounded-full bg-secondary mb-1 px-5 py-1">
        Testimonials
      </div>
      <div className="text-sm px-5 py-2">Don't Take Our Word For It</div>
      <h1 className="font-medium text-2xl leading-snug text-center">
        Hear What Our Clients Think
      </h1>
      <div className="flex flex-col h-full">
        <div
          className="flex overflow-hidden justify-center my-3 items-center max-w-[1000px] cursor-pointer transform ease-in"
          ref={carouselRef}
        >
          {items.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(index)}
              className={`carousel-item testimonial ${card}`}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="w-full h-full object-cover"
              >
                <source src={testimonial.video} />
              </video>
              {showCont !== index && (
                <div className="text-white h-full w-full flex flex-col items-center absolute top-0 left-0 p-4">
                  <div
                    onClick={() => handleVideoClick(index)}
                    className="text-white bg-black bg-opacity-40 p-2 rounded-full absolute top-[50%] translate-y-[-50%] m-auto cursor-pointer hover:bg-opacity-55"
                  >
                   {playing === index ? <FaPause /> :<FaPlay />}
                  </div>
                  <div className="mt-auto mr-auto">
                    <h2 className="font-bold leading-3 drop-shadow-md text-md">
                      {testimonial.name}
                    </h2>
                    <p className="text-xs font-light text-nowrap drop-shadow-md my-2">
                      {testimonial.occupation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-[#253860] text-white rounded-full p-2 cursor-pointer hover:bg-opacity-55">
            <HiArrowLeft
             onClick={() => handleItemMove("right")}
              className="text-2xl unselectable"
            />
          </div>
          <h1 className="px-4 font-semibold text-2xl unselectable">
            See more videos
          </h1>
          <div
            onClick={() => handleItemMove("left")}
            className="bg-[#253860] text-white rounded-full p-2 cursor-pointer hover:bg-opacity-55"
          >
            <HiArrowRight className="text-2xl unselectable" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
