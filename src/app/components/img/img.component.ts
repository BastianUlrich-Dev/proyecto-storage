import { Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent{


  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  
  imageDefault = './assets/images/default.png';
  // counter = 0;
  // counterfn: number | undefined;
  // @Input() imagen: string = '';

  constructor() { }


  imgError(){
    this.img = this.imageDefault;
  }

  imgLoad(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
