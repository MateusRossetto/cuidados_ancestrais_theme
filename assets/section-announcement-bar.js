class AnnouncementBar extends HTMLElement {
  constructor() {
    super();

    window.onresize = this.handleResize.bind(this);
    this.slideshow = this.getElementsByClassName('announcement-bar__slider')[0];

    this.init();
  }

  init() {
    this.handleResize();
  }

  handleResize(e) {
    const windowWidth = window.innerWidth || document.clientWidth || document.body.clientWidth;
    if (windowWidth < 750) {
      // inicia o slider
      if (!this.slideshow.className.includes('slick-initialized')) {
        $(this.slideshow).slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          autoplay: true,
        });  
      }
    }
    else {
      // para slider
      if (this.slideshow.className.includes('slick-initialized')) {
        $(this.slideshow).slick('unslick');
      }
    }
  }
}

customElements.define('announcement-bar', AnnouncementBar);