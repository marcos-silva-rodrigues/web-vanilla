import { VideoController, VideoAction } from './video.js';

function main() {
  const videoController = new VideoController('video');

  const containerControlsVideo = Array.from(video_controls.children);

  containerControlsVideo.forEach(child => {
    const actionType = child.type;

    // bind action
    VideoAction?.[actionType](child, videoController);
  });
}

main();