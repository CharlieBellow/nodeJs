const questions = [
  "o que aprendi hoje?",
  "o que me deixou aborrecido? e o que eu poderia fazer pra melhorar?", 
  "e o que me deixou feliz hoje ? ",
  "quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
  return process.stdout.write(questions[index] + "\n\n\n\n")
}

ask()

process.stdin.on("data", data => {
  process.stdout.write(data.toString().trim() + '\n') /* pega o dato, transforma em string e remove qualquer espaço vazio no começo ou no fim da string e pula uma linha */
  process.exit() /* pra que o processo seja finalizado */
}) /* fica ouvindo eventos que estejam acontecendo, como or exemplo a entrada de dados ('data). nesse caso, não tem com parar o processo pq ele está nem ativo esperando a entrada de dados. então pra sair aperta ctrl+C ou coloca o process.exit() */