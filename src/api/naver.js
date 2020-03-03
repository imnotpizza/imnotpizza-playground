import base from "./base";

export const fetch_movielist = query => {
  return base.get('movie')
    .then(response => {
      return response;
    })
    .catch(err => {
      console.log(err);
    });
};
