
import "./App.css";
import { PuzzelItemType } from './types'
import { Container, GlobalStyles, PuzzelContainer, PuzzelItem } from "./styles/styledComponents";
import { useState } from "react";
const puzzelItems: PuzzelItemType[] = [
  { x: 1, y: 1, item: 1 },
  { x: 1, y: 2, item: 2 },
  { x: 1, y: 3, item: 3 },
  { x: 1, y: 4, item: 4 },
  { x: 1, y: 5, item: 5 },
  { x: 2, y: 1, item: 6 },
  { x: 2, y: 2, item: 7 },
  { x: 2, y: 3, item: 8 },
  { x: 2, y: 4, item: 9 },
  { x: 2, y: 5, item: 10 },
  { x: 3, y: 1, item: 11 },
  { x: 3, y: 2, item: 12 },
  { x: 3, y: 3, item: 13 },
  { x: 3, y: 4, item: 14 },
  { x: 3, y: 5, item: 15 },
  { x: 4, y: 1, item: 16 },
  { x: 4, y: 2, item: 17 },
  { x: 4, y: 3, item: 18 },
  { x: 4, y: 4, item: 19 },
  { x: 4, y: 5, item: 20 },
  { x: 5, y: 1, item: 21 },
  { x: 5, y: 2, item: 22 },
  { x: 5, y: 3, item: 23 },
  { x: 5, y: 4, item: 24 },
  { x: 5, y: 5, item: undefined },
]


function App() {

  const [puzzelItms, setPuzzelItms] = useState<PuzzelItemType[]>(puzzelItems)

  function handleOnItemClick(puzzelItem: PuzzelItemType) {
    ['left', 'right', 'top', 'bottom'].forEach(side => {
      checkOtherSides(puzzelItem, side)
    })
  }

  function checkOtherSides(puzzelItem: PuzzelItemType, side: string) {
    const copyPuzzelsItms = [...puzzelItms]
    const index = puzzelItms.findIndex(item => item.x === puzzelItem.x && item.y === puzzelItem.y)
    const copyItem = { ...puzzelItem }
    let searchedItem: PuzzelItemType = { x: 0, y: 0, item: undefined }
    switch (side) {
      case 'right':
        searchedItem = { ...copyItem, x: copyItem.x++ }
        break
      case 'left':
        searchedItem = { ...copyItem, x: copyItem.x-- }
        break
      case 'top':
        searchedItem = { ...copyItem, y: copyItem.y++ }
        break
      case 'bottom':
        searchedItem = { ...copyItem, y: copyItem.y++ }

    }
    if (!searchedItem.item) {
      searchedItem.item = copyItem.item
      copyItem.item = undefined
    }
    copyPuzzelsItms[index] = copyItem
    setPuzzelItms(copyPuzzelsItms)
  }

  return (
    <>
      <GlobalStyles />
      <Container>

        <PuzzelContainer>
          {puzzelItems.map(item => (
            <PuzzelItem onClick={() => handleOnItemClick(item)}>{item.item}</PuzzelItem>
          ))}
        </PuzzelContainer>
      </Container>
    </>
  )
}

export default App;
