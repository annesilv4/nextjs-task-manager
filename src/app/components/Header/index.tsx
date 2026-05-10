import Link from "next/link";
import Style from './Header.module.css';

const Header = () => {
    return (
        <header className={Style.header}>
            <div className={Style.header__container}>
                <div className={Style.header__logo}>
                    <h1>
                        <Link href="/">
                            TaskFlow
                        </Link>
                    </h1>
                    <p className={Style.header__description}>
                        Seu gerenciador de tarefas.
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Header;