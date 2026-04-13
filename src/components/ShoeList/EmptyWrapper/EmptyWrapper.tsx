import {
  EmptyStateWrapper,
  IconCircle,
  Title,
  Subtitle,
} from "./EmptyWrapper.style";

export const EmptyWrapper: React.FC = () => {
  return (
    <EmptyStateWrapper>
      <IconCircle>👟</IconCircle>
      <Title>Brak produktów spełniających wybrane kryteria</Title>
      <Subtitle>
        Niestety nie znaleźliśmy tego, czego szukasz. Spróbuj zmienić filtry lub
        wpisać inną frazę.
      </Subtitle>
    </EmptyStateWrapper>
  );
};
