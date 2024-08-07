const url = 'https://www.youtube.com/watch?v=Mq8G_Qpu9GY&t=4s&ab_channel=GuilhermeFreire'
const url2 = 'https://www.youtube.com/watch?v=_YquLWhcf54&ab_channel=CavernaMedieval'

const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')

function openInNewTab(url){
    const win = window.open(url, '_blank')
    win.focus(url)
}

btn.addEventListener ('click', () => {
    openInNewTab(url)
}
)

function openInNewTab(url2){
    const win = window.open(url2, '_blank')
    win.focus(url2)
}

btn2.addEventListener ('click', () => {
    openInNewTab(url2)
}
)