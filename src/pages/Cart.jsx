  import { useEffect, useState } from 'react';
  import { useSelector } from 'react-redux';
  import { Link } from 'react-router-dom';
  import CartItem from '../components/CartItem';

  const Cart = () => {
    const { cart } = useSelector((state) => state);
    console.log(cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
      setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    return (
      <div className='relative mt-16'>
        {
          cart.length > 0 ? (
          <div className='flex justify-between max-w-6xl mx-auto'>
            <div className='w-7/12 flex flex-col'>
              {cart.map((item, index) => {
                
                return (
                  <div>
                    <CartItem key={item.id} item={item} itemIndex={index} />
                    {
                      (index !== cart.length-1) && <div className='w-11/12 transition-all origin-center border  mx-auto border-gray-600 rounded-full'></div>
                    }

                  </div>

                  
                  );
              })}
            </div>

            <div className='flex flex-col p-5 gap-5  w-5/12 pl-8 ml-5'>
              <div className='mt-16'>
                <p className='font-semibold text-green-800 text-xl'>Your Cart</p>
                <p className='text-green-700 text-5xl mb-5 font-semibold uppercase'>Summary</p>
                <p className='text-xl'>
                  <span className='text-gray-700 font-semibold'>Total Items:</span> <span> {cart.length}</span>
                </p>
              </div>

              <div className='mb-10'>
                <p className='text-gray-700 text-2xl font-semibold w-full'>Total Amount:
                <span className='font-bold'> ${totalAmount}</span> </p>
                <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 w-full text-xl'>Checkout Now</button>
              </div>
            </div>

          </div>
        ) : (
          <div className='flex justify-center flex-col items-center h-[80vh]'>

            <h1 className='text-xl font-semibold text-center capitalize'>Your Cart is Empty!</h1>
            <Link to={'/'}>
              <button className='bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 w-full p-3 px-10 mx-auto text-center text-lg uppercase'>Shop Now</button>
            </Link>
          </div>
        )}
      </div>
    );
  };

  export default Cart;
