export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>
    const a = 3;
    const b = 9;
    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
    return (
        <div>
            {titulo}
            {subtitulo()}
            {Math.random()}
        </div>
    )
}