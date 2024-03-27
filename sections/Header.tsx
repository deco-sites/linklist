import { Logo } from "./types.ts";
import Image from "apps/website/components/Image.tsx";
import { JSX } from "preact";

export interface Props {
  /** @description 104px x 104px image recommended */
  logo?: Logo;
  /** @format textarea */
  title?: string;
  /** @format textarea */
  description?: string;
}

export default function Header(
  {
    logo = {
      img: "http://localhost:8000/live/invoke/website/loaders/image.ts?src=https%3A%2F%2Fozksgdmyrqcxcwhnbepg.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fassets%2F4959%2F5be8c963-6e1b-477b-a2dc-6d769ca75baf&fit=cover&width=208&height=208",
      link: "/",
    },
    title = "Click here to tweak this text however you want.",
    description = "This text is entirely editable, tailor it freely.",
  }: Props,
): JSX.Element | null {
  const logoImg = (
    <Image
      decoding="async"
      src={logo?.img || ""}
      alt={logo?.alt}
      width={logo?.width || 104}
      height={logo?.height || 104}
    />
  );

  const maybeLink = logo?.link
    ? (
      <a href={logo.link} target="_blank">
        {logoImg}
      </a>
    )
    : logo;

  return (
    <header class="flex flex-col gap-4 items-center justify-center max-w-[746px] mx-auto pt-10 w-full lg:px-0 px-6">
      {logo?.img && <div class="p-4 rounded-full">{maybeLink}</div>}
      {title && (
        <h1 class="lg:text-6xl text-4xl text-center">
          {title}
        </h1>
      )}
      {description && <p>{description}</p>}
    </header>
  );
}
