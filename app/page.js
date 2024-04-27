import Link from "next/link";
import s from "./page.module.css";
import ImageSlideshow from "@/components/images/image-sildeshow";
export default function Home() {
  return (
    <>
      <header className={s.header}>
        <div className={s.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={s.hero}>
            <h1>for nextlevel foodies</h1>
            <p>share</p>
          </div>
          <div className={s.cta}>
            <Link href={'/community'}>Community</Link>
            <Link href={'/meals'}>meals</Link>
          </div>
        </div>
      </header>
      <main>

      </main>
    </>
  );
}
