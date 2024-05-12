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

  export const TodayTasks = () => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date (YYYY-MM-DD)

    return new Promise((resolve, reject) => {
        axios.get(BASE_URL) // Assuming the endpoint fetches all tasks
            .then(res => {
                const tasksForToday = res.data.filter(task => {
                    const taskDate = task.date.split('T')[0]; // Extract date portion from task's date
                    return taskDate === today; // Compare task's date with today's date
                });
                resolve(tasksForToday);
            })
            .catch(err => {
                reject(err);
            });
    });
  }


  export const deleteTask = (userId) => {
    return new Promise((resolve, reject) => {
      axios.delete(`${BASE_URL}/${userId}`)
          .then(() => {
            resolve(true);
          }).catch((err) => {
            reject(err);
          })
    });
  }

  export const getTaskById = (taskId) => {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}/${taskId}`)
          .then((res) => {
            resolve(res.data);
          }).catch((err) => {
            reject(err);
          })
    });
  }
  
  export const updateTask = (userId, data) => {
    return new Promise((resolve, reject) => {
      axios.put(`${BASE_URL}/${userId}`, data)
          .then(() => {
            resolve(true);
          }).catch((err) => {
            reject(err);
          })
    });
  }

  export const searchByTaskPriority = (priority) => {
    return new Promise((resolve, reject) => {
      axios.get(`${BASE_URL}?priority=${priority}`)
          .then((res) => {
            resolve(res.data);
          }).catch((err) => {
            reject(err);
          })
    });
  }
  