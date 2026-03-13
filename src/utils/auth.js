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

export const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({ token: "a-fake-token" });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 500);
  });
};

export const checkToken = (token) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: { name: "fake user", email: "fake@example.com", _id: "fake-id" },
      });
    }, 500);
  });
};
