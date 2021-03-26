import React, { Component } from "react";
import { Table, Button, message } from "antd";
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


  sucesso = (record) => {
      if(record.isVacinada) {
          record.isVacinada = false;
      } else 
          record.isVacinada = true;
    

      PessoaDataService.atualizarPessoa(record, record.codigo);
      message.success('Status alterado com sucesso!');
    }

  atualizarPessoas() {
    PessoaDataService.retornaTodasPessoas().then(response => {
        console.log(response);
        this.setState({ pessoas: response.data });
      })
  }

  render() {
    return (
      <div className="container">
        <h2>Pessoas Cadastradas</h2>
        <div>
          <Table dataSource={this.state.pessoas}>
            <Column title="Nome" dataIndex="nome" key="nome" />
            <Column title="CPF" dataIndex="cpf" key="cpf" />
            <Column title="Email" dataIndex="email" key="email" />
            <Column title="Telefone" dataIndex="telefone" key="telefone" />
            <Column title="Vacinada" dataIndex="isVacinada" key="isVacinada"
            render={(text, record) => (<p>{String(record.isVacinada)}</p>)} />
            <Column title="Atualizar" key="atualizar" 
            render={(text, record) => (<Button onClick={() => this.sucesso(record)} danger type="secondary">Alterar Status</Button>)}  />
          </Table>
        </div>
      </div>
    );
  }
}

export default ListaPessoas;
