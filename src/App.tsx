import "./App.css";
import { Move, PuzzelItemType } from "./types";
import {
  Container,
  GlobalStyles,
  PuzzelContainer,
  PuzzelItem,
} from "./styles/styledComponents";
import { useCallback, useEffect, useState } from "react";
const puzzelItems: PuzzelItemType[] = [
  { x: 1, y: 1, picIndex: { x: 1, y: 1 }, id: 1, item: 1, isEmpty: false },
  { x: 1, y: 2, picIndex: { x: 1, y: 2 }, id: 2, item: 2, isEmpty: false },
  { x: 1, y: 3, picIndex: { x: 1, y: 3 }, id: 3, item: 3, isEmpty: false },
  { x: 1, y: 4, picIndex: { x: 1, y: 4 }, id: 4, item: 4, isEmpty: false },
  { x: 1, y: 5, picIndex: { x: 1, y: 5 }, id: 5, item: 5, isEmpty: false },
  { x: 2, y: 1, picIndex: { x: 2, y: 1 }, id: 6, item: 6, isEmpty: false },
  { x: 2, y: 2, picIndex: { x: 2, y: 2 }, id: 7, item: 7, isEmpty: false },
  { x: 2, y: 3, picIndex: { x: 2, y: 3 }, id: 8, item: 8, isEmpty: false },
  { x: 2, y: 4, picIndex: { x: 2, y: 4 }, id: 9, item: 9, isEmpty: false },
  { x: 2, y: 5, picIndex: { x: 2, y: 5 }, id: 10, item: 10, isEmpty: false },
  { x: 3, y: 1, picIndex: { x: 3, y: 1 }, id: 11, item: 11, isEmpty: false },
  { x: 3, y: 2, picIndex: { x: 3, y: 2 }, id: 12, item: 12, isEmpty: false },
  { x: 3, y: 3, picIndex: { x: 3, y: 3 }, id: 13, item: 13, isEmpty: false },
  { x: 3, y: 4, picIndex: { x: 3, y: 4 }, id: 14, item: 14, isEmpty: false },
  { x: 3, y: 5, picIndex: { x: 3, y: 5 }, id: 15, item: 15, isEmpty: false },
  { x: 4, y: 1, picIndex: { x: 4, y: 1 }, id: 16, item: 16, isEmpty: false },
  { x: 4, y: 2, picIndex: { x: 4, y: 2 }, id: 17, item: 17, isEmpty: false },
  { x: 4, y: 3, picIndex: { x: 4, y: 3 }, id: 18, item: 18, isEmpty: false },
  { x: 4, y: 4, picIndex: { x: 4, y: 4 }, id: 19, item: 19, isEmpty: false },
  { x: 4, y: 5, picIndex: { x: 4, y: 5 }, id: 20, item: 20, isEmpty: false },
  { x: 5, y: 1, picIndex: { x: 5, y: 1 }, id: 21, item: 21, isEmpty: false },
  { x: 5, y: 2, picIndex: { x: 5, y: 2 }, id: 22, item: 22, isEmpty: false },
  { x: 5, y: 3, picIndex: { x: 5, y: 3 }, id: 23, item: 23, isEmpty: false },
  { x: 5, y: 4, picIndex: { x: 5, y: 4 }, id: 24, item: 24, isEmpty: false },
  {
    x: 5,
    y: 5,
    picIndex: { x: 5, y: 5 },
    id: 25,
    item: undefined,
    isEmpty: true,
  },
];

function App() {
  const [puzzelItms, setPuzzelItms] = useState<PuzzelItemType[]>(puzzelItems);
const [complete,setComplete] = useState<boolean>(false)
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
            id: copyItem.id,
          };
          copyPuzzelsItms[index] = {
            ...copyItem,
            y: ++copyItem.y,
            id: copySearchItem.id,
          };
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
            id: copyItem.id,
          };
          copyPuzzelsItms[index] = {
            ...copyItem,
            y: --copyItem.y,
            id: copySearchItem.id,
          };
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
            id: copyItem.id,
          };
          copyPuzzelsItms[index] = {
            ...copyItem,
            x: --copyItem.x,
            id: copySearchItem.id,
          };
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
            id: copyItem.id,
          };
          copyPuzzelsItms[index] = {
            ...copyItem,
            x: ++copyItem.x,
            id: copySearchItem.id,
          };
          setPuzzelItms(copyPuzzelsItms);
        }
        break;
    }
  }

  useEffect(() => {
    let copyPuzzelItms = [...puzzelItms];
    copyPuzzelItms = copyPuzzelItms.filter((item) => !item.isEmpty);
    copyPuzzelItms.sort((a, b) => a.id - b.id);
   setComplete( copyPuzzelItms.every((item) => item.id === item.item))
    
  }, [puzzelItms]);

  return (
    <>
      <GlobalStyles />
      <Container>
        {/* <img src="https://source.unsplash.com/random/500x500" /> */}
        <PuzzelContainer>
          {puzzelItms.map((item) => (
            <PuzzelItem
              isEmpty={item.isEmpty}
              x={`${(item.x - 1) * 100}%`}
              y={`${(item.y - 1) * 100}%`}
              picIndex={{
                x: `${-(item.picIndex.x - 1) * 100}px`,
                y: `${-(item.picIndex.y - 1) * 100}px`,
              }}
              content={item.item}
              onClick={() => handleOnItemClick(item)}
            ></PuzzelItem>
          ))}
        </PuzzelContainer>
        <div>{!complete?'false':'true'}</div>
      </Container>
    </>
  );
}

export default App;
