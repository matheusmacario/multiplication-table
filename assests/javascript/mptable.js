
function calculate_mptable (){

    let mptable = document.querySelector("#mptable tbody")//obtendo da Dom o tbody da tabela

    let valueA = parseInt(document.querySelector("#valueA").value)// obtendo o valorA do input number  e convertendo em integer

    mptable.innerHTML='' // limpando o conteudo de tbody

    for (let valueB = 0; valueB <= 20; valueB++){

        let result = valueA * valueB;

        // creando o template das colunas da linha atual
        let template = `
                
                <td>${valueA}</td>
                <td>x</td> 
                <td>${valueB}</td> 
                <td>=</td>
                <td>${result}</td>      
            `
        let tr=document.createElement('tr')// criando o elemento tr

        tr.innerHTML = template // inserindo as colunas na linha

        mptable.append(tr) // inserindo a linnha na tabela
            
    }
}

calculate_mptable()

//adicionando o event de alteracao no input number
document.querySelector("#valueA").addEventListener('change', calculate_mptable)
