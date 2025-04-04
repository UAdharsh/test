export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };
  
  export const getUserRole = () => {
    return localStorage.getItem("role") || "guest";
  };
  
  export const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.reload();
  };
  