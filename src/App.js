import React from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
 import SearchBar from './components/SearchBar' 
 import VideoList from './components/VideoList'
 import VideoDetail from './components/VideoDetail' 




class App extends React.Component {

    handleSubmit = async (searchTerm) =>{
        const response = await youtube.get("search" , {
            params: {
                part : 'snippet',
                maxResult : 5,
                key: 'AIzaSyAo-xk9f-V9QDwX3rLA7xDHgdKsd_xX4R4',
                q: searchTerm,
        }});

    }


    render() {
        return (
            <div>
                <Grid justify="center" container spacing={10}> 

                <Grid item xs={12}>

                    <Grid container spacig={16}>

                        <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit}/>

                        </Grid>
                        
                        <Grid item xs={8}>
                         <VideoDetail />

                        </Grid>
                        <Grid item xs={4}>
                               {/* Video List       */}
                        </Grid>

                    </Grid>

                </Grid>
                </Grid>
            </div>
        )
    }
}

export default App;
