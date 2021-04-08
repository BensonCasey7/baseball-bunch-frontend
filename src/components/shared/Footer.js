import React from "react";

const Footer = () => {
  const sections = [
    {
      header: "Written By:",
      details: [
        { text: "Casey Benson" },
        { text: "Juan Brandao" },
        { text: "Nabeel Mamoon" },
        { text: "Sabarinath Suriyamurthy" },
      ],
    },
    {
      header: "Developed For:",
      details: [
        { text: "University of Illinois Urbana-Champaign" },
        { text: "CS 411: Database Systems" },
        { text: "Professor Kevin Chen-Chuan Chang" },
        { text: "2021" },
      ],
    },
    {
      header: "Stats Courtesy:",
      details: [
        {
          text: "Sean Lahman",
        },
        {
          text: "Lahman's Baseball Database",
          link: "http://www.seanlahman.com/baseball-archive/statistics/",
        },
      ],
    },
  ];

  return (
    <div className={"page-wrapper page-wrapper--footer"}>
      <div className={"footer"}>
        {sections.map((section) => {
          return (
            <div key={section.header} className={"footer__section"}>
              <div className={"footer__header"}>{section.header}</div>
              {section.details.map((detail) => {
                if (detail.link) {
                  return (
                    <a
                      key={detail.text}
                      href={detail.link}
                      className={"footer__detail footer__detail--link"}
                    >
                      {detail.text}
                    </a>
                  );
                } else {
                  return (
                    <div key={detail.text} className={"footer__detail"}>
                      {detail.text}
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
