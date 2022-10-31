import Link from "next/link"
import navStyle from "../styles/Nav.module.css"
import styled from "@emotion/styled"
import { Avatar } from "@mui/material"

const List = styled.div`
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-right: 9px;
    overflow: hidden;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Nav = () => {
    return (
        
        <List>
            <ul className={navStyle.ul}>
            <li 
            className={navStyle.li}
            >
                <Link href='/' >
                    Home
                </Link>
            </li>
            </ul>
            <Avatar alt="Dwayne Jhonson" src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg" />
        </List>
            
        // </ul>
    )
}

export default Nav