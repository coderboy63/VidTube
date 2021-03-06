import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_SINGLE_VIDEO = "RECEIVE_SINGLE_VIDEO";
export const REMOVE_VIDEO = "DELETE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";

const receiveAllVideos = (payload) => ({
  type: RECEIVE_ALL_VIDEOS,
  payload
});

const receiveSingleVideo = payload => ({
  type: RECEIVE_SINGLE_VIDEO,
  payload
});

const removeVideo = videoId => ({
  type: REMOVE_VIDEO,
  videoId
});

const receiveVideoErrors = ({ responseJSON }) => ({
  type: RECEIVE_VIDEO_ERRORS,
  messages: responseJSON
});

export const fetchAllVideos = () => dispatch => {
  return VideoAPIUtil.fetchAllVideos()
    .then(payload => dispatch(receiveAllVideos(payload)));
};

export const fetchSingleVideo = (videoId) => dispatch => {
  return VideoAPIUtil.fetchSingleVideo(videoId)
    .then(payload => dispatch(receiveSingleVideo(payload)));
};

export const createVideo = formData => dispatch => {
  return VideoAPIUtil.createVideo(formData)
    .then(
      payload => dispatch(receiveSingleVideo(payload)),
      errors => dispatch(receiveVideoErrors(errors))
    );
};

export const updateVideo = (formData, videoId) => dispatch => {
  return VideoAPIUtil.updateVideo(formData, videoId)
    .then(
      payload => dispatch(receiveSingleVideo(payload)),
      errors => dispatch(receiveVideoErrors(errors))
    );
};

export const deleteVideo = videoId => dispatch => {
  return VideoAPIUtil.deleteVideo(videoId)
    .then(() => dispatch(removeVideo(videoId)));
};