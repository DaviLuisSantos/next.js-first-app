import Link from 'next/link';
import styles from '../styles/Layout.module.css';


export default function Layout(props) {
    return (
        <div className={styles.Layout}>
            <div className={styles.cabecalho}>

                <h1>
                    <Link classname="sitio" href="https://www.allthingshair.com/pt-br/produtos-para-cabelo/para-colorir-os-cabelos/como-tirar-tinta-de-cabelo-da-pele-5-truques-uteis/">
                        {props.titulo}
                    </Link>
                </h1>

                <Link href="/">Voltar</Link>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}