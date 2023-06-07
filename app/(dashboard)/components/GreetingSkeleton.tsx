import Card from "@/components/Card";

export const GreetingsSkeleton = () => {
  return (
    <Card className="">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-8 py-1">
          <div className="h-6 bg-gray-400 rounded" />
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-6 bg-gray-400 rounded col-span-2"></div>
              <div className="h-6 bg-gray-400 rounded col-span-1"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};
