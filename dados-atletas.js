class Atleta {
    constructor(nome,idade,peso,altura,notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas 
    }
    
    calculaCategoria(){
        if (this.idade>= 9 && this.idade<=11){
            return "Infantil"
        }
        
        else if (this.idade>= 12 && this.idade<=13){
            return "Juvenil"
        }
        
        else if (this.idade>= 14 && this.idade<=16){
            return "Intemediário"
        }
        
        else if (this.idade>= 16 && this.idade<=30){
            return "Adulto"
            
        }
        else if (this.idade<9 || this.idade>30){
            return "Sem categoria"
        }
        
    }
    
    calculaMediaValida(){
        this.notas = this.notas.sort()
        this.notas = this.notas.slice[1,4]
        let soma = 0
        this.notas.forEach(function(nota){
            soma =soma+nota
        })
        return soma/(this.notas.length)
        
    }

    calculaIMC(){
        return this.peso/(this.altura*this.altura)
        
    }
    
    obtemNomeAtleta(){
        return console.log(`Nome: ${this.nome}`)
    }
    
    obtemIdadeAtleta(){
        return console.log(`Idade: ${this.idade}`)
    }
    
    obtemPesoAtleta(){
        return console.log(`Peso: ${this.peso}`)
    }
    
    obtemNotasAtleta(){
        return console.log(`Notas: ${this.notas.sort()}`)
    }
    obtemCategoria(){
        if (this.idade>= 9 && this.idade<=11){
            return console.log("Categoria: Infantil")
        }
        
        else if (this.idade>= 12 && this.idade<=13){
            return console.log("Categoria: Juvenil")
        }
        
        else if (this.idade>= 14 && this.idade<=16){
            return console.log("Categoria: Intemediário")
        }
        
        else if (this.idade>= 16 && this.idade<=30){
            return console.log("Categoria: Adulto")
            
        }
        else if (this.idade<9 || this.idade>30){
            return console.log("Categoria: Sem categoria")
        }

    }
    
    obtemIMC(){
    let imc = this.peso/(this.altura*this.altura)
    return console.log(`IMC: ${imc}`)
    }
    obtemMediaValida(){
        this.notas = this.notas.sort()
        let soma = this.notas[1] + this.notas[2] + this.notas[3]
        
        let media = soma/3
        return console.log(`Média válida: ${media}`)

        }
        
    
}
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
    
atleta.obtemNomeAtleta()
atleta.obtemIdadeAtleta()
atleta.obtemPesoAtleta()
atleta.obtemNotasAtleta()
atleta.obtemCategoria()
atleta.obtemIMC()
atleta.obtemMediaValida()
