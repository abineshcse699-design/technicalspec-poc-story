import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface StateExpression {
  state: string;
  notes: string;
  varieties: string[];
}

@Component({

  selector: 'app-page12',
  imports:
   [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ],

  templateUrl: './page12.html',
  styleUrl: './page12.css',

})

export class Page12 {
  stateExpressions: StateExpression[] = [
    {
      state: 'Leaf: length',
      notes: '1',
      varieties: ['1', '2', '3', '4']
    },
    {
      state: 'Leaf: length',
      notes: '2',
      varieties: ['1', '2', '3', '4']
    }
  ];

  noteOptions = ['1', '2', '3', '4', '5'];

  removeVariety(stateIndex: number, varietyIndex: number) {
    this.stateExpressions[stateIndex].varieties.splice(varietyIndex, 1);
  }

  removeState(index: number) {
    if (this.stateExpressions.length > 1) {
      this.stateExpressions.splice(index, 1);
    }
  }
}
