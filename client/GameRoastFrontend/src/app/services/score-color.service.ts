import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreColorService {

  constructor() { }

  interpolateColor(value: number): string {
    const startColor = '#EA3A13';
    const middleColor = '#F2E148';
    const endColor = '#66CC33';

    const t = (value - 1) / 9;

    if (value <= 5) {
      return this.lerp(startColor, middleColor, t * 2);
    } else {
      return this.lerp(middleColor, endColor, (t - 0.5) * 2);
    }
  }

  private lerp(start: string, end: string, t: number): string {
    const startColor = this.hexToRgb(start);
    const endColor = this.hexToRgb(end);

    const r = Math.round(startColor.r + t * (endColor.r - startColor.r));
    const g = Math.round(startColor.g + t * (endColor.g - startColor.g));
    const b = Math.round(startColor.b + t * (endColor.b - startColor.b));

    return `rgb(${r}, ${g}, ${b})`;
  }

  private hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
  }
}
