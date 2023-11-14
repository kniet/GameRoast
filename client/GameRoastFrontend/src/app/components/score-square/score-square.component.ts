import { Component } from '@angular/core';

@Component({
  selector: 'app-score-square',
  templateUrl: './score-square.component.html',
  styleUrls: ['./score-square.component.css']
})
export class ScoreSquareComponent {
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

    return this.rgbToHex(r, g, b);
  }

  private hexToRgb(hex: string) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  }

  private rgbToHex(r: number, g: number, b: number) {
    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
  }
}

