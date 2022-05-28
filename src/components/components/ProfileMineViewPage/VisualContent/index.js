import Card from '../Card';

const VisualContent = () => {
  return (
    <div className="mt-5 pt-4">
      <div className="d-flex align-items-center gap-4">
        <h3 className="m-0">Visual Content *</h3>
      </div>

      <Card className="mt-4 p-5 ">
        <div className="d-flex p-5 my-3 w-100 h-100 flex-column justify-content-center align-items-center">
          <i
            className="fa fa-picture-o fa-4x text-primary-dark"
            aria-hidden="true"
          ></i>
          <h4 className="mt-3">Upload Your Visual Contents</h4>
        </div>
      </Card>
    </div>
  );
};

export default VisualContent;
