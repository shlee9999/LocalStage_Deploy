import { useState } from 'react';
import * as S from './styles';
import { StarIcon } from '@/components/StarIcon';
interface StarIconContainerProps {
  updateStarRating?: (count: number) => void;
}

const starsArray = Array.from({ length: 5 });

export const StarIconContainer = ({ updateStarRating }: StarIconContainerProps) => {
  const [checkedStars, setCheckedStars] = useState(-1);

  const onClick = (index: number) => () => {
    setCheckedStars(index);
    updateStarRating?.(index + 1);
  };

  return (
    <S.StarIconContainer>
      {starsArray.map((_, index) => (
        <StarIcon key={index} isChecked={index <= checkedStars} onClick={onClick(index)} />
      ))}
    </S.StarIconContainer>
  );
};
