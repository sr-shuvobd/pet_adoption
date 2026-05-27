import Update from "@/components/Update";

const EditPage = async ({ params }) => {

  const { id } = await params;


   const res = await fetch(`${process.env.NEXT_PUBLICK_URL}/allpet/${id}`)
    const pet = await res.json();
    
  return (
    <Update pet={pet}/>
  );
};

export default EditPage;
