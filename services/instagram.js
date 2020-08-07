import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const Instagram = require('instagram-web-api');
import { getInstagramUsername, getInstagramPassword } from './environment.js';

const fetchPhotosForUser = async (username) => {
  const instagramUsername = getInstagramUsername();
  const instagramPassword = getInstagramPassword();
  const instagramClient = new Instagram({ username: instagramUsername, password: instagramPassword });
  await instagramClient.login();
  const photos = await instagramClient.getPhotosByUsername({ username: username });
  console.log(JSON.stringify(photos));
}

const uploadPhoto = async (photoPathOrURL) => {
  const instagramUsername = getInstagramUsername();
  const instagramPassword = getInstagramPassword();
  const instagramClient = new Instagram({ username: instagramUsername, password: instagramPassword });
  await instagramClient.login();
  const { media } = await instagramClient.uploadPhoto({ photo: photoPathOrURL, caption: 'testing', post: 'feed' })
  console.log(`https://www.instagram.com/p/${media.code}/`)
}

export { fetchPhotosForUser, uploadPhoto }