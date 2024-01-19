import supabase from "./supabase";

export async function getSaleContracts() {
  const { data, error } = await supabase
    .from("saleContractsWithDetails")
    .select("*");
  if (error) {
    console.error(error);
    throw new Error("قراردادهای فروش بارگذاری نشد");
  }

  return data;
}

export async function createSaleContracts(newSaleContracts) {
  const { data, error } = await supabase
    .from("saleContractsWithDetails")
    .insert([newSaleContracts])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("قرارداد جدید ایجاد نشد");
  }

  return data;
}

export async function editSaleContracts(editedSaleContracts, id) {
  const { data, error } = await supabase
    .from("saleContractsWithDetails")
    .update(editedSaleContracts)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("قرارداد ویرایش نشد");
  }

  return data;
}

export async function deleteSaleContracts(id) {
  const { data, error } = await supabase
    .from("saleContractsWithDetails")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("قرارداد حذف نشد");
  }

  return data;
}
