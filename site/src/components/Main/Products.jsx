import { useEffect, useState, useCallback } from 'react';
import produtosData from '../../produtos.json';
import debounce from 'lodash.debounce';

export default function BuscadorLocal(props) {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtrados, setFiltrados] = useState([]);

  // Carrega os dados do JSON local
  useEffect(() => {
    setProdutos(produtosData);
  }, []);

  const filtrarProdutos = (query) => {
    const texto = query.trim().toLowerCase();
    if (texto === '') {
      setFiltrados([]);
      return;
    }

    const resultados = produtos.filter((p) => p.nome.toLowerCase().includes(texto));
    setFiltrados(resultados);
  };

  const debouncedFiltrar = useCallback(debounce(filtrarProdutos, 300), [produtos]);

  useEffect(() => {
    debouncedFiltrar(busca);
  }, [busca, debouncedFiltrar]);

  return (
    <div className=" bg-gray-100 flex items-center justify-center px-4" id="produtos">
      <div
        className=" shadow-xl rounded-2xl w-full p-6 bg-gray-100 "
        style={props.port === 'mobile' ? { margin: '3vh 6vw' } : { margin: '4vh 8vw' }}
      >
        <div
          className="search-text"
          style={props.port === 'mobile' ? { padding: '2vh 0' } : { paddingBottom: '5vh' }}
        >
          {' '}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Buscar Produtos</h2>
          <p className=" text-gray-600 mt-2">
            Digite o nome de um produto para buscar resultados instantaneamente.
          </p>
        </div>

        <input
          type="text"
          placeholder="Ex: lanterna, tv, fone..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {busca.trim() !== '' && (
          <ul className="mt-4 space-y-2">
            {filtrados.length > 0 ? (
              filtrados.map((produto) => (
                <li
                  key={produto.id}
                  className="bg-blue-50 border border-blue-200 p-3 rounded-xl shadow-sm hover:bg-blue-100 transition"
                >
                  {produto.nome}
                </li>
              ))
            ) : (
              <li className="text-gray-500 italic">Nenhum produto encontrado.</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
