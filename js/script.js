(function () {

    var fav_movies = {
        "movies": [
            {

                "name": "Forrest Gump",
                "genre": "Drama",
                "image": "images/forest_gump.jpg",
        },
            {

                "name": "Shawshank Redemption",
                "genre": "Drama",
                "image": "images/shawshank_redemption.jpg",
        },
            {

                "name": "Avengers",
                "genre": "Action",
                "image": "images/avengers.jpg",
        },
            {

                "name": "Ghostbusters",
                "genre": "Comedy",
                "image": "images/ghostbusters.jpg",
        },
            {

                "name": "Penguins",
                "genre": "Animated",
                "image": "images/penguins.jpg",
        },
            {
                "name": "Evil Dead 2",
                "genre": "Horror",
                "image": "images/evil_dead_2.jpg",
        },
            {
                "name": "Step Brothers",
                "genre": "Comedy",
                "image": "images/step_brothers.jpg",
        },
            {
                "name": "Superman",
                "genre": "Action",
                "image": "images/superman.jpg",
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
        var new_genre = document.createElement("h3");
        var genre = document.createTextNode(my_movies.genre);
        new_genre.appendChild(genre);
        movie_genre.appendChild(new_genre);

    }

}());