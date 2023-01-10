import PostModel from 'components/PostModel';
import fotoCapa from 'assets/sobre_mim_capa.png';
import styles from './About.module.css';

const SobreMim = () => {
    return (
        <PostModel fotoCapa={fotoCapa} titulo="Sobre mim...">
            <h3 className={styles.subtitulo}>
                Olá, eu sou Gabriel!
            </h3>
            <img src={''} alt="Minha foto" className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>Velit aliqua anim adipisicing fugiat amet ad anim in dolor. Deserunt pariatur aliqua cillum eu consequat proident Lorem. Laboris ullamco et tempor ea. Do id labore aliquip enim ea esse occaecat laborum non Lorem eiusmod fugiat.</p>

            <p className={styles.paragrafo}>Dolore in occaecat do elit voluptate nulla. Culpa exercitation ex minim amet aute nulla. Deserunt ipsum laboris qui exercitation qui labore aliquip veniam qui ex ut anim. Mollit enim magna cillum quis ea ex ipsum deserunt ut magna aliqua laboris.
            </p>
            <p className={styles.paragrafo}>Enim ex do irure sunt. Tempor id labore elit deserunt non sunt consequat pariatur magna sunt elit incididunt cillum est. Laboris non tempor excepteur excepteur veniam non nulla sunt culpa irure nisi deserunt quis.</p>

        </PostModel>
    )
}

export default SobreMim;