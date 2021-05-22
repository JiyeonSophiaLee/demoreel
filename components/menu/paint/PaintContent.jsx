import { paintImages } from "../../../public/assets/js/images.js";
import useImageContent from "../../../hooks/useImageContent.jsx";

function PaintContent() {
  const loadingImages = useImageContent(paintImages);

  return <>{loadingImages}</>;
}

export default PaintContent;
