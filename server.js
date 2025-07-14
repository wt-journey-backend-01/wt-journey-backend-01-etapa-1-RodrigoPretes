const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.get('/api/lanches', (req, res) => {
  fs.readFile(path.join(__dirname, 'public/data', 'lanches.json'), 'utf-8', (err, data)=> {
    if (err) {
      return res.status(500).json({erro: `Erro ao ler arquivo \n ${err}`});
    }

    let lanches = JSON.parse(data);
    lanches = lanches.filter(l => l.id && l.nome);

    res.json(lanches);
  })
})

app.post('/contato', (req, res) => {
  const novoContato = req.body;

  const filePath = path.join(__dirname, 'public/data', 'contato.json');
  fs.readFile(filePath, 'utf-8', (err, data) => {
    let contatos = [];
    if (!err) contatos = JSON.parse(data);

    const novoId = contatos.length > 0 ? (contatos[contatos.length -1].id + 1) : 1;
    contatos.push({ id: novoId, ...novoContato });

    fs.writeFile(filePath, JSON.stringify(contatos, null, 2), (err) => {
      if (err) return res.status(500).send("Erro ao salvar");

      res.redirect(`/contato-recebido?nome=${encodeURIComponent(novoContato.nome)}&email=${encodeURIComponent(novoContato.email)}&assunto=${encodeURIComponent(novoContato.assunto)}&mensagem=${encodeURIComponent(novoContato.mensagem)}`);
    });
  });
});

app.get('/contato-recebido', (req, res) => {
  const { nome, email, assunto, mensagem } = req.query;
  res.sendFile(path.join(__dirname, 'views', 'contato-recebido.html'));
});

app.get('/sugestao', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'agradecimentos.html'));
});


app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});