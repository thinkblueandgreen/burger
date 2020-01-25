$(function(){
    $(".form").on("submit", function(event){


    event.preventDefault();

    var newBurger = {
        name: $("#message").val().trim()
    }

    $.ajax("/api/burgers",{
        type: "POST",
        data: newBurger
    }).then(
        function(){
            console.log("new burger")
            location.reload();
        }
    )
})

$(".devoure").on("click", function(){
    var caContent = {

       id: $(this).attr("status"),
    }
    
    $.ajax("api/burgers/"+ $(this).attr("status"), {
        type: "PUT",
        data: caContent
    }).then(
        function(){
            console.log("udid")
            location.reload();
        }
    )

    
    
})
})