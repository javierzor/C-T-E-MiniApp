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
  totalmanualtemporal: any;
  mostrarjugadoresporquipo: any;
  mostrarmetroscuadradosporjugador: string = 'auto';
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

  valorCalculado: number;
  metros: number = null;
  m2calculado: number;
  datosTOM: {
    tarea: number;
    jugadores: number;
    equipos: number;
    nivel: number;
    intensidad: number;
    balones: number;
    interrupciones: number;
    metros: number;

    m2?: {
      jugadores?: number;
      lado1?: number;
      lado2?: number;
      m2jugador?: number;
    };
  };
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
    this.route.params.subscribe((params) => {
      this.quizzseleccionadoquellega = params;
      var data = {
        nombre_solicitud: 'contarejercicioalentrar',
        id_sesion: this.quizzseleccionadoquellega.id_sesion,
        id_equipo: this.quizzseleccionadoquellega.id_equipo,
      };
      this.json.funcionesdecrearejercicio(data).subscribe((res: any) => {
        console.log(
          'este seria el numero de ejercicio, en caso de que el tecnico desee generar otro ej. mas de los que ya tiene',
          res
        );
        this.muestralecualseraelnumerodesuejercicio = res;
      });
    });
    this.volumentrabajo = '0';
    this.volumenpausa = '0';
    this.mostrarjugadoresporquipo = 'auto';
    //this.mostrarmetroscuadradosporjugador = 'auto';
  }
  ONCHANGEcomentario(event) {
    console.log('OnChange', event.target.value);
    this.comentario = event.target.value;
  }
  ngOnInit() {}
  volveraatras() {
    this.router.navigate(['/generar-sesion', this.quizzseleccionadoquellega]);
  }

  recalculadodeM2PORjug(
    m2jugadores: number | string,
    m2lado1: number | string,
    m2lado2: number | string
  ) {
    console.log('recalculando metros al cuadrado por jugador');
    if (!this.datosTOM.m2) this.datosTOM.m2 = {};
    this.datosTOM.m2.lado1 = m2lado1 as number;
    this.datosTOM.m2.lado2 = m2lado2 as number;
    this.datosTOM.m2.jugadores = m2jugadores as number;

    if (m2jugadores == 0 || m2lado1 == 0 || m2lado2 == 0) return;
    this.m2calculado =
      ((m2lado1 as number) * (m2lado2 as number)) / (m2jugadores as number);
    if (this.m2calculado < 40) {
      this.mostrarmetroscuadradosporjugador = '<40';
      this.metros = 0;
    }
    if (this.m2calculado > 39 && this.m2calculado < 66) {
      this.mostrarmetroscuadradosporjugador = '40-65';
      this.metros = 1;
    }
    if (this.m2calculado > 64 && this.m2calculado < 91) {
      this.mostrarmetroscuadradosporjugador = '65-90';
      this.metros = 2;
    }
    if (this.m2calculado > 89 && this.m2calculado < 141) {
      this.mostrarmetroscuadradosporjugador = '90-140';
      this.metros = 3;
    }
    if (this.m2calculado > 140) {
      this.mostrarmetroscuadradosporjugador = '>40';
      this.metros = 3;
    }
    this.datosTOM.m2.m2jugador = this.m2calculado;
  }

  ONCHANGETOTALMANUALTEMPORAL(event) {
    this.totalmanualtemporal = event.target.value;
  }
  ONCHANGEvalor(event) {
    this.valor = event.target.value;
    console.log('onchange', event.target.value);
  }
  Changeintensidadtrabajo(event) {
    console.log('onchange', event.target.value);
    this.intensidadtrabajo = event.target.value;
    console.log('onchange', event.target.value);
    this.recalcularcarga();
  }
  Changeintensidadpausa(event) {
    console.log('onchange', event.target.value);
    this.intensidadpausa = event.target.value;
    console.log('onchange', event.target.value);
    this.recalcularcarga();
  }
  OnchangeVOLUMENPAUSA(event) {
    console.log('onchange Vol. Pausa', event.target.value);
    this.volumenpausa = event.target.value;
    this.volumenpausamultiplicable = event.target.value;
    this.totalsumadevolumenes =
      parseInt(this.volumenpausa) + parseInt(this.volumentrabajo);
    this.recalcularcarga();
  }
  onChangeVOLUMENTRABAJO(event) {
    console.log('onchange Vol. Trabajo', event.target.value);
    this.volumentrabajo = event.target.value;
    this.volumentrabajomultiplicable = event.target.value;
    this.totalsumadevolumenes =
      parseInt(this.volumenpausa) + parseInt(this.volumentrabajo);
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
      this.totalsumadevolumenes =
        parseInt(this.volumenpausa) + parseInt(this.volumentrabajo);
  }
  recalcularcarga() {
    this.multiplo1 = this.intensidadtrabajo * this.volumentrabajomultiplicable;
    this.multiplo2 = this.intensidadpausa * this.volumenpausamultiplicable;
    this.carga = this.multiplo1 + this.multiplo2;
    if (this.carga > 0 && this.carga < 1000000) {
    } else {
      this.carga = 0;
    }
  }
  async guardar() {
    var data = {
      nombre_solicitud: 'guardarejercicio',
      id_sesion: this.quizzseleccionadoquellega.id_sesion,
      id_equipo: this.quizzseleccionadoquellega.id_equipo,
      //variables de TOM
      datosTOM: this.datosTOM,
      //

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
      carga: this.carga,
    };
    console.log('informacion a guardar:', data);
    const guardado = await this.loadingController.create({
      message: 'Ejercicio Guardado',
      spinner: 'bubbles',
      duration: 1600,
    });
    const verifique = await this.loadingController.create({
      message: 'verifique su conexion',
      spinner: 'bubbles',
      duration: 1300,
    });
    this.json.funcionesdecrearejercicio(data).subscribe((res: any) => {
      console.log('res', res);
      if (res.id > 0) {
        console.log('guardado, mostrando alerta exitosa');
        this.router.navigate([
          '/generar-sesion',
          this.quizzseleccionadoquellega,
        ]);
        guardado.present();
      } else {
        verifique.present();
      }
    });
  }

  calcular(
    tarea: string,
    jugadores: string,
    equipos: string,
    nivel: string,
    intensidad: string,
    balones: string,
    interrupciones: string
  ) {
    console.log('tarea:', tarea);
    console.log('jugadores:', jugadores);
    console.log('equipos:', parseInt(equipos));
    console.log('nivel:', nivel);
    console.log('intesidad:', intensidad);
    console.log('metros:', this.metros);
    console.log('balones:', balones);
    console.log('interrupciones:', interrupciones);
    this.datosTOM = {
      tarea: parseInt(tarea),
      equipos: parseInt(equipos),
      jugadores: parseInt(jugadores),
      nivel: parseInt(nivel),
      intensidad: parseInt(intensidad),
      metros: this.metros,
      balones: parseInt(balones),
      interrupciones: parseInt(interrupciones),
    };
    if (
      tarea &&
      jugadores &&
      equipos &&
      nivel &&
      intensidad &&
      this.metros >= 0 &&
      balones &&
      interrupciones
    ) {
      console.log('Valores Correctos');
      this.valorCalculado =
        parseInt(tarea) +
        parseInt(equipos) +
        parseInt(jugadores) +
        parseInt(nivel) +
        parseInt(intensidad) +
        this.metros +
        parseInt(balones) +
        parseInt(interrupciones);

      let factor = 0;
      if (tarea === '16' && interrupciones === '-2') {
        factor = -2;
      } else if (tarea === '16' && interrupciones === '-1') {
        factor = -1;
      }

      this.valorCalculado + factor;
      console.log('Se Calculo el Valor:', this.valorCalculado);
    } else {
      this.valorCalculado = null;
    }
  }
}