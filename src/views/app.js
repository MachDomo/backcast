var AppView = Backbone.View.extend({

  el: '#app',
  // videos: new Videos(exampleVideoData),
  //videoListView: new VideoListView({collection: this.videos}),

  initialize: function() {
    console.log(this.videos);
    //this.render();
  },


  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      el: this.$('.list'),
      collection: this.collection
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      model: this.collection.at(0)
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
