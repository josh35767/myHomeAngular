import { HomeAngularPage } from './app.po';

describe('home-angular App', () => {
  let page: HomeAngularPage;

  beforeEach(() => {
    page = new HomeAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
