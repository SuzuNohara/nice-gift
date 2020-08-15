import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {

  @Input('text') text: string;
  @Input('size') size: number;
  @Input('align') align: string;

  public images: string[];
  public finalText: string;

  constructor() {
    this.images = [];
  }

  ngOnInit() {
    this.finalText = this.text.toLowerCase();
    this.init();
  }

  private init(){
    this.images = [];
    for(let te of this.finalText){
      if(te == ' '){
        this.images.push('/assets/assets/space.png');
      }else if(te == '!'){
        this.images.push('/assets/assets/admiration.png');
      }else if(te == 'ñ'){
        this.images.push('/assets/assets/nn.png');
      }else if(te == ','){
        this.images.push('/assets/assets/coma.png');
      }else if(te == '.'){
        this.images.push('/assets/assets/point.png');
      }else if(te == '?'){
        this.images.push('/assets/assets/question.png');
      }else{
        this.images.push('/assets/assets/' + te + '.png');
      }
    }
  }

  public changeText(message: string){
    this.finalText = message.toLowerCase();
    this.init();
  }

}
