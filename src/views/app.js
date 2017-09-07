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
    return this;
  },

  template: templateURL('src/templates/app.html')

});
