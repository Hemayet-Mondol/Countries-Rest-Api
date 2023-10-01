export interface countryListType
{
    name:string;
    flags:{
        png:string;
    };
    nativeName:string;
    region:string;
    subregion:string;
    topLevelDomain:string;
    capital:string;
    currencies:[{
        name:string;

    }];
    languages:[
        {
            name:string;

        }
    ];
    population:number;

    

}