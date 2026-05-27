import Update from "@/components/Update";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const EditPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`${process.env.NEXT_PUBLICK_URL}/allpet/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const pet = await res.json();

  return <Update pet={pet} />;
};

export default EditPage;
