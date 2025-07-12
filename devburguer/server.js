const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/contato.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.get('/api/lanches', (req, res) => {
  fs.readFile(path.join(__dirname, 'public/data', 'lanches.json'), 'utf-8', (err, data)=> {
    if (err) {
      return res.status(500).json({erro: `Erro ao ler arquivo \n ${err}`});
    }
    res.json(JSON.parse(data));
  })
})



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public/images'));
  },
  filename: function (req, file, cb) {
    const nomeArquivo = Date.now() + '-' + file.originalname;
    cb(null, nomeArquivo);
  }
});


const upload = multer({ storage });

app.post('/api/lanches', upload.single('imagem'), (req, res) => {
  let novoLanche = req.body;
  const imagem = '/images/' + req.file.filename;

  novoLanche = {...novoLanche, imagem};

  const filePath = path.join(__dirname, 'public/data', 'lanches.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ erro: `Erro ao realizar a leitura do arquivo \n ${err}`});
    }
    
    
    const lanches = JSON.parse(data);
    const novoId = lanches.length > 0 ? (lanches[lanches.length -1].id + 1) : 1;
    novoLanche = {novoId, ...novoLanche};
    lanches.push(novoLanche);

    fs.writeFile(filePath, JSON.stringify(lanches, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ erro: `Erro ao salvar lanche \n ${err}`});
      }
      res.status(201).json({msg: 'Lanche inserido com sucesso!'});
    })
  })
})

app.post('/contato', (req, res) => {
  let novoContato = req.body;

  const filePath = path.join(__dirname, 'public/data', 'contato.json');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ erro: `Erro ao realizar a leitura do arquivo \n ${err}`});
    }
    
    
    const contato = JSON.parse(data);
    const novoId = contato.length > 0 ? (contato[contato.length -1].id + 1) : 1;
    novoContato = {novoId, ...novoContato};
    contato.push(novoContato);

    fs.writeFile(filePath, JSON.stringify(contato, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ erro: `Erro ao salvar Contato \n ${err}`});
      }
    })
  })

  res.sendFile(path.join(__dirname, 'views', '/contato-recebido.html'));
});


app.listen(PORT, () => {
    console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});