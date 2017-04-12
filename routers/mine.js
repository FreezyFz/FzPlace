var express = require('express'),
    mine   = require('../controllers/mine'),
    page2  = require('../controllers/page2'),
    page3  = require('../controllers/page3'),
    page4  = require('../controllers/page4'),
    page5  = require('../controllers/page5'),
    person = require('../controllers/person'),
    router  = express.Router();

router.route('/').get(mine);
router.route('/person').post(person);

module.exports = router;
