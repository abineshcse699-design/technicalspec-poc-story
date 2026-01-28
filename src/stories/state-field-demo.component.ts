import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-state-field-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  template: `
    <div class="space-y-4 w-80">

      <!-- State Input -->
      <mat-form-field appearance="outline" class="w-full">
        <mat-label>State of Expression</mat-label>
        <input matInput [(ngModel)]="state" placeholder="Leaf: length">
      </mat-form-field>

      <!-- Notes Select -->
      <mat-form-field appearance="outline" class="w-full">
        <mat-label>Notes</mat-label>
        <mat-select [(ngModel)]="notes">
          <mat-option *ngFor="let note of noteOptions" [value]="note">
            {{ note }}
          </mat-option>
        </mat-select>
      </mat-form-field>

      <p class="text-sm text-gray-600">
        <b>State:</b> {{ state }} <br />
        <b>Notes:</b> {{ notes }}
      </p>

    </div>
  `
})
export class StateFieldDemoComponent {
  state = 'Leaf: length';
  notes = '1';
  noteOptions = ['1', '2', '3', '4', '5'];
}
