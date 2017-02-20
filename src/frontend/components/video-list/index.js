import React from 'react'
import VideoListItem from '../video-list-item'

const VideoList = (props) => {
    const video_list = props.video_list.map((video) => {
        return (<VideoListItem key={video.etag}
                               video={video}
                               onVideoSelect={props.onVideoSelect}/>
        )
    });

    return <div>{video_list}</div>
}

export default VideoList