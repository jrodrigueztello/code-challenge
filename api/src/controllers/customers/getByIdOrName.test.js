const request = require('supertest');
const app = require('../../app');
const repo = require('../../repositories/customers/customerRepository');
const sinon = require('sinon');
const path = '/customers/';

const expectedError = new Error('the expected error');
const data = {
  identify: '123',
};
const response = { data: 'SOME-DATA' };
describe(`GET ${path}`, () => {
  describe('valid and invalid process', () => {
    const url = `${path}id`;
    beforeEach(() => {
      sinon.stub(repo, 'getByIdorName').returns(response);
    });
    afterEach(() => {
      repo.getByIdorName.restore();
    });
    it('when send fine params', async () => {
      const res = await request(app).get(url).send(data);
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(response);
    });

    it('when send bad params', async () => {
      const res = await request(app).get(url).send({ i: 12 });
      expect(res.status).toEqual(400);
    });
  });

  describe('fine process', () => {
    const url = `${path}id`;
    beforeEach(() => {
      sinon.stub(repo, 'getByIdorName').returns(response);
    });
    afterEach(() => {
      repo.getByIdorName.restore();
    });
    it('when send fine params', async () => {
      const res = await request(app).get(url).send(data);
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(response);
    });
  });

  describe('bad process', () => {
    const url = `${path}id`;
    beforeEach(() => {
      sinon.stub(repo, 'getByIdorName').rejects(expectedError);
    });
    afterEach(() => {
      repo.getByIdorName.restore();
    });
    it('when send fine params', async () => {
      const res = await request(app).get(url).send(data);
      expect(res.status).toEqual(500);
    });
  });
});
