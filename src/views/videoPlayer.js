var VideoPlayerView = Backbone.View.extend({


  render: function() {
    console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});

// [
// '<div class="video-player">',
//   '<div class="embed-responsive embed-responsive-16by9">',
//     '<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/1w8Z0UOXVaY" allowFullScreen></iframe>',
//   '</div>',
//   '<div class="video-player-details">',
//     '<h3>Video Title</h3>',
//     '<div>Video Description</div>',
//   '</div>',
// '</div>'
// ].join('')