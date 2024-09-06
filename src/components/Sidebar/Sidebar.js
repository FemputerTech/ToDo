import React, { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import SectionHeader from "./SectionHeader";
import ListItem from "./ListItem";
import ContextMenu from "../ContextMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Sidebar/Sidebar.css";

function Sidebar({ isCollapsed, toggleSidebar, setActiveList }) {
  const [listItems, setListItems] = useState([]);
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [clickedItemIndex, setClickedItemIndex] = useState(null);
  const [contextMenu, setContextMenu] = useState({
    position: {
      x: 0,
      y: 0,
    },
    toggled: false,
  });

  const handleItemClick = (type, index) => {
    if (type === "click") {
      setActiveItemIndex(index);
      setActiveList(listItems[index]);
    } else if (type === "mousedown") {
      setClickedItemIndex(index);
    } else {
      setClickedItemIndex(null);
    }
  };

  const addListItem = () => {
    const newListItem = "Untitled";
    setListItems([...listItems, newListItem]);
    setActiveList(newListItem);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <SidebarHeader isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <section className="favorites">
        <SectionHeader
          text="Favorites"
          icon="fa-regular fa-star"
          isCollapsed={isCollapsed}
        />
      </section>
      <section className="private">
        <SectionHeader
          text="Private"
          icon="fa-solid fa-list-ul"
          isCollapsed={isCollapsed}
        />
        <ul className="lists">
          {listItems.map((listItem, index) => (
            <ListItem
              key={index}
              listItem={listItem}
              isActive={index === activeItemIndex}
              isClicked={index === clickedItemIndex}
              onClick={(event) => handleItemClick(event.type, index)}
              onMouseDown={(event) => handleItemClick(event.type, index)}
              onMouseUp={(event) => handleItemClick(event.type, index)}
              isCollapsed={isCollapsed}
              setContextMenu={setContextMenu}
            />
          ))}
        </ul>
        <button
          className={`new-item-button ${isCollapsed ? "collapsed" : ""}`}
          onClick={addListItem}
        >
          <FontAwesomeIcon icon="fa-solid fa-plus" color="var(--text-normal)" />
          <span className={`button-text ${isCollapsed ? "collapsed" : ""}`}>
            Create new list
          </span>
        </button>
        <ContextMenu
          isToggled={contextMenu.toggled}
          positionX={contextMenu.position.x}
          positionY={contextMenu.position.y}
          options={[
            {
              text: "Favorite",
              icon: "fa-solid fa-star",
              onClick: () => alert("rename"),
            },
            {
              text: "Rename",
              icon: "fa-solid fa-pen-to-square",
              onClick: () => alert("rename"),
            },
            {
              text: "Delete",
              icon: "fa-solid fa-trash-can",
              onClick: () => alert("delete"),
            },
          ]}
        />
      </section>
    </div>
  );
}

export default Sidebar;
