const notFound = (req, res) => res.status(404).json({message: "The route you are trying to hit is not on this server"});

// res.send;

module.exports = notFound;