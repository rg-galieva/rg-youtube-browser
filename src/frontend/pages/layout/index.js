import React from 'react'
import Menu from '../../components/menu'
require ('../../assets/styles/common.gcss')
import s from './_styles.css'
import {Link} from 'react-router'

export default function (props) {
    return (
        <div className={s.wrap}>
            <header>
                <Link to="/" className={s.logo}>Radium Videobrowser</Link>
                <Menu />
            </header>

            <main>
                {props.children}
            </main>

            <footer>
                <p>&copy; 2017 Regina Radium</p>
            </footer>
        </div>
    );
}