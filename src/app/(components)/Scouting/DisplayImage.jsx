const DisplayImage = ({ image }) => {

  if (!image) return <div>No image to display</div>;
// renders the current image
  return (
    <div>
      <img src={image.imageURL} alt="Displayed" style={{ maxWidth: '1200px', maxHeight: '800px' }} />
    </div>
  );
};

export default DisplayImage;
