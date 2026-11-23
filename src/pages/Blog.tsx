import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blog";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "@/components/helpers/FadeIn";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 pt-6 pb-8 sm:pt-12 sm:pb-12 space-y-6">
      <FadeIn yOffset={10} duration={0.4}>
        <button
          onClick={() => navigate("/")}
          className="flex w-fit items-center gap-3 text-md font-light tracking-tight text-muted-foreground cursor-pointer duration-200 hover:text-foreground"
        >
          <ChevronLeft size={20} strokeWidth={2.25} /> 返回首页
        </button>
      </FadeIn>
      <FadeIn
        delay={0.1}
        yOffset={15}
        duration={0.5}
        className="flex flex-col gap-2"
      >
        <h1 className="text-2xl font-light tracking-tight sm:text-3xl">
          全部博客
        </h1>
        <p className="text-muted-foreground font-light text-lg">
          关于设计、开发及相关话题的思考、记录与探索。
        </p>
      </FadeIn>
      <div className="flex flex-col gap-4 mt-6">
        {blogs.map((blog, idx) => (
          <FadeIn key={blog.title} delay={0.15 + idx * 0.05} yOffset={20}>
            <BlogCard {...blog} />
          </FadeIn>
        ))}
      </div>
    </main>
  );
};

export default Blog;
