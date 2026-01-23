import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link href="/week-2">Go to Week 2</Link></li>
        <li><Link href="#">Go to Week 3</Link></li>
        <li><Link href="#">Go to Week 4</Link></li>
        <li><Link href="#">Go to Week 5</Link></li>
        <li><Link href="#">Go to Week 6</Link></li>
        <li><Link href="#">Go to Week 7</Link></li>
        <li><Link href="#">Go to Week 8</Link></li>
      </ul> 
    </main>
  )
}