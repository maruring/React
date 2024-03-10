import React, {useState, useCallback, memo} from "react";

// Button子コンポーネント
const Button = memo((props) => {
    console.log(props.position);
    return(
        <button type="button" onClick={props.handleClick}>
            {props.value}
        </button>
    );
});

// 数が一致しているかを返却するコンポーネント
const HitResult = memo((props) => {
    const isHit = props.leftNumber === props.centerNumber && props.centerNumber === props.rightNumber;
    console.log('判定');
    return (
        <div>
            {isHit ? <div>当たり</div> : <div>はずれ</div>}
        </div>
    );
});

const getNumber = () => {
    let num = Math.floor(Math.random() * 10);
    return num;
};

const SlotMachine = () => {
    const [leftNumber, setLeftNumber] = useState(getNumber);
    const [centerNumber, setCenterNumber] = useState(getNumber);
    const [rightNumber, setRightNumber] = useState(getNumber);

    const stopLeftNumber = useCallback(() => setLeftNumber(getNumber), [leftNumber]);
    const stopCenterNumber = useCallback(() => setCenterNumber(getNumber), [centerNumber]);
    const stopRightNumber = useCallback(() => setRightNumber(getNumber), [rightNumber]);

    return(
        <div>
            <Button position='left' handleClick={stopLeftNumber} value={leftNumber} />
            <Button position='center' handleClick={stopCenterNumber} value={centerNumber} />
            <Button position='right' handleClick={stopRightNumber} value={rightNumber} />
            <HitResult leftNumber={leftNumber} centerNumber={centerNumber} rightNumber={rightNumber} />
        </div>
    );
};

export default SlotMachine;