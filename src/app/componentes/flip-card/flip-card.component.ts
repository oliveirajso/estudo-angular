import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/shared/services/log.service';
import { User } from 'src/app/shared/types/userType';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css'],
})
export class FlipCardComponent implements OnInit {
  constructor(private logService: LogService) {
    logService.consoleLog('Flip Card');
  }

  ngOnInit(): void {}
  usuarios: User[] = [
    {
      nome: 'Ivo Borges',
      foto: 'https://picsum.photos/200/300?random=1',
      idade: 30,
    },
    {
      nome: 'Natália Magalhães',
      foto: 'https://picsum.photos/200/300?random=2',
      idade: 19,
    },
    {
      nome: 'Ariana Barbosa',
      foto: 'https://picsum.photos/200/300?random=3',
      idade: 26,
    },
    {
      nome: 'Juliana Sousa',
      foto: 'https://picsum.photos/200/300?random=4',
      idade: 18,
    },
    {
      nome: 'Fabiana Amaral',
      foto: 'https://picsum.photos/200/300?random=5',
      idade: 33,
    },
  ];
}
