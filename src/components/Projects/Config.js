import ownme from "./../../media/ownme.png";
import randomqoute from "./../../media/randomqoute.png";
import soundboard from "./../../media/soundboard.png";
import tinpurr from "./../../media/tinpurr.gif";
import artpage from "./../../media/artpage.svg";
import threejsprofolio from "./../../media/threejsprofolio.gif";
import thecookbook from "./../../media/thecookbook.png";
import feellings from "./../../media/feellings.png";
import gumballmachine from "./../../media/gumballmachine.png";  

export const cardData = [
  {
    title: "Feellings NFT",
    text: [
      {
        describe: "A Dapp that allows you to create and own NFTs. Created the Minting platform as well as handled all the front end dapp logic interacting with the smart contract",
        tech: "React, Web3, Ethereum, Dapp, NFT, Metamask"
      }],
    image: feellings,
    url: "https://feellingsnft.vercel.app/",
  },
  {
    title: "Own Me NFT",
    image: ownme,
    text: [{
      describe: "Assited with the creation of the brand, the crypto exchange platform, and as well as the front end creative artwork such as vector animations.",
      tech: "React, Redux, Styled-Components, Web3, ERC-20, Mumbai Network, NFT, Metamask"
    }],
    url: "https://ownme.io/",
  },
  {
    title: "The Cook- Book",
    text: [{
      describe:"An app designed with theMealdb API for the user to search for recipes based on ingredients.",
      tech: "React, Type-Script, Styled-Components, TheMealdb API,",
    }],
    image: thecookbook,
    url: "https://sylviamakuch.github.io/the-cookbook/",
  },
  {
    title: "GumBall Machine",
    text: [{
      describe:"A implementation of the gumball machine using react-three-fibre/ three-js to interact with the Ethereum smart contract in order to generate random NFTS.",
      tech: "react-three-fibre, three-js",
    }],
    image: gumballmachine,
    url: "https://app.ownme.io/gumballmachine",
  },
  {
    title: "Random Qoute",
    text: [{
      describe:"An app to bring a daily qoute for daily inspiration and motivation. This utilizing fetch requests from Qoute of the day API.",
      tech: "React, Type-Script, Styled-Components, Qoute of the day API,",
    }],
    image: randomqoute,
    url: "https://sylviamakuch.github.io/RandomQuote/index.html",
  },
  {
    title: "Sound Board",
    text: [{
      describe:"Interactive app for users to create beats for their songs",
      tech: "React, Type-Script, Styled-Components, Soundcloud API,",
    }],
    image: soundboard,
    url: "https://soundboardfunk.netlify.app/",
  },
  {
    title: "My Artpage",
    text:[{
      describe: "An experience app made to display my digital art utilizing custom paralax and animation, currently only web- version available.",
      tech: "React, Styled-Components, Custom Paralax, Animation",
    }],
    image: artpage,
    url: "https://sylviamakuch.github.io/galacticalart/",
  },
  {
    title: "Three Js Profolio",
    text: [{
      describe:"A interactive approach to use Three JS for a profolio",
      tech: "Three JS, React, Styled-Components",
    }],
    image: threejsprofolio,
    url: "https://github.com/SylviaMakuch/Profile",
  },
  {
    title: "Tinpurr",
    text: [{
      describe:"A concept app made intended to be a dating app for cats, inspired by the cat app Tinder.",
      tech: "React, Styled-Components",
    }],
    image: tinpurr,
    url: "https://sylviamakuch.github.io/Tinpurr/",
  },
];
