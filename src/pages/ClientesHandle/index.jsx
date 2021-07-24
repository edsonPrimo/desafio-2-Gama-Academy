import React, { useState } from "react";
import { TextField, Button, Container } from "@material-ui/core";


function ClientesHandle() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("")

  return (
    <form onSubmit={(event) => {
      event.preventDefault()

      const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
      const cliente = {
        nome,
        cpf,
        email,
        endereco
      }
      console.log(cliente)
      const clientesAtualizados = [...clientes, cliente]
      localStorage.setItem('clientes', JSON.stringify(clientesAtualizados))

      alert('Cliente cadastrado')
      setNome('')
      setCpf('')
      setEmail('')
      setEndereco('')
    }}>

      <Container maxWidth="sm">
        <TextField
          value={nome}
          onChange={(e) => {
            e.preventDefault()
            setNome(e.target.value)
          }}
          name="nome"
          id="nome"
          label="Nome completo"
          type="nome"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={cpf}
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          id="CPF"
          name="cpf"
          label="CPF"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={email}
          onChange={(e) => {
            e.preventDefault()
            setEmail(e.target.value)
          }}
          name="email"
          id="email"
          label="Email"
          type="email"
          required
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          value={endereco}
          onChange={(e) => {
            e.preventDefault()
            setEndereco(e.target.value)
          }}
          name="Endereco"
          id="Endereco"
          label="Endereco completo"
          type="Endereco"
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

export default ClientesHandle