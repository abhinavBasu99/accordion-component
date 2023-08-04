import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <>
      <Accordian data={faqs} />
    </>
  );
}

function Accordian({ data }) {
  const [activeItem, setActiveItem] = useState(null);

  function handleOpenClose(number) {
    setActiveItem(number !== activeItem ? number : null);
  }

  return (
    <div className="accordion">
      {data.map((ques, i) => (
        <AccordianItem
          ques={ques}
          number={i}
          activeItem={activeItem}
          onOpenClose={handleOpenClose}
          key={i}
        />
      ))}
    </div>
  );
}

function AccordianItem({ ques, number, activeItem, onOpenClose }) {
  let isOpen = false;

  if (activeItem === number) {
    isOpen = true;
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onOpenClose(number)}
    >
      <p className="number">{number < 10 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{ques.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{ques.text}</div>}
    </div>
  );
}

export default App;
