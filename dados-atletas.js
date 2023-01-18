class Atleta {
    constructor(nome, idade, peso, altura, notas) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
      this.notas = notas;
    }
  
    calculaCategoria() {
      if (this.idade > 8 && this.idade < 12) return "Infantil";
      if (this.idade > 11 && this.idade < 14) return "Juvenil";
      if (this.idade > 13 && this.idade < 16) return "Intermediário";
      if (this.idade > 15 && this.idade < 31) return "Adulto";
    }
  
    calcularIMC() {
      return this.peso / (this.altura * this.altura);
    }
  
    calculaMediaValida() {
        let notas = atleta.notas;
  
        // ordenar as notas da maior para a menor
        notas.sort(function (a, b){
            return a - b;
        })
      
        // remover primeiro elemento do array (menor nota)
        notas.shift();
      
        // remover último elemento do array (maior nota)
        notas.pop();
      
        let soma = 0;
        for(let y = 0; y < notas.length; y++) {
          soma = soma + notas[y]; 
        }
      
        let media = soma / notas.length  
        
        // fixa as casas decimais
        media = media.toFixed(2)

        return media
    }
    obtemNomeAtleta() {
      return this.nome;
    }
  
    obtemIdadeAtleta() {
      return this.idade;
    }
    obtemPesoAtleta() {
      return this.peso;
    }
    obtemNotasAtleta() {
      return this.notas;
    }
  
    obtemCategoria() {
      return this.calculaCategoria();
    }
  
    obtemIMC() {
      return this.calcularIMC();
    }
    obtemMediaValida() {
      return this.calculaMediaValida();
    }
  }
  
  const atleta = new Atleta(
    "Cesar Abascal",
    30,
    80,
    1.7,
    [10, 9.34, 8.42, 10, 7.88]
  );
  
  console.log("Nome: " + atleta.obtemNomeAtleta());
  console.log("Idade: " + atleta.obtemIdadeAtleta());
  console.log("Peso: " + atleta.obtemPesoAtleta());
  console.log("Notas: " + atleta.obtemNotasAtleta());
  console.log("Categoria: " + atleta.obtemCategoria());
  console.log("IMC: " + atleta.obtemIMC());
  console.log("Média válida: " + atleta.obtemMediaValida());
  