import { Item } from '../models/item.model';


export class ItemsData{
    items: Map<string, Item> = new Map();

    public addItem(item: Item) {
        const cur = this.items.get(item.name)
        if(cur == undefined) {
            this.items.set(item.name,item);
        } else {
            this.items.set(item.name, new Item(item.name, cur.amount + item.amount));
        }
    }

    public addItems(items:Item[]) {
        for(var item of items) {
            this.addItem(item);
        }
    }

    public deleteItem(name:string) {
        this.items.delete(name);
    }

    public getGlobalItems(): Item[] {
        return [...this.items.values()].sort();
    }

}

export const globalItems: ItemsData = new ItemsData();