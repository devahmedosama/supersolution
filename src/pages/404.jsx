import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

const E404 = () => {
  return (
    <Layouts noFooter>
      {/* 404 */}
      <div className="mil-404-frame mil-appearance">
                
          <div className="mil-scale-frame">
              <h1 className="mil-404" data-text="404">404</h1>
          </div>

          <h5 className="mil-404-text mil-dark mil-mb-60">Oops! Something went wrong :(</h5>

          <Link href="/" className="mil-text-center mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space">
            <span>Back to homepage</span>
          </Link>

      </div>
      {/* 404 end */}
    </Layouts>
  );
};
export default E404;
