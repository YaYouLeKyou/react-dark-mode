import './Contenu.css'
import {ThemeContext} from '../../Context/ThemContext';

import React, {useContext} from 'react'

export default function Contenu() {

    const {theme} = useContext(ThemeContext);
    return (
        <div className={theme ? 'contenu light' : 'contenu dark'}>
            <h1>Lorem ipsum
            </h1>
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            Blablablabla blablabla blablabla
            {theme}
        </div>
    )
}
