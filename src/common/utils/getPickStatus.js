export const getPickStatus = (id) => {
  const pickId = JSON.parse(localStorage.getItem("pick")) || [];
  const isPicked = pickId.includes(id);
  return { isPicked, pickId };
};
