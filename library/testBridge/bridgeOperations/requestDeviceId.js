const requestDeviceId = (bridge, eventEmitter) => {
  bridge.requestDeviceId();
  return new Promise((resolve, reject) => {
    const listener = eventEmitter.addListener('device-id', (response) => {
      resolve(response);
      listener.remove();
    });
    // Could add a listener for errors here too
  });
};

export default requestDeviceId;
