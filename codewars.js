// Disemvowel Trolls
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

//const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
const vowels = "aeiou"

function disemvowel(str) {
  let result = ""
  
  result = str
    .split("") // turn it into an array of characters
    .filter(character => !vowels.includes(character.toLowerCase())) // filter it to just consonants
    .join("") // turn it back into a string
  
//   // loop over each character in the string
//   for(let i = 0; i < str.length; i++) {
//     const character = str[i]
    
//     if(!vowels.includes(character.toLowerCase())) {
//       result += character
//     }
//   }
  
  return result;
}




// Converting 12 hour to 24 hour
// https://www.codewars.com/kata/59b0a6da44a4b7080300008a/train/javascript

function to24hourtime(hour, minute, period) {
    return pad(convertTo24(hour, period)) + pad(minute);
  }
  
  function convertTo24(hourIn12, period) {
    console.log(hourIn12, period)
    
  //   if(hourIn12 === 12) {
  //     if(period === "am") {
  //       return 0
  //     } else {
  //       return 12
  //     }
  //   }
    
    if(hourIn12 === 12 && period === "am") {
      return 0
    }
    
    if(hourIn12 === 12 && period === "pm") {
      return 12
    }
    
    if(period === "pm") {
      return hourIn12 + 12
    }
      
    return hourIn12
  }
  
  
  function pad(number) {
    if(number > 9) {
      return "" + number
    } else {
      return "0" + number 
    }
  }