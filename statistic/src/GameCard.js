class GameCard {
  constructor(parent, name, all, win, lose, last) {
    this.gameCardConainer = document.createElement('div');
    this.gameCardConainer.className = 'game-container';

    const gamePromo = document.createElement('div');
    gamePromo.className = 'game-promo';
    this.gameCardConainer.append(gamePromo);

    const promo = document.createElement('div');
    gamePromo.append(promo);

    this.link = document.createElement('a');
    this.link.setAttribute('href', '');
    promo.append(this.link);

    this.title = document.createElement('span');
    this.title.innerText = name;
    promo.append(this.title);

    const card = document.createElement('div');
    card.className = 'game-statistic';
    this.gameCardConainer.append(card);

    this.gameTimeContainer = document.createElement('div');
    this.gameTimeContainer.className = 'game-time';
    const date = new Date(last);
    this.gameTimeContainer.innerText = `Last played: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.toTimeString().slice(0, 5)}`;
    card.append(this.gameTimeContainer);

    const totalContainer = document.createElement('div');
    card.append(totalContainer);

    this.totalCount = document.createElement('div');
    this.totalCount.innerText = `Total: ${all}`;
    totalContainer.append(this.totalCount);

    const stat = document.createElement('div');
    totalContainer.append(stat);

    this.winCount = document.createElement('span');
    this.winCount.innerText = `You win: ${win}`;
    stat.append(this.winCount);

    this.loseCount = document.createElement('span');
    this.loseCount.innerText = `You lose: ${lose}`;
    stat.append(this.loseCount);

    parent.append(this.gameCardConainer);
  }

  // getGameCardContainer() {
  //   return this.gameCardConainer;
  // }
}
export default GameCard;
