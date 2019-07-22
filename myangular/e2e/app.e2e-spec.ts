import { MyangularPage } from './app.po';

describe('myangular App', function() {
  let page: MyangularPage;

  beforeEach(() => {
    page = new MyangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
