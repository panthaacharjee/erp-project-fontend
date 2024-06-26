import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { labourPdf, meterialPdf } from "../../../redux/actions/pdfAction";
import Loader from "../../../components/Loading";
import { toast } from "react-toastify";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";

const LabourGenerator = ({ setShowLExpenses, id }) => {
  // const [ait, setAit] = useState(0);
  // const [vat, setVat] = useState(0);
  const dispatch = useDispatch();
  const { success, loading, filename2 } = useSelector((state) => state.pdf);
  // const { filename } = useSelector((state) => state.pdf);
  const [period, setPeriod] = useState("");
  const [timeError, setTimeError] = useState();
  const genratePdf = () => {
    if (period === "") {
      setTimeError("Please Select a time period");
    } else {
      let data = {
        // ait: ait,
        // vat: vat,
        date: period,
      };
      dispatch(labourPdf(data, id));
    }
  };

  // const savePdf = () => {
  //   const aTag = document.createElement("a");
  //   aTag.href = filename;
  //   aTag.setAttribute("download", filename);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  //   console.log(aTag, filename);
  // };

  useEffect(() => {
    if (success) {
      toast(success);
    }
    // dispatch(getMeterialPdf());
  }, [success]);
  return (
    <div className="text-white w-11/12 md:w-5/12 px-5 py-5 bg-slate-500">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-2">Labour Expenses List</h2>
        <p
          className="cursor-pointer font-semibold"
          onClick={() => {
            setShowLExpenses(false);
          }}
        >
          Close
        </p>
      </div>
      <div className="mt-5">
        <p>Select a time period (Selected - Now Date)</p>
        <input
          type="date"
          className="w-full py-2 text-white rounded-md px-5 mt-3"
          onChange={(e) => {
            setPeriod(e.target.value);
            setTimeError();
          }}
          required
        />
        {timeError && (
          <p className=" text-red-300 mt-1 text-xs font-medium">{timeError}</p>
        )}
      </div>
      {/* <div className="mt-3">
        <p className="font-poppins font-light">
          AIT [NB: Dont enter '%' charachter]
        </p>
        <input
          type="enter ait percentage"
          className="w-full h-10 mt-1 rounded-md text-black px-2"
          onChange={(e) => setAit(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <p>VAT [NB: Dont enter '%' charachter]</p>
        <input
          type="enter vat percentage"
          className="w-full h-10 mt-1 rounded-md text-black px-2"
          onChange={(e) => setVat(e.target.value)}
        />
      </div> */}
      {success && success ? (
        <a
          href={filename2}
          target="_blank"
          download="labour_expenses.pdf"
          className="w-full block text-center bg-slate-300 text-black font-medium font-poppins text-sm py-2 mt-5"
        >
          Download
        </a>
      ) : (
        <button
          onClick={genratePdf}
          className="w-full text-center bg-slate-300 text-black font-medium font-poppins text-sm py-2 mt-5"
        >
          {loading ? <Loader /> : "Generate PDF"}
        </button>
      )}
    </div>
  );
};

export default LabourGenerator;
