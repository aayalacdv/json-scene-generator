import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Character, InteractionData } from "src/models/dialogue-model";

export type SceneFormState = {
    scene: string;
    characters: Character[];
    interactionData: InteractionData[];
}

const initialStatate : SceneFormState = JSON.parse('{ "scene": "scene1", "characters": [ "Axel", "Victor" ], "interactionData": [ { "onInteractWith": "Axel", "dialogues": [ { "type": "quiz", "question": "eres Tonto?", "options": [ { "isSelected": false, "text": "yes" }, { "isSelected": false, "text": "yes" } ] } ] } ] }')

@Injectable({ providedIn: "root"})
export class SceneFormStore extends ComponentStore<SceneFormState> {

    constructor(){
        super(initialStatate)
    }
}