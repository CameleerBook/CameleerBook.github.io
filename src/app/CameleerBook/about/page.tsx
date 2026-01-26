import { AboutPage } from "@/utils/pages";
import { redirect } from "next/navigation";

export default function CameleerBookAbout() {
    redirect(AboutPage.address)
}