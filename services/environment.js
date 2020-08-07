let getInstagramUsername = () => {
  return process.env.INSTAGRAM_USERNAME;
}

let getInstagramPassword = () => {
  return process.env.INSTAGRAM_PASSWORD;
}

export { getInstagramUsername, getInstagramPassword }