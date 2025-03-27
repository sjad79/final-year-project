import React from 'react';
import { toast } from 'react-hot-toast';
import WheelComponent from 'react-wheel-of-prizes';

export default function LuckyDraw() {
  const segments = [
    'Speaial Discount 10% OFF',
    'No Reward',
    'Speaial Discount 10% OFF',
    'No Reward',
    'No Reward',
    'Speaial Discount 10% OFF',
    'No Reward',
    'No Reward',
  ];
  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#FF9000',
  ];
  const onFinished = (winner) => {
    if (winner === 'Speaial Discount 10% OFF') {
      return toast.success('Won Enjoy 10% Off. Have fun.');
    } else {
      return null;
    }
  };
  return (
    <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment="won 2"
      onFinished={(winner) => onFinished(winner)}
      primaryColor="black"
      contrastColor="white"
      buttonText="Spin"
      //isOnlyOnce={false}
      size={290}
      upDuration={500}
      downDuration={100}
    />
  );
}
