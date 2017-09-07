var VideoListEntryView = Backbone.View.extend({
  // initialize: function() {
  //   $('.video-list-entry-title').on('click', function() {
  //     console.log('button work');
  //     this.model.select();
  //   }, this);
  // },

  render: function() {
    this.$el.html(this.template(this.model.attributes));

    return this.$el;
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    console.log(this.model);
    this.model.select();
    console.log(this.model);
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

// var html = [
//   '<div>',
//     '<span class="votes">',
//       this.model.get('votes'),
//     '<span>',
//     '<span class="comment">',
//       this.model.get('message'),
//     '</span>',
//     '</br>',
//   '</div>'
// ].join('');

//templateURL('src/templates/videoListEntry.html')

// '<div class="movie"> \
//                           <div class="like"> \
//                             <button><img src="images/<%- like ? \'up\' : \'down\' %>.jpg"></button> \
//                           </div> \
//                           <span class="title"><%- title %></span> \
//                           <span class="year">(<%- year %>)</span> \
//                           <div class="rating">Fan rating: <%- rating %> of 10</div> \
//                         </div>'
