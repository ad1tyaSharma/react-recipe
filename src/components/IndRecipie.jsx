import React from "react";
import axios from "axios";
import MainCard from "./MainCard";
import { Link } from "react-router-dom";

function IndRecipie(props) {
  const {
    match: { params },
  } = props;
  const renderData = (obj) => {
    //console.log(Object.keys(data).length);
    if (Object.keys(obj).length) {
      return <MainCard data={obj}></MainCard>;
    }
  };
  const [data, setdata] = React.useState({});
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=ad0bf0be4ce04adbbcf887e87b2973bd`
        );
        //console.log(res.data.recipes[0]);
        //console.log(res.data);
        setdata(res.data);
      } catch (err) {
        //console.log(err);
      }
    };

    getData();
  }, [params.id]);

  return (
    <div className="ind">
      <button className="backBtn">
        <Link to="/">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </Link>
      </button>

      {renderData(data)}
      <button className="similar">
        <Link to={`/similar/${data.id}`}>Get Similar Recipie</Link>
      </button>
    </div>
  );
}

export default IndRecipie;
