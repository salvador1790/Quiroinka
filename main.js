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

//Scroll Smoothly

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

 //Dropdown Menu

 $(document).ready(function(){
     $("#dropdown").click(function(){
        $(".navbar").css("height","200");
        $(".mobileNavContentHidden").toggleClass("mobileNavContentOn")
     })
 })