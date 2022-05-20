export type PuzzelItemType = {
    x: number,
    y: number,
    item: number | undefined,
    picIndex:{
        x:number,
        y:number
    },
    id:number,
    isEmpty:boolean
}

export type Move = {
    itemIndex: number ,
    motivation:'left'|'right'|'top'|'bottom'|'none';
    
}