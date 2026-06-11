## 1. IAs Consultadas

1. Gemini
2. ChatGPT
3. Claude

## 2. Prompt Utilizado

**Plaintext**

```
Quero um código simples, direto e sem enrolações. Preciso criar uma aplicação web em HTML, CSS e JavaScript puro (sem frameworks) que simula um sistema de cadastro de itens.

Tema da Aplicação: "Repositório de Mídia" (focado em músicas como Radiohead, Måneskin, Pearl Jam, Nazareth e obras de cultura pop como Invencível, The Boys, Evangelion, Bastardos Inglórios, Pokémon).
Estilo Visual: A interface deve serclara (Light Mode), com uma estética limpa.

Requisitos de Estrutura de Dados e Código:
1. Seja objetivo no código. O HTML, CSS e JS devem ser curtos e focados em resolver o problema da forma mais simples possível, sem excesso de estilização.
2. Os dados devem ser armazenados obrigatoriamente em um array simples de strings (ex: 'let midias = ["Radiohead", "Evangelion", "The Boys"];'). É terminantemente proibido usar objetos dentro do array.
3. Toda a lógica deve ser organizada em funções nomeadas. Não deixe código solto fora de funções (exceto declaração de variáveis globais e a chamada inicial de renderização).
4. Use apenas HTML, CSS e JS puros. Não use bibliotecas externas.

Requisitos da Tela de Login:
1. A aplicação inicia com um formulário de login visível e a área da lista totalmente oculta.
2. Credenciais estritas e fixas no código: Usuário 'aluno' e Senha 'fiap2025'.
3. Validação de Login: Os campos não podem ser enviados vazios.
4. Tratamento de Erro: Se as credenciais estiverem erradas, uma mensagem de erro deve aparecer dinamicamente na tela (no HTML), e não apenas no console ou via alert().
5. Sucesso: Se as credenciais estiverem corretas, oculte a tela de login e exiba a página do Repositório.

Requisitos do CRUD e Interação:
1. A lista deve iniciar com pelo menos 3 itens pré-cadastrados para exibição inicial.
2. Exibir todos os itens dinamicamente na tela, atualizando a interface automaticamente sempre que o array sofrer alterações.
3. Adicionar item ao final da lista.
4. Adicionar item ao início da lista.
5. Editar qualquer item individualmente.
6. Remover qualquer item individualmente. A remoção deve ser feita baseada estritamente na posição (índice) do item no array, não pelo valor da string.

Validações do CRUD:
1. Nenhum item pode ser salvo com campo vazio (mostrar mensagem de erro no HTML).
2. Ao editar, se o usuário cancelar a edição ou tentar confirmar com o campo vazio, o item original deve permanecer intacto.

Por favor, forneça os códigos completos separados em 'index.html', 'style.css' e 'script.js'.
```


## 3. Análise das Respostas

### Gemini

* **Acertos:** Ele seguiu corretamente a regra do array de strings e fez a remoção do jeito certo usando o `splice`. A logica ficou bem organizada nas funções.
* **Problemas:** O visual do CSS ficou bem generico. E na hora de editar, ele usou o `prompt()` padrao do navegador, o que achei bem preguiçoso e ruim pra experiencia do usuario.

### ChatGPT

* **Acertos:** Mandou um código bem curto e direto como eu pedi no prompt. Usou o array certo e tratou os erros mostrando direto no HTML.
* **Problemas:** O design ficou pior ainda, com uma aparencia muito rudimentar. E de novo, usou o `prompt()` pro botão de editar, o que quebra muito a imersão da aplicação. A estilização dos botões e do formulário não passou um ar muito profissional.

### Claude

* **Acertos:** Foi a unica IA que não usou o `prompt()` pra edição. Ele fez um esquema muito legal de editar direto na linha da lista (escondendo o texto e abrindo um `<input>`). O CSS entregou exatamente o Light Mode que eu pedi. E ele também adicionou um botão de sair de dentro da aplicação, o que não aconteceu nas outras IAs.
* **Problemas:** A lista veio maior que o das outras ias e o código ficou um pouquinho maior que os outros, mas super compensou pela qualidade visual e as funções extras.

## 4. Justificativa da Escolha

Eu escolhi o código do **Claude** como base pra atividade. Ele atendeu todos os requisitos obrigatórios (array de strings, o crud completo, as funções e sem os alertas nativos chatos), mas o que me ganhou mesmo foi a interface e a usabilidade.

O jeito que o Claude estruturou o CSS, separando bem a tela de login do app, casou certinho com a estetica que eu estava buscando pro layout. Além disso, o fato de editar o item direto na lista (escondendo os botões e colocando o input dentro da propria `li`) mostrou uma solução de front-end muito mais inteligente do que o `prompt()` que o Gemini e o ChatGPT sugeriram. No final deixou o projeto bem mais polido e pronto pra entrega.
