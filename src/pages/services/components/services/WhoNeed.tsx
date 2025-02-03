interface whoNeedTypes {
    title: string;
    icon: string;
  }
  
  interface WhoNeedProps {
    whoNeed: whoNeedTypes[];
  }
  
  const WhoNeed: React.FC<WhoNeedProps> = ({ whoNeed }) => {
    return (
      <div>
        <h1 className="text-center w-full text-blue-950 text-4xl">
          Industry that need Messaging
        </h1>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 py-12">
          {whoNeed.map((data, i) => (
            <div key={i} className="bg-red-0 text-xl font-semibold text-center rounded-lg flex justify-center items-center flex-col  md:py-12">
              <img src={data.icon} alt="whoneed" className="h-28 opacity-70" />
              <h1>{data.title}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WhoNeed;