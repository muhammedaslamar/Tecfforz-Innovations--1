//authService (logout and get current user)
const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('id');
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };
  const getCurrentId = () => {
    return JSON.parse(localStorage.getItem('id'));
  };
  const getUpdateId = () => {
    return JSON.parse(localStorage.getItem('updateid'));
  };
  export default {
    logout,
    getCurrentUser,
    getCurrentId,
    getUpdateId
  };