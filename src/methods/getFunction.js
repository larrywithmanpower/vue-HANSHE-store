import axios from 'axios';

export default (url) => {
  let resData = null;
  axios.get(url).then((res) => {
    if (res.data.success) {
      resData = res.data;
      console.log(resData);
    } else {
      // eslint-disable-next-line no-alert
      alert(res.data.message);
    }
  });
  return resData;
};
