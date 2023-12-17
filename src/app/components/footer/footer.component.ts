import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    template: `
    <nav class=" footer">
            <div class="">
                <!-- <a 
                    class="nav-link" 
                    [routerLink]="['/auth']" 
                    [queryParams]="{mode: 'login'}"
                    [fragment]="'loginForm'"
                >
                    Login
                </a>
                    
                <a class="nav-link" (click)="onGoToregister()">Register</a> -->
            </div>
        </nav>
    `,
    styles: [`
        @import '../../../variables.scss';

        @import '../../../variables.scss';

        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            background-color: $main-theme;
            height: 3rem;
            width: 100%;
            display: flex;
            align-items: center;
            
            .nav-link {
                display: inline;
                margin-left: 1rem;
                color: white;
                cursor: pointer;
            }
        }
    `]
})
export class Footer {

}