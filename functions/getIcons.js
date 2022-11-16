import * as Icons from "react-icons"

import { BsSlashCircleFill } from "react-icons/bs"

export default function getIconsByName(name, size = "auto") {
    let IconComponent = Icons[name];

    if (!IconComponent) {
        // Return a default one
        return <BsSlashCircleFill style={{ width: size, height: size }}/>;
    }

    return <IconComponent style={{ width: size, height: size }} />;
}