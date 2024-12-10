import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

export default function ImageCard({ item }: { item: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Card
        isPressable
        shadow="sm"
        className="w-36 sm:w-48 md:w-56 h-32 sm:h-40 md:h-48"
        onPress={() => onOpen()}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            alt={item}
            className="w-full object-cover h-24 sm:h-32 md:h-40"
            radius="lg"
            shadow="sm"
            src={"https://vv.cdn.goforcex.top/webp/" + item}
            width="100%"
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b className="overflow-ellipsis line-clamp-1">
            {item.split(".webp")[0]}
          </b>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} size="4xl" onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {item.split(".webp")[0]}
              </ModalHeader>
              <ModalBody>
                <Image
                  alt={item}
                  className="w-auto object-cover"
                  shadow="sm"
                  src={"https://vv.cdn.goforcex.top/webp/" + item}
                  width="100%"
                />
              </ModalBody>
              <ModalFooter className="justify-between">
                <Button color="warning" variant="flat" onPress={onClose}>
                  关闭
                </Button>
                <Button
                  color="primary"
                  variant="flat"
                  onPress={() => {
                    window.open("https://vv.cdn.goforcex.top/webp/" + item);
                  }}
                >
                  下载
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
