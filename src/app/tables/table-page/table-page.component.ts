import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'mt-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.sass']
})
export class TablePageComponent implements OnInit {

    tableName: string;
    accentColor: string;
    id: number;

    constructor(
        private router: ActivatedRoute
    ) { }

    ngOnInit() {
        // this.tableName = this.router.snapshot.params['name'];
        this.id = +this.router.snapshot.params['id'];
        this.tableName = this.router.snapshot.queryParams['title'];
        this.accentColor = this.router.snapshot.queryParams['color'];

        this.router.params.subscribe((params: Params) => {
            // this.tableName = params['name'];
            this.id = +params['id'];
        });
        this.router.queryParams.subscribe((params: Params) => {
            // this.tableName = params['name'];
            this.tableName = params['title'];
            this.accentColor = params['color'];
        });
    }

}
