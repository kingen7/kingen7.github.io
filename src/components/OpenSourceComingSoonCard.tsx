export const OpenSourceComingSoonCard = () => {
  return (
    <div className="flex flex-row items-stretch h-28 bg-card border border-dashed border-border/80 rounded-xl p-1.5 gap-2 opacity-70">
      <div className="flex flex-row items-stretch w-full">
        {/* Square image panel */}
        <div className="shrink-0 w-24 self-stretch flex items-center justify-center border-2 border-border/60 rounded-xl p-2 sm:p-2.5 overflow-hidden">
          <span className="text-sm  text-muted-foreground text-center px-2 leading-relaxed">
            敬请期待
          </span>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-between flex-1 min-w-0 p-1.5 pl-4">
          <div className="flex items-start justify-between gap-2">
            <span className="text-lg font-light tracking-tight text-foreground leading-tight">
              仓库待定
            </span>
          </div>
          <p className="text-sm text-muted-foreground font-light line-clamp-2 leading-snug">
            正在探索新的仓库，为后续开源贡献做准备。
          </p>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[12px]  text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded-sm border border-border/50">
              暂未公开
            </span>
            <span className="w-px h-2.5 bg-border/60" />
            <span className="flex items-center gap-1 text-[12px]  text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded-sm border border-border/50">
              统计待更新
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OpenSourceComingSoonCardWide = () => {
  return (
    <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card border border-dashed border-border/80 p-4 sm:p-5 rounded-xl w-full overflow-hidden opacity-70">
      <div className="flex flex-col gap-1 min-w-0 flex-1">
        <span className="text-lg sm:text-xl font-light tracking-tight text-foreground">
          更多开源贡献，敬请期待
        </span>
        <p className="text-sm font-light leading-relaxed text-muted-foreground line-clamp-2">
          正在探索新的开源仓库，并准备提交新的拉取请求。
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-2 mt-2 sm:mt-0">
        {["待提交", "待审核"].map((label) => (
          <span
            key={label}
            className="flex items-center gap-1 text-[12px]  text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded-sm border border-border/50"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};
