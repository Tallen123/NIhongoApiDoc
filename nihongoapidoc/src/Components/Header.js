import React from 'react'

const Header = ({header1,FontSize}) => {
    return (
    <header>
        <h1 class="Name" style={{fontSize:FontSize}}>{header1}</h1>
    </header>
    )
}

export default Header
