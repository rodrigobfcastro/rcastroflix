import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormFields';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais);
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(infosDoEvento) {
    //const { getAttribute, value } = infosDoEvento.target;
    setValue(
      //prettierIgnore
      //getAttribute('name'),
      //value
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>
      <form
        //style={{ background: values.cor }}
        onSubmit={function handleSubmit(evt) {
          evt.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome"
          value={values.nome}
          onChange={handleChange}
          type="text"
          name="nome"
        />

        <FormField
          label="Conteudo"
          value={values.descricao}
          onChange={handleChange}
          type="textarea"
          name="descricao"
        />

        <FormField
          label="Cor"
          value={values.cor}
          onChange={handleChange}
          type="color"
          name="cor"
        />
        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.nome}</li>;
        })}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
