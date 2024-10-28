import Card from './components/Card';
import { AdmnistracaoFields, Fields2, Fields3, Fields4 } from './data/constants/card/fields';
import "./styles/App.css";

export default function App() {


  return (
    <div>
      <header className='container' style={{border: '3px solid white'}}>
        <h1>Matriz 5W2H</h1>
      </header>
      <main className='container'>
        <Card titulo="Administração" fields={AdmnistracaoFields} />
        <Card titulo="Administração" fields={AdmnistracaoFields} />
        <Card titulo="Administração" fields={AdmnistracaoFields} />
        <Card titulo="Administração" fields={AdmnistracaoFields} />
      </main>
    </div>
  );
}
