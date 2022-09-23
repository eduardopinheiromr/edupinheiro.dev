interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}
type IconType = (props: IconBaseProps) => JSX.Element;

type Topic = {
  icon: IconType;
  path: string;
  label: string;
};
