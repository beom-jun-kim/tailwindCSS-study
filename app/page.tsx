import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-400 py-10 px-5 grid gap-5">
      <div className="bg-slate-50 p-10 rounded-xl shadow-xl">
        <span className="font-semibold text-lg">Select Item</span>
        <div className="border-b pb-3 my-3">
          <div className="flex justify-between">
            <span className="text-gray-500">Grey Chair</span>
            <span>$19</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tooly Tabel</span>
            <span>$80</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span>$99</span>
        </div>
        <div className="">checkout</div>
      </div>
      <div className="bg-slate-50 p-10 rounded-xl shadow-xl"></div>
      <div className="bg-slate-50 p-10 rounded-xl shadow-xl"></div>
      <div className="bg-slate-50 p-10 rounded-xl shadow-xl"></div>
    </div>
  );
}
