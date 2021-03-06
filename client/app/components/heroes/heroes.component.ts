/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../services/hero.service";
import {Hero} from "../../models/hero";
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/components/heroes/heroes.component.html',
    styleUrls: ['./app/components/heroes/heroes.component.css']
})

export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;
    constructor(
        private router: Router,
        private heroService: HeroService) { }
    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
