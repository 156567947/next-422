import React from "react";
import Link from "next/link";
import imgUrl from "@/assets/logo.png";
import classes from './main-header.module.css'
export default function MainHeader() {
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo}  href={"/"}>
          <img  src={imgUrl.src} alt="food"></img>
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href={"/meals"}>Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}