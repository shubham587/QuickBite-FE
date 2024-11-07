// import "../../styles/gridLoader.css";
import "../../styles/grid.css"
import Counter from "../Counter";
const GridLoader = (props) => {
  console.log("grid data", props.gridDatas.data);
  return (

    <div className="gridContainer">
      {props.gridDatas &&
        props.gridDatas.data.map((item) => (
          <div className="gridItem" key={item.food_name}>
            <img className="itemImage" src={item.image} alt="loading" />
            <p className="itemDescription">{item.description}</p>
            <button className="addToCart" onClick={()=>props.addToCart(item)}>Add to Cart</button>
            <Counter />
          </div>
        ))}
    </div>

  );
};
export default GridLoader;