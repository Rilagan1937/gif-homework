var animals = ["tiger", "chicken", "dolphin"];

function displayAnimal() {
    
    $("#giphy-container").empty();
    var requestAnimal = $(this).attr("button-data");
    
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + requestAnimal + "&api_key=BzhlAMzGGojL38kIs2BSyIbzcdZ8fHuo&limit=10";

    $.get(queryURL).then(function(response){
        
        for (var i = 0; i < 10; i ++){   
            var image = $("<img>");
            image.attr("src", response.data[i].images.original.url)
            $("#giphy-container").append(image);
        }

    })
}

function makeButtons() {
    $("#buttons-view").empty();
   
    for (var i = 0; i < animals.length; i ++){
        var button = $("<button>");
        button.text(animals[i]);
        button.addClass("buttons");
        button.attr("button-data", animals[i]);
        $("#buttons-view").append(button);
    }
}

$("#add-animal").on("click", function(){
    event.preventDefault();
    var animal = $("#animal-input").val();
    animals.push(animal);
   makeButtons();
    

})


    
    
    
   $(document).on("click", ".buttons", displayAnimal);



makeButtons();