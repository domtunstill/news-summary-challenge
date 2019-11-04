"use strict";

function ArticleList(){
    var articles = [];

    return {
        add: function(article){
            articles.push(article);
        },
        
        all: function(){
            return articles;
        },
        findArticle: function(index){
            return articles[index];
        }
    };
};


var articleList = new ArticleList;