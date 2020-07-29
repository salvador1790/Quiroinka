console.log("it works");

$(document).ready(function(){
    $(".submit").on("click",function(event){

        let name = $(".name").val();
        let email = $(".email").val();
        let message = $("#message").val();
        let phone = $(".number").val();
        let statusMessage = $(".status");
        statusMessage.empty();

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusMessage.append('<div>Email is Valid</div>');
        } else{
            event.preventDefault();
            statusMessage.append('<div>Email no es Valido</div>');
        } 

        if(name.length <=0 ){
            event.preventDefault();
            statusMessage.append('<div>El Nombre es Requerido</div>');
        }

        if(message.length <=0){
            event.preventDefault();
            statusMessage.append('<div>No hay mensaje Escrito</div>');
        }

        if(phone.length <=0){
            event.preventDefault();
            statusMessage.append('<div>No hay numero de Telefono</div>');
        }
    })
})