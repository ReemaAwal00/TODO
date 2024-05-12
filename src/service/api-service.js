import axios from "axios";

const BASE_URL = 'http://localhost:4000/users';

export const addUser = (data) => {
    return new Promise((resolve, reject) => {
      axios.post(BASE_URL, data)
          .then(() => {
            resolve(true);
          }).catch((err) => {
            reject(err);
          })
    });
  }

  export const displayAllTasks = () => {
    return new Promise((resolve, reject) => {
      axios.get(BASE_URL).then((res) => {
        resolve(res.data);
      }).catch((err) => {
        reject(err);
      });
    });
  }
  
  