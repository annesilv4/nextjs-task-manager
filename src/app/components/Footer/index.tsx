import Style from './Footer.module.css';

const Footer = () => {
    const yearNow = new Date().getFullYear();

    return (
        <footer className={Style.footer}>
            <p className={Style.footer__text}>
                TaskFlow | {yearNow} - Todos os direitos reservados
            </p>
        </footer>
    );
};

export default Footer;