/** Генератор «клочков оторванной цветной бумаги» */

export type TornPaperOptions = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  points?: number;
  tearDepth?: number;
  seed?: number;
  roughness?: number;
  rotation?: number;
};

function hash(n: number): number {
  const x = Math.sin(n * 127.1 + n * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/** Рваный край — чуть мягче, с редкими глубокими разрывами */
function tornNoise(angle: number, seed: number): number {
  const sector = Math.floor(angle * 11 + seed * 0.7);
  const sectorRand = hash(sector + seed * 13);

  if (sectorRand < 0.3) {
    return (hash(angle * 5 + seed) - 0.5) * 0.08;
  }

  if (sectorRand < 0.78) {
    const fine = (hash(angle * 36 + seed + 3) - 0.5) * 0.65;
    const jag = hash(Math.floor(angle * 48) + seed + 11) > 0.52 ? 0.38 : -0.22;
    return fine + jag;
  }

  const rip = hash(angle * 3.1 + seed + 29);
  return (rip - 0.22) * 2.4 + (hash(angle * 20 + seed) - 0.5) * 0.38;
}

export function createTornPaperBlob(options: TornPaperOptions): string {
  const {
    cx,
    cy,
    rx,
    ry,
    points = 92,
    tearDepth = 17,
    seed = 1,
    roughness = 0.12,
    rotation = 0,
  } = options;

  const rot = (rotation * Math.PI) / 180;
  const segments: string[] = [];

  for (let i = 0; i <= points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const wobble =
      Math.sin(angle * 2.5 + seed) * roughness +
      Math.cos(angle * 4 + seed * 1.3) * roughness * 0.55;
    const scale = 1 + wobble;
    const tear = tornNoise(angle, seed) * tearDepth;

    const localX = Math.cos(angle) * (rx * scale + tear);
    const localY = Math.sin(angle) * (ry * scale + tear * 0.88);

    const x = cx + localX * Math.cos(rot) - localY * Math.sin(rot);
    const y = cy + localX * Math.sin(rot) + localY * Math.cos(rot);

    segments.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`);
  }

  return `${segments.join(' ')} Z`;
}

export function createTornPaperCorner(size = 256, seed = 1): string {
  return createTornPaperBlob({
    cx: size * 0.7,
    cy: size * 0.3,
    rx: size * 0.55,
    ry: size * 0.5,
    points: 68,
    tearDepth: 12,
    seed,
    roughness: 0.14,
    rotation: -18,
  });
}

export function createTornPaperBadge(size = 256, seed = 1): string {
  return createTornPaperBlob({
    cx: size / 2,
    cy: size / 2,
    rx: size * 0.4,
    ry: size * 0.38,
    points: 60,
    tearDepth: 10,
    seed,
    roughness: 0.11,
    rotation: 12,
  });
}
