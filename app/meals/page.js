import React, { Suspense } from "react";
import s from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals}></MealsGrid>;
}
export default function MealsPage() {
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
        <Suspense fallback={<p className={s.loading}>loading meals...</p>}>
          <Meals></Meals>
        </Suspense>
      </main>
    </>
  );
}
