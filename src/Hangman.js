import React, { useEffect, useRef, useState } from "react";
import classes from "./styles/Hangman.module.css";
export const Hangman = () => {
  const easy1 = useRef();
  const medium1 = useRef();
  const hard1 = useRef();
  const inp = useRef();
  const All = [
    "Alligator",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",

    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",

    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",

    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",

    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",

    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Rat",
    "Raven",

    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",

    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra",
  ];

  const [Animals, setAnimals] = useState([]);
  const [name, setName] = useState([]);
  const [ans,setAns] = useState('')
  const [count, setCount] = useState(0);
  const [img, setImg] = useState("images/1.png");
  const [chk, setChk] = useState([]);
  const [play, setPlay] = useState(false);
  const [stop, setStop] = useState(false);
  const [wincount, setWincount] = useState(0);
  const [hintcount, setHintcount] = useState(0);
  const btnHandler = () => {
    let num = Math.floor(Math.random() * Animals.length);
    setName(Animals[num].split(""));
    setChk(Array(Animals[num].split("").length).fill(false));
    setAns(Animals[num])
    setPlay(true);
    setCount(1);
    setImg("images/1.png");
    setWincount(0);
    setHintcount(0);
    let inp1 = document.querySelectorAll('input')
    for(let i =0;i<inp1.length;i++){
        inp1[i].disabled = false
    }
  };
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const images = [
    "images/1.png",
    "images/2.png",
    "images/3.png",
    "images/4.png",
    "images/5.png",
    "images/6.png",
    "images/7.png",
  ];
  const inputclickHandler = (val, event) => {
    if (event.target.disabled) return;
    else event.target.disabled = true;
    let count1 = count;
    // count1++
    let win = wincount;
    var arr = [...chk];
    var flag = true;
    for (let i = 0; i < name.length; i++) {
      if (name[i].toLowerCase() === val.toLowerCase()) {
        console.log(i);
        arr[i] = true;
        flag = false;
        if (!chk[i]) win++;
        setWincount(win);
      }
    }
    if (win === name.length) {
      setStop(true);
      setPlay(false);
    }
    if (flag) {
      setImg(images[count1++]);
      setCount(count1);
    }
    if (count1 === images.length) {
      setStop(true);
      setPlay(false);
      setImg("images/7.png");
    }
    setChk(arr);
  };
  const EasyNames = (event) => {
    let arr = All.filter((item) => item.length <= 4);
    setAnimals(arr);
    easy1.current.classList.add(`${classes.active}`);
    medium1.current.classList.remove(`${classes.active}`);
    hard1.current.classList.remove(`${classes.active}`);
    btnHandler();
  };
  const MediumNames = (event) => {
    let arr = All.filter((item) => item.length <= 6);
    setAnimals(arr);
    medium1.current.classList.add(`${classes.active}`);
    easy1.current.classList.remove(`${classes.active}`);
    hard1.current.classList.remove(`${classes.active}`);
    btnHandler();
  };
  const HardNames = (event) => {
    let arr = All.filter((item) => item.length >= 6);
    setAnimals(arr);
    hard1.current.classList.add(`${classes.active}`);
    medium1.current.classList.remove(`${classes.active}`);
    easy1.current.classList.remove(`${classes.active}`);
    btnHandler();
  };
  useEffect(() => {
    let arr = All.filter((item) => item.length <= 4);
    setAnimals(arr);
    easy1.current.classList.add(`${classes.active}`);
  }, []);
  const hintCall = () => {
    let hint = hintcount;
    if (hint === 2) return;
    let num = Math.floor(Math.random() * name.length);
    console.log(num);
    if (chk[num] === true) {
      hintCall();
      return;
    }
    let win = wincount + 1;
    setWincount(win);
    let arr = [...chk];
    arr[num] = true;
    setChk(arr);
    setHintcount(hint + 1);
    if (win === name.length) {
      setStop(true);
      setPlay(false);
      return;
    }
    let count1 = count;
    setImg(images[count1++]);
    setCount(count1);
  };
  return (
    <div className={classes.hangman}>
      <div style={{ display: "flex", gap: "4rem" }}>
        <h1>Guess Animal Name</h1>
        <div className={classes.image}>
          <img src={img} alt="" />
        </div>
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div className={classes.levels}>
          <button
            ref={easy1}
            id="easy"
            className={`${classes.btns}`}
            onClick={(event) => EasyNames(event)}
          >
            Easy
          </button>
          <button ref={medium1} className={classes.btns} onClick={MediumNames}>
            Medium
          </button>
          <button ref={hard1} className={classes.btns} onClick={HardNames}>
            Hard
          </button>
        </div>
        <button style={{ fontSize: "1.2rem" }} onClick={hintCall}>
          Hint (max:2)
        </button>
      </div>
      <div style={{ display: "flex", gap: "4rem", marginTop: "1rem" }}>
        <button onClick={btnHandler} style={{ fontSize: "1.2rem" }}>
          {play ? "Reset Word" : "Play"}
        </button>
        {count === images.length && <h1 style={{ color: "red" }}>You Lost Ans:{ans}</h1>}
        {wincount === name.length && stop && (
          <h1 style={{ color: "blue" }}>You Won</h1>
        )}
      </div>

      {play && (
        <div className={classes.inputs}>
          {name.map((item, i) => (
            <input
              value={chk[i] ? item.toUpperCase() : "___"}
              minLength={1}
              maxLength={1}
              key={i}
              readOnly
            />
          ))}
        </div>
      )}
      {play &&  <h1>Guess Here</h1>}
      {play && (
        <div className={classes.alpha}>
          {alphabet.map((item, i) => (
            <input
              ref={inp}
              value={item}
              key={i}
              readOnly
              onClick={(event) => {
                inputclickHandler(event.target.value, event);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
