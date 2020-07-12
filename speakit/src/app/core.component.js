export class Component {
  constructor(config) {
    this.components = config.components;
    this.template = config.template;
    this.selector = config.selector;
    this.el = null;
    this.defaultPic = '/app/assets/team17.jpg';
    this.dataLink = 'https://raw.githubusercontent.com/Anglehart/rslang-data/master/';
  }

  start() {
    this.components.forEach(this.renderComponent.bind(this));
  }

  renderComponent(c) {
    c.render();
  }

  render() {
    this.el = document.querySelector(this.selector);
    this.el.innerHTML = this.template;
    if (!(this.initComponent === undefined)) this.initComponent();
  }
}

export default Component;
