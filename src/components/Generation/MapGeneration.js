import React from "react";
import Block from "../Board/Block/Block.js";

const createMap = (score) => {

    let block_massive = [];

    score > 1 ?
        block_massive.push(<Block key={0 + "block"} hero={false} pit={false} />) :
        block_massive.push(<Block key={0 + "block"} hero={true} pit={false} />);


    for (let i = 1; i < (900 / 25) * (600 / 25); i++) {

        if (block_massive.length === 864) { break; }

        if (Math.random() > 0.5) {
            block_massive.push(<Block key={i + "block"} hero={false} pit={false} />);

            // if pit(false) and this edge of the map (right), create road down and only pit(true) block around
            //-->
            if (block_massive.length % 36 === 0) {
                for (let j = block_massive.length; j < 864; j++) {
                    if (block_massive.length % 36 === 35) {
                        block_massive.push(<Block key={(i + j) + "block"} hero={false} pit={false} />);
                    } else {
                        block_massive.push(<Block key={(i + j) + "block"} hero={false} pit={true} />);
                    }
                }
                break;
            }
            //-->

        } else {

            // if pit(true) and this is edge of the map (button), create only pit(false) block
            // if length 862 create a hard hook map for the complication
            //-->
            if (block_massive.length > 864 - 36) {
                for (let j = block_massive.length; j < 864; j++) {
                    if (block_massive.length === 862) {
                        block_massive[862 - 37] = <Block key={(865) + "block"} hero={false} pit={false} />;
                        block_massive[862 - 36] = <Block key={(866) + "block"} hero={false} pit={false} />;
                        block_massive[862 - 35] = <Block key={(867) + "block"} hero={false} pit={false} />;
                        block_massive.push(<Block key={(i + j) + "block"} hero={false} pit={true} />);
                    } else {
                        block_massive.push(<Block key={(i + j) + "block"} hero={false} pit={false} />);
                    }
                }
                break;
            }
            //-->

            for (let k = 0; k < 35; k++) {
                if (block_massive.length === 864) { break; }
                block_massive.push(<Block key={(i + k) + "block"} hero={false} pit={true} />);
            }

            if (block_massive.length === 864) { break; }

            block_massive.push(<Block key={i + 35 + "block"} hero={false} pit={false} />);

            i = i + 35;
        }
    }

    return block_massive;
}

export default createMap;