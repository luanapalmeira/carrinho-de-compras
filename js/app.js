let totalGeral;
limpar();

function adicionar() {
  //Recuperar valores: nome do produto, quantidade e valor
  let produto = document.getElementById("produto").value;

  let quantidade = document.getElementById("quantidade").value;

  // Verificar se o produto selecionado é válido
  if (!produto || produto.trim() === "") {
    alert("Selecione um produto válido.");
    return;
  }

  // Verificar se a quantidade inserida é válida
  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Insira uma quantidade válida.");
    return;
  }

  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  //Calcular o preço, o subtotal por produto
  let preco = quantidade * valorUnitario;
  //Adicionar na lista do carrinho
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;
  //Atualizar o valor total da compra
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral}`;
  //Limpar campo quantidade
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "R$ 0";
}
