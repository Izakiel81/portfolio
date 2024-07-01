import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useMemo} from "react";

export const useVisual = () => {
    const {
     activeTab,
    } = useTypedSelector(state => state.visual);
    return useMemo(() => ({ activeTab }), [activeTab]);
}