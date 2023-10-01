import React, { useState, useEffect } from "react";
import { countryListType } from "../../../Models/country";
import { useParams } from "next/navigation";

const countryDetails = () => {
  const [data, setData] = useState<countryListType | null>([]);
  const singleCountry = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${singleCountry?.countryName}`)
      .then((res) => res.json())
      .then((result) => setData(result));
    console.log(countryDetails);
  }, [data]);
  return (
    <div className="container ">
      <h1 className="text-center text-success mt-5">Country Details</h1>

      <div className="row m-auto border-2 border-success rounded">
        <div className="col-md-4">
          <a
            href="http://localhost:3000/country/countryList"
            className="btn btn-success btn-sm rounded w-25"
          >
            Back
          </a>
        </div>
        
          {
            <div className="row border-2 border-success rounded">
              
                <div className="col-md-3  ">

                </div>
                <div className="col-md-3   ">
                  <img  className="w-75" src={data[0]?.flags.png} alt="" />
                </div>
                <div className="col-md-3   ">
                  <h1 className="text-lg">{data[0]?.name}</h1>
                  <p className="">Native Name: {data[0]?.nativeName}</p>
                  <p className="">Population: {data[0]?.population}</p>
                  <p className="">Region: {data[0]?.region}</p>
                  <p className="">Sub-region: {data[0]?.subregion}</p>
                </div>
                <div className="col-md-3   ">
                <h1 style={{height:"50px"}}></h1>
                  <p className="">Capital: {data[0]?.capital}</p>
                  <p className="">Top Level Domain: {data[0]?.topLevelDomain}</p>
                  <p className="">Currencies: {data[0]?.currencies[0].name}</p>
                  <p className="">Languages: {data[0]?.languages[0].name}</p>
                </div>
               
            </div>
          }

         
        
      </div>
    </div>
  );
};

export default countryDetails;
