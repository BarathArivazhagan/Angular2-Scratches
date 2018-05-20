import { Component, ViewEncapsulation } from '@angular/core';
import {ColumnApi, GridApi, GridOptions} from 'ag-grid/main';
import { RefData } from './refData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    gridOptions: GridOptions;
    private icons: any;
    public rowData: string[];
    public columnDefs: any[];
    public rowCount: string;

    private api: GridApi;
    private columnApi: ColumnApi;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.rowData = this.createRowData();
         console.log('rows ' + this.rowData);
        this.columnDefs = this.createColumnDefs();
    }

    private onReady(params) {
        this.api = params.api;
        console.log(this.api);
        console.log(params);
        this.columnApi = params.columnApi;
    }

    private createRowData() {

       let rowData: any[] = [];
       const departments = RefData.departments;
       const sub_departments = RefData.subDepartments;
        for(let i in departments) {
          rowData.push({ department : departments[i].dept_description , sub_department : sub_departments[i].sub_dept_description});
        }

        return rowData;
    }


    private createColumnDefs() {
        const columnDefs = [
            {
                headerName: 'Department',
                field: 'department',
                cellRenderer: this.inputCellRendererTask,
                cellClicked : this.invokeCellClick
            },
            {
              headerName: 'SUB_Department',
              field: 'sub_department',
              hide : true

            }

        ];

        return columnDefs;
    }

    private inputCellRendererTask(params: any) {

            return '<input type="checkbox" style="width: 50%;" value=""/>' + params.value;
  }
  
  private invokeCellClick(params: any){
     console.log(params);
    return RefData.subDepartments;
  }

}

