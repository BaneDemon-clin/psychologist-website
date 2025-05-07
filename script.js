document.addEventListener("DOMContentLoaded", () => {
    fetch('https://api.countapi.xyz/hit/yourpsychologistwebsite.com/visits')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitorCounter').innerText = data.value;
        });
});
