import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {useMemo} from "react";
import {visualSlice} from "@/store/visual/visual.slice";

const rootAction = {
    ...visualSlice.actions,
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
}