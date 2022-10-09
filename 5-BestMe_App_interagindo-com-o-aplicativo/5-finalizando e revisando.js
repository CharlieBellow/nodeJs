const questions = [
  "o que aprendi hoje?",
  "o que me deixou aborrecido? e o que eu poderia fazer pra melhorar?", 
  "e o que me deixou feliz hoje ? ",
  "quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
  return process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if (answers.length < questions.length) {
    ask(answers.length)
  } else {
    console.log(answers);
    process.exit() 
  }
}) 

// fazer o evento ouvir o processo de exit 
process.on('exit', () => {
  console.log(`
  Bacana Charlie!
  
  o que você aprendeu hoje foi:
  ${answers[0]}
  
  o que te aborreceu e você poderia melhorar foi:
  ${answers[1]}

  o que te deixou feliz hoje foi:
  ${answers[2]}

  você ajudou ${answers[3]} hoje:

  volte amanhã para novas reflexões..
  
  `);
})

// isso pode ser usado como um app que ajuda as pessoas a valorizarem suas conquistas;