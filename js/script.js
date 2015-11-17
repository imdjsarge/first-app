$(document).ready(function () {

    var firstApp = {

        buildHeader: function (data) {

            $("<h1>Sarge's Favorite Movies</h1>").insertAfter("#buttons").css({
                "color": "white",
                "textAlign": "center",
                "size": "50px"
            });
            $("<p>Click on the movie to watch the trailer!!!!</p>").insertAfter("h1");
        }
    };
    firstApp.buildHeader();

    // AJAX -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
    var movies = {
        movieItems: function (data) {
            $.ajax({
                type: "get",
                url: "data/movies.json",
                dataType: "json",
                success: function (data) {
             
                    var movies = data.movies,
                        count = movies.length;
                    if (count > 0) {
                        $.each(movies, function (i, obj) {});
                        console.log(Object);
                    }
            
                    
                },
                              error: function () {
                alert('an ajax error occurred');
            }
              
            });
            
        }
    };

    movies.movieItems();

var list = {
    buildList: function (movies) {
        var list = movies.buildList,
            count = list.length;
        if (count > 0 ) {
            $.each(list, function (i, obj) {
                
                if (movies.obj.type === "Drama") {
                    var li = $("<li>");
                    li.append(obj.name + " " + obj.image);
                    if (ojb.imgage !== undefined) {
                        li.append("<img src=" + ojb.imgage + ">");
                        console.log(list);
                        
                    }
                }
            });
        }
        
    }
    
};
    list.buildList();
    
    buildMovies = {
        buildMovies: function (data) {
$("<div></div>").insertAfter("p");
    $("<li>").insertAfter("div");
    $("<li>").append(list).insertAfter("ul");         
            }
    };
    buildMovies.buildMovies();
    
}());