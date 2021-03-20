function mockedPlayer(playerId) {
  if (playerId === "bryankr01") {
    return mockedHitterData();
  } else if (playerId === "degroja01") {
    return mockedPitcherData();
  } else {
    return null;
  }
}

function mockedHitterData() {
  return {
    playerID: "bryankr01",
    nameFirst: "Kris",
    nameLast: "Bryant",
    nameGiven: "Kris Bryant",
    weight: "230",
    height: "77",
    bats: "R",
    throws: "R",
    type: "hitter",
    seasons: [
      {
        year: "2018",
        age: "26",
        team: "CHC",
        g: "102",
        pa: "457",
        ab: "389",
        r: "59",
        h: "106",
        d: "28",
        t: "3",
        hr: "13",
        rbi: "52",
        sb: "2",
        cs: "4",
        bb: "48",
        so: "107",
        ba: ".272",
        obp: ".374",
        slg: ".460",
        ops: ".834",
        fantasyPts: "250",
      },
      {
        year: "2019",
        age: "27",
        team: "CHC",
        g: "147",
        pa: "634",
        ab: "543",
        r: "108",
        h: "153",
        d: "35",
        t: "1",
        hr: "31",
        rbi: "77",
        sb: "4",
        cs: "0",
        bb: "74",
        so: "145",
        ba: ".282",
        obp: ".382",
        slg: ".521",
        ops: ".903",
        fantasyPts: "350",
      },
    ],
  };
}

function mockedPitcherData() {
  return {
    playerID: "degroja01",
    nameFirst: "Jacob",
    nameLast: "deGrom",
    nameGiven: "Jacob deGrom",
    weight: "180",
    height: "76",
    bats: "L",
    throws: "R",
    type: "pitcher",
    seasons: [
      {
        year: "2018",
        age: "30",
        team: "NYM",
        w: "10",
        l: "9",
        era: "1.70",
        g: "32",
        gs: "32",
        cg: "1",
        sho: "0",
        sv: "0",
        h: "152",
        r: "48",
        er: "41",
        hr: "10",
        bb: "46",
        ibb: "3",
        so: "269",
        hbp: "5",
        fantasyPts: "450",
      },
      {
        year: "2019",
        age: "31",
        team: "NYM",
        w: "11",
        l: "8",
        era: "2.43",
        g: "32",
        gs: "32",
        cg: "0",
        sho: "0",
        sv: "0",
        h: "154",
        r: "59",
        er: "55",
        hr: "19",
        bb: "44",
        ibb: "1",
        so: "255",
        hbp: "7",
        fantasyPts: "400",
      },
    ],
  };
}

export default mockedPlayer;
