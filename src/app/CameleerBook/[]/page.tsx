import { HomePage } from "@/utils/pages";
import { redirect } from "next/navigation";

export default function CameleerBookHome() {
    redirect(HomePage.address)
}