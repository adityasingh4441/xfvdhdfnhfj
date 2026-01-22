const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err.message);
    return;
  }

  const anuj = data.length;

  fs.writeFile("output.txt", anuj.toString(), (err) => {
    if (err) {
      console.log("Error writing file:", err.message);
      return;
    }
    console.log("Program ran successfully ✅");
    console.log("Characters count:", anuj);
  });
});