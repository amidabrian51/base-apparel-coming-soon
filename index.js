function ValidateEmail(inputText) {
  var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;

  if (mailformat.test(inputText.value)) {
    document.getElementById("addedText").innerHTML = "";
    alert("You have entered a correct email addresss")
    //document.form1.text1.focus();
    document.getElementById("test").classList.remove("invalidEmail")
    return true;
  } else {
    // var img = document.createElement('img');
    // img.src = "/images/icon-error.svg"
    document.getElementById("addedText").innerHTML = "This is the wrong email address";
    document.getElementById("test").classList.add("invalidEmail")
    // alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}