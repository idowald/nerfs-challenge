// eslint-disable-next-line no-undef
// let myRequest = new Request("https://gist.githubusercontent.com/hurkanakbiyik/5d54addf62f2c4a59c1e9222e3dc2d08/raw/f85c3ddb9b218515b88eb8f723fc05f257bed468/nerf-herders-test-data",);
// eslint-disable-next-line no-undef
let myRequest = new Request("/nerfs");

export const getNerfs = function() {
  // eslint-disable-next-line no-undef
  return fetch(myRequest).then(function(response) {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
};
