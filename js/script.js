
function burger(isOpened) {
    var menu = document.getElementById("burger-menu");
    var x = document.getElementById("close-burger")
    if(isOpened=='True'){
        menu.style.display = "none"
        x.style.display = "none"
        document.getElementById("open-burger").style.display = "inline-block"
    }else{
        menu.style.display = "inline-block";
        x.style.display = "inline-block";

        document.getElementById("open-burger").style.display = "none"
    }
}

let dark = window.matchMedia('(prefers-color-scheme: dark)').matches || localStorage.getItem('dark')
modeSwitcher()


 function modeSwitcher(){
    if(dark){
        document.querySelector('#dark_mode_switer').innerHTML = `
        :root {
            --global-font-size: 15px;
            --global-line-height: 1.4em;
            --global-space: 10px;
            --font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
            --mono-font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
            serif;
            --background-color: #222225;
            --page-width: 60em;
            --font-color: #e8e9ed;
            --invert-font-color: #222225;
            --secondary-color: #a3abba;
            --tertiary-color: #a3abba;
            --primary-color: #62c4ff;
            --error-color: #ff3c74;
            --progress-bar-background: #3f3f44;
            --progress-bar-fill: #62c4ff;
            --code-bg-color: #3f3f44;
            --input-style: solid;
            --display-h1-decoration: none;
        }
    `
    document.querySelectorAll('.modeSwitcher').forEach(it => it.textContent = 'light mode' )
    }else{
        document.querySelector('#dark_mode_switer').innerHTML = ''
        document.querySelectorAll('.modeSwitcher').forEach(it => it.textContent = 'dark mode' )
    }
    dark = !dark

    localStorage.setItem('dark', !dark)
} 