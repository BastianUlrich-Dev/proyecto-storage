import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  imgParent = '';

  showImg = true;

constructor(
  private authService: AuthService,
  private usersService: UsersService,
){

}

  widthImg = 10;
  name = 'Bastian';
  age = 26;
  img = 'https://source.unsplash.com/random'

  btnDisabled = true;
  btnEnabled = false;


  register = {
    name: '',
    email: '',
    password: '',
  }

  person = {
    name: 'Bastian',
    age: 26,
    avatar: 'https://source.unsplash.com/random'
  }

  names: string[] = ['Bastian','Felipe','Cristian','Juan'];
  newName = '';

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };
  

  tareas: string[] = ['Lavar','Estudiar','leer','Regar','Barrer'];
  nuevaTarea = '';

 

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }


  agregarTarea(){
    this.tareas.push(this.nuevaTarea);
    this.nuevaTarea = '';
  }

  eliminarTarea(index: number){
    this.tareas.splice(index, 1)
  }

  onRegister(){
    console.log(this.register);
  }

  onLoaded(img: string){
    console.log('log padre', img);
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }

}
