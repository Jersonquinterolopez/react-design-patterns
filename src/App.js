import { SplitScreen } from './layout/SplitScreen/index.jsx';

const LeftSideComponent = ({ name }) => {
  return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
};

const RightSideComponent = ({ message }) => {
  return <p style={{ backgroundColor: 'red' }}>{message}</p>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftSideComponent name="Jhon" />
      <RightSideComponent message="Hello world" />
    </SplitScreen>
  );
}

export default App;
