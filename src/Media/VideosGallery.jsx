import React, { useEffect, useRef, useState } from "react";
import video1 from "../assets/Video 1.png";
import video2 from "../assets/Video 2.png";
import videoSrc1 from "../assets/videos/11c44c64-cdee-4c93-997f-1b2f5c9c276e.mp4";
import videoSrc2 from "../assets/videos/c2e3009d-0700-4813-bbbc-e142b67fea0d.mp4";

const videoCardClassName =
  "w-full h-[604px] object-cover max-[1000px]:h-[300px] max-[768px]:h-[240px] max-[480px]:h-[180px]";

const videos = [
  { thumbnail: video1, src: videoSrc1, alt: "Video 1" },
  { thumbnail: video2, src: videoSrc2, alt: "Video 2" },
];

const VideosGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeVideo) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeVideo]);

  const handlePlay = (index) => {
    setActiveVideo(index);
  };

  return (
    <section className="bg-[#F6F6F6] py-8 max-[480px]:py-6">
      <div className="max-w-[1440px] mx-auto w-[90%] flex flex-col gap-3 max-[600px]:w-[92%]">
        <p className="font-bold text-[29.19px] leading-[38.92px] tracking-[0.16em] text-black uppercase max-[1000px]:text-[24px] max-[600px]:text-[18px] max-[480px]:text-[14px]">
          Videos Gallery
        </p>
        <div className="flex flex-col gap-[34px] max-[480px]:gap-6">
          {videos.map(({ thumbnail, src, alt }, index) => (
            <div
              key={alt}
              className="relative w-full rounded-[8px] overflow-hidden"
            >
              {activeVideo === index ? (
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={src}
                  controls
                  playsInline
                  className={videoCardClassName}
                  onEnded={() => setActiveVideo(null)}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => handlePlay(index)}
                  className="block w-full cursor-pointer"
                  aria-label={`Play ${alt}`}
                >
                  <img
                    src={thumbnail}
                    alt={alt}
                    className={videoCardClassName}
                  />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosGallery;
