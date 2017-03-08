import React, {Component} from 'react';
import _ from 'lodash'
import GET_YT_VIDEOS from '../../components/youtube-api'
import s from './_styles.css'
import Menu from '../../components/menu'
import SearchBar from '../../components/search-bar'
import VideoList from '../../components/video-list'
import VideoFull from '../../components/video-full'
import s_glob from '../../assets/styles/common.gcss'

const YOUTUBE_API_KEY = 'AIzaSyDQ2U7JCsaxQ5THm-PwqP-I8bo8yB7i4YY';
const DEFAULT_TERM = 'sense8';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            video_list: [],
            selected_video: null
        }
    }

    componentDidMount() {
        this.getVideos(DEFAULT_TERM)
    }

    getVideos(search_term) {
        let term = (search_term) ? search_term : DEFAULT_TERM;

        GET_YT_VIDEOS({key: YOUTUBE_API_KEY, term: term}, (video_list) => {
            this.setState({
                video_list: video_list,
                selected_video: video_list[0]
            })
        })
    }

    onSearchChanged = _.debounce((search_term) => {
        this.getVideos(search_term);
    }, 250)

    render() {
        return (
            <div className={s.wrap}>
                <header>
                    <a href="/" className={s.logo}>RG <mark>Youtube</mark></a>
                    <Menu />
                </header>

                <main className={s.video_wrap}>
                    <div className={s.video_full}>
                        <VideoFull video={this.state.selected_video}/>
                    </div>
                    <div className={s.video_list}>
                        <SearchBar onSearchChanged={this.onSearchChanged} />

                        <VideoList video_list={this.state.video_list} onVideoSelect={this.onVideoSelect}/>
                    </div>
                </main>

                <footer>
                    <nav>
                        <a href="https://developers.google.com/youtube/v3/docs/search/list" target="_blank">Youtube Docs</a>
                    </nav>
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