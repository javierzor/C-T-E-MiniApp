import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import { JsonService } from './../json.service';
import { Router } from "@angular/router";
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Location } from "@angular/common";
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-preview-generar-sesion',
  templateUrl: './preview-generar-sesion.page.html',
  styleUrls: ['./preview-generar-sesion.page.scss'],
})
export class PreviewGenerarSesionPage implements OnInit {
  datos_del_usuario_actualizados_en_quizzes: any;
  quizzes_de_equipo: any;
  datos_del_usuario_en_quizzes: any;
  datos_del_usuario_id_equipo: any;
  tipo_cuenta: any;
  constructor(private location: Location,
    private router: Router,
    private json: JsonService,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public loading: LoadingController,
    private route: ActivatedRoute,
    public modalCtrl: ModalController,
    public datepipe: DatePipe
  ) 
  
  {

  }

  ionViewWillEnter(){
    this.CargaInicialParaVistaAlEntrar();
  }
  CargaInicialParaVistaAlEntrar(){
    var email = { email: 'alguien@gmail.com' };
    this.json.verilevelJson(email).subscribe((res: any) => {
      this.datos_del_usuario_en_quizzes = res['0'];
      this.datos_del_usuario_id_equipo = res['0'].id_equipo;
      this.tipo_cuenta = res['0'].appverification;
      var data = {
        email: email,
        id_equipo: this.datos_del_usuario_en_quizzes.id_equipo
      };
      this.json.listadequizzes(data).subscribe((res: any) => {
        console.log('respuesta de CONSULTA_A: listadequizzes ', res);
        this.quizzes_de_equipo = res;
      });
    });
  }


  ngOnInit() {
  }
  IRAGENERARSESION($event, quizz, i) {
    console.log('se selecciono el siguiente quizz: DATA IRA A CUES. FATIGA SUB.', quizz);
    quizz.numero_sesion = i + 1;
    this.router.navigate(['/generar-sesion', quizz]);
  }
}
