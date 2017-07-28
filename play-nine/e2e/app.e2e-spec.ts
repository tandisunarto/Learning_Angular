import { PlayNinePage } from './app.po';

describe('play-nine App', () => {
  let page: PlayNinePage;

  beforeEach(() => {
    page = new PlayNinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
