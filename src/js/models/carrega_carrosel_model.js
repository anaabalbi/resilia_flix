class CarroselModel {
  constructor(nomeFilme) {
    this.filme = nomeFilme;
    this.capa = '';
  }

  buscaFilme() {
    const requisicao = new XMLHttpRequest();
    requisicao.open(
      'GET',
      `http://www.omdbapi.com/?apikey=81849d08&t=${this.filme}`,
      false
    );
    requisicao.onload = () => {
      if (requisicao.status == 200) {
        const response = JSON.parse(requisicao.response);
        this._atualizaFilmes(response);
      }
    };
    requisicao.send();
  }
  _atualizaFilmes(objetoFilme) {
    this.titulo = objetoFilme.Title;
    this.capa = objetoFilme.Poster;
  }

  novoTitulo() {
    return this.titulo;
  }

  novoCapa() {
    return this.capa;
  }
}
