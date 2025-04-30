import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

export default function BuscadorAPI() {
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);
  const [carregando, setCarregando] = useState(false);

  const buscarProdutos = async (query) => {
    if (!query) {
      setResultados([]);
      return;
    }
    setCarregando(true);
    try {
      const res = await fetch(
        `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setResultados(data.results.slice(0, 10)); // mostra até 10 resultados
    } catch (err) {
      console.error('Erro ao buscar produtos:', err);
    } finally {
      setCarregando(false);
    }
  };

  // Debounced function para reduzir requisições
  const debouncedBusca = useCallback(debounce(buscarProdutos, 500), []);

  useEffect(() => {
    debouncedBusca(busca);
  }, [busca, debouncedBusca]);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Buscar Produtos (Mercado Livre)</h2>
      <input
        type="text"
        placeholder="Digite o nome do produto..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full px-4 py-2 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {carregando && <p className="text-sm mt-2 text-gray-500">Buscando...</p>}

      <ul className="mt-4 space-y-2">
        {resultados.length > 0
          ? resultados.map((produto) => (
              <li
                key={produto.id}
                className="bg-white p-3 rounded-xl shadow hover:bg-blue-50 transition"
              >
                <a
                  href={produto.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 hover:underline"
                >
                  {produto.title}
                </a>
              </li>
            ))
          : !carregando &&
            busca && <li className="text-gray-500 italic">Nenhum produto encontrado.</li>}
      </ul>
    </div>
  );
}
