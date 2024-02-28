const apiKey = "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";
const apiUrl = "https://api.openai.com/v1/chat/completions";
const entrada = document.querySelector("#iptQuestao");
entrada.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    enviarQuestao();
  }
});

function enviarQuestao() {
  const questao = entrada.value;
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      prompt: questao,
      max_tokens: 150,
      temperature: 0.7,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector("#resultado").innerText = data;
    });
}