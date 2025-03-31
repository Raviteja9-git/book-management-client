// Save JWT token to localStorage
export const setToken = (token: string): void => {
    localStorage.setItem('token', token);
  };
  
  // Retrieve JWT token from localStorage
  export const getToken = (): string | null => {
    return localStorage.getItem('token');
  };
  
  // Remove token from localStorage (e.g., on logout)
  export const removeToken = (): void => {
    localStorage.removeItem('token');
  };
  