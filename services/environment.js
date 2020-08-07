const getInstagramUsername = () => {
  return process.env.INSTAGRAM_USERNAME;
}

const getInstagramPassword = () => {
  return process.env.INSTAGRAM_PASSWORD;
}

export { getInstagramUsername, getInstagramPassword }