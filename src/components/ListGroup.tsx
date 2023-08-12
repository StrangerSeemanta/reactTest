import { useState } from "react";

interface Props {
  lists: string[],
  heading: string,
  onSelected: (items: string, index: number) => void;
}

function ListGroup({ lists, heading, onSelected }: Props) {

  const [selectedIndex, setSelectedIndex] = useState(-1);
  let noListMsg = lists.length === 0 && <><p>No Item Found</p></>;
  return (
    <>
      <h1>{heading}</h1>
      {noListMsg}
      <ul className="list-group">
        {lists.map((item, index) => (
          <li
            className={
              selectedIndex === index ?
                "list-group-item active" :
                "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelected(item, index)
            }}
          >
            {item}
          </li>))}
      </ul>
    </>
  )
}

export default ListGroup;



