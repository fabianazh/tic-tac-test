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

export default function PauseModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <div onClick={onOpen} className='header__icon'>
                <BsPauseCircleFill className='' />
            </div>
            <Modal isOpen={isOpen} onClose={onClose} size={'xl'} isCentered>
                <ModalOverlay />
                <ModalContent className='pb-4 dark:bg-dark dark:border-2 dark:text-white'>
                    <ModalHeader className='text-center h-56 block text-2xl xl:text-5xl border-b'>
                        Game Paused
                    </ModalHeader>
                    <ModalBody className='mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium aliquid enim animi cum. Dolore deserunt
                        nostrum provident. Temporibus non quos molestias eius.
                        Porro, reprehenderit accusantium perferendis sunt natus
                        fuga eveniet.
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme='blue'
                            className='w-full bg-blue-600 dark:bg-blue-800 hover:bg-blue-800 dark:hover:bg-blue-600'
                            onClick={onClose}
                        >
                            Resume Game
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
