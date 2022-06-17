const {fetchEvents, postEvent} = require('../Services');

const searchHandler = async (req, res) => {
    const { categories } = req.body;
    try {
        const response = await fetchEvents(categories);
        const { statusCode } = response;
        return res.status(statusCode).json({ response });
    } 
    catch(err) {
        return res.status(503).json({err:err.message});
    }
}

const postHandler = async (req, res) => {
    try {
        const response = await postEvent(req.body);
        const { statusCode } = response;
        return res.status(statusCode).json({ response });
    } 
    catch(err) {
        return res.status(503).json({err:err.message});
    }
}

module.exports = { searchHandler, postHandler };