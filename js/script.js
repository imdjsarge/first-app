$(document).ready(function () {

    var firstApp = {

        buildHeader: function (data) {

            $("<h1>Sarge's Favorite Movies</h1>").insertAfter("#buttons").css({
                "color": "white",
                "textAlign": "center",
                "size": "50px"
            });
            $("<p>Click on the movie to watch the trailer!!!!</p>").insertAfter("h1");
        },

        jsonData: "",
        localStorageKey: "Loading movies",

        loadData: function () {
            if (typeof (localStorage) === 'undefined') {
                alert("Sorry, local storage is not supported for this browser.");
            } else {
                // Do the stuff to load the page data
                alert("Loading Data...");
                text = localStorage.getItem(firstApp.localStorageKey);
                if (text === null) {
                    alert("Sorry, no local data found.");
                } else {
                    firstApp.jsonData = JSON.parse(text);
                    firstApp.buildList(firstApp.jsonData);
                }
            }
        },


        saveData: function () {
            if (typeof (localStorage) === 'undefined') {

                alert("Sorry, local storage is not supported for this browser.");
            } else {
                if (firstApp.jsonData === null) {
                    alert("Sorry, you must load data before you can save.");
                } else {
                    localStorage.setItem(firstApp.localStorageKey,
                        JSON.stringify(firstApp.jsonData));
                }
            }
        },


        clearData: function () {
            if (typeof (localStorage) === 'undefined') {
                alert("Sorry, local storage is not supported for this browser.");
            } else {
                localStorage.removeItem(firstApp.localStorageKey);
            }
        },

        // AJAX -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

        movieItems: function (data) {
            $.ajax({
                type: "get",
                url: "data/movies.json",
                dataType: "json",
                success: function (data) {
                    firstApp.jsonData = data.movies;

                    var movies = data.movies,
                        count = movies.length;
                    if (count > 0) {
                        firstApp.buildList(movies);
                    }

                },
                error: function () {
                    alert('an ajax error occurred');
                }

            });

        },

        buildList: function (movies) {

  
                $.each(movies, function (i, obj) {
                    videoLoad = $("#videos");
                    movie = ("#movies");


                    list = $("<li>").css({
                        color: "white",
                        fontSize: "25px",
                        background: "grey",
                    });




                    iframe = $("<iframe>").attr("src", obj.video);
                    $(iframe).attr("class", "hide");

                    list.append(obj.name + "---" + obj.genre + "<br></br>").insertAfter(movie);
                    if (obj.image !== undefined) {
                        list.append("<img src=" + obj.image + ">" + "<br></br>");
                    }

                    $(iframe).css({


                    });

                    $(movie).append(list);
                    $(videoLoad).append(list);
                    $(videoLoad).append(iframe);
                    
                    



                });



         

        },
    };






    firstApp.buildHeader()

    //firstApp.movieItems();

    $("#ajax").click(function () {

        $(firstApp).show(firstApp.movieItems);
        $(firstApp).hide(iframe);
    });
    $("#load").click(firstApp.loadData);
    $("#save").click(firstApp.saveData);
    $("#clear").click(firstApp.clearData);



}());