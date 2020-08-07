import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const Instagram = require('instagram-web-api');
import { getInstagramUsername, getInstagramPassword } from './environment.js';

let fetchProfile = async () => {
  let instagramUsername = getInstagramUsername();
  let instagramPassword = getInstagramPassword();
  const instagramClient = new Instagram({ username: instagramUsername, password: instagramPassword });
  await instagramClient.login();
  const profile = await instagramClient.getProfile();
  console.log(profile);
}


export { fetchProfile }