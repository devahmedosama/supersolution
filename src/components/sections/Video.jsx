import { useState } from 'react';
import 'react-modal-video/css/modal-video.css'
import Data from "@data/sections/video.json";
import ModalVideo from 'react-modal-video'

const VideoSection = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <a data-fancybox data-no-swup onClick={() => setOpen(true)} className="mil-video-section mil-word-1-trigger mil-accent-trigger" style={{ "cursor" : "pointer" }}>
                <div className="mil-image-frame">
                    <video className="mil-video-background mil-scale-img" data-value-1="1" data-value-2="1.1" autoPlay="autoplay" loop="loop" muted="true" playsInline="true" onContextMenu={() => false} preload="auto">
                        <source src={Data.video_file} />
                    </video>
                </div>
                <div className="mil-overlay-80" />

                <div className="mil-inner-text mil-text-center mil-p-120-120">
                    <div className="container mil-relative">
                        <div className="mil-button mil-button-lg mil-button-rounded mil-button-linear mil-button-light mil-icon mil-appearance mil-mb-30"><span><i className="fas fa-play" style={{'transform': 'translateX(2px)'}}></i></span></div>
                        <h3 className="mil-light mil-appearance mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                        <p className="mil-link mil-shortened-50 mil-softened-20 mil-appearance mx-auto">{Data.subtitle}</p>
                    </div>
                </div>
            </a>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId={Data.youtube_video_id} onClose={() => setOpen(false)} />
        </>
    );
};

export default VideoSection;