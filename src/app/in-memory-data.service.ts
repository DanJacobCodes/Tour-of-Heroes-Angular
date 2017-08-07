import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name:'Mr.Incredible'},
      { id: 11, name:'Mrs.Incredible'},
      { id: 12, name:'Violet'},
      { id: 13, name:'Dash'},
      { id: 14, name:'Frozone'},
      { id: 15, name:'Robin'},
      { id: 16, name:'Stargirl'},
      { id: 17, name:'Raven'},
      { id: 18, name:'Cyborg'},
      { id: 19, name:'Beast Boy'},
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}
