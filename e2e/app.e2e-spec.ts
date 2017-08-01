import { TestsimPROPage } from './app.po';

describe('testsim-pro App', () => {
  let page: TestsimPROPage;

  beforeEach(() => {
    page = new TestsimPROPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
