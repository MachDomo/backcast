var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('reset', function() {
      this.render();
    }, this);
  },


  render: function() {
    this.$el.children().detach();
    this.collection.forEach(function(entry) {
      this.renderEntry(entry);
    }, this);

  },

  renderEntry: function(entry) {
    let videoView = new VideoListEntryView({model: entry});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
