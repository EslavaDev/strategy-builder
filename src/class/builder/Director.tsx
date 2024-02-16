import BuilderForm from './Builder';

export default class Director {
  formWithContainerString(builder: BuilderForm): React.ReactElement {
    builder.setHeader('Este es un builder String');
    builder.setContainer('container', 'Soy un string');
    builder.setFooter('toy abajo');
    return builder.build();
  }

  formWithContainerObject(builder: BuilderForm): React.ReactElement {
    builder.setHeader('Este es un builder String');
    builder.setContainer('container', {
      name: 'ramon',
      date: new Date().toDateString(),
    });
    builder.setFooter('toy abajo');
    return builder.build();
  }
}
