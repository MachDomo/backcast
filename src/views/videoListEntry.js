var VideoListEntryView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template(this.model.attributes.snippet));

    return this.$el;
  },

  template: _.template(
    ['<div class="video-list-entry media">',
      '<div class="media-left">',
      '<img class="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" />',
      '</div>',
      '<div class="media-body">',
      '<div class="video-list-entry-title"><%- title %></div>',
      '<div class="video-list-entry-detail"><%- description %></div>',
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
