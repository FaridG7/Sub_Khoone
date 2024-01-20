import supabase from "./supabase";

export async function getManger() {
  const { data, error } = await supabase.from("managers").select("*").single();
  if (error) {
    console.error(error);
    throw new Error("مدیر بارگذاری نشد");
  }

  return data;
}
