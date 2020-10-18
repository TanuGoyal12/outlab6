import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
// import { MatInputModule } from '@angular/material/input';

// import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ContactComponent,
    HeaderComponent,
    // ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule,
    AppRoutingModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
