(function () {

    var data = null;

    var localStorageKey = "Movie_Data";
    var targetArea = document.getElementById("movies");
    var ajax = document.getElementById("ajax");
    var load = document.getElementById("load");
    var save = document.getElementById("save");
    var clear = document.getElementById("clear");

    function buildMovieData(movies) {

        var youTubeEmbed = "https://www.youtube.com/embed/"

        movie_names = document.getElementById("movies");
        var new_movies = document.createElement("h1");
        var movie = document.createTextNode(movies.name);
        new_movies.appendChild(movie);
        movie_names.appendChild(new_movies);

        movie_img = document.getElementById("movies");
        var new_images = document.createElement("img");
        new_images.setAttribute("src", movies.image);
        movie_img.appendChild(new_images);

        movie_genre = document.getElementById("movies");
        var new_genre = document.createElement("h2");
        var genre = document.createTextNode(movies.genre);
        new_genre.appendChild(genre);
        movie_genre.appendChild(new_genre);



        videos = document.getElementById("movies");
        var new_video = document.createElement("iframe");
        videos.setAttribute("frameborder", "0");
        videos.setAttribute("allowfullscreen", "allowfullscreen");
        new_video.setAttribute("src", youTubeEmbed + movies.video);
        videos.appendChild(new_video);
    
    }

    function getHTTPObject() {
        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }

        return xhr;
    }

    function loadDataAjax() {
        var request = getHTTPObject();

        request.open("GET", "data/movies.json", true);
        request.send(null)
        request.onreadystatechange = function () {
            var text;

            if (request.readyState === 4 && request.status === 200) {

                text = request.responseText;
                data = JSON.parse(text);

                showMoviesData();
            }
        }
    }

    function showMovie_Data() {

        var Movies = data.movies;
        var i, talk;

        for (i = 0; i < Moviesovies.length; i++) {
            if (i === 0) {
                targetArea.innerHTML = "";
            }

            talk = Moviesovies[i];
            targetArea.appendChild(buildMovieData(talk));

        }
    }

    function loadLocalData() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        } else {
            // Do the stuff to load the page data
            targetArea.innerHTML = "Loading Data...";
            text = localStorage.getItem(localStorageKey);
            if (text === null) {
                targetArea.innerHTML = "Sorry, no local data found.";
            } else {
                data = JSON.parse(text);
                showMovie_Data(data);
            }
        }
    }


    function saveDataLocally() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        } else {
            if (data === null) {
                targetArea.innerHTML = "Sorry, you must load data before you can save.";
            } else {
                localStorage.setItem(localStorageKey, JSON.stringify(data));
            }
        }
    }

    function clearDataLocally() {
        if (typeof (localStorage) === 'undefined') {
            targetArea.innerHTML = "Sorry, local storage is not supported for this browser.";
        } else {
            localStorage.removeItem(localStorageKey);
        }
    }

    targetArea.innerHTML = "Click a button to Load Data";

    ajax.addEventListener("click", loadDataAjax, false);
    load.addEventListener("click", loadLocalData, false);
    save.addEventListener("click", saveDataLocally, false);
    clear.addEventListener("click", clearDataLocally, false);

    
})();