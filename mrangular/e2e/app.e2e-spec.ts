import { MrangularPage } from './app.po';

describe('mrangular App', function() {
  let page: MrangularPage;

  beforeEach(() => {
    page = new MrangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
