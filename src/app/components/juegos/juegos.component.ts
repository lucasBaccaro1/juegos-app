import { Component, OnInit } from '@angular/core';
import { PalabrasServices } from './palabras.services';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  //public palabra: string;
  public palabraOculta: string;
  public intentos: number;
  public gano: boolean;
  public perdio: boolean;

  name:string ='';


  /*https://palabras-aleatorias-public-api.herokuapp.com/random*/
  letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];



  constructor(public palabras: PalabrasServices) {
    this.palabraOculta = '';
    this.intentos = 0;
    this.gano = false;
    this.perdio = false;
    
  }

  word: any;

  ngOnInit(): void {
    this.search();
  }

  search(){
    this.palabras.getWords().subscribe(data=>{
      this.name =String(data.body.Word); 
      console.log(this.name)
      this.palabraOculta = '_ '.repeat(String(this.name).length);
    });
    
  }

  comprobar(letra: string) {
    this.existeLetra(letra)
    console.log(letra);
    const palabraOcultaArr = this.palabraOculta.split(' ');
    
    for (let i = 0; i < this.name.length; i++) {
        
      if (this.name[i] == letra) {
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.verificaGane();
  }

  verificaGane() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    
    if (palabraEvaluar === this.name) {
      this.gano = true;
      console.info('Ganaste!!');
    }

    if (this.intentos >= 7) {
      this.perdio = true;
      console.error('Ups! Ya perdiste');
    }

  }

  existeLetra(letra: string) {

      console.log(this.name.indexOf(letra))

      if ((this.name).indexOf(letra) >= 0) {
        console.log('Si exsite');
      } else {
        console.log('no existe');
        this.intentos++;
      }
    

  }


}
