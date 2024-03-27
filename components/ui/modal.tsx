"use client";

interface ModalProps {
    title: string,
    onClose: () => void,
    isOpen: boolean,
    description: string
    children?: React.ReactNode
};