import tw from "tailwind-styled-components";

const Button = tw.button`
  bg-slate-300 
  w-8 h-8 
  rounded-lg
`;

export default function Home() {
  return (
    <div className="bg-slate-400 py-10 px-5 grid gap-5 text-black">
      <div className="bg-slate-50 p-10 sm:bg-red-500 md:bg-teal-500 lg:bg-blue-500 xl:bg-yellow-400 2xl:bg-green-800 rounded-xl shadow-xl">
        <span className="font-semibold text-lg">Select Item</span>
        <div className="border-b-2 border-dashed pb-3 my-3 flex justify-between">
          <span className="text-gray-500">Grey Chair</span>
          <span>$19</span>
        </div>
        <div className="flex justify-between mb-5">
          <span>Total</span>
          <span>$99</span>
        </div>
        <div className="bg-blue-400 text-white p-3 text-center rounded-xl w-1/2 mx-auto hover:bg-blue-600 transition cursor-pointer">
          checkout
        </div>
      </div>
      <div className="bg-slate-50 px-8 py-6 rounded-xl shadow-xl group">
        <div>
          <div className="flex justify-between mb-3">
            <div>⬅️</div>
            <div className="space-x-3">
              <span>4.9</span>
              <span className="shadow-lg p-1 rounded-md">💖</span>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/5963kz8/chair.jpg" alt="의자" />
          </div>
          <div className="mt-3">
            <span className="block text-lg font-bold">Swoon Lounge</span>
            <span className="text-sm text-slate-500">Chair</span>
            <div>
              <div className="flex justify-between items-center">
                <div className="space-x-3">
                  <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
                  <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
                  <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
                </div>
                <div className="space-x-3">
                  <Button>-</Button>
                  <span>1</span>
                  <Button>+</Button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-2xl font-medium">$450</span>

              {/* group-hover */}
              <button className="bg-blue-500 text-white px-10 py-3 rounded-lg group-hover:bg-slate-400 transition-colors">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
