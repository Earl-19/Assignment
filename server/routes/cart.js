const express = require('express');
const router = express.Router();
const db = require('../db');

// Dummy user ID for demonstration purposes
const userId = 1;

router.get('/', (req, res) => {
    const sql = `
        SELECT products.name, products.price, cart_items.quantity 
        FROM cart_items 
        JOIN products ON cart_items.product_id = products.product_id 
        WHERE cart_items.user_id = ?
    `;
    db.query(sql, [userId], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;
