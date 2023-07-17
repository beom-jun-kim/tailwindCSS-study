import { link } from "fs";
import Image from "next/image";
import tw from "tailwind-styled-components";

const Button = tw.button`
  bg-slate-300 
  w-8 h-8 
  rounded-lg
`;

export default function Home() {
  return (
    <div className="bg-slate-400 py-10 px-5 grid gap-5">
      <div className="bg-slate-50 p-10 rounded-xl shadow-xl">
        <span className="font-semibold text-lg">Select Item</span>
        <div className="border-b-2 border-dashed pb-3 my-3">
          <ul>
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex justify-between first:bg-slate-400 last:bg-slate-400"
              >
                <span className="text-gray-500">Grey Chair</span>
                <span>$19</span>
              </div>
            ))}
          </ul>
          <ul>
            {["a", "b", "c", ""].map((item, index) => (
              // empty : 빈 배열에 css 주기
              <li
                key={index}
                className="bg-red-400 py-3 border empty:bg-slate-400 empty:hidden"
              >
                {item}
              </li>
            ))}
          </ul>
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
      <form className="flex flex-col bg-slate-300 focus-within:bg-blue-200 p-5">
        <input
          type="text"
          required
          placeholder="username"
          className="p-1 placeholder-shown:bg-green-700"
        />
        <input
          type="password"
          required
          placeholder="password"
          className="my-2 p-1 placeholder-shown:bg-green-700"
        />
        <input type="submit" className="bg-white cursor-pointer p-1" />
      </form>
      <form className="flex flex-col space-y-2  p-5 ">
        <input
          type="text"
          required
          placeholder="Username"
          className="border p-1 peer border-gray-400 rounded-md "
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-blue-500">
          Awesome username
        </span>
        <input type="submit" value="Login" className="bg-white" />
      </form>
    </div>
  );
}
