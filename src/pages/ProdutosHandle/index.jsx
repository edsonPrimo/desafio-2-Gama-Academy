import React, { useState } from "react";
import { TextField, Button, Container } from "@material-ui/core";
import { v4 as uuidv4 } from 'uuid';


function ProdutosHandle() {
  const [item, setItem] = useState("");
  const [marca, setMarca] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("")

  let imagemFile 

  const imageUpload = (e) => {
    imagemFile = e.target.files[0];

    getBase64(imagemFile).then(base64 => {
      setImagem(base64)
      console.debug("file stored", base64)
    })
  };

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    })};

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
    
      const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
      const produto = {
        id: uuidv4(),
        item,
        marca,
        preco,
        imagem,
      }

      console.log(produto)
      const produtosAtualizados = [...produtos, produto]
      localStorage.setItem('produtos', JSON.stringify(produtosAtualizados))

      alert('Produto cadastrado')
      setItem('')
      setMarca('')
      setPreco('')
      setImagem('')
    }}>

      <Container maxWidth="sm">
        <TextField
          value={item}
          onChange={(e) => {
            e.preventDefault()
            setItem(e.target.value)
          }}
          name="item"
          id="item"
          label="Nome do item"
          type="text"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={marca}
          onChange={(event) => {
            setMarca(event.target.value);
          }}
          id="marca"
          name="marca"
          type="text"
          label="Marca"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={preco}
          onChange={(e) => {
            e.preventDefault()
            setPreco(e.target.value)
          }}
          name="preco"
          id="preco"
          label="Preço"
          type="text"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          onChange={(e) => {
            e.preventDefault()
            imageUpload(e)
          }}
          name=""
          id=""
          type="file"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="secondary">Cadastrar</Button>
      </Container>

    </form>
  );
}

export default ProdutosHandle
