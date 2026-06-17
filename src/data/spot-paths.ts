/**
 * Клочки по углам — отдельные SVG для каждого угла
 */
import type { BrandSpotColor } from './brand-colors';
import {
  createTornPaperBadge,
  createTornPaperBlob,
  createTornPaperCorner,
} from '../utils/spot-generator';

export type SpotColor = BrandSpotColor;

const cornerOpts = { points: 88, tearDepth: 17, roughness: 0.13 } as const;

export const spotCornerTL = createTornPaperBlob({
  cx: 85,
  cy: 80,
  rx: 115,
  ry: 95,
  seed: 17,
  rotation: -20,
  ...cornerOpts,
});

export const spotCornerBL = createTornPaperBlob({
  cx: 90,
  cy: 175,
  rx: 130,
  ry: 90,
  seed: 31,
  rotation: 8,
  tearDepth: 19,
  points: 90,
  roughness: 0.12,
});

export const spotCornerTR = createTornPaperBlob({
  cx: 170,
  cy: 78,
  rx: 105,
  ry: 90,
  seed: 43,
  rotation: 16,
  ...cornerOpts,
});

export const spotCornerBR = createTornPaperBlob({
  cx: 168,
  cy: 172,
  rx: 115,
  ry: 98,
  seed: 59,
  rotation: -12,
  tearDepth: 18,
  points: 86,
  roughness: 0.13,
});

export const cornerSpotPaths = [spotCornerTL, spotCornerBL, spotCornerTR, spotCornerBR] as const;

/** Цветовые схемы: [верх-лево, низ-лево, верх-право, низ-право] */
export const spotPalettes: Record<string, SpotColor[]> = {
  hero: ['teal', 'amber', 'coral', 'wam'],
  technology: ['wash', 'teal', 'green', 'wam'],
  products: ['wam', 'amber', 'wash', 'teal'],
  about: ['amber', 'wam', 'sky', 'green'],
  contact: ['teal', 'wash', 'sky', 'amber'],
};

export const spotCardCorner = createTornPaperCorner(256, 83);
export const spotCardCorners: Record<string, string> = {
  teal: createTornPaperCorner(256, 83),
  orange: createTornPaperCorner(256, 91),
  green: createTornPaperCorner(256, 105),
  magenta: createTornPaperCorner(256, 117),
};
export const spotStepBadge = createTornPaperBadge(256, 97);
