console.log ("Abdullah")
const accountId = "144744"
let accountEmail = "Abdullah@gmail.com"
var accountPassword = "12345"
accountCity = "gujrat"
let accountState;

// accountId = 74 // not allowed

accountEmail = "Abdullah@gmail.com"
accountPassword = "123456789"
accountCity = "lahore"

console.log (accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/
console.table ([accountEmail, accountPassword, accountCity, accountState])