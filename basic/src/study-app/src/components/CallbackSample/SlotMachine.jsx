import React, {useState, useCallback, memo} from "react";

// Button子コンポーネント
const Button = memo((props) => {
    return(
        <button type="button" onClick={props.handleClick}>
            {props.value}
        </button>
    );
});

// 数が一致しているかを返却するコンポーネント
const HitResult = memo((props) => {
    console.log(props.leftNumber, props.centerNumber, props.rightNumber);
    // const result = props.func(props.leftNumber, props.centerNumber, props.rightNumber);
    const result = props.func;
    console.log(result);
    return (
        <div>
            {result ? <div>当たり</div> : <div>はずれ</div>}
        </div>
    );
});

const getNumber = () => {
    let num = Math.floor(Math.random() * 10);
    return num;
};

const getHitJudgement = (leftNumber, centerNumber, rightNumber) => {
    return leftNumber === centerNumber && centerNumber === rightNumber;
};

const SlotMachine = () => {
    const [leftNumber, setLeftNumber] = useState(getNumber);
    const [centerNumber, setCenterNumber] = useState(getNumber);
    const [rightNumber, setRightNumber] = useState(getNumber);
    const [hit, setHit] = useState(false);

    const stopLeftNumber = useCallback(() => setLeftNumber(getNumber), [leftNumber]);
    const stopCenterNumber = useCallback(() => setCenterNumber(getNumber), [centerNumber]);
    const stopRightNumber = useCallback(() => setRightNumber(getNumber), [rightNumber]);
    const judgementHit = useCallback(() => setHit(getHitJudgement(leftNumber, centerNumber, rightNumber)), [leftNumber, centerNumber, rightNumber]);

    return(
        <div>
            <Button position='left' handleClick={stopLeftNumber} value={leftNumber} />
            <Button position='center' handleClick={stopCenterNumber} value={centerNumber} />
            <Button position='right' handleClick={stopRightNumber} value={rightNumber} />
            <HitResult func={judgementHit} judgement={hit} leftNumber={leftNumber} centerNumber={centerNumber} rightNumber={rightNumber} />
        </div>
    );
};

export default SlotMachine;