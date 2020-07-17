import { useState, useEffect } from 'react';
import { createStage } from '../gameHelpers';
export const useStage = () => {
  const [stage, setStage] = useState(createStage());
  useEffect(() => {
    const updateStage = (prevStage) => {
      //first flash the stage
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
      );
    };

    setStage((prev) => updateStage(prev));
  }, []);
  return [stage, setStage];
};
