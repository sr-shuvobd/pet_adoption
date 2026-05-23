import Update from "@/components/Update";

const EditPage = async ({ params }) => {

  const { id } = await params;


   const res = await fetch(`http://localhost:5000/allpet/${id}`)
    const pet = await res.json();
    
  return (
    <Update pet={pet}/>
  );
};

export default EditPage;
