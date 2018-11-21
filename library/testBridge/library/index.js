import bridgeOperations from '../bridgeOperations';
import coolFeature from './coolFeature';

export default {
  coolFeature: () => coolFeature(bridgeOperations),
  ...bridgeOperations,
};
