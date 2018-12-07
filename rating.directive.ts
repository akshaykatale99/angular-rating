import { Component, Output, Input, EventEmitter, OnInit  } from '@angular/core';

@Component({
  selector: '<rating></rating>',	
  templateUrl: './rating.directive.html',
  styleUrls: ['./rating.directive.css'],
})
export class RatingDirective implements OnInit{

  @Output() onStarClicked = new EventEmitter<any>();
  @Input() mtId;
  uniqueId;
  stars;
  constructor() { }

  ngOnInit(){
    this.uniqueId = (this.mtId != '' && this.mtId == 'undefined') ? this.mtId : '1';
    this.stars = [this.uniqueId+'_star1',this.uniqueId+'_star2',this.uniqueId+'_star3',this.uniqueId+'_star4',this.uniqueId+'_star5'];
   
  } 

  public starHover(stars, limit){
    $('.'+this.uniqueId+'_rate-star').html('star_border');
    for (let i = 0; i < limit; i++) {
      $('#' + stars[i]).html('star');
      $('#' + stars[i]).css('color','#FFC107');
    }
  }

  public starLeave(stars){
    stars.forEach( star => {
      if($('#'+star).hasClass('activeStar')){
        $('#'+star).html('star');
      }
      else{
        $('#'+star).html('star_border');
      }
    }); 
  }

  public starClick(stars, rate){
    $('.'+this.uniqueId+'_rate-star').removeClass('activeStar');
    for (let i = 0; i < rate; i++) {
      $('#' + stars[i]).addClass('activeStar');
    }
    this.onStarClicked.emit({rateId:this.uniqueId, rate:rate});
  }

}
