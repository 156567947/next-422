import React from "react";
import s from './page.module.css'
import { getMeal } from "@/lib/meals";
import Image from 'next/image'
import {notFound} from 'next/navigation'
export default function MealDetail({ params }) {
  const meal=getMeal(params.slug)
  if(!meal){
    notFound()
  }
  meal.instructions=meal.instructions.replaceAll(/\n/g,'<br/>')
  return (
    <>
      <header className={s.header}>
        <div className={s.image}>
          <Image src={meal.image} alt={meal.title} fill  />
        </div>
        <div className={s.headerText}>
          <h1>{meal.title}</h1>
          <p className={s.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={s.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={s.instructions} dangerouslySetInnerHTML={{
          __html:meal.instructions
        }}></p>
      </main>
    </>
  );
}
