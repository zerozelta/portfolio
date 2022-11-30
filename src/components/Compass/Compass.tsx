import classNames from "classnames";
import { useEffect, useRef } from "react";
import { animated, useSpring } from '@react-spring/web';
import CompassIcon from "../../icons/CompassIcon";
import styles from "./Compass.module.scss";
import { random } from "../../lib/Utils";

type CompassProps = {

}

const Compass = ({ }: CompassProps) => {

    const degrees = useRef(90);

    const [{ rotate }, api] = useSpring(
        () => ({
            rotate: degrees.current,
            config: { mass: 50, tension: 250, friction: 100 },
        })
    )

    const SVGRef = useRef<HTMLElement>();

    useEffect(() => {
        var offset = SVGRef.current!.getBoundingClientRect();
        var center_x = (offset.left) + (offset.width / 2);
        var center_y = (offset.top) + (offset.height / 2);
        window.document.body.addEventListener('mousemove', (e) => {
            if (SVGRef.current) {
                var mouse_x = e.pageX; var mouse_y = e.pageY;
                var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
                degrees.current = (radians * (180 / Math.PI) * -1) + 180;
                api({ rotate: degrees.current });
            }
        }, { passive: true });

        setInterval(() => {
            api({ rotate: degrees.current + random(-2, 2) });
        }, 2000);

    }, []);

    return (
        <div className={classNames(styles.root, ' text-slate-200')}>
            <animated.div style={{ rotate }} >
                <CompassIcon ref={SVGRef} />
            </animated.div>
        </div>
    );
}

export default Compass;