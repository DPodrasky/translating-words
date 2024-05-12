/*
If words are less than 3 characters long, they will be returned as-is.
if words end in a vowel, they become the same word repeated twice as one word.
if words end in a consonant, this word is translated as the entire word plus
the last vowel of the word and every character thereafter in that word added
to the back of the word (ex: chart = chartart).

This code runs this translation on every word of the sentence and returns
a sentence consisting of words that have been changed according to the
above rules
*/

let isVowel = function(char) {
    let vowels = "aeiou";
     let check = false;

     vowels.split("").forEach((el) => {
       if (char === el) {
        check = true;
       }
     });

     return check;
   }


   let translateWord = function(word) {
       // Your code here
     switch (true) {
       case word.length < 3 : return word;
         break;
       case isVowel(word[word.length -1]) : return word + word;
         break;
       default:
         for (let i = word.length -1; i > 0; i--) {
          if (isVowel(word[i])) {
           return word + word.slice(i);
          }

         } // <-- for
     } // <-- switch
   }; // <-- () =>


   let repeatingTranslate = function(sentence) {
       // Your code here
     sentence = sentence.split(" ").map((word) => {
       return translateWord(word);
     });

     return sentence.join(" ");
   };


    //tests
console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
