const Groq = require('groq-sdk');

//Configure sua api key da Groq -> https://console.groq.com/playground
const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROQ_KEY });

export async function generatorDesculpa(desculpa: string) {
  console.log(desculpa)
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "user",
        "content": "Estou fazendo um app no qual o usuário entrará com um evento e quero responder com uma desculpa esfarrapada, quero que seja engraçada e que não ofenda ninguém, mas seja criativo e engraçado"
      },
      {
        "role": "assistant",
        "content": "Que ideia divertida! Aqui vão algumas sugestões de desculpas esfarrapadas engraçadas e criativas que não ofendem ninguém:\n\n**Eventos Sociais**\n\n* \"Desculpe, não posso ir à sua festa de aniversário, pois meu gato está com uma crise existencial e precisa de mim.\"\n* \"Não posso comparecer ao casamento, pois estou tentando quebrar o recorde mundial de horas consecutivas assistindo à Netflix.\"\n* \"Sinto muito, mas não posso ir à sua reunião de família, pois estou sofrendo de uma doença rara chamada 'Síndrome do Sofá' e preciso ficar em repouso forçado.\"\n\n**Compromissos Profissionais**\n\n* \"Desculpe, não posso ir à reunião, pois estou no meio de uma importante investigação sobre a melhor forma de preparar um ovo cozido.\"\n* \"Não posso entregar o projeto no prazo, pois meu computador foi invadido por um vírus de ficção científica e está sendo reparado por uma equipe de especialistas em segurança.\"\n* \"Sinto muito, mas não posso ir ao trabalho hoje, pois estou sofrendo de uma severa falta de cafeína e precisarei de pelo menos 24 horas para se recuperar.\"\n\n**Eventos Esportivos**\n\n* \"Desculpe, não posso ir ao jogo de futebol, pois estou treinando para o campeonato mundial de sono profundo e preciso de mais prática.\"\n* \"Não posso ir ao treino de basquete, pois meu pulseira de fim de semana está quebrada e precisarei de uma semana para se recuperar.\"\n* \"Sinto muito, mas não posso ir à corrida de rua, pois descobri que sou alérgico a exercícios físicos e precisarei de um médico para me acompanhar.\"\n\n**Eventos Culturais**\n\n* \"Desculpe, não posso ir ao concerto, pois estou em uma missão secreta para descobrir a fórmula da música perfeita e preciso de mais tempo para investigar.\"\n* \"Não posso ir ao museu, pois estou sofrendo de uma doença rara chamada 'Síndrome do Arte', que me impede de ver qualquer obra de arte sem começar a chorar de emoção.\"\n* \"Sinto muito, mas não posso ir ao teatro, pois estou na lista de espera para uma cirurgia de urgência para remover um fragmento de queijo que está me impedindo de apreciar a arte dramática.\"\n\nEspero que essas sugestões te inspirem a criar uma lista de desculpas divertidas e criativas para o seu app!"
      },
      {
        "role": "user",
        "content": "quero te enviar o evento e você irá responder somente a desculpa"
      },
      {
        "role": "assistant",
        "content": "Pode ir! Envie o evento e vou responder com uma desculpa esfarrapada engraçada!"
      },
      {
        "role": "user",
        "content": "Ir para uma festa de casamento"
      },
      {
        "role": "assistant",
        "content": "\"Desculpe, não posso ir à festa de casamento, pois meu acompanhante de sempre, o meu sofá, está doente e precisa de mim para cuidá-lo.\""
      },
      {
        "role": "user",
        "content": desculpa
      }
    ],
    "model": "llama-3.1-70b-versatile",
    "temperature": 1,
    "max_tokens": 1024
  });

  console.log(chatCompletion)

  return chatCompletion.choices[0]?.message?.content;
}

// for await (const chunk of chatCompletion) {
//   process.stdout.write(chunk.choices[0]?.delta?.content || '');
// }


