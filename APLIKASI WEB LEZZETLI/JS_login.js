function validateForm() {
  
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Semua kolom harus disi");
      return false;
    }
    var y = document.forms ["myForm"]["fpw"].value;
     if (y == "") {
      alert("Semua kolom harus disi");
      return false;
    }
  }