const express = require('express'); 

const app = express(); 

const port = 3000; 

app.use(express.json()); 

let items = []; 

app.post('/items', (req, res) => { 
    const newItem = { id: items.length + 1, ...req.body }; 
    items.push(newItem); 
    res.status(201).json(newItem); 
}); 

app.get('/items', (req, res) => { 
    res.json(items); 
}); 

app.get('/items/:id', (req, res) => { 
    const item = items.find(i => i.id === parseInt(req.params.id)); 
    if (!item) return res.status(404).send('Item not found'); 
    res.json(item); 
}); 

app.put('/items/:id', (req, res) => { 
    const item = items.find(i => i.id === parseInt(req.params.id)); 
    if (!item) return res.status(404).send('Item not found'); 
    Object.assign(item, req.body); 
    res.json(item); 
}); 

app.delete('/items/:id', (req, res) => { 
    const index = items.findIndex(i => i.id === parseInt(req.params.id)); 
    if (index === -1) return res.status(404).send('Item not found'); 
    const deletedItem = items.splice(index, 1); 
    res.json(deletedItem[0]); 
}); 

app.listen(port, () => { 
    console.log(`Server running at http://localhost:${port}`); 
});
