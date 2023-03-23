// filter -> unchanged items, but potentially less of them, in an array
// find -> one unchanged item
// map -> array of the same length, but new items based on the original items
// reduce -> array and get one value


// https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript

function getFirstPython(list) {
    const firstPythonDeveloper = list.find(developer => developer.language === "Python")
    if (firstPythonDeveloper) {
        return firstPythonDeveloper.firstName + ", " + firstPythonDeveloper.country
    }
    return "There will be no Python developers"
}


// https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript

function isRubyComing(list) {
    const rubyDevelopers = list.filter(developer => developer.language === "Ruby")
    if (rubyDevelopers.length > 0) {
        return true
    }
    return false
}


// https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

function findAdmin(list, lang) {
    const admins = list.filter(developer => developer.githubAdmin === 'yes' && developer.language === lang)
    return admins
}