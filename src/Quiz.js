var SongSearch = React.createClass({

    getInitialState:function() {
        return{searchString:"", playlist:[], count:0};
    },

    search:function(e) {
        var value = e.target.value;
        
        var message = value.split(" ");
        //console.log(message);

        this.setState({searchString:message});

        var songData = [];

        message.map(function(m){

            var searchURL = "https://api.spotify.com/v1/search?q="+ m +"&type=track&limit=1"

            $.get(searchURL).then(function(data) {

                songData.push(  {key : 1,
                                songName : data.tracks.items[0].name,
                                artist : data.tracks.items[0].artists[0].name,
                                album : data.tracks.items[0].album.name,
                                albumArt : data.tracks.items[0].album.images[1].url,
                                preview : data.tracks.items[0].preview_url
                });

                //console.log(songData);

                this.setState({playlist:songData});

                //console.log(state.playlist);

            //hearts to Jordan he's the best TA ever #TAgoals
            }.bind(this));

        }.bind(this))
        
        //console.log(this.state.playlist);

        if(value.length == 0){
            <EmptyString/>
        }
    
    },

    render:function() {
        //var song;

        var searchString = this.state.searchString;
        var playlist = this.state.playlist;

        //console.log(playlist);

        //var placeholder = "Write away, angsty Bach";

        return(
            <div>
                <div className="input">
                    <input onChange={this.search} placeholder="Write away, angsty Bach, you got 80 characters." maxLength="80"/>
                </div>
                <Mix data={playlist}/>
            </div>
        )
    }
});