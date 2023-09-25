import { type Dispatch, type SetStateAction, type ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  borderless?: boolean;
}
export function CloseButton({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      className="hover:bg-gray/20 text-gray-800 hover:text-gray-600 rounded-full bg-light-gray p-2 outline-none transition-all hover:scale-105 focus:outline-none"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <IoClose size={24} />
    </button>
  );
}

export default function Modal({
  children,
  isOpen,
  setIsOpen,
  title,
  borderless,
}: ModalProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
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
            <div className="fixed inset-0 bg-black/50" />
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
                <Dialog.Panel
                  className={`transform overflow-hidden rounded-xl bg-light-gray text-left align-middle text-white shadow-xl backdrop-blur-md transition-all ${
                    borderless
                      ? "m-0 w-full max-w-4xl bg-none p-0"
                      : "bg-gray/50 w-fit p-2"
                  }`}
                >
                  {/* Title */}
                  {!borderless && (
                    <Dialog.Title as="h4" className="leading-6 text-black">
                      <div className="flex items-center justify-between text-black">
                        <h4 className="px-4 text-xl font-semibold">{title}</h4>
                        <div className="mr-2">
                          <CloseButton setIsOpen={setIsOpen} />
                        </div>
                      </div>
                    </Dialog.Title>
                  )}

                  <div className={`${borderless ? "" : "p-4"}`}>{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
