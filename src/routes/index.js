const  {searchHandler, postHandler} =  require('../controller');

const router = (app) => {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
    app.get('/api/v1/events', searchHandler);
    app.post('/api/v1/events', postHandler);
}

module.exports = router;