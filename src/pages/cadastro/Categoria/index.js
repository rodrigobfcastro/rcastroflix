import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFields';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [values, setValues] = useState(valoresIniciais);
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    setValue(
      // prettierIgnore
      // getAttribute('name'),
      // value
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }
  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://rcastroflix.herokuapp.com/categorias/';
    fetch(URL_TOP).then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();
      console.log(resposta);
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form
        // style={{ background: values.cor }}
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
        <Button>Cadastrar</Button>
        {categorias.length === 0 && <div>Loading...</div>}
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>{categoria.titulo}</li>
        ))}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}
export default CadastroCategoria;
