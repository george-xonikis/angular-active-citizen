import {NgModule} from '@angular/core';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {PreLoaderModule} from '../../shared/components/preloader/preloader.module';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ConfirmSignUpComponent} from './sign-up/confirm/confirm-sign-up.component';
import {PasswordResetComponent} from './password-reset/password-reset.component';
import {ConfirmPasswordResetComponent} from './password-reset/confirm/confirm-password-reset.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        NgbAlertModule,
        AuthRoutingModule,
        PreLoaderModule,
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        SignUpComponent,
        ConfirmSignUpComponent,
        PasswordResetComponent,
        ConfirmPasswordResetComponent
    ],
})
export class AuthModule {
}
