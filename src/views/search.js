var SearchView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  events: {
    'click .btn': 'handleClick'
  },

  handleClick: function() {
    var text = $('.form-control').val();
    console.log(text);
    this.collection.search(text);
    this.render();
  },

  //

  template: templateURL('src/templates/search.html')

});
