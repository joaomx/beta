export default class PortfolioScroll {
  constructor(el) {

    this.el = el;

    $(document).ready( () => {
      $(this.el).on('click', (ev) => {
//        ev.preventDefault();
        ev.stopPropagation();
        let el = $(this.el);
        let item = el.data('item');
        let options = {};

        options.scrollTarget = $('#accao');
        options.preventDefault = true;
        options.afterScroll = () => {
          console.log('item: ',$(item));
          //$(item).trigger('click');
          $(item).click();
        }

        $.smoothScroll(options);

      });
    });

  }
}
