var btn_submit = document.forms["register-form"]["btn-submit"];
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
btn_submit.onclick = function () {
// username
  var txt_username = document.forms["register-form"]["username"];
  var message_username = txt_username.nextElementSibling;
  if (txt_username == null || txt_username.value.length == 0) {
    message_username.style = "color :red ";
    message_username.innerHTML = "* Vui lòng nhập tên của bạn";
    message_username.classList.remove("hidden-text");
  }
  else if (txt_username.value.length < 5) {
    message_username.style = "color :red ";
    message_username.innerHTML = "* Tên của bạn nhập quá ngắn";
    message_username.classList.remove("hidden-text");
  }
  else if (txt_username.value.length > 20) {
    message_username.style = "color :red ";
    message_username.innerHTML = "* Tên của bạn nhập quá đài";
    message_username.classList.remove("hidden-text");
  }
  else {
    message_username.classList.add("hidden-text");
  }
// password
  var txt_password = document.forms["register-form"]["password"];
  var message_passwrod = txt_password.nextElementSibling;
  if (txt_password == null || txt_password.value.length == 0) {
    message_passwrod.style = "color :red ";
    message_passwrod.innerHTML = "* Vui lòng không bỏ trống password";
    message_passwrod.classList.remove("hidden-text");
  }
  else {
    message_passwrod.classList.add("hidden-text")
  }
// fullName
  var txt_fullName = document.forms["register-form"]["fullName"];
  var message_fullName = txt_fullName.nextElementSibling;
  if (txt_fullName == null || txt_fullName.value.length == 0) {
    message_fullName.style = "color :red ";
    message_fullName.innerHTML = "* Vui lòng nhập tên của bạn";
    message_fullName.classList.remove("hidden-text");
  }
  else if (txt_username.value.length < 5) {
    message_fullName.style = "color :red ";
    message_fullName.innerHTML = "* Tên của bạn nhập quá ngắn";
    message_fullName.classList.remove("hidden-text");
  }
  else if (txt_username.value.length > 30) {
    message_fullName.style = "color :red ";
    message_fullName.innerHTML = "* Tên của bạn nhập quá đài";
    message_fullName.classList.remove("hidden-text");
  }
  else {
    message_fullName.classList.add("hidden-text");
  }

// email
  var txt_email = document.forms["register-form"]["email"];
  var message_email = txt_email.nextElementSibling;
  if (txt_email.value.length == 0 || txt_email == null) {
    message_email.style = "color :red ";
    message_email.innerHTML = "* Khong duoc bo trong truong nay";
    message_email.classList.remove("hidden-text");
  }
  else if (!txt_email.value.match(mailformat)) {
    message_email.style = "color :red ";
    message_email.innerHTML = "* Sai dinh dang email";
    message_email.classList.remove("hidden-text");
  }
  else {
    message_email.classList.add("hidden-text");
  }
}
