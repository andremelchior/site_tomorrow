// Esta é a função que será chamada quando o botão for clicado (definido no HTML com onclick="calcularResto()").
function calcularResto() {
    // 1. OBTER OS VALORES DOS CAMPOS DE ENTRADA
    let valor1String = document.getElementById('valor1').value;
    let valor2String = document.getElementById('valor2').value;

    // 2. CONVERTER OS VALORES DE TEXTO PARA NÚMERO
    // Usamos a função parseFloat() para converter as strings em números com casas decimais.
    let valor1 = parseFloat(valor1String);
    let valor2 = parseFloat(valor2String);

    // 3. VERIFICAR SE OS VALORES SÃO NÚMEROS VÁLIDOS
    // isNaN() é uma função que verifica se um valor "Não é um Número" (Not-a-Number).
    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, digite valores numéricos válidos em ambos os campos.");
        return;
    }

    // 4. REALIZAR A OPERAÇÃO DE MÓDULO (RESTO DA DIVISÃO)
    // Usamos o operador de módulo '%' para calcular o resto da divisão.
    // É importante garantir que o segundo valor não seja zero, pois divisão por zero é indefinida.
    if (valor2 === 0) {
        alert("Não é possível calcular o resto da divisão por zero.");
        return;
    }
    let resultadoResto = valor1 % valor2;

    // 5. EXIBIR O RESULTADO NA PÁGINA
    document.getElementById('resultado').innerHTML = "O resto da divisão é: " + resultadoResto;
}