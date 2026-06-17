/**
 * Цвета с упаковок продуктов и брошюры ZOOEMBRIO / АРТ
 *
 * TSM-Asp → бирюза, Wash → оранжевый, ViT → зелёный, WaM → маджента
 * Брошюра → жёлтый, коралловый, голубой акценты
 */
export const brandSpotColors = {
  teal: '#2ab0b3',
  wash: '#e34e26',
  green: '#2d8a4e',
  wam: '#c23b7a',
  amber: '#e8d44a',
  coral: '#e8482a',
  sky: '#7ec8e3',
} as const;

export type BrandSpotColor = keyof typeof brandSpotColors;

export function spotFill(name: BrandSpotColor): string {
  return brandSpotColors[name];
}
