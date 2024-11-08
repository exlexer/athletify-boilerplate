import type { MetaFunction } from "@remix-run/node";
import { PROTOTYPE_FEATURE } from "~/constants";

export const meta: MetaFunction = () => [
  { title: `Athletify Prototype - ${PROTOTYPE_FEATURE}` },
];

export default function Index() {
  return <div>Add Feature Here</div>;
}
