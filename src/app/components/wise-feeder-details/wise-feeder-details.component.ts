import { Component } from '@angular/core';

@Component({
  selector: 'wise-feeder-details',
  templateUrl: './wise-feeder-details.component.html',
  styleUrls: ['./wise-feeder-details.component.css']
})
export class WiseFeederDetailsComponent {
  displayedColumns = [
    'SSID',
    'SS Name',
    'Circle Name',
     'Div Name',
    'Feeder Name',
    'Date-Time',
    'IR',
    'IY',
    'IV',
    'VR',
    'VY',
    'VB',
    'KWR',
    'KWY',
    'KWB'
  ];

  staticJsonData = [
    {
      "SSID": 7,
      "NAME": "66kV SS-7",
      "Cir_Name": "GJ",
      "Div_Name": "ADI",
      "ISACT": true,
      "LAT": "23.49213",
      "LONG": "72.455771",
      "FeederInfo": [
        {
          "LID": 11,
          "name": "11kV FDR-11",
          "ISACT": true,
          "ISPDC": false
        },
        {
          "LID": 21,
          "name": "11kV FDR-21",
          "ISACT": true,
          "ISPDC": false
        },
        {
          "LID": 31,
          "name": "11kV FDR-31",
          "ISACT": true,
          "ISPDC": false
        }
      ]
    },
    {
      "SSID": 17,
      "NAME": "66kV SS-17",
      "Cir_Name": "GJ",
      "Div_Name": "GND",
      "ISACT": true,
      "LAT": "23.49213",
      "LONG": "72.455771",
      "FeederInfo": [
        {
          "LID": 12,
          "name": "11kV FDR-12",
          "ISACT": true,
          "ISPDC": false
        },
        {
          "LID": 22,
          "name": "11kV FDR-22",
          "ISACT": true,
          "ISPDC": false
        }
      ]
    },
    {
      "SSID": 27,
      "NAME": "66kV SS-27",
      "Cir_Name": "GJ",
      "Div_Name": "KHL",
      "ISACT": true,
      "LAT": "23.49213",
      "LONG": "72.455771",
      "FeederInfo": [
        {
          "LID": 13,
          "name": "11kV FDR-13",
          "ISACT": false,
          "ISPDC": false
        },
        {
          "LID": 23,
          "name": "11kV FDR-23",
          "ISACT": true,
          "ISPDC": false
        },
        {
          "LID": 33,
          "name": "11kV FDR-33",
          "ISACT": true,
          "ISPDC": false
        }
      ]
    }
  ]
  inputData = [
    {
      "SSID": "7",
      "message": {
        "msgts": "2023-08-16 10:11:06",
        "levrefid": 7,
        "data": [
          [
            "LID",
            "11,21,31"
          ],
          [
            "IR",
            "1.1,1.3,1.6"
          ],
          [
            "IB",
            "1.55,1.12,"
          ],
          [
            "IY",
            ",1.53,1.12"
          ],
          [
            "VR",
            "6.3313,6.2959,6.2991"
          ],
          [
            "VY",
            ",6.2991,6.2959"
          ],
          [
            "VB",
            ",6.2842,"
          ],
          [
            "KWR",
            "-9.7,-10.1,-7.03"
          ],
          [
            "KWY",
            "-9.61,-6.95,"
          ],
          [
            "KWB",
            ",-9.7,"
          ],
          [
            "DTTM",
            "20230816100500,20230816100700,20230816101000,"
          ]
        ]
      }
    },
    {
      "SSID": "17",
      "message": {
        "msgts": "2023-08-16 10:11:06",
        "levrefid": 17,
        "data": [
          [
            "LID",
            "12,22,32"
          ],
          [
            "IR",
            "1.1,1.3,1.6"
          ],
          [
            "IB",
            "1.55,1.12,"
          ],
          [
            "IY",
            ",1.53,1.12"
          ],
          [
            "VR",
            "6.3313,6.2959,6.2991"
          ],
          [
            "VY",
            ",6.2991,6.2959"
          ],
          [
            "VB",
            ",6.2842,"
          ],
          [
            "KWR",
            "-9.7,-10.1,-7.03"
          ],
          [
            "KWY",
            "-9.61,-6.95,"
          ],
          [
            "KWB",
            ",-9.7,"
          ],
          [
            "DTTM",
            "20230817100500,20230817100700,20230817101000,"
          ]
        ]
      }
    },
    {
      "SSID": "27",
      "message": {
        "msgts": "2023-08-16 10:11:06",
        "levrefid": 27,
        "data": [
          [
            "LID",
            "13,23,33"
          ],
          [
            "IR",
            "1.1,1.3,1.6"
          ],
          [
            "IB",
            "1.55,1.12,"
          ],
          [
            "IY",
            ",1.53,1.12"
          ],
          [
            "VR",
            ",6.2991,6.2959"
          ],
          [
            "VY",
            "6.3313,6.2959,6.2991"
          ],
          [
            "VB",
            ",6.2842,"
          ],
          [
            "KWR",
            "-9.61,-6.95,"
          ],
          [
            "KWY",
            "-9.7,-10.1,-7.03"
          ],
          [
            "KWB",
            ",-9.7,"
          ],
          [
            "DTTM",
            "20230818100500,20230818100700,20230818101000,"
          ]
        ]
      }
    }
  ]
  mergedAll :MergedArray[]=[];
  dataSource: any;
  ngOnInit() {

    let uniqueVal: number[] = [];
    this.staticJsonData.forEach(val => uniqueVal.push(val.SSID));
    let filteredData = this.inputData.forEach(val => {
      let indexInStaticData = uniqueVal.indexOf(+val.SSID);
      this.mergedAll.push({ ...val, ...this.staticJsonData[indexInStaticData] })
    })
    console.log(this.mergedAll);
    this.dataSource = this.mergedAll;
  }
}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
export interface MergedArray {
  SSID: number;
  NAME: string;
  Cir_Name: string;
  Div_Name: string;
  ISACT: boolean;
  LAT: string;
  LONG: string;
  FeederInfo: {
    LID: number;
    name: string;
    ISACT: boolean;
    ISPDC: boolean;
  }[];
  message: {
    msgts: string;
    levrefid: number;
    data: string[][];
  };
}[] = [];
          
