var eventposted=0;
document.cookie = "username=admin; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
$(document).ready(function(){
  $('.submit-button').on("click", function() {
    var user = $('.username-input').val();
    console.log(user);
    var pass = $('.pass-input').val();
    console.log(pass);
    if (user === "admin" && pass === "admin"){
      window.setInterval(foo, 100);
      document.cookie = "username=admin;";
    }
    else{
      $(".error").text("Either username or password is incorrect");
    }
  });
});
function foo(){
  if(eventposted==0) {
   eventposted = 1;
   window.location.href = "display.html";
  }
}
function setCookie(name, value, expTimeSecs){
  var d = new Date();
  d.setTime(d.getTime() + (expTimeSecs * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/"
}

// (function(){
//   var app = angular.module("loginApp", []);
//   app.controller("loginCtrl", loginCtrl);
//
//   function loginCtrl(){
//     var login = this;
//     login.user = "";
//     login.pass = "";
//     login.message = "";
//     login.nextPage = function(){
//       console.log("login.user = ", login.user);
//       console.log("login.pass = ", login.pass);
//       if (login.user === "admin", login.pass === "pass"){
//
//       }
//       else{
//         login.message = "Either username or password is incorrect"
//       }
//     }
//   }
// })();
