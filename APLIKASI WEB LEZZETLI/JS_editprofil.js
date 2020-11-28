function inputData(){
    
    var nama = document.getElementById("nama");
    var username = document.getElementById("username");
    var biodata = document.getElementById("biodata");
    var email = document.getElementById("email");
    var nohp = document.getElementById("nohp");
    

    //checked name
    if(nama.value==""){
        alert("Nama tidak boleh kosong"); return;
    } else if(username.value==""){
        alert("Username tidak boleh kosong"); return;
    } else if(biodata.value==""){
        alert("Biodata tidak boleh kosong"); return;
    }
    else if(email.value==""){
        alert("Email tidak boleh kosong"); return;
    }
    else if(nohp.value.length<10){
        alert("No Handphone tidak boleh kurang dari 10 digit"); return;
    }
    else{
        alert("Data telah disimpan"); return;
    }

    
} 