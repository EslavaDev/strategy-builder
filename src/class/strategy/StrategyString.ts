import BuilderForm from '../builder/Builder';
import Director from '../builder/Director';
import StrategyI from './Strategy.interface';

export default class StringStrategy implements StrategyI {
  execute() {
    const director = new Director();

    const formBuilder = new BuilderForm();
    return director.formWithContainerString(formBuilder);
  }
}
