let accessToken;

let Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    let accessToken = window.location.href.match(/access_token=([^&]*)/);
    let expirationTime = window.location.href.match(/expires_in=([^&]*)/);
  }
};

export default Spotify;