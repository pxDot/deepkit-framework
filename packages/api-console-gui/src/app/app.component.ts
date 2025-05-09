import { Component, ElementRef } from '@angular/core';
import { DuiApp } from '@deepkit/desktop-ui';
import { ControllerClient } from './client';

@Component({
    selector: 'app-root',
    template: `
        <dui-window>
            <dui-window-header size="small">
                <dui-window-toolbar>
                    <deepkit-header-logo title="API Console"></deepkit-header-logo>

                    <dui-window-toolbar-container name="main"></dui-window-toolbar-container>
                    <div class="top-right">
                        <div>
                            <a routerLink="/api">OVERVIEW</a>
                        </div>
                        <deepkit-header-status-bar></deepkit-header-status-bar>
                    </div>
                </dui-window-toolbar>
            </dui-window-header>
            <dui-window-content [sidebarVisible]="sidebarVisible" class="no-padding">
                <router-outlet></router-outlet>
            </dui-window-content>
        </dui-window>
    `,
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
    sidebarVisible: boolean = true;

    constructor(
        public duiApp: DuiApp,
        public client: ControllerClient,
        public host: ElementRef<HTMLElement>,
    ) {
        const controller = host.nativeElement.getAttribute('controller');
        if (controller && controller !== 'APP_CONTROLLER_NAME') {
            this.client.setController(controller);
        }
    }
}
