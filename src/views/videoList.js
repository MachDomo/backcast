var VideoListView = Backbone.View.extend({

  // initialize: function() {
  //   this.render();
  // },


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // this.collection.forEach(this.renderEntry, this);
    //console.log(this.$el)
    //loop through this.videos
    this.collection.forEach(this.renderEntry, this);
    //for each video
    //this.renderEntry(video)
    return this;
  },

  renderEntry: function(entry) {
    let videoView = new VideoListEntryView({model: entry});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
