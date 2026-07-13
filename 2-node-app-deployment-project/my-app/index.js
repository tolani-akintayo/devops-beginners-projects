const express = require('express'); const app = express(); app.get('/', (req,res) => res.send('HELLO WORLD, VINCENT CREATED AN NPM APP')); app.listen(3000, () => console.log('Running on port 3000'))
