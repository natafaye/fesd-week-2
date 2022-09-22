/**** PILLARS *****/
// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript

function pillars(numPill, dist, width) {
    if(numPill === 1) {
        return 0;
    }
    return (numPill - 1) * (dist * 100) + (numPill - 2) * width
}

// numPill = 4, dist = 2, width = 3
// answer = (numPill - 1) * dist + 2 * width
// [   ]  [   ]  [   ]  [   ]

// numPill = 3, dist = 5, width = 1
// answer = (numPill - 1) * dist + (numPill - 2) * width
// [ ]     [ ]     [ ]


// numPill = 5, dist = 1, width = 2
// answer = (numPill - 1) * dist + 3 * width
// [  ] [  ] [  ] [  ] [  ]

// numPill = 2, dist = 1, width = 2
// answer = 1
// [  ] [  ]




/**** SEATS IN THEATER *****/
// https://www.codewars.com/kata/588417e576933b0ec9000045/train/javascript

function seatsInTheater(nCols, nRows, col, row) {
    return (nRows - row) * (nCols - col + 1)
}

// nCols = 16, nRows = 11, col = 5, row =3
// answer = (nRows - row) * (nCols - col + 1)


// nCols = 5, nRows = 5, col = 3, row = 2
// answer = (nRows - row) * (nCols - col + 1)


// X X X X X
// X X X X X
// X X X X X
// X X O X X
// X X X X X




/**** FEAST OF MANY BEASTS *****/
// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}


// should work
// BeaR
// Blueberry cobbleR

// 1) does the first letter of best match the first letter of dish?
// 2) does the last letter of animal match the last letter of dish?
// 3) if both of those are true then return true
// 4) if only one is true return false
// 5) if neither is true return false

// // should not work
// BeaR
// Blueberry tart

// // should not work
// BeaR
// raspberry raaR

// // should not work
// BeaR
// spaghetti