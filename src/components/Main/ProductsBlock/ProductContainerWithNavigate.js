import {useNavigate} from "react-router-dom";
import React from "react";

export const ProductContainerWithNavigate = Component => {
    const HOC = props => {
        const navigate = useNavigate();
        const openProduct = id => {
            return navigate(`/product/${id}`);
        }

        return <Component {...props} openProduct={openProduct}/>
    }
    return HOC
}
