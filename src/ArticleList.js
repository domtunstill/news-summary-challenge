function ArticleList(){
    var articles = [];

    return {
        add: function(article){
            articles.push(article);
        },
        
        all: function(){
            return articles;
        }
    };
};
