const request = require('supertest')
const app = require('../app')

test('REGISTER', (done) => {
  const data = {
    name: "Test Name",
    username: "Test Username",
    email: "test@gmail.com",
    password: "123"
  }
  request(app)
    .post('/api/v1/register')
    .send(data)
    .expect('Content-Type', /json/)
    .expect(201)
    .then(response => {
      expect(response.body.status).toBe('Success')
      done()
    })
    .catch(done)
});

test('LOGIN', (done) => {
  const data = {
    email: "test@gmail.com",
    password: "123"
  }
  request(app)
    .post('/api/v1/login')
    .send(data)
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
      const token = response.body.token;
      global.testToken = token;
      expect(response.body.status).toBe('Success')
      done()
    })
    .catch(done)
});

test('GET ALL DATA USER', (done) => {
  const token = global.testToken;
  if (!token) {
    done(new Error('Token not available. Run the LOGIN test first.'));
    return;
  }
  request(app)
    .get('/api/v1/')
    .set('Authorization', `${token}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toBe('Success');
      done();
    })
    .catch(done);
});

test('GET DATA USER PROFILE', (done) => {
  const token = global.testToken;
  if (!token) {
    done(new Error('Token not available. Run the LOGIN test first.'));
    return;
  }
  request(app)
    .get('/api/v1/profile')
    .set('Authorization', `${token}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toBe('Success');
      done();
    })
    .catch(done);
});

test('UPDATE DATA USER PROFILE', (done) => {
  const token = global.testToken;
  if (!token) {
    done(new Error('Token not available. Run the LOGIN test first.'));
    return;
  }
  const data = {
    github_link: "link github updated",
    fb_link: "link facebook updated",
    ig_link: "link instagram updated"
  }
  request(app)
    .put('/api/v1/profile/update')
    .set('Authorization', `${token}`)
    .send(data)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toBe('Success');
      done();
    })
    .catch(done);
});

test('GET ALL DATA POSTINGAN', (done) => {
  const token = global.testToken;
  if (!token) {
    done(new Error('Token not available. Run the LOGIN test first.'));
    return;
  }
  request(app)
    .get('/api/v1/post')
    .set('Authorization', `${token}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toBe('Success');
      done();
    })
    .catch(done);
});

test('GET YOUR ALL DATA POST', (done) => {
  const token = global.testToken;
  if (!token) {
    done(new Error('Token not available. Run the LOGIN test first.'));
    return;
  }
  request(app)
    .get('/api/v1/post/mine')
    .set('Authorization', `${token}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toBe('Success');
      done();
    })
    .catch(done);
});

test('GET ALL DATA POSTINGAN by CATEGORY', (done) => {
  const token = global.testToken;
  if (!token) {
    done(new Error('Token not available. Run the LOGIN test first.'));
    return;
  }
  
  request(app)
    .get('/api/v1/post/category/Design')
    .set('Authorization', `${token}`)
    
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toBe('Success');
      done();
    })
    .catch(done);
});

test('GET ALL DATA POSTINGAN by TAGS', (done) => {
  const token = global.testToken;
  if (!token) {
    done(new Error('Token not available. Run the LOGIN test first.'));
    return;
  }
  
  request(app)
    .get('/api/v1/post/tags/Art')
    .set('Authorization', `${token}`)
    
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toBe('Success');
      done();
    })
    .catch(done);
});

test('GET ALL DATA POSTINGAN by TERBARU', (done) => {
  const token = global.testToken;
  if (!token) {
    done(new Error('Token not available. Run the LOGIN test first.'));
    return;
  }
  
  request(app)
    .get('/api/v1/post/terbaru')
    .set('Authorization', `${token}`)
    
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toBe('Success');
      done();
    })
    .catch(done);
});

test('GET ALL DATA POSTINGAN by TERLAMA', (done) => {
  const token = global.testToken;
  if (!token) {
    done(new Error('Token not available. Run the LOGIN test first.'));
    return;
  }
  
  request(app)
    .get('/api/v1/post/terlama')
    .set('Authorization', `${token}`)
    
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toBe('Success');
      done();
    })
    .catch(done);
});

test('LOGOUT', (done) => {
  const token = global.testToken;
  if (!token) {
    done(new Error('Token not available. Run the LOGIN test first.'));
    return;
  }
  request(app)
    .post('/api/v1/logout')
    .set('Authorization', `${token}`)
    .expect('Content-Type', /json/)
    .expect(200)
    .then((response) => {
      expect(response.body.status).toBe('Success');
      done();
    })
    .catch(done);
});

