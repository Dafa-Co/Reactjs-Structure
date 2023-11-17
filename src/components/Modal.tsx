/**
 * how modal works?
 * the modal will opened using openModal action in globalReducer
 * the modal will be closed using closeModal action in globalReducer
 * the open modal action accept take modal type which will show in screen when modal opened, look at (openModal -> @/store/globalReducer.ts)
 * why this scenario?
 * i want to import the modal component one time in main page and pass components as props and from type which you will passing it in openModal action the modal will be return the true component
 * example:
 * <button onClick={() => dispatch(openModal({type: 'edit'}))}>open edit modal</button>
 * <Modal edit={EditModal} />
 */

import { FunctionComponent } from "react";

import { createPortal } from "react-dom";

import { useAppDispatch, useAppSelector } from "@/hooks";

import { closeModal } from "@/store/globalReducer";

import Transition from "./Transition";

import { modal_transition_default, modals_types } from "@/constants";

interface ModalComponentProps {
  hideModal: () => void;
  data: any;
}

type Props = {
  edit?: FunctionComponent<ModalComponentProps>;
  view?: FunctionComponent<ModalComponentProps>;
  delete?: FunctionComponent<ModalComponentProps>;
  add?: FunctionComponent<ModalComponentProps>;
  other?: FunctionComponent<ModalComponentProps>;
  status?: FunctionComponent<ModalComponentProps>;
  filter?: FunctionComponent<ModalComponentProps>;
  sort?: FunctionComponent<ModalComponentProps>;
};

export default function Modal(props: Props) {
  // get modal state from store
  const { modal } = useAppSelector((state) => state.global);

  // dispatch for store action
  const dispatch = useAppDispatch();

  function hideModal() {
    dispatch(closeModal());
  }

  const Component = modal.type && props[modal.type];

  if (!Component) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999] backdrop-blur bg-base-200 bg-opacity-20 py-xl overflow-x-hidden overflow-y-auto modal-wrapper">
      <Transition
        options={modal_transition_default}
        className="w-full flex items-center justify-center min-h-full"
      >
        <div className="rounded-box p-lg bg-base-200 w-[90%]  md:w-[600px]">
          <Component hideModal={hideModal} data={modal.data} />
        </div>
      </Transition>
    </div>,
    document.getElementById("modal-root") as HTMLElement,
  );
}
