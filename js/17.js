
function validaFechaMenor(campo){
  var bRet = false;
  var dHoy = new Date();
  var dCapt = null;
  if (campo.value == "")
    alert("Faltan datos");
  else{
    dCapt = validaFecha(campo.value);
    if (dCapt != null && dCapt < dHoy)
      bRet = true;
    else
      alert("La fecha debe ser menor a la fecha actual");
  }
  return bRet;
}

  function validaFecha(valor){

      var dConvertida = null;
      var sAnio = "";
      var sMes = "";
      var sDia = "";
      var nAnio=0, nMes=0, nDia = 0;

      if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)){
        nDia = parseInt(valor.substring(0,2), 10);
        nMes = parseInt(valor.substring(3,5), 10);
        nAnio = parseInt(valor.substring(6,10), 10);

        if (nDia <1 || nDia>31)
          alert("El día no es válido")
        else{
          if (nMes <1 || nMes>12)
            alert("El mes no es válido");
          else{
            if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
               nMes==8 || nMes==10 || nMes==12) && nDia > 31)
               alert("El mes tiene máximo 31 días");
            else if ((nMes==4 || nMes==6 || nMes==9 ||
                  nMes==11) && nDia > 30)
               alert("El mes tiene máximo 30 días");
            else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
               alert("Febrero tiene 28 días o 29 en bisiesto");
            else{
              dConvertida = new Date();
              dConvertida.setFullYear(nAnio, nMes-1, nDia);
            }//fin validaci�n día-mes
          }//mes válido
        }//día válido
        creasigno(nDia,nMes);
      }//formato válido

      else{
        alert("No tiene formato de fecha");
      }
      return dConvertida;
  }
  function creasigno(nDia,nMes){
    var newDiv;
    if (document.getElementsByTagName('div')[0]!="[object HTMLDivElement]")
   newDiv= document.createElement("div");
   else {
     newDiv=document.getElementsByTagName('div')[0];

     var div =document.getElementsByTagName('div')[0];
      while (div.firstChild) {
        div.removeChild(div.firstChild);
      }
  }

  if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4))
  var newContent = document.createTextNode("SIGNO ARIES. NUMERO DE LA SUERTE: 5");
  else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5))
    var newContent = document.createTextNode("SIGNO TAURO. NUMERO DE LA SUERTE: 12");
    else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6))
      var newContent = document.createTextNode("SIGNO GEMINIS. NUMERO DE LA SUERTE: 3");
      else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7))
        var newContent = document.createTextNode("SIGNO CANCER. NUMERO DE LA SUERTE: 2");
        else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8))
          var newContent = document.createTextNode("SIGNO LEO. NUMERO DE LA SUERTE: 9");
          else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9))
            var newContent = document.createTextNode("SIGNO VIRGO. NUMERO DE LA SUERTE: 17");
            else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10))
              var newContent = document.createTextNode("SIGNO LIBRA. NUMERO DE LA SUERTE: 6");
              else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11))
                var newContent = document.createTextNode("SIGNO ESCORPIO. NUMERO DE LA SUERTE: 8");
                else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12))
                  var newContent = document.createTextNode("SIGNO SAGITARIO. NUMERO DE LA SUERTE: 4");
                  else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1))
                    var newContent = document.createTextNode("SIGNO CAPRICORNIO. NUMERO DE LA SUERTE: 23");
                    else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2))
                      var newContent = document.createTextNode("SIGNO ACUARIO. NUMERO DE LA SUERTE: 0");
                      else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3))
                        var newContent = document.createTextNode("SIGNO PICIS. NUMERO DE LA SUERTE: 7");


  //var newContent = document.createTextNode("SIGNO");
  newDiv.appendChild(newContent); //añade texto al div creado.

   // añade el elemento creado y su contenido al DOM
   var currentDiv = document.getElementById("div");
   document.body.insertBefore(newDiv, currentDiv);

   if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4))
   newDiv.style="border: 3px solid #999999; background-color:#FF0000; width: 200px ;height:300px ";
   else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5))
     newDiv.style="border: 3px solid #999999; background-color:#008000; width: 200px ;height:300px ";
     else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6))
       newDiv.style="border: 3px solid #999999; background-color:#FFFF00; width: 200px ;height:300px ";
       else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7))
         newDiv.style="border: 3px solid #999999; background-color: #808080; width: 200px ;height:300px ";
         else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8))
           newDiv.style="border: 3px solid #999999; background-color:#FFFF00; width: 200px ;height:300px ";
           else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9))
             newDiv.style="border: 3px solid #999999; background-color:#67403A; width: 200px ;height:300px ";
             else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10))
               newDiv.style="border: 3px solid #999999; background-color: #F7BFBE; width: 200px ;height:300px ";
               else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11))
                 newDiv.style="border: 3px solid #999999; background-color:#FF0000; width: 200px ;height:300px ";
                 else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12))
                   newDiv.style="border: 3px solid #999999; background-color:#8F00FF; width: 200px ;height:300px ";
                   else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1))
                     newDiv.style="border: 3px solid #999999; background-color: #808080; width: 200px ;height:300px ";
                     else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2))
                       newDiv.style="border: 3px solid #999999; background-color:#0070B8; width: 200px ;height:300px ";
                       else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3))
                         newDiv.style="border: 3px solid #999999; background-color:#0070B8; width: 200px ;height:300px ";


}
