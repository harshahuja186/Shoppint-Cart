import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {toast} from 'react-hot-toast';
import { remove} from '../redux/Slices/CartSlice';


const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.success("Removed from Cart")
  }

  return (
    <div className="my-10">

      <div className="flex justify-evenly">

        <div className=" p-10 object-contain hover:scale-110 transition duration-200 bg-transparent">
          <img width={150}  src={item.image} alt="" />
        </div>
        <div className="flex flex-col w-3/4 p-4 justify-between">
        <div>

          <h1 className="text-gray-700 font-semibold text-xl mb-4 text-left  mt-1">{item.title}</h1>
          <h1 className=" text-gray-600 font-medium text-md text-left">{item.description.split(" ").slice(0,15).join(' ')+ "..."}</h1>
        </div>
          <div className="flex justify-between mt-4 items-center px-1  bottom-0">
            <p className="text-green-600  text-lg justify-self-end font-bold">{"$"+item.price}</p>
          <div className="group">

            <div onClick={removeFromCart} className="bg-red-200 group-hover:bg-red-500 flex rounded-full w-10 h-10 justify-center items-center cursor-pointer hover:shadow-md transition-all duration-300">
              <MdDelete className="text-red-900 group-hover:text-white transition-all duration-300"/>
            </div>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartItem;
