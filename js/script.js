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
                        targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
                    } else {
                        // Do the stuff to load the page data
                        targetArea.innerHTML = "Loading Data...";
                        text = localStorage.getItem(firstApp.localStorageKey);
                        if (text === null) {
                            targetArea.innerHTML = "Sorry, no local data found.";
                        } else {
                            firstApp.jsonData = JSON.parse(text);
                            firstApp.buildList(firstApp.jsonData);
                        }
                    }
                }


                    saveData: function () {
                    if (typeof (localStorage) === 'undefined') {
                        targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
                    } else {
                        if (firstApp.jsonData === null) {
                            targetArea.innerHTML = "Sorry, you must load data before you can save.";
                        } else {
                            localStorage.setItem(firstApp.localStorageKey, JSON.stringify(firstApp.jsonData));
                        }
                    }
                }

                    clearData: function () {
                    if (typeof (localStorage) === 'undefined') {
                        targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
                    } else {
                        localStorage.removeItem(firstApp.localStorageKey);
                    }
                }

                // AJAX -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

                    movieItems: function (data) {
                    $.ajax({
                        type: "get",
                        url: "data/movies.json",
                        dataType: "json",
                        success: function (data) {
                            jsonData = data.movies;

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

                    var count = movies.length;
                    if (count > 0) {
                        $.each(movies, function (i, obj) {


                            list = $("<li>").css({
                                color: "white",
                                fontSize: "25px",
                                background: "grey",
                            });

                            list.append(obj.name + "---" + obj.genre + "<br></br>").insertAfter("#movies");
                            if (obj.image !== undefined) {
                                list.append("<img src=" + obj.image + ">" + "<br></br>");
                            }

                            video = $("<iframe>");
                            video.append("li");

                            if (obj.video !== undefined) {
                                video.append("src" + obj.video);
                                console.log(video)
                            }



                            //movie_names = document.getElementById("movies")
                            //var new_movies = document.createElement("h1");
                            //var movie = document.createTextNode(movies.name);
                            //new_movies.appendChild(movie);
                            //movie_names.appendChild(new_movies);

                            //---------------------------------

                            //movie_img = document.getElementById("movies");
                            //var new_images = document.createElement("img");
                            //new_images.setAttribute("src", movies.image);
                            //movie_img.appendChild(new_images);

                            //-----------------------------------
                            //movie_genre = document.getElementById("movies");
                            //var new_genre = document.createElement("h2");
                            //var genre = document.createTextNode(movies.genre);
                            //new_genre.appendChild(genre);
                            //movie_genre.appendChild(new_genre);

                            //--------------------------------------

                            //var youTubeEmbed = "https://www.youtube.com/embed/"

                            //videos = document.getElementById("movies");
                            //var new_video = document.createElement("iframe");
                            //videos.setAttribute("frameborder", "0");
                            //videos.setAttribute("allowfullscreen", "allowfullscreen");
                            //new_video.setAttribute("src", youTubeEmbed + movies.video);
                            //videos.appendChild(new_video);


                        });
                    }

                },




            };


            firstApp.buildHeader();

            //firstApp.movieItems();

            $("#ajax").click(firstApp.movieItems);
            $("#load").click(firstApp.buildList);
            $("#save").click(firstApp.saveData);
            $("#clear").click(firstApp.clearData; $("button").click(function (ajax) {});


            }());