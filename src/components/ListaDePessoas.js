import React, { Component } from "react";
import { Table, Tag, Space, Button, message } from "antd";
import PessoaDataService from "../services/PessoaDataService";

const { Column } = Table;

class ListaPessoas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pessoas: [],
      message: null,
    };
  }

  componentDidMount() {
    this.atualizarPessoas();
  }

  atualizarPessoas() {
    PessoaDataService.retornaTodasPessoas().then(response => {
        console.log(response);
        this.setState({ pessoas: response.data });
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Pessoas Cadastradas</h2>
        <div>
          <Table dataSource={this.state.pessoas}>
            <Column title="Nome" dataIndex="nome" key="nome" />
            <Column title="CPF" dataIndex="cpf" key="nome" />
            <Column title="Email" dataIndex="email" key="nome" />
            <Column title="Telefone" dataIndex="telefone" key="nome" />
            <Column title="Vacinada" dataIndex="isVacinada" key="nome" />
            <Column title="Atualizar" dataIndex="action" key="" />
          </Table>
        </div>
      </div>
    );
  }
}

export default ListaPessoas;
