const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.json());

// https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error
const PORT = process.env.PORT || 8080;

const dbConnection = require('./dbconnection');
const {Resume, Section} = require('./models');

const apiRouter = express.Router();

apiRouter.post('/resumes', (req, res) => {
  const {name, description} = req.body;
  const resume = new Resume({name, description});

  resume.save();

  res.json(resume);
});

apiRouter.get('/resume/:id', async (req, res) => {
  const resume = await Resume.findById(req.params.id);

  res.json(resume);
});

apiRouter.put('/resume/:id', async (req, res) => {
  const resume = await Resume.findById(req.params.id);

  const {name, description, sections} = req.body;

  resume.name = name;
  resume.description = description;
  resume.sections = sections;

  resume.save();

  res.json(resume);
});

app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

server.listen(PORT);
