import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { JsonService } from './../json.service';
import { Router } from "@angular/router";
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ModalojosgenerarsesionPage } from '../modalojosgenerarsesion/modalojosgenerarsesion.page';
@Component({
  selector: 'app-generar-sesion',
  templateUrl: './generar-sesion.page.html',
  styleUrls: ['./generar-sesion.page.scss'],
})
export class GenerarSesionPage implements OnInit {
  quizzseleccionadoquellega: any;
  id_quizz_seleccionado: any;
  datos_del_usuario_en_quizzes_evaluacion: any;
  tipo_cuenta: any;
  minutos: any;
  minutosenstring: string | number | Date;
  minutosconmiles: number;
  metroscuadradosporjugador: number = 0;
  jugadores_que_respondieron_el_quizz_despues: any;
  respuesta_guardar_fatigasubjetiva: any;
  cadafatigasubjetiva_actualizado: any;
  public botongenerarsesion: any;
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
  ejercicioscreadosanteriormente: any;
  respuestacontarvolumensesionparaseccion1: any;
  lugarsesion: any;
  objetivo1: any;
  objetivo2: any;
  quebotonmostrarenlugar: any;
  quebotonmostrarenobjetivo1: any;
  quebotonmostrarenobjetivo2: any;
  respuestaguardarlugarsesion: any;
  respuestaguardarobjetivo1: any;
  respuestaguardarobjetivo2: any;
  respuestaconsultarobjetivosylugar: any;
  quebotonmostrarenefectividad_sesion: string;
  efectividad_sesion: any;
  respuestaguardarefectividad_sesion: any;
  intensidad_sesion: any;
  carga_sesion: any;
  valorocultointensidad_sesion: any;
  carga_sesionsinporcentaje: number;
  respuestaguardarintensidad_sesion: any;
  respuestacontarcargasesionparaseccion1: any;
  constructor(
    private location: Location,
    private router: Router,
    private json: JsonService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public modalController: ModalController,
    public datepipe: DatePipe
  ) {
    this.quebotonmostrarenlugar = 'muestraeldesactivado';
    this.quebotonmostrarenobjetivo1 = 'muestraeldesactivado';
    this.quebotonmostrarenobjetivo2 = 'muestraeldesactivado';
    this.quebotonmostrarenefectividad_sesion = 'muestraeldesactivado';
    this.botongenerarsesion = "activado";
    this.route.params.subscribe(params => {
      this.quizzseleccionadoquellega = params;
      console.log('vista que recibe el item entre parametros: (EN seccion 1 generar sesion)', this.quizzseleccionadoquellega);
      this.id_quizz_seleccionado = this.quizzseleccionadoquellega.id_sesion;
      var dataconsultarobjetivosylugar = {
        nombre_solicitud: 'consultarobjetivosylugar',
        id_sesion: this.quizzseleccionadoquellega.id_sesion
      }
      this.json.variasfunciones(dataconsultarobjetivosylugar).subscribe((res: any) => {
        console.log(' respuesta consultarobjetivosylugar ', res);
        this.respuestaconsultarobjetivosylugar = res;
        this.lugarsesion = this.respuestaconsultarobjetivosylugar.lugarsesion;
        this.objetivo1 = this.respuestaconsultarobjetivosylugar.objetivo1;
        this.objetivo2 = this.respuestaconsultarobjetivosylugar.objetivo2;
        this.efectividad_sesion = this.respuestaconsultarobjetivosylugar.efectividad_sesion;
        this.intensidad_sesion = this.respuestaconsultarobjetivosylugar.intensidad_sesion;
        if (this.intensidad_sesion == '6-20') { this.valorocultointensidad_sesion = 0 }
        if (this.intensidad_sesion == '6') { this.valorocultointensidad_sesion = 5.09 }
        if (this.intensidad_sesion == '7') { this.valorocultointensidad_sesion = 6.61 }
        if (this.intensidad_sesion == '8') { this.valorocultointensidad_sesion = 8.39 }
        if (this.intensidad_sesion == '9') { this.valorocultointensidad_sesion = 10.50 }
        if (this.intensidad_sesion == '10') { this.valorocultointensidad_sesion = 12.97 }
        if (this.intensidad_sesion == '11') { this.valorocultointensidad_sesion = 15.86 }
        if (this.intensidad_sesion == '12') { this.valorocultointensidad_sesion = 19.23 }
        if (this.intensidad_sesion == '13') { this.valorocultointensidad_sesion = 23.16 }
        if (this.intensidad_sesion == '14') { this.valorocultointensidad_sesion = 27.73 }
        if (this.intensidad_sesion == '15') { this.valorocultointensidad_sesion = 33.03 }
        if (this.intensidad_sesion == '16') { this.valorocultointensidad_sesion = 39.17 }
        if (this.intensidad_sesion == '17') { this.valorocultointensidad_sesion = 46.26 }
        if (this.intensidad_sesion == '1') { this.valorocultointensidad_sesion = 54.46 }
        if (this.intensidad_sesion == '19') { this.valorocultointensidad_sesion = 63.90 }
        if (this.intensidad_sesion == '20') { this.valorocultointensidad_sesion = 74.78 }
        this.carga_sesion = this.respuestaconsultarobjetivosylugar.carga_sesion;
        var datacontarvolumensesionparaseccion1 = {
          nombre_solicitud: 'contarvolumensesionparaseccion1',
          id_sesion: this.quizzseleccionadoquellega.id_sesion
        }
        this.json.variasfunciones(datacontarvolumensesionparaseccion1).subscribe((res: any) => {
          console.log(' respuesta respuestacontarvolumensesionparaseccion1 ', res);
          this.respuestacontarvolumensesionparaseccion1 = res;
          this.calcularcarga_sesion();
        });
        var datacontarcargasesionparaseccion1 = {
          nombre_solicitud: 'contarcargasesionparaseccion1',
          id_sesion: this.quizzseleccionadoquellega.id_sesion
        }
        this.json.variasfunciones(datacontarcargasesionparaseccion1).subscribe((res: any) => {
          console.log(' respuesta contarcargasesionparaseccion1 ', res);
          this.respuestacontarcargasesionparaseccion1 = res;
          this.calcularcarga_sesion();
        });
      });
      var email = { email: 'alguien@gmail.com' };
      this.json.verilevelJson(email).subscribe((res: any) => {
        console.log('informacion del usuario en quizz fatigasubjetiva:', res)
        this.datos_del_usuario_en_quizzes_evaluacion = res['0'];
        this.tipo_cuenta = res['0'].appverification;
        this.actualizarfatigasubjetiva()
      });
    });
  }
  calcularcarga_sesion() {
    this.carga_sesionsinporcentaje = this.valorocultointensidad_sesion * this.respuestacontarvolumensesionparaseccion1 * this.efectividad_sesion;
    this.carga_sesion = this.carga_sesionsinporcentaje / 100;
  }
  async ONCHANGEintensidad_sesion(event) {
    console.log('ONCHANGE', event.target.value);
    this.intensidad_sesion = event.target.value;
    if (this.intensidad_sesion == '6-20') { this.valorocultointensidad_sesion = 0 }
    if (this.intensidad_sesion == '6') { this.valorocultointensidad_sesion = 5.09 }
    if (this.intensidad_sesion == '7') { this.valorocultointensidad_sesion = 6.61 }
    if (this.intensidad_sesion == '8') { this.valorocultointensidad_sesion = 8.39 }
    if (this.intensidad_sesion == '9') { this.valorocultointensidad_sesion = 10.50 }
    if (this.intensidad_sesion == '10') { this.valorocultointensidad_sesion = 12.97 }
    if (this.intensidad_sesion == '11') { this.valorocultointensidad_sesion = 15.86 }
    if (this.intensidad_sesion == '12') { this.valorocultointensidad_sesion = 19.23 }
    if (this.intensidad_sesion == '13') { this.valorocultointensidad_sesion = 23.16 }
    if (this.intensidad_sesion == '14') { this.valorocultointensidad_sesion = 27.73 }
    if (this.intensidad_sesion == '15') { this.valorocultointensidad_sesion = 33.03 }
    if (this.intensidad_sesion == '16') { this.valorocultointensidad_sesion = 39.17 }
    if (this.intensidad_sesion == '17') { this.valorocultointensidad_sesion = 46.26 }
    if (this.intensidad_sesion == '1') { this.valorocultointensidad_sesion = 54.46 }
    if (this.intensidad_sesion == '19') { this.valorocultointensidad_sesion = 63.90 }
    if (this.intensidad_sesion == '20') { this.valorocultointensidad_sesion = 74.78 }
    const mensajeactualizando = await this.loadingController.create({
      message: 'Actualizando espere...', spinner: 'bubbles', duration: 20000,
    });
    const exito = await this.loadingController.create({
      message: 'actualizado con exito!', spinner: 'bubbles', duration: 1500,
    });
    mensajeactualizando.present();
    var dataguardarintensidad_sesion = {
      nombre_solicitud: 'guardarintensidad_sesion',
      id_sesion: this.quizzseleccionadoquellega.id_sesion,
      intensidad_sesion: this.intensidad_sesion
    }
    this.json.variasfunciones(dataguardarintensidad_sesion).subscribe((res: any) => {
      console.log(' respuesta guardarintensidad_sesion ', res);
      this.respuestaguardarintensidad_sesion = res;
      if (res > 0) {
        mensajeactualizando.dismiss();
        exito.present();
        this.calcularcarga_sesion();
      }
    });
  }
  activarOdesactivarFormulario() {
    console.log('function: activar o desactivar formulario...');
    if (this.botongenerarsesion == "activado") {
      this.botongenerarsesion = "desactivado";
    }
    else if (this.botongenerarsesion == "desactivado") {
      this.botongenerarsesion = "activado";
    }
  }
  ONCHANGElugar(event) {
    console.log('ONCHANGE', event.target.value);
    this.quebotonmostrarenlugar = 'muestraelactivado';
    this.lugarsesion = event.target.value;
  }
  ONCHANGEobjetivo1(event) {
    console.log('ONCHANGE', event.target.value);
    this.quebotonmostrarenobjetivo1 = 'muestraelactivado';
    this.objetivo1 = event.target.value;
  }
  ONCHANGEobjetivo2(event) {
    console.log('ONCHANGE', event.target.value);
    this.quebotonmostrarenobjetivo2 = 'muestraelactivado';
    this.objetivo2 = event.target.value;
  }
  ONCHANGEefectividad_sesion(event) {
    console.log('ONCHANGE', event.target.value);
    this.quebotonmostrarenefectividad_sesion = 'muestraelactivado';
    if (event.target.value > 0 && event.target.value < 101) {
      this.efectividad_sesion = event.target.value;
    }
    if (event.target.value < 0) {
      this.efectividad_sesion = 0;
    }
    if (event.target.value > 100) {
      this.efectividad_sesion = 100;
    }
  }
  async GUARDARlugarsesion() {
    const mensajeactualizando = await this.loadingController.create({
      message: 'Actualizando espere...', spinner: 'bubbles', duration: 20000,
    });
    const exito = await this.loadingController.create({
      message: 'actualizado con exito!', spinner: 'bubbles', duration: 1500,
    });
    mensajeactualizando.present();
    var dataguardarlugarsesion = {
      nombre_solicitud: 'guardarlugarsesion',
      id_sesion: this.quizzseleccionadoquellega.id_sesion,
      lugarsesion: this.lugarsesion
    }
    this.json.variasfunciones(dataguardarlugarsesion).subscribe((res: any) => {
      console.log(' respuesta guardarlugarsesion ', res);
      this.respuestaguardarlugarsesion = res;
      if (res > 0) {
        mensajeactualizando.dismiss();
        exito.present();
        this.quebotonmostrarenlugar = 'muestraeldesactivado';
      }
    });
  }
  async GUARDARobjetivo1() {
    const mensajeactualizando = await this.loadingController.create({
      message: 'Actualizando espere...', spinner: 'bubbles', duration: 20000,
    });
    const exito = await this.loadingController.create({
      message: 'actualizado con exito!', spinner: 'bubbles', duration: 1500,
    });
    mensajeactualizando.present();
    var dataguardarobjetivo1 = {
      nombre_solicitud: 'guardarobjetivo1',
      id_sesion: this.quizzseleccionadoquellega.id_sesion,
      objetivo1: this.objetivo1
    }
    this.json.variasfunciones(dataguardarobjetivo1).subscribe((res: any) => {
      console.log(' respuesta guardarobjetivo1 ', res);
      this.respuestaguardarobjetivo1 = res;
      if (res > 0) {
        mensajeactualizando.dismiss();
        exito.present();
        this.quebotonmostrarenobjetivo1 = 'muestraeldesactivado';
      }
    });
  }
  async GUARDARobjetivo2() {
    const mensajeactualizando = await this.loadingController.create({
      message: 'Actualizando espere...', spinner: 'bubbles', duration: 20000,
    });
    const exito = await this.loadingController.create({
      message: 'actualizado con exito!', spinner: 'bubbles', duration: 1500,
    });
    mensajeactualizando.present();
    var dataguardarobjetivo2 = {
      nombre_solicitud: 'guardarobjetivo2',
      id_sesion: this.quizzseleccionadoquellega.id_sesion,
      objetivo2: this.objetivo2
    }
    this.json.variasfunciones(dataguardarobjetivo2).subscribe((res: any) => {
      console.log(' respuesta guardarobjetivo2 ', res);
      this.respuestaguardarobjetivo2 = res;
      if (res > 0) {
        mensajeactualizando.dismiss();
        exito.present();
        this.quebotonmostrarenobjetivo2 = 'muestraeldesactivado';
      }
    });
  }
  async GUARDARefectividad_sesion() {
    const mensajeactualizando = await this.loadingController.create({
      message: 'Actualizando espere...', spinner: 'bubbles', duration: 20000,
    });
    const exito = await this.loadingController.create({
      message: 'actualizado con exito!', spinner: 'bubbles', duration: 1500,
    });
    mensajeactualizando.present();
    var dataguardarefectividad_sesion = {
      nombre_solicitud: 'guardarefectividad_sesion',
      id_sesion: this.quizzseleccionadoquellega.id_sesion,
      efectividad_sesion: this.efectividad_sesion
    }
    this.json.variasfunciones(dataguardarefectividad_sesion).subscribe((res: any) => {
      console.log(' respuesta guardarefectividad_sesion ', res);
      this.respuestaguardarefectividad_sesion = res;
      if (res > 0) {
        mensajeactualizando.dismiss();
        exito.present();
        this.quebotonmostrarenobjetivo2 = 'muestraeldesactivado';
        this.calcularcarga_sesion();
      }
    });
  }
  async verlugarsesion() {
    const modal = await this.modalController.create({
      component: ModalojosgenerarsesionPage,
      componentProps: {
        cssClass: 'my-custom-class',
        'dataparaelmodal': this.lugarsesion,
      }
    });
    modal.onDidDismiss().then((data) => {
    });
    console.log('enviando estos datos al modal qr', this.lugarsesion);
    return await modal.present();
  }
  async verobjetivo1sesion() {
    const modal = await this.modalController.create({
      component: ModalojosgenerarsesionPage,
      componentProps: {
        cssClass: 'my-custom-class',
        'dataparaelmodal': this.objetivo1,
      }
    });
    modal.onDidDismiss().then((data) => {
    });
    console.log('enviando estos datos al modal qr', this.objetivo1);
    return await modal.present();
  }
  async verobjetivo2sesion() {
    const modal = await this.modalController.create({
      component: ModalojosgenerarsesionPage,
      componentProps: {
        cssClass: 'my-custom-class',
        'dataparaelmodal': this.objetivo2,
      }
    });
    modal.onDidDismiss().then((data) => {
    });
    console.log('enviando estos datos al modal qr', this.objetivo2);
    return await modal.present();
  }
  limpiarvariables() {
    console.log('function: limpiando variables...');
    this.b15 = 0; this.c15 = 0; this.d15 = 0; this.e15 = 0;
    this.j63 = 0;
    if (this.botongenerarsesion == "activado") {
      this.botongenerarsesion = "desactivado";
    }
    else if (this.botongenerarsesion == "desactivado") {
      this.botongenerarsesion = "activado";
    }
  }
  B15(event) {
    this.b15 = event.target.value;
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
  generarejercicio() {
    this.router.navigate(['/crear-ejercicio', this.quizzseleccionadoquellega]);
  }
  async actualizarfatigasubjetiva() {
    if (this.quizzseleccionadoquellega != null && this.quizzseleccionadoquellega != undefined) {
      const mensajeactualizando = await this.loadingController.create({
        message: 'Actualizando.', spinner: 'bubbles', duration: 1000,
      });
      mensajeactualizando.present();
      var data = {
        nombre_solicitud: 'alentrarengenerarsesion',
        id_sesion: this.quizzseleccionadoquellega.id_sesion,
        id_equipo: this.quizzseleccionadoquellega.id_equipo
      }
      this.json.funcionesdecrearejercicio(data).subscribe((res: any) => {
        console.log('Matriz de la info de los ejercicios creados anteriormente ', res);
        this.ejercicioscreadosanteriormente = res;
        mensajeactualizando.dismiss();
      });
    }
    else {
      this.route.params.subscribe(async params => {
        this.quizzseleccionadoquellega = params;
        const mensajeactualizando = await this.loadingController.create({
          message: 'Actualizando.', spinner: 'bubbles', duration: 2000,
        });
        mensajeactualizando.present();
        var data = {
          nombre_solicitud: 'alentrarengenerarsesion',
          id_sesion: this.quizzseleccionadoquellega.id_sesion,
          id_equipo: this.quizzseleccionadoquellega.id_equipo
        }
        this.json.funcionesdecrearejercicio(data).subscribe((res: any) => {
          console.log('Matriz de la info de los ejercicios creados anteriormente ', res);
          this.ejercicioscreadosanteriormente = res;
          mensajeactualizando.dismiss();
        });
      });
    }
  }
  volveraatras() {
    this.router.navigate(['/preview-generar-sesion']);
  }
  ngOnInit() {
  }
  ionChangeMINUTOS(event) {
    this.minutosenstring = event.target.value;
    var datatimeformato = new Date(this.minutosenstring);
    this.minutosconmiles = datatimeformato.getFullYear();
    this.minutos = this.minutosconmiles - 1000;
    console.log('Minutos datat en el Cambio "this.minutos"::', this.minutos);
  }
  async enviarfatigasubjetiva() {
    const quizz_guardado = await this.loadingController.create({
      message: 'Informacion Guardada', spinner: 'bubbles', duration: 1600,
    });
    const verifique = await this.loadingController.create({
      message: 'Verifique su conexión a internet.', spinner: 'bubbles', duration: 1600,
    });
    var data = {
      minutos: this.minutos,
      jugadores_que_respondieron_el_quizz_despues: this.jugadores_que_respondieron_el_quizz_despues
    };
    this.json.insertarfatigasubjetiva(data).subscribe((res: any) => {
      console.log('Respuesta de "guardar los fatigasubjetiva x sesion.:', res)
      this.respuesta_guardar_fatigasubjetiva = res;
      if (res = true) {
        quizz_guardado.present();
        this.actualizarfatigasubjetiva();
      }
      else {
        verifique.present();
      }
    });
  }
  eliminarejercicio(event, ejercicios) {
    console.log('intentando borrar', ejercicios);
    var data = {
      nombre_solicitud: 'borrarejercicio',
      id_ejercicio: ejercicios.id_ejercicio
    }
    this.json.funcionesdecrearejercicio(data).subscribe((res: any) => {
      console.log('Matriz de la info de los ejercicios creados anteriormente ', res);
      this.ejercicioscreadosanteriormente = res;
      if (res > 0) {
        this.actualizarfatigasubjetiva()
        console.log('borrado');
        var datacontarvolumensesionparaseccion1 = {
          nombre_solicitud: 'contarvolumensesionparaseccion1',
          id_sesion: this.quizzseleccionadoquellega.id_sesion
        }
        this.json.variasfunciones(datacontarvolumensesionparaseccion1).subscribe((res: any) => {
          console.log(' respuesta respuestacontarvolumensesionparaseccion1 ', res);
          this.respuestacontarvolumensesionparaseccion1 = res;
          this.calcularcarga_sesion();
        });
      }
    });
    var datacontarcargasesionparaseccion1 = {
      nombre_solicitud: 'contarcargasesionparaseccion1',
      id_sesion: this.quizzseleccionadoquellega.id_sesion
    }
    this.json.variasfunciones(datacontarcargasesionparaseccion1).subscribe((res: any) => {
      console.log(' respuesta contarcargasesionparaseccion1 ', res);
      this.respuestacontarcargasesionparaseccion1 = res;
      this.calcularcarga_sesion();
    });
  }
}
