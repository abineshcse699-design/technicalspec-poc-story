import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'upov-authority-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './authority-card.component.html',
  styleUrls: ['./authority-card.component.scss'],
})
export class AuthorityCard {
  /** Country / Authority info */
  @Input() flag?: string | null;
  @Input() countryName?: string;
  @Input() isoCode?: string;
  @Input() authorityName?: string;

  /** Protection info */
  @Input() totalSpecies?: number;
  @Input() coverageType?: string;

  /** Contact info */
  @Input() phone?: string;
  @Input() email?: string;
  @Input() website?: string;

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
