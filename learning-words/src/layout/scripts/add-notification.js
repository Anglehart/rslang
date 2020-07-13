function addNotification() {
  const notificationWrapper = document.querySelector('.notification');

  const para1 = document.createElement('p');
  para1.classList.add('para1');
  para1.textContent = 'Congratulations!';

  const para2 = document.createElement('p');
  para2.classList.add('para2');
  para2.textContent = "That's all for today.";

  const para3 = document.createElement('p');
  para3.classList.add('para3');
  para3.textContent = 'There are still new cards, but the daily limit has been reached. You can increase the limit in the settings, but please keep in mind that the more new cards you see, the more you will need to repeat in the near future';
  notificationWrapper.append(para1, para2, para3);

  const cardWrapper = document.querySelector('.card');
  cardWrapper.textContent = '';
}

export default addNotification;
