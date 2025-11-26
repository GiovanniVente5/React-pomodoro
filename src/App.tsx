import './styles/Theme.css';
import './styles/Global.css';
import { Heading } from './components/Heading';

export function App() {
    return (
    <>
        <Heading />
        <h1>Texto no h1 dentro do main</h1>
        <p>Parágrafo dentro do main</p>
    </>
    );
}