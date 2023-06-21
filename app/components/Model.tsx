interface ModelProps {
    modelOpen: boolean;
    setModelOpen: (open:boolean) => boolean | void;
    children: React.ReactNode;
  }
  
  const Model: React.FC<ModelProps> = ({ modelOpen, setModelOpen, children }) => {
    return (
      <div className={`model ${modelOpen ? 'model-open' : ''}`}>
        <div className='model-box bg-slate-500 p-3 w-96 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <label onClick={() => setModelOpen(false)} className='btn btn-sm btn-circle absolute right-2 top-2'>
            X
          </label>
          {children}
        </div>
      </div>
    );
  };
  
  export default Model;
  