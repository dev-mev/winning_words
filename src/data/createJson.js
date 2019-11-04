const fs = require("fs");

fs.readFile("./wordList.txt", "utf8", function (err, data) {
  if (err) throw err;
  const words = data.split("\r\n");
  const dictionary = new Array();

  for (let i = 0; i < words.length; i++) {
    dictionary[i] = words[i];
  }

  fs.writeFile("./wordDictionary.json", JSON.stringify(dictionary), (err) => {
    if (err) throw err;
  });
});
