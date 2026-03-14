interface SectionDividerProps {
  direction?: "top" | "bottom";
  className?: string;
}

export function SectionDivider({ direction = "top", className = "" }: SectionDividerProps) {
  if (direction === "top") {
    return (
      <div className={`w-full overflow-hidden leading-[0] ${className}`}>
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-[60px] block"
        >
          <polygon
            points="0,60 1200,0 1200,60"
            fill="#0a0a0a"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="w-full h-[60px] block"
      >
        <polygon
          points="0,0 1200,0 0,60"
          fill="#0a0a0a"
        />
      </svg>
    </div>
  );
}
