import fs from "fs";

function registerUser(name, email, password) {
  try {
    let users = [];

    let obj = {
      name,email,password,todo: []
    };

    if (fs.existsSync("users.json")) {
      let data = JSON.parse(fs.readFileSync("users.json", "utf-8"));

      let isUser = data.some((value) => value.name === name);
      if (isUser) {
        return "User already exists";
      }

      users = data;
    }

    users.push(obj);
    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
    console.log("User registered successfully");

  } catch (error) {
    console.log(error);
  }
}

export default registerUser;