const request = require('supertest');
const app = require('../../app');
const repo = require('../../repositories/customers/customerRepository');
const sinon = require('sinon');
const path = '/customers';

const expectedError = new Error('the expected error');
const data = {
  usuario: 'test-usuario',
  nombre_completo: 'test-usuario',
  tipo: 'AFILIADO',
};
const dataFake = {
  nombre_completo: 'test-usuario',
  tipo: 'AFILIADO',
};
const response = { data: 'SOME-DATA' };
describe(`POST ${path}`, () => {
  describe('valid and invalid parameters', () => {
    beforeEach(() => {
      sinon.stub(repo, 'createCustomer').returns(response);
    });
    afterEach(() => {
      repo.createCustomer.restore();
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
      sinon.stub(repo, 'createCustomer').rejects(expectedError);
    });
    afterEach(() => {
      repo.createCustomer.restore();
    });
    it('when send fine params', async () => {
      const res = await request(app).post(path).send(data);
      expect(res.status).toEqual(500);
    });
  });

  describe('fine process', () => {
    beforeEach(() => {
      sinon.stub(repo, 'createCustomer').returns(response);
    });
    afterEach(() => {
      repo.createCustomer.restore();
    });
    it('when send fine params', async () => {
      const res = await request(app).post(path).send(data);
      expect(res.status).toEqual(200);
      expect(res.body).toEqual(response);
    });
  });
});
