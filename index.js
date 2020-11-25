// Code your solution here
function findMatching(drivers, string) {
 let match = []
 drivers.filter(n => {
     if (n.toUpperCase() == string.toUpperCase())
     match.push(n)
 })
 return match
}

function fuzzyMatch(drivers, string) {
    let match = []
    drivers.filter(n => {
        if (n.startsWith(string)) {
            match.push(n)
        }
    }) 
    return match 
}

function matchName(drivers, string) {
    let match = []
    drivers.filter(n => {
        if (n.name === string)
        match.push(n)
    })
    return match
}