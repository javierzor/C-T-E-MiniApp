import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { JsonService } from './../json.service';
import { Router } from "@angular/router";
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-crear-ejercicio',
  templateUrl: './crear-ejercicio.page.html',
  styleUrls: ['./crear-ejercicio.page.scss'],
})
export class CrearEjercicioPage implements OnInit {
  ejercicioForm = this.fb.group({
    tarea: new FormControl<number | null>(null, [Validators.required]),
    jugadoresequipo: new FormControl<number | null>(null, Validators.required),
    equipos: new FormControl<number | null>(null, Validators.required),
    nivel: new FormControl<number | null>(null, Validators.required),
    intensidad: new FormControl<number | null>(null, Validators.required),
    m2: new FormControl<string | null>(null, [Validators.required]),
    m2valor: new FormControl<number | null>(null, [Validators.required]),
    balones: new FormControl<number | null>(null, Validators.required),
    interrupciones: new FormControl<number | null>(null, Validators.required),
    jugadores: new FormControl<number | null>(null, Validators.max(25)),
    lado1: new FormControl<number | null>(null, Validators.max(100)),
    lado2: new FormControl<number | null>(null, [
      Validators.max(100),
      Validators.min(0),
    ]),
    m2jugadores: new FormControl<number | null>(null),
    valortom: new FormControl<number | null>(null),
  });
  cargaForm = this.fb.group({
    volumentrabajo: new FormControl<number | null>(null, Validators.max(180)),
    volumenpausa: new FormControl<number | null>(null, Validators.max(180)),
  });
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

  constructor(
    private location: Location,
    private router: Router,
    private json: JsonService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    public datepipe: DatePipe,
    private fb: FormBuilder
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

  recalculadodeM2PORjug() {
    //if (!this.datosTOM.m2) this.datosTOM.m2 = {};

    if (this.m2jugadores.value < 40) {
      this.m2Control.setValue('<40');
      this.ejercicioForm.controls.m2valor.setValue(0);
    }
    if (this.m2jugadores.value > 39 && this.m2jugadores.value < 66) {
      this.m2Control.setValue('40-65');
      this.ejercicioForm.controls.m2valor.setValue(1);
    }
    if (this.m2jugadores.value > 64 && this.m2jugadores.value < 91) {
      this.m2Control.setValue('65-90');
      this.ejercicioForm.controls.m2valor.setValue(2);
    }
    if (this.m2jugadores.value > 89 && this.m2jugadores.value < 141) {
      this.m2Control.setValue('90-140');
      this.ejercicioForm.controls.m2valor.setValue(3);
    }
    if (this.m2jugadores.value > 140) {
      this.m2Control.setValue('>40');
      this.ejercicioForm.controls.m2valor.setValue(3);
    }
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
    console.log('Volumen Pausa:', this.volumenpausaControl.value);
    this.limitarVolumenes();
    this.volumenpausa = event.target.value;
    this.volumenpausamultiplicable = event.target.value;
    this.totalsumadevolumenes =
      parseInt(this.volumenpausa) + parseInt(this.volumentrabajo);
    this.recalcularcarga();
  }
  onChangeVOLUMENTRABAJO(event) {
    this.limitarVolumenes();
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
      datosTOM: this.ejercicioForm.value,
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
    /* this.json.funcionesdecrearejercicio(data).subscribe((res: any) => {
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
    }); */
  }

  calcularTom() {
    console.log('Calculando Tom', this.ejercicioForm.value);
    console.log('Calculando Tom', this.ejercicioForm.status);
    if (this.ejercicioForm.status === 'INVALID') return;
    let valorTom =
      this.tareaControl.value +
      this.equiposControl.value +
      this.jugadoresequipoControl.value +
      this.nivelControl.value +
      this.intensidadControl.value +
      this.balonesControl.value +
      this.interrupcionesControl.value +
      this.m2valorControl.value;
    let factor = 0;
    console.log('TOM', valorTom);
    if (
      this.tareaControl.value === 16 &&
      this.interrupcionesControl.value === -2
    ) {
      factor = -2;
    } else if (
      this.tareaControl.value === 16 &&
      this.interrupcionesControl.value === -1
    ) {
      factor = -1;
    }
    valorTom = valorTom + factor;
    this.ejercicioForm.controls.valortom.setValue(valorTom);
  }
  calcularm2() {
    console.log('Calculando M2');
    if (this.lado1.value && this.lado2.value && this.jugadores.value) {
      console.log(this.lado1.value, this.lado2.value, this.jugadores.value);
      this.m2jugadores.setValue(
        (this.lado1.value * this.lado2.value) / this.jugadores.value
      );
      this.recalculadodeM2PORjug();
      this.calcularTom();
    }
  }
  limitarjugadores() {
    console.log('LimitarJugadores');
    console.log(this.jugadores.value);
    if (this.jugadores.value > 25) this.jugadores.setValue(25);
    if (this.jugadores.value < 0) this.jugadores.setValue(0);
    this.calcularm2();
  }
  limitarlados() {
    console.log('Limitar lados');
    if (this.lado1.value > 100) this.lado1.setValue(100);
    if (this.lado2.value > 100) this.lado2.setValue(100);
    if (this.lado1.value < 0) this.lado1.setValue(0);
    if (this.lado2.value < 0) this.lado2.setValue(0);
    this.calcularm2();
  }
  limitarVolumenes() {
    if (this.volumenpausaControl.value > 180)
      this.volumenpausaControl.setValue(180);
    if (this.volumentrabajoControl.value > 180)
      this.volumentrabajoControl.setValue(180);
    if (this.volumenpausaControl.value < 0)
      this.volumenpausaControl.setValue(0);
    if (this.volumentrabajoControl.value < 0)
      this.volumentrabajoControl.setValue(0);
  }

  get jugadores() {
    return this.ejercicioForm.controls.jugadores;
  }
  get lado1() {
    return this.ejercicioForm.controls.lado1;
  }
  get lado2() {
    return this.ejercicioForm.controls.lado2;
  }
  get m2jugadores() {
    return this.ejercicioForm.controls.m2jugadores;
  }

  get volumenpausaControl() {
    return this.cargaForm.controls.volumenpausa;
  }
  get volumentrabajoControl() {
    return this.cargaForm.controls.volumentrabajo;
  }
  get tareaControl() {
    return this.ejercicioForm.controls.tarea;
  }
  get equiposControl() {
    return this.ejercicioForm.controls.equipos;
  }
  get nivelControl() {
    return this.ejercicioForm.controls.nivel;
  }
  get intensidadControl() {
    return this.ejercicioForm.controls.intensidad;
  }
  get m2Control() {
    return this.ejercicioForm.controls.m2;
  }
  get balonesControl() {
    return this.ejercicioForm.controls.balones;
  }
  get interrupcionesControl() {
    return this.ejercicioForm.controls.interrupciones;
  }
  get jugadoresequipoControl() {
    return this.ejercicioForm.controls.jugadoresequipo;
  }

  get valorControl() {
    return this.ejercicioForm.controls.valortom;
  }
  get m2valorControl() {
    return this.ejercicioForm.controls.m2valor;
  }
}