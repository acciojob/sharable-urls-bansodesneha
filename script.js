// your code here
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const button = document.getElementById("button");
const url = document.getElementById("url");

button.addEventListener("click", function () {
    let baseUrl = "https://localhost:8080/";
    let params = [];

    if (nameInput.value.trim() !== "") {
        params.push(`name=${encodeURIComponent(nameInput.value.trim())}`);
    }

    if (yearInput.value.trim() !== "") {
        params.push(`year=${encodeURIComponent(yearInput.value.trim())}`);
    }

    if (params.length > 0) {
        baseUrl += "?" + params.join("&");
    }

    url.textContent = baseUrl;
});