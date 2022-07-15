import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

function GithubProfiles() {
  useTitle("Github Profiles");
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState<any>({
    loading: true,
    data: {},
  });
  const [repos, setRepos] = useState<any[]>([]);

  const handleSetInPutValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const apiUrl = "https://api.github.com/users/";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(apiUrl + inputValue)
      .then((res) => res.json())
      .then((result) => {
        setUser({ loading: false, data: result });
        getRepos();
      });
  };

  const getRepos = () => {
    fetch(apiUrl + inputValue + "/repos?sort=created")
      .then((res) => res.json())
      .then((result) => {
        setRepos(result.slice(0, 5));
      });
  };

  console.log(repos);

  return (
    <div
      className={
        "bg-blue-900 text-white flex flex-col items-center justify-center h-screen pt-[66px] overflow-hidden"
      }
    >
      <form className={"w-full max-w-[700px]"} onSubmit={handleSubmit}>
        <input
          type={"text"}
          className={
            "w-full block bg-purple-800 rounded text-white p-4 mb-8 focus:outline-none"
          }
          value={inputValue}
          onChange={handleSetInPutValue}
          placeholder={"Search a Github User"}
        />
      </form>
      {!user.loading && (
        <main>
          {user ? (
            <div
              className={
                "max-w-[800px] bg-purple-800 rounded-[20px] shadow-md flex p-12 mx-6"
              }
            >
              <div>
                <img
                  className={
                    "rounded-full border-[10px] border-blue-900 h-[150px] w-[150px]"
                  }
                  alt={"avatar"}
                  src={user.data?.avatar_url}
                />
              </div>
              <div className={"text-white ml-[2rem]"}>
                <div className={"mb-4 font-bold text-2xl"}>
                  {user.data?.name}
                </div>
                <p className={"max-w-[520px]"}>{user.data?.bio}</p>
                <ul className={"flex mt-4 justify-between p-0 max-w-[400px]"}>
                  <li
                    className={"font-semibold"}
                  >{`${user.data?.followers} followers`}</li>
                  <li
                    className={"font-semibold"}
                  >{`${user.data?.following} following`}</li>
                  <li
                    className={"font-semibold"}
                  >{`${user.data?.public_repos} repos`}</li>
                </ul>
                {repos && (
                  <div className={"mt-4"}>
                    {repos.map((item, index) => (
                      <Link
                        key={index}
                        className={
                          "text-white bg-blue-900 px-2 py-1 mr-2 inline-block text-[12px]"
                        }
                        to={"#"}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <></>
          )}
        </main>
      )}
    </div>
  );
}

export default GithubProfiles;
