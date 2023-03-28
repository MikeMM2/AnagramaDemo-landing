export const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
  let result = localStorage.getItem('user');
  if(result === "undefined"){
    result = null;
  }
  const user = result ? JSON.parse(result) : null;
  return user;
};
