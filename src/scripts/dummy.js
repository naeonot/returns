/* Temporary homepage demo content: a children's poem with original inline SVG illustrations. */
const main = document.querySelector(".home-main");

if (main) {
  const illustration = (scene, label) => {
    const scenes = {
      moon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#211a2d"/><stop offset="1" stop-color="#090d18"/></linearGradient><radialGradient id="glow"><stop stop-color="#f6dca2" stop-opacity=".5"/><stop offset="1" stop-color="#f6dca2" stop-opacity="0"/></radialGradient></defs><rect width="900" height="480" fill="url(#sky)"/><circle cx="660" cy="155" r="145" fill="url(#glow)"/><circle cx="660" cy="155" r="75" fill="#f4dfad"/><circle cx="685" cy="130" r="75" fill="#211a2d"/><g fill="#f5e7c6"><circle cx="130" cy="90" r="3"/><circle cx="260" cy="160" r="4"/><circle cx="420" cy="75" r="3"/><circle cx="790" cy="65" r="3"/><circle cx="540" cy="250" r="2"/></g><path d="M0 390 Q170 320 340 395 T700 380 T900 390 V480 H0Z" fill="#111b20"/><path d="M0 430 Q180 360 360 430 T720 415 T900 430 V480 H0Z" fill="#0b1219"/><g fill="#c9b38c"><path d="M180 365q-24-28-8-49 18 14 19 33 6-31 29-38 4 31-18 49z"/><ellipse cx="195" cy="367" rx="17" ry="7"/></g></svg>`,
      boat: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480"><defs><linearGradient id="sea" x2="0" y2="1"><stop stop-color="#283747"/><stop offset="1" stop-color="#101923"/></linearGradient></defs><rect width="900" height="480" fill="#171b2a"/><circle cx="180" cy="110" r="46" fill="#e8cda0"/><g fill="#f3e8d2"><circle cx="340" cy="75" r="3"/><circle cx="550" cy="115" r="3"/><circle cx="760" cy="70" r="4"/><circle cx="680" cy="185" r="2"/></g><path d="M0 250 Q130 220 260 250 T520 250 T780 250 T1040 250 V480 H0Z" fill="url(#sea)"/><path d="M0 330 Q120 300 240 330 T480 330 T720 330 T960 330" fill="none" stroke="#8b9ba5" stroke-opacity=".35" stroke-width="4"/><path d="M330 270 L610 270 L555 335 Q455 365 385 335Z" fill="#b57b58"/><path d="M460 115 L460 270 L580 270Z" fill="#e9dfc8"/><path d="M450 135 L450 270 L350 270Z" fill="#c5d0d0"/><path d="M0 420 Q160 380 320 420 T640 420 T960 420" fill="none" stroke="#6f8793" stroke-opacity=".4" stroke-width="3"/></svg>`,
      garden: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 480"><defs><linearGradient id="dawn" x2="0" y2="1"><stop stop-color="#30243a"/><stop offset="1" stop-color="#d08a70"/></linearGradient></defs><rect width="900" height="480" fill="url(#dawn)"/><circle cx="690" cy="150" r="68" fill="#f1d6a8" opacity=".9"/><path d="M0 340 Q180 260 360 340 T720 330 T1080 340 V480 H0Z" fill="#25352e"/><path d="M0 390 Q190 330 390 395 T780 390 T1080 400 V480 H0Z" fill="#17271f"/><g stroke="#b9c18a" stroke-width="6" fill="none"><path d="M180 420Q180 330 165 280"/><path d="M370 440Q390 340 420 300"/><path d="M650 430Q630 340 660 270"/><path d="M780 430Q800 350 780 315"/></g><g fill="#f1c7c2"><circle cx="165" cy="275" r="22"/><circle cx="145" cy="285" r="17"/><circle cx="185" cy="290" r="17"/><circle cx="420" cy="295" r="22"/><circle cx="400" cy="305" r="17"/><circle cx="440" cy="310" r="17"/><circle cx="660" cy="265" r="22"/><circle cx="640" cy="275" r="17"/><circle cx="680" cy="280" r="17"/></g><g fill="#f4d99b"><circle cx="165" cy="285" r="8"/><circle cx="420" cy="305" r="8"/><circle cx="660" cy="275" r="8"/></g></svg>`
    };
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(scenes[scene]);
  };

  main.innerHTML = `
    <section class="poem-hero" aria-labelledby="poem-title">
      <p class="eyebrow">A LITTLE POEM / FOR CURIOUS DREAMERS</p>
      <h1 id="poem-title">The Moon Forgot<br>to Sleep<span>.</span></h1>
      <p class="poem-intro">A tiny bedtime adventure, where the stars keep secrets and the night is full of wonder.</p>
      <div class="poem-hero-art"><img src="${illustration("moon", "A sleepy crescent moon above a quiet hill")}" alt="A sleepy crescent moon above a quiet, starry hill"></div>
      <p class="poem-byline">A small story in three little verses</p>
    </section>
    <section class="poem-verses" aria-label="The poem">
      <article class="verse-card">
        <img src="${illustration("moon", "The moon watching over the hills")}" alt="The moon watching over a quiet hill beneath the stars">
        <div><span class="verse-number">01 / THE NIGHT</span><h2>When the sky turns blue</h2><p>The moon forgot to go to bed,<br>And counted stars above its head.<br>It hummed a tune to clouds drifting by,<br>Then waved hello to a firefly.</p></div>
      </article>
      <article class="verse-card verse-reverse">
        <img src="${illustration("boat", "A little paper boat sailing under the stars")}" alt="A little sailboat gliding across a moonlit sea">
        <div><span class="verse-number">02 / THE JOURNEY</span><h2>A boat made of dreams</h2><p>A paper boat set out to sea,<br>With one small wish and a honeybee.<br>It sailed past waves that whispered low,<br>To find the place where dreamers go.</p></div>
      </article>
      <article class="verse-card">
        <img src="${illustration("garden", "A garden of flowers beneath the evening sky")}" alt="Soft pink flowers blooming beneath the evening moon">
        <div><span class="verse-number">03 / GOODNIGHT</span><h2>Until morning light</h2><p>The sleepy flowers closed their eyes,<br>While silver clouds crossed velvet skies.<br>The moon yawned wide, the stars shone bright,<br>And tucked the whole world in goodnight.</p></div>
      </article>
    </section>
    <section class="poem-ending">
      <span class="ending-star">✦</span>
      <p class="eyebrow">AND THAT'S THE STORY</p>
      <h2>Sweet dreams,<br>little wanderer.</h2>
      <p>Tomorrow is another page waiting to be turned.</p>
    </section>
  `;
}
