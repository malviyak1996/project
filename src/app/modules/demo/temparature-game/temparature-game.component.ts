import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../../node_modules/@angular/forms';
import { WeatherServiceService } from '../../../services/weather-service.service';
import { ToastrService } from '../../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-temparature-game',
  templateUrl: './temparature-game.component.html',
  styleUrls: ['./temparature-game.component.css']
})
export class TemparatureGameComponent implements OnInit {
  guessForm:FormGroup;
  formSubmitted=false;
  userCount=0;
  resultCount={success:0,failure:0};
  apiKey='ce71906692f5e3dc42fc349ad6dcb359';
  cityList=[];
  cityDropdown=[{Id:'4173593',city:'South Venice'},{Id:'4173495',city:'South Miami'},{Id:'4172086',city:'Sanford'},{Id:'4167147',city:'Orlando'},{Id:'4164138',city:'Miami'}]
  constructor(private fb:FormBuilder,private weatherService:WeatherServiceService,private toasty:ToastrService) { }
  ngOnInit() {
    console.log(this.cityList);
    this.guessForm=this.fb.group({
      cityId:["",[Validators.required]],
      guessTempratue:["",[Validators.required]]
    })
  }

  temparatureGuess(){
    debugger;
    if(this.guessForm.invalid){
      this.formSubmitted=true;
      return;
    }
    let alreadyExist=this.cityList.find(obj=>{return obj['cityId']==this.guessForm['value']['cityId']});
    if(alreadyExist!=undefined){
      this.toasty.error("You have already attempted on this city.")
      return;
    }
    if(this.userCount <=5){
    this.weatherService.getWeatherdata(this.guessForm['value']['cityId'],this.apiKey).subscribe(response=>{
      if(response['status']==200){
        let data=response['body'];
        let difference=data['main']['temp']-this.guessForm['value']['guessTempratue']
        let obj={cityId:this.guessForm['value']['cityId'],cityName:data['name'],real:data['main']['temp'],yours:this.guessForm['value']['guessTempratue']};
        if(difference>=0 && difference<=5){
             obj['status']=true;
             this.resultCount['success']=this.resultCount['success']+1;
             this.toasty.success('Hurray,You won !!');
        }else{
          this.resultCount['failure']=this.resultCount['failure']+1;
          obj['status']=false;
          this.toasty.error('Sorry,You lost.Better luck next time.');
        }
        this.cityList.push(obj);
         console.log(data)
      }else{
        console.log(response)
          this.toasty.error('some error occured');
      }
    })
  }else{
    this.toasty.error('You have exceeded your limit of 5 attempts.');

  }

  }


}
