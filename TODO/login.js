import fs from "fs";

function loginUser(name, email, password) {
  try {
    if (fs.existsSync("todo.json")) {
      let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));

      let isUser = data.find(
        (value) => value.name === name && value.password === password
      );

      if (isUser) {
        return isUser;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export default loginUser;