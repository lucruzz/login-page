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

changeBackground();