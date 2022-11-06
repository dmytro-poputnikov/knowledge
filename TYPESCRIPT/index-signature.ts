// //Index signature

// export interface Country {
//   name: string;
//   flags: Flags;
//   translations: Translations;
//   cca3: string;
//   maps: {
//     googleMaps: string;
//     openStreetMaps: string;
//   };
//   currencies: {
//     [key: string]: Currency;
//   };
// }

// export interface Currency {
//   name: string;
//   symbol: string;
// }

// getCurrencyArray(country: Country): void {
//     (
//       Object.keys(country.currencies) as (keyof typeof country.currencies)[]
//     ).forEach((key: any, index: any) => {
//       console.log(key, country.currencies[key], index);
//     });

//   }

// or

// //entries
// getCurrencyArray(country: Country): void {
//    for (const [key, value] of Object.entries(country.currencies)) {
//       console.log(`${key}: ${value}`);
//     }

// }

//Angular
// @Component({
//   selector: "keyvalue-pipe",
//   template: `<span>
//     <p>Object</p>
//     <div *ngFor="let item of object | keyvalue">
//       {{ item.key }}:{{ item.value }}
//     </div>
//     <p>Map</p>
//     <div *ngFor="let item of map | keyvalue">
//       {{ item.key }}:{{ item.value }}
//     </div>
//   </span>`,
// })
// export class KeyValuePipeComponent {
//   object: { [key: number]: string } = { 2: "foo", 1: "bar" };
//   map = new Map([
//     [2, "foo"],
//     [1, "bar"],
//   ]);
// }
