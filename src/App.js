import { LeftSideComponent } from './features/LeftSideComponent';
import { RightSideComponent } from './features/RightSideComponent';
import { SplitScreen } from './layout/SplitScreen';

const App = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftSideComponent name="Jhon" />
      <RightSideComponent message="Hello world" />
    </SplitScreen>
  );
};

export default App;
