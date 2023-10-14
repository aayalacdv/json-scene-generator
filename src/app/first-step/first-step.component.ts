import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Character } from 'src/models/dialogue-model';

@Component({
  selector: 'first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent {
  @Output() goNext = new EventEmitter<{scene: string, characters: Character[]}>();

  characterName = new FormControl('', [Validators.required]);
  sceneFormControl = new FormControl('', [Validators.required]);
  characters: Character[] = [];

  onSubmitCharacter(newCharacter: Character) {
    this.characters.push(newCharacter);
    this.characterName.reset();
  }

  deleteCharacter(index: number) {
    this.characters = this.characters.filter((character, i) => i !== index);
  }

  canGoNextStep() {
    return this.characters.length >= 2 && this.sceneFormControl.valid;
  }

  advanceStepper() {
    this.goNext.emit({scene: this.sceneFormControl.value!, characters: this.characters});
  }
}
