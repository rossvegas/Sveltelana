import { Store } from './models/Store';
import { InventoryItem } from "./models/Inventory";
import { inventory, stores } from './dataStorage';

export class Data {
    //This allows us to create temporary data for the app, it will all get destroyed and recreated on page refresh
    SetupData() {

        let inven = new Array<InventoryItem>;
        inven.push(new InventoryItem(1, 'Paper', '400 GSM 500 pages', 6));
        inven.push(new InventoryItem(2, 'Pens', ' 20 pack ball point pens', 9));
        inven.push(new InventoryItem(3, 'Pencils', '10 pk HB pencils', 8));
        inventory.set(inven);

        let stors = new Array<Store>;
        stors.push(new Store("Brisbane"));
        stors.push(new Store("Sydney"));
        stors.push(new Store("Melbourne"));
        stors.push(new Store("Perth"));
        stors.push(new Store("Adelaide"));
        stores.set(stors);
    }
}