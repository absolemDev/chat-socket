const TOKEN_KEY = "jwt-token";
const EXPIRES_KEY = "jwt-expires";
const USERLOGI_KEY = "user-login";

export function setTokens(accessToken, userLogin, expiresIn = 180000) {
  const expiresDate = new Date().getTime() + expiresIn;
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(USERLOGI_KEY, userLogin);
  localStorage.setItem(EXPIRES_KEY, expiresDate);
}
export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function removeAuthData() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USERLOGI_KEY);
  localStorage.removeItem(EXPIRES_KEY);
}
export function getTokenExpiresDate() {
  return localStorage.getItem(EXPIRES_KEY);
}
export function getUserLogin() {
  return localStorage.getItem(USERLOGI_KEY);
}

const localStorageService = {
  setTokens,
  getAccessToken,
  getTokenExpiresDate,
  getUserLogin,
  removeAuthData,
};
export default localStorageService;
