import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'documentation',
    styleUrls: ['./documentation.component.scss'],
    templateUrl: './documentation.component.html'
})
export class DocumentationComponent implements OnInit {
    components = [
        { url: 'action-bar', name: 'Action Bar' },
        { url: 'alert', name: 'Alert' },
        { url: 'badgeLabel', name: 'Badge, Status & Label' },
        { url: 'breadcrumb', name: 'Breadcrumb' },
        { url: 'button', name: 'Button' },
        { url: 'buttonGroup', name: 'Button Group' },
        { url: 'calendar', name: 'Calendar' },
        { url: 'datePicker', name: 'Date Picker' },
        { url: 'dropdown', name: 'Dropdown' },
        { url: 'form', name: 'Form' },
        { url: 'icon', name: 'Icon' },
        { url: 'identifier', name: 'Identifier' },
        { url: 'image', name: 'Image' },
        { url: 'inlineHelp', name: 'Inline Help' },
        { url: 'inputGroup', name: 'Input Group' },
        { url: 'list', name: 'List' },
        { url: 'megaMenu', name: 'Mega Menu' },
        { url: 'menu', name: 'Menu' },
        { url: 'modal', name: 'Modal' },
        { url: 'navbar', name: 'Navbar' },
        { url: 'pagination', name: 'Pagination' },
        { url: 'panel', name: 'Panel' },
        { url: 'popover', name: 'Popover' },
        { url: 'sideNavigation', name: 'Side Navigation' },
        { url: 'table', name: 'Table' },
        { url: 'tabs', name: 'Tabs' },
        { url: 'tile', name: 'Tile' },
        { url: 'time', name: 'Time' },
        { url: 'timePicker', name: 'Time Picker' },
        { url: 'tree', name: 'Tree' }
    ];

    search: string = '';

    constructor(private router: Router) {}

    ngOnInit() {
        // sort the list alphabetically
        this.components.sort((el1, el2) => {
            if (el1.name < el2.name) {
                return -1;
            }

            if (el1.name > el2.name) {
                return 1;
            }
            return 0;
        });
    }

    selectComponent(component: string) {
        this.router.navigate(['/docs', component]);
    }
}
