import { Spinner } from "@heroui/react";

const loading = () => {
  return (
    <div className="flex items-center gap-4">
      <Spinner />
    </div>
  );
};

export default loading;
