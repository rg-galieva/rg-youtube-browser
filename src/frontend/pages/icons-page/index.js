import React from 'react'

function Icons() {
    let idStore = ['add', 'bag', 'battery', 'bell', 'bluetooth', 'bookmark', 'briefcase', 'calendar', 'cancel-1', 'cancel', 'clip', 'clock-1', 'clock', 'cloud', 'correct', 'credit-card', 'cursor-1', 'cursor', 'cut', 'cutlery', 'down-arrow', 'download', 'edit', 'envelope', 'export', 'favorite', 'file', 'folder', 'forward', 'gallery', 'gamepad', 'garbage', 'headphones', 'heart', 'help', 'home', 'hourglass', 'info', 'layer', 'layout', 'left-arrow-1', 'left-arrow', 'lightning', 'link', 'logout', 'magnet', 'map', 'menu', 'monitor', 'moon', 'padnote', 'paint', 'pause', 'photo-camera', 'placeholder', 'play-button', 'power', 'presentation', 'printer', 'profile', 'prohibition', 'push-pin', 'puzzle', 'refresh', 'remove', 'rewind', 'right-arrow-1', 'right-arrow', 'rocket-launch', 'screen', 'search', 'settings-1', 'settings-2', 'settings', 'share', 'shield', 'shopping-cart', 'shutter', 'smartphone', 'speech-bubble', 'speedometer', 'stats', 'store', 'sun', 'switch', 'tag', 'target', 'timer', 'unlock', 'up-arrow', 'upload', 'video-camera', 'video', 'visible', 'voice-recorder', 'volume', 'waiting', 'wifi', 'zoom-out', 'zoom', 'bag', 'battery', 'bell', 'bluetooth', 'bookmark', 'briefcase', 'calendar', 'cancel-1', 'cancel', 'clip', 'clock-1', 'clock', 'cloud', 'correct', 'credit-card', 'cursor-1', 'cursor', 'cut', 'cutlery', 'down-arrow', 'download', 'edit', 'envelope', 'export', 'favorite', 'file', 'folder', 'forward', 'gallery', 'gamepad', 'garbage', 'headphones', 'heart', 'help', 'home', 'hourglass', 'info', 'layer', 'layout', 'left-arrow-1', 'left-arrow', 'lightning', 'link', 'logout', 'magnet', 'map', 'menu', 'monitor', 'moon', 'padnote', 'paint', 'pause', 'photo-camera', 'placeholder', 'play-button', 'power', 'presentation', 'printer', 'profile', 'prohibition', 'push-pin', 'puzzle', 'refresh', 'remove', 'rewind', 'right-arrow-1', 'right-arrow', 'rocket-launch', 'screen', 'search', 'settings-1', 'settings-2', 'settings', 'share', 'shield', 'shopping-cart', 'shutter', 'smartphone', 'speech-bubble', 'speedometer', 'stats', 'store', 'sun', 'switch', 'tag', 'target', 'timer', 'unlock', 'up-arrow', 'upload', 'video-camera', 'video', 'visible', 'voice-recorder', 'volume', 'waiting', 'wifi', 'zoom-out', 'zoom'];

    let copyName = (txt) => (ev) => {
        ev.preventDefault();
        let targetIcon = document.getElementById('targetIcon');
        targetIcon.value = txt;
        targetIcon.select();
        document.execCommand('copy');
    };

    let svg = idStore.map((el) => (
        <svg width="36px" height="36px" key={Math.random()} onClick={copyName(el)}>
            <use xlinkHref={'../../vendor/icons.svg#' + el}/>
        </svg>
    ));


    return (
        <div>
            <div style={{textAlign: "center"}}>
                <h4>Click on any icon to copy the name</h4>
                <input id="targetIcon" style={{display: "block", width: "30%", border: "none", lineHeight: "1.5rem", padding: "0 .5rem", margin: "1rem auto", background: "#f7f7f7"}}/><br />
            </div>
            {svg}
        </div>
    );
}

export default Icons;

