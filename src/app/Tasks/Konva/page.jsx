'use client'
import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("./Tests"), {
  ssr: false,
});

export default function TestsPage(props) {
  return <NoSSRComponent />;
}