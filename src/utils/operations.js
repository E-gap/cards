import axios from "axios";

const instance = axios.create({
  baseURL: "https://647896e1362560649a2e127d.mockapi.io",
});

export const fetchAllUsers = async () => {
  try {
    const response = await instance.get("/users");
    return response;
  } catch (error) {
    return error.message;
  }
};

export const updateUser = async (tweets, followers, avatar, id, user) => {
  try {
    const response = await instance.put(`/users/${id}`, {
      user,
      tweets,
      followers,
      avatar,
    });
    return response;
  } catch (error) {
    return error.message;
  }
};

export const compareArray = (usersMocapi, usersLocal) => {
  if (usersLocal.length === 0) {
    const finalArray = usersMocapi.map((item) => {
      return { ...item, follow: false };
    });
    return finalArray;
  } else {
    const finalArray = usersMocapi.map((userMocapi) => {
      const isCoincidence = usersLocal.find(
        (userLocal) => userLocal === userMocapi.id
      );
      if (!isCoincidence) {
        return { ...userMocapi, follow: false };
      } else {
        return { ...userMocapi, follow: true };
      }
    });

    return finalArray;
  }
};

export const getFromLocalStorage = () => {
  const userslocal = localStorage.getItem("followingUsers");
  return userslocal ? JSON.parse(userslocal) : [];
};

export const addToLocalStorage = (id) => {
  const arrayLocal = localStorage.getItem("followingUsers");
  const parsedArrayLocal = arrayLocal ? JSON.parse(arrayLocal) : [];
  parsedArrayLocal.push(id);
  localStorage.setItem("followingUsers", JSON.stringify(parsedArrayLocal));
};

export const removeFromLocalStorage = (id) => {
  const arrayLocal = localStorage.getItem("followingUsers");
  const parsedArrayLocal = JSON.parse(arrayLocal);
  const updatedArrayLocal = parsedArrayLocal.filter((el) => el !== id);
  localStorage.setItem("followingUsers", JSON.stringify(updatedArrayLocal));
};
