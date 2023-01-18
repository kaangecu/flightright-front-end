import axios from 'axios';

const visitsCsvApi = (formData,apiRoute) => {
  return axios
    .post(apiRoute, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data
    })
    .catch((error) => {
      console.log(error);
    });
};

export default visitsCsvApi;
