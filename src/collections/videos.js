var Videos = Backbone.Collection.extend({

  model: Video,


  search: function(string) {
    console.log(string);
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {query: string,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true
      },
      contentType: 'application/json',

      success: function(data) {
        console.log(data);
        console.log('get request success');
        return Backbone.parse(data.items);
      },

      error: function(){
        console.log('Error: failed search.');
      }
    });

  },
  parse: function(data) {
    return data.items;
  }

  // parse: function(videoData){

  // };

});

