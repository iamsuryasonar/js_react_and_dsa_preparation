import './App.css';
import ListView from './components/ListView';

function App() {
  const data = Array(100).fill(0).map((_, index) => {
    return {
      id: index,
      value: 'item ' + index,
    }
  })

  return <div
    style={{
      width: '400px',
      height: '100svh',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <ListView items={data} itemHeight={45} containerHeight={600} />
  </div>
}

export default App;


