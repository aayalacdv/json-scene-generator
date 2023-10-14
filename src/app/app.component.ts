import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { Observable, combineLatest, filter, map, startWith, tap } from "rxjs";
import { Character, InteractionData } from 'src/models/dialogue-model';
import { SceneFormState, SceneFormStore } from 'src/store/scene-maker-store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("stepper") stepper: any;

  sceneFormValues$ = this.sceneFormStore.select(state => state);

  constructor(private readonly sceneFormStore: SceneFormStore) {}

  goFromStepOneToStepTwo(payload: {scene: string, characters: Character[]}) {
    this.sceneFormStore.patchState(payload);
    this.stepper.next();
  }

  goFromStepTwoToStepThree(interactionData: InteractionData[]) {
      this.sceneFormStore.patchState({interactionData});
      this.stepper.next();
  }

  generateJson(data: SceneFormState) {
        const formatedData = { scene: data.scene, data: data.interactionData}
        const jsonStr = JSON.stringify(formatedData, null, 2);

        const blob = new Blob([jsonStr], { type: 'application/json' });
    
        const url = window.URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.json';
        a.click();

        window.URL.revokeObjectURL(url);
  }

}
