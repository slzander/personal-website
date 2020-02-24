import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <header>
            <div class='inner-header'>
                <div class='logo-container'>
                    <h1>Stacey<span>Zander</span></h1>
                </div>
                <ul class='navigation'>
                    <a><li>About</li></a>
                    <a><li>Portfolio</li></a>
                    <a><li>Blog</li></a>
                    <a><li>Contact</li></a>
                </ul>
            </div>
        </header>
    )
}

export default Header