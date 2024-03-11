import React, { useMemo, useState } from "react";
import { ITaskList } from "../../types";
import "./Accordion.css";
import AccordionItem from "./AccordionItem";

interface IAccordionItemProps {
  items: Array<ITaskList>;
}

const Accordion: React.FC<IAccordionItemProps> = ({ items }) => {
  const memoizedAccordionItems = useMemo(() => {
    return items.map((item, idx) => (
      <AccordionItem key={idx + item.name} data={item} taskIdx={idx} />
    ));
  }, [items]);

  return <ul className="accordion mt-30">{memoizedAccordionItems}</ul>;
};

export default Accordion;
