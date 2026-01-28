import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

interface StateExpression {
  state: string;
  notes: string;
  varieties: string[];

}

@Component({
  selector: 'app-page',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],


  templateUrl: './page.html',
  styleUrl: './page.css',

})
export class Page {

  astericsChecked = true;
  groupingChecked = true;
  tq5Checked = true;

  characteristicName = 'Leaf: length';
  expressionType = 'QN';
  growthStage = '00';

  mgChecked = true;
  msChecked = true;
  vgChecked = false;
  vsChecked = false;
  otherChecked = false;

  mgPlotType = '';
  msPlotType = '';

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

  explanation = '';

  expressionTypes = ['QN', 'QL', 'PQ'];
  plotTypes = ['Type 1', 'Type 2', 'Type 3'];
  noteOptions = ['1', '2', '3', '4', '5'];

  addNewState() {
    this.stateExpressions.push({
      state: '',
      notes: '',
      varieties: []
    });
  }

  removeState(index: number) {
    if (this.stateExpressions.length > 1) {
      this.stateExpressions.splice(index, 1);
    }
  }

  removeVariety(stateIndex: number, varietyIndex: number) {
    this.stateExpressions[stateIndex].varieties.splice(varietyIndex, 1);
  }
  
}
