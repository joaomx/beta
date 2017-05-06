export default class Scrollable {
  constructor(el) {

    this.el = el;

    $(document).ready( () => {
      $(this.el).on('click', (ev) => {

        let el = $(this.el);
        let href = el.data('href');
        let offset = el.data('offset');
        let options = {};

        options.scrollTarget = $(href);
        options.preventDefault = true;
        options.offset = offset;


        $.smoothScroll(options);

      });
    });

  }
}
