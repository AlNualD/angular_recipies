import {Item} from './item.model';

export class Recipe {
    id: number;
    name: string;
    description: string;
    selected: boolean;
    items: Item[];
    constructor(id: number, name: string, description: string, selected: boolean, items: Item[]) {
        this.id  = id;
        this.name  = name;
        this.description = description;
        this.selected = selected;
        this.items = items;
    }
}

