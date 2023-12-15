const accountId = 122333; // const never change once we declare
let accountEmail = "sumedh@email.com"; // it is allow only 
var accountPassword = "12345"; // not use now because it allow in all in the scope(all files) -- Never use this 
accountCity = "Jaipur";

let accountState;


// not allowed because
//accountId = 2; 
accountEmail = "sumedh@google.com";
accountPassword = "MyPassword@123";
accountCity = "Nagpur";


//console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);