const coolFeature = async (bridgeOperations) => {
  try {
    const value = await bridgeOperations.getValue();
    const { id } = await bridgeOperations.requestDeviceId();
    return `Device: ${id}, says you are seeing ${value}`;
  } catch (e) {
    throw (new Error(e));
  }
};

export default coolFeature;
