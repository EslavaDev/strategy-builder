export default interface BuilderI {
  setHeader(title: string): void;
  setContainer(subtitle: string, data: string | Record<string, string>): void;
  setFooter(title: string): void;
  build(): React.ReactElement;
}
