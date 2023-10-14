import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { InteractionData, DialogueLine, SimpleDialogue, QuizDialogue, QuizOption } from 'src/models/dialogue-model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'second-tab',
  templateUrl: './second-tab.component.html',
  styleUrls: ['./second-tab.component.css']
})

export class SecondTabComponent {

  @Input() characters : string[] = [];

  @Output() addInteraction = new EventEmitter<InteractionData[]>();

  lines: DialogueLine[] = [];
  answers: string[] = [];
  interactions: InteractionData[] = [];

  dialogueTypeForm = this.fb.control(true, [Validators.required])

  simpleDialogueForm = this.fb.group({
    linesForm: this.fb.control('', [Validators.required]),
    playerForm: this.fb.control('', [Validators.required])
  });

  quizDialogueForm = this.fb.group({
    question: this.fb.control('', [Validators.required]),
    answer: this.fb.control('', [Validators.required])
  })

  constructor(private readonly _snackBar: MatSnackBar, private readonly fb: NonNullableFormBuilder) { }

  charactersForm = this.fb.control(null, [Validators.required]);

  onAddLineButtonClicked() {
    this.lines.push(
      { character: this.charactersForm.value!, dialogueText: this.simpleDialogueForm.controls.linesForm.value },
      { character: "player", dialogueText: this.simpleDialogueForm.controls.playerForm.value! })
    console.log(this.lines);
    this.simpleDialogueForm.reset();
  }

  simpleDialogueFormHasErros() {
    return this.simpleDialogueForm.invalid;
  }

  canAddInteraction() {
    if (this.dialogueTypeForm.value) {
      return this.answers.length > 1;
    }
    return !(this.lines.length == 0);
  }

  onEndInteractionClicked() {
    if (this.dialogueTypeForm.value) {
      this.addQuizDialogue();
    } else {
      this.addSimpleDialogue();
    }

    this.openSnackBar("Added interaction", "Close");

    this.lines = [];
    this.answers = [];
    this.simpleDialogueForm.reset();
    this.quizDialogueForm.reset();
  }

  onChangeCharacterSelection() {
    //reset everything
    this.simpleDialogueForm.reset();
    this.quizDialogueForm.reset();
  }

  onAddAnswerClicked(newAnswer: string) {
    this.answers.push(newAnswer);
    this.quizDialogueForm.controls.answer.reset();
  }

  addSimpleDialogue() {
    const simpleDialogue: SimpleDialogue = { type: "simple", lines: [...this.lines] };
    if (this.interactions.find(interaction => interaction.onInteractWith == this.charactersForm.value)) {
      //add dialgoue to interactions array
      this.interactions.map((interactions) => {
        if (interactions.onInteractWith === this.charactersForm.value) {
          interactions.dialogues.push(simpleDialogue);
        }
      })
      return;
    }

    this.interactions.push({ onInteractWith: this.charactersForm.value!, dialogues: [simpleDialogue] });
  }

  addQuizDialogue() {
    const quizDialogue: QuizDialogue = { type: "quiz", question: this.quizDialogueForm.controls.question.value!, options: [] };

    this.answers.forEach(answer => {
      const quizOption: QuizOption = { isSelected: false, text: answer };
      quizDialogue.options.push(quizOption);
    })

    if (this.interactions.find(interaction => interaction.onInteractWith == this.charactersForm.value)) {
      //add dialgoue to interactions array
      this.interactions.map((interactions) => {
        if (interactions.onInteractWith === this.charactersForm.value) {
          interactions.dialogues.push(quizDialogue);
        }
      })
      return;
    }

    console.log("this is the prev interactions", this.interactions)
    this.interactions.push({ onInteractWith: this.charactersForm.value!, dialogues: [quizDialogue] });
    console.log("this is the next interactions", this.interactions)
  }

  finishInteraction() {
    this.addInteraction.emit(this.interactions);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
