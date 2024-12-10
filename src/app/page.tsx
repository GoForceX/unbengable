import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { fetchImageCount } from "@/actions/metadata";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <p
            className="flex text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br
       from-orange-600 to-orange-400 dark:from-blue-300 dark:to-sky-500 break-keep"
          >
            维为表情包
            <wbr />
            集散地
          </p>
          <div className="flex flex-row gap-8">
            <Button
              as={Link}
              className="font-medium"
              href="https://vv.cdn.goforcex.top/张维为_jpg_v3.zip"
            >
              现在下载全量包！
            </Button>
            <Button
              as={Link}
              className="bg-gradient-to-tr bg-orange-500 font-medium text-white dark:text-gray-700 dark:bg-sky-400 shadow-lg"
              href="/browse"
            >
              去检索表情包列表→
            </Button>
          </div>
        </div>
        <div className="flex max-lg:w-full lg:justify-end">
          <Card shadow="sm" className="flex max-lg:w-full">
            <CardHeader className="font-bold text-sm text-zinc-700 dark:text-zinc-300 pb-1 pl-4">
              当前张数
            </CardHeader>
            <CardBody className="overflow-y-hidden pt-1">
              <p className="text-8xl font-light mr-4 max-lg:text-center">
                {fetchImageCount()}
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
