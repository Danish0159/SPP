import { getUserFromLocalStorage } from './localStorage';

export default function authHeader() {
  const user = getUserFromLocalStorage();

  if (user && user.token) {
    // for Node.js Express back-end
    return { "x-access-token": user.token };
  } else {
    return {};
  }
}