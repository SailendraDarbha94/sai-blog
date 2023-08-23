import { errorToast } from "./helpers";
import supabase from "./supabase";

export const checkAuthAndSetToken = async () => {
    const { data, error } = await supabase.auth.getSession()
    if (error) {
        errorToast("An Error has occurred while saving auth Token")
    }
    if (data) {
        localStorage.setItem("token", data.session?.access_token as string)
    }
};