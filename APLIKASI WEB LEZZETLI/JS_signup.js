function inputData(){
    
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var rpword = document.getElementById("rpword");
    

    //checked name
    if(username.value==""){
        alert("Username tidak boleh kosong"); return;
    } else if(email.value==""){
        alert("Email tidak boleh kosong"); return;
    }
    else if(password.value==""){
        alert("Password tidak boleh kosong"); return;
    }
    else if(password.value.length <6){
        alert("Password tidak boleh kurang dari 6 karakter"); return;
    }
    else if(rpword.value==""){
        alert("Konfirmasi Password tidak boleh kosong"); return;
    }
    else if(rpword.value!=password.value){
        alert("Password tidak cocok"); return;
    }
    else{
        alert("Data telah disimpan"); return;
    }

    
} 
