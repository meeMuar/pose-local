import styles from '../styles/Navbar.module.css'
import Link from 'next/link'


const Navbar = () => {
    return (
        <nav className={styles.navs}>
            <Link href='/'>
                <img src="/logo_draft_crop2.png"
                    alt="React Logo"

                />
            </Link>
            <ul >
                <li><Link href='/tpractice'>Timed Practice</Link></li>
                <li><Link href='/gallery'>Gallery</Link></li>
                <li><Link href='/info'>Info</Link></li>

            </ul>
        </nav>
    )
}

export default Navbar