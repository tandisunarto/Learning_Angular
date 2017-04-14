import { FirstRoutingAppPage } from './app.po';

describe('first-routing-app App', () => {
  let page: FirstRoutingAppPage;

  beforeEach(() => {
    page = new FirstRoutingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
