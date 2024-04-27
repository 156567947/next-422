import React from "react";
import s from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
export default async function MealsPage() {
  const meals=await getMeals();
  return (
    <>
      <header className={s.header}>
        <h1>
          dELICIOUS MEALS, created <span className={s.highlight}>by you</span>
        </h1>
        <p>choose your favorite</p>
        <p className={s.cta}>
          <Link href={"/meals/share"}>share your meal</Link>
        </p>
      </header>
      <main className={s.main}>
        <MealsGrid meals={meals}></MealsGrid>
      </main>
    </>
  );
}
