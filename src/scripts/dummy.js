/* Temporary homepage demo content: four classic nursery rhymes with original inline SVG illustrations. */
const main = document.querySelector(".home-main");

if (main) {
  const illustration = (scene) => {
    const scenes = {
      star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#211a2d"/><stop offset="1" stop-color="#090d18"/></linearGradient><radialGradient id="glow"><stop stop-color="#f6dca2" stop-opacity=".5"/><stop offset="1" stop-color="#f6dca2" stop-opacity="0"/></radialGradient></defs><rect width="900" height="480" fill="url(#sky)"/><circle cx="450" cy="220" r="190" fill="url(#glow)"/><path d="m450 70 36 105 111 2-89 66 33 108-91-64-91 64 33-108-89-66 111-2z" fill="#f4dfad"/><g fill="#fff0c8"><circle cx="120" cy="90" r="5"/><circle cx="245" cy="190" r="4"/><circle cx="710" cy="100" r="5"/><circle cx="780" cy="260" r="3"/><circle cx="180" cy="350" r="3"/><circle cx="650" cy="390" r="4"/></g><path d="M0 405Q180 340 360 405T720 400T1080 405V480H0Z" fill="#111b20"/></svg>`,
      jack: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480"><rect width="900" height="480" fill="#263344"/><circle cx="700" cy="110" r="62" fill="#f0d9a7"/><path d="M0 350Q180 280 360 350T720 345T1080 350V480H0Z" fill="#304536"/><path d="M0 410Q190 340 380 410T760 405T1080 410V480H0Z" fill="#1c2b25"/><path d="M190 390 440 150 690 390Z" fill="#88705d"/><path d="M250 330 440 150 630 330Z" fill="#b59a7b"/><path d="M415 390 440 150 465 390" stroke="#e5d2b3" stroke-width="8"/><g fill="#e8c89b"><circle cx="360" cy="270" r="28"/><circle cx="520" cy="270" r="28"/></g><g fill="#354052"><path d="M335 300h50l-8 85h-34z"/><path d="M495 300h50l-8 85h-34z"/></g></svg>`,
      humpty: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480"><rect width="900" height="480" fill="#252337"/><circle cx="710" cy="100" r="54" fill="#f2d6a4"/><path d="M0 360Q200 300 400 360T800 355T1100 360V480H0Z" fill="#293b35"/><rect x="220" y="270" width="460" height="46" rx="5" fill="#a77b59"/><rect x="250" y="316" width="32" height="125" fill="#79563f"/><rect x="618" y="316" width="32" height="125" fill="#79563f"/><ellipse cx="450" cy="225" rx="95" ry="115" fill="#f1dfbd"/><circle cx="420" cy="205" r="8" fill="#433b39"/><circle cx="480" cy="205" r="8" fill="#433b39"/><path d="M425 250Q450 270 475 250" fill="none" stroke="#a56d62" stroke-width="7" stroke-linecap="round"/><path d="M390 125Q450 70 510 125L500 155H400Z" fill="#b85d56"/></svg>`,
      roses: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480"><defs><linearGradient id="dawn" x2="0" y2="1"><stop stop-color="#30243a"/><stop offset="1" stop-color="#d08a70"/></linearGradient></defs><rect width="900" height="480" fill="url(#dawn)"/><circle cx="690" cy="130" r="60" fill="#f1d6a8"/><path d="M0 350Q180 280 360 350T720 340T1080 350V480H0Z" fill="#25352e"/><g stroke="#b9c18a" stroke-width="7" fill="none"><path d="M180 430Q180 320 165 250"/><path d="M370 440Q390 330 420 270"/><path d="M650 430Q630 330 660 240"/><path d="M780 430Q800 340 780 285"/></g><g fill="#f1c7c2"><circle cx="165" cy="245" r="26"/><circle cx="140" cy="260" r="19"/><circle cx="190" cy="265" r="19"/><circle cx="420" cy="265" r="26"/><circle cx="395" cy="280" r="19"/><circle cx="445" cy="285" r="19"/><circle cx="660" cy="235" r="26"/><circle cx="635" cy="250" r="19"/><circle cx="685" cy="255" r="19"/></g><g fill="#f4d99b"><circle cx="165" cy="260" r="9"/><circle cx="420" cy="280" r="9"/><circle cx="660" cy="250" r="9"/></g></svg>`
    };
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(scenes[scene]);
  };

  const rhymes = [
    {
      number: "01 / THE NIGHT SKY",
      title: "Twinkle, Twinkle, Little Star",
      image: "star",
      alt: "A glowing golden star shining in a deep blue night sky",
      lines: "Twinkle, twinkle, little star,<br>How I wonder what you are!<br>Up above the world so high,<br>Like a diamond in the sky.<br><br>Twinkle, twinkle, little star,<br>How I wonder what you are!"
    },
    {
      number: "02 / THE HILL",
      title: "Jack and Jill",
      image: "jack",
      alt: "Two children climbing a green hill beneath the evening sky",
      lines: "Jack and Jill went up the hill<br>To fetch a pail of water.<br>Jack fell down and broke his crown,<br>And Jill came tumbling after.<br><br>Up Jack got, and home did trot,<br>As fast as he could caper;<br>He went to bed to mend his head<br>With vinegar and brown paper."
    },
    {
      number: "03 / THE KING'S WALL",
      title: "Humpty Dumpty",
      image: "humpty",
      alt: "A cheerful egg-shaped character sitting on a brick wall",
      lines: "Humpty Dumpty sat on a wall,<br>Humpty Dumpty had a great fall.<br>All the king's horses and all the king's men<br>Couldn't put Humpty together again."
    },
    {
      number: "04 / THE FLOWER RING",
      title: "Ring-a-Ring o' Roses",
      image: "roses",
      alt: "Pink roses blooming in a garden at sunset",
      lines: "Ring-a-ring o' roses,<br>A pocket full of posies;<br>A-tishoo! A-tishoo!<br>We all fall down!"
    }
  ];

  main.innerHTML = `
    <section class="poem-hero" aria-labelledby="poem-title">
      <p class="eyebrow">A LITTLE NOSTALGIA / FOR EVERYONE</p>
      <h1 id="poem-title">Classic Nursery<br>Rhymes<span>.</span></h1>
      <p class="poem-intro">Four familiar little rhymes, brought together with a touch of childhood magic.</p>
      <div class="poem-hero-art"><img src="${illustration("star")}" alt="A glowing golden star in a magical night sky"></div>
      <p class="poem-byline">Four timeless rhymes to read and remember</p>
    </section>
    <section class="poem-verses" aria-label="Classic nursery rhymes">
      ${rhymes.map((rhyme) => `
        <article class="verse-card">
          <img src="${illustration(rhyme.image)}" alt="${rhyme.alt}">
          <div><span class="verse-number">${rhyme.number}</span><h2>${rhyme.title}</h2><p>${rhyme.lines}</p></div>
        </article>
      `).join("")}
    </section>
    <section class="poem-ending">
      <span class="ending-star">✦</span>
      <p class="eyebrow">A LITTLE TRIP DOWN MEMORY LANE</p>
      <h2>Some rhymes<br>stay with us.</h2>
      <p>From one generation to the next, a little rhythm goes a long way.</p>
    </section>
  `;
}
