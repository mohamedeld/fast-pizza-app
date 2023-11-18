import { useFetcher } from "react-router-dom";
import Button from "../../UI/Button";

export default function UpdateItem({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make a priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  console.log("first");
  return null;
}
