//This is just a temporary storage location for this little app, it only exists in memory and gets cleared on
//browser close or refresh
//This would ideally be replaced by a database in a proper application

import { writable } from 'svelte/store';
import type { Store } from './models/Store';
import type { InventoryItem } from "./models/Inventory";

export const stores = writable<Array<Store>>(new Array<Store>);
export const inventory = writable<Array<Store>>(new Array<InventoryItem>);
export const currentStore = writable<Store>();