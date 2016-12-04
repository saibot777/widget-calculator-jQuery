(function ($, undefined) {

  var buttons = [
    { label: 'MR' },
    { label: 'MS' },
    { label: 'MC' },
    { label: 'Clear', classname: 'dw-calculator-clear dw-calculator-clearfix' },
    { label: 'CE' },
    { label: '*', classname: 'dw-calculator-times' },
    { label: 7, classname: 'dw-calculator-clearfix' },
    { label: 8 },
    { label: 9 },
    { label: '+', classname: 'dw-calculator-plus' },
    { label: 4, classname: 'dw-calculator-clearfix' },
    { label: 5 },
    { label: 6 },
    { label: '-', classname: 'dw-calculator-minus' },
    { label: 1, classname: 'dw-calculator-clearfix' },
    { label: 2 },
    { label: 3 },
    { label: '/', classname: 'dw-calculator-divide' },
    { label: 0, classname: 'dw-calculator-clearfix dw-calculator-wide' },
    { label: '.', classname: 'dw-calculator-dot' },
    { label: '=', classname: 'dw-calculator-equals' }
  ];

  $.widget('frenzy.calculator', {
    version: '0.0.1',

    _create: function () {
      this.element.addClass('dw-calculator');
      this._createWrapper();
      this._createButtons();
      this._renderMarkup();
    },

    _createWrapper: function () {
      var el = $('<div/>'),
        displays;
        this.shell = el.clone().addClass('dw-calculator-shell');
        displays = el.clone().addClass('dw-calculator-displays').appendTo(this.shell);
        el.clone().addClass('dw-calculator-calculation').appendTo(displays);
        el.clone().addClass('dw-calculator-display').appendTo(displays);
    },

    _createButtons: function () {
      var el = $('<button/>'),
        container = $('<div/>').addClass('ui-helper-clearfix'),
        widget = this;

      $.each(buttons, function(i, button) {
        var btn = el.clone().text(button.label).appendTo(container).button();
        if (!!button.classname) {
          btn.addClass(button.classname);
        }
      });

      container.appendTo(this.shell);
    },

    _renderMarkup: function () {
      this.shell.appendTo(this.element);
    }
  });

}(jQuery));
