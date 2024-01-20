import supabase from "./supabase";

export async function getRentContracts() {
  const { data, error } = await supabase.from("rentContractsWithDetails").select("*");
  if (error) {
    console.error(error);
    throw new Error("قراردادهای اجاره‌ای بارگذاری نشد");
  }

  return data;
}

export async function createRentContracts(newRentContracts) {
  const { data, error } = await supabase
    .from("RentContract")
    .insert([newRentContracts])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("قرارداد جدید ایجاد نشد");
  }

  return data;
}

export async function editRentContracts(editedRentContracts, id) {
  const { data, error } = await supabase
    .from("RentContract")
    .update(editedRentContracts)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("قرارداد ویرایش نشد");
  }

  return data;
}

export async function deleteRentContracts(id) {
  const { data, error } = await supabase
    .from("RentContract")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("قرارداد حذف نشد");
  }

  return data;
}
