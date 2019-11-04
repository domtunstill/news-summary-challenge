describe ('Article', function() {

    var articleList
  
    beforeEach(function() {
      articleList = new ArticleList();
        // article = jasmine.createSpy('Article');
      });
  
    it('starts with an empty articles array', function() {
        expect(articleList.all().length).toBe(0);
    });

    it('adds an article to the array', function() {
      articleList.add('article');
      expect(articleList.all().length).toBe(1);
    });

    it('adds an article to the array', function() {
      articleList.add('article');
      var list = articleList.all();
      expect(list).toEqual(['article']);
    });

    it('finds an article in the list', function() {
      articleList.add('article1');
      articleList.add('article2');
      expect(articleList.findArticle(1)).toEqual('article2');
    });
  
  });