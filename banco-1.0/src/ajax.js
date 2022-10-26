export async function ajax(){
  const $url = (url) ? url : "https://gateway.marvel.com/v1/public/characters"
  const options = {
    "method": "POST",
    "mode": "no-cors",
    "headers": {
      "Content-type": "application/json; charset=utf-8"
    },
    "data": params
  };
  await axios($url, options)
    .then(response => {
        cbSuccess(response.data);
    })
    .catch(e => {
        cbSuccess(e);
    });
}