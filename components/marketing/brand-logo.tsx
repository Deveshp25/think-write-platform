import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/content/site";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
}: {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" className={cn("inline-flex items-center", className)} aria-label={`${brand.name} home`}>
      <Image
        src={brand.logoPath}
        alt={brand.name}
        width={360}
        height={104}
        priority={priority}
        className={cn("h-auto w-44 object-contain sm:w-56", imageClassName)}
      />
    </Link>
  );
}
