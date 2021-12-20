class Stores extends HTMLElement {
    constructor() {
      super();
      this.slideshow = this.getElementsByClassName('stores-carousel');
      this.init();
      }


    init() {
      $(this.slideshow).slick()
    };
}

customElements.define('stores-slider', Stores);