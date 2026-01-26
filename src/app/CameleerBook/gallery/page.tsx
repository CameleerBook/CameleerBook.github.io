import { GalleryPage } from "@/utils/pages";
import { redirect } from "next/navigation";

export default function CameleerBookGallery() {
    redirect(GalleryPage.address)
}