import "./App.css";
import { Move, PuzzelItemType } from "./types";
import {
  Container,
  GlobalStyles,
  PuzzelContainer,
  PuzzelItem,
} from "./styles/styledComponents";
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
];

function App() {
  const [puzzelItms, setPuzzelItms] = useState<PuzzelItemType[]>(puzzelItems);

  function handleOnItemClick(puzzelItem: PuzzelItemType) {
    ["left", "right", "top", "bottom"].forEach((side) => {
      checkOtherSides(puzzelItem, side);
    });
  }

  function checkOtherSides(puzzelItem: PuzzelItemType, side: string) {
    const copyPuzzelsItms = [...puzzelItms];
    const index = puzzelItms.findIndex(
      (item) => item.x === puzzelItem.x && item.y === puzzelItem.y
    );
    const copyItem = { ...puzzelItem };
    let searchedItemIndex = -1;
    switch (side) {
      case "right":
        searchedItemIndex = copyPuzzelsItms.findIndex(
          (item) => item.y === copyItem.y + 1 && item.x === copyItem.x
        );
        if (
          searchedItemIndex !== -1 &&
          !copyPuzzelsItms[searchedItemIndex].item
        ) {
          const copySearchItem = { ...copyPuzzelsItms[searchedItemIndex] };
          copyPuzzelsItms[searchedItemIndex] = {
            ...copySearchItem,
            y: --copySearchItem.y,
          };
          copyPuzzelsItms[index] = { ...copyItem, y: ++copyItem.y };
          setPuzzelItms(copyPuzzelsItms);
      
        }
        break;
      case "left":
        searchedItemIndex = copyPuzzelsItms.findIndex(
          (item) => item.y === copyItem.y - 1 && item.x === copyItem.x
        );
        if (
          searchedItemIndex !== -1 &&
          !copyPuzzelsItms[searchedItemIndex].item
        ) {
          const copySearchItem = { ...copyPuzzelsItms[searchedItemIndex] };
          copyPuzzelsItms[searchedItemIndex] = {
            ...copySearchItem,
            y: ++copySearchItem.y,
          };
          copyPuzzelsItms[index] = { ...copyItem, y: --copyItem.y };
          setPuzzelItms(copyPuzzelsItms);
        }
        break;
      case "top":
        searchedItemIndex = copyPuzzelsItms.findIndex(
          (item) => item.y === copyItem.y && item.x === copyItem.x - 1
        );
        if (
          searchedItemIndex !== -1 &&
          !copyPuzzelsItms[searchedItemIndex].item
        ) {
          const copySearchItem = { ...copyPuzzelsItms[searchedItemIndex] };
          copyPuzzelsItms[searchedItemIndex] = {
            ...copySearchItem,
            x: ++copySearchItem.x,
          };
          copyPuzzelsItms[index] = { ...copyItem, x: --copyItem.x };
          setPuzzelItms(copyPuzzelsItms);
        }
        break;
      case "bottom":
        searchedItemIndex = copyPuzzelsItms.findIndex(
          (item) => item.y === copyItem.y && item.x === copyItem.x + 1
        );
        if (
          searchedItemIndex !== -1 &&
          !copyPuzzelsItms[searchedItemIndex].item
        ) {
          const copySearchItem = { ...copyPuzzelsItms[searchedItemIndex] };
          copyPuzzelsItms[searchedItemIndex] = {
            ...copySearchItem,
            x: --copySearchItem.x,
          };
          copyPuzzelsItms[index] = { ...copyItem, x: ++copyItem.x };
          setPuzzelItms(copyPuzzelsItms);
        }
        break;
    }
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <PuzzelContainer>
          {puzzelItms.map((item) => (
            <PuzzelItem x={`${(item.x-1)*100}%`} y={`${(item.y-1)*100}%`}
            content={item.item} onClick={() => handleOnItemClick(item)}>
              {item.item}
            </PuzzelItem>
          ))}
        </PuzzelContainer>
      </Container>
    </>
  );
}

export default App;
