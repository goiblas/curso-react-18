import useWindowSize from "./useWindowSize";
import useNoticeBeforeClose from "./useNoticeBeforeClose";

export default function Demo() {
    const { width, height } = useWindowSize();
    useNoticeBeforeClose();

    return (
        <div>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    );
}