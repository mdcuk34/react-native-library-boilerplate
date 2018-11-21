import coolFeature from '../../library/coolFeature';

const responses = {
  value: 'A real native value',
  requestId: { id: '10001' },
};

const bridgeOperations = {
  getValue: jest.fn().mockReturnValueOnce(responses.value),
  requestDeviceId: jest.fn().mockReturnValueOnce(responses.requestId),
};

describe('Cool feature', () => {
  test('is returning a correctly structured string', async () => {
    try {
      const response = await coolFeature(bridgeOperations);
      expect(response).toBe(`Device: ${responses.requestId.id}, says you are seeing ${responses.value}`);
    } catch (e) {
      throw (e);
    }
  });
});
