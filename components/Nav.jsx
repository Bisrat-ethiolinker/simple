import Link from "next/link"
import navStyle from "../styles/Nav.module.css"

const Nav = () => {
    return (
        <ul className={navStyle.ul}>
            <li className={navStyle.li}>
                <Link href='/' >
                    Home
                </Link>
            </li>
        </ul>
    )
}

export default Nav