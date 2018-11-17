import { NativeModules } from 'react-native';
import getValue from './getValue';

const bridge = NativeModules.RNTestLib;

export default {
  getValue: () => getValue(bridge),
};
