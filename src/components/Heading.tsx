import Qualquernome from './Heading.module.css';

export function Heading() {
    // colocando as duas classes em um unico componente (classe heading e classe cyan) 
    // const classes = `${Qualquernome.heading} ${Qualquernome.cyan}`;

    // ou poderia já jogar dentro do ficaria: className = `${Qualquernome.heading} ${Qualquernome.cyan}`;
    return <h1 className = {Qualquernome.heading}>Componente Heading</h1>
}