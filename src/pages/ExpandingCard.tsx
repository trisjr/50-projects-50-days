import React, { useState } from "react";

const data = [
  {
    id: 1,
    title: "Explore The World",
    url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    title: "Wild Forest",
    url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 3,
    title: "Sunny Beach",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  },
  {
    id: 4,
    title: "City on Winter",
    url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  },
  {
    id: 5,
    title: "Mountains - Clouds",
    url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
];

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

function ExpandingCards() {
  const [active, setActive] = useState(1);

  const handleClick = (item: { id: number; title: string; url: string }) => {
    setActive(item.id);
  };

  return (
    <div
      className={
        "flex items-center justify-center h-screen overflow-hidden m-auto overflow-hidden pt-[80px]"
      }
    >
      <div className={"flex w-[90%]"}>
        {data.map((item, index) => (
          <div
            key={index}
            className={classNames(
              "bg-cover bg-center bg-no-repeat h-[80vh] rounded-[50px] cursor-pointer grow shrink basis-0 m-[10px] relative duration-700 ease-in delay-[0]",
              active === item.id ? "grow-[5]" : ""
            )}
            style={{
              background: `url(${item.url})`,
            }}
            onClick={() => {
              handleClick(item);
            }}
          >
            <h3
              className={classNames(
                "text-2xl font-bold text-white absolute bottom-6 left-6 transition-opacity ease-in delay-[400ms] duration-300",
                active === item.id ? "opacity-100" : "opacity-0"
              )}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpandingCards;
