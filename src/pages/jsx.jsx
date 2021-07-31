import Layout from "../components/Layout";

export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>
    const a = 3;
    const b = 9;
    function subtitulo() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }
    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                {Math.random()}
            </div>
        </Layout>
    )
}