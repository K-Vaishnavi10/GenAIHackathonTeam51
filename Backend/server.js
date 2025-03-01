const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for frontend access

app.get('/', (req, res) => {
    res.send("✅ Backend is running...");
});

app.post('/generate-logo', (req, res) => {
    const { description } = req.body;
    console.log("📩 Request received:", req.body);

    // Example response (update this with actual logo generation logic)
    const logoUrl = `https://via.placeholder.com/300.png?text=${encodeURIComponent(description)}`; // Fixed template string syntax

    console.log("🖼 Sending response:", { logoUrl });
    res.json({ logoUrl });
});

// Start the server on port 5000
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`)); // Fixed template string
