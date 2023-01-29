import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoadingController, ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class JsonService {
  isLoading: boolean = false;
  constructor(
    public toastController: ToastController,
    private loadingController: LoadingController,
    private http: HttpClient
  ) { }
  postRegister(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/register';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  postLogin(res: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/auth/login';
    return this.http.post(url, res,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  verilevelJson(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/qr/verilevel';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  retrasodecargandos() {
    var url = 'https://controlatuequipo.com/backend/public/api/vercodigo';
    return this.http.get(url);
  }
  getDataAllOcupations() {
    var url = 'http://nube.gq/api/ocupationshow';
    return this.http.get(url);
  }
  RatingLocal2(dataespecial: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/rating/local2';
    return this.http.post(url, dataespecial,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  RatingLocal(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/rating/local';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  tipocuentacambio(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/tipocuentacambio';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  perfilcambioescalon2(datos: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/perfilcambioescalon2';
    return this.http.post(url, datos,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  filtrodeposiciones(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/filtrodehabilidades';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  creaequipo(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/creaequipo';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  tengoequipo(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/tengoequipo';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  participantesequipo(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/participantesequipo';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  cambiarimagen(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/cambiarimagen';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  miequipodetalles(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/miequipodetalles';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  participantesequipojugadores(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/participantesequipojugadores';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  cambiarescudo(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/cambiarescudo';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  creapartido(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/creapartido';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  nuestrospartidos(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/nuestrospartidos';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  insertadetallesgoles(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/insertadetallesgoles';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  insertadetallesamarillaes(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/insertadetallesamarillaes';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  insertadetallesrojaes(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/insertadetallesrojaes';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  insertadetallesfaltaes(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/insertadetallesfaltaes';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  detallesdepartidos(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/detallesdepartidos';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  insertadetalleslesiones(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/insertadetalleslesiones';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  detalleslesiones(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/detalleslesiones';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  detalleslesionesjugadorporevento(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/detalleslesionesjugadorporevento';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  insertartemporada(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/insertartemporada';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  insertarsesion(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/insertarsesion';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  mostrarsesiones(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/mostrarsesiones';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  insertarsesiondetalles(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/insertarsesiondetalles';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  mostrarsesionesdetalles(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/mostrarsesionesdetalles';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  listadequizzes(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/listadequizzes';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  guardarquizzjugadores(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/guardarquizzjugadores';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  versiyahizoquizzjugadores(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/versiyahizoquizzjugadores';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  quizzesultimasrespuestas(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/quizzesultimasrespuestas';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  quizzesdespuesporsesion(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/quizzesdespuesporsesion';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  insertarwellness(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/insertarwellness';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  cadawellness(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/cadawellness';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  insertarfatigasubjetiva(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/insertarfatigasubjetiva';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  cadafatigasubjetiva(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/cadafatigasubjetiva';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  insertarregdatossesion(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/insertarregdatossesion';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  verregistrardatossesion(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/verregistrardatossesion';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  updateinsertarregdatossesion(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/updateinsertarregdatossesion';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  funcionesdecrearejercicio(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/funcionesdecrearejercicio';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  variasfunciones(data: any) {
    var url = 'https://controlatuequipo.com/backend/public/api/variasfunciones';
    return this.http.post(url, data,
      { headers: new HttpHeaders({ "Content-Type": 'application/json' }) });
  }
  prueba() {
    var url = 'https://controlatuequipo.com/backend/public/api/pruebaa';
    return this.http.get(url);
  }
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  async loading2segundos(mensaje) {
    const actualizando = await this.loadingController.create({
      message: mensaje,
      duration: 1500,
      spinner: "lines",
      cssClass: 'custom-loader-class'
    });
    actualizando.present();
  }
  async loading1segundos(mensaje) {
    const loadingunsegundo = await this.loadingController.create({
      message: mensaje, duration: 1000, spinner: "lines",
      cssClass: 'custom-loader-class'
    });
    loadingunsegundo.present();
  }
  funciondeRETRASAR(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  public generateUrl(file: File): any {
    let formData: FormData = new FormData();
    formData.append('image', file);
    let url = "https://api.imgbb.com/1/upload?key=75e7a3aa56b50a533f2e9946f232fb6a";
    return this.http.post(url, formData);
  }
  getinfobylatitudeandlongitudeFUNCION(latitud, longitud) {
    var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitud + ',' + longitud + '&sensor=true';
    return this.http.get(url);
  }
}
