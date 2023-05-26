
// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

const VOWELS = "AEIOUaeiou"

function disemvowel(str) {
    // Make a new string
    //let results = ""

    // Look at the first letter in the original string
    // Go to the next letter in the original string and repeat
    //   for(let i = 0; i < str.length; i++) {
    //     // If it's not a vowel, add it to the new string
    //     if(!VOWELS.includes(str[i])) {
    //       results += str[i]
    //     }
    //   }

    //   for(const letter of str) {
    //     if(!VOWELS.includes(letter)) {
    //       results += letter
    //     }
    //   }

    const results = str.split("").filter(letter => !VOWELS.includes(letter)).join("")


    // Return the new string
    return results;
}




// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript

function pillars(numPill, dist, width) {
    if (numPill === 1) {
        return 0
    }
    return (width * (numPill - 2)) + (dist * 100 * (numPill - 1))
}

//width * (numPill - 2) + dist * (numPill - 1)


// numPill = 3
// dist = 4
// width = 2
// return 10 = 2 + 4 + 4
// [  ]    [  ]    [  ]


// numPill = 2
// dist = 2
// width = 4
// return 2 = + 2
// [    ]  [    ]


// numPill = 5
// dist = 1
// width = 2
// return 10 = 2 + 2 + 2 + 1 + 1 + 1 + 1
// [  ] [  ] [  ] [  ] [  ]





// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

function findAdmin(list, lang) {
    return list.filter(developer => developer.language === lang && developer.githubAdmin === "yes")
}







// https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript

function isRubyComing(list) {
    //return list.filter( developer  => developer.language === "Ruby").length !== 0
    //return list.find( developer  => developer.language === "Ruby") !== undefined
    return list.some(developer => developer.language === "Ruby")
}





// https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript

function isSameLanguage(list) {
    //   const firstDeveloperLanguage = list[0].language
    //   const developersWithLanguage = list.filter(developer => developer.language === firstDeveloperLanguage)
    //   if(developersWithLanguage.length === list.length)
    //       return true
    //   else
    //       return false
    const firstDeveloperLanguage = list[0].language
    return list.every(developer => developer.language === firstDeveloperLanguage)
}