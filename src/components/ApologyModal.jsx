/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BsPauseCircleFill } from 'react-icons/bs'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    useDisclosure,
} from '@chakra-ui/react'

export default function ApologyModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button
                onClick={onOpen}
                className='text-white font-light dark:bg-white w-full transition-all duration-300 rounded-md xl:text-lg shadow-md py-2 xl:py-7 px-4 text-center'
            >
                Single Player
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size={'xl'} isCentered>
                <ModalOverlay />
                <ModalContent className='pb-4 dark:bg-dark dark:border-2 dark:text-white'>
                    <ModalHeader className='text-center h-56 block text-2xl xl:text-5xl border-b'>
                        Feature Coming Soon
                    </ModalHeader>
                    <ModalBody className='mt-3'>
                        We regret to inform you that the feature you were
                        looking for is not yet ready. We apologize for any
                        trouble or inconvenience this may have caused. Our
                        development team is working diligently to finalize this
                        feature, and we anticipate it will be available in the
                        near future. In the meantime, we appreciate your
                        understanding and hope to offer you a fully functional
                        experience soon.
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            className='w-full bg-blue-600 dark:bg-blue-800 hover:bg-blue-800 dark:hover:bg-blue-600'
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
