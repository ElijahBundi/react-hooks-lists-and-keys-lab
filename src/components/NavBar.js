import React from "react";

function NavBar() {
  let links = ["home", "about", "projects"];

  const link = links.map((link) => {
    return <a key={`#${link}`}>{link}</a>
  })

  return <nav>{link}</nav>
}

export default NavBar;
