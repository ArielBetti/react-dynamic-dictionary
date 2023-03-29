import { TDictionary } from "../types";

const dictionary = (): Partial<TDictionary> => ({
  title: "Titulo legal aqui",
  description: "Descricao legal aqui",
  aboutMe: {
    title: "Sobre",
    text: "Texto sobre",
  },
  test: "Esse texto so existe no pt-br",
  apresentation: {
    title: "Exemplo de dicionário dinâmico",
    description: "Mude o idioma e veja a mágica acontecer",
  },
  randomWords: [
    { text: "gato" },
    { text: "casa" },
    { text: "abacaxi" },
    { text: "amarelo" },
    { text: "festa" },
    { text: "chuva" },
    { text: "banana" },
    { text: "verde" },
    { text: "amigo" },
    { text: "praia" },
    { text: "verão" },
    { text: "viagem" },
    { text: "trabalho" },
    { text: "amor" },
    { text: "dinheiro" },
    { text: "felicidade" },
    { text: "saúde" },
    { text: "comida" },
    { text: "bebida" },
    { text: "esporte" },
  ],
});

export default dictionary;
