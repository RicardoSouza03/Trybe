// Taxa Metabólica Basal

// disponibilizar uma calculadora de BMR (Taxa Metabólica Basal)

let pessoa = [
    {
        age: 20,
        sex: 'M',
        weight: 80,
        heigth: 180
    },
    {
        age: 26,
        sex: 'F',
        weight: 72,
        heigth: 172
    }
]

for(let i=0; i < pessoa.length; i++){
    if(pessoa[i].sex == 'M'){
        let tmb = (pessoa[i].heigth * 6.25) + (pessoa[i].weight *  9.99) - (pessoa[i].age - 4.92) + 5
        console.log(`A taxa metabólica basal do homem é: ${tmb} Kcal`)
    }else{
        let tmb = (pessoa[i].heigth * 6.25) + (pessoa[i].weight *  9.99) - (pessoa[i].age - 4.92) - 161
        console.log(`A taxa metabólica basal da mulher é: ${tmb} Kcal`)
    }
}
