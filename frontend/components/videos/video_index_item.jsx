import React from 'react';
import { timeConvert } from '../../util/date_util';

const VideoIndexItem = ({ video, user }) => {
  // debugger
  return (
    <div className="video-item-container">
      <section className="video-item-inner-container">
        <img src={window.thumbnail} className="video-thumbnail"/>
        <div className="video-item-info">
          <img src={window.dummyChannelPic} className="channel-image"/>
          <div>
            <div>
              <h3>{video.title}</h3>
            </div>
            <div>
              <div>
                <span>{user.username}</span>
              </div>
              <div>
                <span>{`${video.view_count} views`}</span>
                <span>{" \u2022 "}</span>
                <span>{timeConvert(video.created_at)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



export default VideoIndexItem;

{/* <video width="300" controls="controls" preload="metadata">
        <source src={video.videoUrl} type="video/mp4"/>
      </video> */}