import axios from 'axios';

const visitsCsvApi = (csvFilePath = "D:/Programming/Personal/flightright/input1.csv")=> {
  axios.post('http://localhost:8080/visits', null, { params: {
    csvFilePath,
  }})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

export default visitsCsvApi