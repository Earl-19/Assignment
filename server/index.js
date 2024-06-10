const express = require('express');
const app = express();
const db = require('./db');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
