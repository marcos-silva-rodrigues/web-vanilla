export default class Telemetry {
  constructor(storage) {
    this.storage = storage;
  }

  playEvent (currentTime, volume) {
    if(currentTime === 0) {
      this.storage.persister({
        desc: ['The video has started play'],
        time: [0],
        volume: [volume]
      });
    } else {
      const myVideoTelemetry = this.storage.get();
      myVideoTelemetry?.desc?.push('the video has started play');
      myVideoTelemetry?.time?.push(currentTime);
      myVideoTelemetry?.volume?.push(volume);
      this.storage.persister(myVideoTelemetry);
    }
  }

  pauseEvent (currentTime, volume) {
    const myModel = this.storage.get();
    myModel?.desc?.push("The video has been paused");
    myModel?.time?.push(currentTime);
    myModel?.volume?.push(volume);
    this.storage.persister(myModel);
  }

  changeVolumeEvent (currentTime, volume) {
    const myModel = this.storage.get();
    myModel?.desc?.push('The volume has been changed');
    myModel?.time?.push(currentTime);
    myModel?.volume?.push(volume);
    this.storage.persister(myModel);
  }

  abortEvent (currentTime, volume) {
    const myModel = this.storage.get();
    myModel?.desc?.push('Video load aborted');
    myModel?.time?.push(currentTime);
    myModel?.volume?.push(volume);
    this.storage.persister(myModel);
  }
}