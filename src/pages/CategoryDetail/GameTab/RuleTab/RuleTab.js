import React from "react";
import { GameTabs } from "../../../../assets/data/gameTab";

const GameTab = () => {
  return (
    <div className="gameTab">
      {GameTabs.map((tab, i) => (
        <section className="gameVideo" key={i}>
          <h1 className="videoTit">{tab.videoTit}</h1>
          {tab.videoCon}
        </section>
      ))}
    </div>
  );
};

export default GameTab;
