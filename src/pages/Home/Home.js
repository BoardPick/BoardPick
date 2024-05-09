import React from "react";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <div>
      <Button text={"Button"} size={"s52"} type={"brand"}></Button>
      <Button text={"Button"} size={"s48"} type={"brandSub"}></Button>
      <Button text={"Button"} size={"s44"} type={"disabled"}></Button>
      <Button text={"Button"} size={"s36"} type={"txt"}></Button>
      <Button text={"Button"} size={"s24"}></Button>
    </div>
  );
};

export default Home;
