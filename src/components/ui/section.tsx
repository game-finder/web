import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const sectionVariants = cva(
  "scroll-mt-lg relative py-lg flex flex-col justify-center",
  {
    variants: {
      variant: {
        default: "",
        highlight: "bg-muted/30",
      },
      height: {
        default: "",
        screen: "min-h-screen",
      },
    },
    defaultVariants: {
      variant: "default",
      height: "default",
    },
  }
);

function Section({
  variant,
  height,
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof sectionVariants>) {
  return (
    <section
      className={cn(sectionVariants({ variant, height, className }))}
      {...props}
    >
      <div className="container mx-auto flex flex-col gap-lg px-md">
        {children}
      </div>
    </section>
  );
}

const sectionHeadingVariants = cva(
  "font-heading text-center font-bold tracking-tight animate-fade-in text-balance",
  {
    variants: {
      size: {
        sm: "text-2xl sm:text-4xl",
        default: "text-4xl sm:text-6xl",
        lg: "text-6xl sm:text-8xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

function SectionHeading({
  className,
  size,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof sectionHeadingVariants>) {
  return (
    <h1
      className={cn(sectionHeadingVariants({ size, className }))}
      {...props}
    />
  );
}

function SectionDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mx-auto max-w-prose text-lg/loose text-muted-foreground text-center text-balance",
        className
      )}
      {...props}
    />
  );
}

export { Section, SectionDescription, SectionHeading };
