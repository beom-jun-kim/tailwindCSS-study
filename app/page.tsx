import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-400 py-10 px-5 grid gap-5">
      <div className="bg-slate-50 p-10 rounded-xl shadow-xl">
        <span className="font-semibold text-lg">Select Item</span>
        <div className="border-b-2 border-dashed pb-3 my-3">
          <div className="flex justify-between">
            <span className="text-gray-500">Grey Chair</span>
            <span>$19</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tooly Tabel</span>
            <span>$80</span>
          </div>
        </div>
        <div className="flex justify-between mb-5">
          <span>Total</span>
          <span>$99</span>
        </div>
        <div className="bg-blue-400 text-white p-3 text-center rounded-xl w-1/2 mx-auto">
          checkout
        </div>
      </div>
      <div className="bg-slate-50 px-8 py-6 rounded-xl shadow-xl">
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
                  <input type="radio" className="accent-red-600" />
                  <input type="radio" className="accent-blue-600" />
                  <input type="radio" className="accent-orange-600" />
                </div>
                <div className="space-x-3">
                  <button className="bg-slate-300 w-8 h-8 rounded-lg">-</button>
                  <span >1</span>
                  <button className="bg-slate-300 w-8 h-8 rounded-lg">+</button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <span className="text-2xl font-medium">$450</span>
              <button className="bg-blue-500 text-white px-10 py-3 rounded-lg">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 p-10 rounded-xl shadow-xl"></div>
      <div className="bg-slate-50 p-10 rounded-xl shadow-xl"></div>
    </div>
  );
}
