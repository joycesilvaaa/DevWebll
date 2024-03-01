alert('Calcule sua média final!')
const n1 = Number(prompt('Digite a 1° nota: '))
const n2 = Number(prompt('Digite a 2° nota: '))
const n3 = Number(prompt('Digite a 3° nota: '))

const media = ((2 * n1) + (5 * n2) + (3 * n3))/ 10

media.toFixed(1)

let classificação 

if (media >= 0 && media < 5){
    classificação = 'F'
}
else if (media < 6){
    classificação = 'E'
}
else if (media < 7){
    classificação = 'D'
}
else if (media < 8){
    classificação = 'C'
}
else if (media < 9){
    classificação = 'B'
}
else {
    classificação = 'A'
}

alert(`A média do aluno é ${media} e sua classificação é ${classificação}`)