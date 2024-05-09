import React from "react";

const GameTab = () => {
  const GameTab = [
    {
      videoTit: "보드게임 설명",
      videoCon: (
        <img src="https://via.placeholder.com/355x158" alt="샘플이미지" />
      ),
    },
    {
      videoTit: "보드게임 구성",
      videoCon: (
        <img src="https://via.placeholder.com/335x158" alt="샘플이미지" />
      ),
    },
    {
      videoTit: "보드게임 규칙",
      videoCon: (
        <img src="https://via.placeholder.com/335x158" alt="샘플이미지" />
      ),
    },
  ];

  return (
    <div className="gameTab">
      {GameTab.map((tab, i) => (
        <section className="gameVideo" key={i}>
          <h1 className="videoTit">{tab.videoTit}</h1>
          {tab.videoCon}
        </section>
      ))}
    </div>
  );
};

export default GameTab;
