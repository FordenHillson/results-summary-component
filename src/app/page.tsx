import Image from "next/image";
import data from "../../data.json";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col sm:flex-row justify-start sm:justify-center bg-white font-sans sm:px-60 sm:py-56">
      <div className="flex flex-col sm:flex-row justify-start sm:w-auto sm:mx-36 shadow-xl shadow-pale-blue bg-white sm:rounded-[2rem] h-screen sm:h-auto">
        <div className="bg-gradient-to-t from-light-royal-blue to-light-slate-blue justify-center rounded-b-[3rem] sm:rounded-[2rem] mb-5 sm:mb-0 sm:w-1/2">
          <p className="text-lg sm:text-xl font-semibold text-center text-light-lavender py-8">
            Your Result
          </p>
          <div className="relative flex flex-col mx-auto rounded-full w-40 sm:w-44 h-40 sm:h-44 items-center text-cente justify-center bg-gradient-to-b from-violet-blue to-persian-blue mb-4 sm:mb-8">
            <p className="text-6xl font-bold text-center py-4">76</p>
            <p className="font-semibold text-center text-light-lavender text-base">
              of 100
            </p>
          </div>
          <p className="font-medium text-center text-2xl sm:text-3xl pb-2 sm:pb-6">Great</p>
          <p className="font-medium text-center px-14 sm:px-14 pb-10 text-light-lavender">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className="text-black px-8 sm:w-1/2 bg-white sm:rounded-[2rem] h-1/2">
          <p className=" font-extrabold text-xl text-dark-gray-blue pb-4 sm:pt-8">Summary</p>
          <div className=" font-bold mb-4 sm:mb-8">
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

          <button className=" bg-dark-gray-blue hover:bg-gradient-to-t from-light-royal-blue to-light-slate-blue w-full p-3 mb-4 sm:mb-0 font-bold text-xl sm:text-base sm:font-normal text-white rounded-full mt-2">Continute</button>
        </div>
      </div>
    </main>
  );
}
