import { NativeModules } from 'react-native';
import getValue from './getValue';

const bridge = NativeModules.RNTestLibModule;

export default {
  getValue: () => getValue(bridge),
};
