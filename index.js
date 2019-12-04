function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("You have entered a correct email addresss")
    document.form1.text1.focus();
    return true;
  } else {
    document.getElementById("p").innerHTML += " this has just been added";
    // alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}