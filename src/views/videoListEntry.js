var VideoListEntryView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template(this.model.attributes));

    return this.$el;
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  },

  template: _.template(
    ['<div class="video-list-entry media">',
      '<div class="media-left">',
      '<img class="media-object" src="<%- snippet.thumbnails.default.url %>" />',
      '</div>',
      '<div class="media-body">',
      '<div class="video-list-entry-title"><%- snippet.title %></div>',
      '<div class="video-list-entry-detail"><%- snippet.description %></div>',
      '</div>',
      '</div>'
    ].join('')
  )

});

