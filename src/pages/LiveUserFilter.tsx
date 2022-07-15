import React, { useEffect, useState } from "react";
import { useTitle } from "../hooks/useTitle";

function LiveUserFilter() {
  useTitle("Live User Filter");
  const [list, setList] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const handleSetSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api?results=50")
      .then((res) => res.json())
      .then((data) => {
        setList(data.results);
      });
  }, []);
  return (
    <div
      className={
        "flex bg-white items-center justify-center h-screen pt-[66px] overflow-hidden"
      }
    >
      <div className={"rounded shadow overflow-hidden w-[300px]"}>
        <header className={"bg-blue-900 text-white px-[20px] py-[30px]"}>
          <div className={"text-2xl font-semibold"}>Live User Filter</div>
          <div className={"text-sm inline-block mt-2 mb-8 opacity-75"}>
            Search by name and/or location
          </div>
          <input
            className={
              "rounded-full text-blue-900 placeholder-gray-400 py-[10px] px-[15px] w-full"
            }
            type={"text"}
            placeholder={"Search..."}
            value={searchValue}
            onChange={handleSetSearchValue}
          />
        </header>
        {list ? (
          <ul className={"bg-white max-h-[400px] overflow-y-auto"}>
            {list
              .filter((item) =>
                item.name.last.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item, index) => (
                <li key={index} className={"flex p-[20px] border-b "}>
                  <img
                    src={item.picture?.large}
                    alt={item.name.first as string}
                    className={"rounded-full object-cover h-[50px] w-[50px]"}
                  />
                  <div className={"ml-[10px]"}>
                    <div className={"font-semibold mb-[10px]"}>
                      {item.name.last}
                    </div>
                    <p className={"text-sm"}>{item.location.country}</p>
                  </div>
                </li>
              ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default LiveUserFilter;
