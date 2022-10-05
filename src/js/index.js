const btn = document.getElementById('botao')
const input = document.querySelectorAll('.caixa');

btn.addEventListener('click', btn =>  {
    btn.preventDefault()
    const mensagem = document.querySelectorAll('label')
    input.forEach((borda, indice) => {
        if(borda.value === ''){
            borda.classList.remove('borda-verde')
            borda.classList.add('borda-vermelha')
            mensagem[indice].classList.remove('alerta')
        } else{
            borda.classList.remove('borda-vermelha')
            borda.classList.add('borda-verde')
            mensagem[indice].classList.add('alerta')
        }
    })
})
