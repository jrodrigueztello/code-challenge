const request = require('supertest');
const app = require('../../app');
const repo = require('../../repositories/discounts/discountsRepository');
const sinon = require('sinon');
const path = '/discounts/';

const expectedError = new Error('the expected error');
const type = 'test';

const response = 12;
describe(`GET ${path}`, () => {
  const url = `${path}${type}`;
  describe('valid and invalid parameters', () => {
    beforeEach(() => {
      sinon.stub(repo, 'getPercentajeByType').returns(response);
    });
    afterEach(() => {
      repo.getPercentajeByType.restore();
    });
    it('when send fine params', async () => {
      const res = await request(app).get(url);
      expect(res.status).toEqual(200);
      expect(res.body.response).toEqual(response);
    });
  });

  describe('failed process', () => {
    beforeEach(() => {
      sinon.stub(repo, 'getPercentajeByType').rejects(expectedError);
    });
    afterEach(() => {
      repo.getPercentajeByType.restore();
    });
    it('when send fine params', async () => {
      const res = await request(app).get(url);
      expect(res.status).toEqual(500);
    });
  });

  describe('fine process', () => {
    beforeEach(() => {
      sinon.stub(repo, 'getPercentajeByType').returns(response);
    });
    afterEach(() => {
      repo.getPercentajeByType.restore();
    });
    it('when send fine params', async () => {
      const res = await request(app).get(url);
      expect(res.status).toEqual(200);
      expect(res.body.response).toEqual(response);
    });
  });
});
