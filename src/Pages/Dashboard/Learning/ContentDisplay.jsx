import React, { useState } from "react";
import { tutorialData } from "./LearningData/TutorialData";
import Player from "./Player";
import LearningDisplay from "./LearningDisplay";
import { useDetailsStore } from "../../../AuthStore/GlobalStates";
import BlogDisplay from "./BlogDisplay";
import { blogData } from "./LearningData/BlogData";

const ContentDisplay = () => {
  const { activeLearningPage } = useDetailsStore();
  const [playing, setPlaying] = useState(0);

  const latest = tutorialData.filter((data) => data.state === "latest");
  const trending = tutorialData.filter((data) => data.state === "trending");
  //blog data
  const latestBlog = blogData.filter((data) => data.state === "latest");
  const trendingBlog = blogData.filter((data) => data.state === "trending");

  console.log({ latest });

  return (
    <div className="max-w-[1250px] mx-auto px-[10px] md:px-[60px]">
      <Player />
      {/* tutorials */}
      {activeLearningPage === 0 && (
        <div>
          <LearningDisplay
            type={"basicTutorial"}
            data={latest}
            title={"Basic Tutorial"}
            header={"Understand the fundamentals of NetworkX"}
          />
          <LearningDisplay
            type={"advancedTutorial"}
            data={trending}
            title={"Advanced Tutorial"}
            header={"Maximize your account's potential"}
          />
        </div>
      )}
      {/* Growth Guide */}
      {activeLearningPage === 1 && (
        <div>
          <LearningDisplay
            type={"recentlyAdded"}
            data={latest}
            title={"Recently Added"}
            header={"See our most recent videos"}
          />
          <LearningDisplay
            type={"Trending"}
            data={trending}
            title={"Trending"}
            header={"See what others are watching"}
          />
        </div>
      )}

      {/* Blog */}
      {activeLearningPage === 2 && (
        <div>
          <BlogDisplay
             type={"recentlyAdded"}
            data={latestBlog}
            title={"Recently Added"}
            header={"See our most recent articles"}
          />
          <BlogDisplay
            type={"Trending"}
            data={trendingBlog}
            title={"Trending"}
            header={"See what others are reading"}
          />
        </div>
      )}
    </div>
  );
};

export default ContentDisplay;

{
  /* <div className="relative w-full h-full bg-[#091324] border border-dim p-2 mt-2 rounded-lg overflow-hidden lt:max-h-[480px]">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <ReactPlayer
              url={videos[playing].youtube}
              playing={false}
              width="100%"
              height="100%"
            />
          </div>
        </div> */
}
