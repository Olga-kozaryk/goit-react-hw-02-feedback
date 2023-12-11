import styled from "styled-components";

export const Container = styled('div')(() => {
    return {
        margin: '50px auto',
        padding: '25px',
        width: '400px',
        border: '3px solid rgba(125, 61, 209)',
        borderRadius: '25px',
        backgroundColor: 'rgba(238, 213, 240)',
        boxShadow: '0px 10px 30px 0px rgba(125, 61, 209, 0.5)'
      
    }
})