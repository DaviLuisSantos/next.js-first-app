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
            <Navegador texto="Navegação #01" destino="/navegacao" cor="crimson" />
            <Navegador texto="Navegação #02" destino="/cliente/123" cor="#610de9" />
            <Navegador texto="Componente com Estado" destino="/estado" cor="#5e0312" />
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#32cdc5" />
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#f4510b" />
        </div>
    )
}