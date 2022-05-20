export type PuzzelItemType = {
    x: number,
    y: number,
    item: number | undefined,
}

export type Move = {
    itemIndex: number ,
    motivation:'left'|'right'|'top'|'bottom'|'none'
}