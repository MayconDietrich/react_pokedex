import React, { useState } from "react";
import './Style.scss';
import { motion, AnimatePresence } from "framer-motion";
import { Box, Button, Card, CardActionArea, CardMedia, Container, Grid, Icon, IconButton, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import ReactLoading from "react-loading";
import zIndex from "@mui/material/styles/zIndex";

const generations = [
  {
    gen: 1,
    start: 1,
    end: 151,
    description: 'The first generation (Japanese: 第一世代 first generation; ポケットモンスター赤・緑シリーズ Pocket Monsters Red and Green Series) of Pokémon games, known among older fans as the color generation or the chromatic generation due to the names of the versions released, is the initial set of Pokémon games released.'
  },
  {
    gen: 2,
    start: 152,
    end: 251,
    description: `The second generation (Japanese: 第二世代 second generation; ポケットモンスター金・銀シリーズ Pocket Monsters Gold and Silver Series) of Pokémon games, referred to as the Gold & Silver series in Pokémon Crystal's box blurb and instruction manual, and sometimes called the metal generation or metallic generation by older players due to the names of the paired versions, is the second set of Pokémon games released.`
  },
  {
    gen: 3,
    start: 252,
    end: 386,
    description: `The third generation (Japanese: 第三世代 third generation) of Pokémon games, also sometimes known as the advance, advanced generation, or the GBA Pokémon series, is the third set of Pokémon games released, and is described by some to be a "resetting" of the series.`
  },
  {
    gen: 4,
    start: 387,
    end: 493,
    description: `The fourth generation (Japanese: 第四世代 fourth generation) of Pokémon games is the fourth set of Pokémon games released.

      It started with the games Pokémon Diamond and Pearl, followed by Pokémon Platinum and later Pokémon HeartGold and SoulSilver (remakes of Pokémon Gold and Silver). This generation also included the games Pokémon Battle Revolution and My Pokémon Ranch.`
  },
  {
    gen: 5,
    start: 494,
    end: 649,
    description: `The fifth generation (Japanese: 第五世代 fifth generation) of Pokémon is the fifth installment of the Pokémon series. Like previous generations, the first installments, Pokémon Black and White, were released as a pair. However, unlike previous generations, the games were followed by two sequels—Pokémon Black 2 and White 2—instead of a third version.`
  },
  {
    gen: 6,
    start: 650,
    end: 721,
    description: `The sixth generation[1] (Japanese: 第６世代 sixth generation,[2] rendered as 第六世代 among fans) of Pokémon is the sixth installment of the Pokémon video game series, starting with Pokémon X and Y in 2013 and concluding with Pokémon Omega Ruby and Alpha Sapphire in 2014. This generation saw the debut of 72 new Pokémon species (for a total of 721), as well as the introduction of the Kalos region and the return of the Hoenn region. The games of the sixth generation are in full 3D and are presented on the Nintendo 3DS, a first for the core series.`
  },
  {
    gen: 7,
    start: 722,
    end: 809,
    description: `The sixth generation[1] (Japanese: 第６世代 sixth generation,[2] rendered as 第六世代 among fans) of Pokémon is the sixth installment of the Pokémon video game series, starting with Pokémon X and Y in 2013 and concluding with Pokémon Omega Ruby and Alpha Sapphire in 2014. This generation saw the debut of 72 new Pokémon species (for a total of 721), as well as the introduction of the Kalos region and the return of the Hoenn region. The games of the sixth generation are in full 3D and are presented on the Nintendo 3DS, a first for the core series.`
  },
  {
    gen: 8,
    start: 810,
    end: 905,
    description: `The eighth generation (Japanese: 第八世代 eighth generation) of Pokémon games is the eighth installment of the Pokémon video game series. The eighth generation began with Pokémon Sword and Shield and then continued with the Pokémon Sword and Shield Expansion Pass DLC packs, followed by Pokémon Brilliant Diamond and Shining Pearl, and concluded with Pokémon Legends: Arceus.`
  },
  {
    gen: 9,
    start: 906,
    end: 1010,
    description: `The ninth generation (Japanese: 第九世代 ninth generation) of Pokémon games is the ninth installment of the Pokémon video game series. The ninth generation began with Pokémon Scarlet and Violet on November 18, 2022 and continued with The Hidden Treasure of Area Zero DLC packs.`
  }
]

export default function ChooseGen({ getPokemon }) {
  const [show, setShow] = useState(false);
  const [info, setinfo] = useState();
  const [selectedGen, setSelectedGen] = useState(false);

  const variants = {
    visible: {
      scale: 1.1,
      cursor: "pointer",
      transition: { duration: 1, type: "spring" },
    },
    hidden: { scale: 1, opacity: 0 },
  };
  return (
    <>
      <Box className="titleBox">
        <Typography className="title" variant="h4">Select the generation</Typography>
      </Box>

      <Container maxWidth="false" className="generations">
        {generations.map((gen, key) =>
          <motion.div key={key} className="generationCard" layout onClick={() => {
            setShow(!show);
            setinfo(gen);
          }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <motion.img className="genImg" src={`/assets/gens/gen${key + 1}.png`} title={`generation ${key + 1}`} />
          </motion.div>
        )
        }
      </Container>

      <AnimatePresence>
        {
          selectedGen && (
            <>
              <div className="backdrop" />

              <motion.img initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="loadingPokeball" src='/assets/pokeballLoad.gif' />
            </>
          )
        }
      </AnimatePresence>

      <AnimatePresence>
        {show && (
          <>
            <div className="backdrop center" onClick={() => setShow(!show)}>
              <motion.div
                className="generationDetails"
                variants={variants}
                animate={show ? "visible" : "hidden"}
                exit={{ scale: 1, opacity: 0 }}
                sx={{
                  width: {
                    xs: '250px', md: '800px'
                  }
                }}
              >
                <motion.img className="genImg" src={`/assets/gens/gen${info.gen}.png`}
                  onClick={() => {
                    setSelectedGen(true)
                    setShow(false)
                    getPokemon(info)
                  }}></motion.img>
                <Box component='div' sx={{
                  display: {
                    xs: 'none', md: 'block'
                  }
                }}>
                  <p>{info.description}</p>

                  <IconButton onClick={() => setShow(!show)} className="closeBtn" edge='start'>
                    <CloseIcon color="primary" />
                  </IconButton>

                  <Button variant="text" onClick={() => {
                    setSelectedGen(true)
                    setShow(false)
                    getPokemon(info)
                  }} className='confirmBtn'>
                    Continue <ArrowForwardIcon />
                  </Button>
                </Box>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

