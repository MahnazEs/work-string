const nameInverter = function (name) {
  if (name === '') {
    return '';
  }

  if (name === undefined) {
    return "Error";
  }

  const arr = name.split(' ');
  const honorifics = ['Mr.', 'Mrs.', 'Ms.', 'Dr.'];
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let honorific of honorifics) {
      if (honorific === arr[i]) {
        start = i + 1;
        break; 
      }
    }
  }

  let results = [];

  for (let i = start; i < arr.length; i++) {

    if (arr[i] !== '' && !results.length) { //can make this better
      results.push(arr[i]);
    } else if (arr[i] !== '') {
      results.push(arr[i] + ',');
      results.reverse();
    }
  }
  console.log(results);

  if (start && results.length) {
    return arr[start - 1] + ' ' + results.join(' ');
  } else {
    return results.join(' ');
  }
}

console.log("jj", nameInverter("name"))


module.exports = nameInverter;

***********************************************************************************************************************************************************
const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function () {



  it('should return an empty string when passed an empty string', function () {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('should return a single name when passed a single name', function () {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return a single name when passed a single name with extra spaces', function () {
    const inputName = "name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return a last-name, first-name when passed a first and last-name', function () {
    const inputName = "first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('Stretch: return a last-name, first-name when passed a first and last-name with extra spaces around the names (We may want to use regular expressions to detect the whitespace)', function () {
    const inputName = " first last";
    const expectedOutput = "last, first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('return an empty string when passed a single honorific', function () {
    const inputName = "Dr. ";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });


  it('return honorific first-name when passed honorific first-name', function () {
    const inputName = "Dr. first";
    const expectedOutput = "Dr. first";
    assert.equal(nameInverter(inputName), expectedOutput);
  });





  it('return a honorific last-name, first-name when passed honorific first-name last-name', function () {
    const inputName = "Dr. first-name last-name";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });



  it('return a honorific last-name, first-name when passed honorific first-name last-name with extra spaces around the words', function () {
    const inputName = " Dr. first-name last-name ";
    const expectedOutput = "Dr. last-name, first-name";
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it('throw an error when name is undefined', function () {
    const inputName = undefined;
    const expectedOutput = "Error";
    assert.equal(nameInverter(inputName), expectedOutput);
  });


});