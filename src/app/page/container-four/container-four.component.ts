import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmailServiceService } from './email-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { ReCaptchaV3Service } from 'ngx-captcha';

@Component({
  selector: 'container-four',
  templateUrl: './container-four.component.html',
  styleUrls: ['./container-four.component.scss']
})
export class ContainerFourComponent implements OnInit {
  
  formSend: FormGroup;

  onSubmit() {
    if(this.formSend.valid){
      this.emailSev.sendEmail(this.formSend.value).subscribe(
        success => [this.formSend.reset(),
        alert("Mensagem enviada!")],
        error => console.log(error),
        () => console.log('request success')
      );
    }
    };

    
protected aFormGroup!: FormGroup;

  openDialog() {
    this.dialog.open(Dialog1);
  }
  openDialog1() {
    this.dialog.open(Dialog2);
  }
  openDialog2() {
    this.dialog.open(Dialog3);
  }
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog,
     public emailSev: EmailServiceService){
    this.formSend = new FormGroup({
      name: new FormControl('', [Validators.required]),
      tel: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      msg: new FormControl('', [Validators.required]),
      recaptcha: new FormControl([Validators.required])
    });
  
  }
 
  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  
  // siteKey: string = "";
}

// pagina do dialog
@Component({
  selector: 'dialog1',
  templateUrl: 'containerDialog1.html',
  styleUrls: ['./container-four.component.scss'],
  standalone: true,
})
export class Dialog1 {}

@Component({
  selector: 'dialog2',
  templateUrl: 'containerDialog2.html',
  styleUrls: ['./container-four.component.scss'],
  standalone: true,
})
export class Dialog2 {}

@Component({
  selector: 'dialog3',
  templateUrl: 'containerDialog3.html',
  styleUrls: ['./container-four.component.scss'],
  standalone: true,
})
export class Dialog3 {}