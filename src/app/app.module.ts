import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'services/routng.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListService } from 'services/list.service';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { Quote_ModalComponent, NgbdModalFocus } from './quote.modal/quote.modal.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from 'services/loginservice';
import { LogoutComponent } from './logout/logout.component';
import { ProjectComponent } from './project/project.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeadListComponent,
    MapComponent,
    Quote_ModalComponent,
    NgbdModalFocus,
    LoginComponent,
    LogoutComponent,
    ProjectComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,

    AgmCoreModule.forRoot({
      apiKey: ''

    }),


  ],
  providers: [ListService, LoginService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [Quote_ModalComponent]
})
export class AppModule { }
