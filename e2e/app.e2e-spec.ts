import { WhereAreWePage } from './app.po';

describe('where-are-we App', () => {
  let page: WhereAreWePage;

  beforeEach(() => {
    page = new WhereAreWePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
