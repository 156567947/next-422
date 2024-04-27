import React from "react";
import imgUrl from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import HeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "./nav-link";
import Link from "next/link";

export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image src={imgUrl} alt="food" priority></Image>
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
