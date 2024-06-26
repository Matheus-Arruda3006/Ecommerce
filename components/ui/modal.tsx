"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ModalProps {
    title: string,
    onClose: () => void,
    isOpen: boolean,
    description: string
    children?: React.ReactNode
};

export const Modal: React.FC<ModalProps> = ({
    title, description, onClose, isOpen, children
}) => {
    const onChange = (open: boolean) => {
        if(!open) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}