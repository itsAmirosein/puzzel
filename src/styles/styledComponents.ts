import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;

}
`
export const Container = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content: center;
align-items: center;

`

export const PuzzelContainer = styled.div`
width:500px;
height:500px;
display: flex;
flex-wrap: wrap;

`

export const PuzzelItem = styled.div`
width: 100px;
height: 100px;
border: 1px solid red;
display: flex;
justify-content: center;
align-items: center;
`