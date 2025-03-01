document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Frontend script loaded...");

    // Get button and attach event listener
    document.getElementById("generateBtn").addEventListener("click", function () {
        const brandDescription = document.getElementById("brandDescription").value.trim();

        // Check if input is empty
        if (!brandDescription) {
            alert("⚠️ Please enter a brand description.");
            return;
        }

        console.log("📤 Sending request to backend...");
        console.log("📝 Brand Description:", brandDescription); // Log input value

        // Send request to backend API
        fetch("http://localhost:5000/generate-logo", {  // Adjust if backend runs on a different port
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ description: brandDescription })
        })
        .then(response => {
            console.log("📥 Received response:", response);
            return response.json();
        })
        .then(data => {
            console.log("🔄 Response from backend:", data); // Log backend response
            
            // Check if logo URL is received
            if (data.logoUrl) {
                document.getElementById("logoResult").innerHTML = 
                    `<img src="${data.logoUrl}" alt="Generated Logo" style="max-width: 300px; margin-top: 20px;">`;
            } else {
                console.error("❌ Error: No logo URL received");
                alert("⚠️ Failed to generate logo. Try again.");
            }
        })
        .catch(error => {
            console.error("❌ Error fetching data:", error);
            alert("🚨 Something went wrong. Check console for details.");
        });
    });
});