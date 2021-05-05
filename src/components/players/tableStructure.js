function tableStructure(type, mocked = false) {
  if (mocked) {
    if (type === "hitter") {
      return mockedHitterStructure();
    } else {
      return mockedPitcherStructure();
    }
  } else {
    if (type === "hitter") {
      return hitterStructure();
    } else {
      return pitcherStructure();
    }
  }
}

function hitterStructure() {
  return {
    year: "Year",
    team: "Team",
    ab: "AB",
    g: "G",
    r: "R",
    h: "H",
    _2b: "2B",
    _3b: "3B",
    batting_hr: "HR",
    rbi: "RBI",
  };
}

function pitcherStructure() {
  return {
    year: "Year",
    team: "Team",
    g: "G",
    w: "W",
    l: "L",
    era: "ERA",
    er: "ER",
    pitching_so: "K",
    pitching_bb: "BB",
    ibb: "IBB",
    sv: "SV",
  };
}

function mockedHitterStructure() {
  return {
    year: "Year",
    age: "Age",
    team: "Team",
    g: "G",
    pa: "PA",
    ab: "AB",
    r: "R",
    h: "H",
    d: "2B",
    t: "3B",
    hr: "HR",
    rbi: "RBI",
    sb: "SB",
    cs: "CS",
    bb: "BB",
    so: "SO",
    ba: "BA",
    obp: "OBP",
    slg: "SLG",
    ops: "OPS",
    fantasyPts: "Fantasy Points",
  };
}

function mockedPitcherStructure() {
  return {
    year: "Year",
    age: "Age",
    team: "Team",
    w: "W",
    l: "L",
    era: "ERA",
    g: "G",
    gs: "GS",
    cg: "CG",
    sho: "SHO",
    sv: "SV",
    h: "H",
    r: "R",
    er: "ER",
    hr: "HR",
    bb: "BB",
    ibb: "IBB",
    so: "SO",
    hbp: "HBP",
    fantasyPts: "Fantasy Points",
  };
}

export default tableStructure;
