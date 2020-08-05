import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}videos`;

async function create(objetoDoVideo) {
  const respostaDoServidor = await fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  });
  if (respostaDoServidor.ok) {
    const resposta = await respostaDoServidor.json();
    return resposta;
  }
  throw new Error('Não foi possível cadastrar os dados :(');
}

export default {
  create,
};
