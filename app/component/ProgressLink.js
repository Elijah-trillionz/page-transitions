'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { startTransition } from "react";
import { useProgressBar } from "./ProgressBar";

const ProgressLink = ({ href, children, ...rest }) => {
  const router = useRouter();
  const progress = useProgressBar();

  const navigateToDestination = (e) => {
    e.preventDefault();
    progress.start();

    startTransition(() => {
      router.push(href);
      progress.done();
    });
  };
  return (
    <Link href={href} onClick={navigateToDestination} {...rest}>
      {children}
    </Link>
  );
};

export default ProgressLink;
