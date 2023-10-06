const pianoKeys = document.querySelectorAll('.key')
function playSound(newurl){
    new Audio(newurl).play()
}

pianoKeys.forEach((pianoKey , i ) =>  {

    const newurl = '24/key' + (i+1) + '.mp3'
    pianoKey.addEventListener('click' , () => playSound(newurl))

})