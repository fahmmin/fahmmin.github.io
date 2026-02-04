"use client";

import { PortableText as BasePortableText } from "@portabletext/react";
import type { PortableTextBlock, PortableTextBlockComponent } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

interface SanityImage {
  asset: { _ref: string };
  alt?: string;
  caption?: string;
}

interface CodeValue {
  language?: string;
  code?: string;
}

const blockParagraph: PortableTextBlockComponent = (props) => (
  <p className="text-sm text-foreground leading-relaxed mb-3">{props.children}</p>
);

const blockH2: PortableTextBlockComponent = (props) => (
  <h2 className="text-lg font-playfair font-medium mt-6 mb-2 text-foreground">
    {props.children}
  </h2>
);

const blockH3: PortableTextBlockComponent = (props) => (
  <h3 className="text-base font-playfair font-medium mt-4 mb-2 text-foreground">
    {props.children}
  </h3>
);

const components = {
  block: {
    normal: blockParagraph,
    h2: blockH2,
    h3: blockH3,
  },
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset?._ref) return null;
      const src = urlFor(value).width(800).height(450).fit("max").url();
      return (
        <figure className="my-4">
          <div className="relative w-full aspect-video rounded overflow-hidden bg-secondary">
            <Image
              src={src}
              alt={value.alt || ""}
              width={800}
              height={450}
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-xs text-muted-foreground mt-1 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }: { value: CodeValue }) => (
      <pre className="my-3 p-4 rounded bg-secondary border border-border overflow-x-auto text-sm font-mono text-foreground">
        <code>{value?.code || ""}</code>
      </pre>
    ),
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value?: { href?: string } }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground underline underline-offset-2 hover:no-underline"
      >
        {children}
      </a>
    ),
  },
};

interface PortableTextProps {
  value: PortableTextBlock[] | null | undefined;
}

export function PortableText({ value }: PortableTextProps) {
  if (!value?.length) return null;
  return <BasePortableText value={value} components={components} />;
}
