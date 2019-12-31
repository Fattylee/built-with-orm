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
    it('should succeed on a . den', () =>
      request
        .get('/foo')
        .expect(200)
        .then(res => expect(res.body.data).toBe('foo bar')));
    it('should bar from foo body', () =>
      request
        .post('/foo')
        .send({ foo: 'bar' })

        .expect(201)
        .then(res => expect(res.body.data).toBe('BAR')));
  });
  describe('Get head', () => {
    it('set header', () =>
      request
        .get('/head')
        .set('abu', 'lulu')
        .expect(200)
        .then(res => {
          expect(res.text).toBe('lulu');
        }));
  });
  describe('Get api/v1', () => {
    it('get all categories', () =>
      request
        .get('/api/v1/categories')
        .expect(200)
        .then(res => {
          expect(res.body.some(c => c.name === 'category a')).toBeTruthy();
          expect(res.body.some(c => c.name === 'category f')).toBeFalsy();
        }));
    it('get all products', () =>
      request
        .get('/api/v1/products')
        .expect(200)
        .then(res => {
          expect(res.body.length).toBe(7);
        }));
  });
});
