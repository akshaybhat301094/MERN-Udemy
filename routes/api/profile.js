const express = require('express');
const router = express.Router();

/**
 * @route GET api/profile
 * @description Test route
 * @access Public
 */
router.get('/', (req, res) => {
  res.send('User Profile');
});

module.exports = router;
