import Card from './components/Card';
import "./styles/App.css";

export default function App() {
  return (
    <div>
      <header className='container' style={{border: '3px solid white'}}>
        <h1>Matriz Egide</h1>
      </header>
      <main className='container'>
        <Card />
        <Card />
        <Card /> 
        <Card />
      </main>
    </div>
  );
}
