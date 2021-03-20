function tableStructure(type) {
  if (type === "hitter") {
    return hitterStructure();
  } else {
    return pitcherStructure();
  }
}

function hitterStructure() {
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

function pitcherStructure() {
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
