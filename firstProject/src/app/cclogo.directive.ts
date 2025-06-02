import { Directive, HostBinding,Input } from '@angular/core';


enum CardType{
  VISA='visa',
  MASTERCARD='mastercard',
  AMERICAN_EXPRESS='american-express',
  UNKNOWN='unknown'
}

@Directive({
  selector: '[appCclogo]',
  standalone: true
})
export class CclogoDirective {

  @HostBinding('src')
  imageSource:string="";

  @Input()
  cardNumber:string="";


  getCardTypeFromNumber():CardType{

    if(this.cardNumber){ //If this card Number is available

      if(this.cardNumber.startsWith('4315')){
        return CardType.VISA
      }else if(this.cardNumber.startsWith('4728')){
        return CardType.MASTERCARD
      }else if(this.cardNumber.startsWith('8722')){
        return CardType.AMERICAN_EXPRESS
      }else
      {
        return CardType.UNKNOWN
      }

    }else{
      return CardType.UNKNOWN
    }
    

  }

  ngOnChanges(){
    this.imageSource='card-types/'+this.getCardTypeFromNumber()+'.png'
    //card-types/visa.png
  }


  constructor() { }

  //<img src="a.jpg">

}
