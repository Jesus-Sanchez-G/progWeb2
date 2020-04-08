
  function valida(campo){
    var bRet = false;
    if (campo.value == "")
    document.write("<h2>"+"Faltan datos"+"</h2>");//alert("No tiene formato de RFC");
  //alert("Faltan datos");
    else 	if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
        document.write("<h2>"+"No tiene formato de RFC"+"</h2>");//alert("No tiene formato de RFC");
      else
        bRet = true;
    return bRet;
  }
