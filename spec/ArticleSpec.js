describe ('Article', function() {

  var article

  beforeEach(function() {
    article = new Article('Boris fails with brexit', 'https://www.theguardian.com/politics/2019/nov/03/boris-fails-with-brexit', 'https://media.guim.co.uk/906a29a29b2f89fb7d43b7090a95cdb9a9bb05ab/0_69_3500_2100/500.jpg')
      // article = jasmine.createSpy('Article');
    });

  it('has a headline', function() {
      expect(article.headline).toBe('Boris fails with brexit');
  });

  it('has an URL', function() {
      expect(article.url).toBe('https://www.theguardian.com/politics/2019/nov/03/boris-fails-with-brexit');
  });

  it('has a image', function() {
    expect(article.image).toBe('https://media.guim.co.uk/906a29a29b2f89fb7d43b7090a95cdb9a9bb05ab/0_69_3500_2100/500.jpg');
  });

});