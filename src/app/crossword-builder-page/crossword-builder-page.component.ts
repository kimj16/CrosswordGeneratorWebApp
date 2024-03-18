import { Component } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";

@Component({
    selector: 'app-crossword-builder-page',
    standalone: true,
    templateUrl: './crossword-builder-page.component.html',
    styleUrl: './crossword-builder-page.component.css',
    imports: [TopBarComponent]
})
export class CrosswordBuilderPageComponent {

}
