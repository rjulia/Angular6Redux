import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {

  cargando: boolean;
  // subscription: Subscription;
  private componentDestroyed = new Subject();

  constructor( public authService: AuthService,
              public store: Store<AppState> ) { }

  ngOnInit() {
    // this.subscription =  this.store.select('ui')
    // .subscribe(ui => this.cargando = ui.isLoading );
    this.store.pipe(
      select('ui'),
      takeUntil(this.componentDestroyed))
      .subscribe(ui => this.cargando = ui.isLoading );
  }
  onSubmit( data: any ) {
    console.log(data);
    this.authService.crearUsuario( data.nombre, data.email, data.password );
  }

  ngOnDestroy(){
    this.componentDestroyed.next();
    this.componentDestroyed.unsubscribe();
  }

}
