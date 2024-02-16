import BuilderI from './Builder.interface';

export default class BuilderForm implements BuilderI {
  header?: React.ReactElement;
  footer?: React.ReactElement;
  container?: React.ReactElement;

  constructor() {}

  setHeader(title: string) {
    this.header = (
      <div>
        <h2>{title}</h2>
      </div>
    );
  }

  setContainer(subtitle: string, data: string | Record<string, string>) {
    this.container = (
      <>
        <h3>{subtitle}</h3>
        <div>
          {typeof data === 'string' ? (
            <p></p>
          ) : (
            <div>
              {Object.keys(data).map((label: string) => (
                <>
                  <h4>{label}</h4>
                  <p>{data[label]}</p>
                </>
              ))}
            </div>
          )}
        </div>
      </>
    );
    return this;
  }

  setFooter(title: string) {
    this.footer = (
      <>
        <footer>
          <p>{title}</p>
        </footer>
      </>
    );
  }

  build() {
    return (
      <div>
        {this.header}
        {this.container}
        {this.footer}
      </div>
    );
  }
}
