const express = require('express');
const cors = require('cors');
const { layoutProcess } = require('bpmn-auto-layout');

const app = express();
app.use(express.json()); 
app.use(cors());

app.post('/parse', (req, res) => {
  const xml = req.body.data;
  layoutProcess(xml)
    .then(layoutedXml => {
      res.send(layoutedXml);
    })
    .catch(err => {
      console.error('Error during BPMN auto-layout:', err);
      res.status(500).send('Error processing BPMN XML for layout.');
    });

    
});

app.listen(3000, () => {
  console.log('BPMN layout parser running on http://localhost:3000');
});
