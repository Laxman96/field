import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterConfig } from 'angular2-toaster';
import { Observable } from 'rxjs';
import { CreditCardState } from '../models/credit-card.interface';
import { CreditCardPaymentFacade } from '../store/facade';
import { ToastrService } from 'ngx-toastr';
// import { CreditCardPaymentFacade } from './store/facade';
// import { CreditCardState } from './models/credit-card.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'field';
  toasterConfig: ToasterConfig;
  creditCard$: Observable<CreditCardState>;
  tbdata:any;
  expdate:any;
  
  constructor(private router: Router, private creditCardPaymentFacade: CreditCardPaymentFacade) {

    this.toasterConfig = new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: true,
      positionClass: 'toast-top-right',
      timeout: 3000
    });
    this.creditCard$ = this.creditCardPaymentFacade.data$;
  }

  ngOnInit() {
    this.creditCard$.subscribe(data => {
      // console.log(data,'caards');
      this.tbdata = data;
    })
    this.expdate = ((this.tbdata.expirationDate.getMonth()  +  "/" +  this.tbdata.expirationDate.getUTCFullYear()))
     console.log(this.expdate,'fin data')
  }

  navigate(){
    this.router.navigate(['/payment']);
  }
  regnav(){
    this.router.navigate(['/details']);
  }
}

