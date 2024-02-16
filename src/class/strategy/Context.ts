import StrategyI from './Strategy.interface';

export default class Context {
  private strategy?: StrategyI;

  setStrategy(strategy: StrategyI) {
    this.strategy = strategy;
  }

  executeStategy() {
    return this.strategy?.execute();
  }
}
