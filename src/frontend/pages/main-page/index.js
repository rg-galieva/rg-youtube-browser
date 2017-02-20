import React, {Component} from 'react';
import GET_YT_VIDEOS from '../../components/youtube-api'
import s from './_styles.css'
import SearchBar from '../../components/search-bar'
import VideoList from '../../components/video-list'
import VideoFull from '../../components/video-full'
import s_glob from '../../assets/styles/common.gcss'

const YOUTUBE_API_KEY = 'AIzaSyDQ2U7JCsaxQ5THm-PwqP-I8bo8yB7i4YY';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            video_list: [],
            selected_video: null
        }
    }

    componentDidMount() {
        this.getVideos('ocean')
    }

    getVideos(search_term) {
        GET_YT_VIDEOS({key: YOUTUBE_API_KEY, term: search_term}, (video_list) => {
            this.setState({
                video_list: video_list,
                selected_video: video_list[0]
            })
        })
    }

    render() {
        return (
            <div className={s.wrap}>
                <header>
                    <a href="/" className={s.logo}>Radium Videobrowser</a>
                </header>

                <main className={s.video_wrap}>
                    <div className={s.video_full}>
                        <VideoFull video={this.state.selected_video}/>
                    </div>
                    <div className={s.video_list}>
                        <SearchBar/>

                        <VideoList video_list={this.state.video_list} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </main>

                <footer>
                    <p>&copy; 2017 Regina Radium</p>
                </footer>
            </div>
        );
    }

    onVideoSelect = (selected_video) => {
        this.setState({
            selected_video: selected_video
        })
    }
}

export default MainPage;