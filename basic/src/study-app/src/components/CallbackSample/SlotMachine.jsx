import React, {useState, useCallback, memo} from "react";

const Button = memo((props) => {
    console.log(props.position);
    return(
        <button type="button" onClick={props.handleClick}>
            {props.value}
        </button>
    );
});

const getNumber = () => {
    let num = Math.floor(Math.random() * 10) + 1;
    return num;
}

const judgement = (leftNumber, centerNumber, rightNumber) => {
    const isEqual = leftNumber == centerNumber == rightNumber;
    return isEqual;
};

const JudgementResult = (props) => {
    return (props.isEqual ?
        <div>あたり</div> :
        <div>はずれ</div>
    );
};

const SlotMachine = () => {
    const [leftNumber, setLeftNumber] = useState(getNumber);
    const [centerNumber, setCenterNumber] = useState(getNumber);
    const [rightNumber, setRightNumber] = useState(getNumber);
    const [equal, setEqual] =useState(false);

    const stopLeftNumber = useCallback(() => setLeftNumber(getNumber), [leftNumber]);
    const stopCenterNumber = useCallback(() => setCenterNumber(getNumber), [centerNumber]);
    const stopRightNumber = useCallback(() => setRightNumber(getNumber), [rightNumber]);
    const result = useCallback(() => setEqual(), [leftNumber, centerNumber, rightNumber]);

    return(
        <div>
            <Button position='left' handleClick={stopLeftNumber} value={leftNumber} />
            <Button position='center' handleClick={stopCenterNumber} value={centerNumber} />
            <Button position='right' handleClick={stopRightNumber} value={rightNumber} />
        </div>
    );
};

export default SlotMachine;