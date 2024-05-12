import { GameTabs } from "../../../../assets/data/gameTab";

const RuleTab = () => {
  return (
    <div className="gameTab">
      {GameTabs.map((tab, i) => (
        <section className="gameVideo" key={i}>
          <h1 className="videoTit">{tab.videoTit}</h1>
          {tab.videoCon}
        </section>
      ))}
      <article>
        <h1>유사한 진행방식의 게임</h1>
        <div className="wrapper">
          <div>
            <img src="https://via.placeholder.com/140x272" alt="샘플이미지" />
            <img src="https://via.placeholder.com/140x272" alt="샘플이미지" />
            <img src="https://via.placeholder.com/140x272" alt="샘플이미지" />
            <img src="https://via.placeholder.com/140x272" alt="샘플이미지" />
            <img src="https://via.placeholder.com/140x272" alt="샘플이미지" />
            <img src="https://via.placeholder.com/140x272" alt="샘플이미지" />
            <img src="https://via.placeholder.com/140x272" alt="샘플이미지" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default RuleTab;
