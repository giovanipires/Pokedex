import { Component, OnInit } from '@angular/core';

//service
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.apiListAll.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase())
    });

    this.getAllPokemons = filter;
  }

}
