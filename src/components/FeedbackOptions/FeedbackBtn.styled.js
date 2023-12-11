import styled from "styled-components";

export const FeedbackBtn = styled('button')(() => {
    return {
        display: 'block',
        width: '150px',
        fontWeight: 'bold',
        margin: '20px auto',
        padding: '10px 25px',
      
        fontSize: '24px',
        textDecoration: 'none',
        cursor: 'pointer',
        textAlign: 'center',
          
        color: 'black',
        webkitBorderRadius: '10px',
        mozBorderRadius: '10px',
        borderRadius: '10px',
        background: 'rgb(134, 181, 147)',
        border: '1px solid #4a2c12',
        '&:hover':{
            background: 'rgb(131, 157, 243, 1)',
        }
    }
})