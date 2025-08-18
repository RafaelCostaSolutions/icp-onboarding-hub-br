console.log("🚀 ICP Onboarding Hub BR carregado!");

// Acordeão funcional
document.querySelectorAll(".acordeao-titulo").forEach(btn => {
  btn.addEventListener("click", () => {
    const conteudo = btn.nextElementSibling;
    conteudo.style.display = conteudo.style.display === "block" ? "none" : "block";
  });
});

// Botões de copiar comando
document.querySelectorAll(".btn-copiar").forEach(botao => {
  botao.addEventListener("click", () => {
    const comando = botao.getAttribute("data-comando");
    navigator.clipboard.writeText(comando)
      .then(() => alert("✅ Comando copiado:\n" + comando))
      .catch(err => console.error("Erro ao copiar: ", err));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 ICP Onboarding Hub BR carregado!");

  // Botões de copiar comando
  document.querySelectorAll(".btn-copiar").forEach(botao => {
    botao.addEventListener("click", () => {
      const comando = botao.getAttribute("data-comando");
      if (!comando) {
        alert("⚠ Nenhum comando encontrado para copiar!");
        return;
      }
      navigator.clipboard.writeText(comando)
        .then(() => alert("✅ Comando copiado:\n" + comando))
        .catch(err => console.error("Erro ao copiar: ", err));
    });
  });
});
// Playground funcional
document.addEventListener("DOMContentLoaded", () => {
  const entrada = document.getElementById("entrada-playground");
  const botao = document.getElementById("executar-playground");
  const saida = document.getElementById("saida-playground");

  if (entrada && botao && saida) {
    botao.addEventListener("click", () => {
      const texto = entrada.value.trim();
      if (texto === "") {
        saida.innerHTML = "<em>Digite algo para testar...</em>";
      } else {
        // Aqui você pode customizar, por enquanto só ecoa a entrada
        saida.innerHTML = " Simulação ICP: <strong>" + texto + "</strong>";
      }
    });
  }
});
