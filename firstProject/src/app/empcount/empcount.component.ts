import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empcount',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empcount.component.html',
  styleUrl: './empcount.component.css'
})
export class EmpcountComponent {

  @Input()
  all:number=20;

  @Input()
  male:number=10;

  @Input()
  female:number=10;

  @Output()
  countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();

  selectedRadioButtonValue:string='All';

  onRadioButtonChange(){
   // console.log("Your Selected Radio Button Value ===> ",this.selectedRadioButtonValue);
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  }

}
