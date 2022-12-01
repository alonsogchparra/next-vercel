import { CSSProperties, FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

interface Props {
  href: string;
  text: string;
}

export const ActiveLink: FC<Props> = ({ href, text }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} legacyBehavior>
      <a
        style={{
          color: asPath === href ? style.color : undefined,
          textDecoration: asPath === href ? style.textDecoration : undefined,
        }}
      >
        {text}
      </a>
    </Link>
  );
};
