import React from "react";
import BlogThumbnail from "../../../assets/images/BlogThumbnail.png";
import { BiSolidAlarm } from "react-icons/bi";
import { HiFire } from "react-icons/hi";

const BlogDisplay = ({ data, title, header, type }) => {
  return (
    <div>
      <div className="bg-[#010C1F] rounded-md text-white mt-6 p-4">
        <h2 className="font-bold flex items-center">
          {title}
          {type === 'recentlyAdded' && <BiSolidAlarm className="ml-1 text-[#F8BD00]" />}
         {type === 'Trending' && <HiFire  className="ml-1 text-[#F8BD00]" />}
        </h2>
        <p className="text-[#A0AEC0]">{header}</p>
        <div className="flex flex-wrap justify-between">
          {data.slice(0, 8).map((post) => (
            <div className="w-full sm:w-[calc(50%-6px)] rounded-lg p-3 my-3 bg-[#091324] max-w-xl:w-[calc(25%-8px)] md:w-[33%]">
              <img
                src={BlogThumbnail}
                alt="post thumbnail"
                className="rounded-md max-h-[140px] w-full"
              />
              <div className="text-white my-2 flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <img src={post.authorImage} className="rounded-full mr-2 h-[28px] w-[28px] object-[top_center] object-cover border-white border-[2px]" alt={`${post.authorName}'s image`}/>
                    <h3 className="font-bold text-xs">
                      {post.title.slice(0, 30)}
                      {post.title.length > 30 && "..."}
                    </h3>
                  </div>
                  <p className="text-[10px] text-[#C4C4C4] font-light">
                    <span className="font-semibold">Author:</span>{" "}
                    {post.authorName}
                  </p>
                  <p className="text-[10px] text-[#C4C4C4] font-light">
                    <span className="font-semibold">Read Time:</span>{" "}
                    {post.readTime}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDisplay;
