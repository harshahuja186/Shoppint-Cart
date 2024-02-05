import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector( (state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  }

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] gap-3 p-4 rounded-xl ml-5 mt-10 ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[12px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>        
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full "/>
      </div>
      <div className="flex justify-between gap-12">
        <div className="text-green-600 font-semibold items-center">
          <p>${post.price}</p>
        </div>
        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] py-1 px-3 transition duration-200 ease-in
        hover:bg-gray-700 
        hover:text-white">
          {
              cart.some( (p) => p.id === post.id) ? 
              (
                <button onClick={removeFromCart}>
                  REMOVE ITEM
                </button>
              )
              : 
              (
                <button onClick={addToCart} >
                  ADD TO CART
                </button>
              )
          }
        </button>
      </div>
      
    </div>
  );
};

export default Product;
