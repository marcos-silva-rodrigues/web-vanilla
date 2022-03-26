import {
  getVideoElementByIdOrThrowError,
  serializeVolumeValue,
  setOnChange,
  setOnClick,
} from "./utils.js";

class VideoController {
  constructor(id) {
    this.ref = getVideoElementByIdOrThrowError(id);
  }

  play() {
    this.ref.play();
  }

  pause() {
    this.ref.pause();
  }

  stop() {
    // this.ref?.pause();
    // this.ref?.currentTime = 0;
    this.ref.load();
  }

  muted() {
    const hasMuted = this.ref.muted;

    if (hasMuted) {
      this.ref.muted = false;
    } else {
      this.ref.muted = true;
    }
  }

  full() {
    this.ref.webkitEnterFullScreen();
  }

  changeVolume(vol) {
    const newVolumeValue = serializeVolumeValue(vol);
    this.ref.volume = newVolumeValue;
  }
}

const VideoAction = {
  submit: setOnClick,
  range: setOnChange,
};

export { VideoController, VideoAction };
