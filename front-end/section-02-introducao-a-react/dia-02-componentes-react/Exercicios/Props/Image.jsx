import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;

// 1.Qual é o nome do componente declarado acima?
  // Componente de Classe

// 2.Chame o componente Image dentro do componente App, de forma que seja mostrada esta imagem ou o texto: Cute cat staring, caso a imagem não consiga ser carregada.