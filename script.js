document.getElementById("loadBtn").addEventListener("click", loadCat);

async function loadCat() {
    const apiKey = "live_qZKdEa7XvejW4koZxkvKv64ryAOxuW8rlFnL2uzRHUYRgx55UYSp5o6nXgmK0TxD";
    const url = "https://api.thecatapi.com/v1/images/search?include_breeds=true";