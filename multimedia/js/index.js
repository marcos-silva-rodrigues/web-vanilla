import Storage from './storage.js';
import Telemetry from './telemetry.js';
import { VideoController, VideoAction } from './video.js';

function main() {
  const videoController = new VideoController('video');
  const videoStorage = new Storage('video');
  const listVideoStorage = new Storage('listVideo');
  const videoTelemetry = new Telemetry(videoStorage);

  const containerControlsVideo = Array.from(video_controls.children);

  // bind action for buttons
  containerControlsVideo.forEach(child => {
    const actionType = child.type;

    VideoAction?.[actionType](child, videoController);
  });

  // bind telemetry action
  videoController.registerVideoEvent('onplay', (currentTime, volume) => {
    videoTelemetry.playEvent(currentTime, volume);
  });

  videoController.registerVideoEvent('onpause', (currentTime, volume) => {
    videoTelemetry.pauseEvent(currentTime, volume);
  });

  videoController.registerVideoEvent('onvolumechange', (currentTime, volume) => {
    videoTelemetry.changeVolumeEvent(currentTime, volume);
  });

  videoController.registerVideoEvent('onabort', (currentTime, volume) => {
    videoTelemetry.abortEvent(currentTime, volume);
    const currentModel  = videoStorage.get();
    videoStorage.clear();
    const list = listVideoStorage.get();

    if (!list?.length) {
      listVideoStorage.persister(
        [currentModel]
      );
    } else {
      list.push(currentModel);
      listVideoStorage.persister(list);
    }
  });
}

main();