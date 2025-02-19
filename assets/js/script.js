function changeBackground() {
    const time = new Date().getHours();

    let color;

    if (time >= 6 && time < 12) {
        color = "var(--color-gradient)";
    } else if(time >= 12 && time < 18) {
        color = "var(--color-gradient-orange)";
    } else {
        color = "var(--color-gradient-dark-blue)";
    }

    document.getElementById('container').style.background = color;

}

document.getElementById("form_login").addEventListener("submit", function (e) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        e.preventDefault();
        alert("Please fill in all fields.");
    }
});

changeBackground();