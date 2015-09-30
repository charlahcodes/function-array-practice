// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){
    if (a > b) {
      return a;
    } else {
      return b;
    };
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
  if ((a > b) && (a > c)) {
    return a;
    } else if (b > a && c) {
    return b;
    } else {
      return c;
  };
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if ((char === "a") || (char === "e") || (char === "i") || (char === "o") || (char === "u")) {
      return true;
    } else {
      return false;
    };
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){

}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(someString){
    var stringSplit = someString.split(" ");
    var toReverse = stringSplit.reverse();
    var toJoin = toReverse.join(' ');
    return toJoin.toString();
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){

  var theAnswer = words.forEach(function(currentWord) {
    var biggest = currentWord.length;
    if (currentWord.length > biggest) {
    biggest = currentWord.length;
    };
    console.log(biggest);
  });
};


// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
function filterLongWords(words, i){
  var endResults = words.filter(function(allthewords) {
    return allthewords.length > i;
  });
  return endResults
};

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    //...
}