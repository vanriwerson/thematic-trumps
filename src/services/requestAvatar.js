// instalar o CryptoJS: https://github.com/brix/crypto-js
import md5 from 'crypto-js/md5';

export const fetchAvatar = (email) => {
  const hashFromEmail = md5(email).toString();
  const IMAGE_SRC_URL = `https://www.gravatar.com/avatar/${hashFromEmail}`;
  return IMAGE_SRC_URL;
};
