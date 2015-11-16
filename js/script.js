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









    // AJAX ---------------------------------------
    var movies = {
        movieItems: function (data) {
            $.ajax({
                type: "get",
                url: "data/movies.json",
                dataType: "json",
                success: function (data2) {
                    var movies = data2.movies,
                        count = movies.length;
                    if (count > 0) {
                        $.each(movies, function (i, obj) {

                            $.getJSON("data/movies.json", function (data) {

                                $("#output").empty();
                                if (count > 0) {
                                    console.log(movies)
                                    $.each(movies),
                                        function (i, obj) {
                                            $("#output").append("<p>" + obj.name + ">");
                                        }
                                }
                            });

                           
                                });
                         
                        };
                    }
                });
            
        }
    };

    movies.movieItems();



}());