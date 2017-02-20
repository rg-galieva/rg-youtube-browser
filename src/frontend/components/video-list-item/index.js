import React from 'react'
import s from './_styles.css'

const VideoListItem = ({video, onVideoSelect}) => {
    const v = video.snippet;
    const [id, title, img_url, date, author] = [video.etag, v.title, v.thumbnails.high.url, v.publishedAt, v.channelTitle];

    const setVideoInState = (ev) => {
        console.log("---VideoListItem ", video);
        onVideoSelect(video)
    }

    return (
        <section className={s.post} onClick={setVideoInState}>
            <div className={s.post_info}>
                <h6>{title}</h6>

                <p className={s.desc}>{author}</p>
            </div>

            <div className={s.post_image}>
                <img src={img_url} alt=""/>
            </div>
        </section>
    )
}

export default VideoListItem