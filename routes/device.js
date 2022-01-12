var express = require('express');
var router = express.Router();

/* GET device listing. */
router.get('/', function (req, res, next) {
  const device = { name: 'macbookPro', storage: '512GB', os: 'macBig Sur' };
  res.json({
    device,
  });
  next();
});

// POST device details

router.post('/', function (req, res, next) {
  console.log('----req------', req);
  res.json({
    data: req.body,
    message: 'device updated successfully',
  });

  next();
});

module.exports = router;
