import { NativeModules, NativeEventEmitter } from 'react-native';
import getValue from './getValue';
import requestDeviceId from './requestDeviceId';

const bridge = NativeModules.RNTestLibModule;
const eventEmitter = new NativeEventEmitter(bridge);

export default {
  getValue: () => getValue(bridge),
  requestDeviceId: () => requestDeviceId(bridge, eventEmitter),
};
