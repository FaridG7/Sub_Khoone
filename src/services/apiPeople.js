import supabase from "./supabase";

export async function getPeople() {
  const { data, error } = await supabase.from("Person").select("*");
  console.log("*******")
  console.log(data);
  if (error) {
    console.error(error);
    throw new Error("اشخاص بارگذاری نشد");
  }

  return data;
}

export async function createPerson(newPerson) {
  const { data, error } = await supabase
    .from("Person")
    .insert([newPerson])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("شخص جدید ایجاد نشد");
  }

  return data;
}

export async function editPerson(editedPerson, id) {
  const { data, error } = await supabase
    .from("Person")
    .update(editedPerson)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("شخص ویرایش نشد");
  }

  return data;
}

export async function deletePerson(id) {
  const { data, error } = await supabase.from("Person").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("شخص حذف نشد");
  }

  return data;
}
