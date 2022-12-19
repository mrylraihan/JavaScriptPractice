var name = 'jerry'
console.log(email);
var email='jerry@email.com'
console.log(email);
sendEmail()
function sendEmail(){
    var recipient = 'tom@email.com'
    console.log('Email sent from ' + email + ' to ' + recipient);
}
sendEmail2()
var sendEmail2 = function(){
    var recipient = 'tom@email.com'
    console.log('Email sent from ' + email + ' to ' + recipient);
}

console.log(recipient);