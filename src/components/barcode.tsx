import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

export const Barcode = ({ code }: { code: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      JsBarcode(canvasRef.current, code, {
        format: "EAN13",
        lineColor: "#000",
        width: 2,
        height: 100,
        displayValue: true,
      });
    }
  }, [code]);

  return <canvas ref={canvasRef}></canvas>;
};
