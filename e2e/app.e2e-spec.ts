import { MoneyprojectPage } from './app.po';

describe('moneyproject App', () => {
  let page: MoneyprojectPage;

  beforeEach(() => {
    page = new MoneyprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
