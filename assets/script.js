// Mensagem simbólica no console
console.log("🚀 ICP Onboarding Hub BR carregado com sucesso!");

// Função para copiar o comando DFX
function copiarComando() {
  const comando = "dfx new meu_projeto";
  navigator.clipboard.writeText(comando)
    .then(() => {
      alert("✅ Comando copiado para a área de transferência:\n" + comando);
    })
    .catch(err => {
      console.error("Erro ao copiar comando: ", err);
    });
}

// Adiciona evento ao botão, se ele existir no HTML
document.addEventListener("DOMContentLoaded", () => {
  const botaoCopiar = document.getElementById("btnCopiarDFX");
  if (botaoCopiar) {
    botaoCopiar.addEventListener("click", copiarComando);
  }
});
