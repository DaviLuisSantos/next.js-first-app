import Cabecalho from "../components/cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
    return (
        <div>
            <Layout titulo="Usando Componentes">
                <Cabecalho titulo="Next.js & React" />
                <Cabecalho titulo="Aprende Next na prática" />
            </Layout>
        </div>
    )
}