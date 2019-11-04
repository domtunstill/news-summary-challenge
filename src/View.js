function printArticles(articles){

    var i = 1;
    articles.forEach(function(article){
        var list = document.getElementById('test');
        var title = article.headline;
        var url = article.url;
        var imageUrl = article.image;
        var listEntry = document.createElement('li');
        var image = document.createElement('img');
        image.setAttribute('src', imageUrl);
        var link = document.createElement('a');
        link.setAttribute('href', url);
        link.appendChild(document.createTextNode(title));
        listEntry.appendChild(image);
        listEntry.appendChild(link);
        listEntry.setAttribute('id', 'link'+i);
        list.appendChild(listEntry);
        i ++;
    });

};