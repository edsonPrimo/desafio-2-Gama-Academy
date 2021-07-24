import React, { useState, useEffect } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Button } from '@material-ui/core'
import { useHistory } from 'react-router';


function Produtos() {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const produtosLocalStorage = JSON.parse(localStorage.getItem('produtos')) || [];
    setProdutos(produtosLocalStorage)
    console.log(produtosLocalStorage)
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
    history.push('/produtos/create')

  }
  return (

    <Container maxWidth="xl">
      <Button mb={3} onClick={handleBtnCadastrar} variant="contained" color="secondary">Cadastrar</Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Item</StyledTableCell>
              <StyledTableCell align="right">Marca</StyledTableCell>
              <StyledTableCell align="right">Preço</StyledTableCell>
              <StyledTableCell align="right">Imagem</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((produto) => (
              <TableRow key={produto.id}>
                <TableCell component="th" scope="row">
                  {produto.id}
                </TableCell>
                <TableCell align="right">{produto.item}</TableCell>
                <TableCell align="right">{produto.marca}</TableCell>
                <TableCell align="right">{produto.preco}</TableCell>
                <TableCell align="right"><img src={produto.imagem} width="60px" alt="imagem não carregou :/" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container >
  );
}
export default Produtos