"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";


export const StoreModal = () => {

    const storeModal = useStoreModal();

    return (

        <Modal
            title="Create Store"
            description="Add a new store to manage"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Future Create Store Form
        </Modal>
    );
};