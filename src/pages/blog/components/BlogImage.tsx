const BlogImage = ({ image }: { image: string | undefined }) => {
  return (
    <>
      <div className="flex items-start gap-2 ps-4 md:ps-0 ">
        <div className="h-4 aspect-square bg-amber-500 border border-black/5  rounded-full" />
        <div className="h-4 aspect-square bg-amber-500 border border-black/5  rounded-full" />
        <div className="h-4 aspect-square bg-amber-500 border border-black/5  rounded-full" />
      </div>
      <div className=" rounded-lg first-letter:p-4 mx-auto   ">
        <img
          loading="lazy"
          src={image}
          alt="BlogImage"
          className="w-full md:h-[28rem] h-full object-cover  "
        />
      </div>
    </>
  );
};

export default BlogImage;
