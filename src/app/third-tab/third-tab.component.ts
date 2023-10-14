import { Component, Input } from '@angular/core';
import { SceneFormState } from 'src/store/scene-maker-store';

@Component({
  selector: 'app-third-tab',
  templateUrl: './third-tab.component.html',
  styleUrls: ['./third-tab.component.css']
})
export class ThirdTabComponent {
  @Input() storeData: SceneFormState = { scene: "", characters: [], interactionData: []};
}
