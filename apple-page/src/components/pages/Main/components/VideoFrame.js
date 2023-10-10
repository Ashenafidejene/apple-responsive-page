import React, { useEffect, useState } from 'react';

const VideoFrame = () => {
  const [youtubeVideo, setVideo] = useState([]);

  useEffect(() => {
    fetch(
      // "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=5&order=date&key=AIzaSyB9gyd556jphiyHoi2q1YFuNz-Z7h1Zk14"
       "/search.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
            {youtubeVideo?.map((singleVideo, i) => {
              const vidId = singleVideo.id.videoId;
              const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              const isEvenIndex = i % 2 === 0;
              const videoWrapperClassName = `col-sm-6 col-md-6 ${
                isEvenIndex ? "pull-right" : "pull-left"
              }`;

              return (
                <div key={i} className={videoWrapperClassName}>
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank" rel="noopener noreferrer">
                        <img src={singleVideo.snippet.thumbnails.high.url} alt={singleVideo.snippet.title} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank" rel="noopener noreferrer">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFrame;