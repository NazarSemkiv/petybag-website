import React, { Component } from 'react';
import "./video.scss";

class Video extends Component {
    render() {
        return (
            <div vertical="center" horizontal="center">
                <div className="pb pb-video">
                    <div vertical="center" horizontal="between" className="p-bottom--x-large">
                        <div className="pb-video__label">
                            O Preferido Deles
                        </div>
                        <div className="pb-video__description">
                            5 minutA Pety é testada e aprovada por dezenas de cachorros que hoje são muito mais limpos e felizes
                        </div>
                    </div>

                    <div className="pb-video__video-wrapper m-top--x-large">
                        <iframe
                            className="pb-video__video"
                            src="https://www.youtube.com/embed/wnhvanMdx4s?si=4l6A9OkrX_hyGwDm"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video
