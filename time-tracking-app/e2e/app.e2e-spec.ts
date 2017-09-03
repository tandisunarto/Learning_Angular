import { TimeTrackingAppPage } from './app.po';

describe('time-tracking-app App', () => {
  let page: TimeTrackingAppPage;

  beforeEach(() => {
    page = new TimeTrackingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
