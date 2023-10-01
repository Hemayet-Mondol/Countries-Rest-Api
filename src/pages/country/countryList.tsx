import React, { useState, useEffect } from "react";
import { countryListType } from "@/Models/country";
import Link from "next/link";




const countryList = () => {
  const [data, setData] = useState<countryListType | null>(null);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((result) => setData(result));
      console.log(countryList);
  }, []);
  return (
    <div className="container m-auto ">
            <div className="container ">
              
        
                    <div className="row d-flex mt-5 mx-5">
                    <h1 className="text-success text-center pb-3">All Country</h1>
                    {data != null &&
                        data.map((countryList, index) => (
                            
                                <div key={index} className="col-md-4 card border-2 border-success rounded w-25">
                                <div className="card-body ">
                                    <h6 >{countryList.name}</h6>
                                    <img src={countryList.flags.png} className="w-75" ></img>
                                </div>
                                <Link href={`http://localhost:3000/country/countryDetails/${countryList.name}`} className=" btn btn-success btn-sm mb-3 rounded">View Details</Link>
                                </div>
                            
                        ))}
            </div>
        </div>    
        </div>

   
    
  );
};

export default countryList;
