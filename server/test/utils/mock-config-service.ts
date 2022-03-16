import { configServiceConstants } from '../mocks/config-service';

export const mockConfigServiceGet = jest.fn((key: string) => {
  // this is being super extra, in the case that you need multiple keys with the `get` method

  const currentConstant = configServiceConstants.find(
    (constant) => constant.path === key,
  );

  if (currentConstant) {
    return currentConstant.value;
  }
  return undefined;
});

export const configServiceValueMock = {
  get: mockConfigServiceGet,
};
