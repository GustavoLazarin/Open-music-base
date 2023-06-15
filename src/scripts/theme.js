/* Desenvolva sua lógica aqui ... */

export const darkMode = () => {
    const darkModeButton = document.querySelector('header > button');
    darkModeButton.addEventListener('click', () => {
        const html = document.querySelector('html');

        html.classList.toggle('dark-mode');
        
        let darkMode = html.classList.contains('dark-mode');
        localStorage.setItem('@openMusic:darkMode', darkMode);

        if (darkMode) {
            darkModeIco.src = './src/assets/img/sun-ico.svg'
        } else {
            darkModeIco.src = './src/assets/img/moon-ico.svg'
            html.classList.remove('dark-mode');
        }
    })

    let darkModePrefference = JSON.parse(localStorage.getItem('@openMusic:darkMode'));
    const html = document.querySelector('html');
    
    //Substituindo o texto 'Dark Mode' por uma img - icone;
    darkModeButton.innerHTML = '<img src="./src/assets/img/moon-ico.svg" alt="dark-mode-btn">'
    const darkModeIco = document.querySelector('header > button > img');
    
    if (darkModePrefference) {
        darkModeIco.src = './src/assets/img/sun-ico.svg'
        html.classList.add('dark-mode');
    } else {
        darkModeIco.src = './src/assets/img/moon-ico.svg'
        html.classList.remove('dark-mode');
    }
}

