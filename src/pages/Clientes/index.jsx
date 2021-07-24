import React, { useState, useEffect } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container, Button} from '@material-ui/core'
import { useHistory } from 'react-router';


function Clientes() {

  const [clientes, setClientes] = useState([])
  
  useEffect (() => {
    const clientesLocalStorage = JSON.parse(localStorage.getItem('clientes')) || [];
    setClientes(clientesLocalStorage)
  }, [])

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const classes = useStyles();

  let history = useHistory()
  function handleBtnCadastrar() {
    history.push('/clientes/create')

  }
  return (
   
    <Container maxWidth="xl">
      <Button mb={3} onClick={handleBtnCadastrar} variant="contained" color="secondary">Cadastrar</Button>
      <TableContainer  component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nome completo</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Endereço</StyledTableCell>
              <StyledTableCell align="right">CPF</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((cliente) => (
              <TableRow key={cliente.nome}>
                <TableCell component="th" scope="row">
                  {cliente.nome}
                </TableCell>
                <TableCell align="right">{cliente.email}</TableCell>
                <TableCell align="right">{cliente.endereco}</TableCell>
                <TableCell align="right">{cliente.cpf}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container >
  );
}

export default Clientes