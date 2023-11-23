import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Partner from "../components/Partner";
import { DecodedTokenContext } from "../components/PrivateRoute";
import { AllUserContext } from "../components/AdminRoute";
import { getUserByUniqueId } from "../modules/fetch";
import TableAllUser from '../components/AdminPage/TableAllUser';

function AdminPage() {

  return (
    <div className="w-screen">
      <div className="my-10 mx-10">
        <div className="flex justify-center">
          <p className="text-3xl mb-10 font-bold  ">Administrator</p>
        </div>

        <TableAllUser />

      </div>

      <Partner />

    </div>
  );
}

export default AdminPage;
