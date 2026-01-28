import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "../../../../node_modules/@angular/router/types/_router_module-chunk";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface NavItem {
  label: string;
  link?: string;
  key?: string;
  sections?: {
    title: string;
    links: string[];
  }[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  // ✅ ADD THIS
  @Input() navigation: NavItem[] = [];

  @Input() lang: string = 'en';
  @Input() breadcrumbLevel: string | null = null;
  @Input() breadcrumbText: string | null = null;
  @Input() breadcrumbLink: string | null = null;

  activeDropdown: string | null = null;

  get translations() {
    const translations: { [key: string]: any } = {
      en: {
        findExplore: 'Find & Explore',
        databases: 'Databases',
        genieHome: 'GENIE Database',
        searchResults: 'Search Results',
        authorities: 'Authorities',
        authorityDetails: 'Authority Details'
      },
      fr: {
        findExplore: 'Trouver & Explorer',
        databases: 'Bases de données',
        genieHome: 'Base de données GENIE',
        searchResults: 'Résultats de recherche',
        authorities: 'Services',
        authorityDetails: 'Détails du service'
      },
      es: {
        findExplore: 'Buscar y Explorar',
        databases: 'Bases de datos',
        genieHome: 'Base de datos GENIE',
        searchResults: 'Resultados de búsqueda',
        authorities: 'Autoridades',
        authorityDetails: 'Detalles de la autoridad'
      },
      de: {
        findExplore: 'Finden & Erkunden',
        databases: 'Datenbanken',
        genieHome: 'GENIE-Datenbank',
        searchResults: 'Suchergebnisse',
        authorities: 'Behörden',
        authorityDetails: 'Behördendetails'
      }
    };
    return translations[this.lang] || translations['en'];
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item')) {
      this.activeDropdown = null;
    }
  }

  toggleDropdown(dropdownName: string): void {
    this.activeDropdown =
      this.activeDropdown === dropdownName ? null : dropdownName;
  }

}

