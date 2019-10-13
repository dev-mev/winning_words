var fs = require('fs');

fs.readFile("./wordList.txt", "utf8", function(err, data) {
  if (err) throw err;
  let words = data.split("\r\n");
  let dictionary = new Array();

  for (let i = 0; i < words.length; i++) {
    dictionary[i] = words[i];
  }

  fs.writeFile("./wordDictionary.json", JSON.stringify(dictionary), (err) => {
      if (err) throw err;
  })
   //console.log(dictionary);
})


