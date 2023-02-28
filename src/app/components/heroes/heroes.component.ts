import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/shared/services/person.service';

import { Person } from './../../shared/DTOs/PersonDTO';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  persons: Person[] = [];
  selectedPerson?: Person;
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {

    this.personService.getPersons().subscribe({
      next: (persons) => this.persons = persons,
      error: (erro) => console.log(erro),
      complete: () => console.log("completo"),
    });
  }
  onSelect(person: Person) {
    this.selectedPerson = person;
  }
}
