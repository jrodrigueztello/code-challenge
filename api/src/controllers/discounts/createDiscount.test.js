const request = require('supertest');
const app = require('../../app');
const repo = require('../../repositories/discounts/discountsRepository');
const sinon = require('sinon');
const path = '/discounts';

const expectedError = new Error('the expected error');
const data = {
  tipo_descuento: 'test',
  porcentaje_descuento: 1,
};
const dataFake = {
  porcentaje_descuento: 1,
};
const response = { data: 'SOME-DATA' };
describe(`POST ${path}`, () => {
  describe('valid and invalid parameters', () => {
    beforeEach(() => {
      sinon.stub(repo, 'createDiscount').returns(response);
    });
    afterEach(() => {
      repo.createDiscount.restore();
    });
    it('when send fine params', async () => {
      const res = await request(app).post(path).send(data);
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(response);
    });

    it('when send bad params', async () => {
      const res = await request(app).post(path).send(dataFake);
      expect(res.status).toEqual(400);
    });
  });

  describe('failed process', () => {
    beforeEach(() => {
      sinon.stub(repo, 'createDiscount').rejects(expectedError);
    });
    afterEach(() => {
      repo.createDiscount.restore();
    });
    it('when send fine params', async () => {
      const res = await request(app).post(path).send(data);
      expect(res.status).toEqual(500);
    });
  });

  describe('fine process', () => {
    beforeEach(() => {
      sinon.stub(repo, 'createDiscount').returns(response);
    });
    afterEach(() => {
      repo.createDiscount.restore();
    });
    it('when send fine params', async () => {
      const res = await request(app).post(path).send(data);
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(response);
    });
  });
});
