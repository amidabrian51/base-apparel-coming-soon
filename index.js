// function ValidateEmail(inputText) {
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (inputText.value.match(mailformat)) {
//     alert("You have entered a correct email addresss")
//     document.form1.text1.focus();
//     return true;
//   } else {
//     var img = document.createElement('img');
//     img.src = "/images/icon-error.svg"
//     document.getElementById("addedText").innerHTML += "This is the wrong email address";
//     document.getElementById("test").append(img);
//     // alert("You have entered an invalid email address!");
//     document.form1.text1.focus();
//     return false;
//   }
// }