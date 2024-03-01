// server.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/saveFormData', async (req, res) => {
  try {
    const formData = req.body;
    const filePath = "D:\\my projects\\portfolio\\server\\data.json";

    const existingData = await fs.readFile(filePath, 'utf-8');
    const parsedData = existingData ? JSON.parse(existingData) : [];

    parsedData.push(formData);

    await fs.writeFile(filePath, JSON.stringify(parsedData));

    res.status(200).json({ success: true, message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
