import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { ContactService } from '../../../services/contact.service';
import { EnvelopeIconComponent } from '../icons/envelope-icon.component';
import { mapMarkerAltIconComponent } from '../icons/map-marker-alt-icon.component';
import { PencilIconComponent } from '../icons/pencil-icon.component';
import { PhoneIconComponent } from '../icons/phone-icon.component';
import { UserIconComponent } from '../icons/user-icon.component';
import { ListIconComponent } from "../icons/list-icon.component";
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
    selector: 'app-contact-form',
    standalone: true,
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.scss',
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RecaptchaModule,
        HttpClientModule,
        UserIconComponent,
        PhoneIconComponent,
        EnvelopeIconComponent,
        PencilIconComponent,
        mapMarkerAltIconComponent,
        ListIconComponent,
        ScrollRevealDirective
    ]
})
export class ContactFormComponent {
  contactForm: FormGroup;
  recaptchaResponse: string | null = null;
  message: string = '';
  isError: boolean = false;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      interventionPlace: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      recaptcha: ['', Validators.required],
    });
  }

  onRecaptchaResolved(response: string | null) {
    if (response) {
      this.recaptchaResponse = response;
      this.contactForm.controls['recaptcha'].setValue(response);
    } else {
      this.contactForm.controls['recaptcha'].setValue('');
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm)
      this.contactService.sendContactEmail(this.contactForm.value).subscribe(
        (response) => {
          this.message = 'Votre message a été envoyé avec succès.';
          this.isError = false;
          this.contactForm.reset();
        },
        (error) => {
          console.error('Error sending email', error);
          this.message =
            "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer plus tard.";
          this.isError = true;
        }
      );
    }
  }

  get name() {
    return this.contactForm.get('name');
  }
  get firstName() {
    return this.contactForm.get('firstName');
  }
  get interventionPlace() {
    return this.contactForm.get('interventionPlace');
  }
  get category() {
    return this.contactForm.get('category');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get phone() {
    return this.contactForm.get('phone');
  }
  get messageControl() {
    return this.contactForm.get('message');
  }
}
