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