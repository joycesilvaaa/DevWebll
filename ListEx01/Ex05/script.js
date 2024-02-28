const n1 = Number(prompt('Digite um numero: '))
const sinal = prompt('Digite uma operação como o exemplo: (Ex: soma ou subtração) ')
const n2 = Number(prompt('Digite um segundo valor: '))

function verificaVariavel(n1, n2){
    if (n1 === null){
        n1 = 0
    }
    if (n2 === null){
        n2 = 0
    }
}

function verificaSinal(sinal){
    if (sinal === 'soma'){
         return '+'
    }
    else if (sinal === 'subtração'){
        return '-'
    }
    else{
        return alert('Operador não encontrado, por favor digite novamente!')
    }
}

function calcula(n1, n2, sinal){
    verificaVariavel()
    const operador = verificaSinal(sinal)
    if (operador === '+'){
        return alert( n1 + n2)
    }
    else if (operador === '-'){
        return alert(n1 - n2)
    }
    else{
        return operador
    }
}

calcula(n1,n2, sinal)