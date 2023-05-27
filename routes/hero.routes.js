module.exports = rs => {
    const router = require("express").Router();
    const controller = require('../controller/hero.controller')
    const Hero = require('../models/hero.model');

    router.post('/heroes', controller.create);

    router.get('/', controller.getAll);

    router.get('/:id', controller.getOne);

    router.delete('/', controller.deleteAll);

    router.put('/:id', controller.update);

    router.delete('/:id', controller.deleteOne);


rs.use('/v1/heroes', router);
}