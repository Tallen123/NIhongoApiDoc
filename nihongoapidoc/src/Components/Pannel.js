import React from 'react'

const Pannel = ({text,Top,text2ndLine}) => {
    return (
    <div className="Pannel">
        <h3 style={{fontSize:'1.5rem',backgroundColor:'black',padding:'0.2%',right:'5%',left:'5%',textAlign:'center',borderRadius:'20px',color:'white',top:Top}}>{text}<br/>{text2ndLine}</h3>
    </div>
    )
}

export default Pannel
