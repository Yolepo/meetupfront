import { MeetupFrontPage } from './app.po';

describe('meetup-front App', () => {
  let page: MeetupFrontPage;

  beforeEach(() => {
    page = new MeetupFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
