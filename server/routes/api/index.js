const router = require('express').Router();
const userRoutes = require('./user-routes');
const openAIRoutes = require('./openai-routes');

router.use('/users', userRoutes);
router.use('/openai', openAIRoutes);

module.exports = router;
