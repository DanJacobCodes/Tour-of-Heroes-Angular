import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  {id: 11, name:'Spider-Man'},
  {id: 12, name:'Batman'},
  {id: 13, name:'Hulk'},
  {id: 14, name:'Iron Man'},
  {id: 15, name:'Storm'},
  {id: 16, name:'Flash'},
  {id: 17, name:'Nightcrawler'}
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    <h2>My Heroes</h2>
<ul class="heroes">
<li *ngFor="let hero of heroes">
<span class="badge">{{hero.id}}</span> {{hero.name}}
</li>
</ul>
    `
})
export class AppComponent {
  heroes = HEROES;
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Wolverine',
  };
}
