import { Card, CardBody, CardHeader } from "@nextui-org/card";

export default function Home() {
  return (
    <div className="grid-cols-2">
      <Card shadow="sm" className="flex">
        <CardHeader className="font-bold text-zinc-700 dark:text-zinc-300">
          当前张数
        </CardHeader>
        <CardBody>
          <p className="text-6xl font-light">114</p>
        </CardBody>
      </Card>
    </div>
  );
}
