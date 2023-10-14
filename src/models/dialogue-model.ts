export type Character = string;
export type Dialoguetype = "simple" | "quiz";

export type DialogueLine = {
    character: string;
    dialogueText: string;
}

export type QuizOption = {
    text: string;
    isSelected: boolean;
}

export type QuizDialogue = {
    type: "quiz";
    question: string;
    options: QuizOption[];
}

export type SimpleDialogue = {
    type: "simple";
    lines: DialogueLine [];
}

export type DialogueData = SimpleDialogue | QuizDialogue;

export type InteractionData  = {
    onInteractWith: Character, 
    dialogues: DialogueData[];
}


export type Scene = {
    scene: string;
    data: InteractionData[];
}