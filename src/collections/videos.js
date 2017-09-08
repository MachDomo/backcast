var Videos = Backbone.Collection.extend({

  model: Video,


  search: function(string) {
    console.log(string);
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {q: string,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: true
      },
      contentType: 'application/json',
      outerScope: this,

      success: function(data) {
        console.log(data);
        console.log('get request success');
        this.outerScope.reset(data.items);
        //this.outerScope.add(data.items);
        console.log(this.outerScope);
        //this.add(data.items);
        //console.log(this.collection);
      },

      error: function(){
        console.log('Error: failed search.');
      }
    });

  },
  parse: function(data) {
    return data.items;
  }

  //add: this.add

  // parse: function(videoData){

  // };

});

