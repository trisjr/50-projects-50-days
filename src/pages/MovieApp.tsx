import React, { useState } from "react";
import { classNames } from "../utils/ClassNames";
import { useTitle } from "../hooks/useTitle";

const movies = [
  {
    name: "Doctor Strange in the Multiverse of Madness",
    overview:
      "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    image: "https://image.tmdb.org/t/p/w1280/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
    rating: 7.5,
  },
  {
    name: "Minions: The Rise of Gru",
    overview:
      "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    image: "https://image.tmdb.org/t/p/w1280/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    rating: 7.8,
  },
  {
    name: "Thor: Love and Thunder",
    overview:
      "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    image: "https://image.tmdb.org/t/p/w1280/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    rating: 7.1,
  },
  {
    name: "Jurassic World Dominion",
    overview:
      "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
    image: "https://image.tmdb.org/t/p/w1280/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    rating: 6.6,
  },
  {
    name: "The Ledge",
    overview:
      "A rock climbing adventure between two friends turns into a terrifying nightmare. After Kelly captures the murder of her best friend on camera, she becomes the next target of a tight-knit group of friends who will stop at nothing to destroy the evidence and anyone in their way. Desperate for her safety, she begins a treacherous climb up a mountain cliff and her survival instincts are put to the test when she becomes trapped with the killers just 20 feet away.",
    image: "https://image.tmdb.org/t/p/w1280/dHKfsdNcEPw7YIWFPIhqiuWrSAb.jpg",
    rating: 6.3,
  },
  {
    name: "Fantastic Beasts: The Secrets of Dumbledore",
    overview:
      "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
    image: "https://image.tmdb.org/t/p/w1280/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
    rating: 6.8,
  },
  {
    name: "Sonic the Hedgehog 2",
    overview:
      "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    image: "https://image.tmdb.org/t/p/w1280/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    rating: 7.7,
  },
  {
    name: "Dog",
    overview:
      "An army ranger and his dog embark on a road trip along the Pacific Coast Highway to attend a friend's funeral.",
    image: "https://image.tmdb.org/t/p/w1280/rkpLvPDe0ZE62buUS32exdNr7zD.jpg",
    rating: 7.5,
  },
  {
    name: "Spider-Man: No Way Home",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    image: "https://image.tmdb.org/t/p/w1280/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    rating: 8.1,
  },
  {
    name: "9 Bullets",
    overview:
      "A former burlesque dancer turned author discovers a second chance at life and redemption when she risks everything to rescue her young neighbor after he witnesses his parents’ murder. Now on the run from the local crime boss, who happens to be her longtime ex, she makes a desperate attempt to get the boy to safety.",
    image: "https://image.tmdb.org/t/p/w1280/cuFPxoFopAjFUz4oIMUzpzeTA8I.jpg",
    rating: 6.1,
  },
  {
    name: "The Man From Toronto",
    overview:
      "In a case of mistaken identity, the world’s deadliest assassin, known as the Man from Toronto, and a New York City screw-up are forced to team up after being confused for each other at an Airbnb.",
    image: "https://image.tmdb.org/t/p/w1280/uTCfTibqtk4f90cC59bLPMOmsfc.jpg",
    rating: 6.2,
  },
  {
    name: "The Lost City",
    overview:
      "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
    image: "https://image.tmdb.org/t/p/w1280/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
    rating: 6.8,
  },
];

const MovieItem = (props: {
  key: number;
  image: string;
  overview: string;
  name: string;
  rating: number;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      key={props.key}
      className={
        "w-[300px] m-4 bg-[#373b69] shadow-md relative overflow-hidden rounded cursor-pointer"
      }
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <img className={"w-full"} src={props.image} alt={props.name} />
      <div
        className={
          "text-white flex items-center justify-center pt-2 px-4 pb-4 tracking-[0.5px]"
        }
      >
        <h3 className={"text-2xl font-bold"}>{props.name}</h3>
        <span className={"rounded py-1 px-2 font-bold bg-[#22254b]"}>
          {props.rating}
        </span>
      </div>
      <div
        className={classNames(
          "bg-white p-8 absolute left-0 bottom-0 right-0 max-h-full transition-transform duration-300 ease-in",
          hover ? "translate-y-0" : "translate-y-full"
        )}
      >
        <h3 className={"text-2xl font-bold py-2"}>Overview</h3>
        {props.overview}
      </div>
    </div>
  );
};

function MovieApp() {
  useTitle("Movie App");
  const [search, setSearch] = useState("");
  return (
    <div className={"bg-[#22254b] pt-[66px] min-h-screen"}>
      <header className={"p-4 flex justify-end bg-[#373b69]"}>
        <input
          className={
            "bg-transparent border-[2px] border-solid border-[#22254b] rounded-[50px] text-white py-2 px-4 placeholder-white focus:outline-none focus:bg-[#22254b]"
          }
          type={"text"}
          placeholder={"Search"}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </header>
      <div className={"flex flex-wrap"}>
        {movies
          .filter((item) =>
            item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((item, index) => (
            <MovieItem
              key={index}
              name={item.name}
              overview={item.overview}
              image={item.image}
              rating={item.rating}
            />
          ))}
      </div>
    </div>
  );
}

export default MovieApp;
