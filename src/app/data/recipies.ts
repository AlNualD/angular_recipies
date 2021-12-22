import { Item } from '../models/item.model';
import { Recipe } from '../models/recipe.model';

export class RecipiesGenerator {




    curRecipie: Recipe = {id: -1, name: "кликните на рецепт", description: "для выбора", selected: false, items: []};
    
    private _recipies: Recipe[] = [
        { id: 0, name: "Ананасовый салат", description: "По-извращенски вкусно. Звезда вкуса от шеф-повара", selected: false, items: [{ name: "Ананас", amount: 1 }, { name: "Сыр", amount: 1 }, { name: "Мазик", amount: 1 }, { name: "Чеснок", amount: 1 }] },
        { id: 1, name: "Окрошка", description: "ты тоже ничего ;)", selected: false, items: [{ name: "Вода", amount: 1 }, { name: "Огурец", amount: 1 }, { name: "Колбаса", amount: 1 }] },
        { id: 1, name: "Пирог", description: "пирог с ничем, но если что-то положить будет что-то", selected: false, items: [{ name: "Мука", amount: 5 }, { name: "Яйцо", amount: 4 }, { name: "Сахар", amount: 2 }] },
        { id: 1, name: "Шашлык", description: "лучшее блюдо всех времен и народов", selected: false, items: [{ name: "Мясо", amount: 10 }, { name: "Маринад", amount: 1 }] },
        { id: 1, name: "Макароны с луком", description: "На сыр денег не хватило, еш что дают", selected: false, items: [{ name: "Макароны", amount: 1 }, { name: "Лук", amount: 1 }] },
        { id: 1, name: "Борщ", description: "Без него не обходится ни одна бабушка", selected: false, items: [{ name: "Красная вода", amount: 1 }, { name: "Капуста", amount: 1 }, { name: "Свекла", amount: 1 }, { name: "Мясо", amount: 1 }] }
    ];
    public get recipies(): Recipe[] {
        return this._recipies;
    }   
    
    

}

export function getRecipies() {
    let recipiesGenerator: RecipiesGenerator = new RecipiesGenerator();
    return recipiesGenerator.recipies; 
}
