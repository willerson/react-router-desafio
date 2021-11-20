import React from 'react';
import { Link } from 'react-router-dom';
import Head from './Head';
import styles from './Produtos.module.css';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);

  return (
    <section className={styles.produtos + ' animeLeft'}>
      {/* O component Head seta o titulo e a descrição de cada página */}
      <Head title="Produtos" description="Todos os produtos da API" />
      {produtos ? (
        produtos.map(({ id, nome, fotos }) => (
          // O Link irá modificar a rota e renderizar o novo componente sem recarregar a página.
          <Link to={`produto/${id}`} key={id}>
            <img src={fotos[0].src} alt={fotos[0].titulo} />
            <h1 className={styles.nome}>{nome}</h1>
          </Link>
        ))
      ) : (
        <h1>Carregando...</h1>
      )}
    </section>
  );
};

export default Produtos;
