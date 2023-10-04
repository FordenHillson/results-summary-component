import Image from "next/image";
import data from "../../data.json";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start bg-white font-sans">
      <div className="bg-gradient-to-t from-light-royal-blue to-light-slate-blue justify-center rounded-b-[3rem] mb-5">
        <p className="text-lg font-semibold text-center text-light-lavender py-8">
          Your Result
        </p>
        <div className="relative flex flex-col mx-auto rounded-full w-40 h-40 items-center text-cente justify-center bg-gradient-to-b from-violet-blue to-persian-blue mb-4">
          <p className="text-6xl font-bold text-center py-4">76</p>
          <p className="font-semibold text-center text-light-lavender text-base">
            of 100
          </p>
        </div>
        <p className="font-medium text-center text-2xl pb-2">Great</p>
        <p className="font-medium text-center px-20 pb-10 text-light-lavender">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>

      <div className="text-black px-8">
        <p className=" font-extrabold text-xl pb-4">Summary</p>
        <div className=" font-bold">
          <div className=" bg-red-50 mb-3 p-4 rounded-lg flex justify-between">
            <div className="flex">
              <Image src={data[0].icon} alt="icon" width={28} height={28} className="pr-2" />
              <p className=" text-light-red">{(data[0].category)}</p>
            </div>
            <div className="flex font-black">
              <p className="pr-2 text-dark-gray-blue">{(data[0].score)}</p>
              <p className=" text-slate-400">/ 100</p>
            </div>

          </div>

          <div className=" bg-yellow-50 mb-3 p-4 rounded-lg flex justify-between">
            <div className="flex">
              <Image src={data[1].icon} alt="icon" width={28} height={28} className="pr-2" />
              <p className=" text-orangey-yellow">{(data[1].category)}</p>
            </div>
            <div className="flex font-black">
              <p className="pr-2 text-dark-gray-blue">{(data[1].score)}</p>
              <p className=" text-slate-400">/ 100</p>
            </div>

          </div>

          <div className=" bg-green-50 mb-3 p-4 rounded-lg flex justify-between">
            <div className="flex">
              <Image src={data[2].icon} alt="icon" width={28} height={28} className="pr-2" />
              <p className=" text-green-teal">{(data[1].category)}</p>
            </div>
            <div className="flex font-black">
              <p className="pr-2 text-dark-gray-blue">{(data[2].score)}</p>
              <p className=" text-slate-400">/ 100</p>
            </div>

          </div>

          <div className=" bg-blue-50 mb-3 p-4 rounded-lg flex justify-between">
            <div className="flex">
              <Image src={data[3].icon} alt="icon" width={28} height={28} className="pr-2" />
              <p className=" text-cobalt-blue">{(data[3].category)}</p>
            </div>
            <div className="flex font-black">
              <p className="pr-2 text-dark-gray-blue">{(data[3].score)}</p>
              <p className=" text-slate-400">/ 100</p>
            </div>

          </div>

        </div>

        <button className=" bg-dark-gray-blue w-full p-3 font-bold text-xl text-white rounded-full mt-2">Continute</button>
      </div>
    </main>
  );
}
