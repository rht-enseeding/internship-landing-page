import React from 'react'

function Progessbar(props) {
    const { bgcolor } = props;
  
    const containerStyles = {
        height: 12,
        width: '90%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        paddingLeft:0,
      }
    
      const fillerStyles = {
        height: '100%',
        width: `60%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
    
      return (
        <div style={containerStyles}>
          <div style={fillerStyles}>
          </div>
        </div>
      );
}

export default Progessbar