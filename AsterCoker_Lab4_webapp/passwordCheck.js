const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");


function comparePassword() {
    if (pass1.value.length < 8) {
        document.getElementById("msg").innerHTML="Not 8 characters.";
    } else if (pass1.value !== pass2.value) {
        document.getElementById("msg").innerHTML="Passwords don't match.";
    } else {
        document.getElementById("msg").innerHTML="All good!";
    }
}

pass1.oninput = function() {comparePassword()};
pass2.oninput = function() {comparePassword()};