'use client'

import { X } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

interface CertificateModalProps {
    certificate: {
        id: number
        title: string
        image: string
    }
    onClose: () => void
}

export function CertificateModal({ certificate, onClose }: CertificateModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [onClose])

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div className="absolute inset-0" onClick={onClose} />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-secondary-700 hover:text-primary-600 rounded-full p-2 shadow-lg transition-all duration-200"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Certificate Image */}
                <div className="relative w-full h-auto">
                    <Image
                        src={certificate.image}
                        alt={certificate.title}
                        width={1200}
                        height={900}
                        className="w-full h-auto object-contain rounded-t-2xl"
                        priority
                    />
                </div>

                {/* Certificate Info */}
                <div className="p-6 border-t border-secondary-100">
                    <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                        {certificate.title}
                    </h3>
                    <p className="text-secondary-600">
                        Click outside or press ESC to close
                    </p>
                </div>
            </div>
        </div>
    )
}
