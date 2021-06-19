const router = require('express').Router();
const userRoutes = require('./userRoutes');

const articleRoutes = require('./articleRoutes');

router.use('/users', userRoutes);
router.use('/projects', articleRoutes);

module.exports = router;
