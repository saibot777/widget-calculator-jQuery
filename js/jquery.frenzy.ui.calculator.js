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
    options: {
      buttons: buttons,
      showOnCreate: false,
      show: false,
      hide: false,
      beforeAddButtons: null,
      shown: null,
      hidden: null
    },

    _create: function () {
      this.element.addClass('dw-calculator');
      this._createWrapper();
      this._createButtons();
      this._renderMarkup();
    },

    _createWrapper: function () {
      var el = $('<div/>'),
        widget = this,
        displays;

        this.shell = el.clone().addClass('dw-calculator-shell');
        displays = el.clone().addClass('dw-calculator-displays').appendTo(this.shell);
        el.clone().addClass('dw-calculator-calculation').appendTo(displays);
        el.clone().addClass('dw-calculator-display').appendTo(displays);

        if (!this.options.showOnCreate) {
          this._hide(this.element, this.options.hide, function() {
            widget._trigger('hidden');
          });
        }
    },

    _createButtons: function () {
      var el = $('<button/>'),
        container = $('<div/>').addClass('ui-helper-clearfix'),
        widget = this;

      $.each(this.options.buttons, function(i, button) {
        if (widget._trigger('beforeAddButton', null, button)) {
          var btn = el.clone().text(button.label).appendTo(container).button();
          if (!!button.classname) {
            btn.addClass(button.classname);
          }
        }

      });

      container.appendTo(this.shell);
    },

    _renderMarkup: function () {
      this.shell.appendTo(this.element);
    },

    _setOptions: function (options) {
      this._superApply(arguments);
    },

    _setOption: function(key, val) {
      this._super(key, val);

      if (key === 'buttons') {
        this.shell.find('button').remove();
        this._createButtons();
        this.renderMarkup();
      } else if (key === 'disabled') {
        this.shell.find('button').button('option', key, val);
      }
    },

    _destroy: function () {
      this.element.removeClass('dw-calculator');
      this.element.empty();
    },

    show: function () {
      var widget = this;
      this._show(this.element, this.options.show, function () {
        widget._trigger('shown');
      });
    }
  });

}(jQuery));
