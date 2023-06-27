$(document).ready(function(){
    var signosActivados,igualActivado,encendida = false
    
    function activaBotonIgual(){
        $("#botonIgual").css("cursor", "pointer")
        if(!igualActivado){
            igualActivado=true
            $("#botonIgual").on("click", function(evento){ 
                $("#pantalla").text(eval($("#pantalla").text()))
            })
        }
    }
    activaBotonIgual()
    
    function desactivaBotonIgual(){
        $("#botonIgual").css("cursor", "auto")
        if(igualActivado){
            igualActivado=false
            $("#botonIgual").off("click")
        }
    }
    
    function activarSignos(){
        if(!signosActivados){
            $(".operando").css("cursor", "pointer")
            $(".operando").on("click", function(evento){
                $("#pantalla").append(evento.target.innerHTML)
                 desactivarSignos()
            })
            signosActivados = true
        }
    }
    
    function desactivarSignos(){
        signosActivados = false;
        $(".operando").css("cursor", "auto")
        $(".operando").off("click");
    }
    function activaNumeros(){
        $(".numero").css("cursor", "pointer")
        $(".numero").on("click", function(evento){
            if($("#pantalla").text().length<12){
                if($("#pantalla").text()=="0"){
                    $("#pantalla").text(evento.target.innerHTML)
                }else{
                     $("#pantalla").append(evento.target.innerHTML)
                }
                activarSignos()
            }
        })
    }
    
    function desactivaNumeros(){
        $(".numero").css("cursor", "auto")
        $(".numero").off("click")
    }
    
    $("#botonON").click(function(){
        if(!encendida){
            encendida=true
            activaNumeros()
            activaBotonIgual()
            $("#pantalla").text("0")
            $("#limpiar").css("cursor", "pointer")
            $("#limpiar").click(function(){
                $("#pantalla").text("0")
            })
        }else{         
            desactivaNumeros()
            desactivarSignos()
            desactivaBotonIgual()
            $("#limpiar").off("click")
            
            $("#pantalla").text("")
            encendida=false
        }
    })
})