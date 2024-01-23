import supabase from "./supabase";

export async function getEstates() {
  const { data, error } = await supabase.from("Estate").select("*");
  if (error) {
    console.error(error);
    throw new Error("املاک بارگذاری نشد");
  }

  return data;
}

export async function createEstate(newEstate) {
  const { data, error } = await supabase
    .from("Estate")
    .insert([newEstate])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("ملک جدید ایجاد نشد");
  }

  return data;
}

export async function editEstate(editedEstate, id) {
  const { data, error } = await supabase
    .from("Estate")
    .update(editedEstate)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("ملک ویرایش نشد");
  }

  return data;
}

export async function deleteEstate(id) {
  const { data, error } = await supabase.from("Estate").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("ملک حذف نشد");
  }

  console.log(data);
  return data;
}
