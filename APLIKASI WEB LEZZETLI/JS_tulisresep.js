function validateForm(){

    var x = document.forms["myForm"]["fjudul"].value;
    if (x == "") {
      alert("Semua kolom harus disi");
      return false;
    }
    var y= document.forms["myForm"]["fdeskripsi"].value;
    if (y == "") {
      alert("Semua kolom harus disi");
      return false;
    }
    var z = document.forms["myForm"]["fbahan"].value;
    if (z == "") {
      alert("Semua kolom harus disi");
      return false;
    }
    var a = document.forms["myForm"]["flangkah"].value;
    if (a == "") {
      alert("Semua kolom harus disi");
      return false;
    }
    else {
      alert("Data tersimpan");}
} 