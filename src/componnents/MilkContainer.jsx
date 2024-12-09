import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../features/milk/milkSlice";

export default function MilkContainer() {
  const state = useSelector((state) => state.milk);
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-1/2 py-6 px-4  bg-zinc-300 rounded-xl shadow-xl self-start">
        <h3 className="text-center text-lg font-semibold pb-2 border-b mb-4 border-gray-700">
          Buy Milk
        </h3>
        <p className="pl-2 mb-2">Milk Number : {state.numOfMilks}</p>

        <div className="text-right">
          <button
            className="bg-green-300 py-2 px-4 rounded-xl"
            onClick={() => dispatch(buyMilk(1))}
          >
            BUY
          </button>
        </div>
      </div>
    </>
  );
}
