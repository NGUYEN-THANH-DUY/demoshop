let login = document.getElementById("form-login");
let isAuthent = false;
function authentication(){
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;

    if(username =="admin"&&password =="admin"){
        isAuthent = true;
        document.getElementById("form-login").style.display = "none";
        document.getElementById("label-login").innerHTML= "kkkk"
    } else if(username ===""||password ===""){
        alert("Vui lòng nhập tài khoản mật khẩu")        
    } else{
        alert("Sai tài khoản hoặc mật khẩu.") 
    }
    console.log(username,password)
}
