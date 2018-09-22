import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs/hammer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormpageComponent } from './formpage/formpage.component';
import { FormsModule } from '@angular/forms';
import { SubmitformpageComponent } from './submitformpage/submitformpage.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { FormdetailpageComponent } from './formdetailpage/formdetailpage.component';
import { FormpagelistviewComponent } from './formpagelistview/formpagelistview.component';
import { FormpagecardviewComponent } from './formpagecardview/formpagecardview.component';
import { TinymceComponent } from './tinymce/tinymce.component';

import { FileUploadModule } from "ng2-file-upload";

@NgModule({
  declarations: [
    AppComponent,
    FormpageComponent,
    SubmitformpageComponent,
    PageheaderComponent,
    FormdetailpageComponent,
    FormpagelistviewComponent,
    FormpagecardviewComponent,
    TinymceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SubmitformpageComponent,FormdetailpageComponent],
  entryComponents: [SubmitformpageComponent,FormdetailpageComponent]
})
export class AppModule { }
