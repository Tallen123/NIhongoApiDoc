import React from 'react'

const Header = ({header,FontFamily,FontSize}) => {
    return (
    <header>
        <h1 style={{fontFamily:FontFamily,fontSize:FontSize}}>{header}</h1>
    </header>
    )
}

export default Header
