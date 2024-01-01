import { cn } from '~/lib/utils';

type MaxWidthWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export const MaxWidthWrapper = (props: MaxWidthWrapperProps) => {
  const { children, className } = props;

  return (
    <div
      {...props}
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className,
      )}
    >
      {children}
    </div>
  );
};
