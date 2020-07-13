class GameCard {
  constructor(parent, name, image, link, all, win, lose, last) {
    this.gameCardConainer = document.createElement('div');
    this.gameCardConainer.className = 'game-container';

    const gamePromo = document.createElement('div');
    gamePromo.className = 'game-promo';
    this.gameCardConainer.append(gamePromo);

    const promo = document.createElement('div');
    gamePromo.append(promo);

    this.link = document.createElement('a');
    // this.link.innerText = name;
    this.link.setAttribute('href', `${link}`);
    promo.append(this.link);

    this.image = document.createElement('img');
    this.image.className = 'promo-image';
    this.image.setAttribute('src', `${image}`);
    this.link.append(this.image);

    this.title = document.createElement('span');
    this.title.className = 'link-title';
    this.title.innerText = name;
    this.link.append(this.title);

    const card = document.createElement('div');
    card.className = 'game-statistic';
    this.gameCardConainer.append(card);

    this.gameTimeContainer = document.createElement('div');
    this.gameTimeContainer.className = 'game-time';
    const date = new Date(last);
    this.gameTimeContainer.innerText = `Last played: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.toTimeString().slice(0, 5)}`;
    card.append(this.gameTimeContainer);

    const totalContainer = document.createElement('div');
    totalContainer.className = 'total';
    card.append(totalContainer);

    this.totalCount = document.createElement('div');
    this.totalCount.innerText = `Total: ${all}`;
    totalContainer.append(this.totalCount);

    this.winCount = document.createElement('div');
    this.winCount.innerText = `You win: ${win}`;
    totalContainer.append(this.winCount);

    this.loseCount = document.createElement('div');
    this.loseCount.innerText = `You lose: ${lose}`;
    totalContainer.append(this.loseCount);

    parent.append(this.gameCardConainer);
  }
}
export default GameCard;
