import { jwtDecode } from 'jwt-decode';

export const checkToken = () => {
  const token = localStorage.getItem('token');
  try {
    const decoded = jwtDecode(token ? token : '');
    const timeinS = Date.now() / 1000;
    return decoded && decoded.exp && decoded.exp > timeinS;
  } catch (e) {
    return false;
  }
};

export const getRole = () => {
  const token = localStorage.getItem('token');
  try {
    const decoded = jwtDecode(token ? token : '');
    return decoded.role;
  } catch (e) {
    return null;
  }
};
