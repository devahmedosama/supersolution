const PageBanner = ({ pageImage, pageTitle }) => {
  return (
    <>
      {/* banner */}
      <div className="mil-small-banner">
          <div className="mil-image-frame">
              {/* banner image */}
              <img src={pageImage} alt={pageTitle} className="mil-scale-img" data-value-1=".5" data-value-2="1.2" />
              <div className="mil-gradient-overlay-reverse"></div>
          </div>
      </div>
      <div className="mil-spacer"></div>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
