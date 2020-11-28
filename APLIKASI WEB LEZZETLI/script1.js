function validateForm(){

    var x = document.forms["myForm"]["fjudul"].value;
    if (x == "") {
      alert("Semua kolom harus disi");
      return false;
    }
    var y= document.forms["myForm"]["ftanggal"].value;
    if (y == "") {
      alert("Semua kolom harus disi");
      return false;
    }
    var z = document.forms["myForm"]["fsubject"].value;
    if (z == "") {
      alert("Semua kolom harus disi");
      return false;
    }
    else {
      alert("Data tersimpan");}
} 


//     //Output Gender
//     var gender = document.getElementById("form");
//     var outputGender = document.getElementById("gender");
//     var txt = "";
//     for (i = 0; i < gender.length; i++) {
//         if (gender[i].checked) {
//           txt =gender[i].value;
//         }
//     }
//     outputGender.innerHTML = txt;

//     //Output Age
//     var outputAge = document.getElementById("age");
//     outputAge.innerHTML = age.value + " years old";

