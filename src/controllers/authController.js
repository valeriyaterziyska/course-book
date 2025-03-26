const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    const userData = req.body;

    console.log(userData);
    
});



module.exports = router;