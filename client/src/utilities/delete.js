export const deleteData = (url) => {
  fetch(url, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
