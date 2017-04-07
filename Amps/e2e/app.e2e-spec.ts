import { AmpsPage } from './app.po';

describe('amps App', () => {
  let page: AmpsPage;

  beforeEach(() => {
    page = new AmpsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
