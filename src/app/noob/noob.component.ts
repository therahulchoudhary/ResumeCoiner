
import { Component, OnInit,ViewChild,ElementRef ,Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl,Validators } from '@angular/forms';
import { GeneralService } from '../general.service';
@Component({
  selector: 'app-noob',
  templateUrl: './noob.component.html',
  styleUrls: ['./noob.component.css']
})
export class NoobComponent implements OnInit {
 
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      'projects': this.fb.array([
        this.initY()
      ]),
      'works': this.fb.array([
        this.initWorks()
      ]),
      'edu':this.fb.array([
        this.initedu()
      ]),
      'skills':this.fb.array([
        this.initskills()
      ]),
      'misc':this.fb.array([
        this.initmisc()
      ]),
      'links':this.fb.array([
        this.initlinks() 
      ]),
      'ename':this.fb.control(
        'john snow'
      ),
      'clgname':this.fb.control(
        'winterfell'
      ),
      'email':this.fb.control(
        'johnsnow@knightwatch.com'
      ),
      'phone':this.fb.control(
        '8888888888'
      ),
      'personalweb':this.fb.control(
        'amItargeriyan.com'
      )
    });
  }
  @ViewChild('two') d1:ElementRef;

  ngAfterViewInit() {
    
  }
  initedu() {
    return this.fb.group({
      'edetail': ['percentile - school - aggregate etc', [Validators.required, Validators.pattern('[0-9]{4}')]],
    });
  }
  initskills() {
    return this.fb.group({
      'skilltype': ['programming', [Validators.required, Validators.pattern('[0-9]{4}')]],
      'relskills': ['c,c++,lorem,ipsum', [Validators.required, Validators.pattern('[0-9]{4}')]],
    });
  }
  initmisc() {
    return this.fb.group({
      'activity': ['achievment/intrest/participation', [Validators.required, Validators.pattern('[0-9]{4}')]],
      'actdetail': ['lorem ipsum doler sit amet', [Validators.required, Validators.pattern('[0-9]{4}')]],
    });
  }
  initlinks() {
    return this.fb.group({
      'link': ['http://yashwantsoni.live', [Validators.required, Validators.pattern('[0-9]{4}')]],
    });
  }
  addlink(){
    const control = <FormArray>this.form.controls['links'];
    if(control.value.length){
      control.push(this.initlinks());
    }
  }
  addskills(){
    const control = <FormArray>this.form.controls['skills'];
    if(control.value.length<5){
      control.push(this.initskills());
    }
  }
  deleteSkill(is){
    const control = <FormArray>this.form.controls['skills'];
    control.removeAt(is);
  }
  addmisc(){
    const control = <FormArray>this.form.controls['misc'];
    if(control.value.length<7){
      control.push(this.initmisc());
    }
  }
  deletemisc(im){
    const control = <FormArray>this.form.controls['misc'];
    control.removeAt(im);
  }
  addEduDetail(){
    const control = <FormArray>this.form.controls['edu'];
    if(control.value.length<3){
      control.push(this.initedu());
    }
  }
  delEduDetail(ie){
    const control = <FormArray>this.form.controls['edu'];
    control.removeAt(ie);
  }
  deleteWork(iw){
    const control = <FormArray>this.form.controls['works'];
    control.removeAt(iw);
  }
  deleteWdetail(iw,iw1){
    const control = (<FormArray>this.form.controls['works']).at(iw).get('wdetails') as FormArray;
    control.removeAt(iw1);
  }
  deletelink(il){
    const control = <FormArray>this.form.controls['links'];
    control.removeAt(il);
  }
  initY() {
    return this.fb.group({
      'ptitle': ['this-that', [Validators.required, Validators.pattern('[0-9]{4}')]],
      'plink': ['http://github.com/Resumecoiner', [Validators.required, Validators.pattern('[0-9]{4}')]],
      'pdate': ['may 2018 - july 2018', [Validators.required, Validators.pattern('[0-9]{4}')]],
      'details': this.fb.array([
        this.initZ()
      ])
    })
  }
  initWorks(){
    return this.fb.group({
      'wtitle': ['company name', [Validators.required, Validators.pattern('[0-9]{4}')]],
      'wdate': ['may 2018 - july 2018', [Validators.required, Validators.pattern('[0-9]{4}')]],
      'wdetails': this.fb.array([
        this.initWorkdetail()
      ])
    })
  } 
  initZ() {
    return this.fb.group({
      'detail': ['did this did that', [Validators.required, Validators.pattern('[0-9]{4}')]],
    })
  }
  initWorkdetail(){
    return this.fb.group({
      'wdetail': ['did this did that', [Validators.required, Validators.pattern('[0-9]{4}')]],
    })
  }
  addY() {
    const control = <FormArray>this.form.controls['projects'];
    if(control.value.length<3){
      control.push(this.initY());
    }
   
  }
  deleteY(ip){
    const control = <FormArray>this.form.controls['projects'];
    control.removeAt(ip);
  }
  addWork(){
    const control = <FormArray>this.form.controls['works'];
    if(control.value.length<2){
      control.push(this.initWorks());
    }
  }
  addwWorkDetail(iw){
    const control = (<FormArray>this.form.controls['works']).at(iw).get('wdetails') as FormArray;
    if(control.value.length<3){
      control.push(this.initWorkdetail());
    }
    
  }
  addZ(iy) {
   // console.log(iy);
    const control = (<FormArray>this.form.controls['projects']).at(iy).get('details') as FormArray;
    if(control.value.length<3){
      control.push(this.initZ());  
    }
    //console.log(this.d1.nativeElement.getElementsByClassName('list')[0]);
    // this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('lists')[0], 'display', 'block');
    // this.d1.nativeElement.getElementsByClassName('list')[0].insertAdjacentHTML('beforeend', '<li >{{{ form.value.Ys['+iy+'].Zs['+iy+'].Z }}}</li>');
  }
  deleteZ(id,ip){
    const control = (<FormArray>this.form.controls['projects']).at(ip).get('details') as FormArray;

    control.removeAt(id);
  }
  fuckback(){
    this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('field-div')[0], 'display', 'block');
    this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('resume-side-div')[0], 'max-width', '50%');
    this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('resume-side-div')[0], 'flex', '50%');
    this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('final-btn')[0], 'display', 'none');
  }
  dofuck(){
    this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('field-div')[0], 'display', 'none');
    this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('resume-side-div')[0], 'max-width', '100%');
    this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('resume-side-div')[0], 'flex', '100%');
    this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('resume-body')[0], 'zoom', '1');
    this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('resume-body')[0], 'width', '100%');
    this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('resume-body')[0], 'margin-top', '0px');
    this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('final-btn')[0], 'display', 'block');
  }
  getdata(){

  }
  constructor(private fb: FormBuilder,private renderer: Renderer2,private _userService:GeneralService) {
  }

}
