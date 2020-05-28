import React, {useState, useCallback} from "react";
import axios from "axios"

const Head = () => {
  const [data, setData] = useState();
  const getData = useCallback(() => {
    axios
      .get("jsons/registration-form-setup-information.json")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);
    if(data === undefined){
      return(
        <div>
          loading
          {getData()}
        </div>

      )
    }else{
      return(
        <div className="head col-md-12">
          <h2>
            {data.event_long_name}
          </h2>
          <p>
            {data.venue.event_venue_title}&emsp;{data.venue.event_venue_city}, {data.venue.event_venue_country}&emsp;{data.event_start_date} - {data.event_end_date}
          </p>
        </div>
      )
    }
};
export default Head;
