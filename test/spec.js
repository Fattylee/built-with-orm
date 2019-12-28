import supertest from 'supertest';
import { expect } from 'chai';
import app from '../server/src/index';
import syncAndSeed from '../server/src/seed/syncAndSeed';

const request = supertest(app);
describe('my app', () => {
  before(async () => {
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
    it('should pass', () => {});
    it('returns foo bar', async () => {
      // expect(response.body.data).toBe('foo bar');
      // expect(response.body.data).to.equal('foo ar');
    });
    it('should succeed on a . den', () => request
      .get('/foo')
      .expect(200)
      .then((res) => expect(res.body.data).to.equal('foo bar')));
    it('should bar from foo body', () => request
      .post('/foo')
      .send({ foo: 'bar' })
      .expect(201)
      .then((res) => expect(res.body.data).to.equal('BAR')));
  });
  describe('Get api/v1', () => {
    it('get all categories', () => request
      .get('/api/v1/categories')
      .expect(200)
      .then((res) => {
        expect(res.body.length).to.equal(4);
      }));
    it('get all products', () => request
      .get('/api/v1/products')
      .expect(200)
      .then((res) => {
        expect(res.body.length).to.equal(7);
      }));
  });
  describe('Get head', () => {
    it('set header', () => request
      .get('/head')
      .set('abu', 'lulu')
      .expect(200)
      .then((res) => {
        expect(res.text).to.equal('lulu');
      }));
  });
});
