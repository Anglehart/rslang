class GameCard {
  constructor(parent, name, image, link, all, win, lose, last) {
    this.gameCardConainer = document.createElement('div');
    this.gameCardConainer.className = 'game-container';

    const gamePromo = document.createElement('div');
    this.gameCardConainer.append(gamePromo);

    this.link = document.createElement('a');
    this.link.setAttribute('target', '_blank');
    this.link.setAttribute('href', `${link}`);
    gamePromo.append(this.link);

    const promo = document.createElement('div');
    promo.className = 'game-promo';
    promo.style.background = `linear-gradient(rgba(8, 15, 26, 0.59) 0%, rgba(17, 17, 46, 0.46) 100%) center center / cover fixed, url('${image}') center center no-repeat`;
    promo.style.backgroundSize = 'cover';
    this.link.append(promo);

    // this.image = document.createElement('img');
    // this.image.className = 'promo-image';
    // this.image.setAttribute('src', `${image}`);
    // promo.append(this.image);

    this.title = document.createElement('span');
    this.title.className = 'link-title';
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
