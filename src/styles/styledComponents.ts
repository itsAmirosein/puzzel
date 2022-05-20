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
function handleMotivation(side:'right'|'left'|'top'|'bottom'|'none'){
    // console.log(side,'side')
switch(side){
    case 'left':
        return 'translateX(-100%)'
    case 'right':
        return 'translateX(100%)'
    case 'top':
        return 'translateY(-100%)'
    case 'bottom':
        return 'translateY(100%)'
    default:
        return ''
}
}

interface StyledItemProps {
  move?:'left'|'right'|'bottom'|'top'|'none'|undefined,
  x:string;
  y:string;
  content:number|undefined;
  picIndex:{
    x:string;
    y:string;
  },
  isEmpty:boolean
}

export const PuzzelItem = styled.div<StyledItemProps>`
position:absolute;
width: 100px;
height: 100px;
${(props)=>!props.isEmpty&&`border: 1px solid red`};
display: flex;
justify-content: center;
align-items: center;
transition: all 1s;
${(props)=>!props.isEmpty&&`background: url(https://source.unsplash.com/random/500x500) ${props.picIndex.y} ${props.picIndex.x}`};
transform: translate(${props=>props.y},${props=>props.x});
`