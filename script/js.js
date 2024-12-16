let continuar = true

while (continuar){
    let primerpromt = parseInt(prompt("ingrese altura en cm"));
    let segundopromt = parseInt(prompt("ingrese su peso"));

    function imc(a, b)  {

        let alturametro = a / 100
        let resultado = b / (alturametro*alturametro)
    
        console.log(resultado)
        
        if (resultado < 18.5) {
               
            console.log("estas muy delgado")        
    
        }
    
        else if(resultado < 24.9){
            console.log("estas saludable")
        }
    
        else {
            console.log("tienes sobrepeso")
        }
        
    } 
    imc(primerpromt, segundopromt)

    let mensaje = prompt("desea continuar? si/no")

    if(mensaje == "no"){
        continuar = false
        alert("muchas gracias")
    }
}