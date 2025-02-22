import { Component,OnInit } from '@angular/core';
import{ FormsModule,FormBuilder,FormGroup,ReactiveFormsModule,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
 } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import{MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { ContactService } from '../contactservice.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
}
)
export class ContactComponent implements OnInit {
 faLinkedin = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;

  email='devineni.monish@gmail.com';
  currentYear: number = new Date().getFullYear();

  contactForm!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  constructor(private formBuilder: FormBuilder,private contactService: ContactService) {}

    private buildForm(): void {
      this.contactForm = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        subject: this.formBuilder.control(null),
        message: new FormControl('', [Validators.required]),
      });
    }

    send(): void {
      if (this.contactForm.valid) {
        const formData = this.contactForm.value;
        this.contactService.sendContactForm(formData).subscribe({
          next: (response) => {
            alert('Form submitted successfully!');
            this.contactForm.reset();
          },
          error: (error) => {
            console.error('Error submitting form:', error);
            alert('Failed to submit the form. Please try again.');
          },
        });
      } else {
        alert('Please fill in all required fields correctly.');
      }
    }

}
