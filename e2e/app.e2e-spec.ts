import { FruitDirectoryPage } from './app.po';

describe('fruit-directory App', function() {
  let page: FruitDirectoryPage;

  beforeEach(() => {
    page = new FruitDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
