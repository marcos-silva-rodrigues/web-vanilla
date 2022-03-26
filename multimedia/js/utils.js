function getVideoElementByIdOrThrowError(id) {
  const video = document.getElementById(id);

  if (!video) throw new Error(`Not found video element with id: ${id}`);

  return video;
}

function serializeVolumeValue(volumeValue) {
  if (volumeValue === '100') {
    return 1;
  } else {
    return parseFloat('0.'+volumeValue).toFixed(1);
  }
}

function setOnClick(child, videoControllerInstance) {
  const eventName = child.innerText;
  child.addEventListener('click', () => {
    videoControllerInstance?.[eventName]();
  });
}

function setOnChange(child, videoControllerInstance) {
  child.addEventListener('change', () => {
    const value = child.value;
    videoControllerInstance.changeVolume(value);
  });
}

export {
  getVideoElementByIdOrThrowError,
  serializeVolumeValue,
  setOnClick,
  setOnChange
}