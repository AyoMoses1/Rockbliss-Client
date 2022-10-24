import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { Grid } from '@material-ui/core';
import { api } from './../../services/api';

const FeaturedProperties = () => {

  const { data, loading, error } = useFetch(`${api}/api/hotels?featured=true&limit=4`);
  return (
    <Grid container spacing={2} >
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <Grid item md={4} key={item._id} className='fpGrid'>
              <div className="img-gradient">
                <img
                  src={item.photos[0]}
                  alt=""
                  className="fpImg"
                />
              </div>
              <div className="fpFlex">
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              </div>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
            </Grid>
          ))}
        </>
      )}
  </Grid>

  );
};

export default FeaturedProperties;
