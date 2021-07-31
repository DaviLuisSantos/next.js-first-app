import Navegador from '../components/Navegador'

export default function inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navegador texto="Estiloso " destino="/estiloso" cor="red" />
            <Navegador texto="Exemplo " destino="/exemplo" cor="green" />
            <Navegador texto="JSX" destino="/jsx" cor="blue" />
        </div>
    )
}