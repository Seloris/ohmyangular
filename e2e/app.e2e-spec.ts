import { OhmyangularPage } from './app.po';

describe('ohmyangular App', () => {
  let page: OhmyangularPage;

  beforeEach(() => {
    page = new OhmyangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
