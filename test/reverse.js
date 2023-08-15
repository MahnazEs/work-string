function pigLatin(str) {

  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Not valid';
  }

  let newArray = [];
  let lastWord = str[0];


  for (let i = 1; i <= (str.length); i++) {
    newArray.push(str[i]);
  }
  lastWord = lastWord + "ay";
  newArray.push(lastWord);
  return newArray.join('');
}




let result = pigLatin("hello");
console.log("result for input: ", result);