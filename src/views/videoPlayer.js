var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.model = this.collection.at(0);
    this.render();

    this.collection.on('select', function(selected) {
      this.model = selected;
      this.render();
    }, this);


  },

  render: function() {

    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

