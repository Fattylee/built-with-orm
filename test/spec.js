import supertest from 'supertest';
// import { expect } from 'chai';
import expect from 'expect';
import app from '../server/src/index';
import syncAndSeed from '../server/src/seed/syncAndSeed';

const request = supertest(app);
describe('my app', () => {
  before(async function beforeFunc() {
    this.timeout(25000);
    await syncAndSeed();
  });
  beforeEach(() => {
    /* eslint-disable-next-line */
    // appIndex = require("../server/src/index");
  });
  afterEach(() => {
    // appIndex.close();
  });
  describe('Get /', async () => {
    it('should return nice obj', () => {
      const obj = { name: 'abu', age: 32 };
      expect(obj).toStrictEqual({ name: 'abu', age: 32 });
      expect(obj).toMatchObject({ name: 'abu', age: 32 });
      expect(obj).toEqual({ name: 'abu', age: 32 });
    });
    it('send bab', async function named() {
      // this.timeout(16000);
      this.timeout(9000);
      const res = await request.get('/bab');
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
      .then((res) => expect(res.body.data).toBe('foo bar')));
    it('should bar from foo body', () => request
      .post('/foo')
      .send({ foo: 'bar' })
      .expect(201)
      .then((res) => expect(res.body.data).toBe('BAR')));
    const ggghh = 677;
    console.log(ggghh, 56);
  });
  describe('Get head', () => {
    it('set header', () => request
      .get('/head')
      .set('abu', 'lulu')
      .expect(200)
      .then((res) => {
        expect(res.text).toBe('lulu');
      }));
  });
  describe('Get api/v1', () => {
    it('get all categories', () => request
      .get('/api/v1/categories')
      .expect(200)
      .then((res) => {
        expect(res.body.some((c) => c.name === 'category a')).toBeTruthy();
        expect(res.body.some((c) => c.name === 'category f')).toBeFalsy();
      }));
    it('get all products', () => request
      .get('/api/v1/products')
      .expect(200)
      .then((res) => {
        expect(res.body.length).toBe(7);
      }));
  });
  it('freestyle', () => {
    const obj = 'abu is assiduos';
    const arr = [2, 'ff', true];
    const o = { id: 1, name: 'gth' };
    const args = [null, undefined, '', 0, NaN, false];
    const throwEx = (input) => {
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
    args.forEach((a) => expect(() => {
      throwEx(a);
    }).toThrow(/dA/i));
  });
  describe('FIZZBUZZ', () => {
    const getFizzbuzz = (num) => {
      if (typeof num !== 'number') throw new Error('invalid input value');
      if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
      if (num % 3 === 0) return 'fizz';
      if (num % 5 === 0) return 'buzz';
      return num;
    };
    const max = 456;
    it('should return a fizzbuzz', () => {
      const result = getFizzbuzz(30);
      console.log(expect(result).toMatch('izzbuzz'));
    });
  });
});
