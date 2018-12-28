
import { Component, OnInit,ViewChild,ElementRef ,Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
 
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
      ])
    });
  }
  @ViewChild('one') d1:ElementRef;

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
    control.push(this.initlinks());
  }
  addskills(){
    const control = <FormArray>this.form.controls['skills'];
    control.push(this.initskills());
  }
  addmisc(){
    const control = <FormArray>this.form.controls['misc'];
    control.push(this.initmisc());
  }
  addEduDetail(ie){
    const control = <FormArray>this.form.controls['edu'];
    control.push(this.initedu());
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
    control.push(this.initY());
  }
  addWork(){
    const control = <FormArray>this.form.controls['works'];
    control.push(this.initWorks());
  }
  addwWorkDetail(iw){
    const control = (<FormArray>this.form.controls['works']).at(iw).get('wdetails') as FormArray;
    control.push(this.initWorkdetail());
  }
  addZ(iy) {
   // console.log(iy);
    const control = (<FormArray>this.form.controls['projects']).at(iy).get('details') as FormArray;
    control.push(this.initZ());
    //console.log(this.d1.nativeElement.getElementsByClassName('list')[0]);
    // this.renderer.setStyle(this.d1.nativeElement.getElementsByClassName('lists')[0], 'display', 'block');
    // this.d1.nativeElement.getElementsByClassName('list')[0].insertAdjacentHTML('beforeend', '<li >{{{ form.value.Ys['+iy+'].Zs['+iy+'].Z }}}</li>');
  }

  constructor(private fb: FormBuilder,private renderer: Renderer2) {
  }

}
