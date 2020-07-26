import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemparatureGameComponent } from './temparature-game.component';
import { of } from '../../../../../node_modules/rxjs/internal/observable/of';
import { WeatherServiceService } from '../../../services/weather-service.service';
import { FormsModule, ReactiveFormsModule } from '../../../../../node_modules/@angular/forms';
import { HttpClientModule, HttpResponse, HttpEventType } from '../../../../../node_modules/@angular/common/http';
import { BrowserModule } from '../../../../../node_modules/@angular/platform-browser';
import { AppConstant } from '../../../shared/constant/app.constant';
import { Toast, ToastrModule } from '../../../../../node_modules/ngx-toastr';
import { TopNavBarComponent } from '../../../shared/core/component/top-nav-bar/top-nav-bar.component';

fdescribe('TemparatureGameComponent', () => {
  let component: TemparatureGameComponent;
  let fixture: ComponentFixture<TemparatureGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemparatureGameComponent,TopNavBarComponent ],
      imports:[
        FormsModule,ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        ToastrModule.forRoot({timeOut:4000})
      ],
      providers:[AppConstant,WeatherServiceService,Toast]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemparatureGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Guess form fields validation', () => {
    let guessFormInstance=component.guessForm;
    guessFormInstance.get('cityId').setValue('');
    expect(guessFormInstance.get('cityId').invalid).toBeTruthy();
    guessFormInstance.get('cityId').setValue('3432');
    expect(guessFormInstance.get('cityId').valid).toBeTruthy();
    guessFormInstance.get('guessTempratue').setValue('');
    expect(guessFormInstance.get('guessTempratue').invalid).toBeTruthy();
    guessFormInstance.get('guessTempratue').setValue('200');
    expect(guessFormInstance.get('guessTempratue').valid).toBeTruthy();
  });

  it('Invalid guess form', () => {
    let comp=fixture.debugElement.componentInstance;
    comp.guessForm.get('cityId').setValue('');
    comp.guessForm.get('guessTempratue').setValue('200');
    expect(component.guessForm.invalid).toBeTruthy();
  });

  it('Valid guess form', () => {
    let comp=fixture.debugElement.componentInstance;
    comp.guessForm.get('cityId').setValue('3');
    comp.guessForm.get('guessTempratue').setValue('200');
    expect(component.guessForm.valid).toBeTruthy();
  });

  it('Proceed button click and form invalid', () => {
    let webElement=fixture.debugElement.nativeElement.querySelector('#temparatureSubmit');
    component.guessForm.get('cityId').setValue('');
    component.guessForm.get('guessTempratue').setValue('200');
    webElement.click();
    expect(component.guessForm.invalid).toBeTruthy();
  });

  /*it('Proceed button click and form valid', () => {
    let webElement=fixture.debugElement.nativeElement.querySelector('#temparatureSubmit');
    let spy=spyOn(component['weatherService'],'getWeatherdata').and.returnValue(of(new HttpResponse({ status: 200 })))
    component.guessForm.get('cityId').setValue('271');
    component.guessForm.get('guessTempratue').setValue('300');
    component.temparatureGuess();
    spy.calls.mostRecent().returnValue.subscribe(data=>{
     expect(data).toBe(new HttpResponse({ status: 200 }));
    })
    expect(component.guessForm.invalid).toBeFalsy();
  });*/
});
