const Event = require("../model/index");

/**
 * @description A Service for searching for events
 * @param {string} categories -event categories of interest.
 * @returns Object
 */
const fetchEvents = async (categories) => {
  const serviceResponse = {};
  try {
    if (!categories) {
      const events = await Event.find({});
      serviceResponse.response = events;
      serviceResponse.statusCode = 200;
      return serviceResponse;
    }
    const categoryArray = categories.split("|");
    categoryArray.pop();
    const events = await Event.find({ category: categoryArray });
    serviceResponse.response = events;
    serviceResponse.statusCode = 200;
    return serviceResponse;
  } catch (err) {
    serviceResponse.error = err.message;
    serviceResponse.statusCode = 503;
    return serviceResponse;
  }
};

/**
 * @description A Service for adding events
 * @param {object} reqBody - http request body.
 * @returns Object
 */
const postEvent = async (reqBody) => {
  const serviceResponse = {};
  try {
    const { title, description, category, date, isVirtual, address } = reqBody;
    //doing a very simple validation here.
    if (
      !title ||
      !description ||
      !category ||
      !date ||
      !isVirtual ||
      !address
    ) {
      serviceResponse.response = "No field should be null or empty";
      serviceResponse.statusCode = 400;
      return serviceResponse;
    }
    const newEvent = new Event({
      title,
      description,
      category,
      date,
      isVirtual,
      address,
    });
    await newEvent.save();
    serviceResponse.response = "Event successfully Added";
    serviceResponse.statusCode = 200;
    return serviceResponse;
  } catch (err) {
    serviceResponse.error = err.message;
    serviceResponse.statusCode = 503;
    return serviceResponse;
  }
};

module.exports = { fetchEvents, postEvent };
