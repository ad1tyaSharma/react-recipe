import React from "react";
import { Link } from "react-router-dom";

import List from "./List";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
function SimilarRecipie(props) {
  const [data, setData] = React.useState([]);
  const {
    match: { params },
  } = props;
  //console.log(data);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${params.query}/similar?apiKey=ad0bf0be4ce04adbbcf887e87b2973bd`
        );
        //console.log(res.data.recipes[0]);
        //console.log(res.data);
        if (!Object.keys(res.data).length) {
          toast.error("Please Enter a Valid Query 🙂");
        } else if (Object.keys(res.data).length) {
          setData(res.data);
        }
      } catch (err) {
        //console.log(err);
      }
    };
    getData();
  }, [params.query]);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <h1>
        <Link to="/">Recipie App</Link>
      </h1>
      <button className="backBtn">
        <Link to="/">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </Link>
      </button>
      <ul>
        {data.map((ob) => {
          return <List data={ob}></List>;
        })}
      </ul>
    </div>
  );
}

export default SimilarRecipie;
