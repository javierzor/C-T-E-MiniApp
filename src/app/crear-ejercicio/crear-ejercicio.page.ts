import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { JsonService } from './../json.service';
import { Router } from "@angular/router";
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crear-ejercicio',
  templateUrl: './crear-ejercicio.page.html',
  styleUrls: ['./crear-ejercicio.page.scss'],
})
export class CrearEjercicioPage implements OnInit {
  b15: number = 0;
  c15: number = 0;
  d15: number = 0;
  e15: number = 0;
  b63: number = 0;
  c63: number = 0;
  d63: number = 0;
  e63: number = 0;
  f63: number = 0;
  g63: number = 0;
  h63: number = 0;
  i63: number = 0;
  j63: number = 0;
  totalmanualtemporal: any;
  mostrarjugadoresporquipo: any;
  mostrarmetroscuadradosporjugador: any;
  volumenpausa: string;
  volumentrabajo: string;
  totalsumadevolumenes: number = 0;
  contar: any;
  valor: any;
  intensidadtrabajo: any;
  intensidadpausa: any;
  id_sesion: any;
  id_equipo: any;
  quizzseleccionadoquellega: any;
  muestralecualseraelnumerodesuejercicio: any;
  comentario: any;
  multiplo1: any;
  volumentrabajomultiplicable: any;
  multiplo2: any;
  volumenpausamultiplicable: any;
  carga: any;
  constructor(
    private location: Location,
    private router: Router,
    private json: JsonService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    public datepipe: DatePipe
  ) {
    this.contar = 'SI';
    this.carga = 0;
    this.route.params.subscribe(params => {
      this.quizzseleccionadoquellega = params;
      var data = {
        nombre_solicitud: 'contarejercicioalentrar',
        id_sesion: this.quizzseleccionadoquellega.id_sesion,
        id_equipo: this.quizzseleccionadoquellega.id_equipo
      }
      this.json.funcionesdecrearejercicio(data).subscribe((res: any) => {
        console.log('este seria el numero de ejercicio, en caso de que el tecnico desee generar otro ej. mas de los que ya tiene', res)
        this.muestralecualseraelnumerodesuejercicio = res;
      });
    });
    this.volumentrabajo = '0';
    this.volumenpausa = '0';
    this.mostrarjugadoresporquipo = "auto";
    this.mostrarmetroscuadradosporjugador = "auto";
    this.e15 = 0;
  }
  ONCHANGEcomentario(event) {
    console.log('OnChange', event.target.value);
    this.comentario = event.target.value;
  }
  ngOnInit() {
  }
  volveraatras() {
    this.router.navigate(['/generar-sesion', this.quizzseleccionadoquellega]);
  }
  B15(event) {
    this.b15 = event.target.value;
    if (this.b15 > 1 && this.b15 < 4) {
      this.mostrarjugadoresporquipo = '2 a 3';
    }
    if (this.b15 > 3 && this.b15 < 7) {
      this.mostrarjugadoresporquipo = '4 a 6';
    }
    if (this.b15 > 6 && this.b15 < 11) {
      this.mostrarjugadoresporquipo = '7 a 10';
    }
    if (this.b15 < 2) {
      this.mostrarjugadoresporquipo = 'verifique';
    }
    if (this.b15 > 11) {
      this.mostrarjugadoresporquipo = 'verifique';
    }
  }
  C15(event) {
    this.c15 = event.target.value;
  }
  D15(event) {
    this.d15 = event.target.value;
  }
  recalculadodeM2PORjug() {
    console.log('recalculando metros al cuadrado por jugador');
    this.e15 = (this.c15 * this.d15) / this.b15;
    if (this.e15 < 40) {
      this.mostrarmetroscuadradosporjugador = '<40';
    }
    if (this.e15 > 39 && this.e15 < 66) {
      this.mostrarmetroscuadradosporjugador = '40-65';
    }
    if (this.e15 > 64 && this.e15 < 91) {
      this.mostrarmetroscuadradosporjugador = '65-90';
    }
    if (this.e15 > 89 && this.e15 < 141) {
      this.mostrarmetroscuadradosporjugador = '90-140';
    }
    if (this.e15 > 140) {
      this.mostrarmetroscuadradosporjugador = '>140';
    }
  }
  B63(event) {
    console.log('function: Recalculador de variable, B63=:', event.target.value);
    this.b63 = event.target.value;
  }
  C63(event) {
    console.log('function: Recalculador de variable, C63=:', event.target.value);
    this.c63 = event.target.value;
  }
  D63(event) {
    console.log('function: Recalculador de variable, D63=:', event.target.value);
    this.d63 = event.target.value;
  }
  E63(event) {
    console.log('function: Recalculador de variable, E63=:', event.target.value);
    this.e63 = event.target.value;
  }
  F63(event) {
    console.log('function: Recalculador de variable, F63=:', event.target.value);
    this.f63 = event.target.value;
  }
  G63(event) {
    console.log('function: Recalculador de variable, G63=:', event.target.value);
    this.g63 = event.target.value;
  }
  H63(event) {
    console.log('function: Recalculador de variable, H63=:', event.target.value);
    this.h63 = event.target.value;
  }
  I63(event) {
    console.log('function: Recalculador de variable, I63=:', event.target.value);
    this.i63 = event.target.value;
  }
  recalculandoJ63() {
    console.log('RECALCULANDO TOTAL (J63) ');
  }
  ONCHANGETOTALMANUALTEMPORAL(event) {
    this.totalmanualtemporal = event.target.value;
  }
  ONCHANGEvalor(event) {
    this.valor = event.target.value; console.log('onchange', event.target.value);
  }
  Changeintensidadtrabajo(event) {
    console.log('onchange', event.target.value);
    this.intensidadtrabajo = event.target.value; console.log('onchange', event.target.value);
    this.recalcularcarga();
  }
  Changeintensidadpausa(event) {
    console.log('onchange', event.target.value);
    this.intensidadpausa = event.target.value; console.log('onchange', event.target.value);
    this.recalcularcarga();
  }
  OnchangeVOLUMENPAUSA(event) {
    console.log('onchange Vol. Pausa', event.target.value);
    this.volumenpausa = event.target.value;
    this.volumenpausamultiplicable = event.target.value;
    this.totalsumadevolumenes = parseInt(this.volumenpausa) + parseInt(this.volumentrabajo);
    this.recalcularcarga();
  }
  onChangeVOLUMENTRABAJO(event) {
    console.log('onchange Vol. Trabajo', event.target.value);
    this.volumentrabajo = event.target.value;
    this.volumentrabajomultiplicable = event.target.value;
    this.totalsumadevolumenes = parseInt(this.volumenpausa) + parseInt(this.volumentrabajo);
    this.recalcularcarga();
  }
  Changecontrar(event) {
    console.log('change', event.target.value);
    this.contar = event.target.value;
    this.recalcularcarga();
    if (this.contar == 'NO') {
      this.totalsumadevolumenes = 0;
    }
    if (this.contar == 'SI')
      this.totalsumadevolumenes = parseInt(this.volumenpausa) + parseInt(this.volumentrabajo);
  }
  recalcularcarga() {
    this.multiplo1 = this.intensidadtrabajo * this.volumentrabajomultiplicable;
    this.multiplo2 = this.intensidadpausa * this.volumenpausamultiplicable;
    this.carga = this.multiplo1 + this.multiplo2;
    if (this.carga > 0 && this.carga < 1000000) {
    }
    else {
      this.carga = 0;
    }
  }
  async guardar() {
    var data = {
      nombre_solicitud: 'guardarejercicio',
      id_sesion: this.quizzseleccionadoquellega.id_sesion,
      id_equipo: this.quizzseleccionadoquellega.id_equipo,
      b15: this.b15,
      c15: this.c15,
      d15: this.d15,
      e15: this.e15,
      b63: this.b63,
      c63: this.c63,
      d63: this.d63,
      e63: this.e63,
      f63: this.f63,
      g63: this.g63,
      h63: this.h63,
      i63: this.i63,
      j63: this.j63,
      totalmanualtemporal: this.totalmanualtemporal,
      mostrarjugadoresporquipo: this.mostrarjugadoresporquipo,
      mostrarmetroscuadradosporjugador: this.mostrarmetroscuadradosporjugador,
      volumenpausa: this.volumenpausa,
      volumentrabajo: this.volumentrabajo,
      totalsumadevolumenes: this.totalsumadevolumenes,
      contar: this.contar,
      valor: this.valor,
      intensidadtrabajo: this.intensidadtrabajo,
      intensidadpausa: this.intensidadpausa,
      comentario: this.comentario,
      carga: this.carga
    }
    console.log('informacion a guardar:', data);
    const guardado = await this.loadingController.create({
      message: 'Ejercicio Guardado', spinner: 'bubbles', duration: 1600,
    });
    const verifique = await this.loadingController.create({
      message: 'verifique su conexion', spinner: 'bubbles', duration: 1300,
    });
    this.json.funcionesdecrearejercicio(data).subscribe((res: any) => {
      console.log('res', res);
      if (res.id > 0) {
        console.log('guardado, mostrando alerta exitosa');
        this.router.navigate(['/generar-sesion', this.quizzseleccionadoquellega]);
        guardado.present();
      }
      else {
        verifique.present();
      }
    });
  }
}