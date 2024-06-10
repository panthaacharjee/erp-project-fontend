import React, { useEffect } from "react";
import ReactTimeAgos from "../../components/ReactTimeAgos";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  clearSuccess,
  deleteDeposit,
} from "../../redux/actions/adminAction";
import FullLoading from "../../components/FullLoading";
import { toast } from "react-toastify";

const SingleDeposit = ({ val, ind }) => {
  const dispatch = useDispatch();
  const { success, error, dpdloading } = useSelector(
    (state) => state.deletepayment
  );
  //To Local String
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  useEffect(() => {
    if (success) {
      toast(success);
      dispatch(clearSuccess());
    }
    if (error) {
      toast(error);
      dispatch(clearError());
    }
  }, [success, error]);
  return (
    <tr>
          <th>{ind+1}</th>
          <td><ReactTimeAgos date={val.createdAt} /></td>
          <td>{numberWithCommas(val.amount)}</td>
          <td>{dpdloading ? (
            <p></p>
          ) : (
            <AiOutlineMinusCircle
              onClick={() => {
                dispatch(deleteDeposit(val._id));
              }}
              className="cursor-pointer"
            />
          )}</td>
      </tr>
  );
};

export default SingleDeposit;
