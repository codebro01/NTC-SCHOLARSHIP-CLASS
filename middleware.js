// middlewares have access to both the req and res objects

app.get('/', (req, res, next) => {
// collects user image file
req.imageFile = jkjdjfdf.jpg
next();
}, (req, res, next) => {

    const imageFile = req.imageFile;
    // process the image and stores it in cloudinary
    next()
}, (req, res) => {
    //save the image url to database after storing to cloudinary
    // return  feedback to user
})