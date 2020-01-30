import supertest from 'supertest';
// import { expect } from 'chai';
import expect from 'expect';
import app from '../server/src/index';
import syncAndSeed from '../server/src/seed/syncAndSeed';

// const { sum } = require('./utils');

const request = supertest(app);
describe('my app', () => {
  beforeAll(async () => {
    // this.timeout(25000);
    await syncAndSeed();
  });

  beforeEach(() => {
    /* eslint-disable-next-line */
    // appIndex = require("../server/src/index");
  });

  afterEach(() => {
    // appIndex.close();
  });

  describe('Get /', () => {
    it('should return nice obj', () => {
      const obj = { name: 'abu', age: 32 };
      expect(obj).toStrictEqual({ name: 'abu', age: 32 });
      expect(obj).toMatchObject({ name: 'abu', age: 32 });
      expect(obj).toEqual({ name: 'abu', age: 32 });
    });

    it('test GET /baba', async () => {
      const res = await request.get('/baba');
      expect(res.header['content-type']).toContain('html');
    });

    it('send bab', async () => {
      // this.timeout(16000);
      // this.timeout(9000);
      jest.setTimeout(8000);
      const res = await request.get('/bab');
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('data', 'hurray');
    });

    it('returns foo bar', async () => {
      // expect(response.body.data).toBe('foo bar');
      // expect(response.body.data).to.equal('foo ar');
      // throw Error('failure on purpose');
    });

    it('should succeed on a . den', () => request
      .get('/foo')
      .expect(200)
      .then(res => expect(res.body.data).toBe('foo bar')));

    it('should bar from foo body', () => request
      .post('/foo')
      .send({ foo: 'bar' })
      .expect(201)
      .then(res => expect(res.body.data).toBe('BAR')));
  });

  describe('Get head', () => {
    it('set header', () => request
      .get('/head')
      .set('abu', 'lulu')
      .expect(200)
      .then(res => {
        expect(res.text).toBe('lulu');
      }));
  });

  describe('Get api/v1', () => {
    jest.setTimeout(39000);
    it('get all categories', () => request
      .get('/api/v1/categories')
      .expect(200)
      .then(res => {
        expect(res.body.some(c => c.name === 'category a')).toBeTruthy();
        expect(res.body.some(c => c.name === 'category f')).toBeFalsy();
      }));
    it('get all products', done => {
      request
        .get('/api/v1/products')
        .expect(200)
        .then(res => {
          expect(res.body.length).toBe(7);
          done();
        });
    });
    // it('should return exceptions', () => request.get('/api/v1/products'));
  });
  it('freestyle', () => {
    const obj = 'abu is assiduos';
    const arr = [2, 'ff', true];
    const o = { id: 1, name: 'gth' };
    const args = [null, undefined, '', 0, NaN, false];
    const throwEx = input => {
      if (!input) throw new Error('dabaru');
    };
    expect(obj).toMatch('abu');
    expect(obj).toMatch(/IS/i);
    expect(obj).toContain('is');
    expect(arr).toEqual(expect.arrayContaining([2, true]));
    expect(arr).toContain(2);
    expect(o).toEqual({ id: 1, name: 'gth' });
    expect(o).toHaveProperty('id', 1);
    expect(o).toMatchObject({ name: 'gth' });
    expect(o).toStrictEqual({ id: 1, name: 'gth' });
    args.forEach(a => expect(() => {
      throwEx(a);
    }).toThrow(/dA/i));
  });
  describe('FIZZBUZZ', () => {
    const getFizzbuzz = num => {
      if (typeof num !== 'number') throw new Error('invalid input value');
      if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
      if (num % 3 === 0) return 'fizz';
      if (num % 5 === 0) return 'buzz';
      return num;
    };
    it('should return a fizzbuzz', () => {
      const result = getFizzbuzz(30);
      expect(result).toMatch('izzbuzz');
    });
    it('should return fizz', () => {
      const result = getFizzbuzz(3);
      expect(result).toMatch('izz');
    });
    it('should return buzz', () => {
      const result = getFizzbuzz(5);
      expect(result).toBe('buzz');
    });
    it('should return input number', () => {
      const result = getFizzbuzz(34);
      expect(result).toBe(34);
      expect([2, 3, 5, 6]).toContain(3);
      expect([5, 6, 2, 3]).toEqual(expect.arrayContaining([3, 5, 6, 2]));
      // sum(2, 4, res => {
      // expect(res).toBe(6);
      // done();
      // });
    });
  });
  describe('TDD', () => {
    it('should get all users', done => {
      request
        .get('/users')
        .expect(200)
        .expect(res => {
          const data = [{ name: 'abu' }, { name: 'umu', age: 21 }];
          expect(res.body).toEqual(expect.arrayContaining(data));
          expect(res.status).toBe(200);
        })
        .end(done);
    });
    it('test spy', () => {
      const spy = jest.fn().mockReturnValue();
      spy();
      expect(spy).toHaveBeenCalled();
    });
    it('hello world delay by 6s', async () => {
      const getMe = Promise.resolve(33);
      // setTimeout(() => {});
      const res = await getMe;
      expect(res).toBe(33);
    });
  });

  it('hello world', () => {
    const callBackFn = cb => cb(7);
    const mockFunc = jest.fn();
    callBackFn(mockFunc);
    expect(mockFunc).toBeCalledWith(expect.any(Number));
    expect(34).toEqual(expect.any(Number));
    expect({ a: 4, b: 'hello' }).toEqual(
      expect.objectContaining({ a: expect.any(Number) }),
    );
    expect({ b: 3, c: 21, a: 21 }).toEqual({
      b: 3,
      c: expect.anything(),
      a: 21,
    });
    expect({ b: 3, c: 21, a: 21 }).toMatchObject({
      b: 3,
      c: expect.anything(),
    });
  });
});
