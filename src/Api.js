"use strict";

(function (exports) {

    function Api(){

        return {
            getArticles: getArticles
        };
    
        function getArticles() {
            // Set up our HTTP request
            var xhr = new XMLHttpRequest();

            xhr.onload = function () {
                // console.log(xhr)
                var request = JSON.parse(xhr.response);
                var responses = request.response.results;
                responses.forEach(function(response){
                    var field = response.fields;
                    var article = new Article(field.headline,field.shortUrl,field.thumbnail);
                    articleList.add(article);
                });
            };
            // Create and send a GET request
            // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
            // The second argument is the endpoint URL
            xhr.open('GET', "https://content.guardianapis.com/search\?q\=debate\&tag\=politics/politics\&show-fields=headline,thumbnail,short-url\&api-key\=ef5715e1-270a-43d3-8d0f-3419c83802f6");
            xhr.send();

        };

    };

    exports.Api = Api;

})(this);

var api = new Api;

api.getArticles();

// window.setTimeout(() => {
//   console.log('xhr', xhr.response)
// }, 1000)