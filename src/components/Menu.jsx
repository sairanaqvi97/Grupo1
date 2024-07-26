import Link from 'next/link';
import Styles from '../styles/Menu.module.css';

const Menu = () => {
    return (
        <nav>
            <ul className={Styles.menu}>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Menu;