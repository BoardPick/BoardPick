import axios from "axios";

async function getData() {
  const url = "http://ec2-13-124-98-35.ap-northeast-2.compute.amazonaws.com";
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}
console.log(getData());

// export const getBoardGames = async () => {
//   try {
//     const { response } = await url.get("");
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };
