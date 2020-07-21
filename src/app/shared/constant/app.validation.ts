import { Injectable } from '@angular/core';

@Injectable()
export class AppValidation { 
    constructor() { }
    public message = {
        'EMAIL_REQUIRED' : 'Please enter your email.'
    }
}