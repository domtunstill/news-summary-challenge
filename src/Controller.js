"use strict";

(function(exports) {

    function Controller() {

        // return {
        //     getArticles: getArticles
        // };

        function listenFor(element, event, callBack) {
                element.addEventListener(event, function (event) {
                if (typeof callBack === "function") { callBack(event) }
            });
        };

        function getArticles() {
            var articles = articleList.all();
            printArticles(articles);
        };

        listenFor(document, 'click', getArticles);
        // listenFor(window, 'hashchange', retrieveNote);
        // listenFor(document, 'DOMContentLoaded', getArticles);

    };

    exports.Controller = Controller;

})(this);


document.addEventListener('DOMContentLoaded', function () {
    console.log("I'm listening");
    new Controller;
});