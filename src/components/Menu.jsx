import Link from 'next/link';
import styles from '../styles/Menu.module.css';

const Menu = () => {
    return (
        <nav>
            <ul className={styles.menu}>
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