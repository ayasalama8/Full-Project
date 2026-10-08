export default function ProductImages({product}) {
  return (
    <div className="imgs-item">
      <div className="big-img">
        <img src={product.images[0]} alt={product.title} id="big-img" />
      </div>

      <div className="sm-img">
        {product.images.map((img, index) => (
          <div className="img-div-sm" key={index}>
            <img
              src={img}
              alt={product.title}
              onClick={() => {
                document.getElementById("big-img").src = img;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
