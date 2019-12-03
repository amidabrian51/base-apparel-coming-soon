// function validate() {
//     var input = document.createElement('input');
//     input.type='email';
//      input.value=document.getElementById('test').value;
    
//   if (input.checkValidity()) {
//     document.getElementById('a').style.background = 'green';
//   } else {
//     document.getElementById('a').style.background = 'red';
//   }
    
//   return false;
// }


function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("You have entered a correct email addresss")
    document.form1.text1.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form1.text1.focus();
    return false;
  }
}