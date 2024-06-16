import { Metadata } from "next";
import Link from "next/link";
import { BiFilter } from "react-icons/bi";
import BlogHeader from "~/components/blog/blog-header";

export const metadata: Metadata = {
  title: "Ayden's Blog",
  description:
    "Developer technical Insights, My critical opinions and philosophy, cryptocurrency, and more.",
  icons: ["/favicon.ico"],
};

const sections = ["General", "Crypto", "Technology"];

export default function BlogPage() {
  return (
    <div>
      <BlogHeader />
      <div className="flex justify-center">
        <div className="mt-24 flex max-w-7xl flex-col items-center">
          <h1 className="text-center">Welcome to the Blog</h1>
          <div className="flex self-start">
            {sections.map((section) => (
              <Link href={"/"}>
                <div
                  className="relative flex w-full cursor-pointer gap-2 rounded-full px-2 text-xl text-black transition-colors hover:text-accent2"
                  // onClick={() => {}}
                >
                  <p className="text-xl">{section}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
