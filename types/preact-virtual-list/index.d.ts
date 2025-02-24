// Type definitions for preact-virtual-list 0.3
// Project: https://github.com/developit/preact-virtual-list
// Definitions by: Reece Berens <https://github.com/reece-berens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Component, h } from "preact";

interface Props {
    className?: string | undefined;
    data: any[];
    overscanCount?: number | undefined;
    renderRow: (row: any) => any;
    rowHeight: number;
    sync?: boolean | undefined;
    [otherProps: string]: any;
}

declare class VirtualList extends Component<Props> {
    constructor(props: Props);
    render(): h.JSX.Element;
}

export = VirtualList;
