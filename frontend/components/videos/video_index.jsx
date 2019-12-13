import React from 'react';
import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.displayAllVideos = this.displayAllVideos.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllVideos();
  }

  displayAllVideos() {
    const { videos, users } = this.props;
    const videoDivs = videos.map(video => (
      <VideoIndexItem 
        video={video} 
        user={users[video.uploader_id]} 
        key={video.id} />
      )
    )

    const dummyDivs = [1,2,3,4,5].map(el => (
      <div className="hidden-video-item" key={el}></div>
    ));

    return (
      <section className="inner-videos-container">
        {videoDivs}
        {dummyDivs}
      </section>
    )
  }

  render() {
    return (
      <main className="overall-videos-container">
        {this.displayAllVideos()}
      </main>
    )
  }
}

export default VideoIndex;