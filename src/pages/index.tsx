import { type NextPage } from "next";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClipboard = () => {
    const text = "01-0867-0750138-00";
    void navigator.clipboard.writeText(text);
    setIsOpen(true);
    console.log("Copied to clipboard!");
  };

  return (
    <>
      <div className="bg-gray-100">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>

                <Image
                  className="h-12 w-12 rounded-full"
                  src="/miltao.jpeg"
                  width={2432}
                  height={1442}
                  alt="Milton"
                />
              </a>
            </div>
          </nav>
        </header>

        <div className="relative isolate pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32 lg:pb-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-slate-500 sm:text-6xl">
                  <span className="text-orange-400">
                    {`"Hey bro! I'm Milton the barber"`}
                  </span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-500">
                  Just hit the button below and get the account number coppied!
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
                  <button
                    onClick={handleClipboard}
                    className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    {`Hit me Up!`}
                  </button>
                  <p className="py-5 text-orange-500">Thank you mate 🚀</p>
                </div>
              </div>

              <Image
                className="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
                src="/miltao.jpeg"
                width={2432}
                height={1442}
                alt="Milton"
              />
            </div>
          </div>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={() => setIsOpen(!isOpen)}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className=" w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <div className="flex justify-center ">
                        <span className="rounded-full bg-green-500 p-2 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      </div>

                      <Dialog.Title
                        as="h3"
                        className="mt-4 flex justify-center text-lg font-medium leading-6 text-gray-900"
                      >
                        Account Number Copied!
                      </Dialog.Title>
                      <div className="mt-2 flex justify-center">
                        <p className="text-sm text-gray-500">
                          Now you can paste it anywhere you want.
                        </p>
                      </div>

                      <div className="mt-4 flex justify-center ">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-orange-200 px-4 py-2 text-sm font-medium text-orange-800 hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </>
  );
};

export default Home;
