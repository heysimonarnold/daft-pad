import "./style.css";

const absoluteBasePath = new URL(
  import.meta.env.BASE_URL,
  window.location.origin,
).href;

const audio: Record<string, HTMLAudioElement> = {
  "3": new Audio(`${absoluteBasePath}sounds/work-it.mp3`),
  "4": new Audio(`${absoluteBasePath}sounds/make-it.mp3`),
  "5": new Audio(`${absoluteBasePath}sounds/do-it.mp3`),
  "6": new Audio(`${absoluteBasePath}sounds/makes-us.mp3`),
  w: new Audio(`${absoluteBasePath}sounds/harder.mp3`),
  e: new Audio(`${absoluteBasePath}sounds/better.mp3`),
  r: new Audio(`${absoluteBasePath}sounds/faster.mp3`),
  t: new Audio(`${absoluteBasePath}sounds/stronger.mp3`),
  s: new Audio(`${absoluteBasePath}sounds/more-than.mp3`),
  d: new Audio(`${absoluteBasePath}sounds/hour.mp3`),
  f: new Audio(`${absoluteBasePath}sounds/our.mp3`),
  g: new Audio(`${absoluteBasePath}sounds/never.mp3`),
  z: new Audio(`${absoluteBasePath}sounds/ever.mp3`),
  x: new Audio(`${absoluteBasePath}sounds/after.mp3`),
  c: new Audio(`${absoluteBasePath}sounds/work-is.mp3`),
  v: new Audio(`${absoluteBasePath}sounds/over.mp3`),
};

document.addEventListener("keydown", (event: KeyboardEvent) => {
  const code = event.key;

  if (code) playSound(code);
});

const btns = document.querySelectorAll<HTMLElement>(".btn");

btns.forEach((btn) => {
  const code = btn.dataset.sound;
  btn.addEventListener("click", (_: MouseEvent) => {
    if (code) playSound(code);
  });
});

function playSound(code: string) {
  const key = document.querySelector<HTMLElement>(`.key${code}`);

  const sound = audio[code];
  if (!sound || !key) return;

  sound.currentTime = 0;
  sound.play();

  key.classList.add("is-pressed");
  key.addEventListener(
    "transitionend",
    () => key.classList.remove("is-pressed"),
    { once: true },
  );
}
