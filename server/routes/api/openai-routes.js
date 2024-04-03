const router = require('express').Router();
const openAIController = require('../../controllers/openai-controller');

// Route to handle tech stack recommendation requests
router.post('/tech-stack', openAIController.getTechStackRecommendation);

module.exports = router;