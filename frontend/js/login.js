let loginButton = document.getElementById("loginBtn").onclick=function login(){
    
    let username=document.getElementById("usernameText").value
    let password=document.getElementById("passwordText").value

    var hash = CryptoJS.MD5(password);

    axios.get(`accounts/login?username=${username}&password=${hash}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

let registerButton = document.getElementById("registerBtn").onclick=function register(){
    window.location.href="/registration"
}
