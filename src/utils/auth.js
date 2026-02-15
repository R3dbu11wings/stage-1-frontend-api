export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({ email, username: email.split("@")[0] });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 500);
  });
};

export const register = ({ email, password, username }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password && username) {
        resolve({ email, username });
      } else {
        reject(new Error("All fields are required"));
      }
    }, 500);
  });
};
