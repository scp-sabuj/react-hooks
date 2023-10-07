import './App.css';
import ClassCounter from './component/ClassCounter';
import ClassMouse from './component/ClassMouse';
import ConditionClassCounter from './component/ConditionClassCounter';
import HookCounter from './component/HookCounter';
import HookMouse from './component/HookMouse';
import IntervalClassCounter from './component/IntervalClassCounter';
import IntervalHookCounter from './component/IntervalHookCounter';
import MouseContainer from './component/MouseContainer';
import TimerUsingUseEffect from './component/TimerUsingUseEffect';
import UseEffectCleanup from './component/UseEffectCleanup';
import UseEffectWithCondition from './component/UseEffectWithCondition';
import UseEffectWithDependency from './component/UseEffectWithDependency';
import UseEffectWithNoDependency from './component/UseEffectWithNoDependency';

function App() {
  return (
    <div className="App">
      <p>Timer Using useEffect</p>
      <TimerUsingUseEffect />

      <p>useEffect With No Dependency</p>
      <UseEffectWithNoDependency />

      <p>useEffect With Dependency</p>
      <UseEffectWithDependency />

      <p>useEffect Cleanup</p>
      <UseEffectCleanup />

      <p>Class Counter</p>
      <ClassCounter />

      <p>Hook Counter</p>
      <HookCounter />

      <p>Condition Class Counter</p>
      <ConditionClassCounter />

      <p>Use Effect With Condition</p>
      <UseEffectWithCondition />

      <p>Class Mouse Move</p>
      <ClassMouse />

      {/* <p>Hook Mouse Move</p>
      <HookMouse /> */}
      <p>Mouse Container</p>
      <MouseContainer />

      <p>Interval Class Counter</p>
      <IntervalClassCounter />

      <p>Interval Hooks Counter</p>
      <IntervalHookCounter />
    </div>
  );
}

export default App;
