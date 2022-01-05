import React from "react";

export type LoadingType = "default" | "primary";

interface LoadingProps {
  type: LoadingType;
}

export const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="list-item">
      <input type="text" readOnly={true} />
    </div>
  );
};
