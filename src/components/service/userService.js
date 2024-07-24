export const getDataUser = (user) => {
  user.expiresInMins = 30;
  return fetch("https://proyecto-node-vercel.onrender.com/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());
};


export const getDataUserForAuth = async (token) => {
    try {
      const response = await fetch("https://proyecto-node-vercel.onrender.com/user/isLogin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return await response.json();
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };


export const registerUser = (user) => {
  return fetch("https://proyecto-node-vercel.onrender.com/user/register", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

