import request from 'supertest';
import * as dbHandler from './conf/dbHandler';
import app from '../app';

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

describe('Get lists of URLs', () => {
    it('Should return a status of 200', async () => {
      const res = await request(app)
        .get('/api/urls')
        .send({
          limit: 5,
          lastCreationTime: 1594309259,
          type: 'next'
        });
      expect(res.status).toEqual(200)
    })
  });

  describe('Post Url', () => {
    it('Should return a status of 200', async () => {
      const res = await request(app)
        .post('/api/url')
        .send({
          longUrl: 'facebook.com',
          creationTime: 1594309259,
          protocol: 'http'
        });
      expect(res.status).toEqual(200);
    })
  });
  

