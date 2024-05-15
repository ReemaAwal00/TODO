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

//   export const deleteTask = (taskId) => {
//     return new Promise((resolve, reject) => {
//         axios.delete(`${BASE_URL}/tasks/${taskId}`)
//             .then(response => {
//                 resolve(response.data);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// };
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


  const formatDateForNepal = (date) => {
    // Get UTC time in milliseconds for the selected date
    const utcDate = Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds()
    );
  
    // Nepal Time Zone offset in milliseconds (GMT+5:45)
    const nepalOffsetMilliseconds = (5 * 60 + 45) * 60 * 1000;
  
    // Calculate local date time in milliseconds
    const localDateTime = utcDate + nepalOffsetMilliseconds;
  
    // Create a new Date object with the local date time
    const localDate = new Date(localDateTime);
  
    // Format the local date as ISO string (YYYY-MM-DDT00:00:00)
    const formattedDate = localDate.toISOString().split('T')[0] + 'T00:00:00';
  
    return formattedDate;
  };
  
  export const getTasksForTomorrow = () => {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate());
      const tomorrowDate = formatDateForNepal(tomorrow).split('T')[0]; // Format and get tomorrow's date in YYYY-MM-DD
  
      return new Promise((resolve, reject) => {
          axios.get(BASE_URL) // Assuming the endpoint fetches all tasks
              .then(res => {
                  const tasksForTomorrow = res.data.filter(task => {
                      const taskDate = task.date.split('T')[0]; // Extract date portion from task's date
                      return taskDate === tomorrowDate; // Compare task's date with tomorrow's date
                  });
                  resolve(tasksForTomorrow);
              })
              .catch(err => {
                  reject(err);
              });
      });
  };

  export const getUpcomingTask1 = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const tomorrowDate = formatDateForNepal(tomorrow).split('T')[0]; // Format and get tomorrow's date in YYYY-MM-DD

    return new Promise((resolve, reject) => {
        axios.get(BASE_URL) // Assuming the endpoint fetches all tasks
            .then(res => {
                const tasksForTomorrow = res.data.filter(task => {
                    const taskDate = task.date.split('T')[0]; // Extract date portion from task's date
                    return taskDate === tomorrowDate; // Compare task's date with tomorrow's date
                });
                resolve(tasksForTomorrow);
            })
            .catch(err => {
                reject(err);
            });
    });
};

export const getUpcomingTask2 = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 2);
  const tomorrowDate = formatDateForNepal(tomorrow).split('T')[0]; // Format and get tomorrow's date in YYYY-MM-DD

  return new Promise((resolve, reject) => {
      axios.get(BASE_URL) // Assuming the endpoint fetches all tasks
          .then(res => {
              const tasksForTomorrow = res.data.filter(task => {
                  const taskDate = task.date.split('T')[0]; // Extract date portion from task's date
                  return taskDate === tomorrowDate; // Compare task's date with tomorrow's date
              });
              resolve(tasksForTomorrow);
          })
          .catch(err => {
              reject(err);
          });
  });
};
  

  