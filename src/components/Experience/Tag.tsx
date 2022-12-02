type TagProps = {
  children: React.ReactNode;
};
const Tag = ({ children }: TagProps) => {
  return (
    <div className="px-2 py-1 text-xs bg-slate-500 text-white rounded-3xl">
      {children}
    </div>
  );
};

export default Tag;
