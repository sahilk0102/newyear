let clickCount = 0;

function moveButton() {
    const button = document.getElementById("interactiveButton");

    clickCount++;

    if (clickCount < 5) {
        // Move the button by 500 pixels in a random direction
        const angle = Math.random() * 2 * Math.PI; // Random angle in radians
        const distance = 20; // Adjusted distance in pixels

        const offsetX = distance * Math.cos(angle);
        const offsetY = distance * Math.sin(angle);

        button.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        // Change the button text with a different message
        const messages = [
            "Dhang se click kr na !!",
            "Pagal hai kya!! Click Properly.",
            "Chotti bacchi hai kya ?!! Acche se daba na",
            "Accha chal last time click krde."
        ];

        button.textContent = messages[clickCount - 1];
    } else {
        // After 4 clicks, reset button position, open the drive link, and reset text
        button.style.transform = "translate(0, 0)";
        clickCount = 0;

        // Open the drive link (replace 'YOUR_DRIVE_LINK' with the actual link)
        window.open('https://drive.google.com/file/d/1epAYBGcoyAidoRllrDP3cXgs0yn7dzDU/view?usp=sharing', '_blank');

        // Reset the button text
        button.textContent = "Sanyukta click this.";
    }
}
