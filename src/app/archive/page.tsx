import { getArchive } from "~/sanity/sanity-utils";
import ArchiveContent from "./components/archive-content";
import ContactPage from "~/components/contact-page";

export const revalidate = 0;

export default async function ArchiveServer() {
  const archive = await getArchive();

  return (
    <>
      <ArchiveContent props={archive} />
      <ContactPage />
    </>
  );
}
