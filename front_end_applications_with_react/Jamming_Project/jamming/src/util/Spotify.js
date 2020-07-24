let clientId = 'ddada98629bc43bca19a592bf9b9f683';
let redirectUri = 'http://localhost:3000/';
let accessToken;

let Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    let expirationTimeMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessToken && expirationTime) {
      accessToken = accessTokenMatch[1];
      let expiresIn = Number(expirationTimeMatch[1]);
      // Clear accessToken
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
    }
    return accessToken;
  }
};

export default Spotify;