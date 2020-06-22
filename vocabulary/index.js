function changeTable(color) {
  // here request to dataBase with userID and with rules for words
  console.log(`change to ${color}`);
}

function change() {
  const active_color_element = document.querySelector('div.active-bg');
  const active_color = active_color_element.getAttribute('data-mode_color');
  const change_on_element = event.target;
  const change_on = change_on_element.getAttribute('data-mode_color')
  const main = document.querySelector('main.main');

  if (active_color !== change_on) {
    active_color_element.classList.remove('active-bg');
    change_on_element.classList.add('active-bg');
    main.classList = (`main bg-${change_on}`);
    changeTable(change_on);
  }
}

document.querySelector('div.tabs-row').addEventListener("click", change)