interface TaggedButtonProps {
  label: string;
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}