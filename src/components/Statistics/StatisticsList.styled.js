import styled from "styled-components";

export const StatisticsList = styled("ul")(()=> {
    return {
        backgroundColor: '#bccaf7',
        borderRadius: '10px',
        border: '2px solid #839df3',
        margin: '0',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',


        li: {
        marginBottom: '5px',
        fontSize: '24px',
        color: '#2040a8',
        '&:last-child': {
        marginBottom: '0px'},
    }}
})