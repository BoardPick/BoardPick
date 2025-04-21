import React from "react";

const GameVideo = ({ data }) => {
  const GameTabs = [
    {
      videoTit: "보드게임 규칙",
      videoCon: `${data?.rule}`,
    },
    {
      videoTit: "보드게임 관련영상",
      videoCon: `${data?.extraVideo}`,
    },
  ];

  return (
    <>
      {GameTabs.map((tab, i) => (
        <section className="gameVideo" key={i}>
          <h1 className="videoTit">{tab.videoTit}</h1>
          <div className="videoWrap">
            <iframe
              src={tab.videoCon}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      ))}
    </>
  );
};

export default GameVideo;
