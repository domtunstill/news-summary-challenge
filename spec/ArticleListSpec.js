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
  
    // it('has an URL', function() {
    //     expect(article.url).toBe('https://www.theguardian.com/politics/2019/nov/03/boris-fails-with-brexit');
    // });
  
    // it('has a image', function() {
    //   expect(article.image).toBe('https://media.guim.co.uk/906a29a29b2f89fb7d43b7090a95cdb9a9bb05ab/0_69_3500_2100/500.jpg');
    // });
  
  });