import Child from "@/components/childParent/Child";
import Parent from "@/components/childParent/Parent";
import React from "react";

const ChildrenPropExample = () => {
    return (
        <div>
            <Parent>
                <Child />
            </Parent>
        </div>
    );
};

export default ChildrenPropExample;
