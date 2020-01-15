// users.test.js
import axios from 'axios';
import Users, { div, forEach, cbm } from './module-user';

jest.mock('axios');

test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});

it('mock mock mock..', () => {
  const mockFunc = jest
    .fn()
    // .mockReturnValue(5)
    .mockImplementationOnce((num1, num2) => {
      console.log(num2, num1);
      return num1 * num2;
    });

  const res = mockFunc(5, 3);
  expect(res).toBe(15);
});
it('should test forEach func', () => {
  const callback = input => {
    console.log('original callback');
    return 2 * input;
  };
  callback();
  const callbackMock = jest.fn(input => {
    console.log('mock callback');
    return 2 * input;
  });
  const res = forEach([2, 1], callbackMock);
  expect(callbackMock.mock.calls[0][0]).toBe(2);
  expect(callbackMock.mock.calls[1][0]).toBe(1);
  expect(callbackMock.mock.results[1].value).toBe(2);
  expect(res).toBeUndefined();

  const myMock = jest
    .fn()
    .mockReturnValue(4)
    .mockReturnValueOnce('once')
    .mockReturnValue(5);
  console.log(myMock(), myMock(), myMock());
});

test('div func', () => {
  const res = div(6, 2);
  expect(res).toBe(3);
});
test('cbm func', () => {
  const callback = (sum, mul) => {
    console.log('sum is', sum);
    console.log('mul is', mul);
  };
  const callbackMock = jest.fn().mockImplementation(callback);
  const res = cbm(6, 2, callbackMock);
  expect(callbackMock).toBeCalledWith(8, 12);
  expect(callbackMock).toHaveBeenCalledWith(8, 12);
  expect(res).toBeUndefined();
});
