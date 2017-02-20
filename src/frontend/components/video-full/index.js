import React from 'react'
import s from './_styles.css'

const VideoFull = (props) => {
    if (!props.video) return <div>Loading...</div>;

    const v = props.video.snippet;
    const [id, title, description, img_url, date, author] = [props.video.etag, v.title, v.description, v.thumbnails.high.url, v.publishedAt, v.channelTitle];
    const url = `https://youtube.com/embed/${props.video.id.videoId}`;

    return (
        <section className={s.post}>
            <div className={s.post_image}>
                <iframe src={url}></iframe>
            </div>

            <div className={s.post_info}>
                <h4>{title}</h4>
                <p className="is-emph">{date} | by {author}</p>

                <div className={s.desc}>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    )
}

export default VideoFull


