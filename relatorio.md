<sup>Esse é um feedback gerado por IA, ele pode conter erros.</sup>

Você tem 9 créditos restantes para usar o sistema de feedback AI.

# Feedback para RodrigoPretes:

Nota final: **17.1/100**

# Feedback para RodrigoPretes 🚀

Olá, Rodrigo! Primeiro, quero parabenizá-lo por todo o esforço que você dedicou a este projeto. Criar um servidor Express.js não é uma tarefa fácil, e você está no caminho certo! 🎉 Vamos juntos analisar o que funcionou e o que podemos melhorar para que você brilhe ainda mais na próxima vez!

## Conquistas Bônus 🎉

Infelizmente, não encontramos conquistas bônus nesta entrega, mas isso não significa que você não está progredindo! Cada linha de código que você escreve é uma oportunidade de aprender e se desenvolver. Lembre-se de que cada desafio é um passo em direção ao seu crescimento como desenvolvedor. Continue assim!

## Análise de Requisitos que Precisam de Atenção 🔍

Vamos analisar as falhas que foram identificadas e descobrir a raiz de cada uma:

1. **Rota `/`: campos de input faltando**  
   Percebi que o requisito pede dois campos de input (`nome` e `ingredientes`). No entanto, ao investigar, notei que você não incluiu o HTML que renderiza esses campos. Isso provavelmente está na sua página `index.html`. Você deve verificar se esses inputs estão realmente presentes lá!

2. **Rota `/sugestao` não implementada**  
   Todos os requisitos relacionados à rota `/sugestao` falharam porque esta rota simplesmente não existe no seu código. Para atender a esses requisitos, você precisa implementar essa rota com um `app.get('/sugestao', ...)` ou `app.post('/sugestao', ...)`, dependendo da lógica que deseja aplicar.

3. **Rota `/contato` (GET) com falhas**  
   A rota `/contato` não está implementada como um `app.get(...)`. Isso significa que você não está retornando a página que deve conter os campos de input necessários (como `nome`, `email`, `assunto` e `mensagem`). Este é o primeiro passo para corrigir vários requisitos que falharam aqui. Vamos criar essa rota juntos? 😉

4. **Rota `/api/lanches`**  
   A rota para `/api/lanches` parece estar implementada corretamente para leitura (GET), mas o requisito menciona que não deve aceitar POST. Isso pode ser um problema de entendimento dos requisitos, então vale a pena revisar o que o desafio pedia!

## Problemas que Geraram Descontos ⚠️

Agora, vamos abordar os problemas que geraram descontos em sua nota:

1. **Endpoint `/api/lanches` não deve aceitar método POST**  
   Como mencionei, a sua rota `/api/lanches` tem um método POST implementado, mas o requisito indica que apenas o método GET deveria ser aceito. É importante revisar as instruções do desafio e garantir que seu código esteja alinhado com o que foi pedido.

2. **Static files: projeto contém outras dependências além do express**  
   Você está utilizando o `multer` e o `fs`, que são ótimas ferramentas, mas o requisito do desafio pode ter pedido para manter o projeto o mais simples possível. Avalie se é realmente necessário usar essas dependências ou se você consegue resolver a situação usando apenas o Express.

## Conclusão 🌟

Rodrigo, você está fazendo um ótimo trabalho ao implementar um servidor Express! É normal encontrar desafios e erros ao longo do caminho – isso faz parte do processo de aprendizado. Estou aqui para ajudar você a resolver cada um deles. 

Reveja as rotas que discutimos, implemente o que falta e não hesite em voltar aqui para esclarecer dúvidas. Continue assim, você está mais perto de se tornar um desenvolvedor incrível! 🚀💡

Vamos juntos para a próxima!