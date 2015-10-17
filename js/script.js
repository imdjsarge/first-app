(function () {

    var fav_movies = {
        "movies": [
            {

                "name": "Forrest Gump",
                "genre": "Drama",
                "image": "images/forest_gump.jpg",
                "video": "eYSnxZKTZzU",
        },
            {

                "name": "Shawshank Redemption",
                "genre": "Drama",
                "image": "images/shawshank_redemption.jpg",
                "video": "NmzuHjWmXOc",
        },
            {

                "name": "Avengers",
                "genre": "Action",
                "image": "images/avengers.jpg",
                "video": "eOrNdBpGMv8",
        },
            {

                "name": "Ghostbusters",
                "genre": "Comedy",
                "image": "images/ghostbusters.jpg",
                "video": "vntAEVjPBzQ",
        },
            {

                "name": "Penguins",
                "genre": "Animated",
                "image": "images/penguins.jpg",
                "video": "KHGHEpUeUwo",
        },
            {
                "name": "Evil Dead 2",
                "genre": "Horror",
                "image": "images/evil_dead_2.jpg",
                "video": "XPOYmHqWeJE",
        },
            {
                "name": "Step Brothers",
                "genre": "Comedy",
                "image": "images/step_brothers.jpg",
                "video": "uEG78RoNgh8",
        },
            {
                "name": "Superman",
                "genre": "Action",
                "image": "images/superman.jpg",
                "video": "XWHyvubVdPA",
                    }
                    ]
    };

    var favorite_movies = fav_movies.movies;
    for (i = 0; i < favorite_movies.length; i++) {
        my_movies = fav_movies.movies[i];

        movie_names = document.getElementById("movies");
        var new_movies = document.createElement("h1");
        var movie = document.createTextNode(my_movies.name);
        new_movies.appendChild(movie);
        movie_names.appendChild(new_movies);

        movie_img = document.getElementById("movies");
        var new_images = document.createElement("img");
        new_images.setAttribute("src", my_movies.image);
        movie_img.appendChild(new_images);

        movie_genre = document.getElementById("movies");
        var new_genre = document.createElement("h2");
        var genre = document.createTextNode(my_movies.genre);
        new_genre.appendChild(genre); 
        movie_genre.appendChild(new_genre);
        
        var youTubeEmbed = "https://www.youtube.com/embed/"
        
        videos = document.getElementById("movies");
        var new_video = document.createElement("iframe");
        videos.setAttribute("frameborder", "0");
        videos.setAttribute("allowfullscreen", "allowfullscreen");
        new_video.setAttribute("src", youTubeEmbed + my_movies.video);
        videos.appendChild(new_video);
       

    }

}());