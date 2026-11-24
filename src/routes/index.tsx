import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Live Out Loud — Personal Growth" },
      { name: "description", content: "Live Out Loud helps you grow with courage, clarity and joy." },
      { property: "og:title", content: "Live Out Loud — Personal Growth" },
      { property: "og:description", content: "Grow with courage, clarity and joy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { t: "Speak up", d: "Find your voice and use it without apology." },
  { t: "Show up", d: "Small daily habits that build unshakable confidence." },
  { t: "Stand out", d: "Design a life that feels unmistakably yours." },
];

function Index() {
  const [done, setDone] = useState(false);
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <span className="font-display text-2xl">Live Out Loud</span>
        <a href="#join" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Join</a>
      </header>
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-accent">Personal growth, turned up</p>
        <h1 className="font-display text-6xl leading-[0.95] md:text-8xl">
          Stop shrinking.<br /><span className="text-primary">Live out loud.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Tools, talks and a community for people ready to stop playing small and start living with courage.
        </p>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.t}>
              <span className="font-display text-5xl text-primary">0{i + 1}</span>
              <h2 className="mt-3 font-display text-3xl">{p.t}</h2>
              <p className="mt-2 text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="join" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-5xl">Get the weekly nudge</h2>
        <p className="mt-4 text-muted-foreground">One bold idea in your inbox every Monday.</p>
        {done ? (
          <p className="mt-8 text-xl text-primary">You're in. Go be loud.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input required type="email" placeholder="you@email.com" className="flex-1 rounded-full border border-input bg-card px-5 py-3" />
            <button className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground">Subscribe</button>
          </form>
        )}
      </section>
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">© 2026 Live Out Loud</footer>
    </main>
  );
}
