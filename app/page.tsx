const sections = [
  { title: "A little room to think", text: "Some days, a quiet moment is all you need. Step away from the busy parts of the day, take a breath, and let your thoughts settle. There is no rush to get anywhere." },
  { title: "Small things, noticed", text: "The light through a window. A familiar song. A walk without a destination. Ordinary moments are easy to pass by, but paying attention can make them feel a little different." },
  { title: "One thing at a time", text: "Start with something small. Read a few pages, write down an idea, or finish the task in front of you. Progress does not always need to be dramatic to be worthwhile." },
  { title: "Space for what comes next", text: "Leave a little room in your day for something unexpected. A new thought, a good conversation, or simply a pause. Sometimes the best part is the part you did not plan." },
];

export default function Home() {
  return (
    <main>
      <header>
        <p className="eyebrow">TEMP ELEVAITE</p>
        <h1>A little further down.</h1>
        <p className="intro">A few thoughts for a slower day. Take your time.</p>
      </header>
      {sections.map((section, index) => (
        <section key={section.title}>
          <p className="number">0{index + 1}</p>
          <h2>{section.title}</h2>
          <p>{section.text}</p>
        </section>
      ))}
      <footer>That’s all for now.</footer>
    </main>
  );
}
