import React from "react";
import useGlobalHook from "./global-store";

import * as actions from "../actions";

const initialState = {
  counters: {
    requests: 0,
    success: 0,
    fail: 0
  },
  status: "INITIAL",
  repos: []
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
