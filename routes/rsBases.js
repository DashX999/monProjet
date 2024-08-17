

const express = require('express');

const route = express.Router();


// La route Mère

route.get('/Za8GDr2gxod1a0P0rCWAx0EtMv1v16a11a1P1', (req, res) =>{
    res.render('Za8GDr2gxod1a0P0rCWAx0EtMv1v16a11a1P1');
});

// Day 1

route.get('/Za8GDr2gxod1a1PxrCWAx0EtMv1v16a11a1P1', (req, res) =>{
    res.render('zBase1');
});

// Day 2

route.get('/Za8GDr2gxod1a2PxrCWAx0EtMv1v16a11a1P1', (req, res) =>{
    res.render('zBase2');
});

// Day 3

route.get('/Za8GDr2gxod1a3PxrCWAx0EtMv1v16a11a1P1', (req, res) =>{
    res.render('zBase3');
});

// Day 4

route.get('/Za8GDr2gxod1a4PxrCWAx0EtMv1v16a11a1P1', (req, res) =>{
    res.render('zBase4');
});

// Day 5

route.get('/Za8GDr2gxod1a5PxrCWAx0EtMv1v16a11a1P1', (req, res) =>{
    res.render('zBase5');
});

// Day 6

route.get('/Za8GDr2gxod1a6PxrCWAx0EtMv1v16a11a1P1', (req, res) =>{
    res.render('zBase6');
});

// Day 7

route.get('/Za8GDr2gxod1a7PxrCWAx0EtMv1v16a11a1P1', (req, res) =>{
    res.render('zBase7');
});

// Day 8

route.get('/Za8GDr2gxod1a8PxrCWAx0EtMv1v16a11a1P1', (req, res) =>{
    res.render('zBase8');
});

// Day 9

route.get('/Za8GDr2gxod1a9PxrCWAx0EtMv1v16a11a1P1', (req, res) =>{
    res.render('zBase9');
});

// Day 10

route.get('/Za8GDr2gxod1a10PxrCWAx0EtMv1v16a11a1P1', (req, res) =>{
    res.render('zBase10');
});

// Bonus 1

route.get('/bonus1', (req, res) =>{
    res.render('zBase-Bonus1');
});

// Bonus 2

route.get('/bonus2', (req, res) =>{
    res.render('zBase-Bonus2');
});


module.exports = route;