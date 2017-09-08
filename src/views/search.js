var SearchView = Backbone.View.extend({
  initialize: function() {
    this.render();

  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  events: {
    'click button': 'handleClick',
    'keyup input': 'handleEnter'
  },

  handleClick: function() {
    var text = $('.form-control').val();
    this.collection.search(text);
    this.render();
  },

  handleEnter: function(e) {
    if (e.keyCode === 13) {
      var text = $('.form-control').val();
      this.collection.search(text);
    }
  },

  template: templateURL('src/templates/search.html')
});


