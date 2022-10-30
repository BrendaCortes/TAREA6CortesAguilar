function validar(){
 
    var nombre=document.getElementById("nombre").value;
    var control=document.getElementById("control").value;
    var rfc=document.getElementById("rfc").value;
    var tel=document.getElementById("tel").value;
    var correo=document.getElementById("correo").value;

    var entero=0;

    const regex=/^(m|c|)([0-9]{2}(120|121)[0-9]{3})$/;
    const numcon=regex.exec(control);
    const regex1=/^[A-Z]{4}(([0-9]{2})(0[1-9]|[0-2])([0-2][1-9]|[1-3]0))[A-Z0-9]{3}$/;
    const fecha=regex1.exec(rfc);
    const regex2=/^443[0-9]{7}$/;
    const regex3=/l([0-9]{2}(120|121)[0-9]{3})@morelia.tecnm.mx$/;
    const cor=regex3.exec(correo);


    if(nombre==''||control==''||rfc==''||tel==''||correo==''){
        console.log("Campos Vacios");
        window.alert("Es necesario rellenar todos los datos");
    }
    else{
         
        if(regex.test(control)){
            console.log("Numero de control Valido");
            entero++;
            if(regex1.test(rfc)){
                console.log("RFC valido");
                entero++; 
                if(regex2.test(tel)){
                    console.log("Telefono valido");
                    entero++; 
                    if(regex3.test(correo)){
                        console.log("Telefono valido");
                        entero++;  
                    }
                    else{
                        console.log("correo no valido")
                       
                    }
                }
                else{
                  console.log("Telefono no valido");
                 
                }
            }
            else{
                console.log("RFC no valido");
                
            }
        }
        else{
            console.log("numero de control no valido");

        }
    }

    if(entero==4){
        if(numcon[2]==cor[1]){
          console.log("Usuario Verficado: " + nombre + "  Nacido en: " + fecha[2]+"/"+fecha[3]+"/"+ fecha[4]);
          document.getElementById("mensaje").innerHTML = "Usuario Verficado: " + nombre + "  Nacido en: " + fecha[2]+"/"+fecha[3]+"/"+ fecha[4];
        }
        else{
            document.getElementById("mensaje").innerHTML = "El numero de control no coincide con el correo electronico.";
        }
        
    }
    else{
        console.log("Datos no validos, verifica de nuevo");
        document.getElementById("mensaje").innerHTML = "Los datos no cumplen las especificaciones de validacion.";
        document.getElementById("m1").innerHTML = "";
        document.getElementById("m2").innerHTML = "";
        document.getElementById("m3").innerHTML = "";
        document.getElementById("m4").innerHTML = "";
    }
  

}