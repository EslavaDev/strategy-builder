import './App.css';
import BuilderForm from './class/builder/Builder';

import Context from './class/strategy/Context';
import StringStrategy from './class/strategy/StrategyObject';

function App() {
  const context = new Context();
  context.setStrategy(new StringStrategy());

  return <>{context.executeStategy()}</>;
}

export default App;
