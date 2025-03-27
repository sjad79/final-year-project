import Link from 'next/link';
import React from 'react';

//treat link as regular anchor in html
export default function DropdownLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}
