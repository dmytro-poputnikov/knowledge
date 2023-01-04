https://typeofweb.com/dependency-injection-w-angular-2

Dependency Injection w Angular 2 jest hierarchiczne
Kiedy komponent żąda wstrzyknięcia jakiegoś serwisu, Angular próbuje tę zależność spełnić. 
Sprawdza najpierw injector na poziomie komponentu – jeśli ten nie ma zarejestrowanego serwisu, 
Angular przechodzi o poziom wyżej i sprawdza injector rodzica. Jeśli ten również go nie posiada – 
sprawdzany jest kolejny komponent i kolejny, coraz wyżej, aż serwis zostanie odnaleziony. 

//////////////////
@Optional
class MyChildComponent {  
  constructor(
      @Optional() private dataService: DataService
  ) { … }
}
W powyższym przykładzie, jeśli serwis DataService nie został zarejestrowany to dataService przyjmie wartość null.
//////////////////
Zależności w Angular 2 rozróżniane są na podstawie tzw. !!tokenów!!

Token może być stringiem ale to jest zła praktyka. 2 programisty mogą użyć takiej samej nazwy.

providers: [  
    { provide: 'MyDependency' useValue: 'Hello, world!' })
]

class MyChildComponent {  
  constructor(
      @Inject('MyDependency') private myDependency: string
  ) { … }
}

Trzeba używać !!OpaqueToken!!

// MyDependency.ts
import { OpaqueToken } from '@angular/core';  
export const MY_DEPENDENCY_TOKEN = new OpaqueToken('MyDependency');

https://typeofweb.com/dependency-injection-w-angular-2


// komponent
import { MY_DEPENDENCY_TOKEN, MyDependency } from './MyDependency';  
providers: [  
   {provide: MY_DEPENDENCY_TOKEN, useValue: MyDependency })
]

Następnie taki OpaqueToken wykorzystujemy również do wstrzykiwania:

import { MY_DEPENDENCY_TOKEN } from './MyDependency';

class MyChildComponent {  
  constructor(
      @Inject(MY_DEPENDENCY_TOKEN) private myDependency: string
  ) { … }
}
