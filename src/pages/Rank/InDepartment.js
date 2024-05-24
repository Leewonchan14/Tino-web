import InDepartmentRankList from "../../components/ranking/InDepartmentRankList";
import ComboBox from "../../components/common/input/ComboBox";
import {useState} from "react";
import {MAJOR} from "../../constants/Major";

export const IN_DEPARTMENT_PATH = "/rank/inDepartment";

function InDepartmentRankOption({selectMajor, onChange}) {
    return (
        <ComboBox options={MAJOR} value={selectMajor.value} onChange={onChange}
                  className={"!mx-auto !block !my-6"}
                  textClass={"!sm:text-sm"}
        />
    );
}

const InDepartment = () => {

    const [selectMajor, setSelectMajor] = useState(MAJOR[0])

    const onChange = (e) => {
        setSelectMajor(MAJOR.find((major) => major.value === e.target.value))
    }

    return (
        <>
            <InDepartmentRankOption selectMajor={selectMajor} onChange={onChange}/>
            <InDepartmentRankList selectMajor={selectMajor} />
        </>
    );
}
export default InDepartment;