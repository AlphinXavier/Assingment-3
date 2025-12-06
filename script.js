document.getElementById("loadBtn").addEventListener("click", loadCat);

async function loadCat() {
    const apiKey = "live_qZKdEa7XvejW4koZxkvKv64ryAOxuW8rlFnL2uzRHUYRgx55UYSp5o6nXgmK0TxD";
    const url = "https://api.thecatapi.com/v1/images/search?include_breeds=true";

    const catImg = document.getElementById("catImg");
    const catInfo = document.getElementById("catInfo");

    // Show a loading message
    catInfo.innerHTML = "<p>Loading cat data...</p>";
    catImg.src = ""; 

    try {
        let cat;
        let attempts = 0;
        
    // Loop until we get an image with breed info or max 5 attempts
        do {
            const response = await fetch(url, {
                headers: { "x-api-key": apiKey }
            });
            const data = await response.json();
            cat = data[0];
            attempts++;
        } while ((!cat.breeds || cat.breeds.length === 0) && attempts < 5);

        // Show the image
        catImg.src = cat.url;
        catImg.alt = "Random Cat Image";

        // Display breed info if available
        if (cat.breeds && cat.breeds.length > 0) {
            const b = cat.breeds[0];
            catInfo.innerHTML = `
                <h3>${b.name}</h3>
                <p><strong>Origin:</strong> ${b.origin}</p>
                <p><strong>Temperament:</strong> ${b.temperament}</p>
                <p><strong>Description:</strong> ${b.description}</p>
                <p><strong>Life Span:</strong> ${b.life_span} years</p>
            `;
        } else {
            catInfo.innerHTML = "<p>No breed info available for this image.</p>";
        }

    } catch (err) {
        console.error(err);
        catInfo.innerHTML = "<p>Could not load cat data. Please try again.</p>";
    }
}